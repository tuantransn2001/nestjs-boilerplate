import { Knex } from 'nestjs-knex';
import { UserPost } from '../database/knex/models/userPost';
import { CreatePostDto } from './dto/input/createPostDto';
import { DeletePostDto } from './dto/input/deletePostDto';
import { LikePostDto } from './dto/input/likePostDto';
import { UserService } from '../user/user.service';
export declare class PostService {
    private readonly knex;
    private readonly userService;
    constructor(knex: Knex, userService: UserService);
    findUniq(id: string): Promise<UserPost | undefined>;
    findPosts(payload: {
        limit: number;
        offset: number;
        idsToSkip: number;
        search?: Record<string, string | number>;
    }): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    createPost(payload: CreatePostDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    updatePost(): Promise<void>;
    deletePost(payload: DeletePostDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils").HttpException;
    }>;
    likePost(payload: LikePostDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils").HttpException;
    }>;
}
