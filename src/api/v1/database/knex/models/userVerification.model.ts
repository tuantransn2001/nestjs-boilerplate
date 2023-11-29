import { Model } from 'objection';
import { ModelName } from '../../../common/enums/common';
import BaseModel from '../../../common/models/base.model';
import { User } from './user.model';

export class UserVerification extends BaseModel {
  static get tableName() {
    return ModelName.USER_VERIFICATION;
  }

  verification_code!: string;
  user_id!: string;

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'string' },
        verification_code: { type: 'string' },
        user_id: { type: 'string' },
      },
    };
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: `${ModelName.USER_VERIFICATION}.user_id`,
          to: `${ModelName.USER}.id`,
        },
      },
    };
  }
}
