"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const knex_1 = require("knex");
const objection_1 = require("objection");
const common_1 = require("../../common/enums/common");
exports.databaseProviders = [
    {
        provide: common_1.ProviderName.KNEX_CONNECTION,
        useFactory: () => {
            const knexConn = (0, knex_1.knex)({
                client: 'pg',
                connection: 'postgresql://postgres:tuantransn2001@localhost:5432/messenger',
                migrations: {
                    directory: './src/api/v1/database/knex/migrations',
                    extension: 'ts',
                    loadExtensions: [`.ts`],
                },
            });
            objection_1.Model.knex(knexConn);
            return knexConn;
        },
    },
];
//# sourceMappingURL=knex-connection.provider.js.map