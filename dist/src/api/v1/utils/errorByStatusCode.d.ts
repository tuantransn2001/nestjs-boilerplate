import { HttpException } from './http.exception';
export declare const handleErrorNotFound: (errorMessage: string) => {
    statusCode: number;
    error: HttpException;
};
