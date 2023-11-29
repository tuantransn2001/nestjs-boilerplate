"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const common_1 = require("../../../common/enums/common");
const base_model_1 = require("../../../common/models/base.model");
const userPost_1 = require("./userPost");
class PostMeta extends base_model_1.default {
    static get tableName() {
        return common_1.ModelName.POST_META;
    }
    static get idColumn() {
        return 'id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['postId', 'key'],
            properties: {
                id: { type: 'string' },
                postId: { type: 'string' },
                key: { type: 'string', maxLength: 50 },
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
                    from: `${common_1.ModelName.POST_META}.postId`,
                    to: `${common_1.ModelName.USER_POST}.id`,
                },
            },
        };
    }
}
exports.default = PostMeta;
//# sourceMappingURL=postMeta.js.map