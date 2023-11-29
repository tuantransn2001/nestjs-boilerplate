/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Connection, Schema } from 'mongoose';
import { ProviderName } from '../enums/common';
export declare const modelDefineProvider: <M extends string, S extends Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    [x: string]: any;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    [x: string]: any;
}>> & import("mongoose").FlatRecord<{
    [x: string]: any;
}> & Required<{
    _id: unknown;
}>>>(ModelName: M, Schema: S) => {
    provide: M;
    useFactory: (connection: Connection) => import("mongoose").Model<import("mongoose").IfAny<S, any, import("mongoose").ObtainSchemaGeneric<S, "DocType">>, import("mongoose").ObtainSchemaGeneric<S, "TQueryHelpers">, import("mongoose").ObtainSchemaGeneric<S, "TInstanceMethods">, {}, import("mongoose").IfAny<import("mongoose").IfAny<S, any, import("mongoose").ObtainSchemaGeneric<S, "DocType">>, any, import("mongoose").ObtainSchemaGeneric<S, "TInstanceMethods"> extends infer T ? T extends import("mongoose").ObtainSchemaGeneric<S, "TInstanceMethods"> ? T extends Record<string, never> ? import("mongoose").Document<unknown, import("mongoose").ObtainSchemaGeneric<S, "TQueryHelpers">, import("mongoose").IfAny<S, any, import("mongoose").ObtainSchemaGeneric<S, "DocType">>> & import("mongoose").Require_id<import("mongoose").IfAny<S, any, import("mongoose").ObtainSchemaGeneric<S, "DocType">>> : import("mongoose").IfAny<T, import("mongoose").Document<unknown, import("mongoose").ObtainSchemaGeneric<S, "TQueryHelpers">, import("mongoose").IfAny<S, any, import("mongoose").ObtainSchemaGeneric<S, "DocType">>> & import("mongoose").Require_id<import("mongoose").IfAny<S, any, import("mongoose").ObtainSchemaGeneric<S, "DocType">>>, import("mongoose").Document<unknown, import("mongoose").ObtainSchemaGeneric<S, "TQueryHelpers">, import("mongoose").IfAny<S, any, import("mongoose").ObtainSchemaGeneric<S, "DocType">>> & Omit<import("mongoose").Require_id<import("mongoose").IfAny<S, any, import("mongoose").ObtainSchemaGeneric<S, "DocType">>>, keyof T> & T> : never : never>, S> & import("mongoose").ObtainSchemaGeneric<S, "TStaticMethods">;
    inject: ProviderName[];
}[];
