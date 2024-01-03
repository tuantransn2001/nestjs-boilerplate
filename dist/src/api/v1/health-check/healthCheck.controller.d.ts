import { HealthCheckService } from './healthCheck.service';
export declare class HealthCheckController {
    private healthCheckService;
    constructor(healthCheckService: HealthCheckService);
    checkScreen(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils").HttpException;
    }>;
    checkMongooseConnection(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils").HttpException;
    }>;
    checkKenxConnection(): Promise<{
        statusCode: number;
        error: import("../utils").HttpException;
    } | import("@nestjs/terminus").HealthCheckResult>;
}
