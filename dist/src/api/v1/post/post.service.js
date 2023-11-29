"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const uuid_1 = require("uuid");
const common_1 = require("@nestjs/common");
const common_2 = require("../common/enums/common");
const nestjs_knex_1 = require("nestjs-knex");
const esm_1 = require("awaity/esm");
const stringToSlug_1 = require("../utils/stringToSlug");
const utils_1 = require("../utils");
const api_enums_1 = require("../common/enums/api_enums");
const user_service_1 = require("../user/user.service");
let PostService = class PostService {
    constructor(knex, userService) {
        this.knex = knex;
        this.userService = userService;
    }
    async findUniq(id) {
        const foundPost = await this.knex
            .select('*')
            .from(`${common_2.ModelName.USER_POST} as post`)
            .where({
            published: true,
            id,
        });
        return foundPost ? foundPost[0] : undefined;
    }
    async findPosts(payload) {
        const commentBaseSelector = [
            'comment.id as commentId',
            'comment.content as commentContent',
            'comment.updatedAt as commentUpdatedAt',
            'comment.parentId as commentParentId',
            'author.id as authorId',
            'author.avatar as authorAvatar',
            'author.first_name as authorFirstName',
        ];
        const foundPosts = await this.knex
            .select('post.id as postId', 'post.title as postTitle', 'post.metaTitle as postMetaTitle', 'post.slug as postSlug', 'post.summary as postSummary', 'post.createdAt as postCreatedAt', 'post.updatedAt as postUpdatedAt', 'post.content as postContent', 'author.id as authorId', 'author.avatar as authorAvatar', 'author.first_name as authorFirstName')
            .from(`${common_2.ModelName.USER_POST} as post`)
            .where({
            published: true,
            ...(payload.search ? { ...payload.search } : {}),
        })
            .offset(payload.offset)
            .limit(payload.limit)
            .rightJoin(`${common_2.ModelName.USER} as author`, 'author.id', 'post.authorId')
            .then(async (posts) => {
            return (0, esm_1.map)(posts, async ({ postId, postContent, postTitle, postMetaTitle, postSlug, postSummary, postCreatedAt, postUpdatedAt, authorId, authorAvatar, authorFirstName, }) => {
                const metas = await this.knex
                    .select('meta.id as metaId', 'meta.key as metaKey', 'meta.content as metaContent')
                    .from(`${common_2.ModelName.POST_META} as meta`)
                    .where({
                    postId,
                });
                const likes = await this.knex
                    .select('like.id as likeId', 'author.id as authorId', 'author.first_name as authorFirstName', 'author.avatar as authorAvatar')
                    .from(`${common_2.ModelName.POST_LIKE} as like`)
                    .where({ postId })
                    .rightJoin(`${common_2.ModelName.USER} as author`, 'author.id', 'like.authorId');
                const comments = await this.knex
                    .select(commentBaseSelector)
                    .from(`${common_2.ModelName.POST_COMMENT} as comment`)
                    .where({ postId })
                    .rightJoin(`${common_2.ModelName.USER} as author`, 'author.id', 'comment.authorId')
                    .then(async (comments) => (0, esm_1.map)(comments, async ({ commentId, commentContent, commentUpdatedAt, authorId, authorAvatar, authorFirstName, }) => {
                    const foundChildrenComments = await this.knex
                        .select(commentBaseSelector)
                        .from(`${common_2.ModelName.POST_COMMENT} as comment`)
                        .where({
                        parentId: commentId,
                        published: true,
                    })
                        .rightJoin(`${common_2.ModelName.USER} as author`, 'author.id', 'comment.authorId')
                        .then((comments) => comments.map((comment) => ({ ...comment, layer: 1 })));
                    return {
                        commentId,
                        commentContent,
                        commentUpdatedAt,
                        authorId,
                        authorAvatar,
                        authorFirstName,
                        children: foundChildrenComments,
                    };
                }));
                return {
                    postId,
                    postTitle,
                    postContent,
                    postMetaTitle,
                    postSlug,
                    postSummary,
                    postCreatedAt,
                    postUpdatedAt,
                    author: {
                        authorId,
                        authorAvatar,
                        authorFirstName,
                    },
                    metas,
                    likes: {
                        count: likes.length,
                        data: likes,
                    },
                    comments: {
                        count: comments.length,
                        data: comments,
                    },
                };
            });
        });
        return utils_1.RestFullAPI.onSuccess(api_enums_1.STATUS_CODE.OK, api_enums_1.STATUS_MESSAGE.SUCCESS, foundPosts);
    }
    async createPost(payload) {
        const now = new Date();
        const POST_ID = (0, uuid_1.v4)();
        const NEW_USER_POST = {
            id: POST_ID,
            title: payload.title,
            metaTitle: payload.metaTitle,
            slug: (payload === null || payload === void 0 ? void 0 : payload.title) ? (0, stringToSlug_1.slugify)(payload.title) : '',
            summary: payload.summary,
            content: payload.content,
            authorId: payload.authorId,
            createdAt: now,
            updatedAt: now,
        };
        await this.knex(common_2.ModelName.USER_POST).insert(NEW_USER_POST);
        if (payload === null || payload === void 0 ? void 0 : payload.metas) {
            await (0, esm_1.each)(payload.metas, async ({ key, content }) => {
                const NEW_POST_META = {
                    id: (0, uuid_1.v4)(),
                    key,
                    content,
                    postId: POST_ID,
                    createdAt: now,
                    updatedAt: now,
                };
                await this.knex(common_2.ModelName.POST_META).insert(NEW_POST_META);
            });
        }
        const createdPost = await this.knex
            .select('*')
            .from(`${common_2.ModelName.USER_POST} as post`)
            .where({
            id: POST_ID,
        })
            .first()
            .then(async (post) => {
            const metas = await this.knex(common_2.ModelName.POST_META).where({
                postId: post.id,
            });
            return { ...post, metas };
        });
        return utils_1.RestFullAPI.onSuccess(api_enums_1.STATUS_CODE.OK, api_enums_1.STATUS_MESSAGE.SUCCESS, createdPost);
    }
    async updatePost() {
    }
    async deletePost(payload) {
        const foundPost = await this.findUniq(payload.id);
        if (!foundPost)
            return (0, utils_1.handleErrorNotFound)('Post do not exists');
        const deletedPost = await this.knex(common_2.ModelName.USER_POST)
            .update({
            published: false,
        })
            .where({ id: payload.id })
            .returning([
            'id',
            'title',
            'metaTitle',
            'authorId',
            'slug',
            'summary',
            'content',
            'createdAt',
            'updatedAt',
        ]);
        return utils_1.RestFullAPI.onSuccess(api_enums_1.STATUS_CODE.OK, api_enums_1.STATUS_MESSAGE.SUCCESS, deletedPost);
    }
    async likePost(payload) {
        const foundPost = await this.findUniq(payload.postId);
        if (!foundPost)
            return (0, utils_1.handleErrorNotFound)('Post do not exists');
        const foundAuthor = await this.userService.findUniq(payload.authorId);
        if (!foundAuthor)
            return (0, utils_1.handleErrorNotFound)('Author do not exists');
        const now = new Date();
        const [foundPostLike] = await this.knex(common_2.ModelName.POST_LIKE)
            .where({
            postId: payload.postId,
            authorId: payload.authorId,
        })
            .returning('*');
        if (!foundPostLike) {
            const NEW_POST_LIKE = {
                id: (0, uuid_1.v4)(),
                postId: payload.postId,
                authorId: payload.authorId,
                createdAt: now,
                updatedAt: now,
            };
            const createdPostLike = await this.knex(common_2.ModelName.POST_LIKE)
                .insert(NEW_POST_LIKE)
                .returning('*');
            return utils_1.RestFullAPI.onSuccess(api_enums_1.STATUS_CODE.CREATED, 'Like post successfully!', createdPostLike);
        }
        else {
            const deletedPostLike = await this.knex(common_2.ModelName.POST_LIKE)
                .where({
                postId: payload.postId,
                authorId: payload.authorId,
            })
                .del()
                .returning('*');
            return utils_1.RestFullAPI.onSuccess(api_enums_1.STATUS_CODE.OK, 'Un-like post successfully!', deletedPostLike);
        }
    }
};
PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_knex_1.InjectKnex)()),
    __metadata("design:paramtypes", [Function, user_service_1.UserService])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map