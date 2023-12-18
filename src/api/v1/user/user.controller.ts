import { Controller, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { GetPagination } from '../common/decorator/getPagination.decorator';
import { PaginationDtoOutput } from '../common/dto/output/paginationDto';
import { SearchUserByNameDTO } from '../chat/dto/input';
import { UserService } from './user.service';
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/search')
  @ApiOperation({
    summary: 'Search user by name',
    description: 'Search user by name',
  })
  @ApiQuery({
    name: 'page_number',
    type: Number,
    examples: {
      '0': {
        value: 0,
        description: 'Start from 0',
      },
      '10': {
        value: 10,
        description: `Skip 10 collection`,
      },
    },
  })
  @ApiQuery({
    name: 'page_size',
    type: Number,
    examples: {
      '10': {
        value: 10,
        description: `Get 10 collection`,
      },
      '50': {
        value: 50,
        description: `Get 50 collection`,
      },
    },
  })
  @ApiQuery({
    name: 'name',
    type: String,
  })
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
