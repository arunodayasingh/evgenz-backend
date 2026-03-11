import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models";
import { type PrismaClient } from "./class";
export type * from '../models';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: any;
export declare const JsonNull: any;
export declare const AnyNull: any;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly Language: "Language";
    readonly Category: "Category";
    readonly CategoryTranslation: "CategoryTranslation";
    readonly FuelType: "FuelType";
    readonly FuelTypeTranslation: "FuelTypeTranslation";
    readonly BodyType: "BodyType";
    readonly BodyTypeTranslation: "BodyTypeTranslation";
    readonly Brand: "Brand";
    readonly BrandTranslation: "BrandTranslation";
    readonly Model: "Model";
    readonly ModelTranslation: "ModelTranslation";
    readonly BatteryPack: "BatteryPack";
    readonly Variant: "Variant";
    readonly Specification: "Specification";
    readonly SpecificationTranslation: "SpecificationTranslation";
    readonly BatteryPackSpec: "BatteryPackSpec";
    readonly VariantSpec: "VariantSpec";
    readonly FeatureGroup: "FeatureGroup";
    readonly Feature: "Feature";
    readonly VariantFeature: "VariantFeature";
    readonly Image: "Image";
    readonly Review: "Review";
    readonly State: "State";
    readonly City: "City";
    readonly ChargingStation: "ChargingStation";
    readonly ChargingStationTranslation: "ChargingStationTranslation";
    readonly Article: "Article";
    readonly ArticleTranslation: "ArticleTranslation";
    readonly SeoMetadata: "SeoMetadata";
    readonly User: "User";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "language" | "category" | "categoryTranslation" | "fuelType" | "fuelTypeTranslation" | "bodyType" | "bodyTypeTranslation" | "brand" | "brandTranslation" | "model" | "modelTranslation" | "batteryPack" | "variant" | "specification" | "specificationTranslation" | "batteryPackSpec" | "variantSpec" | "featureGroup" | "feature" | "variantFeature" | "image" | "review" | "state" | "city" | "chargingStation" | "chargingStationTranslation" | "article" | "articleTranslation" | "seoMetadata" | "user";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Language: {
            payload: Prisma.$LanguagePayload<ExtArgs>;
            fields: Prisma.LanguageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LanguageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LanguageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguagePayload>;
                };
                findFirst: {
                    args: Prisma.LanguageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LanguageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguagePayload>;
                };
                findMany: {
                    args: Prisma.LanguageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguagePayload>[];
                };
                create: {
                    args: Prisma.LanguageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguagePayload>;
                };
                createMany: {
                    args: Prisma.LanguageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.LanguageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguagePayload>;
                };
                update: {
                    args: Prisma.LanguageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguagePayload>;
                };
                deleteMany: {
                    args: Prisma.LanguageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LanguageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.LanguageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LanguagePayload>;
                };
                aggregate: {
                    args: Prisma.LanguageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLanguage>;
                };
                groupBy: {
                    args: Prisma.LanguageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LanguageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LanguageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LanguageCountAggregateOutputType> | number;
                };
            };
        };
        Category: {
            payload: Prisma.$CategoryPayload<ExtArgs>;
            fields: Prisma.CategoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CategoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                findFirst: {
                    args: Prisma.CategoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                findMany: {
                    args: Prisma.CategoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>[];
                };
                create: {
                    args: Prisma.CategoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                createMany: {
                    args: Prisma.CategoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.CategoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                update: {
                    args: Prisma.CategoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                deleteMany: {
                    args: Prisma.CategoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CategoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.CategoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryPayload>;
                };
                aggregate: {
                    args: Prisma.CategoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCategory>;
                };
                groupBy: {
                    args: Prisma.CategoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CategoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoryCountAggregateOutputType> | number;
                };
            };
        };
        CategoryTranslation: {
            payload: Prisma.$CategoryTranslationPayload<ExtArgs>;
            fields: Prisma.CategoryTranslationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CategoryTranslationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryTranslationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CategoryTranslationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryTranslationPayload>;
                };
                findFirst: {
                    args: Prisma.CategoryTranslationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryTranslationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CategoryTranslationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryTranslationPayload>;
                };
                findMany: {
                    args: Prisma.CategoryTranslationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryTranslationPayload>[];
                };
                create: {
                    args: Prisma.CategoryTranslationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryTranslationPayload>;
                };
                createMany: {
                    args: Prisma.CategoryTranslationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.CategoryTranslationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryTranslationPayload>;
                };
                update: {
                    args: Prisma.CategoryTranslationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryTranslationPayload>;
                };
                deleteMany: {
                    args: Prisma.CategoryTranslationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CategoryTranslationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.CategoryTranslationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoryTranslationPayload>;
                };
                aggregate: {
                    args: Prisma.CategoryTranslationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCategoryTranslation>;
                };
                groupBy: {
                    args: Prisma.CategoryTranslationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoryTranslationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CategoryTranslationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoryTranslationCountAggregateOutputType> | number;
                };
            };
        };
        FuelType: {
            payload: Prisma.$FuelTypePayload<ExtArgs>;
            fields: Prisma.FuelTypeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FuelTypeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FuelTypePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FuelTypeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FuelTypePayload>;
                };
                findFirst: {
                    args: Prisma.FuelTypeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FuelTypePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FuelTypeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FuelTypePayload>;
                };
                findMany: {
                    args: Prisma.FuelTypeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FuelTypePayload>[];
                };
                create: {
                    args: Prisma.FuelTypeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FuelTypePayload>;
                };
                createMany: {
                    args: Prisma.FuelTypeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.FuelTypeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FuelTypePayload>;
                };
                update: {
                    args: Prisma.FuelTypeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FuelTypePayload>;
                };
                deleteMany: {
                    args: Prisma.FuelTypeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FuelTypeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.FuelTypeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FuelTypePayload>;
                };
                aggregate: {
                    args: Prisma.FuelTypeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFuelType>;
                };
                groupBy: {
                    args: Prisma.FuelTypeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FuelTypeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FuelTypeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FuelTypeCountAggregateOutputType> | number;
                };
            };
        };
        FuelTypeTranslation: {
            payload: Prisma.$FuelTypeTranslationPayload<ExtArgs>;
            fields: Prisma.FuelTypeTranslationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FuelTypeTranslationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FuelTypeTranslationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FuelTypeTranslationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FuelTypeTranslationPayload>;
                };
                findFirst: {
                    args: Prisma.FuelTypeTranslationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FuelTypeTranslationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FuelTypeTranslationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FuelTypeTranslationPayload>;
                };
                findMany: {
                    args: Prisma.FuelTypeTranslationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FuelTypeTranslationPayload>[];
                };
                create: {
                    args: Prisma.FuelTypeTranslationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FuelTypeTranslationPayload>;
                };
                createMany: {
                    args: Prisma.FuelTypeTranslationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.FuelTypeTranslationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FuelTypeTranslationPayload>;
                };
                update: {
                    args: Prisma.FuelTypeTranslationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FuelTypeTranslationPayload>;
                };
                deleteMany: {
                    args: Prisma.FuelTypeTranslationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FuelTypeTranslationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.FuelTypeTranslationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FuelTypeTranslationPayload>;
                };
                aggregate: {
                    args: Prisma.FuelTypeTranslationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFuelTypeTranslation>;
                };
                groupBy: {
                    args: Prisma.FuelTypeTranslationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FuelTypeTranslationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FuelTypeTranslationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FuelTypeTranslationCountAggregateOutputType> | number;
                };
            };
        };
        BodyType: {
            payload: Prisma.$BodyTypePayload<ExtArgs>;
            fields: Prisma.BodyTypeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BodyTypeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BodyTypePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BodyTypeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BodyTypePayload>;
                };
                findFirst: {
                    args: Prisma.BodyTypeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BodyTypePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BodyTypeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BodyTypePayload>;
                };
                findMany: {
                    args: Prisma.BodyTypeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BodyTypePayload>[];
                };
                create: {
                    args: Prisma.BodyTypeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BodyTypePayload>;
                };
                createMany: {
                    args: Prisma.BodyTypeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.BodyTypeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BodyTypePayload>;
                };
                update: {
                    args: Prisma.BodyTypeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BodyTypePayload>;
                };
                deleteMany: {
                    args: Prisma.BodyTypeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BodyTypeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.BodyTypeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BodyTypePayload>;
                };
                aggregate: {
                    args: Prisma.BodyTypeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBodyType>;
                };
                groupBy: {
                    args: Prisma.BodyTypeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BodyTypeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BodyTypeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BodyTypeCountAggregateOutputType> | number;
                };
            };
        };
        BodyTypeTranslation: {
            payload: Prisma.$BodyTypeTranslationPayload<ExtArgs>;
            fields: Prisma.BodyTypeTranslationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BodyTypeTranslationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BodyTypeTranslationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BodyTypeTranslationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BodyTypeTranslationPayload>;
                };
                findFirst: {
                    args: Prisma.BodyTypeTranslationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BodyTypeTranslationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BodyTypeTranslationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BodyTypeTranslationPayload>;
                };
                findMany: {
                    args: Prisma.BodyTypeTranslationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BodyTypeTranslationPayload>[];
                };
                create: {
                    args: Prisma.BodyTypeTranslationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BodyTypeTranslationPayload>;
                };
                createMany: {
                    args: Prisma.BodyTypeTranslationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.BodyTypeTranslationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BodyTypeTranslationPayload>;
                };
                update: {
                    args: Prisma.BodyTypeTranslationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BodyTypeTranslationPayload>;
                };
                deleteMany: {
                    args: Prisma.BodyTypeTranslationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BodyTypeTranslationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.BodyTypeTranslationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BodyTypeTranslationPayload>;
                };
                aggregate: {
                    args: Prisma.BodyTypeTranslationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBodyTypeTranslation>;
                };
                groupBy: {
                    args: Prisma.BodyTypeTranslationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BodyTypeTranslationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BodyTypeTranslationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BodyTypeTranslationCountAggregateOutputType> | number;
                };
            };
        };
        Brand: {
            payload: Prisma.$BrandPayload<ExtArgs>;
            fields: Prisma.BrandFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BrandFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BrandFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandPayload>;
                };
                findFirst: {
                    args: Prisma.BrandFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BrandFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandPayload>;
                };
                findMany: {
                    args: Prisma.BrandFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandPayload>[];
                };
                create: {
                    args: Prisma.BrandCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandPayload>;
                };
                createMany: {
                    args: Prisma.BrandCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.BrandDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandPayload>;
                };
                update: {
                    args: Prisma.BrandUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandPayload>;
                };
                deleteMany: {
                    args: Prisma.BrandDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BrandUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.BrandUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandPayload>;
                };
                aggregate: {
                    args: Prisma.BrandAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBrand>;
                };
                groupBy: {
                    args: Prisma.BrandGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BrandGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BrandCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BrandCountAggregateOutputType> | number;
                };
            };
        };
        BrandTranslation: {
            payload: Prisma.$BrandTranslationPayload<ExtArgs>;
            fields: Prisma.BrandTranslationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BrandTranslationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandTranslationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BrandTranslationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandTranslationPayload>;
                };
                findFirst: {
                    args: Prisma.BrandTranslationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandTranslationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BrandTranslationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandTranslationPayload>;
                };
                findMany: {
                    args: Prisma.BrandTranslationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandTranslationPayload>[];
                };
                create: {
                    args: Prisma.BrandTranslationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandTranslationPayload>;
                };
                createMany: {
                    args: Prisma.BrandTranslationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.BrandTranslationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandTranslationPayload>;
                };
                update: {
                    args: Prisma.BrandTranslationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandTranslationPayload>;
                };
                deleteMany: {
                    args: Prisma.BrandTranslationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BrandTranslationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.BrandTranslationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BrandTranslationPayload>;
                };
                aggregate: {
                    args: Prisma.BrandTranslationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBrandTranslation>;
                };
                groupBy: {
                    args: Prisma.BrandTranslationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BrandTranslationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BrandTranslationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BrandTranslationCountAggregateOutputType> | number;
                };
            };
        };
        Model: {
            payload: Prisma.$ModelPayload<ExtArgs>;
            fields: Prisma.ModelFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ModelFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModelPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ModelFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModelPayload>;
                };
                findFirst: {
                    args: Prisma.ModelFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModelPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ModelFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModelPayload>;
                };
                findMany: {
                    args: Prisma.ModelFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModelPayload>[];
                };
                create: {
                    args: Prisma.ModelCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModelPayload>;
                };
                createMany: {
                    args: Prisma.ModelCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ModelDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModelPayload>;
                };
                update: {
                    args: Prisma.ModelUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModelPayload>;
                };
                deleteMany: {
                    args: Prisma.ModelDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ModelUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ModelUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModelPayload>;
                };
                aggregate: {
                    args: Prisma.ModelAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateModel>;
                };
                groupBy: {
                    args: Prisma.ModelGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ModelGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ModelCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ModelCountAggregateOutputType> | number;
                };
            };
        };
        ModelTranslation: {
            payload: Prisma.$ModelTranslationPayload<ExtArgs>;
            fields: Prisma.ModelTranslationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ModelTranslationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModelTranslationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ModelTranslationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModelTranslationPayload>;
                };
                findFirst: {
                    args: Prisma.ModelTranslationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModelTranslationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ModelTranslationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModelTranslationPayload>;
                };
                findMany: {
                    args: Prisma.ModelTranslationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModelTranslationPayload>[];
                };
                create: {
                    args: Prisma.ModelTranslationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModelTranslationPayload>;
                };
                createMany: {
                    args: Prisma.ModelTranslationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ModelTranslationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModelTranslationPayload>;
                };
                update: {
                    args: Prisma.ModelTranslationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModelTranslationPayload>;
                };
                deleteMany: {
                    args: Prisma.ModelTranslationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ModelTranslationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ModelTranslationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModelTranslationPayload>;
                };
                aggregate: {
                    args: Prisma.ModelTranslationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateModelTranslation>;
                };
                groupBy: {
                    args: Prisma.ModelTranslationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ModelTranslationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ModelTranslationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ModelTranslationCountAggregateOutputType> | number;
                };
            };
        };
        BatteryPack: {
            payload: Prisma.$BatteryPackPayload<ExtArgs>;
            fields: Prisma.BatteryPackFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BatteryPackFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BatteryPackPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BatteryPackFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BatteryPackPayload>;
                };
                findFirst: {
                    args: Prisma.BatteryPackFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BatteryPackPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BatteryPackFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BatteryPackPayload>;
                };
                findMany: {
                    args: Prisma.BatteryPackFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BatteryPackPayload>[];
                };
                create: {
                    args: Prisma.BatteryPackCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BatteryPackPayload>;
                };
                createMany: {
                    args: Prisma.BatteryPackCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.BatteryPackDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BatteryPackPayload>;
                };
                update: {
                    args: Prisma.BatteryPackUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BatteryPackPayload>;
                };
                deleteMany: {
                    args: Prisma.BatteryPackDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BatteryPackUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.BatteryPackUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BatteryPackPayload>;
                };
                aggregate: {
                    args: Prisma.BatteryPackAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBatteryPack>;
                };
                groupBy: {
                    args: Prisma.BatteryPackGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BatteryPackGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BatteryPackCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BatteryPackCountAggregateOutputType> | number;
                };
            };
        };
        Variant: {
            payload: Prisma.$VariantPayload<ExtArgs>;
            fields: Prisma.VariantFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VariantFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VariantFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantPayload>;
                };
                findFirst: {
                    args: Prisma.VariantFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VariantFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantPayload>;
                };
                findMany: {
                    args: Prisma.VariantFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantPayload>[];
                };
                create: {
                    args: Prisma.VariantCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantPayload>;
                };
                createMany: {
                    args: Prisma.VariantCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.VariantDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantPayload>;
                };
                update: {
                    args: Prisma.VariantUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantPayload>;
                };
                deleteMany: {
                    args: Prisma.VariantDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VariantUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.VariantUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantPayload>;
                };
                aggregate: {
                    args: Prisma.VariantAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVariant>;
                };
                groupBy: {
                    args: Prisma.VariantGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VariantGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VariantCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VariantCountAggregateOutputType> | number;
                };
            };
        };
        Specification: {
            payload: Prisma.$SpecificationPayload<ExtArgs>;
            fields: Prisma.SpecificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SpecificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SpecificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SpecificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SpecificationPayload>;
                };
                findFirst: {
                    args: Prisma.SpecificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SpecificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SpecificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SpecificationPayload>;
                };
                findMany: {
                    args: Prisma.SpecificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SpecificationPayload>[];
                };
                create: {
                    args: Prisma.SpecificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SpecificationPayload>;
                };
                createMany: {
                    args: Prisma.SpecificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.SpecificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SpecificationPayload>;
                };
                update: {
                    args: Prisma.SpecificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SpecificationPayload>;
                };
                deleteMany: {
                    args: Prisma.SpecificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SpecificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.SpecificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SpecificationPayload>;
                };
                aggregate: {
                    args: Prisma.SpecificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSpecification>;
                };
                groupBy: {
                    args: Prisma.SpecificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SpecificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SpecificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SpecificationCountAggregateOutputType> | number;
                };
            };
        };
        SpecificationTranslation: {
            payload: Prisma.$SpecificationTranslationPayload<ExtArgs>;
            fields: Prisma.SpecificationTranslationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SpecificationTranslationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SpecificationTranslationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SpecificationTranslationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SpecificationTranslationPayload>;
                };
                findFirst: {
                    args: Prisma.SpecificationTranslationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SpecificationTranslationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SpecificationTranslationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SpecificationTranslationPayload>;
                };
                findMany: {
                    args: Prisma.SpecificationTranslationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SpecificationTranslationPayload>[];
                };
                create: {
                    args: Prisma.SpecificationTranslationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SpecificationTranslationPayload>;
                };
                createMany: {
                    args: Prisma.SpecificationTranslationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.SpecificationTranslationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SpecificationTranslationPayload>;
                };
                update: {
                    args: Prisma.SpecificationTranslationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SpecificationTranslationPayload>;
                };
                deleteMany: {
                    args: Prisma.SpecificationTranslationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SpecificationTranslationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.SpecificationTranslationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SpecificationTranslationPayload>;
                };
                aggregate: {
                    args: Prisma.SpecificationTranslationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSpecificationTranslation>;
                };
                groupBy: {
                    args: Prisma.SpecificationTranslationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SpecificationTranslationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SpecificationTranslationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SpecificationTranslationCountAggregateOutputType> | number;
                };
            };
        };
        BatteryPackSpec: {
            payload: Prisma.$BatteryPackSpecPayload<ExtArgs>;
            fields: Prisma.BatteryPackSpecFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BatteryPackSpecFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BatteryPackSpecPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BatteryPackSpecFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BatteryPackSpecPayload>;
                };
                findFirst: {
                    args: Prisma.BatteryPackSpecFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BatteryPackSpecPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BatteryPackSpecFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BatteryPackSpecPayload>;
                };
                findMany: {
                    args: Prisma.BatteryPackSpecFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BatteryPackSpecPayload>[];
                };
                create: {
                    args: Prisma.BatteryPackSpecCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BatteryPackSpecPayload>;
                };
                createMany: {
                    args: Prisma.BatteryPackSpecCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.BatteryPackSpecDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BatteryPackSpecPayload>;
                };
                update: {
                    args: Prisma.BatteryPackSpecUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BatteryPackSpecPayload>;
                };
                deleteMany: {
                    args: Prisma.BatteryPackSpecDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BatteryPackSpecUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.BatteryPackSpecUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BatteryPackSpecPayload>;
                };
                aggregate: {
                    args: Prisma.BatteryPackSpecAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBatteryPackSpec>;
                };
                groupBy: {
                    args: Prisma.BatteryPackSpecGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BatteryPackSpecGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BatteryPackSpecCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BatteryPackSpecCountAggregateOutputType> | number;
                };
            };
        };
        VariantSpec: {
            payload: Prisma.$VariantSpecPayload<ExtArgs>;
            fields: Prisma.VariantSpecFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VariantSpecFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantSpecPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VariantSpecFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantSpecPayload>;
                };
                findFirst: {
                    args: Prisma.VariantSpecFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantSpecPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VariantSpecFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantSpecPayload>;
                };
                findMany: {
                    args: Prisma.VariantSpecFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantSpecPayload>[];
                };
                create: {
                    args: Prisma.VariantSpecCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantSpecPayload>;
                };
                createMany: {
                    args: Prisma.VariantSpecCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.VariantSpecDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantSpecPayload>;
                };
                update: {
                    args: Prisma.VariantSpecUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantSpecPayload>;
                };
                deleteMany: {
                    args: Prisma.VariantSpecDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VariantSpecUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.VariantSpecUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantSpecPayload>;
                };
                aggregate: {
                    args: Prisma.VariantSpecAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVariantSpec>;
                };
                groupBy: {
                    args: Prisma.VariantSpecGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VariantSpecGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VariantSpecCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VariantSpecCountAggregateOutputType> | number;
                };
            };
        };
        FeatureGroup: {
            payload: Prisma.$FeatureGroupPayload<ExtArgs>;
            fields: Prisma.FeatureGroupFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FeatureGroupFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeatureGroupPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FeatureGroupFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeatureGroupPayload>;
                };
                findFirst: {
                    args: Prisma.FeatureGroupFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeatureGroupPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FeatureGroupFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeatureGroupPayload>;
                };
                findMany: {
                    args: Prisma.FeatureGroupFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeatureGroupPayload>[];
                };
                create: {
                    args: Prisma.FeatureGroupCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeatureGroupPayload>;
                };
                createMany: {
                    args: Prisma.FeatureGroupCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.FeatureGroupDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeatureGroupPayload>;
                };
                update: {
                    args: Prisma.FeatureGroupUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeatureGroupPayload>;
                };
                deleteMany: {
                    args: Prisma.FeatureGroupDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FeatureGroupUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.FeatureGroupUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeatureGroupPayload>;
                };
                aggregate: {
                    args: Prisma.FeatureGroupAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFeatureGroup>;
                };
                groupBy: {
                    args: Prisma.FeatureGroupGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FeatureGroupGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FeatureGroupCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FeatureGroupCountAggregateOutputType> | number;
                };
            };
        };
        Feature: {
            payload: Prisma.$FeaturePayload<ExtArgs>;
            fields: Prisma.FeatureFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FeatureFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeaturePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FeatureFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeaturePayload>;
                };
                findFirst: {
                    args: Prisma.FeatureFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeaturePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FeatureFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeaturePayload>;
                };
                findMany: {
                    args: Prisma.FeatureFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeaturePayload>[];
                };
                create: {
                    args: Prisma.FeatureCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeaturePayload>;
                };
                createMany: {
                    args: Prisma.FeatureCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.FeatureDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeaturePayload>;
                };
                update: {
                    args: Prisma.FeatureUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeaturePayload>;
                };
                deleteMany: {
                    args: Prisma.FeatureDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FeatureUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.FeatureUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FeaturePayload>;
                };
                aggregate: {
                    args: Prisma.FeatureAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFeature>;
                };
                groupBy: {
                    args: Prisma.FeatureGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FeatureGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FeatureCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FeatureCountAggregateOutputType> | number;
                };
            };
        };
        VariantFeature: {
            payload: Prisma.$VariantFeaturePayload<ExtArgs>;
            fields: Prisma.VariantFeatureFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VariantFeatureFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantFeaturePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VariantFeatureFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantFeaturePayload>;
                };
                findFirst: {
                    args: Prisma.VariantFeatureFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantFeaturePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VariantFeatureFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantFeaturePayload>;
                };
                findMany: {
                    args: Prisma.VariantFeatureFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantFeaturePayload>[];
                };
                create: {
                    args: Prisma.VariantFeatureCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantFeaturePayload>;
                };
                createMany: {
                    args: Prisma.VariantFeatureCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.VariantFeatureDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantFeaturePayload>;
                };
                update: {
                    args: Prisma.VariantFeatureUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantFeaturePayload>;
                };
                deleteMany: {
                    args: Prisma.VariantFeatureDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VariantFeatureUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.VariantFeatureUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VariantFeaturePayload>;
                };
                aggregate: {
                    args: Prisma.VariantFeatureAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVariantFeature>;
                };
                groupBy: {
                    args: Prisma.VariantFeatureGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VariantFeatureGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VariantFeatureCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VariantFeatureCountAggregateOutputType> | number;
                };
            };
        };
        Image: {
            payload: Prisma.$ImagePayload<ExtArgs>;
            fields: Prisma.ImageFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ImageFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagePayload>;
                };
                findFirst: {
                    args: Prisma.ImageFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagePayload>;
                };
                findMany: {
                    args: Prisma.ImageFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagePayload>[];
                };
                create: {
                    args: Prisma.ImageCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagePayload>;
                };
                createMany: {
                    args: Prisma.ImageCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ImageDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagePayload>;
                };
                update: {
                    args: Prisma.ImageUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagePayload>;
                };
                deleteMany: {
                    args: Prisma.ImageDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ImageUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ImageUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImagePayload>;
                };
                aggregate: {
                    args: Prisma.ImageAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateImage>;
                };
                groupBy: {
                    args: Prisma.ImageGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ImageGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ImageCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ImageCountAggregateOutputType> | number;
                };
            };
        };
        Review: {
            payload: Prisma.$ReviewPayload<ExtArgs>;
            fields: Prisma.ReviewFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ReviewFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                findFirst: {
                    args: Prisma.ReviewFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                findMany: {
                    args: Prisma.ReviewFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>[];
                };
                create: {
                    args: Prisma.ReviewCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                createMany: {
                    args: Prisma.ReviewCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ReviewDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                update: {
                    args: Prisma.ReviewUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                deleteMany: {
                    args: Prisma.ReviewDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ReviewUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ReviewUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                aggregate: {
                    args: Prisma.ReviewAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReview>;
                };
                groupBy: {
                    args: Prisma.ReviewGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReviewGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ReviewCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReviewCountAggregateOutputType> | number;
                };
            };
        };
        State: {
            payload: Prisma.$StatePayload<ExtArgs>;
            fields: Prisma.StateFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StateFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StateFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatePayload>;
                };
                findFirst: {
                    args: Prisma.StateFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StateFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatePayload>;
                };
                findMany: {
                    args: Prisma.StateFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatePayload>[];
                };
                create: {
                    args: Prisma.StateCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatePayload>;
                };
                createMany: {
                    args: Prisma.StateCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.StateDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatePayload>;
                };
                update: {
                    args: Prisma.StateUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatePayload>;
                };
                deleteMany: {
                    args: Prisma.StateDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StateUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.StateUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StatePayload>;
                };
                aggregate: {
                    args: Prisma.StateAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateState>;
                };
                groupBy: {
                    args: Prisma.StateGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StateGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StateCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StateCountAggregateOutputType> | number;
                };
            };
        };
        City: {
            payload: Prisma.$CityPayload<ExtArgs>;
            fields: Prisma.CityFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CityFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CityFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>;
                };
                findFirst: {
                    args: Prisma.CityFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CityFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>;
                };
                findMany: {
                    args: Prisma.CityFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>[];
                };
                create: {
                    args: Prisma.CityCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>;
                };
                createMany: {
                    args: Prisma.CityCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.CityDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>;
                };
                update: {
                    args: Prisma.CityUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>;
                };
                deleteMany: {
                    args: Prisma.CityDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CityUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.CityUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CityPayload>;
                };
                aggregate: {
                    args: Prisma.CityAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCity>;
                };
                groupBy: {
                    args: Prisma.CityGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CityGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CityCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CityCountAggregateOutputType> | number;
                };
            };
        };
        ChargingStation: {
            payload: Prisma.$ChargingStationPayload<ExtArgs>;
            fields: Prisma.ChargingStationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ChargingStationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChargingStationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ChargingStationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChargingStationPayload>;
                };
                findFirst: {
                    args: Prisma.ChargingStationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChargingStationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ChargingStationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChargingStationPayload>;
                };
                findMany: {
                    args: Prisma.ChargingStationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChargingStationPayload>[];
                };
                create: {
                    args: Prisma.ChargingStationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChargingStationPayload>;
                };
                createMany: {
                    args: Prisma.ChargingStationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ChargingStationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChargingStationPayload>;
                };
                update: {
                    args: Prisma.ChargingStationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChargingStationPayload>;
                };
                deleteMany: {
                    args: Prisma.ChargingStationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ChargingStationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ChargingStationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChargingStationPayload>;
                };
                aggregate: {
                    args: Prisma.ChargingStationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateChargingStation>;
                };
                groupBy: {
                    args: Prisma.ChargingStationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChargingStationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ChargingStationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChargingStationCountAggregateOutputType> | number;
                };
            };
        };
        ChargingStationTranslation: {
            payload: Prisma.$ChargingStationTranslationPayload<ExtArgs>;
            fields: Prisma.ChargingStationTranslationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ChargingStationTranslationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChargingStationTranslationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ChargingStationTranslationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChargingStationTranslationPayload>;
                };
                findFirst: {
                    args: Prisma.ChargingStationTranslationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChargingStationTranslationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ChargingStationTranslationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChargingStationTranslationPayload>;
                };
                findMany: {
                    args: Prisma.ChargingStationTranslationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChargingStationTranslationPayload>[];
                };
                create: {
                    args: Prisma.ChargingStationTranslationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChargingStationTranslationPayload>;
                };
                createMany: {
                    args: Prisma.ChargingStationTranslationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ChargingStationTranslationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChargingStationTranslationPayload>;
                };
                update: {
                    args: Prisma.ChargingStationTranslationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChargingStationTranslationPayload>;
                };
                deleteMany: {
                    args: Prisma.ChargingStationTranslationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ChargingStationTranslationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ChargingStationTranslationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChargingStationTranslationPayload>;
                };
                aggregate: {
                    args: Prisma.ChargingStationTranslationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateChargingStationTranslation>;
                };
                groupBy: {
                    args: Prisma.ChargingStationTranslationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChargingStationTranslationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ChargingStationTranslationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChargingStationTranslationCountAggregateOutputType> | number;
                };
            };
        };
        Article: {
            payload: Prisma.$ArticlePayload<ExtArgs>;
            fields: Prisma.ArticleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ArticleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticlePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ArticleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticlePayload>;
                };
                findFirst: {
                    args: Prisma.ArticleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticlePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ArticleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticlePayload>;
                };
                findMany: {
                    args: Prisma.ArticleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticlePayload>[];
                };
                create: {
                    args: Prisma.ArticleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticlePayload>;
                };
                createMany: {
                    args: Prisma.ArticleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ArticleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticlePayload>;
                };
                update: {
                    args: Prisma.ArticleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticlePayload>;
                };
                deleteMany: {
                    args: Prisma.ArticleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ArticleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ArticleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticlePayload>;
                };
                aggregate: {
                    args: Prisma.ArticleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateArticle>;
                };
                groupBy: {
                    args: Prisma.ArticleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ArticleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ArticleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ArticleCountAggregateOutputType> | number;
                };
            };
        };
        ArticleTranslation: {
            payload: Prisma.$ArticleTranslationPayload<ExtArgs>;
            fields: Prisma.ArticleTranslationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ArticleTranslationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticleTranslationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ArticleTranslationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticleTranslationPayload>;
                };
                findFirst: {
                    args: Prisma.ArticleTranslationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticleTranslationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ArticleTranslationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticleTranslationPayload>;
                };
                findMany: {
                    args: Prisma.ArticleTranslationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticleTranslationPayload>[];
                };
                create: {
                    args: Prisma.ArticleTranslationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticleTranslationPayload>;
                };
                createMany: {
                    args: Prisma.ArticleTranslationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ArticleTranslationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticleTranslationPayload>;
                };
                update: {
                    args: Prisma.ArticleTranslationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticleTranslationPayload>;
                };
                deleteMany: {
                    args: Prisma.ArticleTranslationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ArticleTranslationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ArticleTranslationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ArticleTranslationPayload>;
                };
                aggregate: {
                    args: Prisma.ArticleTranslationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateArticleTranslation>;
                };
                groupBy: {
                    args: Prisma.ArticleTranslationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ArticleTranslationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ArticleTranslationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ArticleTranslationCountAggregateOutputType> | number;
                };
            };
        };
        SeoMetadata: {
            payload: Prisma.$SeoMetadataPayload<ExtArgs>;
            fields: Prisma.SeoMetadataFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SeoMetadataFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeoMetadataPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SeoMetadataFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeoMetadataPayload>;
                };
                findFirst: {
                    args: Prisma.SeoMetadataFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeoMetadataPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SeoMetadataFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeoMetadataPayload>;
                };
                findMany: {
                    args: Prisma.SeoMetadataFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeoMetadataPayload>[];
                };
                create: {
                    args: Prisma.SeoMetadataCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeoMetadataPayload>;
                };
                createMany: {
                    args: Prisma.SeoMetadataCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.SeoMetadataDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeoMetadataPayload>;
                };
                update: {
                    args: Prisma.SeoMetadataUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeoMetadataPayload>;
                };
                deleteMany: {
                    args: Prisma.SeoMetadataDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SeoMetadataUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.SeoMetadataUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeoMetadataPayload>;
                };
                aggregate: {
                    args: Prisma.SeoMetadataAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSeoMetadata>;
                };
                groupBy: {
                    args: Prisma.SeoMetadataGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SeoMetadataGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SeoMetadataCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SeoMetadataCountAggregateOutputType> | number;
                };
            };
        };
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const LanguageScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly name: "name";
    readonly isDefault: "isDefault";
    readonly isActive: "isActive";
};
export type LanguageScalarFieldEnum = (typeof LanguageScalarFieldEnum)[keyof typeof LanguageScalarFieldEnum];
export declare const CategoryScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];
export declare const CategoryTranslationScalarFieldEnum: {
    readonly id: "id";
    readonly categoryId: "categoryId";
    readonly languageId: "languageId";
    readonly name: "name";
    readonly description: "description";
};
export type CategoryTranslationScalarFieldEnum = (typeof CategoryTranslationScalarFieldEnum)[keyof typeof CategoryTranslationScalarFieldEnum];
export declare const FuelTypeScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FuelTypeScalarFieldEnum = (typeof FuelTypeScalarFieldEnum)[keyof typeof FuelTypeScalarFieldEnum];
export declare const FuelTypeTranslationScalarFieldEnum: {
    readonly id: "id";
    readonly fuelTypeId: "fuelTypeId";
    readonly languageId: "languageId";
    readonly name: "name";
};
export type FuelTypeTranslationScalarFieldEnum = (typeof FuelTypeTranslationScalarFieldEnum)[keyof typeof FuelTypeTranslationScalarFieldEnum];
export declare const BodyTypeScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BodyTypeScalarFieldEnum = (typeof BodyTypeScalarFieldEnum)[keyof typeof BodyTypeScalarFieldEnum];
export declare const BodyTypeTranslationScalarFieldEnum: {
    readonly id: "id";
    readonly bodyTypeId: "bodyTypeId";
    readonly languageId: "languageId";
    readonly name: "name";
};
export type BodyTypeTranslationScalarFieldEnum = (typeof BodyTypeTranslationScalarFieldEnum)[keyof typeof BodyTypeTranslationScalarFieldEnum];
export declare const BrandScalarFieldEnum: {
    readonly id: "id";
    readonly categoryId: "categoryId";
    readonly slug: "slug";
    readonly logo: "logo";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BrandScalarFieldEnum = (typeof BrandScalarFieldEnum)[keyof typeof BrandScalarFieldEnum];
export declare const BrandTranslationScalarFieldEnum: {
    readonly id: "id";
    readonly brandId: "brandId";
    readonly languageId: "languageId";
    readonly name: "name";
    readonly description: "description";
};
export type BrandTranslationScalarFieldEnum = (typeof BrandTranslationScalarFieldEnum)[keyof typeof BrandTranslationScalarFieldEnum];
export declare const ModelScalarFieldEnum: {
    readonly id: "id";
    readonly brandId: "brandId";
    readonly categoryId: "categoryId";
    readonly fuelTypeId: "fuelTypeId";
    readonly bodyTypeId: "bodyTypeId";
    readonly slug: "slug";
    readonly status: "status";
    readonly expectedLaunchDate: "expectedLaunchDate";
    readonly launchDate: "launchDate";
    readonly name: "name";
    readonly description: "description";
    readonly images: "images";
    readonly isFeatured: "isFeatured";
    readonly isPopular: "isPopular";
    readonly isTrending: "isTrending";
    readonly isBestSeller: "isBestSeller";
    readonly isRecommended: "isRecommended";
    readonly isTopRated: "isTopRated";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ModelScalarFieldEnum = (typeof ModelScalarFieldEnum)[keyof typeof ModelScalarFieldEnum];
export declare const ModelTranslationScalarFieldEnum: {
    readonly id: "id";
    readonly modelId: "modelId";
    readonly languageId: "languageId";
    readonly name: "name";
    readonly description: "description";
};
export type ModelTranslationScalarFieldEnum = (typeof ModelTranslationScalarFieldEnum)[keyof typeof ModelTranslationScalarFieldEnum];
export declare const BatteryPackScalarFieldEnum: {
    readonly id: "id";
    readonly modelId: "modelId";
    readonly name: "name";
    readonly batteryCapacity: "batteryCapacity";
    readonly rangeKm: "rangeKm";
    readonly motorPowerKw: "motorPowerKw";
    readonly chargingTimeHours: "chargingTimeHours";
    readonly fastCharging: "fastCharging";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BatteryPackScalarFieldEnum = (typeof BatteryPackScalarFieldEnum)[keyof typeof BatteryPackScalarFieldEnum];
export declare const VariantScalarFieldEnum: {
    readonly id: "id";
    readonly modelId: "modelId";
    readonly batteryPackId: "batteryPackId";
    readonly name: "name";
    readonly slug: "slug";
    readonly price: "price";
    readonly topSpeed: "topSpeed";
    readonly acceleration0100: "acceleration0100";
    readonly launchYear: "launchYear";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type VariantScalarFieldEnum = (typeof VariantScalarFieldEnum)[keyof typeof VariantScalarFieldEnum];
export declare const SpecificationScalarFieldEnum: {
    readonly id: "id";
    readonly modelId: "modelId";
    readonly key: "key";
    readonly isActive: "isActive";
};
export type SpecificationScalarFieldEnum = (typeof SpecificationScalarFieldEnum)[keyof typeof SpecificationScalarFieldEnum];
export declare const SpecificationTranslationScalarFieldEnum: {
    readonly id: "id";
    readonly specificationId: "specificationId";
    readonly languageId: "languageId";
    readonly value: "value";
};
export type SpecificationTranslationScalarFieldEnum = (typeof SpecificationTranslationScalarFieldEnum)[keyof typeof SpecificationTranslationScalarFieldEnum];
export declare const BatteryPackSpecScalarFieldEnum: {
    readonly id: "id";
    readonly batteryPackId: "batteryPackId";
    readonly key: "key";
    readonly value: "value";
    readonly unit: "unit";
};
export type BatteryPackSpecScalarFieldEnum = (typeof BatteryPackSpecScalarFieldEnum)[keyof typeof BatteryPackSpecScalarFieldEnum];
export declare const VariantSpecScalarFieldEnum: {
    readonly id: "id";
    readonly variantId: "variantId";
    readonly key: "key";
    readonly value: "value";
    readonly unit: "unit";
};
export type VariantSpecScalarFieldEnum = (typeof VariantSpecScalarFieldEnum)[keyof typeof VariantSpecScalarFieldEnum];
export declare const FeatureGroupScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
};
export type FeatureGroupScalarFieldEnum = (typeof FeatureGroupScalarFieldEnum)[keyof typeof FeatureGroupScalarFieldEnum];
export declare const FeatureScalarFieldEnum: {
    readonly id: "id";
    readonly featureGroupId: "featureGroupId";
    readonly name: "name";
};
export type FeatureScalarFieldEnum = (typeof FeatureScalarFieldEnum)[keyof typeof FeatureScalarFieldEnum];
export declare const VariantFeatureScalarFieldEnum: {
    readonly variantId: "variantId";
    readonly featureId: "featureId";
};
export type VariantFeatureScalarFieldEnum = (typeof VariantFeatureScalarFieldEnum)[keyof typeof VariantFeatureScalarFieldEnum];
export declare const ImageScalarFieldEnum: {
    readonly id: "id";
    readonly entityType: "entityType";
    readonly entityId: "entityId";
    readonly imageUrl: "imageUrl";
    readonly isPrimary: "isPrimary";
    readonly sortOrder: "sortOrder";
    readonly createdAt: "createdAt";
};
export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum];
export declare const ReviewScalarFieldEnum: {
    readonly id: "id";
    readonly modelId: "modelId";
    readonly rating: "rating";
    readonly pros: "pros";
    readonly cons: "cons";
    readonly reviewText: "reviewText";
    readonly createdAt: "createdAt";
};
export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum];
export declare const StateScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly code: "code";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type StateScalarFieldEnum = (typeof StateScalarFieldEnum)[keyof typeof StateScalarFieldEnum];
export declare const CityScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly stateId: "stateId";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum];
export declare const ChargingStationScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly address: "address";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly operator: "operator";
    readonly connectorType: "connectorType";
    readonly chargingSpeed: "chargingSpeed";
    readonly cityId: "cityId";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ChargingStationScalarFieldEnum = (typeof ChargingStationScalarFieldEnum)[keyof typeof ChargingStationScalarFieldEnum];
export declare const ChargingStationTranslationScalarFieldEnum: {
    readonly id: "id";
    readonly chargingStationId: "chargingStationId";
    readonly languageId: "languageId";
    readonly name: "name";
    readonly address: "address";
};
export type ChargingStationTranslationScalarFieldEnum = (typeof ChargingStationTranslationScalarFieldEnum)[keyof typeof ChargingStationTranslationScalarFieldEnum];
export declare const ArticleScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly imageUrl: "imageUrl";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum];
export declare const ArticleTranslationScalarFieldEnum: {
    readonly id: "id";
    readonly articleId: "articleId";
    readonly languageId: "languageId";
    readonly title: "title";
    readonly content: "content";
};
export type ArticleTranslationScalarFieldEnum = (typeof ArticleTranslationScalarFieldEnum)[keyof typeof ArticleTranslationScalarFieldEnum];
export declare const SeoMetadataScalarFieldEnum: {
    readonly id: "id";
    readonly entityType: "entityType";
    readonly entityId: "entityId";
    readonly title: "title";
    readonly description: "description";
    readonly keywords: "keywords";
    readonly isIndexable: "isIndexable";
    readonly h1Heading: "h1Heading";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SeoMetadataScalarFieldEnum = (typeof SeoMetadataScalarFieldEnum)[keyof typeof SeoMetadataScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly password: "password";
    readonly name: "name";
    readonly role: "role";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const LanguageOrderByRelevanceFieldEnum: {
    readonly code: "code";
    readonly name: "name";
};
export type LanguageOrderByRelevanceFieldEnum = (typeof LanguageOrderByRelevanceFieldEnum)[keyof typeof LanguageOrderByRelevanceFieldEnum];
export declare const CategoryOrderByRelevanceFieldEnum: {
    readonly slug: "slug";
};
export type CategoryOrderByRelevanceFieldEnum = (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const CategoryTranslationOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly description: "description";
};
export type CategoryTranslationOrderByRelevanceFieldEnum = (typeof CategoryTranslationOrderByRelevanceFieldEnum)[keyof typeof CategoryTranslationOrderByRelevanceFieldEnum];
export declare const FuelTypeOrderByRelevanceFieldEnum: {
    readonly code: "code";
};
export type FuelTypeOrderByRelevanceFieldEnum = (typeof FuelTypeOrderByRelevanceFieldEnum)[keyof typeof FuelTypeOrderByRelevanceFieldEnum];
export declare const FuelTypeTranslationOrderByRelevanceFieldEnum: {
    readonly name: "name";
};
export type FuelTypeTranslationOrderByRelevanceFieldEnum = (typeof FuelTypeTranslationOrderByRelevanceFieldEnum)[keyof typeof FuelTypeTranslationOrderByRelevanceFieldEnum];
export declare const BodyTypeOrderByRelevanceFieldEnum: {
    readonly code: "code";
};
export type BodyTypeOrderByRelevanceFieldEnum = (typeof BodyTypeOrderByRelevanceFieldEnum)[keyof typeof BodyTypeOrderByRelevanceFieldEnum];
export declare const BodyTypeTranslationOrderByRelevanceFieldEnum: {
    readonly name: "name";
};
export type BodyTypeTranslationOrderByRelevanceFieldEnum = (typeof BodyTypeTranslationOrderByRelevanceFieldEnum)[keyof typeof BodyTypeTranslationOrderByRelevanceFieldEnum];
export declare const BrandOrderByRelevanceFieldEnum: {
    readonly slug: "slug";
    readonly logo: "logo";
};
export type BrandOrderByRelevanceFieldEnum = (typeof BrandOrderByRelevanceFieldEnum)[keyof typeof BrandOrderByRelevanceFieldEnum];
export declare const BrandTranslationOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly description: "description";
};
export type BrandTranslationOrderByRelevanceFieldEnum = (typeof BrandTranslationOrderByRelevanceFieldEnum)[keyof typeof BrandTranslationOrderByRelevanceFieldEnum];
export declare const ModelOrderByRelevanceFieldEnum: {
    readonly slug: "slug";
    readonly name: "name";
    readonly description: "description";
    readonly images: "images";
};
export type ModelOrderByRelevanceFieldEnum = (typeof ModelOrderByRelevanceFieldEnum)[keyof typeof ModelOrderByRelevanceFieldEnum];
export declare const ModelTranslationOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly description: "description";
};
export type ModelTranslationOrderByRelevanceFieldEnum = (typeof ModelTranslationOrderByRelevanceFieldEnum)[keyof typeof ModelTranslationOrderByRelevanceFieldEnum];
export declare const BatteryPackOrderByRelevanceFieldEnum: {
    readonly name: "name";
};
export type BatteryPackOrderByRelevanceFieldEnum = (typeof BatteryPackOrderByRelevanceFieldEnum)[keyof typeof BatteryPackOrderByRelevanceFieldEnum];
export declare const VariantOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly slug: "slug";
};
export type VariantOrderByRelevanceFieldEnum = (typeof VariantOrderByRelevanceFieldEnum)[keyof typeof VariantOrderByRelevanceFieldEnum];
export declare const SpecificationOrderByRelevanceFieldEnum: {
    readonly key: "key";
};
export type SpecificationOrderByRelevanceFieldEnum = (typeof SpecificationOrderByRelevanceFieldEnum)[keyof typeof SpecificationOrderByRelevanceFieldEnum];
export declare const SpecificationTranslationOrderByRelevanceFieldEnum: {
    readonly value: "value";
};
export type SpecificationTranslationOrderByRelevanceFieldEnum = (typeof SpecificationTranslationOrderByRelevanceFieldEnum)[keyof typeof SpecificationTranslationOrderByRelevanceFieldEnum];
export declare const BatteryPackSpecOrderByRelevanceFieldEnum: {
    readonly key: "key";
    readonly value: "value";
    readonly unit: "unit";
};
export type BatteryPackSpecOrderByRelevanceFieldEnum = (typeof BatteryPackSpecOrderByRelevanceFieldEnum)[keyof typeof BatteryPackSpecOrderByRelevanceFieldEnum];
export declare const VariantSpecOrderByRelevanceFieldEnum: {
    readonly key: "key";
    readonly value: "value";
    readonly unit: "unit";
};
export type VariantSpecOrderByRelevanceFieldEnum = (typeof VariantSpecOrderByRelevanceFieldEnum)[keyof typeof VariantSpecOrderByRelevanceFieldEnum];
export declare const FeatureGroupOrderByRelevanceFieldEnum: {
    readonly name: "name";
};
export type FeatureGroupOrderByRelevanceFieldEnum = (typeof FeatureGroupOrderByRelevanceFieldEnum)[keyof typeof FeatureGroupOrderByRelevanceFieldEnum];
export declare const FeatureOrderByRelevanceFieldEnum: {
    readonly name: "name";
};
export type FeatureOrderByRelevanceFieldEnum = (typeof FeatureOrderByRelevanceFieldEnum)[keyof typeof FeatureOrderByRelevanceFieldEnum];
export declare const ImageOrderByRelevanceFieldEnum: {
    readonly imageUrl: "imageUrl";
};
export type ImageOrderByRelevanceFieldEnum = (typeof ImageOrderByRelevanceFieldEnum)[keyof typeof ImageOrderByRelevanceFieldEnum];
export declare const ReviewOrderByRelevanceFieldEnum: {
    readonly pros: "pros";
    readonly cons: "cons";
    readonly reviewText: "reviewText";
};
export type ReviewOrderByRelevanceFieldEnum = (typeof ReviewOrderByRelevanceFieldEnum)[keyof typeof ReviewOrderByRelevanceFieldEnum];
export declare const StateOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly code: "code";
};
export type StateOrderByRelevanceFieldEnum = (typeof StateOrderByRelevanceFieldEnum)[keyof typeof StateOrderByRelevanceFieldEnum];
export declare const CityOrderByRelevanceFieldEnum: {
    readonly name: "name";
};
export type CityOrderByRelevanceFieldEnum = (typeof CityOrderByRelevanceFieldEnum)[keyof typeof CityOrderByRelevanceFieldEnum];
export declare const ChargingStationOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly address: "address";
    readonly operator: "operator";
    readonly connectorType: "connectorType";
    readonly chargingSpeed: "chargingSpeed";
};
export type ChargingStationOrderByRelevanceFieldEnum = (typeof ChargingStationOrderByRelevanceFieldEnum)[keyof typeof ChargingStationOrderByRelevanceFieldEnum];
export declare const ChargingStationTranslationOrderByRelevanceFieldEnum: {
    readonly name: "name";
    readonly address: "address";
};
export type ChargingStationTranslationOrderByRelevanceFieldEnum = (typeof ChargingStationTranslationOrderByRelevanceFieldEnum)[keyof typeof ChargingStationTranslationOrderByRelevanceFieldEnum];
export declare const ArticleOrderByRelevanceFieldEnum: {
    readonly slug: "slug";
    readonly imageUrl: "imageUrl";
};
export type ArticleOrderByRelevanceFieldEnum = (typeof ArticleOrderByRelevanceFieldEnum)[keyof typeof ArticleOrderByRelevanceFieldEnum];
export declare const ArticleTranslationOrderByRelevanceFieldEnum: {
    readonly title: "title";
    readonly content: "content";
};
export type ArticleTranslationOrderByRelevanceFieldEnum = (typeof ArticleTranslationOrderByRelevanceFieldEnum)[keyof typeof ArticleTranslationOrderByRelevanceFieldEnum];
export declare const SeoMetadataOrderByRelevanceFieldEnum: {
    readonly entityType: "entityType";
    readonly title: "title";
    readonly description: "description";
    readonly keywords: "keywords";
    readonly h1Heading: "h1Heading";
};
export type SeoMetadataOrderByRelevanceFieldEnum = (typeof SeoMetadataOrderByRelevanceFieldEnum)[keyof typeof SeoMetadataOrderByRelevanceFieldEnum];
export declare const UserOrderByRelevanceFieldEnum: {
    readonly email: "email";
    readonly password: "password";
    readonly name: "name";
};
export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum];
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type EnumModelStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModelStatus'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type EnumImageEntityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ImageEntityType'>;
export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    language?: Prisma.LanguageOmit;
    category?: Prisma.CategoryOmit;
    categoryTranslation?: Prisma.CategoryTranslationOmit;
    fuelType?: Prisma.FuelTypeOmit;
    fuelTypeTranslation?: Prisma.FuelTypeTranslationOmit;
    bodyType?: Prisma.BodyTypeOmit;
    bodyTypeTranslation?: Prisma.BodyTypeTranslationOmit;
    brand?: Prisma.BrandOmit;
    brandTranslation?: Prisma.BrandTranslationOmit;
    model?: Prisma.ModelOmit;
    modelTranslation?: Prisma.ModelTranslationOmit;
    batteryPack?: Prisma.BatteryPackOmit;
    variant?: Prisma.VariantOmit;
    specification?: Prisma.SpecificationOmit;
    specificationTranslation?: Prisma.SpecificationTranslationOmit;
    batteryPackSpec?: Prisma.BatteryPackSpecOmit;
    variantSpec?: Prisma.VariantSpecOmit;
    featureGroup?: Prisma.FeatureGroupOmit;
    feature?: Prisma.FeatureOmit;
    variantFeature?: Prisma.VariantFeatureOmit;
    image?: Prisma.ImageOmit;
    review?: Prisma.ReviewOmit;
    state?: Prisma.StateOmit;
    city?: Prisma.CityOmit;
    chargingStation?: Prisma.ChargingStationOmit;
    chargingStationTranslation?: Prisma.ChargingStationTranslationOmit;
    article?: Prisma.ArticleOmit;
    articleTranslation?: Prisma.ArticleTranslationOmit;
    seoMetadata?: Prisma.SeoMetadataOmit;
    user?: Prisma.UserOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
