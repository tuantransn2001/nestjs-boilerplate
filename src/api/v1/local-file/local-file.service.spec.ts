import { Test, TestingModule } from '@nestjs/testing';
import { LocalFileService } from './local-file.service';
import { DatabaseModule } from '../database/database.module';
import { modelDefineProvider } from '../common/provider';
import { ModelName } from '../common/enums/common';
import { LocalFile } from './entities/localFile.entity';
describe('LocalFileService', () => {
  let service: LocalFileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      providers: [
        ...modelDefineProvider(ModelName.LOCAL_FILE, LocalFile),
        LocalFileService,
      ],
    }).compile();

    service = module.get<LocalFileService>(LocalFileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
