"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATUS_CODE = exports.STATUS_MESSAGE = exports.API_PATH = void 0;
var API_PATH;
(function (API_PATH) {
    API_PATH["get_chat_token"] = "create-token-api";
    API_PATH["admin_login"] = "login";
    API_PATH["student_login"] = "student";
    API_PATH["search_list_user"] = "search-list-user";
    API_PATH["search_user_by_name"] = "search-user-by-name";
})(API_PATH = exports.API_PATH || (exports.API_PATH = {}));
var STATUS_MESSAGE;
(function (STATUS_MESSAGE) {
    STATUS_MESSAGE["SUCCESS"] = "Success";
    STATUS_MESSAGE["CONFLICT"] = "Conflict";
    STATUS_MESSAGE["NOT_FOUND"] = "Not Found";
    STATUS_MESSAGE["SERVER_ERROR"] = "Server Error";
    STATUS_MESSAGE["NO_CONTENT"] = "No Content";
    STATUS_MESSAGE["UN_AUTHORIZE"] = "Unauthorize";
    STATUS_MESSAGE["BAD_REQUEST"] = "Bad Request";
    STATUS_MESSAGE["NOT_ACCEPTABLE"] = "Not Acceptable";
    STATUS_MESSAGE["SERVICE_UNAVAILABLE"] = "Service Unavailable";
    STATUS_MESSAGE["METHOD_NOT_ALLOW"] = "Method Not Allow";
    STATUS_MESSAGE["UNPROCESSABLE_ENTITY"] = "Unprocessable Entity Exception";
})(STATUS_MESSAGE = exports.STATUS_MESSAGE || (exports.STATUS_MESSAGE = {}));
var STATUS_CODE;
(function (STATUS_CODE) {
    STATUS_CODE[STATUS_CODE["OK"] = 200] = "OK";
    STATUS_CODE[STATUS_CODE["CREATED"] = 201] = "CREATED";
    STATUS_CODE[STATUS_CODE["ACCEPTED"] = 202] = "ACCEPTED";
    STATUS_CODE[STATUS_CODE["NO_CONTENT"] = 204] = "NO_CONTENT";
    STATUS_CODE[STATUS_CODE["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    STATUS_CODE[STATUS_CODE["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    STATUS_CODE[STATUS_CODE["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    STATUS_CODE[STATUS_CODE["FORBIDDEN"] = 403] = "FORBIDDEN";
    STATUS_CODE[STATUS_CODE["NOT_FOUND"] = 404] = "NOT_FOUND";
    STATUS_CODE[STATUS_CODE["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
    STATUS_CODE[STATUS_CODE["CONFLICT"] = 409] = "CONFLICT";
    STATUS_CODE[STATUS_CODE["GONE"] = 410] = "GONE";
    STATUS_CODE[STATUS_CODE["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    STATUS_CODE[STATUS_CODE["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    STATUS_CODE[STATUS_CODE["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
    STATUS_CODE[STATUS_CODE["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(STATUS_CODE = exports.STATUS_CODE || (exports.STATUS_CODE = {}));
//# sourceMappingURL=api_enums.js.map