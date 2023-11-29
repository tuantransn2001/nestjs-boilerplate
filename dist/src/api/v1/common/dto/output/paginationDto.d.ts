declare class SearchObjectResponse {
    [key: string]: string | string;
}
export declare class PaginationDtoOutput {
    page_number?: number;
    page_size?: number;
    search?: SearchObjectResponse;
}
export {};
