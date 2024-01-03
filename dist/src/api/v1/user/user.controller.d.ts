import { PaginationDtoOutput } from '../common/dto/output/paginationDto';
import { SearchUserByNameDTO } from '../chat/dto/input';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    searchUserByName(searchUserByNameDTO: SearchUserByNameDTO, paginationDto: PaginationDtoOutput): Promise<{
        count: number;
        items: {}[];
    }>;
}
