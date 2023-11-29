"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose = require("mongoose");
const common_1 = require("../../common/enums/common");
exports.databaseProviders = [
    {
        provide: common_1.ProviderName.MONGOOSE_CONNECTION,
        useFactory: () => {
            return mongoose.connect(`${process.env.MONGOOSE_DB_CONNECT_LINK}`);
        },
    },
];
//# sourceMappingURL=mongoose-connection.provider.js.map