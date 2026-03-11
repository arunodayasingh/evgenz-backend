import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type VariantModel = runtime.Types.Result.DefaultSelection<Prisma.$VariantPayload>;
export type AggregateVariant = {
    _count: VariantCountAggregateOutputType | null;
    _avg: VariantAvgAggregateOutputType | null;
    _sum: VariantSumAggregateOutputType | null;
    _min: VariantMinAggregateOutputType | null;
    _max: VariantMaxAggregateOutputType | null;
};
export type VariantAvgAggregateOutputType = {
    id: number | null;
    modelId: number | null;
    batteryPackId: number | null;
    price: number | null;
    topSpeed: number | null;
    acceleration0100: number | null;
    launchYear: number | null;
};
export type VariantSumAggregateOutputType = {
    id: number | null;
    modelId: number | null;
    batteryPackId: number | null;
    price: number | null;
    topSpeed: number | null;
    acceleration0100: number | null;
    launchYear: number | null;
};
export type VariantMinAggregateOutputType = {
    id: number | null;
    modelId: number | null;
    batteryPackId: number | null;
    name: string | null;
    slug: string | null;
    price: number | null;
    topSpeed: number | null;
    acceleration0100: number | null;
    launchYear: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VariantMaxAggregateOutputType = {
    id: number | null;
    modelId: number | null;
    batteryPackId: number | null;
    name: string | null;
    slug: string | null;
    price: number | null;
    topSpeed: number | null;
    acceleration0100: number | null;
    launchYear: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VariantCountAggregateOutputType = {
    id: number;
    modelId: number;
    batteryPackId: number;
    name: number;
    slug: number;
    price: number;
    topSpeed: number;
    acceleration0100: number;
    launchYear: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type VariantAvgAggregateInputType = {
    id?: true;
    modelId?: true;
    batteryPackId?: true;
    price?: true;
    topSpeed?: true;
    acceleration0100?: true;
    launchYear?: true;
};
export type VariantSumAggregateInputType = {
    id?: true;
    modelId?: true;
    batteryPackId?: true;
    price?: true;
    topSpeed?: true;
    acceleration0100?: true;
    launchYear?: true;
};
export type VariantMinAggregateInputType = {
    id?: true;
    modelId?: true;
    batteryPackId?: true;
    name?: true;
    slug?: true;
    price?: true;
    topSpeed?: true;
    acceleration0100?: true;
    launchYear?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VariantMaxAggregateInputType = {
    id?: true;
    modelId?: true;
    batteryPackId?: true;
    name?: true;
    slug?: true;
    price?: true;
    topSpeed?: true;
    acceleration0100?: true;
    launchYear?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VariantCountAggregateInputType = {
    id?: true;
    modelId?: true;
    batteryPackId?: true;
    name?: true;
    slug?: true;
    price?: true;
    topSpeed?: true;
    acceleration0100?: true;
    launchYear?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type VariantAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VariantWhereInput;
    orderBy?: Prisma.VariantOrderByWithRelationInput | Prisma.VariantOrderByWithRelationInput[];
    cursor?: Prisma.VariantWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VariantCountAggregateInputType;
    _avg?: VariantAvgAggregateInputType;
    _sum?: VariantSumAggregateInputType;
    _min?: VariantMinAggregateInputType;
    _max?: VariantMaxAggregateInputType;
};
export type GetVariantAggregateType<T extends VariantAggregateArgs> = {
    [P in keyof T & keyof AggregateVariant]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVariant[P]> : Prisma.GetScalarType<T[P], AggregateVariant[P]>;
};
export type VariantGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VariantWhereInput;
    orderBy?: Prisma.VariantOrderByWithAggregationInput | Prisma.VariantOrderByWithAggregationInput[];
    by: Prisma.VariantScalarFieldEnum[] | Prisma.VariantScalarFieldEnum;
    having?: Prisma.VariantScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VariantCountAggregateInputType | true;
    _avg?: VariantAvgAggregateInputType;
    _sum?: VariantSumAggregateInputType;
    _min?: VariantMinAggregateInputType;
    _max?: VariantMaxAggregateInputType;
};
export type VariantGroupByOutputType = {
    id: number;
    modelId: number;
    batteryPackId: number;
    name: string;
    slug: string;
    price: number | null;
    topSpeed: number | null;
    acceleration0100: number | null;
    launchYear: number | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: VariantCountAggregateOutputType | null;
    _avg: VariantAvgAggregateOutputType | null;
    _sum: VariantSumAggregateOutputType | null;
    _min: VariantMinAggregateOutputType | null;
    _max: VariantMaxAggregateOutputType | null;
};
type GetVariantGroupByPayload<T extends VariantGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VariantGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VariantGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VariantGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VariantGroupByOutputType[P]>;
}>>;
export type VariantWhereInput = {
    AND?: Prisma.VariantWhereInput | Prisma.VariantWhereInput[];
    OR?: Prisma.VariantWhereInput[];
    NOT?: Prisma.VariantWhereInput | Prisma.VariantWhereInput[];
    id?: Prisma.IntFilter<"Variant"> | number;
    modelId?: Prisma.IntFilter<"Variant"> | number;
    batteryPackId?: Prisma.IntFilter<"Variant"> | number;
    name?: Prisma.StringFilter<"Variant"> | string;
    slug?: Prisma.StringFilter<"Variant"> | string;
    price?: Prisma.FloatNullableFilter<"Variant"> | number | null;
    topSpeed?: Prisma.IntNullableFilter<"Variant"> | number | null;
    acceleration0100?: Prisma.FloatNullableFilter<"Variant"> | number | null;
    launchYear?: Prisma.IntNullableFilter<"Variant"> | number | null;
    isActive?: Prisma.BoolFilter<"Variant"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Variant"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Variant"> | Date | string;
    model?: Prisma.XOR<Prisma.ModelScalarRelationFilter, Prisma.ModelWhereInput>;
    batteryPack?: Prisma.XOR<Prisma.BatteryPackScalarRelationFilter, Prisma.BatteryPackWhereInput>;
    specs?: Prisma.VariantSpecListRelationFilter;
    features?: Prisma.VariantFeatureListRelationFilter;
};
export type VariantOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
    batteryPackId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    price?: Prisma.SortOrderInput | Prisma.SortOrder;
    topSpeed?: Prisma.SortOrderInput | Prisma.SortOrder;
    acceleration0100?: Prisma.SortOrderInput | Prisma.SortOrder;
    launchYear?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    model?: Prisma.ModelOrderByWithRelationInput;
    batteryPack?: Prisma.BatteryPackOrderByWithRelationInput;
    specs?: Prisma.VariantSpecOrderByRelationAggregateInput;
    features?: Prisma.VariantFeatureOrderByRelationAggregateInput;
    _relevance?: Prisma.VariantOrderByRelevanceInput;
};
export type VariantWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    slug?: string;
    AND?: Prisma.VariantWhereInput | Prisma.VariantWhereInput[];
    OR?: Prisma.VariantWhereInput[];
    NOT?: Prisma.VariantWhereInput | Prisma.VariantWhereInput[];
    modelId?: Prisma.IntFilter<"Variant"> | number;
    batteryPackId?: Prisma.IntFilter<"Variant"> | number;
    name?: Prisma.StringFilter<"Variant"> | string;
    price?: Prisma.FloatNullableFilter<"Variant"> | number | null;
    topSpeed?: Prisma.IntNullableFilter<"Variant"> | number | null;
    acceleration0100?: Prisma.FloatNullableFilter<"Variant"> | number | null;
    launchYear?: Prisma.IntNullableFilter<"Variant"> | number | null;
    isActive?: Prisma.BoolFilter<"Variant"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Variant"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Variant"> | Date | string;
    model?: Prisma.XOR<Prisma.ModelScalarRelationFilter, Prisma.ModelWhereInput>;
    batteryPack?: Prisma.XOR<Prisma.BatteryPackScalarRelationFilter, Prisma.BatteryPackWhereInput>;
    specs?: Prisma.VariantSpecListRelationFilter;
    features?: Prisma.VariantFeatureListRelationFilter;
}, "id" | "slug">;
export type VariantOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
    batteryPackId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    price?: Prisma.SortOrderInput | Prisma.SortOrder;
    topSpeed?: Prisma.SortOrderInput | Prisma.SortOrder;
    acceleration0100?: Prisma.SortOrderInput | Prisma.SortOrder;
    launchYear?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.VariantCountOrderByAggregateInput;
    _avg?: Prisma.VariantAvgOrderByAggregateInput;
    _max?: Prisma.VariantMaxOrderByAggregateInput;
    _min?: Prisma.VariantMinOrderByAggregateInput;
    _sum?: Prisma.VariantSumOrderByAggregateInput;
};
export type VariantScalarWhereWithAggregatesInput = {
    AND?: Prisma.VariantScalarWhereWithAggregatesInput | Prisma.VariantScalarWhereWithAggregatesInput[];
    OR?: Prisma.VariantScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VariantScalarWhereWithAggregatesInput | Prisma.VariantScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Variant"> | number;
    modelId?: Prisma.IntWithAggregatesFilter<"Variant"> | number;
    batteryPackId?: Prisma.IntWithAggregatesFilter<"Variant"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Variant"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Variant"> | string;
    price?: Prisma.FloatNullableWithAggregatesFilter<"Variant"> | number | null;
    topSpeed?: Prisma.IntNullableWithAggregatesFilter<"Variant"> | number | null;
    acceleration0100?: Prisma.FloatNullableWithAggregatesFilter<"Variant"> | number | null;
    launchYear?: Prisma.IntNullableWithAggregatesFilter<"Variant"> | number | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"Variant"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Variant"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Variant"> | Date | string;
};
export type VariantCreateInput = {
    name: string;
    slug: string;
    price?: number | null;
    topSpeed?: number | null;
    acceleration0100?: number | null;
    launchYear?: number | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    model: Prisma.ModelCreateNestedOneWithoutVariantsInput;
    batteryPack: Prisma.BatteryPackCreateNestedOneWithoutVariantsInput;
    specs?: Prisma.VariantSpecCreateNestedManyWithoutVariantInput;
    features?: Prisma.VariantFeatureCreateNestedManyWithoutVariantInput;
};
export type VariantUncheckedCreateInput = {
    id?: number;
    modelId: number;
    batteryPackId: number;
    name: string;
    slug: string;
    price?: number | null;
    topSpeed?: number | null;
    acceleration0100?: number | null;
    launchYear?: number | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    specs?: Prisma.VariantSpecUncheckedCreateNestedManyWithoutVariantInput;
    features?: Prisma.VariantFeatureUncheckedCreateNestedManyWithoutVariantInput;
};
export type VariantUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    topSpeed?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acceleration0100?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    launchYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    model?: Prisma.ModelUpdateOneRequiredWithoutVariantsNestedInput;
    batteryPack?: Prisma.BatteryPackUpdateOneRequiredWithoutVariantsNestedInput;
    specs?: Prisma.VariantSpecUpdateManyWithoutVariantNestedInput;
    features?: Prisma.VariantFeatureUpdateManyWithoutVariantNestedInput;
};
export type VariantUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    modelId?: Prisma.IntFieldUpdateOperationsInput | number;
    batteryPackId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    topSpeed?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acceleration0100?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    launchYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    specs?: Prisma.VariantSpecUncheckedUpdateManyWithoutVariantNestedInput;
    features?: Prisma.VariantFeatureUncheckedUpdateManyWithoutVariantNestedInput;
};
export type VariantCreateManyInput = {
    id?: number;
    modelId: number;
    batteryPackId: number;
    name: string;
    slug: string;
    price?: number | null;
    topSpeed?: number | null;
    acceleration0100?: number | null;
    launchYear?: number | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VariantUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    topSpeed?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acceleration0100?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    launchYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VariantUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    modelId?: Prisma.IntFieldUpdateOperationsInput | number;
    batteryPackId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    topSpeed?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acceleration0100?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    launchYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VariantListRelationFilter = {
    every?: Prisma.VariantWhereInput;
    some?: Prisma.VariantWhereInput;
    none?: Prisma.VariantWhereInput;
};
export type VariantOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type VariantOrderByRelevanceInput = {
    fields: Prisma.VariantOrderByRelevanceFieldEnum | Prisma.VariantOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type VariantCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
    batteryPackId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    topSpeed?: Prisma.SortOrder;
    acceleration0100?: Prisma.SortOrder;
    launchYear?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VariantAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
    batteryPackId?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    topSpeed?: Prisma.SortOrder;
    acceleration0100?: Prisma.SortOrder;
    launchYear?: Prisma.SortOrder;
};
export type VariantMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
    batteryPackId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    topSpeed?: Prisma.SortOrder;
    acceleration0100?: Prisma.SortOrder;
    launchYear?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VariantMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
    batteryPackId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    topSpeed?: Prisma.SortOrder;
    acceleration0100?: Prisma.SortOrder;
    launchYear?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VariantSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
    batteryPackId?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    topSpeed?: Prisma.SortOrder;
    acceleration0100?: Prisma.SortOrder;
    launchYear?: Prisma.SortOrder;
};
export type VariantScalarRelationFilter = {
    is?: Prisma.VariantWhereInput;
    isNot?: Prisma.VariantWhereInput;
};
export type VariantCreateNestedManyWithoutModelInput = {
    create?: Prisma.XOR<Prisma.VariantCreateWithoutModelInput, Prisma.VariantUncheckedCreateWithoutModelInput> | Prisma.VariantCreateWithoutModelInput[] | Prisma.VariantUncheckedCreateWithoutModelInput[];
    connectOrCreate?: Prisma.VariantCreateOrConnectWithoutModelInput | Prisma.VariantCreateOrConnectWithoutModelInput[];
    createMany?: Prisma.VariantCreateManyModelInputEnvelope;
    connect?: Prisma.VariantWhereUniqueInput | Prisma.VariantWhereUniqueInput[];
};
export type VariantUncheckedCreateNestedManyWithoutModelInput = {
    create?: Prisma.XOR<Prisma.VariantCreateWithoutModelInput, Prisma.VariantUncheckedCreateWithoutModelInput> | Prisma.VariantCreateWithoutModelInput[] | Prisma.VariantUncheckedCreateWithoutModelInput[];
    connectOrCreate?: Prisma.VariantCreateOrConnectWithoutModelInput | Prisma.VariantCreateOrConnectWithoutModelInput[];
    createMany?: Prisma.VariantCreateManyModelInputEnvelope;
    connect?: Prisma.VariantWhereUniqueInput | Prisma.VariantWhereUniqueInput[];
};
export type VariantUpdateManyWithoutModelNestedInput = {
    create?: Prisma.XOR<Prisma.VariantCreateWithoutModelInput, Prisma.VariantUncheckedCreateWithoutModelInput> | Prisma.VariantCreateWithoutModelInput[] | Prisma.VariantUncheckedCreateWithoutModelInput[];
    connectOrCreate?: Prisma.VariantCreateOrConnectWithoutModelInput | Prisma.VariantCreateOrConnectWithoutModelInput[];
    upsert?: Prisma.VariantUpsertWithWhereUniqueWithoutModelInput | Prisma.VariantUpsertWithWhereUniqueWithoutModelInput[];
    createMany?: Prisma.VariantCreateManyModelInputEnvelope;
    set?: Prisma.VariantWhereUniqueInput | Prisma.VariantWhereUniqueInput[];
    disconnect?: Prisma.VariantWhereUniqueInput | Prisma.VariantWhereUniqueInput[];
    delete?: Prisma.VariantWhereUniqueInput | Prisma.VariantWhereUniqueInput[];
    connect?: Prisma.VariantWhereUniqueInput | Prisma.VariantWhereUniqueInput[];
    update?: Prisma.VariantUpdateWithWhereUniqueWithoutModelInput | Prisma.VariantUpdateWithWhereUniqueWithoutModelInput[];
    updateMany?: Prisma.VariantUpdateManyWithWhereWithoutModelInput | Prisma.VariantUpdateManyWithWhereWithoutModelInput[];
    deleteMany?: Prisma.VariantScalarWhereInput | Prisma.VariantScalarWhereInput[];
};
export type VariantUncheckedUpdateManyWithoutModelNestedInput = {
    create?: Prisma.XOR<Prisma.VariantCreateWithoutModelInput, Prisma.VariantUncheckedCreateWithoutModelInput> | Prisma.VariantCreateWithoutModelInput[] | Prisma.VariantUncheckedCreateWithoutModelInput[];
    connectOrCreate?: Prisma.VariantCreateOrConnectWithoutModelInput | Prisma.VariantCreateOrConnectWithoutModelInput[];
    upsert?: Prisma.VariantUpsertWithWhereUniqueWithoutModelInput | Prisma.VariantUpsertWithWhereUniqueWithoutModelInput[];
    createMany?: Prisma.VariantCreateManyModelInputEnvelope;
    set?: Prisma.VariantWhereUniqueInput | Prisma.VariantWhereUniqueInput[];
    disconnect?: Prisma.VariantWhereUniqueInput | Prisma.VariantWhereUniqueInput[];
    delete?: Prisma.VariantWhereUniqueInput | Prisma.VariantWhereUniqueInput[];
    connect?: Prisma.VariantWhereUniqueInput | Prisma.VariantWhereUniqueInput[];
    update?: Prisma.VariantUpdateWithWhereUniqueWithoutModelInput | Prisma.VariantUpdateWithWhereUniqueWithoutModelInput[];
    updateMany?: Prisma.VariantUpdateManyWithWhereWithoutModelInput | Prisma.VariantUpdateManyWithWhereWithoutModelInput[];
    deleteMany?: Prisma.VariantScalarWhereInput | Prisma.VariantScalarWhereInput[];
};
export type VariantCreateNestedManyWithoutBatteryPackInput = {
    create?: Prisma.XOR<Prisma.VariantCreateWithoutBatteryPackInput, Prisma.VariantUncheckedCreateWithoutBatteryPackInput> | Prisma.VariantCreateWithoutBatteryPackInput[] | Prisma.VariantUncheckedCreateWithoutBatteryPackInput[];
    connectOrCreate?: Prisma.VariantCreateOrConnectWithoutBatteryPackInput | Prisma.VariantCreateOrConnectWithoutBatteryPackInput[];
    createMany?: Prisma.VariantCreateManyBatteryPackInputEnvelope;
    connect?: Prisma.VariantWhereUniqueInput | Prisma.VariantWhereUniqueInput[];
};
export type VariantUncheckedCreateNestedManyWithoutBatteryPackInput = {
    create?: Prisma.XOR<Prisma.VariantCreateWithoutBatteryPackInput, Prisma.VariantUncheckedCreateWithoutBatteryPackInput> | Prisma.VariantCreateWithoutBatteryPackInput[] | Prisma.VariantUncheckedCreateWithoutBatteryPackInput[];
    connectOrCreate?: Prisma.VariantCreateOrConnectWithoutBatteryPackInput | Prisma.VariantCreateOrConnectWithoutBatteryPackInput[];
    createMany?: Prisma.VariantCreateManyBatteryPackInputEnvelope;
    connect?: Prisma.VariantWhereUniqueInput | Prisma.VariantWhereUniqueInput[];
};
export type VariantUpdateManyWithoutBatteryPackNestedInput = {
    create?: Prisma.XOR<Prisma.VariantCreateWithoutBatteryPackInput, Prisma.VariantUncheckedCreateWithoutBatteryPackInput> | Prisma.VariantCreateWithoutBatteryPackInput[] | Prisma.VariantUncheckedCreateWithoutBatteryPackInput[];
    connectOrCreate?: Prisma.VariantCreateOrConnectWithoutBatteryPackInput | Prisma.VariantCreateOrConnectWithoutBatteryPackInput[];
    upsert?: Prisma.VariantUpsertWithWhereUniqueWithoutBatteryPackInput | Prisma.VariantUpsertWithWhereUniqueWithoutBatteryPackInput[];
    createMany?: Prisma.VariantCreateManyBatteryPackInputEnvelope;
    set?: Prisma.VariantWhereUniqueInput | Prisma.VariantWhereUniqueInput[];
    disconnect?: Prisma.VariantWhereUniqueInput | Prisma.VariantWhereUniqueInput[];
    delete?: Prisma.VariantWhereUniqueInput | Prisma.VariantWhereUniqueInput[];
    connect?: Prisma.VariantWhereUniqueInput | Prisma.VariantWhereUniqueInput[];
    update?: Prisma.VariantUpdateWithWhereUniqueWithoutBatteryPackInput | Prisma.VariantUpdateWithWhereUniqueWithoutBatteryPackInput[];
    updateMany?: Prisma.VariantUpdateManyWithWhereWithoutBatteryPackInput | Prisma.VariantUpdateManyWithWhereWithoutBatteryPackInput[];
    deleteMany?: Prisma.VariantScalarWhereInput | Prisma.VariantScalarWhereInput[];
};
export type VariantUncheckedUpdateManyWithoutBatteryPackNestedInput = {
    create?: Prisma.XOR<Prisma.VariantCreateWithoutBatteryPackInput, Prisma.VariantUncheckedCreateWithoutBatteryPackInput> | Prisma.VariantCreateWithoutBatteryPackInput[] | Prisma.VariantUncheckedCreateWithoutBatteryPackInput[];
    connectOrCreate?: Prisma.VariantCreateOrConnectWithoutBatteryPackInput | Prisma.VariantCreateOrConnectWithoutBatteryPackInput[];
    upsert?: Prisma.VariantUpsertWithWhereUniqueWithoutBatteryPackInput | Prisma.VariantUpsertWithWhereUniqueWithoutBatteryPackInput[];
    createMany?: Prisma.VariantCreateManyBatteryPackInputEnvelope;
    set?: Prisma.VariantWhereUniqueInput | Prisma.VariantWhereUniqueInput[];
    disconnect?: Prisma.VariantWhereUniqueInput | Prisma.VariantWhereUniqueInput[];
    delete?: Prisma.VariantWhereUniqueInput | Prisma.VariantWhereUniqueInput[];
    connect?: Prisma.VariantWhereUniqueInput | Prisma.VariantWhereUniqueInput[];
    update?: Prisma.VariantUpdateWithWhereUniqueWithoutBatteryPackInput | Prisma.VariantUpdateWithWhereUniqueWithoutBatteryPackInput[];
    updateMany?: Prisma.VariantUpdateManyWithWhereWithoutBatteryPackInput | Prisma.VariantUpdateManyWithWhereWithoutBatteryPackInput[];
    deleteMany?: Prisma.VariantScalarWhereInput | Prisma.VariantScalarWhereInput[];
};
export type VariantCreateNestedOneWithoutSpecsInput = {
    create?: Prisma.XOR<Prisma.VariantCreateWithoutSpecsInput, Prisma.VariantUncheckedCreateWithoutSpecsInput>;
    connectOrCreate?: Prisma.VariantCreateOrConnectWithoutSpecsInput;
    connect?: Prisma.VariantWhereUniqueInput;
};
export type VariantUpdateOneRequiredWithoutSpecsNestedInput = {
    create?: Prisma.XOR<Prisma.VariantCreateWithoutSpecsInput, Prisma.VariantUncheckedCreateWithoutSpecsInput>;
    connectOrCreate?: Prisma.VariantCreateOrConnectWithoutSpecsInput;
    upsert?: Prisma.VariantUpsertWithoutSpecsInput;
    connect?: Prisma.VariantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VariantUpdateToOneWithWhereWithoutSpecsInput, Prisma.VariantUpdateWithoutSpecsInput>, Prisma.VariantUncheckedUpdateWithoutSpecsInput>;
};
export type VariantCreateNestedOneWithoutFeaturesInput = {
    create?: Prisma.XOR<Prisma.VariantCreateWithoutFeaturesInput, Prisma.VariantUncheckedCreateWithoutFeaturesInput>;
    connectOrCreate?: Prisma.VariantCreateOrConnectWithoutFeaturesInput;
    connect?: Prisma.VariantWhereUniqueInput;
};
export type VariantUpdateOneRequiredWithoutFeaturesNestedInput = {
    create?: Prisma.XOR<Prisma.VariantCreateWithoutFeaturesInput, Prisma.VariantUncheckedCreateWithoutFeaturesInput>;
    connectOrCreate?: Prisma.VariantCreateOrConnectWithoutFeaturesInput;
    upsert?: Prisma.VariantUpsertWithoutFeaturesInput;
    connect?: Prisma.VariantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VariantUpdateToOneWithWhereWithoutFeaturesInput, Prisma.VariantUpdateWithoutFeaturesInput>, Prisma.VariantUncheckedUpdateWithoutFeaturesInput>;
};
export type VariantCreateWithoutModelInput = {
    name: string;
    slug: string;
    price?: number | null;
    topSpeed?: number | null;
    acceleration0100?: number | null;
    launchYear?: number | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    batteryPack: Prisma.BatteryPackCreateNestedOneWithoutVariantsInput;
    specs?: Prisma.VariantSpecCreateNestedManyWithoutVariantInput;
    features?: Prisma.VariantFeatureCreateNestedManyWithoutVariantInput;
};
export type VariantUncheckedCreateWithoutModelInput = {
    id?: number;
    batteryPackId: number;
    name: string;
    slug: string;
    price?: number | null;
    topSpeed?: number | null;
    acceleration0100?: number | null;
    launchYear?: number | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    specs?: Prisma.VariantSpecUncheckedCreateNestedManyWithoutVariantInput;
    features?: Prisma.VariantFeatureUncheckedCreateNestedManyWithoutVariantInput;
};
export type VariantCreateOrConnectWithoutModelInput = {
    where: Prisma.VariantWhereUniqueInput;
    create: Prisma.XOR<Prisma.VariantCreateWithoutModelInput, Prisma.VariantUncheckedCreateWithoutModelInput>;
};
export type VariantCreateManyModelInputEnvelope = {
    data: Prisma.VariantCreateManyModelInput | Prisma.VariantCreateManyModelInput[];
    skipDuplicates?: boolean;
};
export type VariantUpsertWithWhereUniqueWithoutModelInput = {
    where: Prisma.VariantWhereUniqueInput;
    update: Prisma.XOR<Prisma.VariantUpdateWithoutModelInput, Prisma.VariantUncheckedUpdateWithoutModelInput>;
    create: Prisma.XOR<Prisma.VariantCreateWithoutModelInput, Prisma.VariantUncheckedCreateWithoutModelInput>;
};
export type VariantUpdateWithWhereUniqueWithoutModelInput = {
    where: Prisma.VariantWhereUniqueInput;
    data: Prisma.XOR<Prisma.VariantUpdateWithoutModelInput, Prisma.VariantUncheckedUpdateWithoutModelInput>;
};
export type VariantUpdateManyWithWhereWithoutModelInput = {
    where: Prisma.VariantScalarWhereInput;
    data: Prisma.XOR<Prisma.VariantUpdateManyMutationInput, Prisma.VariantUncheckedUpdateManyWithoutModelInput>;
};
export type VariantScalarWhereInput = {
    AND?: Prisma.VariantScalarWhereInput | Prisma.VariantScalarWhereInput[];
    OR?: Prisma.VariantScalarWhereInput[];
    NOT?: Prisma.VariantScalarWhereInput | Prisma.VariantScalarWhereInput[];
    id?: Prisma.IntFilter<"Variant"> | number;
    modelId?: Prisma.IntFilter<"Variant"> | number;
    batteryPackId?: Prisma.IntFilter<"Variant"> | number;
    name?: Prisma.StringFilter<"Variant"> | string;
    slug?: Prisma.StringFilter<"Variant"> | string;
    price?: Prisma.FloatNullableFilter<"Variant"> | number | null;
    topSpeed?: Prisma.IntNullableFilter<"Variant"> | number | null;
    acceleration0100?: Prisma.FloatNullableFilter<"Variant"> | number | null;
    launchYear?: Prisma.IntNullableFilter<"Variant"> | number | null;
    isActive?: Prisma.BoolFilter<"Variant"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Variant"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Variant"> | Date | string;
};
export type VariantCreateWithoutBatteryPackInput = {
    name: string;
    slug: string;
    price?: number | null;
    topSpeed?: number | null;
    acceleration0100?: number | null;
    launchYear?: number | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    model: Prisma.ModelCreateNestedOneWithoutVariantsInput;
    specs?: Prisma.VariantSpecCreateNestedManyWithoutVariantInput;
    features?: Prisma.VariantFeatureCreateNestedManyWithoutVariantInput;
};
export type VariantUncheckedCreateWithoutBatteryPackInput = {
    id?: number;
    modelId: number;
    name: string;
    slug: string;
    price?: number | null;
    topSpeed?: number | null;
    acceleration0100?: number | null;
    launchYear?: number | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    specs?: Prisma.VariantSpecUncheckedCreateNestedManyWithoutVariantInput;
    features?: Prisma.VariantFeatureUncheckedCreateNestedManyWithoutVariantInput;
};
export type VariantCreateOrConnectWithoutBatteryPackInput = {
    where: Prisma.VariantWhereUniqueInput;
    create: Prisma.XOR<Prisma.VariantCreateWithoutBatteryPackInput, Prisma.VariantUncheckedCreateWithoutBatteryPackInput>;
};
export type VariantCreateManyBatteryPackInputEnvelope = {
    data: Prisma.VariantCreateManyBatteryPackInput | Prisma.VariantCreateManyBatteryPackInput[];
    skipDuplicates?: boolean;
};
export type VariantUpsertWithWhereUniqueWithoutBatteryPackInput = {
    where: Prisma.VariantWhereUniqueInput;
    update: Prisma.XOR<Prisma.VariantUpdateWithoutBatteryPackInput, Prisma.VariantUncheckedUpdateWithoutBatteryPackInput>;
    create: Prisma.XOR<Prisma.VariantCreateWithoutBatteryPackInput, Prisma.VariantUncheckedCreateWithoutBatteryPackInput>;
};
export type VariantUpdateWithWhereUniqueWithoutBatteryPackInput = {
    where: Prisma.VariantWhereUniqueInput;
    data: Prisma.XOR<Prisma.VariantUpdateWithoutBatteryPackInput, Prisma.VariantUncheckedUpdateWithoutBatteryPackInput>;
};
export type VariantUpdateManyWithWhereWithoutBatteryPackInput = {
    where: Prisma.VariantScalarWhereInput;
    data: Prisma.XOR<Prisma.VariantUpdateManyMutationInput, Prisma.VariantUncheckedUpdateManyWithoutBatteryPackInput>;
};
export type VariantCreateWithoutSpecsInput = {
    name: string;
    slug: string;
    price?: number | null;
    topSpeed?: number | null;
    acceleration0100?: number | null;
    launchYear?: number | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    model: Prisma.ModelCreateNestedOneWithoutVariantsInput;
    batteryPack: Prisma.BatteryPackCreateNestedOneWithoutVariantsInput;
    features?: Prisma.VariantFeatureCreateNestedManyWithoutVariantInput;
};
export type VariantUncheckedCreateWithoutSpecsInput = {
    id?: number;
    modelId: number;
    batteryPackId: number;
    name: string;
    slug: string;
    price?: number | null;
    topSpeed?: number | null;
    acceleration0100?: number | null;
    launchYear?: number | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    features?: Prisma.VariantFeatureUncheckedCreateNestedManyWithoutVariantInput;
};
export type VariantCreateOrConnectWithoutSpecsInput = {
    where: Prisma.VariantWhereUniqueInput;
    create: Prisma.XOR<Prisma.VariantCreateWithoutSpecsInput, Prisma.VariantUncheckedCreateWithoutSpecsInput>;
};
export type VariantUpsertWithoutSpecsInput = {
    update: Prisma.XOR<Prisma.VariantUpdateWithoutSpecsInput, Prisma.VariantUncheckedUpdateWithoutSpecsInput>;
    create: Prisma.XOR<Prisma.VariantCreateWithoutSpecsInput, Prisma.VariantUncheckedCreateWithoutSpecsInput>;
    where?: Prisma.VariantWhereInput;
};
export type VariantUpdateToOneWithWhereWithoutSpecsInput = {
    where?: Prisma.VariantWhereInput;
    data: Prisma.XOR<Prisma.VariantUpdateWithoutSpecsInput, Prisma.VariantUncheckedUpdateWithoutSpecsInput>;
};
export type VariantUpdateWithoutSpecsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    topSpeed?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acceleration0100?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    launchYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    model?: Prisma.ModelUpdateOneRequiredWithoutVariantsNestedInput;
    batteryPack?: Prisma.BatteryPackUpdateOneRequiredWithoutVariantsNestedInput;
    features?: Prisma.VariantFeatureUpdateManyWithoutVariantNestedInput;
};
export type VariantUncheckedUpdateWithoutSpecsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    modelId?: Prisma.IntFieldUpdateOperationsInput | number;
    batteryPackId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    topSpeed?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acceleration0100?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    launchYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    features?: Prisma.VariantFeatureUncheckedUpdateManyWithoutVariantNestedInput;
};
export type VariantCreateWithoutFeaturesInput = {
    name: string;
    slug: string;
    price?: number | null;
    topSpeed?: number | null;
    acceleration0100?: number | null;
    launchYear?: number | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    model: Prisma.ModelCreateNestedOneWithoutVariantsInput;
    batteryPack: Prisma.BatteryPackCreateNestedOneWithoutVariantsInput;
    specs?: Prisma.VariantSpecCreateNestedManyWithoutVariantInput;
};
export type VariantUncheckedCreateWithoutFeaturesInput = {
    id?: number;
    modelId: number;
    batteryPackId: number;
    name: string;
    slug: string;
    price?: number | null;
    topSpeed?: number | null;
    acceleration0100?: number | null;
    launchYear?: number | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    specs?: Prisma.VariantSpecUncheckedCreateNestedManyWithoutVariantInput;
};
export type VariantCreateOrConnectWithoutFeaturesInput = {
    where: Prisma.VariantWhereUniqueInput;
    create: Prisma.XOR<Prisma.VariantCreateWithoutFeaturesInput, Prisma.VariantUncheckedCreateWithoutFeaturesInput>;
};
export type VariantUpsertWithoutFeaturesInput = {
    update: Prisma.XOR<Prisma.VariantUpdateWithoutFeaturesInput, Prisma.VariantUncheckedUpdateWithoutFeaturesInput>;
    create: Prisma.XOR<Prisma.VariantCreateWithoutFeaturesInput, Prisma.VariantUncheckedCreateWithoutFeaturesInput>;
    where?: Prisma.VariantWhereInput;
};
export type VariantUpdateToOneWithWhereWithoutFeaturesInput = {
    where?: Prisma.VariantWhereInput;
    data: Prisma.XOR<Prisma.VariantUpdateWithoutFeaturesInput, Prisma.VariantUncheckedUpdateWithoutFeaturesInput>;
};
export type VariantUpdateWithoutFeaturesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    topSpeed?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acceleration0100?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    launchYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    model?: Prisma.ModelUpdateOneRequiredWithoutVariantsNestedInput;
    batteryPack?: Prisma.BatteryPackUpdateOneRequiredWithoutVariantsNestedInput;
    specs?: Prisma.VariantSpecUpdateManyWithoutVariantNestedInput;
};
export type VariantUncheckedUpdateWithoutFeaturesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    modelId?: Prisma.IntFieldUpdateOperationsInput | number;
    batteryPackId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    topSpeed?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acceleration0100?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    launchYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    specs?: Prisma.VariantSpecUncheckedUpdateManyWithoutVariantNestedInput;
};
export type VariantCreateManyModelInput = {
    id?: number;
    batteryPackId: number;
    name: string;
    slug: string;
    price?: number | null;
    topSpeed?: number | null;
    acceleration0100?: number | null;
    launchYear?: number | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VariantUpdateWithoutModelInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    topSpeed?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acceleration0100?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    launchYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    batteryPack?: Prisma.BatteryPackUpdateOneRequiredWithoutVariantsNestedInput;
    specs?: Prisma.VariantSpecUpdateManyWithoutVariantNestedInput;
    features?: Prisma.VariantFeatureUpdateManyWithoutVariantNestedInput;
};
export type VariantUncheckedUpdateWithoutModelInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    batteryPackId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    topSpeed?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acceleration0100?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    launchYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    specs?: Prisma.VariantSpecUncheckedUpdateManyWithoutVariantNestedInput;
    features?: Prisma.VariantFeatureUncheckedUpdateManyWithoutVariantNestedInput;
};
export type VariantUncheckedUpdateManyWithoutModelInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    batteryPackId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    topSpeed?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acceleration0100?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    launchYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VariantCreateManyBatteryPackInput = {
    id?: number;
    modelId: number;
    name: string;
    slug: string;
    price?: number | null;
    topSpeed?: number | null;
    acceleration0100?: number | null;
    launchYear?: number | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VariantUpdateWithoutBatteryPackInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    topSpeed?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acceleration0100?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    launchYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    model?: Prisma.ModelUpdateOneRequiredWithoutVariantsNestedInput;
    specs?: Prisma.VariantSpecUpdateManyWithoutVariantNestedInput;
    features?: Prisma.VariantFeatureUpdateManyWithoutVariantNestedInput;
};
export type VariantUncheckedUpdateWithoutBatteryPackInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    modelId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    topSpeed?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acceleration0100?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    launchYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    specs?: Prisma.VariantSpecUncheckedUpdateManyWithoutVariantNestedInput;
    features?: Prisma.VariantFeatureUncheckedUpdateManyWithoutVariantNestedInput;
};
export type VariantUncheckedUpdateManyWithoutBatteryPackInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    modelId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    topSpeed?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    acceleration0100?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    launchYear?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VariantCountOutputType = {
    specs: number;
    features: number;
};
export type VariantCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    specs?: boolean | VariantCountOutputTypeCountSpecsArgs;
    features?: boolean | VariantCountOutputTypeCountFeaturesArgs;
};
export type VariantCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VariantCountOutputTypeSelect<ExtArgs> | null;
};
export type VariantCountOutputTypeCountSpecsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VariantSpecWhereInput;
};
export type VariantCountOutputTypeCountFeaturesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VariantFeatureWhereInput;
};
export type VariantSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    modelId?: boolean;
    batteryPackId?: boolean;
    name?: boolean;
    slug?: boolean;
    price?: boolean;
    topSpeed?: boolean;
    acceleration0100?: boolean;
    launchYear?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    model?: boolean | Prisma.ModelDefaultArgs<ExtArgs>;
    batteryPack?: boolean | Prisma.BatteryPackDefaultArgs<ExtArgs>;
    specs?: boolean | Prisma.Variant$specsArgs<ExtArgs>;
    features?: boolean | Prisma.Variant$featuresArgs<ExtArgs>;
    _count?: boolean | Prisma.VariantCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["variant"]>;
export type VariantSelectScalar = {
    id?: boolean;
    modelId?: boolean;
    batteryPackId?: boolean;
    name?: boolean;
    slug?: boolean;
    price?: boolean;
    topSpeed?: boolean;
    acceleration0100?: boolean;
    launchYear?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type VariantOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "modelId" | "batteryPackId" | "name" | "slug" | "price" | "topSpeed" | "acceleration0100" | "launchYear" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["variant"]>;
export type VariantInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    model?: boolean | Prisma.ModelDefaultArgs<ExtArgs>;
    batteryPack?: boolean | Prisma.BatteryPackDefaultArgs<ExtArgs>;
    specs?: boolean | Prisma.Variant$specsArgs<ExtArgs>;
    features?: boolean | Prisma.Variant$featuresArgs<ExtArgs>;
    _count?: boolean | Prisma.VariantCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $VariantPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Variant";
    objects: {
        model: Prisma.$ModelPayload<ExtArgs>;
        batteryPack: Prisma.$BatteryPackPayload<ExtArgs>;
        specs: Prisma.$VariantSpecPayload<ExtArgs>[];
        features: Prisma.$VariantFeaturePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        modelId: number;
        batteryPackId: number;
        name: string;
        slug: string;
        price: number | null;
        topSpeed: number | null;
        acceleration0100: number | null;
        launchYear: number | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["variant"]>;
    composites: {};
};
export type VariantGetPayload<S extends boolean | null | undefined | VariantDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VariantPayload, S>;
export type VariantCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VariantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VariantCountAggregateInputType | true;
};
export interface VariantDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Variant'];
        meta: {
            name: 'Variant';
        };
    };
    findUnique<T extends VariantFindUniqueArgs>(args: Prisma.SelectSubset<T, VariantFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VariantClient<runtime.Types.Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends VariantFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VariantFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VariantClient<runtime.Types.Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends VariantFindFirstArgs>(args?: Prisma.SelectSubset<T, VariantFindFirstArgs<ExtArgs>>): Prisma.Prisma__VariantClient<runtime.Types.Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends VariantFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VariantFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VariantClient<runtime.Types.Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends VariantFindManyArgs>(args?: Prisma.SelectSubset<T, VariantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends VariantCreateArgs>(args: Prisma.SelectSubset<T, VariantCreateArgs<ExtArgs>>): Prisma.Prisma__VariantClient<runtime.Types.Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends VariantCreateManyArgs>(args?: Prisma.SelectSubset<T, VariantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends VariantDeleteArgs>(args: Prisma.SelectSubset<T, VariantDeleteArgs<ExtArgs>>): Prisma.Prisma__VariantClient<runtime.Types.Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends VariantUpdateArgs>(args: Prisma.SelectSubset<T, VariantUpdateArgs<ExtArgs>>): Prisma.Prisma__VariantClient<runtime.Types.Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends VariantDeleteManyArgs>(args?: Prisma.SelectSubset<T, VariantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends VariantUpdateManyArgs>(args: Prisma.SelectSubset<T, VariantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends VariantUpsertArgs>(args: Prisma.SelectSubset<T, VariantUpsertArgs<ExtArgs>>): Prisma.Prisma__VariantClient<runtime.Types.Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends VariantCountArgs>(args?: Prisma.Subset<T, VariantCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VariantCountAggregateOutputType> : number>;
    aggregate<T extends VariantAggregateArgs>(args: Prisma.Subset<T, VariantAggregateArgs>): Prisma.PrismaPromise<GetVariantAggregateType<T>>;
    groupBy<T extends VariantGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VariantGroupByArgs['orderBy'];
    } : {
        orderBy?: VariantGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: VariantFieldRefs;
}
export interface Prisma__VariantClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    model<T extends Prisma.ModelDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ModelDefaultArgs<ExtArgs>>): Prisma.Prisma__ModelClient<runtime.Types.Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    batteryPack<T extends Prisma.BatteryPackDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BatteryPackDefaultArgs<ExtArgs>>): Prisma.Prisma__BatteryPackClient<runtime.Types.Result.GetResult<Prisma.$BatteryPackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    specs<T extends Prisma.Variant$specsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Variant$specsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VariantSpecPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    features<T extends Prisma.Variant$featuresArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Variant$featuresArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VariantFeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface VariantFieldRefs {
    readonly id: Prisma.FieldRef<"Variant", 'Int'>;
    readonly modelId: Prisma.FieldRef<"Variant", 'Int'>;
    readonly batteryPackId: Prisma.FieldRef<"Variant", 'Int'>;
    readonly name: Prisma.FieldRef<"Variant", 'String'>;
    readonly slug: Prisma.FieldRef<"Variant", 'String'>;
    readonly price: Prisma.FieldRef<"Variant", 'Float'>;
    readonly topSpeed: Prisma.FieldRef<"Variant", 'Int'>;
    readonly acceleration0100: Prisma.FieldRef<"Variant", 'Float'>;
    readonly launchYear: Prisma.FieldRef<"Variant", 'Int'>;
    readonly isActive: Prisma.FieldRef<"Variant", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Variant", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Variant", 'DateTime'>;
}
export type VariantFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VariantSelect<ExtArgs> | null;
    omit?: Prisma.VariantOmit<ExtArgs> | null;
    include?: Prisma.VariantInclude<ExtArgs> | null;
    where: Prisma.VariantWhereUniqueInput;
};
export type VariantFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VariantSelect<ExtArgs> | null;
    omit?: Prisma.VariantOmit<ExtArgs> | null;
    include?: Prisma.VariantInclude<ExtArgs> | null;
    where: Prisma.VariantWhereUniqueInput;
};
export type VariantFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VariantSelect<ExtArgs> | null;
    omit?: Prisma.VariantOmit<ExtArgs> | null;
    include?: Prisma.VariantInclude<ExtArgs> | null;
    where?: Prisma.VariantWhereInput;
    orderBy?: Prisma.VariantOrderByWithRelationInput | Prisma.VariantOrderByWithRelationInput[];
    cursor?: Prisma.VariantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VariantScalarFieldEnum | Prisma.VariantScalarFieldEnum[];
};
export type VariantFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VariantSelect<ExtArgs> | null;
    omit?: Prisma.VariantOmit<ExtArgs> | null;
    include?: Prisma.VariantInclude<ExtArgs> | null;
    where?: Prisma.VariantWhereInput;
    orderBy?: Prisma.VariantOrderByWithRelationInput | Prisma.VariantOrderByWithRelationInput[];
    cursor?: Prisma.VariantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VariantScalarFieldEnum | Prisma.VariantScalarFieldEnum[];
};
export type VariantFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VariantSelect<ExtArgs> | null;
    omit?: Prisma.VariantOmit<ExtArgs> | null;
    include?: Prisma.VariantInclude<ExtArgs> | null;
    where?: Prisma.VariantWhereInput;
    orderBy?: Prisma.VariantOrderByWithRelationInput | Prisma.VariantOrderByWithRelationInput[];
    cursor?: Prisma.VariantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VariantScalarFieldEnum | Prisma.VariantScalarFieldEnum[];
};
export type VariantCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VariantSelect<ExtArgs> | null;
    omit?: Prisma.VariantOmit<ExtArgs> | null;
    include?: Prisma.VariantInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VariantCreateInput, Prisma.VariantUncheckedCreateInput>;
};
export type VariantCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.VariantCreateManyInput | Prisma.VariantCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VariantUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VariantSelect<ExtArgs> | null;
    omit?: Prisma.VariantOmit<ExtArgs> | null;
    include?: Prisma.VariantInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VariantUpdateInput, Prisma.VariantUncheckedUpdateInput>;
    where: Prisma.VariantWhereUniqueInput;
};
export type VariantUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.VariantUpdateManyMutationInput, Prisma.VariantUncheckedUpdateManyInput>;
    where?: Prisma.VariantWhereInput;
    limit?: number;
};
export type VariantUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VariantSelect<ExtArgs> | null;
    omit?: Prisma.VariantOmit<ExtArgs> | null;
    include?: Prisma.VariantInclude<ExtArgs> | null;
    where: Prisma.VariantWhereUniqueInput;
    create: Prisma.XOR<Prisma.VariantCreateInput, Prisma.VariantUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.VariantUpdateInput, Prisma.VariantUncheckedUpdateInput>;
};
export type VariantDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VariantSelect<ExtArgs> | null;
    omit?: Prisma.VariantOmit<ExtArgs> | null;
    include?: Prisma.VariantInclude<ExtArgs> | null;
    where: Prisma.VariantWhereUniqueInput;
};
export type VariantDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VariantWhereInput;
    limit?: number;
};
export type Variant$specsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Variant$featuresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type VariantDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VariantSelect<ExtArgs> | null;
    omit?: Prisma.VariantOmit<ExtArgs> | null;
    include?: Prisma.VariantInclude<ExtArgs> | null;
};
export {};
