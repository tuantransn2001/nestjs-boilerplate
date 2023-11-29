"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPost = void 0;
const objection_1 = require("objection");
const common_1 = require("../../../common/enums/common");
const base_model_1 = require("../../../common/models/base.model");
const postComment_1 = require("./postComment");
const user_model_1 = require("./user.model");
const postLike_model_1 = require("./postLike.model");
class UserPost extends base_model_1.default {
    static get tableName() {
        return common_1.ModelName.USER_POST;
    }
    static get idColumn() {
        return 'id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['authorId', 'title', 'slug', 'published', 'createdAt'],
            properties: {
                id: { type: 'string' },
                authorId: { type: 'string' },
                title: { type: 'string', maxLength: 75 },
                metaTitle: { type: ['string', 'null'], maxLength: 100 },
                slug: { type: 'string', maxLength: 100 },
                summary: { type: ['string', 'null'] },
                published: { type: 'boolean' },
                createdAt: { type: 'date-time' },
                updatedAt: { type: ['date-time', 'null'] },
                content: { type: ['string', 'null'] },
            },
        };
    }
    static get relationMappings() {
        return {
            author: {
                relation: objection_1.Model.BelongsToOneRelation,
                modelClass: user_model_1.User,
                join: {
                    from: `${common_1.ModelName.USER_POST}.authorId`,
                    to: `${common_1.ModelName.USER}.id`,
                },
            },
            comments: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: postComment_1.PostComment,
                join: {
                    from: `${common_1.ModelName.USER_POST}.id`,
                    to: `${common_1.ModelName.POST_COMMENT}.postId`,
                },
            },
            likes: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: postLike_model_1.PostLike,
                join: {
                    from: `${common_1.ModelName.USER_POST}.id`,
                    to: `${common_1.ModelName.POST_LIKE}.postId`,
                },
            },
            metas: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: common_1.ModelName.POST_META,
                join: {
                    from: `${common_1.ModelName.USER_POST}.id`,
                    to: `${common_1.ModelName.POST_META}.postId`,
                },
            },
        };
    }
}
exports.UserPost = UserPost;
//# sourceMappingURL=userPost.js.map