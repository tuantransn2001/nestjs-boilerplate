import { Module } from '@nestjs/common';
import { databaseProviders as mongooseDatabaseProviders } from './provider/mongoose-connection.provider';
import { databaseProviders as knexDatabaseProviders } from './provider/knex-connection.provider';

import { DatabaseHealthIndicator } from './database.health';
import { KnexModule } from 'nestjs-knex';
import { knexOptions } from '../configuration/database.config';
import { UserModel } from './knex/models/user.model';
import { AccessTokenModel } from './knex/models/access_token.model';
import { RefreshTokenModel } from './knex/models/refresh_token.model';
import { GenerateSettingModel } from './knex/models/general_setting.model';
import { RolePermissionsModel } from './knex/models/role_permissions.model';
import { RolePermissionModel } from './knex/models/role_permisstion.model';
import { RoleModel } from './knex/models/role.model';
import { UserRoleModel } from './knex/models/user_role.model';

const models = [
  UserModel,
  AccessTokenModel,
  RefreshTokenModel,
  GenerateSettingModel,
  RolePermissionsModel,
  RolePermissionModel,
  RoleModel,
  UserRoleModel,
];

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
