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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const getPagination_decorator_1 = require("../common/decorator/getPagination.decorator");
const paginationDto_1 = require("../common/dto/output/paginationDto");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async searchUserByName(searchUserByNameDTO, paginationDto) {
        return await this.userService.searchUserByName({
            idsToSkip: 0,
            limit: paginationDto.page_size,
            offset: paginationDto.page_number,
            name: searchUserByNameDTO.name,
        });
    }
};
__decorate([
    (0, common_1.Post)('/search'),
    (0, swagger_1.ApiOperation)({
        summary: 'Search user by name',
        description: 'Search user by name',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'page_number',
        type: Number,
        examples: {
            '0': {
                value: 0,
                description: 'Start from 0',
            },
            '10': {
                value: 10,
                description: `Skip 10 collection`,
            },
        },
    }),
    (0, swagger_1.ApiQuery)({
        name: 'page_size',
        type: Number,
        examples: {
            '10': {
                value: 10,
                description: `Get 10 collection`,
            },
            '50': {
                value: 50,
                description: `Get 50 collection`,
            },
        },
    }),
    (0, swagger_1.ApiQuery)({
        name: 'name',
        type: String,
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, getPagination_decorator_1.GetPagination)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, paginationDto_1.PaginationDtoOutput]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "searchUserByName", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)('User'),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map