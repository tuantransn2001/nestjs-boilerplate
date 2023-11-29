import { Model } from 'objection';
import { ModelName } from '../../../common/enums/common';
import BaseModel from '../../../common/models/base.model';
import { Device } from './device.model';
import { BlockList } from './blockList.model';

export class UserAccess extends BaseModel {
  static get tableName() {
    return ModelName.USER_ACCESS;
  }

  token!: string;
  user_id!: string;
  device_id!: string;

  static get joinSchema() {
    return {
      type: 'object',
      required: ['user_id', 'device_id'],
      properties: {
        id: { type: 'string' },
        token: { type: 'string' },
        user_id: { type: 'string' },
        device_id: { type: 'string' },
      },
    };
  }

  static get relationMappings() {
    return {
      devices: {
        relation: Model.BelongsToOneRelation,
        modelClass: Device,
        join: {
          from: `${ModelName.USER_ACCESS}.user_id`,
          to: `${ModelName.DEVICE}.id`,
        },
      },
      blockList: {
        relation: Model.HasManyRelation,
        modelClass: BlockList,
        join: {
          from: `${ModelName.USER_ACCESS}.user_id`,
          to: `${ModelName.BLOCK_LIST}.user_id`,
        },
      },
    };
  }
}
