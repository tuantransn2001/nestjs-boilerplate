"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthCheck = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("../../common/enums/common");
const uuid_1 = require("uuid");
exports.HealthCheck = new mongoose_1.default.Schema({
    id: { type: String, default: (0, uuid_1.v4)() },
    event: String,
    createdAt: { type: Date },
    updatedAt: { type: Date },
}, {
    collection: common_1.ModelName.HEALTH_CHECK,
    minimize: false,
});
//# sourceMappingURL=healthCheck.entity.js.map