import { Model } from 'objection';
export default class BaseModel extends Model {
    id: string;
    is_deleted: boolean;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    $beforeInsert(): void;
    $beforeUpdate(): void;
}
