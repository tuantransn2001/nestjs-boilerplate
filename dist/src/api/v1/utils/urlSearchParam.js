"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLSearchParam = void 0;
class URLSearchParam {
    static objToUrlParams(obj) {
        const toUrlParams = (obj, prefix = '') => {
            let urlParams = '';
            for (const key in obj) {
                let val = obj[key];
                if (val == null)
                    continue;
                if (val == undefined)
                    continue;
                if (val == '')
                    continue;
                if (val instanceof Array) {
                    const valToObj = {};
                    val.forEach((v, i) => {
                        valToObj[i] = v;
                    });
                    val = valToObj;
                }
                const newPrefix = prefix + key;
                if (val instanceof Object) {
                    urlParams += toUrlParams(val, newPrefix + '-');
                }
                else {
                    urlParams += newPrefix + '=' + val;
                }
                urlParams += '&';
            }
            urlParams = urlParams.slice(0, -1);
            return urlParams;
        };
        return encodeURI(toUrlParams(obj));
    }
    static urlParamsToObj(urlParams) {
        urlParams = decodeURI(urlParams);
        const toObj = (urlParams) => {
            var _a;
            const obj = {};
            const urlParamsArr = urlParams.split('&');
            const subUrlParamsObj = {};
            for (let i = 0; i < urlParamsArr.length; i++) {
                const item = urlParamsArr[i];
                let key = item.split('=')[0];
                let val = (_a = item.split('=')[1]) !== null && _a !== void 0 ? _a : null;
                const keys = key.split('-');
                if (val == 'null') {
                    val = null;
                }
                else if (val == 'undefined') {
                    val = undefined;
                }
                else if (val == 'true') {
                    val = true;
                }
                else if (val == 'false') {
                    val = false;
                }
                else if (val == 'NaN') {
                    val = NaN;
                }
                else if (val == 'Infinity') {
                    val = Infinity;
                }
                if (keys.length == 1) {
                    if (obj.hasOwnProperty(key)) {
                        if (obj[key] instanceof Array) {
                            obj[key].push(val);
                        }
                        else {
                            obj[key] = [obj[key], val];
                        }
                    }
                    else {
                        obj[key] = val;
                    }
                }
                else if (keys.length > 1) {
                    const key0 = keys[0];
                    if (!subUrlParamsObj[key0]) {
                        subUrlParamsObj[key0] = [];
                    }
                    keys.shift();
                    key = keys.join('-');
                    const param = key + '=' + val;
                    subUrlParamsObj[key0].push(param);
                }
            }
            for (const key in subUrlParamsObj) {
                const val = subUrlParamsObj[key].join('&');
                obj[key] = toObj(val);
            }
            return obj;
        };
        return URLSearchParam.checkIfObjShouldBeArrayAndConvert(toObj(urlParams));
    }
    static checkIfObjShouldBeArrayAndConvert(obj) {
        if (obj instanceof Array) {
            obj.forEach((item, i) => {
                if (item instanceof Object) {
                    obj[i] = URLSearchParam.checkIfObjShouldBeArrayAndConvert(item);
                }
            });
            return obj;
        }
        let canConvertToArray = true;
        for (const key in obj) {
            const val = obj[key];
            if (val instanceof Object || val instanceof Array) {
                obj[key] = URLSearchParam.checkIfObjShouldBeArrayAndConvert(val);
            }
            if (isNaN(+key)) {
                canConvertToArray = false;
            }
        }
        const orderedObj = {};
        Object.keys(obj)
            .sort()
            .forEach(function (key) {
            orderedObj[key] = obj[key];
        });
        const firstVal = +Object.keys(orderedObj)[0];
        if (firstVal != 0) {
            canConvertToArray = false;
        }
        const keys = Object.keys(orderedObj);
        keys;
        for (let i = 0; i < keys.length - 1; i++) {
            const key = +keys[i];
            key;
            const nextKey = +keys[i + 1];
            const keyStep = nextKey - key;
            if (keyStep != 1) {
                canConvertToArray = false;
                break;
            }
        }
        if (canConvertToArray) {
            const arr = [];
            for (const key in orderedObj) {
                arr.push(orderedObj[key]);
            }
            return arr;
        }
        return obj;
    }
    static addParamsToUrl(params, url = window.location.href) {
        var _a;
        if (url.indexOf('?') == -1) {
            url += '?';
        }
        else {
            url += '&';
        }
        return (_a = url + params) !== null && _a !== void 0 ? _a : '';
    }
    static addObjToUrl(obj, url = window.location.href) {
        return URLSearchParam.addParamsToUrl(URLSearchParam.objToUrlParams(obj), url);
    }
    static extractParamsFromUrl(url = window.location.href) {
        return URLSearchParam.urlParamsToObj(url.split('?')[1]);
    }
}
exports.URLSearchParam = URLSearchParam;
//# sourceMappingURL=urlSearchParam.js.map