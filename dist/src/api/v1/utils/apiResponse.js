"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestFullAPI = void 0;
const api_enums_1 = require("../common/enums/api_enums");
class RestFullAPI {
    constructor() {
        this.data = {};
        this.message = '';
        this.statusCode = api_enums_1.STATUS_CODE.OK;
    }
    static onSuccess(statusCode, message, data) {
        return { statusCode, message, data };
    }
    static onFail(statusCode, error) {
        return {
            statusCode,
            error: error,
        };
    }
}
exports.RestFullAPI = RestFullAPI;
//# sourceMappingURL=apiResponse.js.map