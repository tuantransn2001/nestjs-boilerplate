import { HealthIndicator, HealthIndicatorResult } from '@nestjs/terminus';
import { Knex } from 'knex';
export declare class DatabaseHealthIndicator extends HealthIndicator {
    private knex;
    private readonly logger;
    constructor(knex: Knex);
    isHealthy(): Promise<HealthIndicatorResult>;
}
