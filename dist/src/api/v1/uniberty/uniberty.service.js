"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnibertyService = void 0;
const common_1 = require("@nestjs/common");
const helper_1 = require("../chat/helper");
const api_enums_1 = require("../common/enums/api_enums");
const apiRequest_1 = require("../utils/apiRequest");
const apiResponse_1 = require("../utils/apiResponse");
const errorHandler_1 = require("../utils/errorHandler");
let UnibertyService = class UnibertyService {
    async getAdminAccessToken() {
        try {
            const { status, data } = await apiRequest_1.Axios.createInstance({
                baseURL: process.env.UNIBERTY_BASE_URL,
            }).post(api_enums_1.API_PATH.admin_login, {
                email: process.env.ADMIN_EMAIL,
                password: process.env.ADMIN_PASSWORD,
            });
            return apiResponse_1.RestFullAPI.onSuccess(status, api_enums_1.STATUS_MESSAGE.SUCCESS, {
                access_token: data === null || data === void 0 ? void 0 : data.access_token,
                token_type: data === null || data === void 0 ? void 0 : data.token_type,
            });
        }
        catch (err) {
            return (0, errorHandler_1.errorHandler)(err);
        }
    }
    async getChatToken() {
        try {
            const { data: getAccessTokenResult } = await this.getAdminAccessToken();
            const { status, data } = await apiRequest_1.Axios.createInstance({
                baseURL: process.env.UNIBERTY_BASE_URL,
                token: getAccessTokenResult.access_token,
            }).post(api_enums_1.API_PATH.get_chat_token);
            return apiResponse_1.RestFullAPI.onSuccess(status, api_enums_1.STATUS_MESSAGE.SUCCESS, data);
        }
        catch (err) {
            return (0, errorHandler_1.errorHandler)(err);
        }
    }
    async searchListUser(ids) {
        try {
            const { data: getChatTokenData } = await this.getChatToken();
            const result = await apiRequest_1.Axios.createInstance({
                baseURL: process.env.UNIBERTY_BASE_URL,
            }).post(api_enums_1.API_PATH.search_list_user, ids, {
                headers: { Authorization: `Bearer ${getChatTokenData.token}` },
            });
            return apiResponse_1.RestFullAPI.onSuccess(api_enums_1.STATUS_CODE.OK, api_enums_1.STATUS_MESSAGE.SUCCESS, result);
        }
        catch (err) {
            return (0, errorHandler_1.errorHandler)(err);
        }
    }
    async searchUserByName(name) {
        try {
            const { data: chatTokenData } = await this.getChatToken();
            const searchUserByNameResult = await apiRequest_1.Axios.createInstance({
                baseURL: process.env.UNIBERTY_BASE_URL,
            }).get(api_enums_1.API_PATH.search_user_by_name, {
                params: { name },
                headers: { Authorization: `Bearer ${chatTokenData.token}` },
            });
            return apiResponse_1.RestFullAPI.onSuccess(api_enums_1.STATUS_CODE.OK, api_enums_1.STATUS_MESSAGE.SUCCESS, (0, helper_1.handleConvertUserIDToString)(searchUserByNameResult.data.data));
        }
        catch (err) {
            return (0, errorHandler_1.errorHandler)(err);
        }
    }
};
UnibertyService = __decorate([
    (0, common_1.Injectable)()
], UnibertyService);
exports.UnibertyService = UnibertyService;
//# sourceMappingURL=uniberty.service.js.map