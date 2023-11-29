import { PostService } from './post.service';
import { PaginationDtoOutput } from '../common/dto/output/paginationDto';
import { CreatePostDto } from './dto/input/createPostDto';
import { GetAllPostDto } from './dto/input/getAllPostDto';
import { DeletePostDto } from './dto/input/deletePostDto';
import { LikePostDto } from './dto/input/likePostDto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    getPost(getAllPostDto: GetAllPostDto, paginationDto: PaginationDtoOutput): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    createPost(createPostDto: CreatePostDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    deletePost(deletePostDto: DeletePostDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils").HttpException;
    }>;
    likePost(likePostDto: LikePostDto): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils").HttpException;
    }>;
}
