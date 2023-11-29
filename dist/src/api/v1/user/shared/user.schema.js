"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const zod_1 = require("zod");
const common_schema_1 = require("../../common/shared/common.schema");
exports.UserSchema = zod_1.z
    .object({
    phone: zod_1.z.string().optional(),
    email: zod_1.z.string().optional(),
    password: zod_1.z.string(),
    first_name: zod_1.z.string(),
    last_name: zod_1.z.string(),
    middle_name: zod_1.z.string(),
    is_active: zod_1.z.boolean().default(true),
    is_reported: zod_1.z.boolean().default(false),
    is_blocked: zod_1.z.boolean().default(false),
    last_active_at: zod_1.z.date().optional(),
})
    .merge(common_schema_1.BaseEntitySchema);
//# sourceMappingURL=user.schema.js.map