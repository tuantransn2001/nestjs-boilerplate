"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUserNotification = exports.NotificationType = void 0;
const zod_1 = require("zod");
const common_schema_1 = require("../../common/shared/common.schema");
const notification_constants_1 = require("../../chat/constants/notification_constants");
const enum_1 = require("../../user/enum");
exports.NotificationType = zod_1.z
    .object({
    title: common_schema_1.StringType,
    description: common_schema_1.StringType,
    icon: common_schema_1.StringType,
    type: zod_1.z.nativeEnum(notification_constants_1.NotificationType),
    read: common_schema_1.BooleanType,
    user: zod_1.z.object({
        id: common_schema_1.UUIDType,
        type: zod_1.z.nativeEnum(enum_1.UserType),
    }),
})
    .merge(common_schema_1.BaseEntitySchema);
exports.GetAllUserNotification = zod_1.z
    .object({
    userId: common_schema_1.UUIDType,
    userType: zod_1.z.nativeEnum(enum_1.UserType),
})
    .merge(common_schema_1.PaginationType);
//# sourceMappingURL=notification.schema.js.map