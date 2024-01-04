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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_model_1 = require("../database/knex/models/user.model");
const uuid_1 = require("uuid");
const awaity_1 = require("awaity");
const common_2 = require("../common");
const nestjs_knex_1 = require("nestjs-knex");
const common_3 = require("../common/enums/common");
const bcrypt = require("bcrypt");
const enum_1 = require("./enum");
let UserService = class UserService {
    constructor(knex) {
        this.knex = knex;
    }
    async findUniq(id) {
        const foundUser = await user_model_1.UserModel.query()
            .findOne({ id, is_deleted: false })
            .first()
            .returning('*');
        return foundUser ? foundUser : undefined;
    }
    async getByPhoneOrEmail(phone, email) {
        const condition = {
            ...(phone ? { phone } : {}),
            ...(email ? { email } : {}),
        };
        const foundUsers = await (0, awaity_1.reduce)(Object.entries(condition), async (r, [k, v]) => {
            const foundUser = await user_model_1.UserModel.query()
                .findOne({ is_deleted: false, ...{ [k]: v } })
                .first();
            const isUserExist = () => foundUser !== undefined;
            const isSameUser = () => r.findIndex((u) => u.id === foundUser.id) !== -1;
            if (isUserExist() && !isSameUser())
                r.push(foundUser);
            return r;
        }, []);
        return foundUsers;
    }
    async getCurrentLogin(loginDto) {
        const foundUser = await user_model_1.UserModel.query()
            .findOne({ is_deleted: false, ...loginDto })
            .first();
        return foundUser;
    }
    async insertOne(user) {
        const SALT = 10;
        const hash = bcrypt.hashSync(user.password, SALT);
        const createdUser = await this.knex
            .table(common_3.ModelName.USER)
            .insert({
            id: (0, uuid_1.v4)(),
            email: user.email,
            phone: user.phone,
            password: hash,
            name: user.name ? user.name : '',
            is_active: true,
            is_reported: false,
            is_blocked: false,
            createdAt: (0, common_2.getCurrentTime)(),
        })
            .returning('*');
        return createdUser[0];
    }
    async searchListUser({ ids, }) {
        const base = Object.entries(enum_1.UserType).reduce((res, [k]) => {
            res[k.toLocaleLowerCase()] = [];
            return res;
        }, {});
        const entry = Object.entries(ids);
        const source = entry
            .map(([type, ids]) => ids.map((id) => ({ type, id })))
            .flat(1);
        await (0, awaity_1.each)(source, async ({ type, id }) => {
            const foundUser = await this.findUniq(id);
            if (foundUser)
                base[type].push(foundUser.toDto());
            else {
                base[type].push({ id });
            }
        });
        return base;
    }
    async searchUserByName(payload) {
        if ((0, common_2.isEmpty)(payload.name))
            return {
                count: 0,
                items: [],
            };
        const foundUsers = await user_model_1.UserModel.query()
            .where('name', 'like', `%${payload.name}%`)
            .andWhere('is_deleted', false)
            .offset(payload.offset)
            .limit(payload.limit);
        return {
            count: foundUsers === null || foundUsers === void 0 ? void 0 : foundUsers.length,
            items: foundUsers.map((u) => u.toDto()),
        };
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_knex_1.InjectKnex)()),
    __metadata("design:paramtypes", [Function])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map