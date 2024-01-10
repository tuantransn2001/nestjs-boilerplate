import mongoose from 'mongoose';
import { ModelName } from '../../common/enums/common';
export declare const HealthCheck: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    collection: ModelName;
    minimize: false;
}, {
    id: string;
    event?: string;
    createdAt?: Date;
    updatedAt?: Date;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    id: string;
    event?: string;
    createdAt?: Date;
    updatedAt?: Date;
}>> & mongoose.FlatRecord<{
    id: string;
    event?: string;
    createdAt?: Date;
    updatedAt?: Date;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
