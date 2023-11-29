import { ObjectType } from '../common/types/common';
export declare class URLSearchParam {
    static objToUrlParams(obj: ObjectType): string;
    static urlParamsToObj(urlParams: string): ObjectType;
    static checkIfObjShouldBeArrayAndConvert(obj: ObjectType): ObjectType;
    static addParamsToUrl(params: string, url?: string): string;
    static addObjToUrl(obj: ObjectType, url?: string): string;
    static extractParamsFromUrl(url?: string): ObjectType;
}
