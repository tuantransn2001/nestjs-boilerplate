import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { HealthCheckModule } from './health-check/healthCheck.module';
import { LoggerModule } from 'nestjs-pino';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { KnexModule } from 'nestjs-knex';
import { SeedModule } from './seed/seed.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    KnexModule.forRootAsync({
      useFactory: () => {
        return {
          config: {
            client: 'pg',
            connection: process.env.POSTGRESQL_DB_CONNECT_LINK,
            migrations: {
              directory: './src/api/v1/database/knex/migrations',
              extension: 'ts',
              loadExtensions: ['.ts'],
            },
            seeds: {},
            debug: true,
          },
        };
      },
    }),
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            singleLine: true,
          },
        },
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SeedModule,
    DatabaseModule,
    AuthModule,
    UserModule,
    ChatModule,
    HealthCheckModule,
  ],
})
export class AppModule {}
