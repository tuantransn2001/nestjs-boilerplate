import { v4 as uuidv4 } from 'uuid';
import { Model } from 'objection';
import { ModelName } from '../../../common/enums/common';
import BaseModel from '../../../common/models/base.model';
import { RoleModel } from './role.model';
import { AccessTokenModel } from './access_token.model';

export type IUser = {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  is_deleted?: boolean;
  email_verified_at?: Date;
  password?: string;
  avatar_url?: string;
  remember_token?: string;
  password_last_changed?: Date;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
};

export class UserModel extends BaseModel {
  static get tableName() {
    return ModelName.USER;
  }

  name!: string;
  email!: string;
  phone!: string;
  is_deleted!: boolean;
  email_verified_at!: Date;
  password!: string;
  avatar_url!: string;
  remember_token!: string;
  password_last_changed!: Date;

  constructor(user?: IUser) {
    super();
    this.id = user.id || uuidv4();
    this.name = user.name || '';
    this.email = user.email || '';
    this.phone = user.phone || '';
    this.is_deleted = user.is_deleted || false;
    this.email_verified_at = user.email_verified_at || null;
    this.password = user.password || '';
    this.avatar_url = user.avatar_url || '';
    this.remember_token = user.remember_token || null;
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'email'],
      properties: {
        id: { type: 'uuid' },
        name: { type: 'string', maxLength: 191 },
        email: { type: 'string', maxLength: 191 },
        phone: { type: 'string', maxLength: 191 },
        is_deleted: { type: 'boolean' },
        email_verified_at: { type: 'timestamp' },
        password: { type: 'string', maxLength: 255 },
        avatar_url: { type: 'string', maxLength: 255 },
        remember_token: { type: 'string', maxLength: 100 },
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
