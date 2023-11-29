import * as mongoose from 'mongoose';
import { ProviderName } from '../../common/enums/common';
export declare const databaseProviders: {
    provide: ProviderName;
    useFactory: () => Promise<typeof mongoose>;
}[];
