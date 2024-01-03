import { Model } from 'objection';
import { ModelName } from '../../../common/enums/common';
import BaseModel from '../../../common/models/base.model';
import { RoleModel } from './role.model';
import { AccessTokenModel } from './access_token.model';
export class UserModel extends BaseModel {
  static get tableName() {
    return ModelName.USER;
  }

  name!: string;
  email!: string;
  is_active!: boolean;
  email_verified_at!: Date;
  password!: string;
  avatar_url!: string;
  remember_token!: string;
  phone!: string;
  password_last_changed!: Date;

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'email'],
      properties: {
        id: { type: 'uuid' },
        name: { type: 'string', maxLength: 191 },
        email: { type: 'string', maxLength: 191 },
        is_active: { type: 'boolean' },
        country_id: { type: 'integer' },
        email_verified_at: { type: 'timestamp' },
        password: { type: 'string', maxLength: 255 },
        profile_image_path: { type: 'string', maxLength: 255 },
        remember_token: { type: 'string', maxLength: 100 },
        is_two_factor_enabled: { type: 'boolean' },
        two_factor_verification_code: { type: 'text' },
        two_factor_verification_expiry: { type: 'timestamp' },
        password_last_changed: { type: 'timestamp' },
        created_at: { type: 'timestamp' },
        updated_at: { type: 'timestamp' },
        deleted_at: { type: 'timestamp' },
      },
    };
  }

  static get relationMappings() {
    return {
      roles: {
        relation: Model.ManyToManyRelation,
        modelClass: RoleModel,
        join: {
          from: `${ModelName.USER}.id`,
          through: {
            from: `${ModelName.USER_ROLE}.user_id`,
            to: `${ModelName.USER_ROLE}.role_code`,
          },
          to: `${ModelName.ROLE}.role_code`,
        },
      },
      accessTokens: {
        relation: Model.HasManyRelation,
        modelClass: AccessTokenModel,
        join: {
          from: `${ModelName.USER}.id`,
          to: `${ModelName.ACCESS_TOKEN}.user_id`,
        },
      },
    };
  }

  public toDto() {
    return {};
  }
}
