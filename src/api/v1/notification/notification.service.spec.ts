import { Test, TestingModule } from '@nestjs/testing';
import { NotificationService } from './notification.service';
import { ModelName } from '../common/enums/common';
import { modelDefineProvider } from '../common/provider';
import { Notification } from './entities/notification.entity';
import { DatabaseModule } from '../database/database.module';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [
        ...modelDefineProvider(ModelName.NOTIFICATION, Notification),
        NotificationService,
      ],
    }).compile();

    service = module.get<NotificationService>(NotificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
