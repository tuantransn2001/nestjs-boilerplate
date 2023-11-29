"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
const mongoose = require("mongoose");
const uuid_1 = require("uuid");
const enum_1 = require("../../user/enum");
const notification_constants_1 = require("../../chat/constants/notification_constants");
const common_1 = require("../../common/enums/common");
exports.Notification = new mongoose.Schema({
    id: { type: String, default: (0, uuid_1.v4)() },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    icon: {
        type: String,
    },
    type: {
        type: String,
        enum: notification_constants_1.NotificationType,
        default: notification_constants_1.NotificationType.INFO,
    },
    read: {
        type: Boolean,
        default: false,
    },
    user: {
        id: { type: String },
        type: { type: String, enum: enum_1.UserType },
    },
    createdAt: { type: Date },
    updatedAt: { type: Date },
}, { timestamps: true, minimize: false, collection: common_1.ModelName.NOTIFICATION });
//# sourceMappingURL=notification.entity.js.map