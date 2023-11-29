import { ModelName } from 'src/api/v1/common/enums/common';
import BaseModel from 'src/api/v1/common/models/base.model';
import { UserPost } from './userPost';
import { User } from './user.model';
export declare class PostComment extends BaseModel {
    static get tableName(): ModelName;
    static get idColumn(): string;
    postId: string;
    parentId?: string | null;
    authorId?: string | null;
    title: string;
    published: boolean;
    publishedAt?: Date | null;
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
            authorId: {
                type: string;
            };
            parentId: {
                type: string[];
            };
            title: {
                type: string;
                maxLength: number;
            };
            published: {
                type: string;
            };
            publishedAt: {
                type: string[];
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
        user: {
            relation: import("objection").RelationType;
            modelClass: typeof User;
            join: {
                from: string;
                to: string;
            };
        };
        parentComment: {
            relation: import("objection").RelationType;
            modelClass: typeof PostComment;
            join: {
                from: string;
                to: string;
            };
        };
    };
    toDto(): {
        id: string;
        title: string;
        content: string;
        authorId: string;
        parentId: string;
        createdAt: Date;
        updatedAt: Date;
    };
}
