import { User } from '../database/knex/models/user.model';
import { HttpException } from '../utils';
import { Request, Response } from 'express';
import { UserService } from '../user/user.service';
import { RegisterDto } from './dto/input/registerDto';
import { LoginDto } from './dto/input/loginDto';
export declare class AuthService {
    private userService;
    constructor(userService: UserService);
    issueToken(user: User, response: Response): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    login(loginDto: LoginDto, response: Response): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: HttpException;
    }>;
    register(registerDTO: RegisterDto, response: Response): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: HttpException;
    }>;
    logout(response: Response): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
    refreshToken(req: Request, res: Response): Promise<string | {
        statusCode: number;
        error: HttpException;
    }>;
    getMe(req: Request): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
