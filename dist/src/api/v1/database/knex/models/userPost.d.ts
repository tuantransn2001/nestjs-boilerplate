import { ModelName } from 'src/api/v1/common/enums/common';
import BaseModel from 'src/api/v1/common/models/base.model';
import { PostComment } from './postComment';
import { User } from './user.model';
import { PostLike } from './postLike.model';
export declare class UserPost extends BaseModel {
    static get tableName(): ModelName;
    static get idColumn(): string;
    authorId: string;
    title: string;
    metaTitle?: string | null;
    slug: string;
    summary?: string | null;
    published: boolean;
    content?: string | null;
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
            title: {
                type: string;
                maxLength: number;
            };
            metaTitle: {
                type: string[];
                maxLength: number;
            };
            slug: {
                type: string;
                maxLength: number;
            };
            summary: {
                type: string[];
            };
            published: {
                type: string;
            };
            createdAt: {
                type: string;
            };
            updatedAt: {
                type: string[];
            };
            content: {
                type: string[];
            };
        };
    };
    static get relationMappings(): {
        author: {
            relation: import("objection").RelationType;
            modelClass: typeof User;
            join: {
                from: string;
                to: string;
            };
        };
        comments: {
            relation: import("objection").RelationType;
            modelClass: typeof PostComment;
            join: {
                from: string;
                to: string;
            };
        };
        likes: {
            relation: import("objection").RelationType;
            modelClass: typeof PostLike;
            join: {
                from: string;
                to: string;
            };
        };
        metas: {
            relation: import("objection").RelationType;
            modelClass: ModelName;
            join: {
                from: string;
                to: string;
            };
        };
    };
}
