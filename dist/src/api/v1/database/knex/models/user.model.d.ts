import { ModelName } from '../../../common/enums/common';
import BaseModel from '../../../common/models/base.model';
import { Device } from './device.model';
import { UserVerification } from './userVerification.model';
import { UserType, UserStatus } from 'src/api/v1/user/enum';
export declare class User extends BaseModel {
    static get tableName(): ModelName;
    email: string;
    phone: string;
    password: string;
    first_name: string;
    last_name: string;
    middle_name: string;
    avatar: string | null;
    status: UserStatus;
    type: UserType;
    is_active: boolean;
    is_reported: boolean;
    is_blocked: boolean;
    last_active_at: Date;
    $beforeInsert(): void;
    $beforeUpdate(): void;
    static get jsonSchema(): {
        type: string;
        required: string[];
        properties: {
            email: {
                type: string;
            };
            phone: {
                type: string;
            };
            password: {
                type: string;
            };
            status: {
                type: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
            };
            type: {
                type: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
            };
            first_name: {
                type: string;
            };
            last_name: {
                type: string;
            };
            middle_name: {
                type: string;
            };
            avatar: {
                type: string[];
            };
            is_active: {
                type: string;
            };
            is_reported: {
                type: string;
            };
            is_blocked: {
                type: string;
            };
            last_active_at: {
                type: string;
            };
        };
    };
    static get relationMappings(): {
        devices: {
            relation: import("objection").RelationType;
            modelClass: typeof Device;
            join: {
                from: string;
                to: string;
            };
        };
        userVerifications: {
            relation: import("objection").RelationType;
            modelClass: typeof UserVerification;
            join: {
                from: string;
                to: string;
            };
        };
    };
    toDto(): {
        id: string;
        email: string;
        phone: string;
        status: UserStatus;
        first_name: string;
        last_name: string;
        middle_name: string;
        fullName: string;
        type: UserType;
        is_active: boolean;
        last_active_at: Date;
        createdAt: Date;
        avatar: string;
    };
}
