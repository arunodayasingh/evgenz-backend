import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type VariantSpecModel = runtime.Types.Result.DefaultSelection<Prisma.$VariantSpecPayload>;
export type AggregateVariantSpec = {
    _count: VariantSpecCountAggregateOutputType | null;
    _avg: VariantSpecAvgAggregateOutputType | null;
    _sum: VariantSpecSumAggregateOutputType | null;
    _min: VariantSpecMinAggregateOutputType | null;
    _max: VariantSpecMaxAggregateOutputType | null;
};
export type VariantSpecAvgAggregateOutputType = {
    id: number | null;
    variantId: number | null;
};
export type VariantSpecSumAggregateOutputType = {
    id: number | null;
    variantId: number | null;
};
export type VariantSpecMinAggregateOutputType = {
    id: number | null;
    variantId: number | null;
    key: string | null;
    value: string | null;
    unit: string | null;
};
export type VariantSpecMaxAggregateOutputType = {
    id: number | null;
    variantId: number | null;
    key: string | null;
    value: string | null;
    unit: string | null;
};
export type VariantSpecCountAggregateOutputType = {
    id: number;
    variantId: number;
    key: number;
    value: number;
    unit: number;
    _all: number;
};
export type VariantSpecAvgAggregateInputType = {
    id?: true;
    variantId?: true;
};
export type VariantSpecSumAggregateInputType = {
    id?: true;
    variantId?: true;
};
export type VariantSpecMinAggregateInputType = {
    id?: true;
    variantId?: true;
    key?: true;
    value?: true;
    unit?: true;
};
export type VariantSpecMaxAggregateInputType = {
    id?: true;
    variantId?: true;
    key?: true;
    value?: true;
    unit?: true;
};
export type VariantSpecCountAggregateInputType = {
    id?: true;
    variantId?: true;
    key?: true;
    value?: true;
    unit?: true;
    _all?: true;
};
export type VariantSpecAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VariantSpecWhereInput;
    orderBy?: Prisma.VariantSpecOrderByWithRelationInput | Prisma.VariantSpecOrderByWithRelationInput[];
    cursor?: Prisma.VariantSpecWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VariantSpecCountAggregateInputType;
    _avg?: VariantSpecAvgAggregateInputType;
    _sum?: VariantSpecSumAggregateInputType;
    _min?: VariantSpecMinAggregateInputType;
    _max?: VariantSpecMaxAggregateInputType;
};
export type GetVariantSpecAggregateType<T extends VariantSpecAggregateArgs> = {
    [P in keyof T & keyof AggregateVariantSpec]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVariantSpec[P]> : Prisma.GetScalarType<T[P], AggregateVariantSpec[P]>;
};
export type VariantSpecGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VariantSpecWhereInput;
    orderBy?: Prisma.VariantSpecOrderByWithAggregationInput | Prisma.VariantSpecOrderByWithAggregationInput[];
    by: Prisma.VariantSpecScalarFieldEnum[] | Prisma.VariantSpecScalarFieldEnum;
    having?: Prisma.VariantSpecScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VariantSpecCountAggregateInputType | true;
    _avg?: VariantSpecAvgAggregateInputType;
    _sum?: VariantSpecSumAggregateInputType;
    _min?: VariantSpecMinAggregateInputType;
    _max?: VariantSpecMaxAggregateInputType;
};
export type VariantSpecGroupByOutputType = {
    id: number;
    variantId: number;
    key: string;
    value: string;
    unit: string | null;
    _count: VariantSpecCountAggregateOutputType | null;
    _avg: VariantSpecAvgAggregateOutputType | null;
    _sum: VariantSpecSumAggregateOutputType | null;
    _min: VariantSpecMinAggregateOutputType | null;
    _max: VariantSpecMaxAggregateOutputType | null;
};
type GetVariantSpecGroupByPayload<T extends VariantSpecGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VariantSpecGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VariantSpecGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VariantSpecGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VariantSpecGroupByOutputType[P]>;
}>>;
export type VariantSpecWhereInput = {
    AND?: Prisma.VariantSpecWhereInput | Prisma.VariantSpecWhereInput[];
    OR?: Prisma.VariantSpecWhereInput[];
    NOT?: Prisma.VariantSpecWhereInput | Prisma.VariantSpecWhereInput[];
    id?: Prisma.IntFilter<"VariantSpec"> | number;
    variantId?: Prisma.IntFilter<"VariantSpec"> | number;
    key?: Prisma.StringFilter<"VariantSpec"> | string;
    value?: Prisma.StringFilter<"VariantSpec"> | string;
    unit?: Prisma.StringNullableFilter<"VariantSpec"> | string | null;
    variant?: Prisma.XOR<Prisma.VariantScalarRelationFilter, Prisma.VariantWhereInput>;
};
export type VariantSpecOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    variantId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    unit?: Prisma.SortOrderInput | Prisma.SortOrder;
    variant?: Prisma.VariantOrderByWithRelationInput;
    _relevance?: Prisma.VariantSpecOrderByRelevanceInput;
};
export type VariantSpecWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.VariantSpecWhereInput | Prisma.VariantSpecWhereInput[];
    OR?: Prisma.VariantSpecWhereInput[];
    NOT?: Prisma.VariantSpecWhereInput | Prisma.VariantSpecWhereInput[];
    variantId?: Prisma.IntFilter<"VariantSpec"> | number;
    key?: Prisma.StringFilter<"VariantSpec"> | string;
    value?: Prisma.StringFilter<"VariantSpec"> | string;
    unit?: Prisma.StringNullableFilter<"VariantSpec"> | string | null;
    variant?: Prisma.XOR<Prisma.VariantScalarRelationFilter, Prisma.VariantWhereInput>;
}, "id">;
export type VariantSpecOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    variantId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    unit?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.VariantSpecCountOrderByAggregateInput;
    _avg?: Prisma.VariantSpecAvgOrderByAggregateInput;
    _max?: Prisma.VariantSpecMaxOrderByAggregateInput;
    _min?: Prisma.VariantSpecMinOrderByAggregateInput;
    _sum?: Prisma.VariantSpecSumOrderByAggregateInput;
};
export type VariantSpecScalarWhereWithAggregatesInput = {
    AND?: Prisma.VariantSpecScalarWhereWithAggregatesInput | Prisma.VariantSpecScalarWhereWithAggregatesInput[];
    OR?: Prisma.VariantSpecScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VariantSpecScalarWhereWithAggregatesInput | Prisma.VariantSpecScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"VariantSpec"> | number;
    variantId?: Prisma.IntWithAggregatesFilter<"VariantSpec"> | number;
    key?: Prisma.StringWithAggregatesFilter<"VariantSpec"> | string;
    value?: Prisma.StringWithAggregatesFilter<"VariantSpec"> | string;
    unit?: Prisma.StringNullableWithAggregatesFilter<"VariantSpec"> | string | null;
};
export type VariantSpecCreateInput = {
    key: string;
    value: string;
    unit?: string | null;
    variant: Prisma.VariantCreateNestedOneWithoutSpecsInput;
};
export type VariantSpecUncheckedCreateInput = {
    id?: number;
    variantId: number;
    key: string;
    value: string;
    unit?: string | null;
};
export type VariantSpecUpdateInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    variant?: Prisma.VariantUpdateOneRequiredWithoutSpecsNestedInput;
};
export type VariantSpecUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    variantId?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type VariantSpecCreateManyInput = {
    id?: number;
    variantId: number;
    key: string;
    value: string;
    unit?: string | null;
};
export type VariantSpecUpdateManyMutationInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type VariantSpecUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    variantId?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type VariantSpecListRelationFilter = {
    every?: Prisma.VariantSpecWhereInput;
    some?: Prisma.VariantSpecWhereInput;
    none?: Prisma.VariantSpecWhereInput;
};
export type VariantSpecOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type VariantSpecOrderByRelevanceInput = {
    fields: Prisma.VariantSpecOrderByRelevanceFieldEnum | Prisma.VariantSpecOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type VariantSpecCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    variantId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
};
export type VariantSpecAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    variantId?: Prisma.SortOrder;
};
export type VariantSpecMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    variantId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
};
export type VariantSpecMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    variantId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
};
export type VariantSpecSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    variantId?: Prisma.SortOrder;
};
export type VariantSpecCreateNestedManyWithoutVariantInput = {
    create?: Prisma.XOR<Prisma.VariantSpecCreateWithoutVariantInput, Prisma.VariantSpecUncheckedCreateWithoutVariantInput> | Prisma.VariantSpecCreateWithoutVariantInput[] | Prisma.VariantSpecUncheckedCreateWithoutVariantInput[];
    connectOrCreate?: Prisma.VariantSpecCreateOrConnectWithoutVariantInput | Prisma.VariantSpecCreateOrConnectWithoutVariantInput[];
    createMany?: Prisma.VariantSpecCreateManyVariantInputEnvelope;
    connect?: Prisma.VariantSpecWhereUniqueInput | Prisma.VariantSpecWhereUniqueInput[];
};
export type VariantSpecUncheckedCreateNestedManyWithoutVariantInput = {
    create?: Prisma.XOR<Prisma.VariantSpecCreateWithoutVariantInput, Prisma.VariantSpecUncheckedCreateWithoutVariantInput> | Prisma.VariantSpecCreateWithoutVariantInput[] | Prisma.VariantSpecUncheckedCreateWithoutVariantInput[];
    connectOrCreate?: Prisma.VariantSpecCreateOrConnectWithoutVariantInput | Prisma.VariantSpecCreateOrConnectWithoutVariantInput[];
    createMany?: Prisma.VariantSpecCreateManyVariantInputEnvelope;
    connect?: Prisma.VariantSpecWhereUniqueInput | Prisma.VariantSpecWhereUniqueInput[];
};
export type VariantSpecUpdateManyWithoutVariantNestedInput = {
    create?: Prisma.XOR<Prisma.VariantSpecCreateWithoutVariantInput, Prisma.VariantSpecUncheckedCreateWithoutVariantInput> | Prisma.VariantSpecCreateWithoutVariantInput[] | Prisma.VariantSpecUncheckedCreateWithoutVariantInput[];
    connectOrCreate?: Prisma.VariantSpecCreateOrConnectWithoutVariantInput | Prisma.VariantSpecCreateOrConnectWithoutVariantInput[];
    upsert?: Prisma.VariantSpecUpsertWithWhereUniqueWithoutVariantInput | Prisma.VariantSpecUpsertWithWhereUniqueWithoutVariantInput[];
    createMany?: Prisma.VariantSpecCreateManyVariantInputEnvelope;
    set?: Prisma.VariantSpecWhereUniqueInput | Prisma.VariantSpecWhereUniqueInput[];
    disconnect?: Prisma.VariantSpecWhereUniqueInput | Prisma.VariantSpecWhereUniqueInput[];
    delete?: Prisma.VariantSpecWhereUniqueInput | Prisma.VariantSpecWhereUniqueInput[];
    connect?: Prisma.VariantSpecWhereUniqueInput | Prisma.VariantSpecWhereUniqueInput[];
    update?: Prisma.VariantSpecUpdateWithWhereUniqueWithoutVariantInput | Prisma.VariantSpecUpdateWithWhereUniqueWithoutVariantInput[];
    updateMany?: Prisma.VariantSpecUpdateManyWithWhereWithoutVariantInput | Prisma.VariantSpecUpdateManyWithWhereWithoutVariantInput[];
    deleteMany?: Prisma.VariantSpecScalarWhereInput | Prisma.VariantSpecScalarWhereInput[];
};
export type VariantSpecUncheckedUpdateManyWithoutVariantNestedInput = {
    create?: Prisma.XOR<Prisma.VariantSpecCreateWithoutVariantInput, Prisma.VariantSpecUncheckedCreateWithoutVariantInput> | Prisma.VariantSpecCreateWithoutVariantInput[] | Prisma.VariantSpecUncheckedCreateWithoutVariantInput[];
    connectOrCreate?: Prisma.VariantSpecCreateOrConnectWithoutVariantInput | Prisma.VariantSpecCreateOrConnectWithoutVariantInput[];
    upsert?: Prisma.VariantSpecUpsertWithWhereUniqueWithoutVariantInput | Prisma.VariantSpecUpsertWithWhereUniqueWithoutVariantInput[];
    createMany?: Prisma.VariantSpecCreateManyVariantInputEnvelope;
    set?: Prisma.VariantSpecWhereUniqueInput | Prisma.VariantSpecWhereUniqueInput[];
    disconnect?: Prisma.VariantSpecWhereUniqueInput | Prisma.VariantSpecWhereUniqueInput[];
    delete?: Prisma.VariantSpecWhereUniqueInput | Prisma.VariantSpecWhereUniqueInput[];
    connect?: Prisma.VariantSpecWhereUniqueInput | Prisma.VariantSpecWhereUniqueInput[];
    update?: Prisma.VariantSpecUpdateWithWhereUniqueWithoutVariantInput | Prisma.VariantSpecUpdateWithWhereUniqueWithoutVariantInput[];
    updateMany?: Prisma.VariantSpecUpdateManyWithWhereWithoutVariantInput | Prisma.VariantSpecUpdateManyWithWhereWithoutVariantInput[];
    deleteMany?: Prisma.VariantSpecScalarWhereInput | Prisma.VariantSpecScalarWhereInput[];
};
export type VariantSpecCreateWithoutVariantInput = {
    key: string;
    value: string;
    unit?: string | null;
};
export type VariantSpecUncheckedCreateWithoutVariantInput = {
    id?: number;
    key: string;
    value: string;
    unit?: string | null;
};
export type VariantSpecCreateOrConnectWithoutVariantInput = {
    where: Prisma.VariantSpecWhereUniqueInput;
    create: Prisma.XOR<Prisma.VariantSpecCreateWithoutVariantInput, Prisma.VariantSpecUncheckedCreateWithoutVariantInput>;
};
export type VariantSpecCreateManyVariantInputEnvelope = {
    data: Prisma.VariantSpecCreateManyVariantInput | Prisma.VariantSpecCreateManyVariantInput[];
    skipDuplicates?: boolean;
};
export type VariantSpecUpsertWithWhereUniqueWithoutVariantInput = {
    where: Prisma.VariantSpecWhereUniqueInput;
    update: Prisma.XOR<Prisma.VariantSpecUpdateWithoutVariantInput, Prisma.VariantSpecUncheckedUpdateWithoutVariantInput>;
    create: Prisma.XOR<Prisma.VariantSpecCreateWithoutVariantInput, Prisma.VariantSpecUncheckedCreateWithoutVariantInput>;
};
export type VariantSpecUpdateWithWhereUniqueWithoutVariantInput = {
    where: Prisma.VariantSpecWhereUniqueInput;
    data: Prisma.XOR<Prisma.VariantSpecUpdateWithoutVariantInput, Prisma.VariantSpecUncheckedUpdateWithoutVariantInput>;
};
export type VariantSpecUpdateManyWithWhereWithoutVariantInput = {
    where: Prisma.VariantSpecScalarWhereInput;
    data: Prisma.XOR<Prisma.VariantSpecUpdateManyMutationInput, Prisma.VariantSpecUncheckedUpdateManyWithoutVariantInput>;
};
export type VariantSpecScalarWhereInput = {
    AND?: Prisma.VariantSpecScalarWhereInput | Prisma.VariantSpecScalarWhereInput[];
    OR?: Prisma.VariantSpecScalarWhereInput[];
    NOT?: Prisma.VariantSpecScalarWhereInput | Prisma.VariantSpecScalarWhereInput[];
    id?: Prisma.IntFilter<"VariantSpec"> | number;
    variantId?: Prisma.IntFilter<"VariantSpec"> | number;
    key?: Prisma.StringFilter<"VariantSpec"> | string;
    value?: Prisma.StringFilter<"VariantSpec"> | string;
    unit?: Prisma.StringNullableFilter<"VariantSpec"> | string | null;
};
export type VariantSpecCreateManyVariantInput = {
    id?: number;
    key: string;
    value: string;
    unit?: string | null;
};
export type VariantSpecUpdateWithoutVariantInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type VariantSpecUncheckedUpdateWithoutVariantInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type VariantSpecUncheckedUpdateManyWithoutVariantInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type VariantSpecSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    variantId?: boolean;
    key?: boolean;
    value?: boolean;
    unit?: boolean;
    variant?: boolean | Prisma.VariantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["variantSpec"]>;
export type VariantSpecSelectScalar = {
    id?: boolean;
    variantId?: boolean;
    key?: boolean;
    value?: boolean;
    unit?: boolean;
};
export type VariantSpecOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "variantId" | "key" | "value" | "unit", ExtArgs["result"]["variantSpec"]>;
export type VariantSpecInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    variant?: boolean | Prisma.VariantDefaultArgs<ExtArgs>;
};
export type $VariantSpecPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "VariantSpec";
    objects: {
        variant: Prisma.$VariantPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        variantId: number;
        key: string;
        value: string;
        unit: string | null;
    }, ExtArgs["result"]["variantSpec"]>;
    composites: {};
};
export type VariantSpecGetPayload<S extends boolean | null | undefined | VariantSpecDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VariantSpecPayload, S>;
export type VariantSpecCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VariantSpecFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VariantSpecCountAggregateInputType | true;
};
export interface VariantSpecDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['VariantSpec'];
        meta: {
            name: 'VariantSpec';
        };
    };
    findUnique<T extends VariantSpecFindUniqueArgs>(args: Prisma.SelectSubset<T, VariantSpecFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VariantSpecClient<runtime.Types.Result.GetResult<Prisma.$VariantSpecPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends VariantSpecFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VariantSpecFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VariantSpecClient<runtime.Types.Result.GetResult<Prisma.$VariantSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends VariantSpecFindFirstArgs>(args?: Prisma.SelectSubset<T, VariantSpecFindFirstArgs<ExtArgs>>): Prisma.Prisma__VariantSpecClient<runtime.Types.Result.GetResult<Prisma.$VariantSpecPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends VariantSpecFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VariantSpecFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VariantSpecClient<runtime.Types.Result.GetResult<Prisma.$VariantSpecPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends VariantSpecFindManyArgs>(args?: Prisma.SelectSubset<T, VariantSpecFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VariantSpecPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends VariantSpecCreateArgs>(args: Prisma.SelectSubset<T, VariantSpecCreateArgs<ExtArgs>>): Prisma.Prisma__VariantSpecClient<runtime.Types.Result.GetResult<Prisma.$VariantSpecPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends VariantSpecCreateManyArgs>(args?: Prisma.SelectSubset<T, VariantSpecCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends VariantSpecDeleteArgs>(args: Prisma.SelectSubset<T, VariantSpecDeleteArgs<ExtArgs>>): Prisma.Prisma__VariantSpecClient<runtime.Types.Result.GetResult<Prisma.$VariantSpecPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends VariantSpecUpdateArgs>(args: Prisma.SelectSubset<T, VariantSpecUpdateArgs<ExtArgs>>): Prisma.Prisma__VariantSpecClient<runtime.Types.Result.GetResult<Prisma.$VariantSpecPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends VariantSpecDeleteManyArgs>(args?: Prisma.SelectSubset<T, VariantSpecDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends VariantSpecUpdateManyArgs>(args: Prisma.SelectSubset<T, VariantSpecUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends VariantSpecUpsertArgs>(args: Prisma.SelectSubset<T, VariantSpecUpsertArgs<ExtArgs>>): Prisma.Prisma__VariantSpecClient<runtime.Types.Result.GetResult<Prisma.$VariantSpecPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends VariantSpecCountArgs>(args?: Prisma.Subset<T, VariantSpecCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VariantSpecCountAggregateOutputType> : number>;
    aggregate<T extends VariantSpecAggregateArgs>(args: Prisma.Subset<T, VariantSpecAggregateArgs>): Prisma.PrismaPromise<GetVariantSpecAggregateType<T>>;
    groupBy<T extends VariantSpecGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VariantSpecGroupByArgs['orderBy'];
    } : {
        orderBy?: VariantSpecGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VariantSpecGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariantSpecGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: VariantSpecFieldRefs;
}
export interface Prisma__VariantSpecClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    variant<T extends Prisma.VariantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VariantDefaultArgs<ExtArgs>>): Prisma.Prisma__VariantClient<runtime.Types.Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface VariantSpecFieldRefs {
    readonly id: Prisma.FieldRef<"VariantSpec", 'Int'>;
    readonly variantId: Prisma.FieldRef<"VariantSpec", 'Int'>;
    readonly key: Prisma.FieldRef<"VariantSpec", 'String'>;
    readonly value: Prisma.FieldRef<"VariantSpec", 'String'>;
    readonly unit: Prisma.FieldRef<"VariantSpec", 'String'>;
}
export type VariantSpecFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VariantSpecSelect<ExtArgs> | null;
    omit?: Prisma.VariantSpecOmit<ExtArgs> | null;
    include?: Prisma.VariantSpecInclude<ExtArgs> | null;
    where: Prisma.VariantSpecWhereUniqueInput;
};
export type VariantSpecFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VariantSpecSelect<ExtArgs> | null;
    omit?: Prisma.VariantSpecOmit<ExtArgs> | null;
    include?: Prisma.VariantSpecInclude<ExtArgs> | null;
    where: Prisma.VariantSpecWhereUniqueInput;
};
export type VariantSpecFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VariantSpecSelect<ExtArgs> | null;
    omit?: Prisma.VariantSpecOmit<ExtArgs> | null;
    include?: Prisma.VariantSpecInclude<ExtArgs> | null;
    where?: Prisma.VariantSpecWhereInput;
    orderBy?: Prisma.VariantSpecOrderByWithRelationInput | Prisma.VariantSpecOrderByWithRelationInput[];
    cursor?: Prisma.VariantSpecWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VariantSpecScalarFieldEnum | Prisma.VariantSpecScalarFieldEnum[];
};
export type VariantSpecFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VariantSpecSelect<ExtArgs> | null;
    omit?: Prisma.VariantSpecOmit<ExtArgs> | null;
    include?: Prisma.VariantSpecInclude<ExtArgs> | null;
    where?: Prisma.VariantSpecWhereInput;
    orderBy?: Prisma.VariantSpecOrderByWithRelationInput | Prisma.VariantSpecOrderByWithRelationInput[];
    cursor?: Prisma.VariantSpecWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VariantSpecScalarFieldEnum | Prisma.VariantSpecScalarFieldEnum[];
};
export type VariantSpecFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VariantSpecSelect<ExtArgs> | null;
    omit?: Prisma.VariantSpecOmit<ExtArgs> | null;
    include?: Prisma.VariantSpecInclude<ExtArgs> | null;
    where?: Prisma.VariantSpecWhereInput;
    orderBy?: Prisma.VariantSpecOrderByWithRelationInput | Prisma.VariantSpecOrderByWithRelationInput[];
    cursor?: Prisma.VariantSpecWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VariantSpecScalarFieldEnum | Prisma.VariantSpecScalarFieldEnum[];
};
export type VariantSpecCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VariantSpecSelect<ExtArgs> | null;
    omit?: Prisma.VariantSpecOmit<ExtArgs> | null;
    include?: Prisma.VariantSpecInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VariantSpecCreateInput, Prisma.VariantSpecUncheckedCreateInput>;
};
export type VariantSpecCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.VariantSpecCreateManyInput | Prisma.VariantSpecCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VariantSpecUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VariantSpecSelect<ExtArgs> | null;
    omit?: Prisma.VariantSpecOmit<ExtArgs> | null;
    include?: Prisma.VariantSpecInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VariantSpecUpdateInput, Prisma.VariantSpecUncheckedUpdateInput>;
    where: Prisma.VariantSpecWhereUniqueInput;
};
export type VariantSpecUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.VariantSpecUpdateManyMutationInput, Prisma.VariantSpecUncheckedUpdateManyInput>;
    where?: Prisma.VariantSpecWhereInput;
    limit?: number;
};
export type VariantSpecUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VariantSpecSelect<ExtArgs> | null;
    omit?: Prisma.VariantSpecOmit<ExtArgs> | null;
    include?: Prisma.VariantSpecInclude<ExtArgs> | null;
    where: Prisma.VariantSpecWhereUniqueInput;
    create: Prisma.XOR<Prisma.VariantSpecCreateInput, Prisma.VariantSpecUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.VariantSpecUpdateInput, Prisma.VariantSpecUncheckedUpdateInput>;
};
export type VariantSpecDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VariantSpecSelect<ExtArgs> | null;
    omit?: Prisma.VariantSpecOmit<ExtArgs> | null;
    include?: Prisma.VariantSpecInclude<ExtArgs> | null;
    where: Prisma.VariantSpecWhereUniqueInput;
};
export type VariantSpecDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VariantSpecWhereInput;
    limit?: number;
};
export type VariantSpecDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VariantSpecSelect<ExtArgs> | null;
    omit?: Prisma.VariantSpecOmit<ExtArgs> | null;
    include?: Prisma.VariantSpecInclude<ExtArgs> | null;
};
export {};
