import { v4 as uuidv4 } from 'uuid';
import type { Knex } from 'knex';
import { ModelName } from '../../../common/enums/common';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(ModelName.ACCESS_TOKEN, function (table) {
    table.uuid('id').primary().defaultTo(uuidv4());
    table.uuid('user_id').unsigned();
    table
      .foreign('user_id')
      .references(`${ModelName.USER}.id`)
      .onDelete('CASCADE');
    table.string('name');
    table.text('scopes');
    table.boolean('revoked').notNullable();
    table.timestamps(true, true);
    table.timestamp('expires_at');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(ModelName.ACCESS_TOKEN);
}
