import * as mongoose from 'mongoose';
import { ModelName } from '../../common/enums/common';
export declare const Notification: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    minimize: false;
    collection: ModelName;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id: string;
    type: string;
    read: boolean;
    description?: string;
    icon?: string;
    user?: {
        type?: string;
        enum?: {
            ADMIN?: unknown;
            USER?: unknown;
            GUEST?: unknown;
        };
    };
    createdAt?: Date;
    updatedAt?: Date;
    title?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id: string;
    type: string;
    read: boolean;
    description?: string;
    icon?: string;
    user?: {
        type?: string;
        enum?: {
            ADMIN?: unknown;
            USER?: unknown;
            GUEST?: unknown;
        };
    };
    createdAt?: Date;
    updatedAt?: Date;
    title?: string;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id: string;
    type: string;
    read: boolean;
    description?: string;
    icon?: string;
    user?: {
        type?: string;
        enum?: {
            ADMIN?: unknown;
            USER?: unknown;
            GUEST?: unknown;
        };
    };
    createdAt?: Date;
    updatedAt?: Date;
    title?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
