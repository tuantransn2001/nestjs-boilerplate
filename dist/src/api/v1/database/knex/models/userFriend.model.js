"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFriend = void 0;
const objection_1 = require("objection");
const common_1 = require("../../../common/enums/common");
const base_model_1 = require("../../../common/models/base.model");
const enum_1 = require("../../../user/enum");
class UserFriend extends base_model_1.default {
    static get tableName() {
        return common_1.ModelName.USER_FIEND;
    }
    static get joinSchema() {
        return {
            type: 'object',
            required: ['source_id', 'target_id'],
            properties: {
                source_id: { type: 'string' },
                target_id: { type: 'string' },
                type: { type: typeof enum_1.UserFriendType },
                status: { type: typeof enum_1.UserFriendStatus },
                notes: { type: 'string' },
            },
        };
    }
    static get relationMappings() {
        return {
            sourceUser: {
                relation: objection_1.Model.BelongsToOneRelation,
                modelClass: common_1.ModelName.USER,
                join: {
                    from: `${common_1.ModelName.USER_FIEND}.source_id`,
                    to: `${common_1.ModelName.USER_VERIFICATION}.user_id`,
                },
            },
            targetUser: {
                relation: objection_1.Model.BelongsToOneRelation,
                modelClass: common_1.ModelName.USER,
                join: {
                    from: `${common_1.ModelName.USER_FIEND}.target_id`,
                    to: `${common_1.ModelName.USER_VERIFICATION}.user_id`,
                },
            },
        };
    }
}
exports.UserFriend = UserFriend;
//# sourceMappingURL=userFriend.model.js.map