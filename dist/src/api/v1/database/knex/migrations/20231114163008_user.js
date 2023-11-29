"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const common_1 = require("../../../common/enums/common");
const uuid_1 = require("uuid");
const enum_1 = require("../../../user/enum");
async function up(knex) {
    return await knex.schema.createTable(common_1.ModelName.USER, (table) => {
        table.uuid('id').primary().defaultTo((0, uuid_1.v4)());
        table.text('email').notNullable();
        table.text('phone').notNullable();
        table.enum('type', Object.values(enum_1.UserType)).defaultTo(enum_1.UserType.USER);
        table
            .enum('status', Object.values(enum_1.UserStatus))
            .defaultTo(enum_1.UserStatus.OFFLINE);
        table.text('password');
        table.text('avatar').nullable();
        table.text('first_name');
        table.text('last_name');
        table.text('middle_name');
        table.boolean('is_deleted').defaultTo(true);
        table.boolean('is_active').defaultTo(true);
        table.boolean('is_reported').defaultTo(false);
        table.boolean('is_blocked').defaultTo(false);
        table.timestamp('last_active_at').defaultTo(knex.fn.now());
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
        table.specificType('search_name', 'tsvector');
        table.index('search_name', null, 'gin');
    });
}
exports.up = up;
async function down(knex) {
    return await knex.schema.dropTable(common_1.ModelName.USER);
}
exports.down = down;
//# sourceMappingURL=20231114163008_user.js.map