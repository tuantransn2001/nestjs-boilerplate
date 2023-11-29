import { ModelName } from '../../../common/enums/common';
import BaseModel from '../../../common/models/base.model';
import { UserAccess } from './userAccess.model';
import { User } from './user.model';
export declare class BlockList extends BaseModel {
    static get tableName(): ModelName;
    user_id: string;
    user: User;
    static get joinSchema(): {
        type: string;
        required: string[];
        properties: {
            id: {
                type: string;
            };
            user_id: {
                type: string;
            };
        };
    };
    static get relationMappings(): {
        userAccess: {
            relation: import("objection").RelationType;
            modelClass: typeof UserAccess;
            join: {
                to: string;
                from: string;
            };
        };
    };
}
