"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objection_1 = require("objection");
const uuid_1 = require("uuid");
const __1 = require("..");
class BaseModel extends objection_1.Model {
    $beforeInsert() {
        if (!this.id)
            this.id = (0, uuid_1.v4)();
        this.createdAt = (0, __1.getCurrentTime)();
        this.updatedAt = (0, __1.getCurrentTime)();
    }
    $beforeUpdate() {
        this.updatedAt = (0, __1.getCurrentTime)();
    }
}
exports.default = BaseModel;
//# sourceMappingURL=base.model.js.map