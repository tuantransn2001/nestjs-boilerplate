import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';
import { ProviderName } from '../../common/enums/common';

dotenv.config();

export const databaseProviders = [
  {
    provide: ProviderName.MONGOOSE_CONNECTION,
    useFactory: () =>
      mongoose.connect(`${process.env.MONGOOSE_DB_CONNECT_LINK}`),
  },
];
