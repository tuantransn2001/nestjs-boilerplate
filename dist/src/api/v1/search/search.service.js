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
exports.SearchService = void 0;
const uuid_1 = require("uuid");
const common_1 = require("@nestjs/common");
const nestjs_knex_1 = require("nestjs-knex");
const common_2 = require("../common/enums/common");
const userSearchHistory_model_1 = require("../database/knex/models/userSearchHistory.model");
const utils_1 = require("../utils");
const api_enums_1 = require("../common/enums/api_enums");
const user_service_1 = require("../user/user.service");
const esm_1 = require("awaity/esm");
let SearchService = class SearchService {
    constructor(knex, userService) {
        this.knex = knex;
        this.userService = userService;
    }
    async findUniq(id) {
        const foundSearchHistory = await userSearchHistory_model_1.UserSearchHistory.query()
            .findOne({ id })
            .first()
            .returning('*');
        return foundSearchHistory ? foundSearchHistory : undefined;
    }
    async getUserSearchHistories(payload) {
        const foundSrcUser = await this.userService.findUniq(payload.userId);
        if (!foundSrcUser)
            return (0, utils_1.handleErrorNotFound)(`User with ${payload.userId} do not exist!`);
        const foundUserSearchHistory = await this.knex
            .select('*')
            .from(`${common_2.ModelName.USER_SEARCH_HISTORY} as search`)
            .where({
            sourceId: payload.userId,
        })
            .then(async (searchList) => await (0, esm_1.map)(searchList, async (searchItem) => {
            const targetUser = await this.knex
                .select('user.id as userId', 'user.first_name as userFirstName', 'user.avatar as userAvatar')
                .from(`${common_2.ModelName.USER} as user`)
                .where({
                id: searchItem.targetId,
            })
                .first();
            delete searchItem.sourceId;
            delete searchItem.targetId;
            return {
                ...searchItem,
                target: targetUser || {},
            };
        }));
        return utils_1.RestFullAPI.onSuccess(api_enums_1.STATUS_CODE.OK, api_enums_1.STATUS_MESSAGE.SUCCESS, foundUserSearchHistory);
    }
    async createUserSearchHistory(payload) {
        const foundSrcUser = await this.userService.findUniq(payload.sourceId);
        if (!foundSrcUser)
            return (0, utils_1.handleErrorNotFound)(`User with ${payload.sourceId} do not exist!`);
        const now = new Date();
        const NEW_SEARCH = {
            id: (0, uuid_1.v4)(),
            sourceId: payload.sourceId,
            key: payload.key,
            targetId: payload.targetId || null,
            createdAt: now,
            updatedAt: now,
        };
        const createdSearchItem = await this.knex(common_2.ModelName.USER_SEARCH_HISTORY)
            .insert(NEW_SEARCH)
            .returning('*');
        return utils_1.RestFullAPI.onSuccess(api_enums_1.STATUS_CODE.CREATED, api_enums_1.STATUS_MESSAGE.SUCCESS, createdSearchItem);
    }
    async deleteUserSearchHistory(payload) {
        const foundSearchHistory = await this.findUniq(payload.id);
        if (!foundSearchHistory)
            return (0, utils_1.handleErrorNotFound)('Search History do not exist');
        const deletedSearchHistory = await this.knex(common_2.ModelName.USER_SEARCH_HISTORY)
            .where({
            id: payload.id,
        })
            .del()
            .returning('*');
        return utils_1.RestFullAPI.onSuccess(api_enums_1.STATUS_CODE.OK, api_enums_1.STATUS_MESSAGE.SUCCESS, deletedSearchHistory);
    }
};
SearchService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_knex_1.InjectKnex)()),
    __metadata("design:paramtypes", [Function, user_service_1.UserService])
], SearchService);
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map