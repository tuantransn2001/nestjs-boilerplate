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
    type: string;
    id: string;
    read: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    user?: {
        type?: string;
        enum?: {
            ADMIN?: unknown;
            USER?: unknown;
            GUEST?: unknown;
        };
    };
    description?: string;
    title?: string;
    icon?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: string;
    id: string;
    read: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    user?: {
        type?: string;
        enum?: {
            ADMIN?: unknown;
            USER?: unknown;
            GUEST?: unknown;
        };
    };
    description?: string;
    title?: string;
    icon?: string;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: string;
    id: string;
    read: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    user?: {
        type?: string;
        enum?: {
            ADMIN?: unknown;
            USER?: unknown;
            GUEST?: unknown;
        };
    };
    description?: string;
    title?: string;
    icon?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
