import { UserStatus, UserType } from '../../../user/enum';
export declare class RegisterDto {
    email?: string;
    phone: string;
    password: string;
    first_name: string;
    type: UserType;
    status: UserStatus;
    last_name: string;
    middle_name: string;
}
