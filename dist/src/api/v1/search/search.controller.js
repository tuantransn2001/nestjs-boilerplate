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
exports.SearchController = void 0;
const common_1 = require("@nestjs/common");
const search_service_1 = require("./search.service");
const getUserSearchHistoriesDto_1 = require("./dto/getUserSearchHistoriesDto");
const createUserSearchHistory_1 = require("./dto/createUserSearchHistory");
const deleteUserSearchHistory_1 = require("./dto/deleteUserSearchHistory");
const getPagination_decorator_1 = require("../common/decorator/getPagination.decorator");
const paginationDto_1 = require("../common/dto/output/paginationDto");
let SearchController = class SearchController {
    constructor(searchService) {
        this.searchService = searchService;
    }
    async getUserSearchHistories(paginationDto, getUserSearchHistoriesDto) {
        return await this.searchService.getUserSearchHistories({
            userId: getUserSearchHistoriesDto.userId,
            offset: paginationDto.page_number,
            limit: paginationDto.page_size,
        });
    }
    async createUserSearchHistory(createUserSearchHistoryDto) {
        return await this.searchService.createUserSearchHistory(createUserSearchHistoryDto);
    }
    async deleteUserSearchHistory(deleteUserSearchHistoryDto) {
        return await this.searchService.deleteUserSearchHistory(deleteUserSearchHistoryDto);
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, getPagination_decorator_1.GetPagination)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [paginationDto_1.PaginationDtoOutput,
        getUserSearchHistoriesDto_1.GetUserSearchHistoriesDto]),
    __metadata("design:returntype", Promise)
], SearchController.prototype, "getUserSearchHistories", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUserSearchHistory_1.CreateUserSearchHistoryDto]),
    __metadata("design:returntype", Promise)
], SearchController.prototype, "createUserSearchHistory", null);
__decorate([
    (0, common_1.Delete)('/'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deleteUserSearchHistory_1.DeleteUserSearchHistoryDto]),
    __metadata("design:returntype", Promise)
], SearchController.prototype, "deleteUserSearchHistory", null);
SearchController = __decorate([
    (0, common_1.Controller)('search'),
    __metadata("design:paramtypes", [search_service_1.SearchService])
], SearchController);
exports.SearchController = SearchController;
//# sourceMappingURL=search.controller.js.map