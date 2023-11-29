export declare const EVENTS: {
    connection: string;
    CLIENT: {
        SEND_ROOM_MESSAGE: string;
        DELETE_CONVERSATION: string;
        REQUEST_ROOM_MESSAGE: string;
        REQUEST_CONTACT_LIST: string;
        REQUEST_USER_LIST: string;
        JOIN_ROOM: string;
        DELETE_MESSAGE: string;
        EDIT_MESSAGE: string;
        TYPING: string;
        BLOCK: string;
        FORWARD: string;
    };
    SERVER: {
        JOINED_ROOM: string;
        RECEIVE_ROOM_MESSAGE: string;
        DELETE_MESSAGE_RESULT: string;
        EDIT_MESSAGE_RESULT: string;
        DELETE_CONVERSATION_RESULT: string;
        RECEIVE_CONTACT_LIST: string;
        RECEIVE_USER_LIST: string;
        IS_TYPING: string;
        BLOCK_RESULT: string;
        FORWARD_RESULT: string;
        STATUS: {
            ONLINE: string;
            OFFLINE: string;
        };
    };
};
