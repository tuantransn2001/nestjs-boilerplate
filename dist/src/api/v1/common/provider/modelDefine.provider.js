"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelDefineProvider = void 0;
const common_1 = require("../enums/common");
const modelDefineProvider = (ModelName, Schema) => [
    {
        provide: ModelName,
        useFactory: (connection) => connection.model(ModelName, Schema),
        inject: [common_1.ProviderName.MONGOOSE_CONNECTION],
    },
];
exports.modelDefineProvider = modelDefineProvider;
//# sourceMappingURL=modelDefine.provider.js.map