import { v4 as uuidv4 } from 'uuid';
import type { Knex } from 'knex';
import { ModelName } from '../../../common/enums/common';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(ModelName.ROLE, (table) => {
    table.uuid('id').primary().defaultTo(uuidv4());
    table.string('name', 255).notNullable();
    table.text('description');
    table.string('icon', 255);
    table.string('role_code', 255);
    table.boolean('is_active').notNullable().defaultTo(true);
    table.timestamps(true, true);
    table.timestamp('deleted_at');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(ModelName.ROLE);
}
