import { z } from 'zod';
export declare const MemberType: z.ZodObject<{
    id: z.ZodString;
    type: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id?: string;
    type?: string;
}, {
    id?: string;
    type?: string;
}>;
export declare const MessageType: z.ZodObject<{
    id: z.ZodString;
    isDelete: z.ZodBoolean;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    sender: z.ZodObject<{
        id: z.ZodString;
        type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id?: string;
        type?: string;
    }, {
        id?: string;
        type?: string;
    }>;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id?: string;
    isDelete?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    sender?: {
        id?: string;
        type?: string;
    };
    content?: string;
}, {
    id?: string;
    isDelete?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    sender?: {
        id?: string;
        type?: string;
    };
    content?: string;
}>;
export declare const MessageDTOType: z.ZodObject<{
    sender: z.ZodObject<{
        id: z.ZodString;
        type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id?: string;
        type?: string;
    }, {
        id?: string;
        type?: string;
    }>;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    sender?: {
        id?: string;
        type?: string;
    };
    content?: string;
}, {
    sender?: {
        id?: string;
        type?: string;
    };
    content?: string;
}>;
export declare const UserType: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    type: z.ZodString;
    avatar: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id?: number;
    name?: string;
    type?: string;
    avatar?: string;
}, {
    id?: number;
    name?: string;
    type?: string;
    avatar?: string;
}>;
export declare const MessageTypeArray: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    isDelete: z.ZodBoolean;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    sender: z.ZodObject<{
        id: z.ZodString;
        type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id?: string;
        type?: string;
    }, {
        id?: string;
        type?: string;
    }>;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id?: string;
    isDelete?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    sender?: {
        id?: string;
        type?: string;
    };
    content?: string;
}, {
    id?: string;
    isDelete?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    sender?: {
        id?: string;
        type?: string;
    };
    content?: string;
}>, "many">;
export declare const MemberTypeArray: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    type: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id?: string;
    type?: string;
}, {
    id?: string;
    type?: string;
}>, "many">;
export declare const ConversationType: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    members: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id?: string;
        type?: string;
    }, {
        id?: string;
        type?: string;
    }>, "many">;
    messages: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        isDelete: z.ZodBoolean;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
        sender: z.ZodObject<{
            id: z.ZodString;
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id?: string;
            type?: string;
        }, {
            id?: string;
            type?: string;
        }>;
        content: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id?: string;
        isDelete?: boolean;
        createdAt?: Date;
        updatedAt?: Date;
        sender?: {
            id?: string;
            type?: string;
        };
        content?: string;
    }, {
        id?: string;
        isDelete?: boolean;
        createdAt?: Date;
        updatedAt?: Date;
        sender?: {
            id?: string;
            type?: string;
        };
        content?: string;
    }>, "many">;
    isDelete: z.ZodBoolean;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id?: string;
    name?: string;
    members?: {
        id?: string;
        type?: string;
    }[];
    messages?: {
        id?: string;
        isDelete?: boolean;
        createdAt?: Date;
        updatedAt?: Date;
        sender?: {
            id?: string;
            type?: string;
        };
        content?: string;
    }[];
    isDelete?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}, {
    id?: string;
    name?: string;
    members?: {
        id?: string;
        type?: string;
    }[];
    messages?: {
        id?: string;
        isDelete?: boolean;
        createdAt?: Date;
        updatedAt?: Date;
        sender?: {
            id?: string;
            type?: string;
        };
        content?: string;
    }[];
    isDelete?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}>;
export declare const ConversationTypeArray: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    members: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id?: string;
        type?: string;
    }, {
        id?: string;
        type?: string;
    }>, "many">;
    messages: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        isDelete: z.ZodBoolean;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
        sender: z.ZodObject<{
            id: z.ZodString;
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id?: string;
            type?: string;
        }, {
            id?: string;
            type?: string;
        }>;
        content: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id?: string;
        isDelete?: boolean;
        createdAt?: Date;
        updatedAt?: Date;
        sender?: {
            id?: string;
            type?: string;
        };
        content?: string;
    }, {
        id?: string;
        isDelete?: boolean;
        createdAt?: Date;
        updatedAt?: Date;
        sender?: {
            id?: string;
            type?: string;
        };
        content?: string;
    }>, "many">;
    isDelete: z.ZodBoolean;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    id?: string;
    name?: string;
    members?: {
        id?: string;
        type?: string;
    }[];
    messages?: {
        id?: string;
        isDelete?: boolean;
        createdAt?: Date;
        updatedAt?: Date;
        sender?: {
            id?: string;
            type?: string;
        };
        content?: string;
    }[];
    isDelete?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}, {
    id?: string;
    name?: string;
    members?: {
        id?: string;
        type?: string;
    }[];
    messages?: {
        id?: string;
        isDelete?: boolean;
        createdAt?: Date;
        updatedAt?: Date;
        sender?: {
            id?: string;
            type?: string;
        };
        content?: string;
    }[];
    isDelete?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}>, "many">;
export declare const JoinRoomSchema: z.ZodObject<{
    roomID: z.ZodString;
}, "strip", z.ZodTypeAny, {
    roomID?: string;
}, {
    roomID?: string;
}>;
export declare const SendRoomMessageSchema: z.ZodObject<{
    conversationID: z.ZodDefault<z.ZodString>;
    members: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id?: string;
        type?: string;
    }, {
        id?: string;
        type?: string;
    }>, "many">;
    message: z.ZodObject<{
        sender: z.ZodObject<{
            id: z.ZodString;
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id?: string;
            type?: string;
        }, {
            id?: string;
            type?: string;
        }>;
        content: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        sender?: {
            id?: string;
            type?: string;
        };
        content?: string;
    }, {
        sender?: {
            id?: string;
            type?: string;
        };
        content?: string;
    }>;
}, "strip", z.ZodTypeAny, {
    conversationID?: string;
    members?: {
        id?: string;
        type?: string;
    }[];
    message?: {
        sender?: {
            id?: string;
            type?: string;
        };
        content?: string;
    };
}, {
    conversationID?: string;
    members?: {
        id?: string;
        type?: string;
    }[];
    message?: {
        sender?: {
            id?: string;
            type?: string;
        };
        content?: string;
    };
}>;
export declare const TypingSchema: z.ZodObject<{
    sender: z.ZodObject<{
        id: z.ZodString;
        type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id?: string;
        type?: string;
    }, {
        id?: string;
        type?: string;
    }>;
    isTyping: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    sender?: {
        id?: string;
        type?: string;
    };
    isTyping?: boolean;
}, {
    sender?: {
        id?: string;
        type?: string;
    };
    isTyping?: boolean;
}>;
export declare const DeleteMessageSchema: z.ZodObject<{
    messageID: z.ZodString;
    conversationID: z.ZodString;
}, "strip", z.ZodTypeAny, {
    messageID?: string;
    conversationID?: string;
}, {
    messageID?: string;
    conversationID?: string;
}>;
export declare const EditMessageSchema: z.ZodObject<{
    conversationID: z.ZodString;
    messageID: z.ZodString;
    dto: z.ZodObject<Omit<{
        id: z.ZodString;
        isDelete: z.ZodBoolean;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
        sender: z.ZodObject<{
            id: z.ZodString;
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id?: string;
            type?: string;
        }, {
            id?: string;
            type?: string;
        }>;
        content: z.ZodString;
    }, "id" | "createdAt" | "updatedAt" | "isDelete" | "sender">, "strip", z.ZodTypeAny, {
        content?: string;
    }, {
        content?: string;
    }>;
}, "strip", z.ZodTypeAny, {
    conversationID?: string;
    messageID?: string;
    dto?: {
        content?: string;
    };
}, {
    conversationID?: string;
    messageID?: string;
    dto?: {
        content?: string;
    };
}>;
export declare const DeleteConversationSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id?: string;
}, {
    id?: string;
}>;
export declare const RequestMessageSchema: z.ZodObject<{
    sort: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        members: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id?: string;
            type?: string;
        }, {
            id?: string;
            type?: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        id?: string;
        members?: {
            id?: string;
            type?: string;
        }[];
    }, {
        id?: string;
        members?: {
            id?: string;
            type?: string;
        }[];
    }>;
    pagination: z.ZodOptional<z.ZodObject<{
        page_size: z.ZodNumber;
        page_number: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        page_size?: number;
        page_number?: number;
    }, {
        page_size?: number;
        page_number?: number;
    }>>;
}, "strip", z.ZodTypeAny, {
    sort?: {
        id?: string;
        members?: {
            id?: string;
            type?: string;
        }[];
    };
    pagination?: {
        page_size?: number;
        page_number?: number;
    };
}, {
    sort?: {
        id?: string;
        members?: {
            id?: string;
            type?: string;
        }[];
    };
    pagination?: {
        page_size?: number;
        page_number?: number;
    };
}>;
export declare const RequestContactListSchema: z.ZodObject<{
    sort: z.ZodObject<{
        id: z.ZodString;
        type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id?: string;
        type?: string;
    }, {
        id?: string;
        type?: string;
    }>;
    pagination: z.ZodOptional<z.ZodObject<{
        page_size: z.ZodNumber;
        page_number: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        page_size?: number;
        page_number?: number;
    }, {
        page_size?: number;
        page_number?: number;
    }>>;
}, "strip", z.ZodTypeAny, {
    sort?: {
        id?: string;
        type?: string;
    };
    pagination?: {
        page_size?: number;
        page_number?: number;
    };
}, {
    sort?: {
        id?: string;
        type?: string;
    };
    pagination?: {
        page_size?: number;
        page_number?: number;
    };
}>;
export declare const SearchUserByNameSchema: z.ZodObject<{
    limit: z.ZodOptional<z.ZodNumber>;
    offset: z.ZodOptional<z.ZodNumber>;
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    limit?: number;
    offset?: number;
    name?: string;
}, {
    limit?: number;
    offset?: number;
    name?: string;
}>;
