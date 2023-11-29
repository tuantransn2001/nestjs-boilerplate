import { CanActivate, ExecutionContext } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
export declare class JwtAuthGuard implements CanActivate {
    private readonly logger;
    canActivate(context: ExecutionContext): Promise<boolean>;
    static validateToken(token: string): string | jwt.JwtPayload;
}
