"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_connection_provider_1 = require("./provider/mongoose-connection.provider");
const knex_connection_provider_1 = require("./provider/knex-connection.provider");
const user_model_1 = require("./knex/models/user.model");
const blockList_model_1 = require("./knex/models/blockList.model");
const device_model_1 = require("./knex/models/device.model");
const userAccess_model_1 = require("./knex/models/userAccess.model");
const userVerification_model_1 = require("./knex/models/userVerification.model");
const database_health_1 = require("./database.health");
const models = [user_model_1.User, blockList_model_1.BlockList, device_model_1.Device, userAccess_model_1.UserAccess, userVerification_model_1.UserVerification];
const modelProviders = models.map((model) => ({
    provide: model.name,
    useValue: model,
}));
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    (0, common_1.Module)({
        providers: [
            ...modelProviders,
            ...mongoose_connection_provider_1.databaseProviders,
            ...knex_connection_provider_1.databaseProviders,
            database_health_1.DatabaseHealthIndicator,
        ],
        exports: [
            ...modelProviders,
            ...mongoose_connection_provider_1.databaseProviders,
            ...knex_connection_provider_1.databaseProviders,
            database_health_1.DatabaseHealthIndicator,
        ],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map