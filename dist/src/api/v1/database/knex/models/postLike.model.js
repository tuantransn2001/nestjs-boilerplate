"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostLike = void 0;
const objection_1 = require("objection");
const common_1 = require("../../../common/enums/common");
const base_model_1 = require("../../../common/models/base.model");
const userPost_1 = require("./userPost");
const user_model_1 = require("./user.model");
class PostLike extends base_model_1.default {
    static get tableName() {
        return common_1.ModelName.POST_LIKE;
    }
    static get idColumn() {
        return 'id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['authorId', 'postId'],
            properties: {
                id: { type: 'string' },
                authorId: { type: 'string' },
                postId: { type: 'string' },
                createdAt: { type: 'date-time' },
                updatedAt: { type: ['date-time', 'null'] },
            },
        };
    }
    static get relationMappings() {
        return {
            post: {
                relation: objection_1.Model.BelongsToOneRelation,
                modelClass: userPost_1.UserPost,
                join: {
                    from: `${common_1.ModelName.POST_LIKE}.postId`,
                    to: `${common_1.ModelName.USER_POST}.id`,
                },
            },
            user: {
                relation: objection_1.Model.BelongsToOneRelation,
                modelClass: user_model_1.User,
                join: {
                    from: `${common_1.ModelName.POST_LIKE}.authorId`,
                    to: `${common_1.ModelName.USER}.id`,
                },
            },
        };
    }
}
exports.PostLike = PostLike;
//# sourceMappingURL=postLike.model.js.map