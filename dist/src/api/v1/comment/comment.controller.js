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
exports.CommentController = void 0;
const common_1 = require("@nestjs/common");
const comment_service_1 = require("./comment.service");
const getAllPostCommentsDto_1 = require("./dto/getAllPostCommentsDto");
const getPagination_decorator_1 = require("../common/decorator/getPagination.decorator");
const paginationDto_1 = require("../common/dto/output/paginationDto");
const addPostCommentDto_1 = require("./dto/addPostCommentDto");
const deletePostCommentDto_1 = require("./dto/deletePostCommentDto");
const likePostCommentDto_1 = require("./dto/likePostCommentDto");
let CommentController = class CommentController {
    constructor(commentService) {
        this.commentService = commentService;
    }
    async getPostComments(getAllPostCommentsDto, paginationDto) {
        return await this.commentService.getAllPostComments({
            offset: paginationDto.page_number,
            limit: paginationDto.page_size,
            postId: getAllPostCommentsDto.postId,
        });
    }
    async addPostComment(addPostCommentDto) {
        return await this.commentService.addPostComment(addPostCommentDto);
    }
    async likePostComment(likePostCommentDto) {
        return await this.commentService.likePostComment(likePostCommentDto);
    }
    async deletePostComment(deletePostComment) {
        return await this.commentService.deletePostComment(deletePostComment);
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, getPagination_decorator_1.GetPagination)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getAllPostCommentsDto_1.GetAllPostCommentsDto,
        paginationDto_1.PaginationDtoOutput]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "getPostComments", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addPostCommentDto_1.AddPostCommentDto]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "addPostComment", null);
__decorate([
    (0, common_1.Post)('/like'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [likePostCommentDto_1.LikePostCommentDto]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "likePostComment", null);
__decorate([
    (0, common_1.Delete)('/'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deletePostCommentDto_1.DeletePostCommentDto]),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "deletePostComment", null);
CommentController = __decorate([
    (0, common_1.Controller)('comment'),
    __metadata("design:paramtypes", [comment_service_1.CommentService])
], CommentController);
exports.CommentController = CommentController;
//# sourceMappingURL=comment.controller.js.map