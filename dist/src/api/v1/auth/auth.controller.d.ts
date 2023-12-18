import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { LoginDto as LoginDtoInput } from './dto/input/loginDto';
import { RegisterDto } from './dto/input/registerDto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDtoInput, response: Response): Promise<{
        statusCode: number;
        error: import("../utils").HttpException;
    } | {
        statusCode: number;
        message: string;
        data: any;
    }>;
    register(registerDto: RegisterDto, response: Response): Promise<{
        statusCode: number;
        error: import("../utils").HttpException;
    } | {
        statusCode: number;
        message: string;
        data: any;
    }>;
    refresh(request: Request, response: Response): Promise<string | {
        statusCode: number;
        error: import("../utils").HttpException;
    }>;
    getMe(request: Request): Promise<{
        statusCode: number;
        message: string;
        data: any;
    }>;
}
