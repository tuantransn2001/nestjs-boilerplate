import { ModelName } from '../../../common/enums/common';
import BaseModel from '../../../common/models/base.model';
export class UserRoleModel extends BaseModel {
  static get tableName() {
    return ModelName.USER_ROLE;
  }

  role_id!: string;
  user_id!: number;

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['role_id', 'user_id'],
      properties: {
        id: { type: 'uuid' },
        role_id: { type: 'uuid' },
        user_id: { type: 'uuid' },
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
