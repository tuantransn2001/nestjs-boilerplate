import { ZodError } from 'zod';
import { HttpException } from './http.exception';
export declare const errorHandler: (err: Error | ZodError) => {
    statusCode: number;
    error: HttpException;
};
