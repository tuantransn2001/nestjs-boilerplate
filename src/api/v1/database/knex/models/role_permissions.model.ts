import { ModelName } from '../../../common/enums/common';
import BaseModel from '../../../common/models/base.model';
export class RolePermissionsModel extends BaseModel {
  static get tableName() {
    return ModelName.ROLE_PERMISSIONS;
  }

  display_name!: string;
  permission_code!: string;
  display_group!: string;

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['display_name', 'permission_code', 'display_group'],
      properties: {
        id: { type: 'uuid' },
        display_name: { type: 'string', maxLength: 255 },
        permission_code: { type: 'string', maxLength: 199 },
        display_group: { type: 'string', maxLength: 2555 },
        created_at: { type: 'timestamp' },
        updated_at: { type: 'timestamp' },
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
