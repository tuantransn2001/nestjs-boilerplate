"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conversation = void 0;
const uuid_1 = require("uuid");
const mongoose_1 = require("mongoose");
const common_1 = require("../../common/enums/common");
exports.Conversation = new mongoose_1.default.Schema({
    id: { type: String, default: (0, uuid_1.v4)() },
    name: { type: String },
    isDelete: { type: Boolean, default: false },
    members: {
        type: [
            {
                id: { type: String },
                type: { type: String },
            },
        ],
    },
    messages: {
        type: [
            {
                id: { type: String, default: (0, uuid_1.v4)() },
                sender: { id: { type: String }, type: { type: String } },
                content: { type: String },
                isDelete: { type: Boolean, default: false },
                createdAt: { type: Date, default: new Date() },
                updatedAt: { type: Date },
            },
        ],
    },
    createdAt: { type: Date },
    updatedAt: { type: Date },
}, { timestamps: true, minimize: false, collection: common_1.ModelName.CONVERSATION });
//# sourceMappingURL=conversation.entity.js.map