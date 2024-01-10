import { ModelName } from '../../../common/enums/common';
import BaseModel from '../../../common/models/base.model';
import { RoleModel } from './role.model';
import { AccessTokenModel } from './access_token.model';
export type IUser = {
    id?: string;
    name?: string;
    email?: string;
    phone?: string;
    is_deleted?: boolean;
    email_verified_at?: Date;
    password?: string;
    avatar_url?: string;
    remember_token?: string;
    password_last_changed?: Date;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
};
export declare class UserModel extends BaseModel {
    static get tableName(): ModelName;
    name: string;
    email: string;
    phone: string;
    is_deleted: boolean;
    email_verified_at: Date;
    password: string;
    avatar_url: string;
    remember_token: string;
    password_last_changed: Date;
    constructor(user?: IUser);
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
            phone: {
                type: string;
                maxLength: number;
            };
            is_deleted: {
                type: string;
            };
            email_verified_at: {
                type: string;
            };
            password: {
                type: string;
                maxLength: number;
            };
            avatar_url: {
                type: string;
                maxLength: number;
            };
            remember_token: {
                type: string;
                maxLength: number;
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
