"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVENTS = void 0;
exports.EVENTS = {
    connection: 'connection',
    CLIENT: {
        SEND_ROOM_MESSAGE: 'SEND_ROOM_MESSAGE',
        DELETE_CONVERSATION: 'DELETE_CONVERSATION',
        REQUEST_ROOM_MESSAGE: 'REQUEST_ROOM_MESSAGE',
        REQUEST_CONTACT_LIST: 'REQUEST_CONTACT_LIST',
        REQUEST_USER_LIST: 'REQUEST_USER_LIST',
        JOIN_ROOM: 'JOIN_ROOM',
        DELETE_MESSAGE: 'DELETE_MESSAGE',
        EDIT_MESSAGE: 'EDIT_MESSAGE',
        TYPING: 'TYPING',
        BLOCK: 'BLOCK',
        FORWARD: 'FORWARD',
    },
    SERVER: {
        JOINED_ROOM: 'JOINED_ROOM',
        RECEIVE_ROOM_MESSAGE: 'RECEIVE_ROOM_MESSAGE',
        DELETE_MESSAGE_RESULT: 'DELETE_MESSAGE_RESULT',
        EDIT_MESSAGE_RESULT: 'EDIT_MESSAGE_RESULT',
        DELETE_CONVERSATION_RESULT: 'DELETE_CONVERSATION_RESULT',
        RECEIVE_CONTACT_LIST: 'RECEIVE_CONTACT_LIST',
        RECEIVE_USER_LIST: 'RECEIVE_USER_LIST',
        IS_TYPING: 'IS_TYPING',
        BLOCK_RESULT: 'BLOCK_RESULT',
        FORWARD_RESULT: 'FORWARD_RESULT',
        STATUS: {
            ONLINE: 'ONLINE',
            OFFLINE: 'OFFLINE',
        },
    },
};
//# sourceMappingURL=event_constants.js.map