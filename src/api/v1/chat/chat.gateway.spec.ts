import { Test } from '@nestjs/testing';
import { ChatGateway } from './chat.gateway';
import { INestApplication } from '@nestjs/common';
import { ChatService } from './chat.service';
import { modelDefineProvider } from '../common/provider';
import { Conversation } from './entities/conversation.entity';
import { DatabaseModule } from '../database/database.module';
import { ModelName } from '../common/enums/common';
import { UserService } from '../user/user.service';
import { MessageService } from './message.service';
async function createNestApp(): Promise<INestApplication> {
  const testingModule = await Test.createTestingModule({
    imports: [DatabaseModule],
    providers: [
      ...modelDefineProvider(ModelName.CONVERSATION, Conversation),
      ChatGateway,
      ChatService,
      UserService,
      MessageService,
    ],
  }).compile();
  return testingModule.createNestApplication();
}
describe('ChatGateway', () => {
  let gateway: ChatGateway;
  let app: INestApplication;

  beforeAll(async () => {
    app = await createNestApp();

    gateway = app.get<ChatGateway>(ChatGateway);

    app.listen(3000);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
