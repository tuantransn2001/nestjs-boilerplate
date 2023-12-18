import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { PaginationDtoOutput } from '../dto/output/paginationDto';
import { URLSearchParam } from '../../utils';
export const GetPagination = createParamDecorator(
  (_, ctx: ExecutionContext): PaginationDtoOutput => {
    const args = ctx.switchToHttp().getRequest();

    const paginationParams: PaginationDtoOutput = {
      page_number: 0,
      page_size: 10,
      search: {},
    };

    const _limit = args.query.limit;
    const _skip = (args.query.offset - 1) * _limit;

    paginationParams.page_number = parseInt(_skip.toString());
    paginationParams.page_size = parseInt(_limit.toString());
    if (args.query?.search) {
      paginationParams.search = URLSearchParam.urlParamsToObj(
        args.query.search.toString(),
      ) as any;
    }

    return paginationParams;
  },
);
