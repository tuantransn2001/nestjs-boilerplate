import { v4 as uuidv4 } from 'uuid';
import type { Knex } from 'knex';
import { ModelName } from '../../../common/enums/common';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(ModelName.ROLE_PERMISSIONS, (table) => {
    table.uuid('id').primary().defaultTo(uuidv4());
    table.string('display_name', 255).notNullable();
    table.string('permission_code', 199).notNullable();
    table.string('display_group', 2555).notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(ModelName.ROLE_PERMISSIONS);
}
