"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccess = void 0;
const objection_1 = require("objection");
const common_1 = require("../../../common/enums/common");
const base_model_1 = require("../../../common/models/base.model");
const device_model_1 = require("./device.model");
const blockList_model_1 = require("./blockList.model");
class UserAccess extends base_model_1.default {
    static get tableName() {
        return common_1.ModelName.USER_ACCESS;
    }
    static get joinSchema() {
        return {
            type: 'object',
            required: ['user_id', 'device_id'],
            properties: {
                id: { type: 'string' },
                token: { type: 'string' },
                user_id: { type: 'string' },
                device_id: { type: 'string' },
            },
        };
    }
    static get relationMappings() {
        return {
            devices: {
                relation: objection_1.Model.BelongsToOneRelation,
                modelClass: device_model_1.Device,
                join: {
                    from: `${common_1.ModelName.USER_ACCESS}.user_id`,
                    to: `${common_1.ModelName.DEVICE}.id`,
                },
            },
            blockList: {
                relation: objection_1.Model.HasManyRelation,
                modelClass: blockList_model_1.BlockList,
                join: {
                    from: `${common_1.ModelName.USER_ACCESS}.user_id`,
                    to: `${common_1.ModelName.BLOCK_LIST}.user_id`,
                },
            },
        };
    }
}
exports.UserAccess = UserAccess;
//# sourceMappingURL=userAccess.model.js.map