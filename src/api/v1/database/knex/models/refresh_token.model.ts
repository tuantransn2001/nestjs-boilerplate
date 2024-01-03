import { ModelName } from '../../../common/enums/common';
import BaseModel from '../../../common/models/base.model';
export class RefreshTokenModel extends BaseModel {
  static get tableName() {
    return ModelName.REFRESH_TOKEN;
  }

  access_token_id!: string;
  revoked!: boolean;
  expires_at: Date;

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['access_token_id', 'revoked'],
      properties: {
        id: { type: 'uuid' },
        access_token_id: { type: 'uuid' },
        revoked: { type: 'boolean' },
        expires_at: { type: 'timestamp' },
      },
    };
  }

  static get relationMappings() {
    return {};
  }

  public toDto() {
    return {};
  }
}
