import { Model } from 'mongoose';
import { Server } from 'socket.io';
import { DeleteConversationDTO, DeleteMessageDTO, RequestContactListDTO, TypingDTO, SearchUserByNameDTO, RequestRoomMessageDTO, SendRoomMessageDTO, JoinRoomDTO, EditMessageDTO } from './dto/input';
import { IConversation } from './shared/chat.interface';
import { UserService } from '../user/user.service';
import { MessageService } from './message.service';
export declare class ChatService {
    private readonly conversationModel;
    private readonly userService;
    private readonly messageService;
    private readonly logger;
    constructor(conversationModel: Model<IConversation>, userService: UserService, messageService: MessageService);
    handleClientJoinRoom<D extends JoinRoomDTO, S extends Server>(clientJoinRoomDTO: D, server: S): void;
    handleClientSendRoomMessage<D extends SendRoomMessageDTO, S extends Server>(sendRoomMessageDTO: D, server: S): Promise<void>;
    handleClientSendFirstRoomMessage<D extends SendRoomMessageDTO, S extends Server>(sendRoomMessageDTO: D, server: S): Promise<void>;
    handleDeleteConversation<D extends DeleteConversationDTO, S extends Server>(deleteMessageDTO: D, server: S): Promise<void>;
    handleEditMessage<D extends EditMessageDTO, S extends Server>(editMessageDTO: D, server: S): Promise<void>;
    handleDeleteMessageConversation<D extends DeleteMessageDTO, S extends Server>(deleteMessageDTO: D, server: S): Promise<void>;
    handleTyping<D extends TypingDTO, S extends Server>(typingDTO: D, server: S): Promise<void>;
    handleGetContactList<D extends RequestContactListDTO, S extends Server>(requestContactListDTO: D, server: S): Promise<void>;
    handleGetRoomMessages<D extends RequestRoomMessageDTO, S extends Server>(requestRoomMessageDTO: D, server: S): Promise<void>;
    handleSearchUserByName<D extends SearchUserByNameDTO, S extends Server>(searchUserByNameDTO: D, server: S): Promise<void>;
    handleBlockUser(): void;
    handleForwardMessage(): void;
}
