"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockList = void 0;
const objection_1 = require("objection");
const common_1 = require("../../../common/enums/common");
const base_model_1 = require("../../../common/models/base.model");
const userAccess_model_1 = require("./userAccess.model");
class BlockList extends base_model_1.default {
    static get tableName() {
        return common_1.ModelName.BLOCK_LIST;
    }
    static get joinSchema() {
        return {
            type: 'object',
            required: ['user_id'],
            properties: { id: { type: 'string' }, user_id: { type: 'string' } },
        };
    }
    static get relationMappings() {
        return {
            userAccess: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: userAccess_model_1.UserAccess,
                join: {
                    to: `${common_1.ModelName.USER_ACCESS}.user_id`,
                    from: `${common_1.ModelName.BLOCK_LIST}.user_id`,
                },
            },
        };
    }
}
exports.BlockList = BlockList;
//# sourceMappingURL=blockList.model.js.map