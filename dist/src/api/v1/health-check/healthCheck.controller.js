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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthCheckController = void 0;
const common_1 = require("@nestjs/common");
const healthCheck_service_1 = require("./healthCheck.service");
const swagger_1 = require("@nestjs/swagger");
const terminus_1 = require("@nestjs/terminus");
let HealthCheckController = class HealthCheckController {
    constructor(healthCheckService) {
        this.healthCheckService = healthCheckService;
    }
    async checkScreen() {
        return this.healthCheckService.checkServerScreen();
    }
    async checkMongooseConnection() {
        return this.healthCheckService.checkMongooseConnection();
    }
    async checkKenxConnection() {
        return this.healthCheckService.checkKnexConnection();
    }
};
__decorate([
    (0, common_1.Get)('sever/screen'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HealthCheckController.prototype, "checkScreen", null);
__decorate([
    (0, common_1.Get)('/db/mongoose'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HealthCheckController.prototype, "checkMongooseConnection", null);
__decorate([
    (0, common_1.Get)('db/knex'),
    (0, terminus_1.HealthCheck)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HealthCheckController.prototype, "checkKenxConnection", null);
HealthCheckController = __decorate([
    (0, swagger_1.ApiTags)('HealthCheck'),
    (0, common_1.Controller)('/healthCheck'),
    __metadata("design:paramtypes", [healthCheck_service_1.HealthCheckService])
], HealthCheckController);
exports.HealthCheckController = HealthCheckController;
//# sourceMappingURL=healthCheck.controller.js.map