import * as dotenv from 'dotenv';
import { knex } from 'knex';
import { Model } from 'objection';
import { ProviderName } from '../../common/enums/common';

dotenv.config();

export const databaseProviders = [
  {
    provide: ProviderName.KNEX_CONNECTION,

    useFactory: () => {
      const knexConn = knex({
        client: 'pg',
        connection: process.env.POSTGRESQL_DB_CONNECT_LINK,
        migrations: {
          directory: './src/api/v1/database/knex/migrations',
          extension: 'ts',
          loadExtensions: [`.ts`],
        },
      });

      Model.knex(knexConn);

      return knexConn;
    },
  },
];
