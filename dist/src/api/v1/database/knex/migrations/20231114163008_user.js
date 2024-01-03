"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const uuid_1 = require("uuid");
const common_1 = require("../../../common/enums/common");
async function up(knex) {
    await knex.schema.createTable(common_1.ModelName.USER, (table) => {
        table.uuid('id').primary().defaultTo((0, uuid_1.v4)());
        table.string('name', 191).notNullable();
        table.string('email', 191).notNullable();
        table.boolean('is_active').defaultTo(true);
        table.timestamp('email_verified_at');
        table.string('password', 255);
        table.string('avatar_url', 255);
        table.string('remember_token', 100);
        table.timestamps(true, true);
        table.timestamp('deleted_at');
    });
}
exports.up = up;
async function down(knex) {
    await knex.schema.dropTableIfExists(common_1.ModelName.USER);
}
exports.down = down;
//# sourceMappingURL=20231114163008_user.js.map