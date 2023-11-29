declare class Meta {
    key: string;
    content: string;
}
export declare class CreatePostDto {
    title: string;
    metaTitle: string;
    summary: string;
    content: string;
    authorId: string;
    metas: Meta[];
}
export {};
