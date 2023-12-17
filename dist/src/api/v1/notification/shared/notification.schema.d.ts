import { z } from 'zod';
import { NotificationType as NotificationTypeEnum } from '../../chat/constants/notification_constants';
import { UserType } from '../../user/enum';
export declare const NotificationType: z.ZodObject<{
    type: z.ZodNativeEnum<typeof NotificationTypeEnum>;
    user: z.ZodObject<{
        id: z.ZodString;
        type: z.ZodNativeEnum<typeof UserType>;
    }, "strip", z.ZodTypeAny, {
        id?: string;
        type?: UserType;
    }, {
        id?: string;
        type?: UserType;
    }>;
    description: z.ZodString;
    title: z.ZodString;
    icon: z.ZodString;
    read: z.ZodBoolean;
    id: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    type?: NotificationTypeEnum;
    user?: {
        id?: string;
        type?: UserType;
    };
    description?: string;
    title?: string;
    icon?: string;
    read?: boolean;
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
}, {
    type?: NotificationTypeEnum;
    user?: {
        id?: string;
        type?: UserType;
    };
    description?: string;
    title?: string;
    icon?: string;
    read?: boolean;
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
}>;
export declare const GetAllUserNotification: z.ZodObject<{
    userId: z.ZodString;
    userType: z.ZodNativeEnum<typeof UserType>;
    page_size: z.ZodNumber;
    page_number: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    userId?: string;
    userType?: UserType;
    page_size?: number;
    page_number?: number;
}, {
    userId?: string;
    userType?: UserType;
    page_size?: number;
    page_number?: number;
}>;