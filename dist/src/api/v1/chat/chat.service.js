"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatService = void 0;
const uuid_1 = require("uuid");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const common_2 = require("../common/enums/common");
const event_constants_1 = require("./constants/event_constants");
const apiResponse_1 = require("../utils/apiResponse");
const api_enums_1 = require("../common/enums/api_enums");
const errorHandler_1 = require("../utils/errorHandler");
const awaity_1 = require("awaity");
const helper_1 = require("./helper");
const chat_shema_1 = require("./shared/chat.shema");
const utils_1 = require("../utils");
const user_service_1 = require("../user/user.service");
const message_service_1 = require("./message.service");
let ChatService = class ChatService {
    constructor(conversationModel, userService, messageService) {
        this.conversationModel = conversationModel;
        this.userService = userService;
        this.messageService = messageService;
        this.logger = new common_1.Logger();
    }
    handleClientJoinRoom(clientJoinRoomDTO, server) {
        this.logger.log('CLIENT JOIN ROOM', clientJoinRoomDTO);
        try {
            const data = chat_shema_1.JoinRoomSchema.parse(clientJoinRoomDTO);
            server.sockets.socketsJoin(data.roomID);
            server.sockets.emit(event_constants_1.EVENTS.SERVER.JOINED_ROOM, apiResponse_1.RestFullAPI.onSuccess(api_enums_1.STATUS_CODE.OK, api_enums_1.STATUS_MESSAGE.SUCCESS, {
                message: `user has joined room: ${clientJoinRoomDTO.roomID}`,
            }));
            this.logger.log('CLIENT JOIN ROOM - Successfully!!!');
        }
        catch (err) {
            server.sockets.emit(event_constants_1.EVENTS.SERVER.JOINED_ROOM, (0, errorHandler_1.errorHandler)(err));
            this.logger.log('CLIENT JOIN ROOM - Bad Request!!!', (0, errorHandler_1.errorHandler)(err));
        }
    }
    async handleClientSendRoomMessage(sendRoomMessageDTO, server) {
        this.logger.log(`CLIENT SEND ROOM MESSAGE - Case they did chat each other before`, sendRoomMessageDTO);
        try {
            const data = chat_shema_1.SendRoomMessageSchema.parse(sendRoomMessageDTO);
            const { conversationID, message } = data;
            await this.conversationModel
                .findOneAndUpdate({ id: conversationID }, {
                $push: {
                    messages: { ...message, id: (0, uuid_1.v4)() },
                },
            })
                .then(async () => {
                const responseConversation = await this.messageService.handleGetAllMessageByConversationID(this.conversationModel, conversationID);
                server.sockets.emit(event_constants_1.EVENTS.SERVER.RECEIVE_ROOM_MESSAGE, responseConversation);
                this.logger.log(`CLIENT SEND ROOM MESSAGE - Case they did chat each other before - Successfully!!!`, responseConversation);
            })
                .catch((err) => {
                server.sockets.emit(event_constants_1.EVENTS.SERVER.RECEIVE_ROOM_MESSAGE, (0, errorHandler_1.errorHandler)(err));
                this.logger.log(`CLIENT SEND ROOM MESSAGE - Case they did chat each other before - Fail!!!`, (0, errorHandler_1.errorHandler)(err));
            });
        }
        catch (err) {
            server.sockets.emit(event_constants_1.EVENTS.SERVER.RECEIVE_ROOM_MESSAGE, (0, errorHandler_1.errorHandler)(err));
            this.logger.log(`CLIENT SEND ROOM MESSAGE - Case they did chat each other before - Bad Request!!!`, (0, errorHandler_1.errorHandler)(err));
        }
    }
    async handleClientSendFirstRoomMessage(sendRoomMessageDTO, server) {
        this.logger.log(`CLIENT SEND ROOM MESSAGE - Case they didn't chatted each other before`, sendRoomMessageDTO);
        try {
            const data = chat_shema_1.SendRoomMessageSchema.parse(sendRoomMessageDTO);
            const conversationID = (0, uuid_1.v4)();
            const { members, message } = data;
            const newConversationDocument = {
                id: conversationID,
                members,
                messages: [message],
                name: '',
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            await this.conversationModel
                .create(newConversationDocument)
                .then(async (response) => {
                const responseConversation = await this.messageService.handleGetAllMessageByConversationID(this.conversationModel, conversationID);
                server.sockets.socketsJoin(response.id);
                server.sockets.emit(event_constants_1.EVENTS.SERVER.RECEIVE_ROOM_MESSAGE, responseConversation);
                this.logger.log(`CLIENT SEND ROOM MESSAGE - Case they didn't chatted each other before - Successfully!!!`, responseConversation);
            })
                .catch((err) => {
                server.sockets.emit(event_constants_1.EVENTS.SERVER.RECEIVE_ROOM_MESSAGE, (0, errorHandler_1.errorHandler)(err));
                this.logger.log(`CLIENT SEND ROOM MESSAGE - Case they didn't chatted each other before - Fail!!!`, (0, errorHandler_1.errorHandler)(err));
            });
        }
        catch (err) {
            server.sockets.emit(event_constants_1.EVENTS.SERVER.RECEIVE_ROOM_MESSAGE, (0, errorHandler_1.errorHandler)(err));
            this.logger.log(`CLIENT SEND ROOM MESSAGE - Case they didn't chatted each other before - Bad Request!!!`, (0, errorHandler_1.errorHandler)(err));
        }
    }
    async handleDeleteConversation(deleteMessageDTO, server) {
        this.logger.log(`DELETE CONVERSATION`, deleteMessageDTO);
        try {
            const data = chat_shema_1.DeleteConversationSchema.parse(deleteMessageDTO);
            const { id } = data;
            await this.conversationModel
                .updateOne({ id }, { $set: { isDelete: true } })
                .then(() => {
                server.sockets.emit(event_constants_1.EVENTS.SERVER.DELETE_CONVERSATION_RESULT, apiResponse_1.RestFullAPI.onSuccess(api_enums_1.STATUS_CODE.CREATED, api_enums_1.STATUS_MESSAGE.SUCCESS));
            })
                .catch((err) => {
                server.sockets.emit(event_constants_1.EVENTS.SERVER.DELETE_CONVERSATION_RESULT, (0, errorHandler_1.errorHandler)(err));
            });
        }
        catch (err) {
            server.sockets.emit(event_constants_1.EVENTS.SERVER.DELETE_CONVERSATION_RESULT, (0, errorHandler_1.errorHandler)(err));
        }
    }
    async handleEditMessage(editMessageDTO, server) {
        this.logger.log(`EDIT MESSAGE`, editMessageDTO);
        try {
            const data = chat_shema_1.EditMessageSchema.parse(editMessageDTO);
            const { messageID, conversationID, dto } = data;
            const foundConversation = await this.conversationModel.findOne({
                id: conversationID,
            });
            if (foundConversation) {
                const sourceMessageUpdateSelector = ({ id }) => id === messageID;
                const targetMessageUpdateIndex = foundConversation.messages.findIndex(sourceMessageUpdateSelector);
                if (targetMessageUpdateIndex !== -1) {
                    const updateMessageData = {
                        ...foundConversation.messages[targetMessageUpdateIndex],
                        ...dto,
                    };
                    foundConversation.messages.splice(targetMessageUpdateIndex, 1, updateMessageData);
                    await foundConversation.save();
                    server.sockets.emit(event_constants_1.EVENTS.SERVER.EDIT_MESSAGE_RESULT, apiResponse_1.RestFullAPI.onSuccess(api_enums_1.STATUS_CODE.ACCEPTED, api_enums_1.STATUS_MESSAGE.SUCCESS));
                    this.logger.log(`EDIT MESSAGE - Successfully!!!}`);
                }
                else {
                    const messageError = `messageID: ${messageID} ${api_enums_1.STATUS_MESSAGE.NOT_FOUND}`;
                    server.sockets.emit(event_constants_1.EVENTS.SERVER.EDIT_MESSAGE_RESULT, (0, utils_1.handleErrorNotFound)(messageError));
                    this.logger.log(`EDIT MESSAGE - Fail!!! - ${messageError}`);
                }
            }
            else {
                const messageError = `conversationID: ${conversationID} ${api_enums_1.STATUS_MESSAGE.NOT_FOUND}`;
                server.sockets.emit(event_constants_1.EVENTS.SERVER.EDIT_MESSAGE_RESULT, (0, utils_1.handleErrorNotFound)(messageError));
                this.logger.log(`EDIT MESSAGE - Fail!!! - ${messageError}`);
            }
        }
        catch (err) {
            server.sockets.emit(event_constants_1.EVENTS.SERVER.EDIT_MESSAGE_RESULT, (0, errorHandler_1.errorHandler)(err));
            this.logger.log(`EDIT MESSAGE - Bad Request!!!`, (0, errorHandler_1.errorHandler)(err));
        }
    }
    async handleDeleteMessageConversation(deleteMessageDTO, server) {
        this.logger.log(`CLIENT DELETE ROOM MESSAGE`, deleteMessageDTO);
        try {
            const data = chat_shema_1.DeleteMessageSchema.parse(deleteMessageDTO);
            const { conversationID, messageID } = data;
            await this.conversationModel
                .updateOne({ id: conversationID, 'messages.id': messageID }, { $set: { 'messages.$.isDelete': true } })
                .then(() => {
                server.sockets.emit(event_constants_1.EVENTS.SERVER.DELETE_MESSAGE_RESULT, apiResponse_1.RestFullAPI.onSuccess(api_enums_1.STATUS_CODE.CREATED, api_enums_1.STATUS_MESSAGE.SUCCESS));
                this.logger.log(`CLIENT DELETE ROOM MESSAGE - Successfully!!!`);
            })
                .catch((err) => {
                server.sockets.emit(event_constants_1.EVENTS.SERVER.DELETE_MESSAGE_RESULT, (0, errorHandler_1.errorHandler)(err));
                this.logger.log(`CLIENT DELETE ROOM MESSAGE - Fail!!!`, (0, errorHandler_1.errorHandler)(err));
            });
        }
        catch (err) {
            server.sockets.emit(event_constants_1.EVENTS.SERVER.DELETE_MESSAGE_RESULT, (0, errorHandler_1.errorHandler)(err));
            this.logger.log(`CLIENT DELETE ROOM MESSAGE - Bad Request!!!`, (0, errorHandler_1.errorHandler)(err));
        }
    }
    async handleTyping(typingDTO, server) {
        this.logger.log(`CLIENT TYPING`, typingDTO);
        try {
            const data = chat_shema_1.TypingSchema.parse(typingDTO);
            const { sender, isTyping } = data;
            server.sockets.emit(event_constants_1.EVENTS.SERVER.IS_TYPING, apiResponse_1.RestFullAPI.onSuccess(api_enums_1.STATUS_CODE.OK, api_enums_1.STATUS_MESSAGE.SUCCESS, {
                sender,
                isTyping,
            }));
            this.logger.log(`CLIENT TYPING - Successfully!!!`);
        }
        catch (err) {
            server.sockets.emit(event_constants_1.EVENTS.SERVER.IS_TYPING, (0, errorHandler_1.errorHandler)(err));
            this.logger.log(`CLIENT TYPING - Bad Request!!!`, (0, errorHandler_1.errorHandler)(err));
        }
    }
    async handleGetContactList(requestContactListDTO, server) {
        this.logger.log(`GET CONTACT LIST`, requestContactListDTO);
        try {
            const data = chat_shema_1.RequestContactListSchema.parse(requestContactListDTO);
            const { id, type } = data.sort;
            const { _skip, _limit } = (0, helper_1.handleGetPagination)(data.pagination);
            const foundUserContactList = await this.conversationModel
                .find({
                members: { $elemMatch: { id, type } },
                isDelete: false,
            }, {
                isDelete: 0,
                _id: 0,
                'members._id': 0,
            })
                .skip(_skip)
                .limit(_limit);
            const arrUniqMemberDetail = (0, helper_1.handleGetUniqObjInArr)(foundUserContactList
                .map(({ members }) => {
                return [...members];
            })
                .flat(1), ['id', 'type']);
            const arrUniqMemberFullDetail = await this.messageService.handleGetFullUserDetailByIDList(arrUniqMemberDetail);
            const handleGetMemberDetailByIdAndType = (members) => {
                return members.reduce((result, member) => {
                    const memberFullDetailIndex = arrUniqMemberFullDetail.findIndex((m) => (0, helper_1.handleCheckTwoUserIsOne)({ ...m, id: m.id.toString() }, member));
                    if (memberFullDetailIndex !== -1) {
                        result.push({
                            ...arrUniqMemberFullDetail[memberFullDetailIndex],
                            id: arrUniqMemberFullDetail[memberFullDetailIndex].id.toString(),
                        });
                    }
                    return result;
                }, []);
            };
            const responseContactList = await (0, awaity_1.map)(foundUserContactList, async (userContactItem) => {
                const { id: conversationID, members, name, messages, createdAt, updatedAt, } = userContactItem;
                return {
                    conversationID,
                    name,
                    members: handleGetMemberDetailByIdAndType(members),
                    lastMessage: (0, helper_1.handleGetLastMessage)(messages),
                    createdAt,
                    updatedAt,
                };
            });
            server.emit(event_constants_1.EVENTS.SERVER.RECEIVE_CONTACT_LIST, apiResponse_1.RestFullAPI.onSuccess(api_enums_1.STATUS_CODE.OK, api_enums_1.STATUS_MESSAGE.SUCCESS, responseContactList));
            this.logger.log(`GET CONTACT LIST - Successfully!!!`, responseContactList);
        }
        catch (err) {
            server.emit(event_constants_1.EVENTS.SERVER.RECEIVE_CONTACT_LIST, (0, errorHandler_1.errorHandler)(err));
            this.logger.log(`GET CONTACT LIST - Bad Request!!!`, (0, errorHandler_1.errorHandler)(err));
        }
    }
    async handleGetRoomMessages(requestRoomMessageDTO, server) {
        this.logger.log(`CLIENT GET ROOM MESSAGE`, requestRoomMessageDTO);
        try {
            const data = chat_shema_1.RequestMessageSchema.parse(requestRoomMessageDTO);
            const { id, members } = data.sort;
            const isGetByID = members === undefined;
            if (isGetByID) {
                const responseMessages = await this.messageService.handleGetAllMessageByConversationID(this.conversationModel, id);
                server.sockets.emit(event_constants_1.EVENTS.SERVER.RECEIVE_ROOM_MESSAGE, responseMessages);
                this.logger.log(`CLIENT GET ROOM MESSAGE - GetByID - Successfully!!!`, responseMessages);
            }
            else {
                const responseMessages = await this.messageService.handleGetAllConversationByMembers(this.conversationModel, members);
                server.sockets.emit(event_constants_1.EVENTS.SERVER.RECEIVE_ROOM_MESSAGE, responseMessages);
                this.logger.log(`CLIENT GET ROOM MESSAGE - GetByMembers - Successfully!!!`, responseMessages);
            }
        }
        catch (err) {
            server.sockets.emit(event_constants_1.EVENTS.SERVER.RECEIVE_ROOM_MESSAGE, (0, errorHandler_1.errorHandler)(err));
            this.logger.log(`CLIENT GET ROOM MESSAGE - Bad Request!!!`, (0, errorHandler_1.errorHandler)(err));
        }
    }
    async handleSearchUserByName(searchUserByNameDTO, server) {
        this.logger.log(`SEARCH USER BY NAME`, searchUserByNameDTO);
        try {
            const data = chat_shema_1.SearchUserByNameSchema.parse(searchUserByNameDTO);
            const { name } = data;
            const userListResponse = await this.userService.searchUserByName({
                offset: 1,
                limit: 10,
                name: name,
                idsToSkip: 0,
            });
            server.emit(event_constants_1.EVENTS.SERVER.RECEIVE_USER_LIST, userListResponse);
            this.logger.log(`SEARCH USER BY NAME - Successfully!!!`, userListResponse);
        }
        catch (err) {
            server.emit(event_constants_1.EVENTS.SERVER.RECEIVE_USER_LIST, (0, errorHandler_1.errorHandler)(err));
            this.logger.log(`SEARCH USER BY NAME - Bad Request!!!`, (0, errorHandler_1.errorHandler)(err));
        }
    }
    handleBlockUser() {
        this.logger.log(`Block user`);
    }
    handleForwardMessage() {
        this.logger.log(`Forward message`);
    }
};
ChatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(common_2.ModelName.CONVERSATION)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        user_service_1.UserService,
        message_service_1.MessageService])
], ChatService);
exports.ChatService = ChatService;
//# sourceMappingURL=chat.service.js.map