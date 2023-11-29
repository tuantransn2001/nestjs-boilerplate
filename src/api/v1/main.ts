import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';
import { NestExpressApplication } from '@nestjs/platform-express';
import rateLimit from 'express-rate-limit';
import { ValidationPipe } from '@nestjs/common';
import { setupSwagger } from './setup-swagger';
import * as cookieParser from 'cookie-parser';

async function bootstrap(): Promise<NestExpressApplication> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
    bufferLogs: true,
  });

  app.use(cookieParser());

  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
  });

  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    }),
  );

  setupSwagger(app);

  app.useLogger(app.get(Logger));
  app.useGlobalInterceptors(new LoggerErrorInterceptor());
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix(process.env.ROOT_URL);
  await app.listen(process.env.PORT);

  return app;
}
void bootstrap();
