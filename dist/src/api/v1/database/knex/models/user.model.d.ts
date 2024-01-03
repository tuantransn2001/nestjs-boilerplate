import { ModelName } from '../../../common/enums/common';
import BaseModel from '../../../common/models/base.model';
import { RoleModel } from './role.model';
import { AccessTokenModel } from './access_token.model';
export declare class UserModel extends BaseModel {
    static get tableName(): ModelName;
    name: string;
    email: string;
    is_active: boolean;
    email_verified_at: Date;
    password: string;
    avatar_url: string;
    remember_token: string;
    phone: string;
    password_last_changed: Date;
    static get jsonSchema(): {
        type: string;
        required: string[];
        properties: {
            id: {
                type: string;
            };
            name: {
                type: string;
                maxLength: number;
            };
            email: {
                type: string;
                maxLength: number;
            };
            is_active: {
                type: string;
            };
            country_id: {
                type: string;
            };
            email_verified_at: {
                type: string;
            };
            password: {
                type: string;
                maxLength: number;
            };
            profile_image_path: {
                type: string;
                maxLength: number;
            };
            remember_token: {
                type: string;
                maxLength: number;
            };
            is_two_factor_enabled: {
                type: string;
            };
            two_factor_verification_code: {
                type: string;
            };
            two_factor_verification_expiry: {
                type: string;
            };
            password_last_changed: {
                type: string;
            };
            created_at: {
                type: string;
            };
            updated_at: {
                type: string;
            };
            deleted_at: {
                type: string;
            };
        };
    };
    static get relationMappings(): {
        roles: {
            relation: import("objection").RelationType;
            modelClass: typeof RoleModel;
            join: {
                from: string;
                through: {
                    from: string;
                    to: string;
                };
                to: string;
            };
        };
        accessTokens: {
            relation: import("objection").RelationType;
            modelClass: typeof AccessTokenModel;
            join: {
                from: string;
                to: string;
            };
        };
    };
    toDto(): {};
}
