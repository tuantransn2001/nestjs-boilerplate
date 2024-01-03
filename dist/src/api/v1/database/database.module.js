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
const database_health_1 = require("./database.health");
const nestjs_knex_1 = require("nestjs-knex");
const database_config_1 = require("../configuration/database.config");
const user_model_1 = require("./knex/models/user.model");
const access_token_model_1 = require("./knex/models/access_token.model");
const refresh_token_model_1 = require("./knex/models/refresh_token.model");
const general_setting_model_1 = require("./knex/models/general_setting.model");
const role_permissions_model_1 = require("./knex/models/role_permissions.model");
const role_permisstion_model_1 = require("./knex/models/role_permisstion.model");
const role_model_1 = require("./knex/models/role.model");
const user_role_model_1 = require("./knex/models/user_role.model");
const models = [
    user_model_1.UserModel,
    access_token_model_1.AccessTokenModel,
    refresh_token_model_1.RefreshTokenModel,
    general_setting_model_1.GenerateSettingModel,
    role_permissions_model_1.RolePermissionsModel,
    role_permisstion_model_1.RolePermissionModel,
    role_model_1.RoleModel,
    user_role_model_1.UserRoleModel,
];
const modelProviders = models.map((model) => ({
    provide: model.name,
    useValue: model,
}));
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_knex_1.KnexModule.forRootAsync({
                useFactory: () => database_config_1.knexOptions,
            }),
        ],
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