import { knex } from 'knex';
import { ProviderName } from '../../common/enums/common';
export declare const databaseProviders: {
    provide: ProviderName;
    useFactory: () => knex.Knex<any, unknown[]>;
}[];
