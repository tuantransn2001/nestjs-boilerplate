import { Model } from 'mongoose';
import { HttpException } from '../utils/http.exception';
import { IHealthCheck } from './shared/healthCheck.interface';
import { HealthCheckService as NestHealthCheckService } from '@nestjs/terminus';
import { DatabaseHealthIndicator } from '../database/database.health';
export declare class HealthCheckService {
    private readonly healthCheckModel;
    private readonly health;
    private readonly knexDB;
    constructor(healthCheckModel: Model<IHealthCheck>, health: NestHealthCheckService, knexDB: DatabaseHealthIndicator);
    checkServerScreen(): {
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: HttpException;
    };
    checkMongooseConnection(): Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: HttpException;
    }>;
    checkKnexConnection(): Promise<{
        statusCode: number;
        error: HttpException;
    } | import("@nestjs/terminus").HealthCheckResult>;
}
