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
exports.SeedService = void 0;
const uuid_1 = require("uuid");
const common_1 = require("@nestjs/common");
const utils_1 = require("../utils");
const nestjs_knex_1 = require("nestjs-knex");
const user_service_1 = require("../user/user.service");
const faker_1 = require("@faker-js/faker");
const enum_1 = require("../user/enum");
const common_2 = require("../common/enums/common");
const mongoose_1 = require("mongoose");
const notification_constants_1 = require("../chat/constants/notification_constants");
const notification_service_1 = require("../notification/notification.service");
let SeedService = class SeedService {
    constructor(knex, userService, conversationModel, notificationModel, notificationService) {
        this.knex = knex;
        this.userService = userService;
        this.conversationModel = conversationModel;
        this.notificationModel = notificationModel;
        this.notificationService = notificationService;
        this.logger = new common_1.Logger();
    }
    async onModuleInit() {
        try {
            function randomNumber(min, max) {
                const result = Math.random() * (max - min) + min;
                return parseInt(result.toString());
            }
            const TARGET_USER_ID = 'a45aa5cd-c43d-4ec8-8284-a64cefc174e6';
            const TARGET_USER_TYPE = enum_1.UserType.ADMIN;
            const NOTIFICATIONS = [];
            for (let i = 0; i <= 99; i++) {
                const NEW_NOTIFICATION = {
                    id: (0, uuid_1.v4)(),
                    title: `Notification - ${i + 1}`,
                    description: `Send noti to user - index : ${i + 1}`,
                    icon: faker_1.faker.image.url(),
                    type: i % 2 === 0 ? notification_constants_1.NotificationType.INFO : notification_constants_1.NotificationType.WARNING,
                    read: false,
                    user: {
                        id: TARGET_USER_ID,
                        type: TARGET_USER_TYPE,
                    },
                };
                NOTIFICATIONS.push(NEW_NOTIFICATION);
            }
            await this.notificationModel.deleteMany();
            console.log(await this.notificationModel.insertMany(NOTIFICATIONS));
            console.log(await this.notificationService.getAll({
                userId: TARGET_USER_ID,
                userType: TARGET_USER_TYPE,
            }));
        }
        catch (err) {
            return (0, utils_1.errorHandler)(err);
        }
    }
};
SeedService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_knex_1.InjectKnex)()),
    __param(2, (0, common_1.Inject)(common_2.ModelName.CONVERSATION)),
    __param(3, (0, common_1.Inject)(common_2.ModelName.NOTIFICATION)),
    __metadata("design:paramtypes", [Function, user_service_1.UserService,
        mongoose_1.Model,
        mongoose_1.Model,
        notification_service_1.NotificationService])
], SeedService);
exports.SeedService = SeedService;
//# sourceMappingURL=seed.service.js.map