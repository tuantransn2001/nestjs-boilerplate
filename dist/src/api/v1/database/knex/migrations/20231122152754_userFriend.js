"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const uuid_1 = require("uuid");
const common_1 = require("../../../common/enums/common");
const enum_1 = require("../../../user/enum");
async function up(knex) {
    return await knex.schema.createTable(common_1.ModelName.USER_FIEND, (table) => {
        table.uuid('id').primary().defaultTo((0, uuid_1.v4)());
        table.text('notes');
        table
            .enum('type', Object.values(enum_1.UserFriendType))
            .defaultTo(enum_1.UserFriendType.DEFAULT);
        table
            .enum('status', Object.values(enum_1.UserFriendStatus))
            .defaultTo(enum_1.UserFriendStatus.NEW);
        table
            .uuid('source_id')
            .index()
            .references('id')
            .inTable(common_1.ModelName.USER)
            .defaultTo((0, uuid_1.v4)());
        table
            .uuid('target_id')
            .index()
            .references('id')
            .inTable(common_1.ModelName.USER)
            .defaultTo((0, uuid_1.v4)());
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
    });
}
exports.up = up;
async function down(knex) {
    return await knex.schema.dropTable(common_1.ModelName.USER_FIEND);
}
exports.down = down;
//# sourceMappingURL=20231122152754_userFriend.js.map