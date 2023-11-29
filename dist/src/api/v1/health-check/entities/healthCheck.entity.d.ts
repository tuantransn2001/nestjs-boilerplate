import mongoose from 'mongoose';
import { ModelName } from '../../common/enums/common';
export declare const HealthCheck: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    collection: ModelName;
    minimize: false;
}, {
    id: string;
    createdAt?: Date;
    updatedAt?: Date;
    event?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    id: string;
    createdAt?: Date;
    updatedAt?: Date;
    event?: string;
}>> & mongoose.FlatRecord<{
    id: string;
    createdAt?: Date;
    updatedAt?: Date;
    event?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
