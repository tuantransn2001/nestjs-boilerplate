import { SearchService } from './search.service';
import { GetUserSearchHistoriesDto } from './dto/getUserSearchHistoriesDto';
import { CreateUserSearchHistoryDto } from './dto/createUserSearchHistory';
import { DeleteUserSearchHistoryDto } from './dto/deleteUserSearchHistory';
import { PaginationDtoOutput } from '../common/dto/output/paginationDto';
export declare class SearchController {
    private readonly searchService;
    constructor(searchService: SearchService);
    getUserSearchHistories(paginationDto: PaginationDtoOutput, getUserSearchHistoriesDto: GetUserSearchHistoriesDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils").HttpException;
    }>;
    createUserSearchHistory(createUserSearchHistoryDto: CreateUserSearchHistoryDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils").HttpException;
    }>;
    deleteUserSearchHistory(deleteUserSearchHistoryDto: DeleteUserSearchHistoryDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils").HttpException;
    }>;
}
