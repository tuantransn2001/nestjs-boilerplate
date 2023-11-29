import { Model } from 'objection';
import { ModelName } from '../../../common/enums/common';
import BaseModel from '../../../common/models/base.model';
import { UserAccess } from './userAccess.model';
import { User } from './user.model';

export class BlockList extends BaseModel {
  static get tableName() {
    return ModelName.BLOCK_LIST;
  }

  user_id!: string;

  user: User;

  static get joinSchema() {
    return {
      type: 'object',
      required: ['user_id'],
      properties: { id: { type: 'string' }, user_id: { type: 'string' } },
    };
  }

  static get relationMappings() {
    return {
      userAccess: {
        relation: Model.HasManyRelation,
        modelClass: UserAccess,
        join: {
          to: `${ModelName.USER_ACCESS}.user_id`,
          from: `${ModelName.BLOCK_LIST}.user_id`,
        },
      },
    };
  }
}
