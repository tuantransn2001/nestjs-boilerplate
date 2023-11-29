"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const chat_module_1 = require("./chat/chat.module");
const healthCheck_module_1 = require("./health-check/healthCheck.module");
const nestjs_pino_1 = require("nestjs-pino");
const config_1 = require("@nestjs/config");
const database_module_1 = require("./database/database.module");
const auth_module_1 = require("./auth/auth.module");
const nestjs_knex_1 = require("nestjs-knex");
const seed_module_1 = require("./seed/seed.module");
const user_module_1 = require("./user/user.module");
const post_module_1 = require("./post/post.module");
const comment_module_1 = require("./comment/comment.module");
const search_module_1 = require("./search/search.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_knex_1.KnexModule.forRootAsync({
                useFactory: () => {
                    return {
                        config: {
                            client: 'pg',
                            connection: 'postgresql://postgres:tuantransn2001@localhost:5432/messenger',
                            migrations: {
                                directory: './src/api/v1/database/knex/migrations',
                                extension: 'ts',
                                loadExtensions: ['.ts'],
                            },
                            seeds: {},
                            debug: true,
                        },
                    };
                },
            }),
            nestjs_pino_1.LoggerModule.forRoot({
                pinoHttp: {
                    transport: {
                        target: 'pino-pretty',
                        options: {
                            singleLine: true,
                        },
                    },
                },
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            seed_module_1.SeedModule,
            database_module_1.DatabaseModule,
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            chat_module_1.ChatModule,
            healthCheck_module_1.HealthCheckModule,
            post_module_1.PostModule,
            comment_module_1.CommentModule,
            search_module_1.SearchModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map