"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const uuid_1 = require("uuid");
const common_1 = require("../../../common/enums/common");
async function up(knex) {
    return await knex.schema.createTable(common_1.ModelName.POST_LIKE, (table) => {
        table.uuid('id').primary().defaultTo((0, uuid_1.v4)());
        table
            .uuid('postId')
            .index()
            .references('id')
            .inTable(common_1.ModelName.USER_POST)
            .defaultTo((0, uuid_1.v4)());
        table
            .uuid('authorId')
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
    return await knex.schema.dropTable(common_1.ModelName.POST_LIKE);
}
exports.down = down;
//# sourceMappingURL=20231124093417_postLike.js.map