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
exports.CommentService = void 0;
const uuid_1 = require("uuid");
const common_1 = require("@nestjs/common");
const nestjs_knex_1 = require("nestjs-knex");
const common_2 = require("../common/enums/common");
const post_service_1 = require("../post/post.service");
const esm_1 = require("awaity/esm");
const utils_1 = require("../utils");
const api_enums_1 = require("../common/enums/api_enums");
const user_service_1 = require("../user/user.service");
let CommentService = class CommentService {
    constructor(knex, postService, userService) {
        this.knex = knex;
        this.postService = postService;
        this.userService = userService;
    }
    async getAllPostComments(payload) {
        const foundPost = await this.postService.findUniq(payload.postId);
        if (!foundPost)
            return (0, utils_1.handleErrorNotFound)('Post do not exists');
        const commentBaseSelector = [
            'comment.id as commentId',
            'comment.title as commentTitle',
            'comment.updatedAt as commentUpdatedAt',
            'comment.content as commentContent',
            'comment.parentId as  commentParentId',
            'author.id as authorId',
            'author.first_name as authorFirstName',
            'author.avatar as authorAvatar',
        ];
        const foundComments = await this.knex
            .select(commentBaseSelector)
            .from(`${common_2.ModelName.POST_COMMENT} as comment`)
            .where({
            published: true,
            parentId: null,
            postId: payload.postId,
        })
            .rightJoin(`${common_2.ModelName.USER} as author`, 'author.id', 'comment.authorId')
            .offset(payload.offset)
            .limit(payload.limit)
            .then(async (comments) => await (0, esm_1.map)(comments, async ({ commentId, commentTitle, commentUpdatedAt, authorId, authorFirstName, authorAvatar, }) => {
            const foundChildrenComments = await this.knex
                .select(commentBaseSelector)
                .from(`${common_2.ModelName.POST_COMMENT} as comment`)
                .where({
                parentId: commentId,
                published: true,
            })
                .rightJoin(`${common_2.ModelName.USER} as author`, 'author.id', 'comment.authorId')
                .then((comments) => comments.map((comment) => ({ ...comment, layer: 1 })));
            const likes = await this.knex
                .select('like.id as likeId', 'author.id as authorId', 'author.first_name as authorFirstName', 'author.avatar as authorAvatar')
                .from(`${common_2.ModelName.COMMENT_LIKE} as like`)
                .where({ commentId })
                .rightJoin(`${common_2.ModelName.USER} as author`, 'author.id', 'like.authorId');
            return {
                commentId,
                commentTitle,
                commentUpdatedAt,
                authorId,
                authorFirstName,
                authorAvatar,
                layer: 0,
                likes: {
                    count: likes === null || likes === void 0 ? void 0 : likes.length,
                    data: likes,
                },
                children: foundChildrenComments,
            };
        }));
        return utils_1.RestFullAPI.onSuccess(api_enums_1.STATUS_CODE.OK, api_enums_1.STATUS_MESSAGE.SUCCESS, foundComments);
    }
    async addPostComment(payload) {
        const foundPost = await this.postService.findUniq(payload.postId);
        if (!foundPost)
            return (0, utils_1.handleErrorNotFound)('Post do not exist');
        const now = new Date();
        const NEW_POST_COMMENT = {
            id: (0, uuid_1.v4)(),
            title: payload.title,
            content: payload.content,
            published: true,
            parentId: payload.parentId || null,
            postId: payload.postId,
            authorId: payload.authorId,
            publishedAt: now,
            createdAt: now,
            updatedAt: now,
        };
        const [createdComment] = await this.knex(common_2.ModelName.POST_COMMENT)
            .insert(NEW_POST_COMMENT)
            .returning([
            'id',
            'title',
            'content',
            'authorId',
            'postId',
            'parentId',
            'createdAt',
            'updatedAt',
        ]);
        return utils_1.RestFullAPI.onSuccess(api_enums_1.STATUS_CODE.CREATED, api_enums_1.STATUS_MESSAGE.SUCCESS, createdComment);
    }
    async findUniq(id) {
        const foundComment = await this.knex
            .select('*')
            .where({ id, published: true })
            .from(common_2.ModelName.POST_COMMENT);
        return foundComment ? foundComment[0] : undefined;
    }
    async deletePostComment(payload) {
        const foundPostComment = await this.findUniq(payload.id);
        if (!foundPostComment)
            return (0, utils_1.handleErrorNotFound)('Comment do not exists');
        const deletedComment = await this.knex(common_2.ModelName.POST_COMMENT)
            .update({
            published: false,
        })
            .where({ id: payload.id })
            .returning([
            'id',
            'title',
            'content',
            'authorId',
            'postId',
            'parentId',
            'createdAt',
            'updatedAt',
        ]);
        return utils_1.RestFullAPI.onSuccess(api_enums_1.STATUS_CODE.OK, api_enums_1.STATUS_MESSAGE.SUCCESS, deletedComment);
    }
    async likePostComment(payload) {
        const foundPostComment = await this.findUniq(payload.commentId);
        if (!foundPostComment)
            return (0, utils_1.handleErrorNotFound)('Post comment do not exists');
        const foundAuthor = await this.userService.findUniq(payload.authorId);
        if (!foundAuthor)
            return (0, utils_1.handleErrorNotFound)('Author do not exists');
        const now = new Date();
        const [foundPostCommentLike] = await this.knex(common_2.ModelName.COMMENT_LIKE)
            .where({
            commentId: payload.commentId,
            authorId: payload.authorId,
        })
            .returning('*');
        if (!foundPostCommentLike) {
            const NEW_POST_LIKE = {
                id: (0, uuid_1.v4)(),
                commentId: payload.commentId,
                authorId: payload.authorId,
                createdAt: now,
                updatedAt: now,
            };
            const createdPostLike = await this.knex(common_2.ModelName.COMMENT_LIKE)
                .insert(NEW_POST_LIKE)
                .returning('*');
            return utils_1.RestFullAPI.onSuccess(api_enums_1.STATUS_CODE.CREATED, 'Like comment successfully!', createdPostLike);
        }
        else {
            const deletedPostLike = await this.knex(common_2.ModelName.COMMENT_LIKE)
                .where({
                commentId: payload.commentId,
                authorId: payload.authorId,
            })
                .del()
                .returning('*');
            return utils_1.RestFullAPI.onSuccess(api_enums_1.STATUS_CODE.OK, 'Un-like comment successfully!', deletedPostLike);
        }
    }
    async updatePostComment() {
    }
};
CommentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_knex_1.InjectKnex)()),
    __metadata("design:paramtypes", [Function, post_service_1.PostService,
        user_service_1.UserService])
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map