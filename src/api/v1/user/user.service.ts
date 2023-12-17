import { Injectable } from '@nestjs/common';
import { User } from '../database/knex/models/user.model';
import { LoginDto } from '../auth/dto/input/loginDto';
import { RegisterDto } from '../auth/dto/input/registerDto';
import { v4 as uuidv4 } from 'uuid';
import { reduce as asyncReduce, each as asyncForEach } from 'awaity';
import { getCurrentTime, isEmpty } from '../common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { ModelName } from '../common/enums/common';
import * as bcrypt from 'bcrypt';
import { UserStatus, UserType } from './enum';

@Injectable()
export class UserService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  public async findUniq(id: string): Promise<User | undefined> {
    const foundUser = await User.query()
      .findOne({ id, is_deleted: false })
      .first()
      .returning('*');
    return foundUser ? foundUser : undefined;
  }
  public async getByPhoneOrEmail(
    phone?: string,
    email?: string,
  ): Promise<User[] | undefined[]> {
    const condition = {
      ...(phone ? { phone } : {}),
      ...(email ? { email } : {}),
    };

    const foundUsers: User[] = await asyncReduce(
      Object.entries(condition),
      async (r: User[], [k, v]) => {
        const foundUser = await User.query()
          .findOne({ is_deleted: false, ...{ [k]: v } })
          .first();

        const isUserExist = (): boolean => foundUser !== undefined;
        const isSameUser = (): boolean =>
          r.findIndex((u: User) => u.id === foundUser.id) !== -1;

        if (isUserExist() && !isSameUser()) r.push(foundUser);

        return r;
      },
      [],
    );
    return foundUsers;
  }
  public async getCurrentLogin(loginDto: LoginDto): Promise<User | undefined> {
    const foundUser = await User.query()
      .findOne({ is_deleted: false, ...loginDto })
      .first();
    return foundUser;
  }
  public async insertOne(user: RegisterDto) {
    const SALT = 10;
    const hash = bcrypt.hashSync(user.password, SALT);

    const createdUser = await this.knex
      .table(ModelName.USER)
      .insert({
        id: uuidv4(),
        email: user.email,
        phone: user.phone,
        password: hash,
        first_name: user.first_name ? user.first_name : '',
        last_name: user.last_name ? user.last_name : '',
        middle_name: user.middle_name ? user.middle_name : '',
        type: user.type ? user.type : UserType.USER,
        status: user.status ? user.status : UserStatus.OFFLINE,
        search_name:
          user.last_name + ' ' + user.middle_name + ' ' + user.first_name,
        is_active: true,
        is_reported: false,
        is_blocked: false,
        createdAt: getCurrentTime(),
      })
      .returning('*');

    return createdUser[0];
  }
  public async searchListUser({
    ids,
  }: {
    ids: {
      [k: string]: string[];
    };
  }) {
    const base: any = Object.entries(UserType).reduce((res, [k]) => {
      res[k.toLocaleLowerCase()] = [];
      return res;
    }, {});

    const entry = Object.entries(ids);

    const source = entry
      .map(([type, ids]) => ids.map((id) => ({ type, id })))
      .flat(1);

    await asyncForEach(source, async ({ type, id }) => {
      const foundUser = await this.findUniq(id);

      if (foundUser) base[type].push(foundUser.toDto());
      else {
        base[type].push({ id });
      }
    });

    return base;
  }
  public async searchUserByName(payload: {
    limit: number;
    offset: number;
    idsToSkip: number;
    name?: string;
  }) {
    if (isEmpty(payload.name))
      return {
        count: 0,
        items: [],
      };

    const foundUsers = await User.query()
      .where('first_name', 'like', `%${payload.name}%`)
      .andWhere('is_deleted', false)
      .offset(payload.offset)
      .limit(payload.limit);

    return {
      count: foundUsers?.length,
      items: foundUsers.map((u) => u.toDto()),
    };
  }
}