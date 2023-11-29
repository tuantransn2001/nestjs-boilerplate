import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server as SocketServer, Socket } from 'socket.io';
import { ChatService } from './chat.service';
import { JoinRoomDTO, SendRoomMessageDTO, TypingDTO, DeleteMessageDTO, DeleteConversationDTO, RequestRoomMessageDTO, RequestContactListDTO, EditMessageDTO } from './dto/input';
export declare class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private chatService;
    private readonly logger;
    webSocketServer: SocketServer;
    constructor(chatService: ChatService);
    handleConnection(client: Socket): Promise<void>;
    handleDisconnect(client: Socket): void;
    afterInit(client: Socket): void;
    listenClientJoinRoom(clientJoinRoomDTO: JoinRoomDTO): void;
    listenClientSendRoomMessage(clientSendRoomMessDTO: SendRoomMessageDTO): Promise<void>;
    listenUserTyping(typingDTO: TypingDTO): Promise<void>;
    listenUserDeleteMessageByID(deleteMessageDTO: DeleteMessageDTO): Promise<void>;
    listenUserDeleteConversationByID(deleteConversationDTO: DeleteConversationDTO): Promise<void>;
    listenClientRequestRoomMessages(requestRoomMessageDTO: RequestRoomMessageDTO): Promise<void>;
    listenClientRequestContactList(requestContactListDTO: RequestContactListDTO): Promise<void>;
    listenClientEditMessage(editMessageDTO: EditMessageDTO): Promise<void>;
    listenClientBlock(): Promise<void>;
    listenClientForwardMessage(): Promise<void>;
}
