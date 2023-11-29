"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrorNotFound = void 0;
const api_enums_1 = require("../common/enums/api_enums");
const apiResponse_1 = require("./apiResponse");
const handleErrorNotFound = (errorMessage) => {
    return apiResponse_1.RestFullAPI.onFail(api_enums_1.STATUS_CODE.NOT_FOUND, {
        message: errorMessage,
    });
};
exports.handleErrorNotFound = handleErrorNotFound;
//# sourceMappingURL=errorByStatusCode.js.map