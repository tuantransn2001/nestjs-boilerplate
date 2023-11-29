"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationType = exports.BaseEntitySchema = exports.BooleanType = exports.UUIDType = exports.StringType = void 0;
const zod_1 = require("zod");
exports.StringType = zod_1.z.string();
exports.UUIDType = zod_1.z.string().uuid();
exports.BooleanType = zod_1.z.boolean();
exports.BaseEntitySchema = zod_1.z.object({
    id: exports.StringType,
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});
exports.PaginationType = zod_1.z.object({
    page_size: zod_1.z.number(),
    page_number: zod_1.z.number(),
});
//# sourceMappingURL=common.schema.js.map