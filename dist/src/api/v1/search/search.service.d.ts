import { Knex } from 'nestjs-knex';
import { CreateUserSearchHistoryDto } from './dto/createUserSearchHistory';
import { DeleteUserSearchHistoryDto } from './dto/deleteUserSearchHistory';
import { UserSearchHistory } from '../database/knex/models/userSearchHistory.model';
import { UserService } from '../user/user.service';
export declare class SearchService {
    private readonly knex;
    private readonly userService;
    constructor(knex: Knex, userService: UserService);
    findUniq(id: string): Promise<UserSearchHistory | undefined>;
    getUserSearchHistories(payload: {
        userId: string;
        offset: number;
        limit: number;
    }): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils").HttpException;
    }>;
    createUserSearchHistory(payload: CreateUserSearchHistoryDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils").HttpException;
    }>;
    deleteUserSearchHistory(payload: DeleteUserSearchHistoryDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils").HttpException;
    }>;
}
