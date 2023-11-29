"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const common_1 = require("../../../common/enums/common");
const enum_1 = require("../../../user/enum");
const uuid_1 = require("uuid");
async function up(knex) {
    return await knex.schema.createTable(common_1.ModelName.DEVICE, (table) => {
        table.uuid('id').primary().defaultTo((0, uuid_1.v4)());
        table
            .uuid('user_id')
            .index()
            .references('id')
            .inTable(common_1.ModelName.USER)
            .defaultTo((0, uuid_1.v4)());
        table.text('device_id');
        table.enum('type', Object.values(enum_1.DeviceType));
        table.text('device_token');
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
    });
}
exports.up = up;
async function down(knex) {
    return await knex.schema.dropTable(common_1.ModelName.DEVICE);
}
exports.down = down;
//# sourceMappingURL=20231114163013_device.js.map