/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { GetAllUserNotificationDto, INotification } from './shared/notification.interface';
export declare class NotificationService {
    private readonly notificationModel;
    constructor(notificationModel: Model<INotification>);
    getAll(payload: GetAllUserNotificationDto): Promise<(import("mongoose").Document<unknown, {}, {
        type?: import("../chat/constants/notification_constants").NotificationType;
        user?: {
            id?: string;
            type?: import("../user/enum").UserType;
        };
        description?: string;
        title?: string;
        icon?: string;
        read?: boolean;
        id?: string;
        createdAt?: Date;
        updatedAt?: Date;
    }> & {
        type?: import("../chat/constants/notification_constants").NotificationType;
        user?: {
            id?: string;
            type?: import("../user/enum").UserType;
        };
        description?: string;
        title?: string;
        icon?: string;
        read?: boolean;
        id?: string;
        createdAt?: Date;
        updatedAt?: Date;
    } & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getOne(): Promise<void>;
    markRead(): Promise<void>;
    create(): Promise<void>;
    delete(): Promise<void>;
}
