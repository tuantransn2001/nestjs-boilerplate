"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var JwtAuthGuard_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
let JwtAuthGuard = JwtAuthGuard_1 = class JwtAuthGuard {
    constructor() {
        this.logger = new common_1.Logger();
    }
    async canActivate(context) {
        this.logger.log('JwtAuthGuard canActivate is working!!!');
        const gqlCtx = context.getArgByIndex(2);
        const request = gqlCtx.req;
        const token = request === null || request === void 0 ? void 0 : request.cookies.access_token;
        JwtAuthGuard_1.validateToken(token);
        return true;
    }
    static validateToken(token) {
        return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    }
};
JwtAuthGuard = JwtAuthGuard_1 = __decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;
//# sourceMappingURL=jwt-authGuard.js.map