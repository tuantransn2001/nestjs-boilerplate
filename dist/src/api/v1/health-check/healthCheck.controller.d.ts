import { HealthCheckService } from './healthCheck.service';
export declare class HealthCheckController {
    private healthCheckService;
    constructor(healthCheckService: HealthCheckService);
    checkScreen(): Promise<{
        statusCode: number;
        error: import("../utils").HttpException;
    } | {
        statusCode: number;
        message: string;
        data: any;
    }>;
    checkMongooseConnection(): Promise<{
        statusCode: number;
        error: import("../utils").HttpException;
    } | {
        statusCode: number;
        message: string;
        data: any;
    }>;
    checkKenxConnection(): Promise<{
        statusCode: number;
        error: import("../utils").HttpException;
    } | import("@nestjs/terminus").HealthCheckResult>;
}
