import { v4 as uuidv4 } from 'uuid';
import type { Knex } from 'knex';
import { ModelName } from '../../../common/enums/common';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(ModelName.GENERAL_SETTING, function (table) {
    table.uuid('id').primary().defaultTo(uuidv4());
    table.uuid('user_id').unsigned();
    table
      .foreign('user_id')
      .references(`${ModelName.USER}.id`)
      .onDelete('CASCADE');
    table.string('name', 255).notNullable();
    table.string('display_name', 255).notNullable();
    table.text('value');
    table.boolean('is_specific').notNullable().defaultTo(false);
    table.boolean('is_multilang').notNullable().defaultTo(false);
    table.string('type', 255);
    table.string('page', 255);
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(ModelName.GENERAL_SETTING);
}
