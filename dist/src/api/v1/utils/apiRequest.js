"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Axios = void 0;
const axios_1 = require("axios");
class Axios {
    static createInstance({ baseURL, token }) {
        return axios_1.default.create({
            baseURL: baseURL || Axios.URL,
            headers: {
                Authorization: `Bearer ${token}`,
                accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
    }
}
exports.Axios = Axios;
Axios.URL = process.env.UNIBERTY_BASE_URL;
//# sourceMappingURL=apiRequest.js.map