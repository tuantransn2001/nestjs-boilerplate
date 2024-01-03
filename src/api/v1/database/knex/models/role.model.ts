import { Model } from 'objection';
import { ModelName } from '../../../common/enums/common';
import BaseModel from '../../../common/models/base.model';
import { UserModel } from './user.model';
import { RolePermissionModel } from './role_permisstion.model';
export class RoleModel extends BaseModel {
  static get tableName() {
    return ModelName.ROLE;
  }

  name!: string;
  description!: string;
  icon!: string;
  role_code!: string;
  is_active!: number;
  is_deleted: boolean;

  static get relationMappings() {
    return {
      users: {
        relation: Model.ManyToManyRelation,
        modelClass: UserModel,
        join: {
          from: `${ModelName.ROLE}.role_code`,
          through: {
            from: `${ModelName.USER_ROLE}.role_code`,
            to: `${ModelName.USER_ROLE}.user_id`,
          },
          to: `${ModelName.USER}.id`,
        },
      },
      permissions: {
        relation: Model.ManyToManyRelation,
        modelClass: RolePermissionModel,
        join: {
          from: `${ModelName.ROLE}.role_code`,
          through: {
            from: `${ModelName.ROLE_PERMISSION}.role_code`,
            to: `${ModelName.ROLE_PERMISSION}.permission_code`,
          },
          to: `${ModelName.ROLE_PERMISSIONS}.permission_code`,
        },
      },
    };
  }

  public toDto() {
    return {};
  }
}
