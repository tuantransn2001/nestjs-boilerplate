import { ModelName } from '../../../common/enums/common';
import BaseModel from '../../../common/models/base.model';
export class GenerateSettingModel extends BaseModel {
  static get tableName() {
    return ModelName.GENERAL_SETTING;
  }

  name!: string;
  display_name!: string;
  value!: string;
  is_specific!: boolean;
  is_multilang!: boolean;
  type!: string;
  page!: string;

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'display_name'],
      properties: {
        id: { type: 'uuid' },
        name: { type: 'string', maxLength: 255 },
        display_name: { type: 'string', maxLength: 255 },
        value: { type: 'text' },
        is_specific: { type: 'integer' },
        is_multilang: { type: 'boolean' },
        type: { type: 'string', maxLength: 255 },
        page: { type: 'string', maxLength: 255 },
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
