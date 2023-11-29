import { MemberType } from '../shared/chat.interface';
import { IUser } from '../../user/shared/user.interface';
import { IPagination } from '../../common/shared/common.interface';
export declare const handleConvertUserIDToString: (users: IUser[]) => {
    id: string;
    email?: string;
    phone?: string;
    password?: string;
    first_name?: string;
    last_name?: string;
    middle_name?: string;
    is_active?: boolean;
    is_reported?: boolean;
    is_blocked?: boolean;
    last_active_at?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}[];
export declare const handleGetUniqObjInArr: (arr: any[], properties: string[]) => any[];
export declare const handleCheckTwoUserIsOne: (sender: MemberType, compareUser: MemberType) => boolean;
export declare const isSingleChat: (member: MemberType[]) => boolean;
export declare const handleGetLastMessage: (messages: {
    id?: string;
    isDelete?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    sender?: {
        id?: string;
        type?: string;
    };
    content?: string;
}[]) => {
    content: string;
    timeMessage: Date;
};
export declare const handleGetPagination: (payload: IPagination) => {
    _skip: number;
    _limit: number;
};
