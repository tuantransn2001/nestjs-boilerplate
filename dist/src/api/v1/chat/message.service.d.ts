import { IConversation, MemberType } from './shared/chat.interface';
import { Model } from 'mongoose';
import { UserService } from '../user/user.service';
export declare class MessageService {
    private readonly userService;
    constructor(userService: UserService);
    handleFilterMessageAlreadyExist(messages: MemberType[]): Promise<any>;
    handleGetAllConversationByMembers: (conversationModel: Model<IConversation>, members: {
        id?: string;
        type?: string;
    }[]) => Promise<{
        statusCode: number;
        error: import("../utils").HttpException;
    } | {
        statusCode: number;
        message: string;
        data: any;
    }>;
    handleGetAllMessageByConversationID: (ConversationModel: Model<IConversation>, id: string) => Promise<{
        statusCode: number;
        error: import("../utils").HttpException;
    } | {
        statusCode: number;
        message: string;
        data: any;
    }>;
    handleGetFullUserDetailByIDList: (members: {
        id?: string;
        type?: string;
    }[]) => Promise<any[]>;
}
