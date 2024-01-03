import { v4 as uuidv4 } from 'uuid';
import { Knex } from 'knex';
import { ModelName } from '../../../common/enums/common';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(ModelName.USER, (table) => {
    table.uuid('id').primary().defaultTo(uuidv4());
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

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(ModelName.USER);
}
