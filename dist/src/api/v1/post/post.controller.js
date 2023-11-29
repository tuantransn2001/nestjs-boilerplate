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
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const post_service_1 = require("./post.service");
const swagger_1 = require("@nestjs/swagger");
const getPagination_decorator_1 = require("../common/decorator/getPagination.decorator");
const paginationDto_1 = require("../common/dto/output/paginationDto");
const createPostDto_1 = require("./dto/input/createPostDto");
const getAllPostDto_1 = require("./dto/input/getAllPostDto");
const deletePostDto_1 = require("./dto/input/deletePostDto");
const likePostDto_1 = require("./dto/input/likePostDto");
let PostController = class PostController {
    constructor(postService) {
        this.postService = postService;
    }
    async getPost(getAllPostDto, paginationDto) {
        return await this.postService.findPosts({
            idsToSkip: 0,
            limit: paginationDto.page_size,
            offset: paginationDto.page_number,
            search: paginationDto.search,
        });
    }
    async createPost(createPostDto) {
        return await this.postService.createPost(createPostDto);
    }
    async deletePost(deletePostDto) {
        return await this.postService.deletePost(deletePostDto);
    }
    async likePost(likePostDto) {
        return await this.postService.likePost(likePostDto);
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, getPagination_decorator_1.GetPagination)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getAllPostDto_1.GetAllPostDto,
        paginationDto_1.PaginationDtoOutput]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getPost", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createPostDto_1.CreatePostDto]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "createPost", null);
__decorate([
    (0, common_1.Delete)('/'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deletePostDto_1.DeletePostDto]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "deletePost", null);
__decorate([
    (0, common_1.Post)('/like'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [likePostDto_1.LikePostDto]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "likePost", null);
PostController = __decorate([
    (0, swagger_1.ApiTags)('post'),
    (0, common_1.Controller)('post'),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map