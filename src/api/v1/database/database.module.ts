import { Module } from '@nestjs/common';
import { databaseProviders as mongooseDatabaseProviders } from './provider/mongoose-connection.provider';
import { databaseProviders as knexDatabaseProviders } from './provider/knex-connection.provider';
import { User } from './knex/models/user.model';
import { BlockList } from './knex/models/blockList.model';
import { Device } from './knex/models/device.model';
import { UserAccess } from './knex/models/userAccess.model';
import { UserVerification } from './knex/models/userVerification.model';
import { DatabaseHealthIndicator } from './database.health';
import { KnexModule } from 'nestjs-knex';
import { knexOptions } from '../configuration/database.config';

const models = [User, BlockList, Device, UserAccess, UserVerification];

const modelProviders = models.map((model) => ({
  provide: model.name,
  useValue: model,
}));
@Module({
  imports: [
    KnexModule.forRootAsync({
      useFactory: () => knexOptions,
    }),
  ],
  providers: [
    ...modelProviders,
    ...mongooseDatabaseProviders,
    ...knexDatabaseProviders,
    DatabaseHealthIndicator,
  ],
  exports: [
    ...modelProviders,
    ...mongooseDatabaseProviders,
    ...knexDatabaseProviders,
    DatabaseHealthIndicator,
  ],
})
export class DatabaseModule {}
