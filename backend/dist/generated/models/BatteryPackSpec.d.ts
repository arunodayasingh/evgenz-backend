import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type BatteryPackSpecModel = runtime.Types.Result.DefaultSelection<Prisma.$BatteryPackSpecPayload>;
export type AggregateBatteryPackSpec = {
    _count: BatteryPackSpecCountAggregateOutputType | null;
    _avg: BatteryPackSpecAvgAggregateOutputType | null;
    _sum: BatteryPackSpecSumAggregateOutputType | null;
    _min: BatteryPackSpecMinAggregateOutputType | null;
    _max: BatteryPackSpecMaxAggregateOutputType | null;
};
export type BatteryPackSpecAvgAggregateOutputType = {
    id: number | null;
    batteryPackId: number | null;
};
export type BatteryPackSpecSumAggregateOutputType = {
    id: number | null;
    batteryPackId: number | null;
};
export type BatteryPackSpecMinAggregateOutputType = {
    id: number | null;
    batteryPackId: number | null;
    key: string | null;
    value: string | null;
    unit: string | null;
};
export type BatteryPackSpecMaxAggregateOutputType = {
    id: number | null;
    batteryPackId: number | null;
    key: string | null;
    value: string | null;
    unit: string | null;
};
export type BatteryPackSpecCountAggregateOutputType = {
    id: number;
    batteryPackId: number;
    key: number;
    value: number;
    unit: number;
    _all: number;
};
export type BatteryPackSpecAvgAggregateInputType = {
    id?: true;
    batteryPackId?: true;
};
export type BatteryPackSpecSumAggregateInputType = {
    id?: true;
    batteryPackId?: true;
};
export type BatteryPackSpecMinAggregateInputType = {
    id?: true;
    batteryPackId?: true;
    key?: true;
    value?: true;
    unit?: true;
};
export type BatteryPackSpecMaxAggregateInputType = {
    id?: true;
    batteryPackId?: true;
    key?: true;
    value?: true;
    unit?: true;
};
export type BatteryPackSpecCountAggregateInputType = {
    id?: true;
    batteryPackId?: true;
    key?: true;
    value?: true;
    unit?: true;
    _all?: true;
};
export type BatteryPackSpecAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BatteryPackSpecWhereInput;
    orderBy?: Prisma.BatteryPackSpecOrderByWithRelationInput | Prisma.BatteryPackSpecOrderByWithRelationInput[];
    cursor?: Prisma.BatteryPackSpecWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BatteryPackSpecCountAggregateInputType;
    _avg?: BatteryPackSpecAvgAggregateInputType;
    _sum?: BatteryPackSpecSumAggregateInputType;
    _min?: BatteryPackSpecMinAggregateInputType;
    _max?: BatteryPackSpecMaxAggregateInputType;
};
export type GetBatteryPackSpecAggregateType<T extends BatteryPackSpecAggregateArgs> = {
    [P in keyof T & keyof AggregateBatteryPackSpec]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBatteryPackSpec[P]> : Prisma.GetScalarType<T[P], AggregateBatteryPackSpec[P]>;
};
export type BatteryPackSpecGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BatteryPackSpecWhereInput;
    orderBy?: Prisma.BatteryPackSpecOrderByWithAggregationInput | Prisma.BatteryPackSpecOrderByWithAggregationInput[];
    by: Prisma.BatteryPackSpecScalarFieldEnum[] | Prisma.BatteryPackSpecScalarFieldEnum;
    having?: Prisma.BatteryPackSpecScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BatteryPackSpecCountAggregateInputType | true;
    _avg?: BatteryPackSpecAvgAggregateInputType;
    _sum?: BatteryPackSpecSumAggregateInputType;
    _min?: BatteryPackSpecMinAggregateInputType;
    _max?: BatteryPackSpecMaxAggregateInputType;
};
export type BatteryPackSpecGroupByOutputType = {
    id: number;
    batteryPackId: number;
    key: string;
    value: string;
    unit: string | null;
    _count: BatteryPackSpecCountAggregateOutputType | null;
    _avg: BatteryPackSpecAvgAggregateOutputType | null;
    _sum: BatteryPackSpecSumAggregateOutputType | null;
    _min: BatteryPackSpecMinAggregateOutputType | null;
    _max: BatteryPackSpecMaxAggregateOutputType | null;
};
type GetBatteryPackSpecGroupByPayload<T extends BatteryPackSpecGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BatteryPackSpecGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BatteryPackSpecGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BatteryPackSpecGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BatteryPackSpecGroupByOutputType[P]>;
}>>;
export type BatteryPackSpecWhereInput = {
    AND?: Prisma.BatteryPackSpecWhereInput | Prisma.BatteryPackSpecWhereInput[];
    OR?: Prisma.BatteryPackSpecWhereInput[];
    NOT?: Prisma.BatteryPackSpecWhereInput | Prisma.BatteryPackSpecWhereInput[];
    id?: Prisma.IntFilter<"BatteryPackSpec"> | number;
    batteryPackId?: Prisma.IntFilter<"BatteryPackSpec"> | number;
    key?: Prisma.StringFilter<"BatteryPackSpec"> | string;
    value?: Prisma.StringFilter<"BatteryPackSpec"> | string;
    unit?: Prisma.StringNullableFilter<"BatteryPackSpec"> | string | null;
    batteryPack?: Prisma.XOR<Prisma.BatteryPackScalarRelationFilter, Prisma.BatteryPackWhereInput>;
};
export type BatteryPackSpecOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    batteryPackId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    unit?: Prisma.SortOrderInput | Prisma.SortOrder;
    batteryPack?: Prisma.BatteryPackOrderByWithRelationInput;
    _relevance?: Prisma.BatteryPackSpecOrderByRelevanceInput;
};
export type BatteryPackSpecWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.BatteryPackSpecWhereInput | Prisma.BatteryPackSpecWhereInput[];
    OR?: Prisma.BatteryPackSpecWhereInput[];
    NOT?: Prisma.BatteryPackSpecWhereInput | Prisma.BatteryPackSpecWhereInput[];
    batteryPackId?: Prisma.IntFilter<"BatteryPackSpec"> | number;
    key?: Prisma.StringFilter<"BatteryPackSpec"> | string;
    value?: Prisma.StringFilter<"BatteryPackSpec"> | string;
    unit?: Prisma.StringNullableFilter<"BatteryPackSpec"> | string | null;
    batteryPack?: Prisma.XOR<Prisma.BatteryPackScalarRelationFilter, Prisma.BatteryPackWhereInput>;
}, "id">;
export type BatteryPackSpecOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    batteryPackId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    unit?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.BatteryPackSpecCountOrderByAggregateInput;
    _avg?: Prisma.BatteryPackSpecAvgOrderByAggregateInput;
    _max?: Prisma.BatteryPackSpecMaxOrderByAggregateInput;
    _min?: Prisma.BatteryPackSpecMinOrderByAggregateInput;
    _sum?: Prisma.BatteryPackSpecSumOrderByAggregateInput;
};
export type BatteryPackSpecScalarWhereWithAggregatesInput = {
    AND?: Prisma.BatteryPackSpecScalarWhereWithAggregatesInput | Prisma.BatteryPackSpecScalarWhereWithAggregatesInput[];
    OR?: Prisma.BatteryPackSpecScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BatteryPackSpecScalarWhereWithAggregatesInput | Prisma.BatteryPackSpecScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"BatteryPackSpec"> | number;
    batteryPackId?: Prisma.IntWithAggregatesFilter<"BatteryPackSpec"> | number;
    key?: Prisma.StringWithAggregatesFilter<"BatteryPackSpec"> | string;
    value?: Prisma.StringWithAggregatesFilter<"BatteryPackSpec"> | string;
    unit?: Prisma.StringNullableWithAggregatesFilter<"BatteryPackSpec"> | string | null;
};
export type BatteryPackSpecCreateInput = {
    key: string;
    value: string;
    unit?: string | null;
    batteryPack: Prisma.BatteryPackCreateNestedOneWithoutSpecsInput;
};
export type BatteryPackSpecUncheckedCreateInput = {
    id?: number;
    batteryPackId: number;
    key: string;
    value: string;
    unit?: string | null;
};
export type BatteryPackSpecUpdateInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    batteryPack?: Prisma.BatteryPackUpdateOneRequiredWithoutSpecsNestedInput;
};
export type BatteryPackSpecUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    batteryPackId?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BatteryPackSpecCreateManyInput = {
    id?: number;
    batteryPackId: number;
    key: string;
    value: string;
    unit?: string | null;
};
export type BatteryPackSpecUpdateManyMutationInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BatteryPackSpecUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    batteryPackId?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BatteryPackSpecListRelationFilter = {
    every?: Prisma.BatteryPackSpecWhereInput;
    some?: Prisma.BatteryPackSpecWhereInput;
    none?: Prisma.BatteryPackSpecWhereInput;
};
export type BatteryPackSpecOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BatteryPackSpecOrderByRelevanceInput = {
    fields: Prisma.BatteryPackSpecOrderByRelevanceFieldEnum | Prisma.BatteryPackSpecOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type BatteryPackSpecCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    batteryPackId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
};
export type BatteryPackSpecAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    batteryPackId?: Prisma.SortOrder;
};
export type BatteryPackSpecMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    batteryPackId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
};
export type BatteryPackSpecMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    batteryPackId?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
};
export type BatteryPackSpecSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    batteryPackId?: Prisma.SortOrder;
};
export type BatteryPackSpecCreateNestedManyWithoutBatteryPackInput = {
    create?: Prisma.XOR<Prisma.BatteryPackSpecCreateWithoutBatteryPackInput, Prisma.BatteryPackSpecUncheckedCreateWithoutBatteryPackInput> | Prisma.BatteryPackSpecCreateWithoutBatteryPackInput[] | Prisma.BatteryPackSpecUncheckedCreateWithoutBatteryPackInput[];
    connectOrCreate?: Prisma.BatteryPackSpecCreateOrConnectWithoutBatteryPackInput | Prisma.BatteryPackSpecCreateOrConnectWithoutBatteryPackInput[];
    createMany?: Prisma.BatteryPackSpecCreateManyBatteryPackInputEnvelope;
    connect?: Prisma.BatteryPackSpecWhereUniqueInput | Prisma.BatteryPackSpecWhereUniqueInput[];
};
export type BatteryPackSpecUncheckedCreateNestedManyWithoutBatteryPackInput = {
    create?: Prisma.XOR<Prisma.BatteryPackSpecCreateWithoutBatteryPackInput, Prisma.BatteryPackSpecUncheckedCreateWithoutBatteryPackInput> | Prisma.BatteryPackSpecCreateWithoutBatteryPackInput[] | Prisma.BatteryPackSpecUncheckedCreateWithoutBatteryPackInput[];
    connectOrCreate?: Prisma.BatteryPackSpecCreateOrConnectWithoutBatteryPackInput | Prisma.BatteryPackSpecCreateOrConnectWithoutBatteryPackInput[];
    createMany?: Prisma.BatteryPackSpecCreateManyBatteryPackInputEnvelope;
    connect?: Prisma.BatteryPackSpecWhereUniqueInput | Prisma.BatteryPackSpecWhereUniqueInput[];
};
export type BatteryPackSpecUpdateManyWithoutBatteryPackNestedInput = {
    create?: Prisma.XOR<Prisma.BatteryPackSpecCreateWithoutBatteryPackInput, Prisma.BatteryPackSpecUncheckedCreateWithoutBatteryPackInput> | Prisma.BatteryPackSpecCreateWithoutBatteryPackInput[] | Prisma.BatteryPackSpecUncheckedCreateWithoutBatteryPackInput[];
    connectOrCreate?: Prisma.BatteryPackSpecCreateOrConnectWithoutBatteryPackInput | Prisma.BatteryPackSpecCreateOrConnectWithoutBatteryPackInput[];
    upsert?: Prisma.BatteryPackSpecUpsertWithWhereUniqueWithoutBatteryPackInput | Prisma.BatteryPackSpecUpsertWithWhereUniqueWithoutBatteryPackInput[];
    createMany?: Prisma.BatteryPackSpecCreateManyBatteryPackInputEnvelope;
    set?: Prisma.BatteryPackSpecWhereUniqueInput | Prisma.BatteryPackSpecWhereUniqueInput[];
    disconnect?: Prisma.BatteryPackSpecWhereUniqueInput | Prisma.BatteryPackSpecWhereUniqueInput[];
    delete?: Prisma.BatteryPackSpecWhereUniqueInput | Prisma.BatteryPackSpecWhereUniqueInput[];
    connect?: Prisma.BatteryPackSpecWhereUniqueInput | Prisma.BatteryPackSpecWhereUniqueInput[];
    update?: Prisma.BatteryPackSpecUpdateWithWhereUniqueWithoutBatteryPackInput | Prisma.BatteryPackSpecUpdateWithWhereUniqueWithoutBatteryPackInput[];
    updateMany?: Prisma.BatteryPackSpecUpdateManyWithWhereWithoutBatteryPackInput | Prisma.BatteryPackSpecUpdateManyWithWhereWithoutBatteryPackInput[];
    deleteMany?: Prisma.BatteryPackSpecScalarWhereInput | Prisma.BatteryPackSpecScalarWhereInput[];
};
export type BatteryPackSpecUncheckedUpdateManyWithoutBatteryPackNestedInput = {
    create?: Prisma.XOR<Prisma.BatteryPackSpecCreateWithoutBatteryPackInput, Prisma.BatteryPackSpecUncheckedCreateWithoutBatteryPackInput> | Prisma.BatteryPackSpecCreateWithoutBatteryPackInput[] | Prisma.BatteryPackSpecUncheckedCreateWithoutBatteryPackInput[];
    connectOrCreate?: Prisma.BatteryPackSpecCreateOrConnectWithoutBatteryPackInput | Prisma.BatteryPackSpecCreateOrConnectWithoutBatteryPackInput[];
    upsert?: Prisma.BatteryPackSpecUpsertWithWhereUniqueWithoutBatteryPackInput | Prisma.BatteryPackSpecUpsertWithWhereUniqueWithoutBatteryPackInput[];
    createMany?: Prisma.BatteryPackSpecCreateManyBatteryPackInputEnvelope;
    set?: Prisma.BatteryPackSpecWhereUniqueInput | Prisma.BatteryPackSpecWhereUniqueInput[];
    disconnect?: Prisma.BatteryPackSpecWhereUniqueInput | Prisma.BatteryPackSpecWhereUniqueInput[];
    delete?: Prisma.BatteryPackSpecWhereUniqueInput | Prisma.BatteryPackSpecWhereUniqueInput[];
    connect?: Prisma.BatteryPackSpecWhereUniqueInput | Prisma.BatteryPackSpecWhereUniqueInput[];
    update?: Prisma.BatteryPackSpecUpdateWithWhereUniqueWithoutBatteryPackInput | Prisma.BatteryPackSpecUpdateWithWhereUniqueWithoutBatteryPackInput[];
    updateMany?: Prisma.BatteryPackSpecUpdateManyWithWhereWithoutBatteryPackInput | Prisma.BatteryPackSpecUpdateManyWithWhereWithoutBatteryPackInput[];
    deleteMany?: Prisma.BatteryPackSpecScalarWhereInput | Prisma.BatteryPackSpecScalarWhereInput[];
};
export type BatteryPackSpecCreateWithoutBatteryPackInput = {
    key: string;
    value: string;
    unit?: string | null;
};
export type BatteryPackSpecUncheckedCreateWithoutBatteryPackInput = {
    id?: number;
    key: string;
    value: string;
    unit?: string | null;
};
export type BatteryPackSpecCreateOrConnectWithoutBatteryPackInput = {
    where: Prisma.BatteryPackSpecWhereUniqueInput;
    create: Prisma.XOR<Prisma.BatteryPackSpecCreateWithoutBatteryPackInput, Prisma.BatteryPackSpecUncheckedCreateWithoutBatteryPackInput>;
};
export type BatteryPackSpecCreateManyBatteryPackInputEnvelope = {
    data: Prisma.BatteryPackSpecCreateManyBatteryPackInput | Prisma.BatteryPackSpecCreateManyBatteryPackInput[];
    skipDuplicates?: boolean;
};
export type BatteryPackSpecUpsertWithWhereUniqueWithoutBatteryPackInput = {
    where: Prisma.BatteryPackSpecWhereUniqueInput;
    update: Prisma.XOR<Prisma.BatteryPackSpecUpdateWithoutBatteryPackInput, Prisma.BatteryPackSpecUncheckedUpdateWithoutBatteryPackInput>;
    create: Prisma.XOR<Prisma.BatteryPackSpecCreateWithoutBatteryPackInput, Prisma.BatteryPackSpecUncheckedCreateWithoutBatteryPackInput>;
};
export type BatteryPackSpecUpdateWithWhereUniqueWithoutBatteryPackInput = {
    where: Prisma.BatteryPackSpecWhereUniqueInput;
    data: Prisma.XOR<Prisma.BatteryPackSpecUpdateWithoutBatteryPackInput, Prisma.BatteryPackSpecUncheckedUpdateWithoutBatteryPackInput>;
};
export type BatteryPackSpecUpdateManyWithWhereWithoutBatteryPackInput = {
    where: Prisma.BatteryPackSpecScalarWhereInput;
    data: Prisma.XOR<Prisma.BatteryPackSpecUpdateManyMutationInput, Prisma.BatteryPackSpecUncheckedUpdateManyWithoutBatteryPackInput>;
};
export type BatteryPackSpecScalarWhereInput = {
    AND?: Prisma.BatteryPackSpecScalarWhereInput | Prisma.BatteryPackSpecScalarWhereInput[];
    OR?: Prisma.BatteryPackSpecScalarWhereInput[];
    NOT?: Prisma.BatteryPackSpecScalarWhereInput | Prisma.BatteryPackSpecScalarWhereInput[];
    id?: Prisma.IntFilter<"BatteryPackSpec"> | number;
    batteryPackId?: Prisma.IntFilter<"BatteryPackSpec"> | number;
    key?: Prisma.StringFilter<"BatteryPackSpec"> | string;
    value?: Prisma.StringFilter<"BatteryPackSpec"> | string;
    unit?: Prisma.StringNullableFilter<"BatteryPackSpec"> | string | null;
};
export type BatteryPackSpecCreateManyBatteryPackInput = {
    id?: number;
    key: string;
    value: string;
    unit?: string | null;
};
export type BatteryPackSpecUpdateWithoutBatteryPackInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BatteryPackSpecUncheckedUpdateWithoutBatteryPackInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BatteryPackSpecUncheckedUpdateManyWithoutBatteryPackInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BatteryPackSpecSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    batteryPackId?: boolean;
    key?: boolean;
    value?: boolean;
    unit?: boolean;
    batteryPack?: boolean | Prisma.BatteryPackDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["batteryPackSpec"]>;
export type BatteryPackSpecSelectScalar = {
    id?: boolean;
    batteryPackId?: boolean;
    key?: boolean;
    value?: boolean;
    unit?: boolean;
};
export type BatteryPackSpecOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "batteryPackId" | "key" | "value" | "unit", ExtArgs["result"]["batteryPackSpec"]>;
export type BatteryPackSpecInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    batteryPack?: boolean | Prisma.BatteryPackDefaultArgs<ExtArgs>;
};
export type $BatteryPackSpecPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BatteryPackSpec";
    objects: {
        batteryPack: Prisma.$BatteryPackPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        batteryPackId: number;
        key: string;
        value: string;
        unit: string | null;
    }, ExtArgs["result"]["batteryPackSpec"]>;
    composites: {};
};
export type BatteryPackSpecGetPayload<S extends boolean | null | undefined | BatteryPackSpecDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BatteryPackSpecPayload, S>;
export type BatteryPackSpecCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BatteryPackSpecFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BatteryPackSpecCountAggregateInputType | true;
};
export interface BatteryPackSpecDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BatteryPackSpec'];
        meta: {
            name: 'BatteryPackSpec';
        };
    };
    findUnique<T extends BatteryPackSpecFindUniqueArgs>(args: Prisma.SelectSubset<T, BatteryPackSpecFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BatteryPackSpecClient<runtime.Types.Result.GetResult<Prisma.$BatteryPackSpecPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BatteryPackSpecFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BatteryPackSpecFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BatteryPackSpecClient<runtime.Types.Result.GetResult<Prisma.$BatteryPackSpecPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BatteryPackSpecFindFirstArgs>(args?: Prisma.SelectSubset<T, BatteryPackSpecFindFirstArgs<ExtArgs>>): Prisma.Prisma__BatteryPackSpecClient<runtime.Types.Result.GetResult<Prisma.$BatteryPackSpecPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BatteryPackSpecFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BatteryPackSpecFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BatteryPackSpecClient<runtime.Types.Result.GetResult<Prisma.$BatteryPackSpecPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BatteryPackSpecFindManyArgs>(args?: Prisma.SelectSubset<T, BatteryPackSpecFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BatteryPackSpecPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BatteryPackSpecCreateArgs>(args: Prisma.SelectSubset<T, BatteryPackSpecCreateArgs<ExtArgs>>): Prisma.Prisma__BatteryPackSpecClient<runtime.Types.Result.GetResult<Prisma.$BatteryPackSpecPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BatteryPackSpecCreateManyArgs>(args?: Prisma.SelectSubset<T, BatteryPackSpecCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends BatteryPackSpecDeleteArgs>(args: Prisma.SelectSubset<T, BatteryPackSpecDeleteArgs<ExtArgs>>): Prisma.Prisma__BatteryPackSpecClient<runtime.Types.Result.GetResult<Prisma.$BatteryPackSpecPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BatteryPackSpecUpdateArgs>(args: Prisma.SelectSubset<T, BatteryPackSpecUpdateArgs<ExtArgs>>): Prisma.Prisma__BatteryPackSpecClient<runtime.Types.Result.GetResult<Prisma.$BatteryPackSpecPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BatteryPackSpecDeleteManyArgs>(args?: Prisma.SelectSubset<T, BatteryPackSpecDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BatteryPackSpecUpdateManyArgs>(args: Prisma.SelectSubset<T, BatteryPackSpecUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends BatteryPackSpecUpsertArgs>(args: Prisma.SelectSubset<T, BatteryPackSpecUpsertArgs<ExtArgs>>): Prisma.Prisma__BatteryPackSpecClient<runtime.Types.Result.GetResult<Prisma.$BatteryPackSpecPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BatteryPackSpecCountArgs>(args?: Prisma.Subset<T, BatteryPackSpecCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BatteryPackSpecCountAggregateOutputType> : number>;
    aggregate<T extends BatteryPackSpecAggregateArgs>(args: Prisma.Subset<T, BatteryPackSpecAggregateArgs>): Prisma.PrismaPromise<GetBatteryPackSpecAggregateType<T>>;
    groupBy<T extends BatteryPackSpecGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BatteryPackSpecGroupByArgs['orderBy'];
    } : {
        orderBy?: BatteryPackSpecGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BatteryPackSpecGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBatteryPackSpecGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BatteryPackSpecFieldRefs;
}
export interface Prisma__BatteryPackSpecClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    batteryPack<T extends Prisma.BatteryPackDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BatteryPackDefaultArgs<ExtArgs>>): Prisma.Prisma__BatteryPackClient<runtime.Types.Result.GetResult<Prisma.$BatteryPackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BatteryPackSpecFieldRefs {
    readonly id: Prisma.FieldRef<"BatteryPackSpec", 'Int'>;
    readonly batteryPackId: Prisma.FieldRef<"BatteryPackSpec", 'Int'>;
    readonly key: Prisma.FieldRef<"BatteryPackSpec", 'String'>;
    readonly value: Prisma.FieldRef<"BatteryPackSpec", 'String'>;
    readonly unit: Prisma.FieldRef<"BatteryPackSpec", 'String'>;
}
export type BatteryPackSpecFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BatteryPackSpecSelect<ExtArgs> | null;
    omit?: Prisma.BatteryPackSpecOmit<ExtArgs> | null;
    include?: Prisma.BatteryPackSpecInclude<ExtArgs> | null;
    where: Prisma.BatteryPackSpecWhereUniqueInput;
};
export type BatteryPackSpecFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BatteryPackSpecSelect<ExtArgs> | null;
    omit?: Prisma.BatteryPackSpecOmit<ExtArgs> | null;
    include?: Prisma.BatteryPackSpecInclude<ExtArgs> | null;
    where: Prisma.BatteryPackSpecWhereUniqueInput;
};
export type BatteryPackSpecFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BatteryPackSpecSelect<ExtArgs> | null;
    omit?: Prisma.BatteryPackSpecOmit<ExtArgs> | null;
    include?: Prisma.BatteryPackSpecInclude<ExtArgs> | null;
    where?: Prisma.BatteryPackSpecWhereInput;
    orderBy?: Prisma.BatteryPackSpecOrderByWithRelationInput | Prisma.BatteryPackSpecOrderByWithRelationInput[];
    cursor?: Prisma.BatteryPackSpecWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BatteryPackSpecScalarFieldEnum | Prisma.BatteryPackSpecScalarFieldEnum[];
};
export type BatteryPackSpecFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BatteryPackSpecSelect<ExtArgs> | null;
    omit?: Prisma.BatteryPackSpecOmit<ExtArgs> | null;
    include?: Prisma.BatteryPackSpecInclude<ExtArgs> | null;
    where?: Prisma.BatteryPackSpecWhereInput;
    orderBy?: Prisma.BatteryPackSpecOrderByWithRelationInput | Prisma.BatteryPackSpecOrderByWithRelationInput[];
    cursor?: Prisma.BatteryPackSpecWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BatteryPackSpecScalarFieldEnum | Prisma.BatteryPackSpecScalarFieldEnum[];
};
export type BatteryPackSpecFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BatteryPackSpecSelect<ExtArgs> | null;
    omit?: Prisma.BatteryPackSpecOmit<ExtArgs> | null;
    include?: Prisma.BatteryPackSpecInclude<ExtArgs> | null;
    where?: Prisma.BatteryPackSpecWhereInput;
    orderBy?: Prisma.BatteryPackSpecOrderByWithRelationInput | Prisma.BatteryPackSpecOrderByWithRelationInput[];
    cursor?: Prisma.BatteryPackSpecWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BatteryPackSpecScalarFieldEnum | Prisma.BatteryPackSpecScalarFieldEnum[];
};
export type BatteryPackSpecCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BatteryPackSpecSelect<ExtArgs> | null;
    omit?: Prisma.BatteryPackSpecOmit<ExtArgs> | null;
    include?: Prisma.BatteryPackSpecInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BatteryPackSpecCreateInput, Prisma.BatteryPackSpecUncheckedCreateInput>;
};
export type BatteryPackSpecCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BatteryPackSpecCreateManyInput | Prisma.BatteryPackSpecCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BatteryPackSpecUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BatteryPackSpecSelect<ExtArgs> | null;
    omit?: Prisma.BatteryPackSpecOmit<ExtArgs> | null;
    include?: Prisma.BatteryPackSpecInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BatteryPackSpecUpdateInput, Prisma.BatteryPackSpecUncheckedUpdateInput>;
    where: Prisma.BatteryPackSpecWhereUniqueInput;
};
export type BatteryPackSpecUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BatteryPackSpecUpdateManyMutationInput, Prisma.BatteryPackSpecUncheckedUpdateManyInput>;
    where?: Prisma.BatteryPackSpecWhereInput;
    limit?: number;
};
export type BatteryPackSpecUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BatteryPackSpecSelect<ExtArgs> | null;
    omit?: Prisma.BatteryPackSpecOmit<ExtArgs> | null;
    include?: Prisma.BatteryPackSpecInclude<ExtArgs> | null;
    where: Prisma.BatteryPackSpecWhereUniqueInput;
    create: Prisma.XOR<Prisma.BatteryPackSpecCreateInput, Prisma.BatteryPackSpecUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BatteryPackSpecUpdateInput, Prisma.BatteryPackSpecUncheckedUpdateInput>;
};
export type BatteryPackSpecDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BatteryPackSpecSelect<ExtArgs> | null;
    omit?: Prisma.BatteryPackSpecOmit<ExtArgs> | null;
    include?: Prisma.BatteryPackSpecInclude<ExtArgs> | null;
    where: Prisma.BatteryPackSpecWhereUniqueInput;
};
export type BatteryPackSpecDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BatteryPackSpecWhereInput;
    limit?: number;
};
export type BatteryPackSpecDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BatteryPackSpecSelect<ExtArgs> | null;
    omit?: Prisma.BatteryPackSpecOmit<ExtArgs> | null;
    include?: Prisma.BatteryPackSpecInclude<ExtArgs> | null;
};
export {};
