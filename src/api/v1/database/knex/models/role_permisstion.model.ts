import { Model } from 'objection';
import { ModelName } from '../../../common/enums/common';
import BaseModel from '../../../common/models/base.model';
import { RoleModel } from './role.model';
export class RolePermissionModel extends BaseModel {
  static get tableName() {
    return ModelName.ROLE_PERMISSION;
  }

  role_permission_id!: string;
  role_id!: string;

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['permission_code'],
      properties: {
        id: { type: 'uuid' },
        role_permission_id: { type: 'uuid' },
        role_id: { type: 'uuid' },
      },
    };
  }
  static get relationMappings() {
    return {
      roles: {
        relation: Model.ManyToManyRelation,
        modelClass: RoleModel,
        join: {
          from: `${ModelName.ROLE_PERMISSIONS}.id`,
          through: {
            from: `${ModelName.ROLE_PERMISSION}.role_permission_id`,
            to: `${ModelName.ROLE_PERMISSION}.role_id`,
          },
          to: `${ModelName.ROLE}.id`,
        },
      },
    };
  }
  public toDto() {
    return {};
  }
}
