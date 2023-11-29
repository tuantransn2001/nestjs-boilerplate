"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsAuthMiddleware = void 0;
const jwt_authGuard_1 = require("../guard/jwt-authGuard");
const WsAuthMiddleware = () => {
    return async (client, next) => {
        var _a;
        try {
            const token = (_a = client === null || client === void 0 ? void 0 : client.handshake) === null || _a === void 0 ? void 0 : _a.headers.authorization;
            jwt_authGuard_1.JwtAuthGuard.validateToken(token);
            next();
        }
        catch (err) {
            next(err);
        }
    };
};
exports.WsAuthMiddleware = WsAuthMiddleware;
//# sourceMappingURL=wsAuthMiddleware.js.map