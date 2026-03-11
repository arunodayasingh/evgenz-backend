import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type FeatureModel = runtime.Types.Result.DefaultSelection<Prisma.$FeaturePayload>;
export type AggregateFeature = {
    _count: FeatureCountAggregateOutputType | null;
    _avg: FeatureAvgAggregateOutputType | null;
    _sum: FeatureSumAggregateOutputType | null;
    _min: FeatureMinAggregateOutputType | null;
    _max: FeatureMaxAggregateOutputType | null;
};
export type FeatureAvgAggregateOutputType = {
    id: number | null;
    featureGroupId: number | null;
};
export type FeatureSumAggregateOutputType = {
    id: number | null;
    featureGroupId: number | null;
};
export type FeatureMinAggregateOutputType = {
    id: number | null;
    featureGroupId: number | null;
    name: string | null;
};
export type FeatureMaxAggregateOutputType = {
    id: number | null;
    featureGroupId: number | null;
    name: string | null;
};
export type FeatureCountAggregateOutputType = {
    id: number;
    featureGroupId: number;
    name: number;
    _all: number;
};
export type FeatureAvgAggregateInputType = {
    id?: true;
    featureGroupId?: true;
};
export type FeatureSumAggregateInputType = {
    id?: true;
    featureGroupId?: true;
};
export type FeatureMinAggregateInputType = {
    id?: true;
    featureGroupId?: true;
    name?: true;
};
export type FeatureMaxAggregateInputType = {
    id?: true;
    featureGroupId?: true;
    name?: true;
};
export type FeatureCountAggregateInputType = {
    id?: true;
    featureGroupId?: true;
    name?: true;
    _all?: true;
};
export type FeatureAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeatureWhereInput;
    orderBy?: Prisma.FeatureOrderByWithRelationInput | Prisma.FeatureOrderByWithRelationInput[];
    cursor?: Prisma.FeatureWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FeatureCountAggregateInputType;
    _avg?: FeatureAvgAggregateInputType;
    _sum?: FeatureSumAggregateInputType;
    _min?: FeatureMinAggregateInputType;
    _max?: FeatureMaxAggregateInputType;
};
export type GetFeatureAggregateType<T extends FeatureAggregateArgs> = {
    [P in keyof T & keyof AggregateFeature]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFeature[P]> : Prisma.GetScalarType<T[P], AggregateFeature[P]>;
};
export type FeatureGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeatureWhereInput;
    orderBy?: Prisma.FeatureOrderByWithAggregationInput | Prisma.FeatureOrderByWithAggregationInput[];
    by: Prisma.FeatureScalarFieldEnum[] | Prisma.FeatureScalarFieldEnum;
    having?: Prisma.FeatureScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FeatureCountAggregateInputType | true;
    _avg?: FeatureAvgAggregateInputType;
    _sum?: FeatureSumAggregateInputType;
    _min?: FeatureMinAggregateInputType;
    _max?: FeatureMaxAggregateInputType;
};
export type FeatureGroupByOutputType = {
    id: number;
    featureGroupId: number;
    name: string;
    _count: FeatureCountAggregateOutputType | null;
    _avg: FeatureAvgAggregateOutputType | null;
    _sum: FeatureSumAggregateOutputType | null;
    _min: FeatureMinAggregateOutputType | null;
    _max: FeatureMaxAggregateOutputType | null;
};
type GetFeatureGroupByPayload<T extends FeatureGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FeatureGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FeatureGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FeatureGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FeatureGroupByOutputType[P]>;
}>>;
export type FeatureWhereInput = {
    AND?: Prisma.FeatureWhereInput | Prisma.FeatureWhereInput[];
    OR?: Prisma.FeatureWhereInput[];
    NOT?: Prisma.FeatureWhereInput | Prisma.FeatureWhereInput[];
    id?: Prisma.IntFilter<"Feature"> | number;
    featureGroupId?: Prisma.IntFilter<"Feature"> | number;
    name?: Prisma.StringFilter<"Feature"> | string;
    group?: Prisma.XOR<Prisma.FeatureGroupScalarRelationFilter, Prisma.FeatureGroupWhereInput>;
    variants?: Prisma.VariantFeatureListRelationFilter;
};
export type FeatureOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    featureGroupId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    group?: Prisma.FeatureGroupOrderByWithRelationInput;
    variants?: Prisma.VariantFeatureOrderByRelationAggregateInput;
    _relevance?: Prisma.FeatureOrderByRelevanceInput;
};
export type FeatureWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.FeatureWhereInput | Prisma.FeatureWhereInput[];
    OR?: Prisma.FeatureWhereInput[];
    NOT?: Prisma.FeatureWhereInput | Prisma.FeatureWhereInput[];
    featureGroupId?: Prisma.IntFilter<"Feature"> | number;
    name?: Prisma.StringFilter<"Feature"> | string;
    group?: Prisma.XOR<Prisma.FeatureGroupScalarRelationFilter, Prisma.FeatureGroupWhereInput>;
    variants?: Prisma.VariantFeatureListRelationFilter;
}, "id">;
export type FeatureOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    featureGroupId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    _count?: Prisma.FeatureCountOrderByAggregateInput;
    _avg?: Prisma.FeatureAvgOrderByAggregateInput;
    _max?: Prisma.FeatureMaxOrderByAggregateInput;
    _min?: Prisma.FeatureMinOrderByAggregateInput;
    _sum?: Prisma.FeatureSumOrderByAggregateInput;
};
export type FeatureScalarWhereWithAggregatesInput = {
    AND?: Prisma.FeatureScalarWhereWithAggregatesInput | Prisma.FeatureScalarWhereWithAggregatesInput[];
    OR?: Prisma.FeatureScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FeatureScalarWhereWithAggregatesInput | Prisma.FeatureScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Feature"> | number;
    featureGroupId?: Prisma.IntWithAggregatesFilter<"Feature"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Feature"> | string;
};
export type FeatureCreateInput = {
    name: string;
    group: Prisma.FeatureGroupCreateNestedOneWithoutFeaturesInput;
    variants?: Prisma.VariantFeatureCreateNestedManyWithoutFeatureInput;
};
export type FeatureUncheckedCreateInput = {
    id?: number;
    featureGroupId: number;
    name: string;
    variants?: Prisma.VariantFeatureUncheckedCreateNestedManyWithoutFeatureInput;
};
export type FeatureUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    group?: Prisma.FeatureGroupUpdateOneRequiredWithoutFeaturesNestedInput;
    variants?: Prisma.VariantFeatureUpdateManyWithoutFeatureNestedInput;
};
export type FeatureUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    featureGroupId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    variants?: Prisma.VariantFeatureUncheckedUpdateManyWithoutFeatureNestedInput;
};
export type FeatureCreateManyInput = {
    id?: number;
    featureGroupId: number;
    name: string;
};
export type FeatureUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type FeatureUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    featureGroupId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type FeatureListRelationFilter = {
    every?: Prisma.FeatureWhereInput;
    some?: Prisma.FeatureWhereInput;
    none?: Prisma.FeatureWhereInput;
};
export type FeatureOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FeatureOrderByRelevanceInput = {
    fields: Prisma.FeatureOrderByRelevanceFieldEnum | Prisma.FeatureOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type FeatureCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    featureGroupId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type FeatureAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    featureGroupId?: Prisma.SortOrder;
};
export type FeatureMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    featureGroupId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type FeatureMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    featureGroupId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type FeatureSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    featureGroupId?: Prisma.SortOrder;
};
export type FeatureScalarRelationFilter = {
    is?: Prisma.FeatureWhereInput;
    isNot?: Prisma.FeatureWhereInput;
};
export type FeatureCreateNestedManyWithoutGroupInput = {
    create?: Prisma.XOR<Prisma.FeatureCreateWithoutGroupInput, Prisma.FeatureUncheckedCreateWithoutGroupInput> | Prisma.FeatureCreateWithoutGroupInput[] | Prisma.FeatureUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.FeatureCreateOrConnectWithoutGroupInput | Prisma.FeatureCreateOrConnectWithoutGroupInput[];
    createMany?: Prisma.FeatureCreateManyGroupInputEnvelope;
    connect?: Prisma.FeatureWhereUniqueInput | Prisma.FeatureWhereUniqueInput[];
};
export type FeatureUncheckedCreateNestedManyWithoutGroupInput = {
    create?: Prisma.XOR<Prisma.FeatureCreateWithoutGroupInput, Prisma.FeatureUncheckedCreateWithoutGroupInput> | Prisma.FeatureCreateWithoutGroupInput[] | Prisma.FeatureUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.FeatureCreateOrConnectWithoutGroupInput | Prisma.FeatureCreateOrConnectWithoutGroupInput[];
    createMany?: Prisma.FeatureCreateManyGroupInputEnvelope;
    connect?: Prisma.FeatureWhereUniqueInput | Prisma.FeatureWhereUniqueInput[];
};
export type FeatureUpdateManyWithoutGroupNestedInput = {
    create?: Prisma.XOR<Prisma.FeatureCreateWithoutGroupInput, Prisma.FeatureUncheckedCreateWithoutGroupInput> | Prisma.FeatureCreateWithoutGroupInput[] | Prisma.FeatureUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.FeatureCreateOrConnectWithoutGroupInput | Prisma.FeatureCreateOrConnectWithoutGroupInput[];
    upsert?: Prisma.FeatureUpsertWithWhereUniqueWithoutGroupInput | Prisma.FeatureUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: Prisma.FeatureCreateManyGroupInputEnvelope;
    set?: Prisma.FeatureWhereUniqueInput | Prisma.FeatureWhereUniqueInput[];
    disconnect?: Prisma.FeatureWhereUniqueInput | Prisma.FeatureWhereUniqueInput[];
    delete?: Prisma.FeatureWhereUniqueInput | Prisma.FeatureWhereUniqueInput[];
    connect?: Prisma.FeatureWhereUniqueInput | Prisma.FeatureWhereUniqueInput[];
    update?: Prisma.FeatureUpdateWithWhereUniqueWithoutGroupInput | Prisma.FeatureUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?: Prisma.FeatureUpdateManyWithWhereWithoutGroupInput | Prisma.FeatureUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: Prisma.FeatureScalarWhereInput | Prisma.FeatureScalarWhereInput[];
};
export type FeatureUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: Prisma.XOR<Prisma.FeatureCreateWithoutGroupInput, Prisma.FeatureUncheckedCreateWithoutGroupInput> | Prisma.FeatureCreateWithoutGroupInput[] | Prisma.FeatureUncheckedCreateWithoutGroupInput[];
    connectOrCreate?: Prisma.FeatureCreateOrConnectWithoutGroupInput | Prisma.FeatureCreateOrConnectWithoutGroupInput[];
    upsert?: Prisma.FeatureUpsertWithWhereUniqueWithoutGroupInput | Prisma.FeatureUpsertWithWhereUniqueWithoutGroupInput[];
    createMany?: Prisma.FeatureCreateManyGroupInputEnvelope;
    set?: Prisma.FeatureWhereUniqueInput | Prisma.FeatureWhereUniqueInput[];
    disconnect?: Prisma.FeatureWhereUniqueInput | Prisma.FeatureWhereUniqueInput[];
    delete?: Prisma.FeatureWhereUniqueInput | Prisma.FeatureWhereUniqueInput[];
    connect?: Prisma.FeatureWhereUniqueInput | Prisma.FeatureWhereUniqueInput[];
    update?: Prisma.FeatureUpdateWithWhereUniqueWithoutGroupInput | Prisma.FeatureUpdateWithWhereUniqueWithoutGroupInput[];
    updateMany?: Prisma.FeatureUpdateManyWithWhereWithoutGroupInput | Prisma.FeatureUpdateManyWithWhereWithoutGroupInput[];
    deleteMany?: Prisma.FeatureScalarWhereInput | Prisma.FeatureScalarWhereInput[];
};
export type FeatureCreateNestedOneWithoutVariantsInput = {
    create?: Prisma.XOR<Prisma.FeatureCreateWithoutVariantsInput, Prisma.FeatureUncheckedCreateWithoutVariantsInput>;
    connectOrCreate?: Prisma.FeatureCreateOrConnectWithoutVariantsInput;
    connect?: Prisma.FeatureWhereUniqueInput;
};
export type FeatureUpdateOneRequiredWithoutVariantsNestedInput = {
    create?: Prisma.XOR<Prisma.FeatureCreateWithoutVariantsInput, Prisma.FeatureUncheckedCreateWithoutVariantsInput>;
    connectOrCreate?: Prisma.FeatureCreateOrConnectWithoutVariantsInput;
    upsert?: Prisma.FeatureUpsertWithoutVariantsInput;
    connect?: Prisma.FeatureWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FeatureUpdateToOneWithWhereWithoutVariantsInput, Prisma.FeatureUpdateWithoutVariantsInput>, Prisma.FeatureUncheckedUpdateWithoutVariantsInput>;
};
export type FeatureCreateWithoutGroupInput = {
    name: string;
    variants?: Prisma.VariantFeatureCreateNestedManyWithoutFeatureInput;
};
export type FeatureUncheckedCreateWithoutGroupInput = {
    id?: number;
    name: string;
    variants?: Prisma.VariantFeatureUncheckedCreateNestedManyWithoutFeatureInput;
};
export type FeatureCreateOrConnectWithoutGroupInput = {
    where: Prisma.FeatureWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeatureCreateWithoutGroupInput, Prisma.FeatureUncheckedCreateWithoutGroupInput>;
};
export type FeatureCreateManyGroupInputEnvelope = {
    data: Prisma.FeatureCreateManyGroupInput | Prisma.FeatureCreateManyGroupInput[];
    skipDuplicates?: boolean;
};
export type FeatureUpsertWithWhereUniqueWithoutGroupInput = {
    where: Prisma.FeatureWhereUniqueInput;
    update: Prisma.XOR<Prisma.FeatureUpdateWithoutGroupInput, Prisma.FeatureUncheckedUpdateWithoutGroupInput>;
    create: Prisma.XOR<Prisma.FeatureCreateWithoutGroupInput, Prisma.FeatureUncheckedCreateWithoutGroupInput>;
};
export type FeatureUpdateWithWhereUniqueWithoutGroupInput = {
    where: Prisma.FeatureWhereUniqueInput;
    data: Prisma.XOR<Prisma.FeatureUpdateWithoutGroupInput, Prisma.FeatureUncheckedUpdateWithoutGroupInput>;
};
export type FeatureUpdateManyWithWhereWithoutGroupInput = {
    where: Prisma.FeatureScalarWhereInput;
    data: Prisma.XOR<Prisma.FeatureUpdateManyMutationInput, Prisma.FeatureUncheckedUpdateManyWithoutGroupInput>;
};
export type FeatureScalarWhereInput = {
    AND?: Prisma.FeatureScalarWhereInput | Prisma.FeatureScalarWhereInput[];
    OR?: Prisma.FeatureScalarWhereInput[];
    NOT?: Prisma.FeatureScalarWhereInput | Prisma.FeatureScalarWhereInput[];
    id?: Prisma.IntFilter<"Feature"> | number;
    featureGroupId?: Prisma.IntFilter<"Feature"> | number;
    name?: Prisma.StringFilter<"Feature"> | string;
};
export type FeatureCreateWithoutVariantsInput = {
    name: string;
    group: Prisma.FeatureGroupCreateNestedOneWithoutFeaturesInput;
};
export type FeatureUncheckedCreateWithoutVariantsInput = {
    id?: number;
    featureGroupId: number;
    name: string;
};
export type FeatureCreateOrConnectWithoutVariantsInput = {
    where: Prisma.FeatureWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeatureCreateWithoutVariantsInput, Prisma.FeatureUncheckedCreateWithoutVariantsInput>;
};
export type FeatureUpsertWithoutVariantsInput = {
    update: Prisma.XOR<Prisma.FeatureUpdateWithoutVariantsInput, Prisma.FeatureUncheckedUpdateWithoutVariantsInput>;
    create: Prisma.XOR<Prisma.FeatureCreateWithoutVariantsInput, Prisma.FeatureUncheckedCreateWithoutVariantsInput>;
    where?: Prisma.FeatureWhereInput;
};
export type FeatureUpdateToOneWithWhereWithoutVariantsInput = {
    where?: Prisma.FeatureWhereInput;
    data: Prisma.XOR<Prisma.FeatureUpdateWithoutVariantsInput, Prisma.FeatureUncheckedUpdateWithoutVariantsInput>;
};
export type FeatureUpdateWithoutVariantsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    group?: Prisma.FeatureGroupUpdateOneRequiredWithoutFeaturesNestedInput;
};
export type FeatureUncheckedUpdateWithoutVariantsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    featureGroupId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type FeatureCreateManyGroupInput = {
    id?: number;
    name: string;
};
export type FeatureUpdateWithoutGroupInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    variants?: Prisma.VariantFeatureUpdateManyWithoutFeatureNestedInput;
};
export type FeatureUncheckedUpdateWithoutGroupInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    variants?: Prisma.VariantFeatureUncheckedUpdateManyWithoutFeatureNestedInput;
};
export type FeatureUncheckedUpdateManyWithoutGroupInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type FeatureCountOutputType = {
    variants: number;
};
export type FeatureCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    variants?: boolean | FeatureCountOutputTypeCountVariantsArgs;
};
export type FeatureCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureCountOutputTypeSelect<ExtArgs> | null;
};
export type FeatureCountOutputTypeCountVariantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VariantFeatureWhereInput;
};
export type FeatureSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    featureGroupId?: boolean;
    name?: boolean;
    group?: boolean | Prisma.FeatureGroupDefaultArgs<ExtArgs>;
    variants?: boolean | Prisma.Feature$variantsArgs<ExtArgs>;
    _count?: boolean | Prisma.FeatureCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["feature"]>;
export type FeatureSelectScalar = {
    id?: boolean;
    featureGroupId?: boolean;
    name?: boolean;
};
export type FeatureOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "featureGroupId" | "name", ExtArgs["result"]["feature"]>;
export type FeatureInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    group?: boolean | Prisma.FeatureGroupDefaultArgs<ExtArgs>;
    variants?: boolean | Prisma.Feature$variantsArgs<ExtArgs>;
    _count?: boolean | Prisma.FeatureCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $FeaturePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Feature";
    objects: {
        group: Prisma.$FeatureGroupPayload<ExtArgs>;
        variants: Prisma.$VariantFeaturePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        featureGroupId: number;
        name: string;
    }, ExtArgs["result"]["feature"]>;
    composites: {};
};
export type FeatureGetPayload<S extends boolean | null | undefined | FeatureDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FeaturePayload, S>;
export type FeatureCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FeatureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FeatureCountAggregateInputType | true;
};
export interface FeatureDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Feature'];
        meta: {
            name: 'Feature';
        };
    };
    findUnique<T extends FeatureFindUniqueArgs>(args: Prisma.SelectSubset<T, FeatureFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FeatureClient<runtime.Types.Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FeatureFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FeatureFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FeatureClient<runtime.Types.Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FeatureFindFirstArgs>(args?: Prisma.SelectSubset<T, FeatureFindFirstArgs<ExtArgs>>): Prisma.Prisma__FeatureClient<runtime.Types.Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FeatureFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FeatureFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FeatureClient<runtime.Types.Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FeatureFindManyArgs>(args?: Prisma.SelectSubset<T, FeatureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FeatureCreateArgs>(args: Prisma.SelectSubset<T, FeatureCreateArgs<ExtArgs>>): Prisma.Prisma__FeatureClient<runtime.Types.Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FeatureCreateManyArgs>(args?: Prisma.SelectSubset<T, FeatureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends FeatureDeleteArgs>(args: Prisma.SelectSubset<T, FeatureDeleteArgs<ExtArgs>>): Prisma.Prisma__FeatureClient<runtime.Types.Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FeatureUpdateArgs>(args: Prisma.SelectSubset<T, FeatureUpdateArgs<ExtArgs>>): Prisma.Prisma__FeatureClient<runtime.Types.Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FeatureDeleteManyArgs>(args?: Prisma.SelectSubset<T, FeatureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FeatureUpdateManyArgs>(args: Prisma.SelectSubset<T, FeatureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends FeatureUpsertArgs>(args: Prisma.SelectSubset<T, FeatureUpsertArgs<ExtArgs>>): Prisma.Prisma__FeatureClient<runtime.Types.Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FeatureCountArgs>(args?: Prisma.Subset<T, FeatureCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FeatureCountAggregateOutputType> : number>;
    aggregate<T extends FeatureAggregateArgs>(args: Prisma.Subset<T, FeatureAggregateArgs>): Prisma.PrismaPromise<GetFeatureAggregateType<T>>;
    groupBy<T extends FeatureGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FeatureGroupByArgs['orderBy'];
    } : {
        orderBy?: FeatureGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FeatureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeatureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FeatureFieldRefs;
}
export interface Prisma__FeatureClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    group<T extends Prisma.FeatureGroupDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FeatureGroupDefaultArgs<ExtArgs>>): Prisma.Prisma__FeatureGroupClient<runtime.Types.Result.GetResult<Prisma.$FeatureGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    variants<T extends Prisma.Feature$variantsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Feature$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VariantFeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FeatureFieldRefs {
    readonly id: Prisma.FieldRef<"Feature", 'Int'>;
    readonly featureGroupId: Prisma.FieldRef<"Feature", 'Int'>;
    readonly name: Prisma.FieldRef<"Feature", 'String'>;
}
export type FeatureFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureSelect<ExtArgs> | null;
    omit?: Prisma.FeatureOmit<ExtArgs> | null;
    include?: Prisma.FeatureInclude<ExtArgs> | null;
    where: Prisma.FeatureWhereUniqueInput;
};
export type FeatureFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureSelect<ExtArgs> | null;
    omit?: Prisma.FeatureOmit<ExtArgs> | null;
    include?: Prisma.FeatureInclude<ExtArgs> | null;
    where: Prisma.FeatureWhereUniqueInput;
};
export type FeatureFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureSelect<ExtArgs> | null;
    omit?: Prisma.FeatureOmit<ExtArgs> | null;
    include?: Prisma.FeatureInclude<ExtArgs> | null;
    where?: Prisma.FeatureWhereInput;
    orderBy?: Prisma.FeatureOrderByWithRelationInput | Prisma.FeatureOrderByWithRelationInput[];
    cursor?: Prisma.FeatureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeatureScalarFieldEnum | Prisma.FeatureScalarFieldEnum[];
};
export type FeatureFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureSelect<ExtArgs> | null;
    omit?: Prisma.FeatureOmit<ExtArgs> | null;
    include?: Prisma.FeatureInclude<ExtArgs> | null;
    where?: Prisma.FeatureWhereInput;
    orderBy?: Prisma.FeatureOrderByWithRelationInput | Prisma.FeatureOrderByWithRelationInput[];
    cursor?: Prisma.FeatureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeatureScalarFieldEnum | Prisma.FeatureScalarFieldEnum[];
};
export type FeatureFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureSelect<ExtArgs> | null;
    omit?: Prisma.FeatureOmit<ExtArgs> | null;
    include?: Prisma.FeatureInclude<ExtArgs> | null;
    where?: Prisma.FeatureWhereInput;
    orderBy?: Prisma.FeatureOrderByWithRelationInput | Prisma.FeatureOrderByWithRelationInput[];
    cursor?: Prisma.FeatureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeatureScalarFieldEnum | Prisma.FeatureScalarFieldEnum[];
};
export type FeatureCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureSelect<ExtArgs> | null;
    omit?: Prisma.FeatureOmit<ExtArgs> | null;
    include?: Prisma.FeatureInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FeatureCreateInput, Prisma.FeatureUncheckedCreateInput>;
};
export type FeatureCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FeatureCreateManyInput | Prisma.FeatureCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FeatureUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureSelect<ExtArgs> | null;
    omit?: Prisma.FeatureOmit<ExtArgs> | null;
    include?: Prisma.FeatureInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FeatureUpdateInput, Prisma.FeatureUncheckedUpdateInput>;
    where: Prisma.FeatureWhereUniqueInput;
};
export type FeatureUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FeatureUpdateManyMutationInput, Prisma.FeatureUncheckedUpdateManyInput>;
    where?: Prisma.FeatureWhereInput;
    limit?: number;
};
export type FeatureUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureSelect<ExtArgs> | null;
    omit?: Prisma.FeatureOmit<ExtArgs> | null;
    include?: Prisma.FeatureInclude<ExtArgs> | null;
    where: Prisma.FeatureWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeatureCreateInput, Prisma.FeatureUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FeatureUpdateInput, Prisma.FeatureUncheckedUpdateInput>;
};
export type FeatureDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureSelect<ExtArgs> | null;
    omit?: Prisma.FeatureOmit<ExtArgs> | null;
    include?: Prisma.FeatureInclude<ExtArgs> | null;
    where: Prisma.FeatureWhereUniqueInput;
};
export type FeatureDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeatureWhereInput;
    limit?: number;
};
export type Feature$variantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VariantFeatureSelect<ExtArgs> | null;
    omit?: Prisma.VariantFeatureOmit<ExtArgs> | null;
    include?: Prisma.VariantFeatureInclude<ExtArgs> | null;
    where?: Prisma.VariantFeatureWhereInput;
    orderBy?: Prisma.VariantFeatureOrderByWithRelationInput | Prisma.VariantFeatureOrderByWithRelationInput[];
    cursor?: Prisma.VariantFeatureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VariantFeatureScalarFieldEnum | Prisma.VariantFeatureScalarFieldEnum[];
};
export type FeatureDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureSelect<ExtArgs> | null;
    omit?: Prisma.FeatureOmit<ExtArgs> | null;
    include?: Prisma.FeatureInclude<ExtArgs> | null;
};
export {};
