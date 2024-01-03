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
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils").HttpException;
    }>;
    handleGetAllMessageByConversationID: (ConversationModel: Model<IConversation>, id: string) => Promise<{
        statusCode: number;
        message: string;
        data: any;
    } | {
        statusCode: number;
        error: import("../utils").HttpException;
    }>;
    handleGetFullUserDetailByIDList: (members: {
        id?: string;
        type?: string;
    }[]) => Promise<any[]>;
}
