"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const common_1 = require("../../common/enums/common");
dotenv.config();
exports.databaseProviders = [
    {
        provide: common_1.ProviderName.MONGOOSE_CONNECTION,
        useFactory: () => mongoose.connect(`${process.env.MONGOOSE_DB_CONNECT_LINK}`),
    },
];
//# sourceMappingURL=mongoose-connection.provider.js.map