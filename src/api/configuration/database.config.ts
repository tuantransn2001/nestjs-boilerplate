import { KnexModuleOptions } from 'nestjs-knex';

const extension = 'ts';

export const knexOptions: KnexModuleOptions = {
  config: {
    client: 'pg',
    connection: 'postgresql://postgres:tuantransn2001@localhost:5432/messenger',
    migrations: {
      directory: './src/api/v1/database/knex/migrations',
      extension: extension,
      loadExtensions: [`.${extension}`],
    },
  },
};
