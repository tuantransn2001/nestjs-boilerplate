import { Model } from 'objection';
export default class BaseModel extends Model {
    id: string;
    is_deleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    $beforeInsert(): void;
    $beforeUpdate(): void;
}
