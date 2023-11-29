"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const nestjs_pino_1 = require("nestjs-pino");
const express_rate_limit_1 = require("express-rate-limit");
const common_1 = require("@nestjs/common");
const setup_swagger_1 = require("./setup-swagger");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
        bufferLogs: true,
    });
    app.use(cookieParser());
    app.enableCors({
        allowedHeaders: '*',
        origin: '*',
    });
    app.use((0, express_rate_limit_1.default)({
        windowMs: 15 * 60 * 1000,
        max: 100,
    }));
    (0, setup_swagger_1.setupSwagger)(app);
    app.useLogger(app.get(nestjs_pino_1.Logger));
    app.useGlobalInterceptors(new nestjs_pino_1.LoggerErrorInterceptor());
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.setGlobalPrefix(process.env.ROOT_URL);
    await app.listen(process.env.PORT);
    return app;
}
void bootstrap();
//# sourceMappingURL=main.js.map