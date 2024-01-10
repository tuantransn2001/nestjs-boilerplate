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
exports.ChatGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const common_1 = require("@nestjs/common");
const socket_io_1 = require("socket.io");
const event_constants_1 = require("./constants/event_constants");
const chat_service_1 = require("./chat.service");
const wsAuthMiddleware_1 = require("../common/middleware/wsAuthMiddleware");
const wsGuard_1 = require("../common/guard/wsGuard");
let ChatGateway = class ChatGateway {
    constructor(chatService) {
        this.chatService = chatService;
        this.logger = new common_1.Logger();
    }
    async handleConnection(client) {
        this.logger.log(`⚡: Client is connected { id: ${client.id} }`);
    }
    handleDisconnect(client) {
        this.logger.log(`⚡️: Client disconnected { id: ${client.id} }`);
    }
    afterInit(client) {
        this.logger.log(`⚡️: Client is authenticating...`);
        client.use((0, wsAuthMiddleware_1.WsAuthMiddleware)());
    }
    listenClientJoinRoom(clientJoinRoomDTO) {
        return this.chatService.handleClientJoinRoom(clientJoinRoomDTO, this.webSocketServer);
    }
    async listenClientSendRoomMessage(clientSendRoomMessDTO) {
        const isConversationExist = clientSendRoomMessDTO.hasOwnProperty('conversationID') &&
            clientSendRoomMessDTO.conversationID !== '';
        if (isConversationExist) {
            return await this.chatService.handleClientSendRoomMessage(clientSendRoomMessDTO, this.webSocketServer);
        }
        else {
            return await this.chatService.handleClientSendFirstRoomMessage(clientSendRoomMessDTO, this.webSocketServer);
        }
    }
    async listenUserTyping(typingDTO) {
        return this.chatService.handleTyping(typingDTO, this.webSocketServer);
    }
    async listenUserDeleteMessageByID(deleteMessageDTO) {
        return await this.chatService.handleDeleteMessageConversation(deleteMessageDTO, this.webSocketServer);
    }
    async listenUserDeleteConversationByID(deleteConversationDTO) {
        return await this.chatService.handleDeleteConversation(deleteConversationDTO, this.webSocketServer);
    }
    async listenClientRequestRoomMessages(requestRoomMessageDTO) {
        return await this.chatService.handleGetRoomMessages(requestRoomMessageDTO, this.webSocketServer);
    }
    async listenClientRequestContactList(requestContactListDTO) {
        return await this.chatService.handleGetContactList(requestContactListDTO, this.webSocketServer);
    }
    async listenClientEditMessage(editMessageDTO) {
        return await this.chatService.handleEditMessage(editMessageDTO, this.webSocketServer);
    }
    async listenClientBlock() {
        return this.chatService.handleBlockUser();
    }
    async listenClientForwardMessage() {
        return this.chatService.handleForwardMessage();
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ChatGateway.prototype, "webSocketServer", void 0);
__decorate([
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleConnection", null);
__decorate([
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "handleDisconnect", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(event_constants_1.EVENTS.CLIENT.JOIN_ROOM),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "listenClientJoinRoom", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(event_constants_1.EVENTS.CLIENT.SEND_ROOM_MESSAGE),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "listenClientSendRoomMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(event_constants_1.EVENTS.CLIENT.TYPING),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "listenUserTyping", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(event_constants_1.EVENTS.CLIENT.DELETE_MESSAGE),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "listenUserDeleteMessageByID", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(event_constants_1.EVENTS.CLIENT.DELETE_CONVERSATION),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "listenUserDeleteConversationByID", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(event_constants_1.EVENTS.CLIENT.REQUEST_ROOM_MESSAGE),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "listenClientRequestRoomMessages", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(event_constants_1.EVENTS.CLIENT.REQUEST_CONTACT_LIST),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "listenClientRequestContactList", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(event_constants_1.EVENTS.CLIENT.EDIT_MESSAGE),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "listenClientEditMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(event_constants_1.EVENTS.CLIENT.BLOCK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "listenClientBlock", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(event_constants_1.EVENTS.CLIENT.BLOCK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "listenClientForwardMessage", null);
ChatGateway = __decorate([
    (0, common_1.UseGuards)(wsGuard_1.WsGuard),
    (0, websockets_1.WebSocketGateway)({ cors: true }),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatGateway);
exports.ChatGateway = ChatGateway;
//# sourceMappingURL=chat.gateway.js.map