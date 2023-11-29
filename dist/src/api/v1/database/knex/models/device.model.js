"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Device = void 0;
const objection_1 = require("objection");
const common_1 = require("../../../common/enums/common");
const base_model_1 = require("../../../common/models/base.model");
const enum_1 = require("../../../user/enum");
const user_model_1 = require("./user.model");
const userAccess_model_1 = require("./userAccess.model");
class Device extends base_model_1.default {
    static get tableName() {
        return common_1.ModelName.DEVICE;
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['user_id', 'device_id', 'device_token'],
            properties: {
                id: { type: 'string' },
                user_id: { type: 'string' },
                device_id: { type: 'string' },
                type: { type: typeof enum_1.DeviceType },
                device_token: { type: 'string' },
            },
        };
    }
    static get relationMappings() {
        return {
            user: {
                relation: objection_1.Model.BelongsToOneRelation,
                modelClass: user_model_1.User,
                join: {
                    from: `${common_1.ModelName.DEVICE}.user_id`,
                    to: `${common_1.ModelName.USER}.id`,
                },
            },
            userAccess: {
                relation: objection_1.Model.HasOneRelation,
                modelClass: userAccess_model_1.UserAccess,
                join: {
                    from: `${common_1.ModelName.DEVICE}.id`,
                    to: `${common_1.ModelName.USER_ACCESS}.device_id`,
                },
            },
        };
    }
}
exports.Device = Device;
//# sourceMappingURL=device.model.js.map