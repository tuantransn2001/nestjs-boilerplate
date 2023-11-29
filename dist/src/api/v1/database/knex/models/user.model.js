"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const objection_1 = require("objection");
const common_1 = require("../../../common/enums/common");
const base_model_1 = require("../../../common/models/base.model");
const device_model_1 = require("./device.model");
const userVerification_model_1 = require("./userVerification.model");
const enum_1 = require("../../../user/enum");
const common_2 = require("../../../common");
const userFriend_model_1 = require("./userFriend.model");
const userPost_1 = require("./userPost");
const postComment_1 = require("./postComment");
const postLike_model_1 = require("./postLike.model");
const commentLike_model_1 = require("./commentLike.model");
const userSearchHistory_model_1 = require("./userSearchHistory.model");
class User extends base_model_1.default {
    static get tableName() {
        return common_1.ModelName.USER;
    }
    $beforeInsert() {
        this.createdAt = (0, common_2.getCurrentTime)();
        this.updatedAt = (0, common_2.getCurrentTime)();
        this.last_active_at = (0, common_2.getCurrentTime)();
    }
    $beforeUpdate() {
        this.updatedAt = (0, common_2.getCurrentTime)();
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['phone', 'first_name', 'password'],
            properties: {
                email: { type: 'string' },
                phone: { type: 'string' },
                password: { type: 'string' },
                status: { type: typeof enum_1.UserStatus },
                type: { type: typeof enum_1.UserType },
                first_name: { type: 'string' },
                last_name: { type: 'string' },
                middle_name: { type: 'string' },
                avatar: { type: ['string', 'null'] },
                is_active: { type: 'boolean' },
                is_reported: { type: 'boolean' },
                is_blocked: { type: 'boolean' },
                last_active_at: { type: 'date' },
            },
        };
    }
    static get relationMappings() {
        return {
            devices: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: device_model_1.Device,
                join: {
                    from: `${common_1.ModelName.USER}.id`,
                    to: `${common_1.ModelName.DEVICE}.user_id`,
                },
            },
            searchHistories: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: userSearchHistory_model_1.UserSearchHistory,
                join: {
                    from: `${common_1.ModelName.USER}.id`,
                    to: `${common_1.ModelName.USER_SEARCH_HISTORY}.sourceId`,
                },
            },
            userTargetSearch: {
                relation: objection_1.Model.BelongsToOneRelation,
                modelClass: userSearchHistory_model_1.UserSearchHistory,
                join: {
                    from: `${common_1.ModelName.USER}.id`,
                    to: `${common_1.ModelName.USER_SEARCH_HISTORY}.targetId`,
                },
            },
            posts: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: userPost_1.UserPost,
                join: {
                    from: `${common_1.ModelName.USER}.id`,
                    to: `${common_1.ModelName.USER_POST}.authorId`,
                },
            },
            postComments: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: postComment_1.PostComment,
                join: {
                    from: `${common_1.ModelName.USER}.id`,
                    to: `${common_1.ModelName.POST_COMMENT}.authorId`,
                },
            },
            postLikes: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: postLike_model_1.PostLike,
                join: {
                    from: `${common_1.ModelName.USER}.id`,
                    to: `${common_1.ModelName.POST_LIKE}.authorId`,
                },
            },
            commentLikes: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: commentLike_model_1.CommentLike,
                join: {
                    from: `${common_1.ModelName.USER}.id`,
                    to: `${common_1.ModelName.COMMENT_LIKE}.authorId`,
                },
            },
            userVerifications: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: userVerification_model_1.UserVerification,
                join: {
                    from: `${common_1.ModelName.USER}.id`,
                    to: `${common_1.ModelName.USER_VERIFICATION}.user_id`,
                },
            },
            userFriends: {
                relation: objection_1.Model.ManyToManyRelation,
                modelClass: userFriend_model_1.UserFriend,
                join: {
                    from: `${common_1.ModelName.USER}.id`,
                    through: {
                        from: `${common_1.ModelName.USER_FIEND}.source_id`,
                        to: `${common_1.ModelName.USER_FIEND}.target_id`,
                    },
                    to: `${common_1.ModelName.USER_FIEND}.id`,
                },
            },
        };
    }
    toDto() {
        return {
            id: this.id,
            email: this.email,
            phone: this.phone,
            status: this.status,
            first_name: this.first_name,
            last_name: this.last_name,
            middle_name: this.middle_name,
            fullName: `${this.last_name} ${this.middle_name} ${this.first_name}`,
            type: this.type,
            is_active: this.is_active,
            last_active_at: this.last_active_at,
            createdAt: this.createdAt,
            avatar: this.avatar,
        };
    }
}
exports.User = User;
//# sourceMappingURL=user.model.js.map