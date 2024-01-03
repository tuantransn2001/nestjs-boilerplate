import { v4 as uuidv4 } from 'uuid';
import type { Knex } from 'knex';
import { ModelName } from '../../../common/enums/common';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(ModelName.ROLE_PERMISSION, (table) => {
    table.uuid('id').primary().defaultTo(uuidv4());
    table.uuid('role_permission_id').unsigned();
    table
      .foreign('role_permission_id')
      .references(`${ModelName.ROLE_PERMISSIONS}.id`)
      .onDelete('CASCADE');
    table.uuid('role_id').unsigned();
    table
      .foreign('role_id')
      .references(`${ModelName.ROLE}.id`)
      .onDelete('CASCADE');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(ModelName.ROLE_PERMISSION);
}
