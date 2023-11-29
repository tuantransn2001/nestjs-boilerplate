"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostComment = void 0;
const objection_1 = require("objection");
const common_1 = require("../../../common/enums/common");
const base_model_1 = require("../../../common/models/base.model");
const userPost_1 = require("./userPost");
const user_model_1 = require("./user.model");
class PostComment extends base_model_1.default {
    static get tableName() {
        return common_1.ModelName.POST_COMMENT;
    }
    static get idColumn() {
        return 'id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['postId', 'title', 'published', 'createdAt'],
            properties: {
                id: { type: 'string' },
                postId: { type: 'string' },
                authorId: { type: 'string' },
                parentId: { type: ['string', 'null'] },
                title: { type: 'string', maxLength: 100 },
                published: { type: 'integer' },
                publishedAt: { type: ['date-time', 'null'] },
                content: { type: ['string', 'null'] },
            },
        };
    }
    static get relationMappings() {
        return {
            post: {
                relation: objection_1.Model.BelongsToOneRelation,
                modelClass: userPost_1.UserPost,
                join: {
                    from: `${common_1.ModelName.POST_COMMENT}.postId`,
                    to: `${common_1.ModelName.USER_POST}.id`,
                },
            },
            user: {
                relation: objection_1.Model.BelongsToOneRelation,
                modelClass: user_model_1.User,
                join: {
                    from: `${common_1.ModelName.POST_COMMENT}.authorId`,
                    to: `${common_1.ModelName.USER}.id`,
                },
            },
            parentComment: {
                relation: objection_1.Model.BelongsToOneRelation,
                modelClass: PostComment,
                join: {
                    from: `${common_1.ModelName.POST_COMMENT}.parentId`,
                    to: `${common_1.ModelName.POST_COMMENT}.id`,
                },
            },
        };
    }
    toDto() {
        return {
            id: this.id,
            title: this.title,
            content: this.content,
            authorId: this.authorId,
            parentId: this.parentId,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }
}
exports.PostComment = PostComment;
//# sourceMappingURL=postComment.js.map