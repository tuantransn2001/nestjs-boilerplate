import { ModelName } from '../../../common/enums/common';
import BaseModel from '../../../common/models/base.model';
import { DeviceType } from '../../../user/enum';
import { User } from './user.model';
import { UserAccess } from './userAccess.model';
export declare class Device extends BaseModel {
    static get tableName(): ModelName;
    user_id: string;
    device_id: string;
    type: DeviceType;
    device_token: string;
    static get jsonSchema(): {
        type: string;
        required: string[];
        properties: {
            id: {
                type: string;
            };
            user_id: {
                type: string;
            };
            device_id: {
                type: string;
            };
            type: {
                type: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
            };
            device_token: {
                type: string;
            };
        };
    };
    static get relationMappings(): {
        user: {
            relation: import("objection").RelationType;
            modelClass: typeof User;
            join: {
                from: string;
                to: string;
            };
        };
        userAccess: {
            relation: import("objection").RelationType;
            modelClass: typeof UserAccess;
            join: {
                from: string;
                to: string;
            };
        };
    };
}
