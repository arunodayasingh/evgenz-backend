import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type BodyTypeModel = runtime.Types.Result.DefaultSelection<Prisma.$BodyTypePayload>;
export type AggregateBodyType = {
    _count: BodyTypeCountAggregateOutputType | null;
    _avg: BodyTypeAvgAggregateOutputType | null;
    _sum: BodyTypeSumAggregateOutputType | null;
    _min: BodyTypeMinAggregateOutputType | null;
    _max: BodyTypeMaxAggregateOutputType | null;
};
export type BodyTypeAvgAggregateOutputType = {
    id: number | null;
};
export type BodyTypeSumAggregateOutputType = {
    id: number | null;
};
export type BodyTypeMinAggregateOutputType = {
    id: number | null;
    code: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BodyTypeMaxAggregateOutputType = {
    id: number | null;
    code: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BodyTypeCountAggregateOutputType = {
    id: number;
    code: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type BodyTypeAvgAggregateInputType = {
    id?: true;
};
export type BodyTypeSumAggregateInputType = {
    id?: true;
};
export type BodyTypeMinAggregateInputType = {
    id?: true;
    code?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BodyTypeMaxAggregateInputType = {
    id?: true;
    code?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BodyTypeCountAggregateInputType = {
    id?: true;
    code?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type BodyTypeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BodyTypeWhereInput;
    orderBy?: Prisma.BodyTypeOrderByWithRelationInput | Prisma.BodyTypeOrderByWithRelationInput[];
    cursor?: Prisma.BodyTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BodyTypeCountAggregateInputType;
    _avg?: BodyTypeAvgAggregateInputType;
    _sum?: BodyTypeSumAggregateInputType;
    _min?: BodyTypeMinAggregateInputType;
    _max?: BodyTypeMaxAggregateInputType;
};
export type GetBodyTypeAggregateType<T extends BodyTypeAggregateArgs> = {
    [P in keyof T & keyof AggregateBodyType]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBodyType[P]> : Prisma.GetScalarType<T[P], AggregateBodyType[P]>;
};
export type BodyTypeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BodyTypeWhereInput;
    orderBy?: Prisma.BodyTypeOrderByWithAggregationInput | Prisma.BodyTypeOrderByWithAggregationInput[];
    by: Prisma.BodyTypeScalarFieldEnum[] | Prisma.BodyTypeScalarFieldEnum;
    having?: Prisma.BodyTypeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BodyTypeCountAggregateInputType | true;
    _avg?: BodyTypeAvgAggregateInputType;
    _sum?: BodyTypeSumAggregateInputType;
    _min?: BodyTypeMinAggregateInputType;
    _max?: BodyTypeMaxAggregateInputType;
};
export type BodyTypeGroupByOutputType = {
    id: number;
    code: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: BodyTypeCountAggregateOutputType | null;
    _avg: BodyTypeAvgAggregateOutputType | null;
    _sum: BodyTypeSumAggregateOutputType | null;
    _min: BodyTypeMinAggregateOutputType | null;
    _max: BodyTypeMaxAggregateOutputType | null;
};
type GetBodyTypeGroupByPayload<T extends BodyTypeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BodyTypeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BodyTypeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BodyTypeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BodyTypeGroupByOutputType[P]>;
}>>;
export type BodyTypeWhereInput = {
    AND?: Prisma.BodyTypeWhereInput | Prisma.BodyTypeWhereInput[];
    OR?: Prisma.BodyTypeWhereInput[];
    NOT?: Prisma.BodyTypeWhereInput | Prisma.BodyTypeWhereInput[];
    id?: Prisma.IntFilter<"BodyType"> | number;
    code?: Prisma.StringFilter<"BodyType"> | string;
    isActive?: Prisma.BoolFilter<"BodyType"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"BodyType"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BodyType"> | Date | string;
    translations?: Prisma.BodyTypeTranslationListRelationFilter;
    models?: Prisma.ModelListRelationFilter;
};
export type BodyTypeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    translations?: Prisma.BodyTypeTranslationOrderByRelationAggregateInput;
    models?: Prisma.ModelOrderByRelationAggregateInput;
    _relevance?: Prisma.BodyTypeOrderByRelevanceInput;
};
export type BodyTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    code?: string;
    AND?: Prisma.BodyTypeWhereInput | Prisma.BodyTypeWhereInput[];
    OR?: Prisma.BodyTypeWhereInput[];
    NOT?: Prisma.BodyTypeWhereInput | Prisma.BodyTypeWhereInput[];
    isActive?: Prisma.BoolFilter<"BodyType"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"BodyType"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BodyType"> | Date | string;
    translations?: Prisma.BodyTypeTranslationListRelationFilter;
    models?: Prisma.ModelListRelationFilter;
}, "id" | "code">;
export type BodyTypeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.BodyTypeCountOrderByAggregateInput;
    _avg?: Prisma.BodyTypeAvgOrderByAggregateInput;
    _max?: Prisma.BodyTypeMaxOrderByAggregateInput;
    _min?: Prisma.BodyTypeMinOrderByAggregateInput;
    _sum?: Prisma.BodyTypeSumOrderByAggregateInput;
};
export type BodyTypeScalarWhereWithAggregatesInput = {
    AND?: Prisma.BodyTypeScalarWhereWithAggregatesInput | Prisma.BodyTypeScalarWhereWithAggregatesInput[];
    OR?: Prisma.BodyTypeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BodyTypeScalarWhereWithAggregatesInput | Prisma.BodyTypeScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"BodyType"> | number;
    code?: Prisma.StringWithAggregatesFilter<"BodyType"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"BodyType"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BodyType"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"BodyType"> | Date | string;
};
export type BodyTypeCreateInput = {
    code: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    translations?: Prisma.BodyTypeTranslationCreateNestedManyWithoutBodyTypeInput;
    models?: Prisma.ModelCreateNestedManyWithoutBodyTypeInput;
};
export type BodyTypeUncheckedCreateInput = {
    id?: number;
    code: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    translations?: Prisma.BodyTypeTranslationUncheckedCreateNestedManyWithoutBodyTypeInput;
    models?: Prisma.ModelUncheckedCreateNestedManyWithoutBodyTypeInput;
};
export type BodyTypeUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    translations?: Prisma.BodyTypeTranslationUpdateManyWithoutBodyTypeNestedInput;
    models?: Prisma.ModelUpdateManyWithoutBodyTypeNestedInput;
};
export type BodyTypeUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    translations?: Prisma.BodyTypeTranslationUncheckedUpdateManyWithoutBodyTypeNestedInput;
    models?: Prisma.ModelUncheckedUpdateManyWithoutBodyTypeNestedInput;
};
export type BodyTypeCreateManyInput = {
    id?: number;
    code: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BodyTypeUpdateManyMutationInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BodyTypeUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BodyTypeOrderByRelevanceInput = {
    fields: Prisma.BodyTypeOrderByRelevanceFieldEnum | Prisma.BodyTypeOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type BodyTypeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BodyTypeAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type BodyTypeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BodyTypeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BodyTypeSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type BodyTypeScalarRelationFilter = {
    is?: Prisma.BodyTypeWhereInput;
    isNot?: Prisma.BodyTypeWhereInput;
};
export type BodyTypeCreateNestedOneWithoutTranslationsInput = {
    create?: Prisma.XOR<Prisma.BodyTypeCreateWithoutTranslationsInput, Prisma.BodyTypeUncheckedCreateWithoutTranslationsInput>;
    connectOrCreate?: Prisma.BodyTypeCreateOrConnectWithoutTranslationsInput;
    connect?: Prisma.BodyTypeWhereUniqueInput;
};
export type BodyTypeUpdateOneRequiredWithoutTranslationsNestedInput = {
    create?: Prisma.XOR<Prisma.BodyTypeCreateWithoutTranslationsInput, Prisma.BodyTypeUncheckedCreateWithoutTranslationsInput>;
    connectOrCreate?: Prisma.BodyTypeCreateOrConnectWithoutTranslationsInput;
    upsert?: Prisma.BodyTypeUpsertWithoutTranslationsInput;
    connect?: Prisma.BodyTypeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BodyTypeUpdateToOneWithWhereWithoutTranslationsInput, Prisma.BodyTypeUpdateWithoutTranslationsInput>, Prisma.BodyTypeUncheckedUpdateWithoutTranslationsInput>;
};
export type BodyTypeCreateNestedOneWithoutModelsInput = {
    create?: Prisma.XOR<Prisma.BodyTypeCreateWithoutModelsInput, Prisma.BodyTypeUncheckedCreateWithoutModelsInput>;
    connectOrCreate?: Prisma.BodyTypeCreateOrConnectWithoutModelsInput;
    connect?: Prisma.BodyTypeWhereUniqueInput;
};
export type BodyTypeUpdateOneRequiredWithoutModelsNestedInput = {
    create?: Prisma.XOR<Prisma.BodyTypeCreateWithoutModelsInput, Prisma.BodyTypeUncheckedCreateWithoutModelsInput>;
    connectOrCreate?: Prisma.BodyTypeCreateOrConnectWithoutModelsInput;
    upsert?: Prisma.BodyTypeUpsertWithoutModelsInput;
    connect?: Prisma.BodyTypeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BodyTypeUpdateToOneWithWhereWithoutModelsInput, Prisma.BodyTypeUpdateWithoutModelsInput>, Prisma.BodyTypeUncheckedUpdateWithoutModelsInput>;
};
export type BodyTypeCreateWithoutTranslationsInput = {
    code: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    models?: Prisma.ModelCreateNestedManyWithoutBodyTypeInput;
};
export type BodyTypeUncheckedCreateWithoutTranslationsInput = {
    id?: number;
    code: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    models?: Prisma.ModelUncheckedCreateNestedManyWithoutBodyTypeInput;
};
export type BodyTypeCreateOrConnectWithoutTranslationsInput = {
    where: Prisma.BodyTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.BodyTypeCreateWithoutTranslationsInput, Prisma.BodyTypeUncheckedCreateWithoutTranslationsInput>;
};
export type BodyTypeUpsertWithoutTranslationsInput = {
    update: Prisma.XOR<Prisma.BodyTypeUpdateWithoutTranslationsInput, Prisma.BodyTypeUncheckedUpdateWithoutTranslationsInput>;
    create: Prisma.XOR<Prisma.BodyTypeCreateWithoutTranslationsInput, Prisma.BodyTypeUncheckedCreateWithoutTranslationsInput>;
    where?: Prisma.BodyTypeWhereInput;
};
export type BodyTypeUpdateToOneWithWhereWithoutTranslationsInput = {
    where?: Prisma.BodyTypeWhereInput;
    data: Prisma.XOR<Prisma.BodyTypeUpdateWithoutTranslationsInput, Prisma.BodyTypeUncheckedUpdateWithoutTranslationsInput>;
};
export type BodyTypeUpdateWithoutTranslationsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    models?: Prisma.ModelUpdateManyWithoutBodyTypeNestedInput;
};
export type BodyTypeUncheckedUpdateWithoutTranslationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    models?: Prisma.ModelUncheckedUpdateManyWithoutBodyTypeNestedInput;
};
export type BodyTypeCreateWithoutModelsInput = {
    code: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    translations?: Prisma.BodyTypeTranslationCreateNestedManyWithoutBodyTypeInput;
};
export type BodyTypeUncheckedCreateWithoutModelsInput = {
    id?: number;
    code: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    translations?: Prisma.BodyTypeTranslationUncheckedCreateNestedManyWithoutBodyTypeInput;
};
export type BodyTypeCreateOrConnectWithoutModelsInput = {
    where: Prisma.BodyTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.BodyTypeCreateWithoutModelsInput, Prisma.BodyTypeUncheckedCreateWithoutModelsInput>;
};
export type BodyTypeUpsertWithoutModelsInput = {
    update: Prisma.XOR<Prisma.BodyTypeUpdateWithoutModelsInput, Prisma.BodyTypeUncheckedUpdateWithoutModelsInput>;
    create: Prisma.XOR<Prisma.BodyTypeCreateWithoutModelsInput, Prisma.BodyTypeUncheckedCreateWithoutModelsInput>;
    where?: Prisma.BodyTypeWhereInput;
};
export type BodyTypeUpdateToOneWithWhereWithoutModelsInput = {
    where?: Prisma.BodyTypeWhereInput;
    data: Prisma.XOR<Prisma.BodyTypeUpdateWithoutModelsInput, Prisma.BodyTypeUncheckedUpdateWithoutModelsInput>;
};
export type BodyTypeUpdateWithoutModelsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    translations?: Prisma.BodyTypeTranslationUpdateManyWithoutBodyTypeNestedInput;
};
export type BodyTypeUncheckedUpdateWithoutModelsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    translations?: Prisma.BodyTypeTranslationUncheckedUpdateManyWithoutBodyTypeNestedInput;
};
export type BodyTypeCountOutputType = {
    translations: number;
    models: number;
};
export type BodyTypeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    translations?: boolean | BodyTypeCountOutputTypeCountTranslationsArgs;
    models?: boolean | BodyTypeCountOutputTypeCountModelsArgs;
};
export type BodyTypeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BodyTypeCountOutputTypeSelect<ExtArgs> | null;
};
export type BodyTypeCountOutputTypeCountTranslationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BodyTypeTranslationWhereInput;
};
export type BodyTypeCountOutputTypeCountModelsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ModelWhereInput;
};
export type BodyTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    translations?: boolean | Prisma.BodyType$translationsArgs<ExtArgs>;
    models?: boolean | Prisma.BodyType$modelsArgs<ExtArgs>;
    _count?: boolean | Prisma.BodyTypeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bodyType"]>;
export type BodyTypeSelectScalar = {
    id?: boolean;
    code?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type BodyTypeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["bodyType"]>;
export type BodyTypeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    translations?: boolean | Prisma.BodyType$translationsArgs<ExtArgs>;
    models?: boolean | Prisma.BodyType$modelsArgs<ExtArgs>;
    _count?: boolean | Prisma.BodyTypeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $BodyTypePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BodyType";
    objects: {
        translations: Prisma.$BodyTypeTranslationPayload<ExtArgs>[];
        models: Prisma.$ModelPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        code: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["bodyType"]>;
    composites: {};
};
export type BodyTypeGetPayload<S extends boolean | null | undefined | BodyTypeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BodyTypePayload, S>;
export type BodyTypeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BodyTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BodyTypeCountAggregateInputType | true;
};
export interface BodyTypeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BodyType'];
        meta: {
            name: 'BodyType';
        };
    };
    findUnique<T extends BodyTypeFindUniqueArgs>(args: Prisma.SelectSubset<T, BodyTypeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BodyTypeClient<runtime.Types.Result.GetResult<Prisma.$BodyTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BodyTypeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BodyTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BodyTypeClient<runtime.Types.Result.GetResult<Prisma.$BodyTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BodyTypeFindFirstArgs>(args?: Prisma.SelectSubset<T, BodyTypeFindFirstArgs<ExtArgs>>): Prisma.Prisma__BodyTypeClient<runtime.Types.Result.GetResult<Prisma.$BodyTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BodyTypeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BodyTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BodyTypeClient<runtime.Types.Result.GetResult<Prisma.$BodyTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BodyTypeFindManyArgs>(args?: Prisma.SelectSubset<T, BodyTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BodyTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BodyTypeCreateArgs>(args: Prisma.SelectSubset<T, BodyTypeCreateArgs<ExtArgs>>): Prisma.Prisma__BodyTypeClient<runtime.Types.Result.GetResult<Prisma.$BodyTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BodyTypeCreateManyArgs>(args?: Prisma.SelectSubset<T, BodyTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends BodyTypeDeleteArgs>(args: Prisma.SelectSubset<T, BodyTypeDeleteArgs<ExtArgs>>): Prisma.Prisma__BodyTypeClient<runtime.Types.Result.GetResult<Prisma.$BodyTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BodyTypeUpdateArgs>(args: Prisma.SelectSubset<T, BodyTypeUpdateArgs<ExtArgs>>): Prisma.Prisma__BodyTypeClient<runtime.Types.Result.GetResult<Prisma.$BodyTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BodyTypeDeleteManyArgs>(args?: Prisma.SelectSubset<T, BodyTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BodyTypeUpdateManyArgs>(args: Prisma.SelectSubset<T, BodyTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends BodyTypeUpsertArgs>(args: Prisma.SelectSubset<T, BodyTypeUpsertArgs<ExtArgs>>): Prisma.Prisma__BodyTypeClient<runtime.Types.Result.GetResult<Prisma.$BodyTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BodyTypeCountArgs>(args?: Prisma.Subset<T, BodyTypeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BodyTypeCountAggregateOutputType> : number>;
    aggregate<T extends BodyTypeAggregateArgs>(args: Prisma.Subset<T, BodyTypeAggregateArgs>): Prisma.PrismaPromise<GetBodyTypeAggregateType<T>>;
    groupBy<T extends BodyTypeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BodyTypeGroupByArgs['orderBy'];
    } : {
        orderBy?: BodyTypeGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BodyTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBodyTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BodyTypeFieldRefs;
}
export interface Prisma__BodyTypeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    translations<T extends Prisma.BodyType$translationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BodyType$translationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BodyTypeTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    models<T extends Prisma.BodyType$modelsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BodyType$modelsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BodyTypeFieldRefs {
    readonly id: Prisma.FieldRef<"BodyType", 'Int'>;
    readonly code: Prisma.FieldRef<"BodyType", 'String'>;
    readonly isActive: Prisma.FieldRef<"BodyType", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"BodyType", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"BodyType", 'DateTime'>;
}
export type BodyTypeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BodyTypeSelect<ExtArgs> | null;
    omit?: Prisma.BodyTypeOmit<ExtArgs> | null;
    include?: Prisma.BodyTypeInclude<ExtArgs> | null;
    where: Prisma.BodyTypeWhereUniqueInput;
};
export type BodyTypeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BodyTypeSelect<ExtArgs> | null;
    omit?: Prisma.BodyTypeOmit<ExtArgs> | null;
    include?: Prisma.BodyTypeInclude<ExtArgs> | null;
    where: Prisma.BodyTypeWhereUniqueInput;
};
export type BodyTypeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BodyTypeSelect<ExtArgs> | null;
    omit?: Prisma.BodyTypeOmit<ExtArgs> | null;
    include?: Prisma.BodyTypeInclude<ExtArgs> | null;
    where?: Prisma.BodyTypeWhereInput;
    orderBy?: Prisma.BodyTypeOrderByWithRelationInput | Prisma.BodyTypeOrderByWithRelationInput[];
    cursor?: Prisma.BodyTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BodyTypeScalarFieldEnum | Prisma.BodyTypeScalarFieldEnum[];
};
export type BodyTypeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BodyTypeSelect<ExtArgs> | null;
    omit?: Prisma.BodyTypeOmit<ExtArgs> | null;
    include?: Prisma.BodyTypeInclude<ExtArgs> | null;
    where?: Prisma.BodyTypeWhereInput;
    orderBy?: Prisma.BodyTypeOrderByWithRelationInput | Prisma.BodyTypeOrderByWithRelationInput[];
    cursor?: Prisma.BodyTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BodyTypeScalarFieldEnum | Prisma.BodyTypeScalarFieldEnum[];
};
export type BodyTypeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BodyTypeSelect<ExtArgs> | null;
    omit?: Prisma.BodyTypeOmit<ExtArgs> | null;
    include?: Prisma.BodyTypeInclude<ExtArgs> | null;
    where?: Prisma.BodyTypeWhereInput;
    orderBy?: Prisma.BodyTypeOrderByWithRelationInput | Prisma.BodyTypeOrderByWithRelationInput[];
    cursor?: Prisma.BodyTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BodyTypeScalarFieldEnum | Prisma.BodyTypeScalarFieldEnum[];
};
export type BodyTypeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BodyTypeSelect<ExtArgs> | null;
    omit?: Prisma.BodyTypeOmit<ExtArgs> | null;
    include?: Prisma.BodyTypeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BodyTypeCreateInput, Prisma.BodyTypeUncheckedCreateInput>;
};
export type BodyTypeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BodyTypeCreateManyInput | Prisma.BodyTypeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BodyTypeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BodyTypeSelect<ExtArgs> | null;
    omit?: Prisma.BodyTypeOmit<ExtArgs> | null;
    include?: Prisma.BodyTypeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BodyTypeUpdateInput, Prisma.BodyTypeUncheckedUpdateInput>;
    where: Prisma.BodyTypeWhereUniqueInput;
};
export type BodyTypeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BodyTypeUpdateManyMutationInput, Prisma.BodyTypeUncheckedUpdateManyInput>;
    where?: Prisma.BodyTypeWhereInput;
    limit?: number;
};
export type BodyTypeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BodyTypeSelect<ExtArgs> | null;
    omit?: Prisma.BodyTypeOmit<ExtArgs> | null;
    include?: Prisma.BodyTypeInclude<ExtArgs> | null;
    where: Prisma.BodyTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.BodyTypeCreateInput, Prisma.BodyTypeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BodyTypeUpdateInput, Prisma.BodyTypeUncheckedUpdateInput>;
};
export type BodyTypeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BodyTypeSelect<ExtArgs> | null;
    omit?: Prisma.BodyTypeOmit<ExtArgs> | null;
    include?: Prisma.BodyTypeInclude<ExtArgs> | null;
    where: Prisma.BodyTypeWhereUniqueInput;
};
export type BodyTypeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BodyTypeWhereInput;
    limit?: number;
};
export type BodyType$translationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BodyTypeTranslationSelect<ExtArgs> | null;
    omit?: Prisma.BodyTypeTranslationOmit<ExtArgs> | null;
    include?: Prisma.BodyTypeTranslationInclude<ExtArgs> | null;
    where?: Prisma.BodyTypeTranslationWhereInput;
    orderBy?: Prisma.BodyTypeTranslationOrderByWithRelationInput | Prisma.BodyTypeTranslationOrderByWithRelationInput[];
    cursor?: Prisma.BodyTypeTranslationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BodyTypeTranslationScalarFieldEnum | Prisma.BodyTypeTranslationScalarFieldEnum[];
};
export type BodyType$modelsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModelSelect<ExtArgs> | null;
    omit?: Prisma.ModelOmit<ExtArgs> | null;
    include?: Prisma.ModelInclude<ExtArgs> | null;
    where?: Prisma.ModelWhereInput;
    orderBy?: Prisma.ModelOrderByWithRelationInput | Prisma.ModelOrderByWithRelationInput[];
    cursor?: Prisma.ModelWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ModelScalarFieldEnum | Prisma.ModelScalarFieldEnum[];
};
export type BodyTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BodyTypeSelect<ExtArgs> | null;
    omit?: Prisma.BodyTypeOmit<ExtArgs> | null;
    include?: Prisma.BodyTypeInclude<ExtArgs> | null;
};
export {};
