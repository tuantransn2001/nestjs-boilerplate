import { OnModuleInit } from '@nestjs/common';
import { Knex } from 'nestjs-knex';
export declare class SeedService implements OnModuleInit {
    private readonly knex;
    private readonly logger;
    constructor(knex: Knex);
    onModuleInit(): Promise<{
        statusCode: number;
        error: import("../utils").HttpException;
    }>;
}
