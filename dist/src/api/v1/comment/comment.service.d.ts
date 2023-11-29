import { Knex } from 'nestjs-knex';
import { PostService } from '../post/post.service';
import { AddPostCommentDto } from './dto/addPostCommentDto';
import { PostComment } from '../database/knex/models/postComment';
import { DeletePostCommentDto } from './dto/deletePostCommentDto';
import { LikePostCommentDto } from './dto/likePostCommentDto';
import { UserService } from '../user/user.service';
export declare class CommentService {
    private readonly knex;
    private readonly postService;
    private readonly userService;
    constructor(knex: Knex, postService: PostService, userService: UserService);
    getAllPostComments(payload: {
        postId: string;
        limit: number;
        offset: number;
    }): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils").HttpException;
    }>;
    addPostComment(payload: AddPostCommentDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils").HttpException;
    }>;
    findUniq(id: string): Promise<PostComment | undefined>;
    deletePostComment(payload: DeletePostCommentDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils").HttpException;
    }>;
    likePostComment(payload: LikePostCommentDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils").HttpException;
    }>;
    updatePostComment(): Promise<void>;
}
