// eslint-disable-next-line @typescript-eslint/no-var-requires
import * as dotenv from 'dotenv';
import { Knex } from 'knex';
import { KnexModuleOptions } from 'nestjs-knex';
dotenv.config();

const extension = 'ts';

export const knexConfig: Knex.Config | KnexModuleOptions = {
  client: 'pg',
  // connection: process.env.POSTGRESQL_DB_CONNECT_LINK,
  connection: 'postgresql://postgres:tuantransn2001@localhost:5432/messenger',
  migrations: {
    directory: './src/api/v1/database/knex/migrations',
    extension: extension,
    loadExtensions: [`.${extension}`],
  },
};

module.exports = knexConfig;
