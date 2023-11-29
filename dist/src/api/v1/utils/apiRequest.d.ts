type CreateInstancePayload = {
    baseURL: string;
    token?: string;
};
export declare class Axios {
    private static URL;
    static createInstance({ baseURL, token }: CreateInstancePayload): import("axios").AxiosInstance;
}
export {};
