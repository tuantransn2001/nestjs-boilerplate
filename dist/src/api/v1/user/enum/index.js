"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStatus = exports.UserType = exports.DeviceType = void 0;
var DeviceType;
(function (DeviceType) {
    DeviceType["APPLE"] = "1";
    DeviceType["SAMSUNG"] = "2";
})(DeviceType = exports.DeviceType || (exports.DeviceType = {}));
var UserType;
(function (UserType) {
    UserType["ADMIN"] = "admin";
    UserType["USER"] = "user";
    UserType["GUEST"] = "guest";
})(UserType = exports.UserType || (exports.UserType = {}));
var UserStatus;
(function (UserStatus) {
    UserStatus["ONLINE"] = "online";
    UserStatus["OFFLINE"] = "offline";
    UserStatus["BUSY"] = "busy";
})(UserStatus = exports.UserStatus || (exports.UserStatus = {}));
//# sourceMappingURL=index.js.map