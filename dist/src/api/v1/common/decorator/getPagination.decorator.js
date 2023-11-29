"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPagination = void 0;
const common_1 = require("@nestjs/common");
const utils_1 = require("../../utils");
exports.GetPagination = (0, common_1.createParamDecorator)((data, ctx) => {
    var _a;
    const args = ctx.switchToHttp().getRequest();
    const paginationParams = {
        page_number: 0,
        page_size: 10,
        search: {},
    };
    const _limit = args.query.limit;
    const _skip = (args.query.offset - 1) * _limit;
    paginationParams.page_number = parseInt(_skip.toString());
    paginationParams.page_size = parseInt(_limit.toString());
    if ((_a = args.query) === null || _a === void 0 ? void 0 : _a.search) {
        paginationParams.search = utils_1.URLSearchParam.urlParamsToObj(args.query.search.toString());
    }
    return paginationParams;
});
//# sourceMappingURL=getPagination.decorator.js.map