import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type SpecificationModel = runtime.Types.Result.DefaultSelection<Prisma.$SpecificationPayload>;
export type AggregateSpecification = {
    _count: SpecificationCountAggregateOutputType | null;
    _avg: SpecificationAvgAggregateOutputType | null;
    _sum: SpecificationSumAggregateOutputType | null;
    _min: SpecificationMinAggregateOutputType | null;
    _max: SpecificationMaxAggregateOutputType | null;
};
export type SpecificationAvgAggregateOutputType = {
    id: number | null;
    modelId: number | null;
};
export type SpecificationSumAggregateOutputType = {
    id: number | null;
    modelId: number | null;
};
export type SpecificationMinAggregateOutputType = {
    id: number | null;
    modelId: number | null;
    key: string | null;
    isActive: boolean | null;
};
export type SpecificationMaxAggregateOutputType = {
    id: number | null;
    modelId: number | null;
    key: string | null;
    isActive: boolean | null;
};
export type SpecificationCountAggregateOutputType = {
    id: number;
    modelId: number;
    key: number;
    isActive: number;
    _all: number;
};
export type SpecificationAvgAggregateInputType = {
    id?: true;
    modelId?: true;
};
export type SpecificationSumAggregateInputType = {
    id?: true;
    modelId?: true;
};
export type SpecificationMinAggregateInputType = {
    id?: true;
    modelId?: true;
    key?: true;
    isActive?: true;
};
export type SpecificationMaxAggregateInputType = {
    id?: true;
    modelId?: true;
    key?: true;
    isActive?: true;
};
export type SpecificationCountAggregateInputType = {
    id?: true;
    modelId?: true;
    key?: true;
    isActive?: true;
    _all?: true;
};
export type SpecificationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SpecificationWhereInput;
    orderBy?: Prisma.SpecificationOrderByWithRelationInput | Prisma.SpecificationOrderByWithRelationInput[];
    cursor?: Prisma.SpecificationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SpecificationCountAggregateInputType;
    _avg?: SpecificationAvgAggregateInputType;
    _sum?: SpecificationSumAggregateInputType;
    _min?: SpecificationMinAggregateInputType;
    _max?: SpecificationMaxAggregateInputType;
};
export type GetSpecificationAggregateType<T extends SpecificationAggregateArgs> = {
    [P in keyof T & keyof AggregateSpecification]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSpecification[P]> : Prisma.GetScalarType<T[P], AggregateSpecification[P]>;
};
export type SpecificationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SpecificationWhereInput;
    orderBy?: Prisma.SpecificationOrderByWithAggregationInput | Prisma.SpecificationOrderByWithAggregationInput[];
    by: Prisma.SpecificationScalarFieldEnum[] | Prisma.SpecificationScalarFieldEnum;
    having?: Prisma.SpecificationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SpecificationCountAggregateInputType | true;
    _avg?: SpecificationAvgAggregateInputType;
    _sum?: SpecificationSumAggregateInputType;
    _min?: SpecificationMinAggregateInputType;
    _max?: SpecificationMaxAggregateInputType;
};
export type SpecificationGroupByOutputType = {
    id: number;
    modelId: number;
    key: string;
    isActive: boolean;
    _count: SpecificationCountAggregateOutputType | null;
    _avg: SpecificationAvgAggregateOutputType | null;
    _sum: SpecificationSumAggregateOutputType | null;
    _min: SpecificationMinAggregateOutputType | null;
    _max: SpecificationMaxAggregateOutputType | null;
};
type GetSpecificationGroupByPayload<T extends SpecificationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SpecificationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SpecificationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SpecificationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SpecificationGroupByOutputType[P]>;
}>>;
export type SpecificationWhereInput = {
    AND?: Prisma.SpecificationWhereInput | Prisma.SpecificationWhereInput[];
    OR?: Prisma.SpecificationWhereInput[];
    NOT?: Prisma.SpecificationWhereInput | Prisma.SpecificationWhereInput[];
    id?: Prisma.IntFilter<"Specification"> | number;
    modelId?: Prisma.IntFilter<"Specification"> | number;
    key?: Prisma.StringFilter<"Specification"> | string;
    isActive?: Prisma.BoolFilter<"Specification"> | boolean;
    model?: Prisma.XOR<Prisma.ModelScalarRelationFilter, Prisma.ModelWhereInput>;
    translations?: Prisma.SpecificationTranslationListRelationFilter;
};
export type SpecificationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    model?: Prisma.ModelOrderByWithRelationInput;
    translations?: Prisma.SpecificationTranslationOrderByRelationAggregateInput;
    _relevance?: Prisma.SpecificationOrderByRelevanceInput;
};
export type SpecificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.SpecificationWhereInput | Prisma.SpecificationWhereInput[];
    OR?: Prisma.SpecificationWhereInput[];
    NOT?: Prisma.SpecificationWhereInput | Prisma.SpecificationWhereInput[];
    modelId?: Prisma.IntFilter<"Specification"> | number;
    key?: Prisma.StringFilter<"Specification"> | string;
    isActive?: Prisma.BoolFilter<"Specification"> | boolean;
    model?: Prisma.XOR<Prisma.ModelScalarRelationFilter, Prisma.ModelWhereInput>;
    translations?: Prisma.SpecificationTranslationListRelationFilter;
}, "id">;
export type SpecificationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    _count?: Prisma.SpecificationCountOrderByAggregateInput;
    _avg?: Prisma.SpecificationAvgOrderByAggregateInput;
    _max?: Prisma.SpecificationMaxOrderByAggregateInput;
    _min?: Prisma.SpecificationMinOrderByAggregateInput;
    _sum?: Prisma.SpecificationSumOrderByAggregateInput;
};
export type SpecificationScalarWhereWithAggregatesInput = {
    AND?: Prisma.SpecificationScalarWhereWithAggregatesInput | Prisma.SpecificationScalarWhereWithAggregatesInput[];
    OR?: Prisma.SpecificationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SpecificationScalarWhereWithAggregatesInput | Prisma.SpecificationScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Specification"> | number;
    modelId?: Prisma.IntWithAggregatesFilter<"Specification"> | number;
    key?: Prisma.StringWithAggregatesFilter<"Specification"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"Specification"> | boolean;
};
export type SpecificationCreateInput = {
    key: string;
    isActive?: boolean;
    model: Prisma.ModelCreateNestedOneWithoutSpecificationsInput;
    translations?: Prisma.SpecificationTranslationCreateNestedManyWithoutSpecificationInput;
};
export type SpecificationUncheckedCreateInput = {
    id?: number;
    modelId: number;
    key: string;
    isActive?: boolean;
    translations?: Prisma.SpecificationTranslationUncheckedCreateNestedManyWithoutSpecificationInput;
};
export type SpecificationUpdateInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    model?: Prisma.ModelUpdateOneRequiredWithoutSpecificationsNestedInput;
    translations?: Prisma.SpecificationTranslationUpdateManyWithoutSpecificationNestedInput;
};
export type SpecificationUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    modelId?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    translations?: Prisma.SpecificationTranslationUncheckedUpdateManyWithoutSpecificationNestedInput;
};
export type SpecificationCreateManyInput = {
    id?: number;
    modelId: number;
    key: string;
    isActive?: boolean;
};
export type SpecificationUpdateManyMutationInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type SpecificationUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    modelId?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type SpecificationListRelationFilter = {
    every?: Prisma.SpecificationWhereInput;
    some?: Prisma.SpecificationWhereInput;
    none?: Prisma.SpecificationWhereInput;
};
export type SpecificationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SpecificationOrderByRelevanceInput = {
    fields: Prisma.SpecificationOrderByRelevanceFieldEnum | Prisma.SpecificationOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type SpecificationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type SpecificationAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
};
export type SpecificationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type SpecificationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type SpecificationSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
};
export type SpecificationScalarRelationFilter = {
    is?: Prisma.SpecificationWhereInput;
    isNot?: Prisma.SpecificationWhereInput;
};
export type SpecificationCreateNestedManyWithoutModelInput = {
    create?: Prisma.XOR<Prisma.SpecificationCreateWithoutModelInput, Prisma.SpecificationUncheckedCreateWithoutModelInput> | Prisma.SpecificationCreateWithoutModelInput[] | Prisma.SpecificationUncheckedCreateWithoutModelInput[];
    connectOrCreate?: Prisma.SpecificationCreateOrConnectWithoutModelInput | Prisma.SpecificationCreateOrConnectWithoutModelInput[];
    createMany?: Prisma.SpecificationCreateManyModelInputEnvelope;
    connect?: Prisma.SpecificationWhereUniqueInput | Prisma.SpecificationWhereUniqueInput[];
};
export type SpecificationUncheckedCreateNestedManyWithoutModelInput = {
    create?: Prisma.XOR<Prisma.SpecificationCreateWithoutModelInput, Prisma.SpecificationUncheckedCreateWithoutModelInput> | Prisma.SpecificationCreateWithoutModelInput[] | Prisma.SpecificationUncheckedCreateWithoutModelInput[];
    connectOrCreate?: Prisma.SpecificationCreateOrConnectWithoutModelInput | Prisma.SpecificationCreateOrConnectWithoutModelInput[];
    createMany?: Prisma.SpecificationCreateManyModelInputEnvelope;
    connect?: Prisma.SpecificationWhereUniqueInput | Prisma.SpecificationWhereUniqueInput[];
};
export type SpecificationUpdateManyWithoutModelNestedInput = {
    create?: Prisma.XOR<Prisma.SpecificationCreateWithoutModelInput, Prisma.SpecificationUncheckedCreateWithoutModelInput> | Prisma.SpecificationCreateWithoutModelInput[] | Prisma.SpecificationUncheckedCreateWithoutModelInput[];
    connectOrCreate?: Prisma.SpecificationCreateOrConnectWithoutModelInput | Prisma.SpecificationCreateOrConnectWithoutModelInput[];
    upsert?: Prisma.SpecificationUpsertWithWhereUniqueWithoutModelInput | Prisma.SpecificationUpsertWithWhereUniqueWithoutModelInput[];
    createMany?: Prisma.SpecificationCreateManyModelInputEnvelope;
    set?: Prisma.SpecificationWhereUniqueInput | Prisma.SpecificationWhereUniqueInput[];
    disconnect?: Prisma.SpecificationWhereUniqueInput | Prisma.SpecificationWhereUniqueInput[];
    delete?: Prisma.SpecificationWhereUniqueInput | Prisma.SpecificationWhereUniqueInput[];
    connect?: Prisma.SpecificationWhereUniqueInput | Prisma.SpecificationWhereUniqueInput[];
    update?: Prisma.SpecificationUpdateWithWhereUniqueWithoutModelInput | Prisma.SpecificationUpdateWithWhereUniqueWithoutModelInput[];
    updateMany?: Prisma.SpecificationUpdateManyWithWhereWithoutModelInput | Prisma.SpecificationUpdateManyWithWhereWithoutModelInput[];
    deleteMany?: Prisma.SpecificationScalarWhereInput | Prisma.SpecificationScalarWhereInput[];
};
export type SpecificationUncheckedUpdateManyWithoutModelNestedInput = {
    create?: Prisma.XOR<Prisma.SpecificationCreateWithoutModelInput, Prisma.SpecificationUncheckedCreateWithoutModelInput> | Prisma.SpecificationCreateWithoutModelInput[] | Prisma.SpecificationUncheckedCreateWithoutModelInput[];
    connectOrCreate?: Prisma.SpecificationCreateOrConnectWithoutModelInput | Prisma.SpecificationCreateOrConnectWithoutModelInput[];
    upsert?: Prisma.SpecificationUpsertWithWhereUniqueWithoutModelInput | Prisma.SpecificationUpsertWithWhereUniqueWithoutModelInput[];
    createMany?: Prisma.SpecificationCreateManyModelInputEnvelope;
    set?: Prisma.SpecificationWhereUniqueInput | Prisma.SpecificationWhereUniqueInput[];
    disconnect?: Prisma.SpecificationWhereUniqueInput | Prisma.SpecificationWhereUniqueInput[];
    delete?: Prisma.SpecificationWhereUniqueInput | Prisma.SpecificationWhereUniqueInput[];
    connect?: Prisma.SpecificationWhereUniqueInput | Prisma.SpecificationWhereUniqueInput[];
    update?: Prisma.SpecificationUpdateWithWhereUniqueWithoutModelInput | Prisma.SpecificationUpdateWithWhereUniqueWithoutModelInput[];
    updateMany?: Prisma.SpecificationUpdateManyWithWhereWithoutModelInput | Prisma.SpecificationUpdateManyWithWhereWithoutModelInput[];
    deleteMany?: Prisma.SpecificationScalarWhereInput | Prisma.SpecificationScalarWhereInput[];
};
export type SpecificationCreateNestedOneWithoutTranslationsInput = {
    create?: Prisma.XOR<Prisma.SpecificationCreateWithoutTranslationsInput, Prisma.SpecificationUncheckedCreateWithoutTranslationsInput>;
    connectOrCreate?: Prisma.SpecificationCreateOrConnectWithoutTranslationsInput;
    connect?: Prisma.SpecificationWhereUniqueInput;
};
export type SpecificationUpdateOneRequiredWithoutTranslationsNestedInput = {
    create?: Prisma.XOR<Prisma.SpecificationCreateWithoutTranslationsInput, Prisma.SpecificationUncheckedCreateWithoutTranslationsInput>;
    connectOrCreate?: Prisma.SpecificationCreateOrConnectWithoutTranslationsInput;
    upsert?: Prisma.SpecificationUpsertWithoutTranslationsInput;
    connect?: Prisma.SpecificationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SpecificationUpdateToOneWithWhereWithoutTranslationsInput, Prisma.SpecificationUpdateWithoutTranslationsInput>, Prisma.SpecificationUncheckedUpdateWithoutTranslationsInput>;
};
export type SpecificationCreateWithoutModelInput = {
    key: string;
    isActive?: boolean;
    translations?: Prisma.SpecificationTranslationCreateNestedManyWithoutSpecificationInput;
};
export type SpecificationUncheckedCreateWithoutModelInput = {
    id?: number;
    key: string;
    isActive?: boolean;
    translations?: Prisma.SpecificationTranslationUncheckedCreateNestedManyWithoutSpecificationInput;
};
export type SpecificationCreateOrConnectWithoutModelInput = {
    where: Prisma.SpecificationWhereUniqueInput;
    create: Prisma.XOR<Prisma.SpecificationCreateWithoutModelInput, Prisma.SpecificationUncheckedCreateWithoutModelInput>;
};
export type SpecificationCreateManyModelInputEnvelope = {
    data: Prisma.SpecificationCreateManyModelInput | Prisma.SpecificationCreateManyModelInput[];
    skipDuplicates?: boolean;
};
export type SpecificationUpsertWithWhereUniqueWithoutModelInput = {
    where: Prisma.SpecificationWhereUniqueInput;
    update: Prisma.XOR<Prisma.SpecificationUpdateWithoutModelInput, Prisma.SpecificationUncheckedUpdateWithoutModelInput>;
    create: Prisma.XOR<Prisma.SpecificationCreateWithoutModelInput, Prisma.SpecificationUncheckedCreateWithoutModelInput>;
};
export type SpecificationUpdateWithWhereUniqueWithoutModelInput = {
    where: Prisma.SpecificationWhereUniqueInput;
    data: Prisma.XOR<Prisma.SpecificationUpdateWithoutModelInput, Prisma.SpecificationUncheckedUpdateWithoutModelInput>;
};
export type SpecificationUpdateManyWithWhereWithoutModelInput = {
    where: Prisma.SpecificationScalarWhereInput;
    data: Prisma.XOR<Prisma.SpecificationUpdateManyMutationInput, Prisma.SpecificationUncheckedUpdateManyWithoutModelInput>;
};
export type SpecificationScalarWhereInput = {
    AND?: Prisma.SpecificationScalarWhereInput | Prisma.SpecificationScalarWhereInput[];
    OR?: Prisma.SpecificationScalarWhereInput[];
    NOT?: Prisma.SpecificationScalarWhereInput | Prisma.SpecificationScalarWhereInput[];
    id?: Prisma.IntFilter<"Specification"> | number;
    modelId?: Prisma.IntFilter<"Specification"> | number;
    key?: Prisma.StringFilter<"Specification"> | string;
    isActive?: Prisma.BoolFilter<"Specification"> | boolean;
};
export type SpecificationCreateWithoutTranslationsInput = {
    key: string;
    isActive?: boolean;
    model: Prisma.ModelCreateNestedOneWithoutSpecificationsInput;
};
export type SpecificationUncheckedCreateWithoutTranslationsInput = {
    id?: number;
    modelId: number;
    key: string;
    isActive?: boolean;
};
export type SpecificationCreateOrConnectWithoutTranslationsInput = {
    where: Prisma.SpecificationWhereUniqueInput;
    create: Prisma.XOR<Prisma.SpecificationCreateWithoutTranslationsInput, Prisma.SpecificationUncheckedCreateWithoutTranslationsInput>;
};
export type SpecificationUpsertWithoutTranslationsInput = {
    update: Prisma.XOR<Prisma.SpecificationUpdateWithoutTranslationsInput, Prisma.SpecificationUncheckedUpdateWithoutTranslationsInput>;
    create: Prisma.XOR<Prisma.SpecificationCreateWithoutTranslationsInput, Prisma.SpecificationUncheckedCreateWithoutTranslationsInput>;
    where?: Prisma.SpecificationWhereInput;
};
export type SpecificationUpdateToOneWithWhereWithoutTranslationsInput = {
    where?: Prisma.SpecificationWhereInput;
    data: Prisma.XOR<Prisma.SpecificationUpdateWithoutTranslationsInput, Prisma.SpecificationUncheckedUpdateWithoutTranslationsInput>;
};
export type SpecificationUpdateWithoutTranslationsInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    model?: Prisma.ModelUpdateOneRequiredWithoutSpecificationsNestedInput;
};
export type SpecificationUncheckedUpdateWithoutTranslationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    modelId?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type SpecificationCreateManyModelInput = {
    id?: number;
    key: string;
    isActive?: boolean;
};
export type SpecificationUpdateWithoutModelInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    translations?: Prisma.SpecificationTranslationUpdateManyWithoutSpecificationNestedInput;
};
export type SpecificationUncheckedUpdateWithoutModelInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    translations?: Prisma.SpecificationTranslationUncheckedUpdateManyWithoutSpecificationNestedInput;
};
export type SpecificationUncheckedUpdateManyWithoutModelInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type SpecificationCountOutputType = {
    translations: number;
};
export type SpecificationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    translations?: boolean | SpecificationCountOutputTypeCountTranslationsArgs;
};
export type SpecificationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpecificationCountOutputTypeSelect<ExtArgs> | null;
};
export type SpecificationCountOutputTypeCountTranslationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SpecificationTranslationWhereInput;
};
export type SpecificationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    modelId?: boolean;
    key?: boolean;
    isActive?: boolean;
    model?: boolean | Prisma.ModelDefaultArgs<ExtArgs>;
    translations?: boolean | Prisma.Specification$translationsArgs<ExtArgs>;
    _count?: boolean | Prisma.SpecificationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["specification"]>;
export type SpecificationSelectScalar = {
    id?: boolean;
    modelId?: boolean;
    key?: boolean;
    isActive?: boolean;
};
export type SpecificationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "modelId" | "key" | "isActive", ExtArgs["result"]["specification"]>;
export type SpecificationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    model?: boolean | Prisma.ModelDefaultArgs<ExtArgs>;
    translations?: boolean | Prisma.Specification$translationsArgs<ExtArgs>;
    _count?: boolean | Prisma.SpecificationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $SpecificationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Specification";
    objects: {
        model: Prisma.$ModelPayload<ExtArgs>;
        translations: Prisma.$SpecificationTranslationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        modelId: number;
        key: string;
        isActive: boolean;
    }, ExtArgs["result"]["specification"]>;
    composites: {};
};
export type SpecificationGetPayload<S extends boolean | null | undefined | SpecificationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SpecificationPayload, S>;
export type SpecificationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SpecificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SpecificationCountAggregateInputType | true;
};
export interface SpecificationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Specification'];
        meta: {
            name: 'Specification';
        };
    };
    findUnique<T extends SpecificationFindUniqueArgs>(args: Prisma.SelectSubset<T, SpecificationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SpecificationClient<runtime.Types.Result.GetResult<Prisma.$SpecificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SpecificationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SpecificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SpecificationClient<runtime.Types.Result.GetResult<Prisma.$SpecificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SpecificationFindFirstArgs>(args?: Prisma.SelectSubset<T, SpecificationFindFirstArgs<ExtArgs>>): Prisma.Prisma__SpecificationClient<runtime.Types.Result.GetResult<Prisma.$SpecificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SpecificationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SpecificationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SpecificationClient<runtime.Types.Result.GetResult<Prisma.$SpecificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SpecificationFindManyArgs>(args?: Prisma.SelectSubset<T, SpecificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SpecificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SpecificationCreateArgs>(args: Prisma.SelectSubset<T, SpecificationCreateArgs<ExtArgs>>): Prisma.Prisma__SpecificationClient<runtime.Types.Result.GetResult<Prisma.$SpecificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SpecificationCreateManyArgs>(args?: Prisma.SelectSubset<T, SpecificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends SpecificationDeleteArgs>(args: Prisma.SelectSubset<T, SpecificationDeleteArgs<ExtArgs>>): Prisma.Prisma__SpecificationClient<runtime.Types.Result.GetResult<Prisma.$SpecificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SpecificationUpdateArgs>(args: Prisma.SelectSubset<T, SpecificationUpdateArgs<ExtArgs>>): Prisma.Prisma__SpecificationClient<runtime.Types.Result.GetResult<Prisma.$SpecificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SpecificationDeleteManyArgs>(args?: Prisma.SelectSubset<T, SpecificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SpecificationUpdateManyArgs>(args: Prisma.SelectSubset<T, SpecificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends SpecificationUpsertArgs>(args: Prisma.SelectSubset<T, SpecificationUpsertArgs<ExtArgs>>): Prisma.Prisma__SpecificationClient<runtime.Types.Result.GetResult<Prisma.$SpecificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SpecificationCountArgs>(args?: Prisma.Subset<T, SpecificationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SpecificationCountAggregateOutputType> : number>;
    aggregate<T extends SpecificationAggregateArgs>(args: Prisma.Subset<T, SpecificationAggregateArgs>): Prisma.PrismaPromise<GetSpecificationAggregateType<T>>;
    groupBy<T extends SpecificationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SpecificationGroupByArgs['orderBy'];
    } : {
        orderBy?: SpecificationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SpecificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SpecificationFieldRefs;
}
export interface Prisma__SpecificationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    model<T extends Prisma.ModelDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ModelDefaultArgs<ExtArgs>>): Prisma.Prisma__ModelClient<runtime.Types.Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    translations<T extends Prisma.Specification$translationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Specification$translationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SpecificationTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SpecificationFieldRefs {
    readonly id: Prisma.FieldRef<"Specification", 'Int'>;
    readonly modelId: Prisma.FieldRef<"Specification", 'Int'>;
    readonly key: Prisma.FieldRef<"Specification", 'String'>;
    readonly isActive: Prisma.FieldRef<"Specification", 'Boolean'>;
}
export type SpecificationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpecificationSelect<ExtArgs> | null;
    omit?: Prisma.SpecificationOmit<ExtArgs> | null;
    include?: Prisma.SpecificationInclude<ExtArgs> | null;
    where: Prisma.SpecificationWhereUniqueInput;
};
export type SpecificationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpecificationSelect<ExtArgs> | null;
    omit?: Prisma.SpecificationOmit<ExtArgs> | null;
    include?: Prisma.SpecificationInclude<ExtArgs> | null;
    where: Prisma.SpecificationWhereUniqueInput;
};
export type SpecificationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpecificationSelect<ExtArgs> | null;
    omit?: Prisma.SpecificationOmit<ExtArgs> | null;
    include?: Prisma.SpecificationInclude<ExtArgs> | null;
    where?: Prisma.SpecificationWhereInput;
    orderBy?: Prisma.SpecificationOrderByWithRelationInput | Prisma.SpecificationOrderByWithRelationInput[];
    cursor?: Prisma.SpecificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SpecificationScalarFieldEnum | Prisma.SpecificationScalarFieldEnum[];
};
export type SpecificationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpecificationSelect<ExtArgs> | null;
    omit?: Prisma.SpecificationOmit<ExtArgs> | null;
    include?: Prisma.SpecificationInclude<ExtArgs> | null;
    where?: Prisma.SpecificationWhereInput;
    orderBy?: Prisma.SpecificationOrderByWithRelationInput | Prisma.SpecificationOrderByWithRelationInput[];
    cursor?: Prisma.SpecificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SpecificationScalarFieldEnum | Prisma.SpecificationScalarFieldEnum[];
};
export type SpecificationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpecificationSelect<ExtArgs> | null;
    omit?: Prisma.SpecificationOmit<ExtArgs> | null;
    include?: Prisma.SpecificationInclude<ExtArgs> | null;
    where?: Prisma.SpecificationWhereInput;
    orderBy?: Prisma.SpecificationOrderByWithRelationInput | Prisma.SpecificationOrderByWithRelationInput[];
    cursor?: Prisma.SpecificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SpecificationScalarFieldEnum | Prisma.SpecificationScalarFieldEnum[];
};
export type SpecificationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpecificationSelect<ExtArgs> | null;
    omit?: Prisma.SpecificationOmit<ExtArgs> | null;
    include?: Prisma.SpecificationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SpecificationCreateInput, Prisma.SpecificationUncheckedCreateInput>;
};
export type SpecificationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SpecificationCreateManyInput | Prisma.SpecificationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SpecificationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpecificationSelect<ExtArgs> | null;
    omit?: Prisma.SpecificationOmit<ExtArgs> | null;
    include?: Prisma.SpecificationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SpecificationUpdateInput, Prisma.SpecificationUncheckedUpdateInput>;
    where: Prisma.SpecificationWhereUniqueInput;
};
export type SpecificationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SpecificationUpdateManyMutationInput, Prisma.SpecificationUncheckedUpdateManyInput>;
    where?: Prisma.SpecificationWhereInput;
    limit?: number;
};
export type SpecificationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpecificationSelect<ExtArgs> | null;
    omit?: Prisma.SpecificationOmit<ExtArgs> | null;
    include?: Prisma.SpecificationInclude<ExtArgs> | null;
    where: Prisma.SpecificationWhereUniqueInput;
    create: Prisma.XOR<Prisma.SpecificationCreateInput, Prisma.SpecificationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SpecificationUpdateInput, Prisma.SpecificationUncheckedUpdateInput>;
};
export type SpecificationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpecificationSelect<ExtArgs> | null;
    omit?: Prisma.SpecificationOmit<ExtArgs> | null;
    include?: Prisma.SpecificationInclude<ExtArgs> | null;
    where: Prisma.SpecificationWhereUniqueInput;
};
export type SpecificationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SpecificationWhereInput;
    limit?: number;
};
export type Specification$translationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpecificationTranslationSelect<ExtArgs> | null;
    omit?: Prisma.SpecificationTranslationOmit<ExtArgs> | null;
    include?: Prisma.SpecificationTranslationInclude<ExtArgs> | null;
    where?: Prisma.SpecificationTranslationWhereInput;
    orderBy?: Prisma.SpecificationTranslationOrderByWithRelationInput | Prisma.SpecificationTranslationOrderByWithRelationInput[];
    cursor?: Prisma.SpecificationTranslationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SpecificationTranslationScalarFieldEnum | Prisma.SpecificationTranslationScalarFieldEnum[];
};
export type SpecificationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpecificationSelect<ExtArgs> | null;
    omit?: Prisma.SpecificationOmit<ExtArgs> | null;
    include?: Prisma.SpecificationInclude<ExtArgs> | null;
};
export {};
