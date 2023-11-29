import { HttpException } from './http.exception';
export declare class RestFullAPI {
    data: any;
    message: string;
    statusCode: number;
    constructor();
    static onSuccess(statusCode: number, message: string, data?: any): {
        statusCode: number;
        message: string;
        data: any;
    };
    static onFail(statusCode: number, error: HttpException): {
        statusCode: number;
        error: HttpException;
    };
}
