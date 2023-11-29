"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const zod_1 = require("zod");
const api_enums_1 = require("../common/enums/api_enums");
const apiResponse_1 = require("./apiResponse");
const errorHandler = (err) => {
    if (err instanceof zod_1.ZodError) {
        return apiResponse_1.RestFullAPI.onFail(api_enums_1.STATUS_CODE.BAD_REQUEST, {
            message: err.issues.map((err) => err.message).join(' || '),
        });
    }
    return apiResponse_1.RestFullAPI.onFail(api_enums_1.STATUS_CODE.INTERNAL_SERVER_ERROR, {
        message: err.message,
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map