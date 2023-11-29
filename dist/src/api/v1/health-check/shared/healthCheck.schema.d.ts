import { z } from 'zod';
export declare const HealthCheckSchema: z.ZodObject<{
    uptime: z.ZodNumber;
    message: z.ZodUnion<[z.ZodString, z.ZodObject<{
        status: z.ZodNumber;
        message: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status?: number;
        message?: string;
    }, {
        status?: number;
        message?: string;
    }>]>;
    timestamp: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    uptime?: number;
    message?: string | {
        status?: number;
        message?: string;
    };
    timestamp?: Date;
}, {
    uptime?: number;
    message?: string | {
        status?: number;
        message?: string;
    };
    timestamp?: Date;
}>;
