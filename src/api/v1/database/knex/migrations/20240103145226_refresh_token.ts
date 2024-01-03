import { v4 as uuidv4 } from 'uuid';
import type { Knex } from 'knex';
import { ModelName } from '../../../common/enums/common';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(ModelName.REFRESH_TOKEN, function (table) {
    table.uuid('id').primary().defaultTo(uuidv4());
    table.uuid('access_token_id').notNullable();
    table
      .foreign('access_token_id')
      .references(`${ModelName.ACCESS_TOKEN}.id`)
      .onDelete('CASCADE');
    table.boolean('revoked').notNullable();
    table.timestamp('expires_at');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(ModelName.REFRESH_TOKEN);
}
