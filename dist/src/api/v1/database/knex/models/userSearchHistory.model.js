"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSearchHistory = void 0;
const objection_1 = require("objection");
const common_1 = require("../../../common/enums/common");
const base_model_1 = require("../../../common/models/base.model");
const user_model_1 = require("./user.model");
class UserSearchHistory extends base_model_1.default {
    static get tableName() {
        return common_1.ModelName.USER_SEARCH_HISTORY;
    }
    static get idColumn() {
        return 'id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['id'],
            properties: {
                id: { type: 'string' },
                key: { type: 'string' },
                sourceId: { type: 'string' },
                targetId: { type: ['string', null] },
                createdAt: { type: 'date' },
                updatedAt: { type: 'date' },
            },
        };
    }
    static get relationMappings() {
        return {
            sourceUser: {
                relation: objection_1.Model.BelongsToOneRelation,
                modelClass: user_model_1.User,
                join: {
                    from: `${common_1.ModelName.USER_SEARCH_HISTORY}.sourceId`,
                    to: `${common_1.ModelName.USER}.id`,
                },
            },
            targetUser: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: user_model_1.User,
                join: {
                    from: `${common_1.ModelName.USER_SEARCH_HISTORY}.targetId`,
                    to: `${common_1.ModelName.USER}.id`,
                },
            },
        };
    }
}
exports.UserSearchHistory = UserSearchHistory;
//# sourceMappingURL=userSearchHistory.model.js.map