import * as dotenv from 'dotenv';
import { KnexModuleOptions } from 'nestjs-knex';

dotenv.config();

const extension = 'ts';

export const knexOptions: KnexModuleOptions = {
  config: {
    client: 'pg',
    connection: process.env.POSTGRESQL_DB_CONNECT_LINK,
    migrations: {
      directory: './src/api/v1/database/knex/migrations',
      extension: extension,
      loadExtensions: [`.${extension}`],
    },
  },
};
