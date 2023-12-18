import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { HealthCheckModule } from './health-check/healthCheck.module';
import { LoggerModule } from 'nestjs-pino';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { SeedModule } from './seed/seed.module';
import { UserModule } from './user/user.module';
import { LocalFileModule } from './local-file/local-file.module';

@Module({
  imports: [
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
    LocalFileModule,
  ],
})
export class AppModule {}
