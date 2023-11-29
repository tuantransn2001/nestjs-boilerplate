import { Knex } from 'knex';
import { ModelName } from '../../../common/enums/common';
import { DeviceType } from '../../../user/enum';
import { v4 as uuidv4 } from 'uuid';
export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable(ModelName.DEVICE, (table) => {
    table.uuid('id').primary().defaultTo(uuidv4());
    table
      .uuid('user_id')
      .index()
      .references('id')
      .inTable(ModelName.USER)
      .defaultTo(uuidv4());
    table.text('device_id');
    table.enum('type', Object.values(DeviceType));
    table.text('device_token');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable(ModelName.DEVICE);
}
