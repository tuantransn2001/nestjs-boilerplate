import { UserStatus, UserType } from 'src/api/v1/user/enum';
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
