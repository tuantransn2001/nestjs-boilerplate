import { Model } from 'objection';
import { ModelName } from '../../../common/enums/common';
import BaseModel from '../../../common/models/base.model';
import { UserModel } from './user.model';
import { RefreshTokenModel } from './refresh_token.model';
export class AccessTokenModel extends BaseModel {
  static get tableName() {
    return ModelName.ACCESS_TOKEN;
  }

  user_id!: string;
  name!: string;
  scopes!: string;
  revoked!: boolean;
  expires_at: Date;

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['client_id', 'revoked'],
      properties: {
        id: { type: 'uuid' },
        user_id: { type: 'string', maxLength: 255 },
        name: { type: 'string', maxLength: 255 },
        scopes: { type: 'text' },
        revoked: { type: 'boolean' },
        created_at: { type: 'timestamp' },
        updated_at: { type: 'timestamp' },
        expires_at: { type: 'timestamp' },
      },
    };
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: `${ModelName.ACCESS_TOKEN}.user_id`,
          to: `${ModelName.USER}.id`,
        },
      },
      refreshToken: {
        relation: Model.HasOneRelation,
        modelClass: RefreshTokenModel,
        join: {
          from: `${ModelName.ACCESS_TOKEN}.id`,
          to: `${ModelName.REFRESH_TOKEN}.access_token_id`,
        },
      },
    };
  }

  public toDto() {
    return {};
  }
}
