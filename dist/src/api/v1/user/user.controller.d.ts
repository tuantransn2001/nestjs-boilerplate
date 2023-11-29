import { PaginationDtoOutput } from '../common/dto/output/paginationDto';
import { SearchUserByNameDTO } from '../chat/dto/input';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    searchUserByName(searchUserByNameDTO: SearchUserByNameDTO, paginationDto: PaginationDtoOutput): Promise<{
        count: number;
        items: {
            id: string;
            email: string;
            phone: string;
            status: import("./enum").UserStatus;
            first_name: string;
            last_name: string;
            middle_name: string;
            fullName: string;
            type: import("./enum").UserType;
            is_active: boolean;
            last_active_at: Date;
            createdAt: Date;
            avatar: string;
        }[];
    }>;
}
