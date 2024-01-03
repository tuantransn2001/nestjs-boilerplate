"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelName = exports.ProviderName = void 0;
var ProviderName;
(function (ProviderName) {
    ProviderName["MONGOOSE_CONNECTION"] = "MONGOOSE_CONNECTION";
    ProviderName["KNEX_CONNECTION"] = "KNEX_CONNECTION";
})(ProviderName = exports.ProviderName || (exports.ProviderName = {}));
var ModelName;
(function (ModelName) {
    ModelName["CONVERSATION"] = "Conversation";
    ModelName["NOTIFICATION"] = "Notification";
    ModelName["USER"] = "Users";
    ModelName["GENERAL_SETTING"] = "GeneralSettings";
    ModelName["ACCESS_TOKEN"] = "AccessTokens";
    ModelName["REFRESH_TOKEN"] = "RefreshTokens";
    ModelName["ROLE"] = "Roles";
    ModelName["USER_ROLE"] = "UserRoles";
    ModelName["ROLE_PERMISSION"] = "RolePermission";
    ModelName["ROLE_PERMISSIONS"] = "RolePermissions";
    ModelName["HEALTH_CHECK"] = "HealthCheck";
})(ModelName = exports.ModelName || (exports.ModelName = {}));
//# sourceMappingURL=common.js.map