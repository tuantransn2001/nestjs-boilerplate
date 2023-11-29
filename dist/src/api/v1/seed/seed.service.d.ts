import { OnModuleInit } from '@nestjs/common';
import { Knex } from 'nestjs-knex';
import { UserService } from '../user/user.service';
import { IConversation } from '../chat/shared/chat.interface';
import { Model } from 'mongoose';
import { INotification } from '../notification/shared/notification.interface';
import { NotificationService } from '../notification/notification.service';
export declare class SeedService implements OnModuleInit {
    private readonly knex;
    private readonly userService;
    private readonly conversationModel;
    private readonly notificationModel;
    private readonly notificationService;
    private readonly logger;
    constructor(knex: Knex, userService: UserService, conversationModel: Model<IConversation>, notificationModel: Model<INotification>, notificationService: NotificationService);
    onModuleInit(): Promise<{
        statusCode: number;
        error: import("../utils").HttpException;
    }>;
}
