import { ModelName } from 'src/api/v1/common/enums/common';
import BaseModel from 'src/api/v1/common/models/base.model';
import { User } from './user.model';
export declare class UserSearchHistory extends BaseModel {
    static get tableName(): ModelName;
    key: string;
    sourceId: string;
    targetId: string | null;
    static get idColumn(): string;
    static get jsonSchema(): {
        type: string;
        required: string[];
        properties: {
            id: {
                type: string;
            };
            key: {
                type: string;
            };
            sourceId: {
                type: string;
            };
            targetId: {
                type: string[];
            };
            createdAt: {
                type: string;
            };
            updatedAt: {
                type: string;
            };
        };
    };
    static get relationMappings(): {
        sourceUser: {
            relation: import("objection").RelationType;
            modelClass: typeof User;
            join: {
                from: string;
                to: string;
            };
        };
        targetUser: {
            relation: import("objection").RelationType;
            modelClass: typeof User;
            join: {
                from: string;
                to: string;
            };
        };
    };
}
