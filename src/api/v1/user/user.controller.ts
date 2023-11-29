import { Controller, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetPagination } from '../common/decorator/getPagination.decorator';
import { PaginationDtoOutput } from '../common/dto/output/paginationDto';
import { SearchUserByNameDTO } from '../chat/dto/input';
import { UserService } from './user.service';
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/search')
  public async searchUserByName(
    @Query() searchUserByNameDTO: SearchUserByNameDTO,
    @GetPagination() paginationDto: PaginationDtoOutput,
  ) {
    return await this.userService.searchUserByName({
      idsToSkip: 0,
      limit: paginationDto.page_size,
      offset: paginationDto.page_number,
      name: searchUserByNameDTO.name,
    });
  }
}
