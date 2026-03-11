import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type VariantFeatureModel = runtime.Types.Result.DefaultSelection<Prisma.$VariantFeaturePayload>;
export type AggregateVariantFeature = {
    _count: VariantFeatureCountAggregateOutputType | null;
    _avg: VariantFeatureAvgAggregateOutputType | null;
    _sum: VariantFeatureSumAggregateOutputType | null;
    _min: VariantFeatureMinAggregateOutputType | null;
    _max: VariantFeatureMaxAggregateOutputType | null;
};
export type VariantFeatureAvgAggregateOutputType = {
    variantId: number | null;
    featureId: number | null;
};
export type VariantFeatureSumAggregateOutputType = {
    variantId: number | null;
    featureId: number | null;
};
export type VariantFeatureMinAggregateOutputType = {
    variantId: number | null;
    featureId: number | null;
};
export type VariantFeatureMaxAggregateOutputType = {
    variantId: number | null;
    featureId: number | null;
};
export type VariantFeatureCountAggregateOutputType = {
    variantId: number;
    featureId: number;
    _all: number;
};
export type VariantFeatureAvgAggregateInputType = {
    variantId?: true;
    featureId?: true;
};
export type VariantFeatureSumAggregateInputType = {
    variantId?: true;
    featureId?: true;
};
export type VariantFeatureMinAggregateInputType = {
    variantId?: true;
    featureId?: true;
};
export type VariantFeatureMaxAggregateInputType = {
    variantId?: true;
    featureId?: true;
};
export type VariantFeatureCountAggregateInputType = {
    variantId?: true;
    featureId?: true;
    _all?: true;
};
export type VariantFeatureAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VariantFeatureWhereInput;
    orderBy?: Prisma.VariantFeatureOrderByWithRelationInput | Prisma.VariantFeatureOrderByWithRelationInput[];
    cursor?: Prisma.VariantFeatureWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VariantFeatureCountAggregateInputType;
    _avg?: VariantFeatureAvgAggregateInputType;
    _sum?: VariantFeatureSumAggregateInputType;
    _min?: VariantFeatureMinAggregateInputType;
    _max?: VariantFeatureMaxAggregateInputType;
};
export type GetVariantFeatureAggregateType<T extends VariantFeatureAggregateArgs> = {
    [P in keyof T & keyof AggregateVariantFeature]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVariantFeature[P]> : Prisma.GetScalarType<T[P], AggregateVariantFeature[P]>;
};
export type VariantFeatureGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VariantFeatureWhereInput;
    orderBy?: Prisma.VariantFeatureOrderByWithAggregationInput | Prisma.VariantFeatureOrderByWithAggregationInput[];
    by: Prisma.VariantFeatureScalarFieldEnum[] | Prisma.VariantFeatureScalarFieldEnum;
    having?: Prisma.VariantFeatureScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VariantFeatureCountAggregateInputType | true;
    _avg?: VariantFeatureAvgAggregateInputType;
    _sum?: VariantFeatureSumAggregateInputType;
    _min?: VariantFeatureMinAggregateInputType;
    _max?: VariantFeatureMaxAggregateInputType;
};
export type VariantFeatureGroupByOutputType = {
    variantId: number;
    featureId: number;
    _count: VariantFeatureCountAggregateOutputType | null;
    _avg: VariantFeatureAvgAggregateOutputType | null;
    _sum: VariantFeatureSumAggregateOutputType | null;
    _min: VariantFeatureMinAggregateOutputType | null;
    _max: VariantFeatureMaxAggregateOutputType | null;
};
type GetVariantFeatureGroupByPayload<T extends VariantFeatureGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VariantFeatureGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VariantFeatureGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VariantFeatureGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VariantFeatureGroupByOutputType[P]>;
}>>;
export type VariantFeatureWhereInput = {
    AND?: Prisma.VariantFeatureWhereInput | Prisma.VariantFeatureWhereInput[];
    OR?: Prisma.VariantFeatureWhereInput[];
    NOT?: Prisma.VariantFeatureWhereInput | Prisma.VariantFeatureWhereInput[];
    variantId?: Prisma.IntFilter<"VariantFeature"> | number;
    featureId?: Prisma.IntFilter<"VariantFeature"> | number;
    variant?: Prisma.XOR<Prisma.VariantScalarRelationFilter, Prisma.VariantWhereInput>;
    feature?: Prisma.XOR<Prisma.FeatureScalarRelationFilter, Prisma.FeatureWhereInput>;
};
export type VariantFeatureOrderByWithRelationInput = {
    variantId?: Prisma.SortOrder;
    featureId?: Prisma.SortOrder;
    variant?: Prisma.VariantOrderByWithRelationInput;
    feature?: Prisma.FeatureOrderByWithRelationInput;
};
export type VariantFeatureWhereUniqueInput = Prisma.AtLeast<{
    variantId_featureId?: Prisma.VariantFeatureVariantIdFeatureIdCompoundUniqueInput;
    AND?: Prisma.VariantFeatureWhereInput | Prisma.VariantFeatureWhereInput[];
    OR?: Prisma.VariantFeatureWhereInput[];
    NOT?: Prisma.VariantFeatureWhereInput | Prisma.VariantFeatureWhereInput[];
    variantId?: Prisma.IntFilter<"VariantFeature"> | number;
    featureId?: Prisma.IntFilter<"VariantFeature"> | number;
    variant?: Prisma.XOR<Prisma.VariantScalarRelationFilter, Prisma.VariantWhereInput>;
    feature?: Prisma.XOR<Prisma.FeatureScalarRelationFilter, Prisma.FeatureWhereInput>;
}, "variantId_featureId">;
export type VariantFeatureOrderByWithAggregationInput = {
    variantId?: Prisma.SortOrder;
    featureId?: Prisma.SortOrder;
    _count?: Prisma.VariantFeatureCountOrderByAggregateInput;
    _avg?: Prisma.VariantFeatureAvgOrderByAggregateInput;
    _max?: Prisma.VariantFeatureMaxOrderByAggregateInput;
    _min?: Prisma.VariantFeatureMinOrderByAggregateInput;
    _sum?: Prisma.VariantFeatureSumOrderByAggregateInput;
};
export type VariantFeatureScalarWhereWithAggregatesInput = {
    AND?: Prisma.VariantFeatureScalarWhereWithAggregatesInput | Prisma.VariantFeatureScalarWhereWithAggregatesInput[];
    OR?: Prisma.VariantFeatureScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VariantFeatureScalarWhereWithAggregatesInput | Prisma.VariantFeatureScalarWhereWithAggregatesInput[];
    variantId?: Prisma.IntWithAggregatesFilter<"VariantFeature"> | number;
    featureId?: Prisma.IntWithAggregatesFilter<"VariantFeature"> | number;
};
export type VariantFeatureCreateInput = {
    variant: Prisma.VariantCreateNestedOneWithoutFeaturesInput;
    feature: Prisma.FeatureCreateNestedOneWithoutVariantsInput;
};
export type VariantFeatureUncheckedCreateInput = {
    variantId: number;
    featureId: number;
};
export type VariantFeatureUpdateInput = {
    variant?: Prisma.VariantUpdateOneRequiredWithoutFeaturesNestedInput;
    feature?: Prisma.FeatureUpdateOneRequiredWithoutVariantsNestedInput;
};
export type VariantFeatureUncheckedUpdateInput = {
    variantId?: Prisma.IntFieldUpdateOperationsInput | number;
    featureId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type VariantFeatureCreateManyInput = {
    variantId: number;
    featureId: number;
};
export type VariantFeatureUpdateManyMutationInput = {};
export type VariantFeatureUncheckedUpdateManyInput = {
    variantId?: Prisma.IntFieldUpdateOperationsInput | number;
    featureId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type VariantFeatureListRelationFilter = {
    every?: Prisma.VariantFeatureWhereInput;
    some?: Prisma.VariantFeatureWhereInput;
    none?: Prisma.VariantFeatureWhereInput;
};
export type VariantFeatureOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type VariantFeatureVariantIdFeatureIdCompoundUniqueInput = {
    variantId: number;
    featureId: number;
};
export type VariantFeatureCountOrderByAggregateInput = {
    variantId?: Prisma.SortOrder;
    featureId?: Prisma.SortOrder;
};
export type VariantFeatureAvgOrderByAggregateInput = {
    variantId?: Prisma.SortOrder;
    featureId?: Prisma.SortOrder;
};
export type VariantFeatureMaxOrderByAggregateInput = {
    variantId?: Prisma.SortOrder;
    featureId?: Prisma.SortOrder;
};
export type VariantFeatureMinOrderByAggregateInput = {
    variantId?: Prisma.SortOrder;
    featureId?: Prisma.SortOrder;
};
export type VariantFeatureSumOrderByAggregateInput = {
    variantId?: Prisma.SortOrder;
    featureId?: Prisma.SortOrder;
};
export type VariantFeatureCreateNestedManyWithoutVariantInput = {
    create?: Prisma.XOR<Prisma.VariantFeatureCreateWithoutVariantInput, Prisma.VariantFeatureUncheckedCreateWithoutVariantInput> | Prisma.VariantFeatureCreateWithoutVariantInput[] | Prisma.VariantFeatureUncheckedCreateWithoutVariantInput[];
    connectOrCreate?: Prisma.VariantFeatureCreateOrConnectWithoutVariantInput | Prisma.VariantFeatureCreateOrConnectWithoutVariantInput[];
    createMany?: Prisma.VariantFeatureCreateManyVariantInputEnvelope;
    connect?: Prisma.VariantFeatureWhereUniqueInput | Prisma.VariantFeatureWhereUniqueInput[];
};
export type VariantFeatureUncheckedCreateNestedManyWithoutVariantInput = {
    create?: Prisma.XOR<Prisma.VariantFeatureCreateWithoutVariantInput, Prisma.VariantFeatureUncheckedCreateWithoutVariantInput> | Prisma.VariantFeatureCreateWithoutVariantInput[] | Prisma.VariantFeatureUncheckedCreateWithoutVariantInput[];
    connectOrCreate?: Prisma.VariantFeatureCreateOrConnectWithoutVariantInput | Prisma.VariantFeatureCreateOrConnectWithoutVariantInput[];
    createMany?: Prisma.VariantFeatureCreateManyVariantInputEnvelope;
    connect?: Prisma.VariantFeatureWhereUniqueInput | Prisma.VariantFeatureWhereUniqueInput[];
};
export type VariantFeatureUpdateManyWithoutVariantNestedInput = {
    create?: Prisma.XOR<Prisma.VariantFeatureCreateWithoutVariantInput, Prisma.VariantFeatureUncheckedCreateWithoutVariantInput> | Prisma.VariantFeatureCreateWithoutVariantInput[] | Prisma.VariantFeatureUncheckedCreateWithoutVariantInput[];
    connectOrCreate?: Prisma.VariantFeatureCreateOrConnectWithoutVariantInput | Prisma.VariantFeatureCreateOrConnectWithoutVariantInput[];
    upsert?: Prisma.VariantFeatureUpsertWithWhereUniqueWithoutVariantInput | Prisma.VariantFeatureUpsertWithWhereUniqueWithoutVariantInput[];
    createMany?: Prisma.VariantFeatureCreateManyVariantInputEnvelope;
    set?: Prisma.VariantFeatureWhereUniqueInput | Prisma.VariantFeatureWhereUniqueInput[];
    disconnect?: Prisma.VariantFeatureWhereUniqueInput | Prisma.VariantFeatureWhereUniqueInput[];
    delete?: Prisma.VariantFeatureWhereUniqueInput | Prisma.VariantFeatureWhereUniqueInput[];
    connect?: Prisma.VariantFeatureWhereUniqueInput | Prisma.VariantFeatureWhereUniqueInput[];
    update?: Prisma.VariantFeatureUpdateWithWhereUniqueWithoutVariantInput | Prisma.VariantFeatureUpdateWithWhereUniqueWithoutVariantInput[];
    updateMany?: Prisma.VariantFeatureUpdateManyWithWhereWithoutVariantInput | Prisma.VariantFeatureUpdateManyWithWhereWithoutVariantInput[];
    deleteMany?: Prisma.VariantFeatureScalarWhereInput | Prisma.VariantFeatureScalarWhereInput[];
};
export type VariantFeatureUncheckedUpdateManyWithoutVariantNestedInput = {
    create?: Prisma.XOR<Prisma.VariantFeatureCreateWithoutVariantInput, Prisma.VariantFeatureUncheckedCreateWithoutVariantInput> | Prisma.VariantFeatureCreateWithoutVariantInput[] | Prisma.VariantFeatureUncheckedCreateWithoutVariantInput[];
    connectOrCreate?: Prisma.VariantFeatureCreateOrConnectWithoutVariantInput | Prisma.VariantFeatureCreateOrConnectWithoutVariantInput[];
    upsert?: Prisma.VariantFeatureUpsertWithWhereUniqueWithoutVariantInput | Prisma.VariantFeatureUpsertWithWhereUniqueWithoutVariantInput[];
    createMany?: Prisma.VariantFeatureCreateManyVariantInputEnvelope;
    set?: Prisma.VariantFeatureWhereUniqueInput | Prisma.VariantFeatureWhereUniqueInput[];
    disconnect?: Prisma.VariantFeatureWhereUniqueInput | Prisma.VariantFeatureWhereUniqueInput[];
    delete?: Prisma.VariantFeatureWhereUniqueInput | Prisma.VariantFeatureWhereUniqueInput[];
    connect?: Prisma.VariantFeatureWhereUniqueInput | Prisma.VariantFeatureWhereUniqueInput[];
    update?: Prisma.VariantFeatureUpdateWithWhereUniqueWithoutVariantInput | Prisma.VariantFeatureUpdateWithWhereUniqueWithoutVariantInput[];
    updateMany?: Prisma.VariantFeatureUpdateManyWithWhereWithoutVariantInput | Prisma.VariantFeatureUpdateManyWithWhereWithoutVariantInput[];
    deleteMany?: Prisma.VariantFeatureScalarWhereInput | Prisma.VariantFeatureScalarWhereInput[];
};
export type VariantFeatureCreateNestedManyWithoutFeatureInput = {
    create?: Prisma.XOR<Prisma.VariantFeatureCreateWithoutFeatureInput, Prisma.VariantFeatureUncheckedCreateWithoutFeatureInput> | Prisma.VariantFeatureCreateWithoutFeatureInput[] | Prisma.VariantFeatureUncheckedCreateWithoutFeatureInput[];
    connectOrCreate?: Prisma.VariantFeatureCreateOrConnectWithoutFeatureInput | Prisma.VariantFeatureCreateOrConnectWithoutFeatureInput[];
    createMany?: Prisma.VariantFeatureCreateManyFeatureInputEnvelope;
    connect?: Prisma.VariantFeatureWhereUniqueInput | Prisma.VariantFeatureWhereUniqueInput[];
};
export type VariantFeatureUncheckedCreateNestedManyWithoutFeatureInput = {
    create?: Prisma.XOR<Prisma.VariantFeatureCreateWithoutFeatureInput, Prisma.VariantFeatureUncheckedCreateWithoutFeatureInput> | Prisma.VariantFeatureCreateWithoutFeatureInput[] | Prisma.VariantFeatureUncheckedCreateWithoutFeatureInput[];
    connectOrCreate?: Prisma.VariantFeatureCreateOrConnectWithoutFeatureInput | Prisma.VariantFeatureCreateOrConnectWithoutFeatureInput[];
    createMany?: Prisma.VariantFeatureCreateManyFeatureInputEnvelope;
    connect?: Prisma.VariantFeatureWhereUniqueInput | Prisma.VariantFeatureWhereUniqueInput[];
};
export type VariantFeatureUpdateManyWithoutFeatureNestedInput = {
    create?: Prisma.XOR<Prisma.VariantFeatureCreateWithoutFeatureInput, Prisma.VariantFeatureUncheckedCreateWithoutFeatureInput> | Prisma.VariantFeatureCreateWithoutFeatureInput[] | Prisma.VariantFeatureUncheckedCreateWithoutFeatureInput[];
    connectOrCreate?: Prisma.VariantFeatureCreateOrConnectWithoutFeatureInput | Prisma.VariantFeatureCreateOrConnectWithoutFeatureInput[];
    upsert?: Prisma.VariantFeatureUpsertWithWhereUniqueWithoutFeatureInput | Prisma.VariantFeatureUpsertWithWhereUniqueWithoutFeatureInput[];
    createMany?: Prisma.VariantFeatureCreateManyFeatureInputEnvelope;
    set?: Prisma.VariantFeatureWhereUniqueInput | Prisma.VariantFeatureWhereUniqueInput[];
    disconnect?: Prisma.VariantFeatureWhereUniqueInput | Prisma.VariantFeatureWhereUniqueInput[];
    delete?: Prisma.VariantFeatureWhereUniqueInput | Prisma.VariantFeatureWhereUniqueInput[];
    connect?: Prisma.VariantFeatureWhereUniqueInput | Prisma.VariantFeatureWhereUniqueInput[];
    update?: Prisma.VariantFeatureUpdateWithWhereUniqueWithoutFeatureInput | Prisma.VariantFeatureUpdateWithWhereUniqueWithoutFeatureInput[];
    updateMany?: Prisma.VariantFeatureUpdateManyWithWhereWithoutFeatureInput | Prisma.VariantFeatureUpdateManyWithWhereWithoutFeatureInput[];
    deleteMany?: Prisma.VariantFeatureScalarWhereInput | Prisma.VariantFeatureScalarWhereInput[];
};
export type VariantFeatureUncheckedUpdateManyWithoutFeatureNestedInput = {
    create?: Prisma.XOR<Prisma.VariantFeatureCreateWithoutFeatureInput, Prisma.VariantFeatureUncheckedCreateWithoutFeatureInput> | Prisma.VariantFeatureCreateWithoutFeatureInput[] | Prisma.VariantFeatureUncheckedCreateWithoutFeatureInput[];
    connectOrCreate?: Prisma.VariantFeatureCreateOrConnectWithoutFeatureInput | Prisma.VariantFeatureCreateOrConnectWithoutFeatureInput[];
    upsert?: Prisma.VariantFeatureUpsertWithWhereUniqueWithoutFeatureInput | Prisma.VariantFeatureUpsertWithWhereUniqueWithoutFeatureInput[];
    createMany?: Prisma.VariantFeatureCreateManyFeatureInputEnvelope;
    set?: Prisma.VariantFeatureWhereUniqueInput | Prisma.VariantFeatureWhereUniqueInput[];
    disconnect?: Prisma.VariantFeatureWhereUniqueInput | Prisma.VariantFeatureWhereUniqueInput[];
    delete?: Prisma.VariantFeatureWhereUniqueInput | Prisma.VariantFeatureWhereUniqueInput[];
    connect?: Prisma.VariantFeatureWhereUniqueInput | Prisma.VariantFeatureWhereUniqueInput[];
    update?: Prisma.VariantFeatureUpdateWithWhereUniqueWithoutFeatureInput | Prisma.VariantFeatureUpdateWithWhereUniqueWithoutFeatureInput[];
    updateMany?: Prisma.VariantFeatureUpdateManyWithWhereWithoutFeatureInput | Prisma.VariantFeatureUpdateManyWithWhereWithoutFeatureInput[];
    deleteMany?: Prisma.VariantFeatureScalarWhereInput | Prisma.VariantFeatureScalarWhereInput[];
};
export type VariantFeatureCreateWithoutVariantInput = {
    feature: Prisma.FeatureCreateNestedOneWithoutVariantsInput;
};
export type VariantFeatureUncheckedCreateWithoutVariantInput = {
    featureId: number;
};
export type VariantFeatureCreateOrConnectWithoutVariantInput = {
    where: Prisma.VariantFeatureWhereUniqueInput;
    create: Prisma.XOR<Prisma.VariantFeatureCreateWithoutVariantInput, Prisma.VariantFeatureUncheckedCreateWithoutVariantInput>;
};
export type VariantFeatureCreateManyVariantInputEnvelope = {
    data: Prisma.VariantFeatureCreateManyVariantInput | Prisma.VariantFeatureCreateManyVariantInput[];
    skipDuplicates?: boolean;
};
export type VariantFeatureUpsertWithWhereUniqueWithoutVariantInput = {
    where: Prisma.VariantFeatureWhereUniqueInput;
    update: Prisma.XOR<Prisma.VariantFeatureUpdateWithoutVariantInput, Prisma.VariantFeatureUncheckedUpdateWithoutVariantInput>;
    create: Prisma.XOR<Prisma.VariantFeatureCreateWithoutVariantInput, Prisma.VariantFeatureUncheckedCreateWithoutVariantInput>;
};
export type VariantFeatureUpdateWithWhereUniqueWithoutVariantInput = {
    where: Prisma.VariantFeatureWhereUniqueInput;
    data: Prisma.XOR<Prisma.VariantFeatureUpdateWithoutVariantInput, Prisma.VariantFeatureUncheckedUpdateWithoutVariantInput>;
};
export type VariantFeatureUpdateManyWithWhereWithoutVariantInput = {
    where: Prisma.VariantFeatureScalarWhereInput;
    data: Prisma.XOR<Prisma.VariantFeatureUpdateManyMutationInput, Prisma.VariantFeatureUncheckedUpdateManyWithoutVariantInput>;
};
export type VariantFeatureScalarWhereInput = {
    AND?: Prisma.VariantFeatureScalarWhereInput | Prisma.VariantFeatureScalarWhereInput[];
    OR?: Prisma.VariantFeatureScalarWhereInput[];
    NOT?: Prisma.VariantFeatureScalarWhereInput | Prisma.VariantFeatureScalarWhereInput[];
    variantId?: Prisma.IntFilter<"VariantFeature"> | number;
    featureId?: Prisma.IntFilter<"VariantFeature"> | number;
};
export type VariantFeatureCreateWithoutFeatureInput = {
    variant: Prisma.VariantCreateNestedOneWithoutFeaturesInput;
};
export type VariantFeatureUncheckedCreateWithoutFeatureInput = {
    variantId: number;
};
export type VariantFeatureCreateOrConnectWithoutFeatureInput = {
    where: Prisma.VariantFeatureWhereUniqueInput;
    create: Prisma.XOR<Prisma.VariantFeatureCreateWithoutFeatureInput, Prisma.VariantFeatureUncheckedCreateWithoutFeatureInput>;
};
export type VariantFeatureCreateManyFeatureInputEnvelope = {
    data: Prisma.VariantFeatureCreateManyFeatureInput | Prisma.VariantFeatureCreateManyFeatureInput[];
    skipDuplicates?: boolean;
};
export type VariantFeatureUpsertWithWhereUniqueWithoutFeatureInput = {
    where: Prisma.VariantFeatureWhereUniqueInput;
    update: Prisma.XOR<Prisma.VariantFeatureUpdateWithoutFeatureInput, Prisma.VariantFeatureUncheckedUpdateWithoutFeatureInput>;
    create: Prisma.XOR<Prisma.VariantFeatureCreateWithoutFeatureInput, Prisma.VariantFeatureUncheckedCreateWithoutFeatureInput>;
};
export type VariantFeatureUpdateWithWhereUniqueWithoutFeatureInput = {
    where: Prisma.VariantFeatureWhereUniqueInput;
    data: Prisma.XOR<Prisma.VariantFeatureUpdateWithoutFeatureInput, Prisma.VariantFeatureUncheckedUpdateWithoutFeatureInput>;
};
export type VariantFeatureUpdateManyWithWhereWithoutFeatureInput = {
    where: Prisma.VariantFeatureScalarWhereInput;
    data: Prisma.XOR<Prisma.VariantFeatureUpdateManyMutationInput, Prisma.VariantFeatureUncheckedUpdateManyWithoutFeatureInput>;
};
export type VariantFeatureCreateManyVariantInput = {
    featureId: number;
};
export type VariantFeatureUpdateWithoutVariantInput = {
    feature?: Prisma.FeatureUpdateOneRequiredWithoutVariantsNestedInput;
};
export type VariantFeatureUncheckedUpdateWithoutVariantInput = {
    featureId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type VariantFeatureUncheckedUpdateManyWithoutVariantInput = {
    featureId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type VariantFeatureCreateManyFeatureInput = {
    variantId: number;
};
export type VariantFeatureUpdateWithoutFeatureInput = {
    variant?: Prisma.VariantUpdateOneRequiredWithoutFeaturesNestedInput;
};
export type VariantFeatureUncheckedUpdateWithoutFeatureInput = {
    variantId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type VariantFeatureUncheckedUpdateManyWithoutFeatureInput = {
    variantId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type VariantFeatureSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    variantId?: boolean;
    featureId?: boolean;
    variant?: boolean | Prisma.VariantDefaultArgs<ExtArgs>;
    feature?: boolean | Prisma.FeatureDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["variantFeature"]>;
export type VariantFeatureSelectScalar = {
    variantId?: boolean;
    featureId?: boolean;
};
export type VariantFeatureOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"variantId" | "featureId", ExtArgs["result"]["variantFeature"]>;
export type VariantFeatureInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    variant?: boolean | Prisma.VariantDefaultArgs<ExtArgs>;
    feature?: boolean | Prisma.FeatureDefaultArgs<ExtArgs>;
};
export type $VariantFeaturePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "VariantFeature";
    objects: {
        variant: Prisma.$VariantPayload<ExtArgs>;
        feature: Prisma.$FeaturePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        variantId: number;
        featureId: number;
    }, ExtArgs["result"]["variantFeature"]>;
    composites: {};
};
export type VariantFeatureGetPayload<S extends boolean | null | undefined | VariantFeatureDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VariantFeaturePayload, S>;
export type VariantFeatureCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VariantFeatureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VariantFeatureCountAggregateInputType | true;
};
export interface VariantFeatureDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['VariantFeature'];
        meta: {
            name: 'VariantFeature';
        };
    };
    findUnique<T extends VariantFeatureFindUniqueArgs>(args: Prisma.SelectSubset<T, VariantFeatureFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VariantFeatureClient<runtime.Types.Result.GetResult<Prisma.$VariantFeaturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends VariantFeatureFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VariantFeatureFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VariantFeatureClient<runtime.Types.Result.GetResult<Prisma.$VariantFeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends VariantFeatureFindFirstArgs>(args?: Prisma.SelectSubset<T, VariantFeatureFindFirstArgs<ExtArgs>>): Prisma.Prisma__VariantFeatureClient<runtime.Types.Result.GetResult<Prisma.$VariantFeaturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends VariantFeatureFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VariantFeatureFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VariantFeatureClient<runtime.Types.Result.GetResult<Prisma.$VariantFeaturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends VariantFeatureFindManyArgs>(args?: Prisma.SelectSubset<T, VariantFeatureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VariantFeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends VariantFeatureCreateArgs>(args: Prisma.SelectSubset<T, VariantFeatureCreateArgs<ExtArgs>>): Prisma.Prisma__VariantFeatureClient<runtime.Types.Result.GetResult<Prisma.$VariantFeaturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends VariantFeatureCreateManyArgs>(args?: Prisma.SelectSubset<T, VariantFeatureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends VariantFeatureDeleteArgs>(args: Prisma.SelectSubset<T, VariantFeatureDeleteArgs<ExtArgs>>): Prisma.Prisma__VariantFeatureClient<runtime.Types.Result.GetResult<Prisma.$VariantFeaturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends VariantFeatureUpdateArgs>(args: Prisma.SelectSubset<T, VariantFeatureUpdateArgs<ExtArgs>>): Prisma.Prisma__VariantFeatureClient<runtime.Types.Result.GetResult<Prisma.$VariantFeaturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends VariantFeatureDeleteManyArgs>(args?: Prisma.SelectSubset<T, VariantFeatureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends VariantFeatureUpdateManyArgs>(args: Prisma.SelectSubset<T, VariantFeatureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends VariantFeatureUpsertArgs>(args: Prisma.SelectSubset<T, VariantFeatureUpsertArgs<ExtArgs>>): Prisma.Prisma__VariantFeatureClient<runtime.Types.Result.GetResult<Prisma.$VariantFeaturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends VariantFeatureCountArgs>(args?: Prisma.Subset<T, VariantFeatureCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VariantFeatureCountAggregateOutputType> : number>;
    aggregate<T extends VariantFeatureAggregateArgs>(args: Prisma.Subset<T, VariantFeatureAggregateArgs>): Prisma.PrismaPromise<GetVariantFeatureAggregateType<T>>;
    groupBy<T extends VariantFeatureGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VariantFeatureGroupByArgs['orderBy'];
    } : {
        orderBy?: VariantFeatureGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VariantFeatureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariantFeatureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: VariantFeatureFieldRefs;
}
export interface Prisma__VariantFeatureClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    variant<T extends Prisma.VariantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VariantDefaultArgs<ExtArgs>>): Prisma.Prisma__VariantClient<runtime.Types.Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    feature<T extends Prisma.FeatureDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FeatureDefaultArgs<ExtArgs>>): Prisma.Prisma__FeatureClient<runtime.Types.Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface VariantFeatureFieldRefs {
    readonly variantId: Prisma.FieldRef<"VariantFeature", 'Int'>;
    readonly featureId: Prisma.FieldRef<"VariantFeature", 'Int'>;
}
export type VariantFeatureFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VariantFeatureSelect<ExtArgs> | null;
    omit?: Prisma.VariantFeatureOmit<ExtArgs> | null;
    include?: Prisma.VariantFeatureInclude<ExtArgs> | null;
    where: Prisma.VariantFeatureWhereUniqueInput;
};
export type VariantFeatureFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VariantFeatureSelect<ExtArgs> | null;
    omit?: Prisma.VariantFeatureOmit<ExtArgs> | null;
    include?: Prisma.VariantFeatureInclude<ExtArgs> | null;
    where: Prisma.VariantFeatureWhereUniqueInput;
};
export type VariantFeatureFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type VariantFeatureFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type VariantFeatureFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type VariantFeatureCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VariantFeatureSelect<ExtArgs> | null;
    omit?: Prisma.VariantFeatureOmit<ExtArgs> | null;
    include?: Prisma.VariantFeatureInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VariantFeatureCreateInput, Prisma.VariantFeatureUncheckedCreateInput>;
};
export type VariantFeatureCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.VariantFeatureCreateManyInput | Prisma.VariantFeatureCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VariantFeatureUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VariantFeatureSelect<ExtArgs> | null;
    omit?: Prisma.VariantFeatureOmit<ExtArgs> | null;
    include?: Prisma.VariantFeatureInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VariantFeatureUpdateInput, Prisma.VariantFeatureUncheckedUpdateInput>;
    where: Prisma.VariantFeatureWhereUniqueInput;
};
export type VariantFeatureUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.VariantFeatureUpdateManyMutationInput, Prisma.VariantFeatureUncheckedUpdateManyInput>;
    where?: Prisma.VariantFeatureWhereInput;
    limit?: number;
};
export type VariantFeatureUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VariantFeatureSelect<ExtArgs> | null;
    omit?: Prisma.VariantFeatureOmit<ExtArgs> | null;
    include?: Prisma.VariantFeatureInclude<ExtArgs> | null;
    where: Prisma.VariantFeatureWhereUniqueInput;
    create: Prisma.XOR<Prisma.VariantFeatureCreateInput, Prisma.VariantFeatureUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.VariantFeatureUpdateInput, Prisma.VariantFeatureUncheckedUpdateInput>;
};
export type VariantFeatureDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VariantFeatureSelect<ExtArgs> | null;
    omit?: Prisma.VariantFeatureOmit<ExtArgs> | null;
    include?: Prisma.VariantFeatureInclude<ExtArgs> | null;
    where: Prisma.VariantFeatureWhereUniqueInput;
};
export type VariantFeatureDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VariantFeatureWhereInput;
    limit?: number;
};
export type VariantFeatureDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VariantFeatureSelect<ExtArgs> | null;
    omit?: Prisma.VariantFeatureOmit<ExtArgs> | null;
    include?: Prisma.VariantFeatureInclude<ExtArgs> | null;
};
export {};
