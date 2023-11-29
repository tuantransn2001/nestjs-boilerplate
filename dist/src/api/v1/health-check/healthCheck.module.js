"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthCheckModule = void 0;
const common_1 = require("@nestjs/common");
const provider_1 = require("../common/provider");
const database_module_1 = require("../database/database.module");
const common_2 = require("../common/enums/common");
const healthCheck_entity_1 = require("./entities/healthCheck.entity");
const healthCheck_controller_1 = require("./healthCheck.controller");
const healthCheck_service_1 = require("./healthCheck.service");
const terminus_1 = require("@nestjs/terminus");
let HealthCheckModule = class HealthCheckModule {
};
HealthCheckModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, terminus_1.TerminusModule],
        controllers: [healthCheck_controller_1.HealthCheckController],
        providers: [
            ...(0, provider_1.modelDefineProvider)(common_2.ModelName.HEALTH_CHECK, healthCheck_entity_1.HealthCheck),
            healthCheck_service_1.HealthCheckService,
        ],
    })
], HealthCheckModule);
exports.HealthCheckModule = HealthCheckModule;
//# sourceMappingURL=healthCheck.module.js.map