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
exports.HealthCheckService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const common_2 = require("../common");
const api_enums_1 = require("../common/enums/api_enums");
const common_3 = require("../common/enums/common");
const apiResponse_1 = require("../utils/apiResponse");
const errorHandler_1 = require("../utils/errorHandler");
const terminus_1 = require("@nestjs/terminus");
const database_health_1 = require("../database/database.health");
let HealthCheckService = class HealthCheckService {
    constructor(healthCheckModel, health, knexDB) {
        this.healthCheckModel = healthCheckModel;
        this.health = health;
        this.knexDB = knexDB;
    }
    checkServerScreen() {
        try {
            return apiResponse_1.RestFullAPI.onSuccess(api_enums_1.STATUS_CODE.OK, api_enums_1.STATUS_MESSAGE.SUCCESS, common_2.healthCheck);
        }
        catch (err) {
            return (0, errorHandler_1.errorHandler)(err);
        }
    }
    async checkMongooseConnection() {
        try {
            const checkData = await this.healthCheckModel.findOneAndUpdate({ event: 'check' }, { event: 'check' }, {
                new: true,
                upsert: true,
            });
            const isUp = checkData !== undefined;
            if (isUp) {
                return apiResponse_1.RestFullAPI.onSuccess(api_enums_1.STATUS_CODE.OK, api_enums_1.STATUS_MESSAGE.SUCCESS, checkData);
            }
            else {
                return apiResponse_1.RestFullAPI.onFail(api_enums_1.STATUS_CODE.SERVICE_UNAVAILABLE, {
                    message: api_enums_1.STATUS_MESSAGE.SERVICE_UNAVAILABLE,
                });
            }
        }
        catch (err) {
            return (0, errorHandler_1.errorHandler)(err);
        }
    }
    async checkKnexConnection() {
        try {
            return this.health.check([() => this.knexDB.isHealthy()]);
        }
        catch (err) {
            return (0, errorHandler_1.errorHandler)(err);
        }
    }
};
HealthCheckService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(common_3.ModelName.HEALTH_CHECK)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        terminus_1.HealthCheckService,
        database_health_1.DatabaseHealthIndicator])
], HealthCheckService);
exports.HealthCheckService = HealthCheckService;
//# sourceMappingURL=healthCheck.service.js.map