"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedModule = void 0;
const common_1 = require("@nestjs/common");
const seed_service_1 = require("./seed.service");
const user_service_1 = require("../user/user.service");
const database_module_1 = require("../database/database.module");
const common_2 = require("../common/enums/common");
const provider_1 = require("../common/provider");
const conversation_entity_1 = require("../chat/entities/conversation.entity");
const notification_entity_1 = require("../notification/entities/notification.entity");
const notification_service_1 = require("../notification/notification.service");
let SeedModule = class SeedModule {
};
SeedModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [],
        providers: [
            seed_service_1.SeedService,
            user_service_1.UserService,
            notification_service_1.NotificationService,
            ...(0, provider_1.modelDefineProvider)(common_2.ModelName.CONVERSATION, conversation_entity_1.Conversation),
            ...(0, provider_1.modelDefineProvider)(common_2.ModelName.NOTIFICATION, notification_entity_1.Notification),
        ],
    })
], SeedModule);
exports.SeedModule = SeedModule;
//# sourceMappingURL=seed.module.js.map