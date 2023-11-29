import { User } from '../database/knex/models/user.model';
import { LoginDto } from '../auth/dto/input/loginDto';
import { RegisterDto } from '../auth/dto/input/registerDto';
import { Knex } from 'nestjs-knex';
import { UserStatus, UserType } from './enum';
export declare class UserService {
    private readonly knex;
    constructor(knex: Knex);
    findUniq(id: string): Promise<User | undefined>;
    getByPhoneOrEmail(phone?: string, email?: string): Promise<User[] | undefined[]>;
    getCurrentLogin(loginDto: LoginDto): Promise<User | undefined>;
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
        items: {
            id: string;
            email: string;
            phone: string;
            status: UserStatus;
            first_name: string;
            last_name: string;
            middle_name: string;
            fullName: string;
            type: UserType;
            is_active: boolean;
            last_active_at: Date;
            createdAt: Date;
            avatar: string;
        }[];
    }>;
}
