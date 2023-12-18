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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const utils_1 = require("../utils");
const api_enums_1 = require("../common/enums/api_enums");
const user_service_1 = require("../user/user.service");
const common_2 = require("../common");
let AuthService = class AuthService {
    constructor(userService) {
        this.userService = userService;
    }
    async issueToken(user, response) {
        const payload = {
            sub: user.id,
            fullName: `${user.last_name} ${user.middle_name} ${user.first_name}`,
        };
        const accessToken = jwt.sign({ ...payload }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
        });
        const refreshToken = jwt.sign({ ...payload }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '7d',
        });
        response.cookie('access_token', accessToken, { httpOnly: true });
        response.cookie('refresh_token', refreshToken, {
            httpOnly: true,
        });
        return { accessToken, refreshToken };
    }
    async login(loginDto, response) {
        const foundUsers = await this.userService.getByPhoneOrEmail(loginDto.phone, undefined);
        if ((0, common_2.isEmpty)(foundUsers))
            return (0, utils_1.handleErrorNotFound)('Phone number do not exist!');
        const foundUser = foundUsers.find((u) => u.phone === loginDto.phone);
        const isMatchPassword = await bcrypt.compare(loginDto.password, foundUser.password);
        if (!isMatchPassword)
            return utils_1.RestFullAPI.onFail(api_enums_1.STATUS_CODE.UNAUTHORIZED, {
                message: 'Password in-correct',
            });
        const loginResponse = utils_1.RestFullAPI.onSuccess(api_enums_1.STATUS_CODE.OK, 'Successfully logged in', await this.issueToken(foundUser, response));
        return loginResponse;
    }
    async register(registerDTO, response) {
        const existUsers = await this.userService.getByPhoneOrEmail(registerDTO.phone, registerDTO.email);
        if (!(0, common_2.isEmpty)(existUsers))
            return utils_1.RestFullAPI.onFail(api_enums_1.STATUS_CODE.BAD_REQUEST, {
                message: 'Phone || Email already in use !',
            });
        const createUserResult = await this.userService.insertOne(registerDTO);
        const registerResponse = utils_1.RestFullAPI.onSuccess(api_enums_1.STATUS_CODE.CREATED, api_enums_1.STATUS_MESSAGE.SUCCESS, await this.issueToken(createUserResult, response));
        return registerResponse;
    }
    async logout(response) {
        response.clearCookie('access_token');
        response.clearCookie('refresh_token');
        return utils_1.RestFullAPI.onSuccess(api_enums_1.STATUS_CODE.ACCEPTED, 'Successfully logged out');
    }
    async refreshToken(req, res) {
        const refreshToken = req.cookies['refresh_token'];
        if (!refreshToken) {
            return utils_1.RestFullAPI.onFail(api_enums_1.STATUS_CODE.UNAUTHORIZED, {
                message: 'Refresh token not found',
            });
        }
        let payload;
        try {
            payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        }
        catch (error) {
            return utils_1.RestFullAPI.onFail(api_enums_1.STATUS_CODE.UNAUTHORIZED, {
                message: 'Invalid or expired refresh token',
            });
        }
        const userExists = await this.userService.findUniq(payload.sub);
        if (!userExists) {
            return utils_1.RestFullAPI.onFail(api_enums_1.STATUS_CODE.BAD_REQUEST, {
                message: 'User no longer exists',
            });
        }
        const expiresIn = 15000;
        const expiration = Math.floor(Date.now() / 1000) + expiresIn;
        const accessToken = jwt.sign({ ...payload, exp: expiration }, process.env.ACCESS_TOKEN_SECRET);
        res.cookie('access_token', accessToken, { httpOnly: true });
        return accessToken;
    }
    async getMe(req) {
        const access_token = req.cookies['access_token'];
        const decoded = jwt.verify(access_token, process.env.ACCESS_TOKEN_SECRET);
        const currentUserLogin = await this.userService.findUniq((decoded.sub || ''));
        return utils_1.RestFullAPI.onSuccess(api_enums_1.STATUS_CODE.OK, api_enums_1.STATUS_MESSAGE.SUCCESS, currentUserLogin.toDto());
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map