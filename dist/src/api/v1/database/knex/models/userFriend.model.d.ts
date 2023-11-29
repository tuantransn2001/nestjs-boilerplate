import { ModelName } from '../../../common/enums/common';
import BaseModel from '../../../common/models/base.model';
import { UserFriendType, UserFriendStatus } from 'src/api/v1/user/enum';
export declare class UserFriend extends BaseModel {
    static get tableName(): ModelName;
    source_id: string;
    target_id: string;
    type: UserFriendType;
    status: UserFriendStatus;
    notes: string;
    static get joinSchema(): {
        type: string;
        required: string[];
        properties: {
            source_id: {
                type: string;
            };
            target_id: {
                type: string;
            };
            type: {
                type: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
            };
            status: {
                type: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
            };
            notes: {
                type: string;
            };
        };
    };
    static get relationMappings(): {
        sourceUser: {
            relation: import("objection").RelationType;
            modelClass: ModelName;
            join: {
                from: string;
                to: string;
            };
        };
        targetUser: {
            relation: import("objection").RelationType;
            modelClass: ModelName;
            join: {
                from: string;
                to: string;
            };
        };
    };
}
