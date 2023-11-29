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
var DatabaseHealthIndicator_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseHealthIndicator = void 0;
const common_1 = require("@nestjs/common");
const terminus_1 = require("@nestjs/terminus");
const knex_1 = require("knex");
const common_2 = require("../common/enums/common");
const KEY = 'database';
let DatabaseHealthIndicator = DatabaseHealthIndicator_1 = class DatabaseHealthIndicator extends terminus_1.HealthIndicator {
    constructor(knex) {
        super();
        this.knex = knex;
        this.logger = new common_1.Logger(DatabaseHealthIndicator_1.name);
    }
    async isHealthy() {
        try {
            await this.knex.raw('SELECT 1+1 as result');
            return this.getStatus(KEY, true, { status: 'up' });
        }
        catch (error) {
            this.logger.error('Database connection failed', error);
            throw new terminus_1.HealthCheckError('Database connection failed', this.getStatus(KEY, true, { status: 'down' }));
        }
    }
};
DatabaseHealthIndicator = DatabaseHealthIndicator_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(common_2.ProviderName.KNEX_CONNECTION)),
    __metadata("design:paramtypes", [Function])
], DatabaseHealthIndicator);
exports.DatabaseHealthIndicator = DatabaseHealthIndicator;
//# sourceMappingURL=database.health.js.map