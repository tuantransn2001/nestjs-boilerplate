import { ModelName } from 'src/api/v1/common/enums/common';
import BaseModel from 'src/api/v1/common/models/base.model';
import { UserPost } from './userPost';
declare class PostMeta extends BaseModel {
    static get tableName(): ModelName;
    static get idColumn(): string;
    postId: string;
    key: string;
    content?: string | null;
    static get jsonSchema(): {
        type: string;
        required: string[];
        properties: {
            id: {
                type: string;
            };
            postId: {
                type: string;
            };
            key: {
                type: string;
                maxLength: number;
            };
            content: {
                type: string[];
            };
        };
    };
    static get relationMappings(): {
        post: {
            relation: import("objection").RelationType;
            modelClass: typeof UserPost;
            join: {
                from: string;
                to: string;
            };
        };
    };
}
export default PostMeta;
