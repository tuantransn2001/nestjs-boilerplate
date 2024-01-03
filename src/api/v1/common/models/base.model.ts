import { Model } from 'objection';
import { v4 as uuidv4 } from 'uuid';
import { getCurrentTime } from '..';
export default abstract class BaseModel extends Model {
  id!: string;
  is_deleted!: boolean;
  created_at!: Date;
  updated_at!: Date;
  deleted_at!: Date;

  $beforeInsert() {
    if (!this.id) this.id = uuidv4();
    this.created_at = getCurrentTime();
    this.updated_at = getCurrentTime();
  }

  $beforeUpdate() {
    this.updated_at = getCurrentTime();
  }
}
