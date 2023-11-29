"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGetPagination = exports.handleGetLastMessage = exports.isSingleChat = exports.handleCheckTwoUserIsOne = exports.handleGetUniqObjInArr = exports.handleConvertUserIDToString = void 0;
const handleConvertUserIDToString = (users) => users.map((u) => ({ ...u, id: u.id.toString() }));
exports.handleConvertUserIDToString = handleConvertUserIDToString;
const handleGetUniqObjInArr = (arr, properties) => [
    ...new Map(arr.map((v) => [JSON.stringify(properties.map((k) => v[k])), v])).values(),
];
exports.handleGetUniqObjInArr = handleGetUniqObjInArr;
const handleCheckTwoUserIsOne = (sender, compareUser) => {
    return sender.id === compareUser.id && sender.type === compareUser.type;
};
exports.handleCheckTwoUserIsOne = handleCheckTwoUserIsOne;
const isSingleChat = (member) => member.length <= 2;
exports.isSingleChat = isSingleChat;
const handleGetLastMessage = (messages) => {
    const { content, updatedAt: timeMessage } = messages[messages.length - 1];
    return { content, timeMessage };
};
exports.handleGetLastMessage = handleGetLastMessage;
const handleGetPagination = (payload) => {
    if (!payload)
        return { _skip: 0, _limit: 10 };
    const _skip = (payload.page_number - 1) * payload.page_size;
    const _limit = payload.page_size;
    return { _skip, _limit };
};
exports.handleGetPagination = handleGetPagination;
//# sourceMappingURL=index.js.map