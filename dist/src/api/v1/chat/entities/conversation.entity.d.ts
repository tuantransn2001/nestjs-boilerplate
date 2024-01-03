import mongoose from 'mongoose';
import { ModelName } from '../../common/enums/common';
export declare const Conversation: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    minimize: false;
    collection: ModelName;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id: string;
    isDelete: boolean;
    members: {
        type?: string;
        id?: string;
    }[];
    messages: {
        id: string;
        createdAt: Date;
        isDelete: boolean;
        updatedAt?: Date;
        sender?: {
            type?: string;
        };
        content?: string;
    }[];
    name?: string;
    createdAt?: Date;
    updatedAt?: Date;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id: string;
    isDelete: boolean;
    members: {
        type?: string;
        id?: string;
    }[];
    messages: {
        id: string;
        createdAt: Date;
        isDelete: boolean;
        updatedAt?: Date;
        sender?: {
            type?: string;
        };
        content?: string;
    }[];
    name?: string;
    createdAt?: Date;
    updatedAt?: Date;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    id: string;
    isDelete: boolean;
    members: {
        type?: string;
        id?: string;
    }[];
    messages: {
        id: string;
        createdAt: Date;
        isDelete: boolean;
        updatedAt?: Date;
        sender?: {
            type?: string;
        };
        content?: string;
    }[];
    name?: string;
    createdAt?: Date;
    updatedAt?: Date;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
