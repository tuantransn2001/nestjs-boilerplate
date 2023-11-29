export declare class UnibertyService {
    private getAdminAccessToken;
    private getChatToken;
    searchListUser(ids: Record<string, Array<any>>): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils").HttpException;
    }>;
    searchUserByName(name: string): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils").HttpException;
    }>;
}
