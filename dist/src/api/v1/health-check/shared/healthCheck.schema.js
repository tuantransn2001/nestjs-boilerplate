"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthCheckSchema = void 0;
const zod_1 = require("zod");
exports.HealthCheckSchema = zod_1.z.object({
    uptime: zod_1.z.number(),
    message: zod_1.z.string().or(zod_1.z.object({
        status: zod_1.z.number(),
        message: zod_1.z.string(),
    })),
    timestamp: zod_1.z.date(),
});
//# sourceMappingURL=healthCheck.schema.js.map