import { CommentService } from './comment.service';
import { GetAllPostCommentsDto } from './dto/getAllPostCommentsDto';
import { PaginationDtoOutput } from '../common/dto/output/paginationDto';
import { AddPostCommentDto } from './dto/addPostCommentDto';
import { DeletePostCommentDto } from './dto/deletePostCommentDto';
import { LikePostCommentDto } from './dto/likePostCommentDto';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    getPostComments(getAllPostCommentsDto: GetAllPostCommentsDto, paginationDto: PaginationDtoOutput): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils").HttpException;
    }>;
    addPostComment(addPostCommentDto: AddPostCommentDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils").HttpException;
    }>;
    likePostComment(likePostCommentDto: LikePostCommentDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils").HttpException;
    }>;
    deletePostComment(deletePostComment: DeletePostCommentDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils").HttpException;
    }>;
}
