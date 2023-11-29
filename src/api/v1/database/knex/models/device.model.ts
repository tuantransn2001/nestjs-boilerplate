import { Model } from 'objection';
import { ModelName } from '../../../common/enums/common';
import BaseModel from '../../../common/models/base.model';
import { DeviceType } from '../../../user/enum';
import { User } from './user.model';
import { UserAccess } from './userAccess.model';

export class Device extends BaseModel {
  static get tableName() {
    return ModelName.DEVICE;
  }
  user_id!: string;
  device_id!: string;
  type!: DeviceType;
  device_token!: string;

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['user_id', 'device_id', 'device_token'],
      properties: {
        id: { type: 'string' },
        user_id: { type: 'string' },
        device_id: { type: 'string' },
        type: { type: typeof DeviceType },
        device_token: { type: 'string' },
      },
    };
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: `${ModelName.DEVICE}.user_id`,
          to: `${ModelName.USER}.id`,
        },
      },
      userAccess: {
        relation: Model.HasOneRelation,
        modelClass: UserAccess,
        join: {
          from: `${ModelName.DEVICE}.id`,
          to: `${ModelName.USER_ACCESS}.device_id`,
        },
      },
    };
  }
}
