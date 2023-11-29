import { ModelName } from 'src/api/v1/common/enums/common';
import BaseModel from 'src/api/v1/common/models/base.model';
import { UserPost } from './userPost';
import { User } from './user.model';
export declare class CommentLike extends BaseModel {
    static get tableName(): ModelName;
    static get idColumn(): string;
    authorId: string;
    commentId: string;
    static get jsonSchema(): {
        type: string;
        required: string[];
        properties: {
            id: {
                type: string;
            };
            authorId: {
                type: string;
            };
            commentId: {
                type: string;
            };
            createdAt: {
                type: string;
            };
            updatedAt: {
                type: string[];
            };
        };
    };
    static get relationMappings(): {
        comment: {
            relation: import("objection").RelationType;
            modelClass: typeof UserPost;
            join: {
                from: string;
                to: string;
            };
        };
        user: {
            relation: import("objection").RelationType;
            modelClass: typeof User;
            join: {
                from: string;
                to: string;
            };
        };
    };
}
