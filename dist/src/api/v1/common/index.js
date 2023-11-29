"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthCheck = exports.getCurrentTime = exports.isEmpty = void 0;
const moment = require("moment");
const isEmpty = (target) => {
    if (!target)
        return true;
    if (target instanceof String)
        return target.length === 0;
    if (target instanceof Array)
        return target.length === 0;
    if (target instanceof Object)
        return Object.keys(target).length === 0;
};
exports.isEmpty = isEmpty;
const getCurrentTime = () => new Date(moment().format('lll'));
exports.getCurrentTime = getCurrentTime;
exports.healthCheck = {
    uptime: process.uptime(),
    timestamp: (0, exports.getCurrentTime)(),
    message: 'OK',
};
//# sourceMappingURL=index.js.map