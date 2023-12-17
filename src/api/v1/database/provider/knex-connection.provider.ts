import { knex } from 'knex';
import { Model } from 'objection';
import { ProviderName } from '../../common/enums/common';
export const databaseProviders = [
  {
    provide: ProviderName.KNEX_CONNECTION,

    useFactory: () => {
      const knexConn = knex({
        client: 'pg',
        connection:
          'postgresql://postgres:tuantransn2001@localhost:5432/messenger',
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
