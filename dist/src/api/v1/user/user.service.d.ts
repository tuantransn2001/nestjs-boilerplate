import { IUser, UserModel } from '../database/knex/models/user.model';
import { LoginDto } from '../auth/dto/input/loginDto';
import { RegisterDto } from '../auth/dto/input/registerDto';
import { Knex } from 'nestjs-knex';
export declare class UserService {
    private readonly knex;
    constructor(knex: Knex);
    findUniq(id: string): Promise<UserModel | undefined>;
    findByPhone(phone: string): Promise<UserModel | undefined>;
    getByPhoneOrEmail(phone?: string, email?: string): Promise<UserModel[] | undefined[]>;
    getCurrentLogin(loginDto: LoginDto): Promise<IUser | undefined>;
    insertOne(user: RegisterDto): Promise<any>;
    searchListUser({ ids, }: {
        ids: {
            [k: string]: string[];
        };
    }): Promise<any>;
    searchUserByName(payload: {
        limit: number;
        offset: number;
        idsToSkip: number;
        name?: string;
    }): Promise<{
        count: number;
        items: {}[];
    }>;
}
