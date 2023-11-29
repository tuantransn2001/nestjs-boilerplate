import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { errorHandler } from '../utils';
import { InjectKnex, Knex } from 'nestjs-knex';

@Injectable()
export class SeedService implements OnModuleInit {
  private readonly logger = new Logger();
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async onModuleInit() {
    try {
      this.logger.log('Seed service is working...');
    } catch (err) {
      return errorHandler(err);
    }
  }
}
