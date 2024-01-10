"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const uuid_1 = require("uuid");
const objection_1 = require("objection");
const common_1 = require("../../../common/enums/common");
const base_model_1 = require("../../../common/models/base.model");
const role_model_1 = require("./role.model");
const access_token_model_1 = require("./access_token.model");
class UserModel extends base_model_1.default {
    static get tableName() {
        return common_1.ModelName.USER;
    }
    constructor(user) {
        super();
        this.id = user.id || (0, uuid_1.v4)();
        this.name = user.name || '';
        this.email = user.email || '';
        this.phone = user.phone || '';
        this.is_deleted = user.is_deleted || false;
        this.email_verified_at = user.email_verified_at || null;
        this.password = user.password || '';
        this.avatar_url = user.avatar_url || '';
        this.remember_token = user.remember_token || null;
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name', 'email'],
            properties: {
                id: { type: 'uuid' },
                name: { type: 'string', maxLength: 191 },
                email: { type: 'string', maxLength: 191 },
                phone: { type: 'string', maxLength: 191 },
                is_deleted: { type: 'boolean' },
                email_verified_at: { type: 'timestamp' },
                password: { type: 'string', maxLength: 255 },
                avatar_url: { type: 'string', maxLength: 255 },
                remember_token: { type: 'string', maxLength: 100 },
                created_at: { type: 'timestamp' },
                updated_at: { type: 'timestamp' },
                deleted_at: { type: 'timestamp' },
            },
        };
    }
    static get relationMappings() {
        return {
            roles: {
                relation: objection_1.Model.ManyToManyRelation,
                modelClass: role_model_1.RoleModel,
                join: {
                    from: `${common_1.ModelName.USER}.id`,
                    through: {
                        from: `${common_1.ModelName.USER_ROLE}.user_id`,
                        to: `${common_1.ModelName.USER_ROLE}.role_code`,
                    },
                    to: `${common_1.ModelName.ROLE}.role_code`,
                },
            },
            accessTokens: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: access_token_model_1.AccessTokenModel,
                join: {
                    from: `${common_1.ModelName.USER}.id`,
                    to: `${common_1.ModelName.ACCESS_TOKEN}.user_id`,
                },
            },
        };
    }
    toDto() {
        return {};
    }
}
exports.UserModel = UserModel;
//# sourceMappingURL=user.model.js.map