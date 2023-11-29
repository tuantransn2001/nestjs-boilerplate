import { ModelName } from '../../../common/enums/common';
import BaseModel from '../../../common/models/base.model';
import { User } from './user.model';
export declare class UserVerification extends BaseModel {
    static get tableName(): ModelName;
    verification_code: string;
    user_id: string;
    static get jsonSchema(): {
        type: string;
        properties: {
            id: {
                type: string;
            };
            verification_code: {
                type: string;
            };
            user_id: {
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
    };
}
