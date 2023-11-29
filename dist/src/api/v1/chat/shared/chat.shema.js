"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchUserByNameSchema = exports.RequestContactListSchema = exports.RequestMessageSchema = exports.DeleteConversationSchema = exports.EditMessageSchema = exports.DeleteMessageSchema = exports.TypingSchema = exports.SendRoomMessageSchema = exports.JoinRoomSchema = exports.ConversationTypeArray = exports.ConversationType = exports.MemberTypeArray = exports.MessageTypeArray = exports.UserType = exports.MessageDTOType = exports.MessageType = exports.MemberType = void 0;
const zod_1 = require("zod");
const uuid_1 = require("uuid");
const common_schema_1 = require("../../common/shared/common.schema");
exports.MemberType = zod_1.z.object({
    id: common_schema_1.StringType,
    type: zod_1.z.string(),
});
exports.MessageType = zod_1.z.object({
    id: common_schema_1.StringType,
    isDelete: zod_1.z.boolean(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
    sender: exports.MemberType,
    content: zod_1.z.string(),
});
exports.MessageDTOType = zod_1.z.object({
    sender: exports.MemberType,
    content: zod_1.z.string(),
});
exports.UserType = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    type: zod_1.z.string(),
    avatar: zod_1.z.string(),
});
exports.MessageTypeArray = zod_1.z.array(exports.MessageType);
exports.MemberTypeArray = zod_1.z.array(exports.MemberType);
exports.ConversationType = zod_1.z.object({
    id: common_schema_1.UUIDType,
    name: zod_1.z.string(),
    members: exports.MemberTypeArray,
    messages: exports.MessageTypeArray,
    isDelete: zod_1.z.boolean(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});
exports.ConversationTypeArray = zod_1.z.array(exports.ConversationType);
exports.JoinRoomSchema = zod_1.z.object({
    roomID: common_schema_1.UUIDType,
});
exports.SendRoomMessageSchema = zod_1.z.object({
    conversationID: common_schema_1.UUIDType.default((0, uuid_1.v4)()),
    members: exports.MemberTypeArray,
    message: exports.MessageDTOType,
});
exports.TypingSchema = zod_1.z.object({
    sender: exports.MemberType,
    isTyping: zod_1.z.boolean(),
});
exports.DeleteMessageSchema = zod_1.z.object({
    messageID: common_schema_1.UUIDType,
    conversationID: common_schema_1.UUIDType,
});
exports.EditMessageSchema = exports.DeleteMessageSchema.merge(zod_1.z.object({
    dto: exports.MessageType.omit({
        id: true,
        isDelete: true,
        createdAt: true,
        updatedAt: true,
        sender: true,
    }),
}));
exports.DeleteConversationSchema = zod_1.z.object({ id: common_schema_1.StringType });
exports.RequestMessageSchema = zod_1.z.object({
    sort: zod_1.z.object({
        id: common_schema_1.StringType.optional(),
        members: exports.MemberTypeArray.optional(),
    }),
    pagination: common_schema_1.PaginationType.optional(),
});
exports.RequestContactListSchema = zod_1.z.object({
    sort: exports.MemberType,
    pagination: common_schema_1.PaginationType.optional(),
});
exports.SearchUserByNameSchema = zod_1.z.object({
    limit: zod_1.z.number().optional(),
    offset: zod_1.z.number().optional(),
    name: zod_1.z.string().optional(),
});
//# sourceMappingURL=chat.shema.js.map