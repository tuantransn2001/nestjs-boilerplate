"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserVerification = void 0;
const objection_1 = require("objection");
const common_1 = require("../../../common/enums/common");
const base_model_1 = require("../../../common/models/base.model");
const user_model_1 = require("./user.model");
class UserVerification extends base_model_1.default {
    static get tableName() {
        return common_1.ModelName.USER_VERIFICATION;
    }
    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                id: { type: 'string' },
                verification_code: { type: 'string' },
                user_id: { type: 'string' },
            },
        };
    }
    static get relationMappings() {
        return {
            user: {
                relation: objection_1.Model.BelongsToOneRelation,
                modelClass: user_model_1.User,
                join: {
                    from: `${common_1.ModelName.USER_VERIFICATION}.user_id`,
                    to: `${common_1.ModelName.USER}.id`,
                },
            },
        };
    }
}
exports.UserVerification = UserVerification;
//# sourceMappingURL=userVerification.model.js.map