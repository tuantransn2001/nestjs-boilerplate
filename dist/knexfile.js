"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.knexConfig = void 0;
const dotenv = require("dotenv");
dotenv.config();
const extension = 'ts';
exports.knexConfig = {
    client: 'pg',
    connection: process.env.POSTGRESQL_DB_CONNECT_LINK,
    migrations: {
        directory: './src/api/v1/database/knex/migrations',
        extension: extension,
        loadExtensions: [`.${extension}`],
    },
};
module.exports = exports.knexConfig;
//# sourceMappingURL=knexfile.js.map