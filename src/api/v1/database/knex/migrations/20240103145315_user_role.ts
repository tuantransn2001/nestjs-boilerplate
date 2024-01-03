import { v4 as uuidv4 } from 'uuid';
import type { Knex } from 'knex';
import { ModelName } from '../../../common/enums/common';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(ModelName.USER_ROLE, (table) => {
    table.uuid('id').primary().defaultTo(uuidv4());
    table.uuid('role_id').unsigned();
    table.uuid('user_id').unsigned();
    table
      .foreign('user_id')
      .references(`${ModelName.USER}.id`)
      .onDelete('CASCADE');
    table
      .foreign('role_id')
      .references(`${ModelName.ROLE}.id`)
      .onDelete('CASCADE');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(ModelName.USER_ROLE);
}
