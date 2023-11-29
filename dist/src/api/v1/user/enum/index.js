"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFriendStatus = exports.UserFriendType = exports.UserStatus = exports.UserType = exports.DeviceType = void 0;
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
var UserFriendType;
(function (UserFriendType) {
    UserFriendType["DEFAULT"] = "default";
})(UserFriendType = exports.UserFriendType || (exports.UserFriendType = {}));
var UserFriendStatus;
(function (UserFriendStatus) {
    UserFriendStatus["NEW"] = "new";
    UserFriendStatus["REJECTED"] = "reject";
    UserFriendStatus["ACCEPTED"] = "accept";
})(UserFriendStatus = exports.UserFriendStatus || (exports.UserFriendStatus = {}));
//# sourceMappingURL=index.js.map