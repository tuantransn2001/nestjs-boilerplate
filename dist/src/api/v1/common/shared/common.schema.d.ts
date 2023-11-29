import { z } from 'zod';
export declare const StringType: z.ZodString;
export declare const UUIDType: z.ZodString;
export declare const BooleanType: z.ZodBoolean;
export declare const BaseEntitySchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
}, {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
}>;
export declare const PaginationType: z.ZodObject<{
    page_size: z.ZodNumber;
    page_number: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    page_size?: number;
    page_number?: number;
}, {
    page_size?: number;
    page_number?: number;
}>;
