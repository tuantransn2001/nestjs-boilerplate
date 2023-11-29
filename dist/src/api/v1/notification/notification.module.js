"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationModule = void 0;
const common_1 = require("@nestjs/common");
const notification_service_1 = require("./notification.service");
const database_module_1 = require("../database/database.module");
const common_2 = require("../common/enums/common");
const provider_1 = require("../common/provider");
const notification_entity_1 = require("./entities/notification.entity");
let NotificationModule = class NotificationModule {
};
NotificationModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        providers: [
            ...(0, provider_1.modelDefineProvider)(common_2.ModelName.NOTIFICATION, notification_entity_1.Notification),
            notification_service_1.NotificationService,
        ],
    })
], NotificationModule);
exports.NotificationModule = NotificationModule;
//# sourceMappingURL=notification.module.js.map