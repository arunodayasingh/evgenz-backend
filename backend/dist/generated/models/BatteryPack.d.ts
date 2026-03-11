import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type BatteryPackModel = runtime.Types.Result.DefaultSelection<Prisma.$BatteryPackPayload>;
export type AggregateBatteryPack = {
    _count: BatteryPackCountAggregateOutputType | null;
    _avg: BatteryPackAvgAggregateOutputType | null;
    _sum: BatteryPackSumAggregateOutputType | null;
    _min: BatteryPackMinAggregateOutputType | null;
    _max: BatteryPackMaxAggregateOutputType | null;
};
export type BatteryPackAvgAggregateOutputType = {
    id: number | null;
    modelId: number | null;
    batteryCapacity: number | null;
    rangeKm: number | null;
    motorPowerKw: number | null;
    chargingTimeHours: number | null;
};
export type BatteryPackSumAggregateOutputType = {
    id: number | null;
    modelId: number | null;
    batteryCapacity: number | null;
    rangeKm: number | null;
    motorPowerKw: number | null;
    chargingTimeHours: number | null;
};
export type BatteryPackMinAggregateOutputType = {
    id: number | null;
    modelId: number | null;
    name: string | null;
    batteryCapacity: number | null;
    rangeKm: number | null;
    motorPowerKw: number | null;
    chargingTimeHours: number | null;
    fastCharging: boolean | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BatteryPackMaxAggregateOutputType = {
    id: number | null;
    modelId: number | null;
    name: string | null;
    batteryCapacity: number | null;
    rangeKm: number | null;
    motorPowerKw: number | null;
    chargingTimeHours: number | null;
    fastCharging: boolean | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BatteryPackCountAggregateOutputType = {
    id: number;
    modelId: number;
    name: number;
    batteryCapacity: number;
    rangeKm: number;
    motorPowerKw: number;
    chargingTimeHours: number;
    fastCharging: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type BatteryPackAvgAggregateInputType = {
    id?: true;
    modelId?: true;
    batteryCapacity?: true;
    rangeKm?: true;
    motorPowerKw?: true;
    chargingTimeHours?: true;
};
export type BatteryPackSumAggregateInputType = {
    id?: true;
    modelId?: true;
    batteryCapacity?: true;
    rangeKm?: true;
    motorPowerKw?: true;
    chargingTimeHours?: true;
};
export type BatteryPackMinAggregateInputType = {
    id?: true;
    modelId?: true;
    name?: true;
    batteryCapacity?: true;
    rangeKm?: true;
    motorPowerKw?: true;
    chargingTimeHours?: true;
    fastCharging?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BatteryPackMaxAggregateInputType = {
    id?: true;
    modelId?: true;
    name?: true;
    batteryCapacity?: true;
    rangeKm?: true;
    motorPowerKw?: true;
    chargingTimeHours?: true;
    fastCharging?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BatteryPackCountAggregateInputType = {
    id?: true;
    modelId?: true;
    name?: true;
    batteryCapacity?: true;
    rangeKm?: true;
    motorPowerKw?: true;
    chargingTimeHours?: true;
    fastCharging?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type BatteryPackAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BatteryPackWhereInput;
    orderBy?: Prisma.BatteryPackOrderByWithRelationInput | Prisma.BatteryPackOrderByWithRelationInput[];
    cursor?: Prisma.BatteryPackWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BatteryPackCountAggregateInputType;
    _avg?: BatteryPackAvgAggregateInputType;
    _sum?: BatteryPackSumAggregateInputType;
    _min?: BatteryPackMinAggregateInputType;
    _max?: BatteryPackMaxAggregateInputType;
};
export type GetBatteryPackAggregateType<T extends BatteryPackAggregateArgs> = {
    [P in keyof T & keyof AggregateBatteryPack]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBatteryPack[P]> : Prisma.GetScalarType<T[P], AggregateBatteryPack[P]>;
};
export type BatteryPackGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BatteryPackWhereInput;
    orderBy?: Prisma.BatteryPackOrderByWithAggregationInput | Prisma.BatteryPackOrderByWithAggregationInput[];
    by: Prisma.BatteryPackScalarFieldEnum[] | Prisma.BatteryPackScalarFieldEnum;
    having?: Prisma.BatteryPackScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BatteryPackCountAggregateInputType | true;
    _avg?: BatteryPackAvgAggregateInputType;
    _sum?: BatteryPackSumAggregateInputType;
    _min?: BatteryPackMinAggregateInputType;
    _max?: BatteryPackMaxAggregateInputType;
};
export type BatteryPackGroupByOutputType = {
    id: number;
    modelId: number;
    name: string;
    batteryCapacity: number;
    rangeKm: number | null;
    motorPowerKw: number | null;
    chargingTimeHours: number | null;
    fastCharging: boolean;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: BatteryPackCountAggregateOutputType | null;
    _avg: BatteryPackAvgAggregateOutputType | null;
    _sum: BatteryPackSumAggregateOutputType | null;
    _min: BatteryPackMinAggregateOutputType | null;
    _max: BatteryPackMaxAggregateOutputType | null;
};
type GetBatteryPackGroupByPayload<T extends BatteryPackGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BatteryPackGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BatteryPackGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BatteryPackGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BatteryPackGroupByOutputType[P]>;
}>>;
export type BatteryPackWhereInput = {
    AND?: Prisma.BatteryPackWhereInput | Prisma.BatteryPackWhereInput[];
    OR?: Prisma.BatteryPackWhereInput[];
    NOT?: Prisma.BatteryPackWhereInput | Prisma.BatteryPackWhereInput[];
    id?: Prisma.IntFilter<"BatteryPack"> | number;
    modelId?: Prisma.IntFilter<"BatteryPack"> | number;
    name?: Prisma.StringFilter<"BatteryPack"> | string;
    batteryCapacity?: Prisma.FloatFilter<"BatteryPack"> | number;
    rangeKm?: Prisma.IntNullableFilter<"BatteryPack"> | number | null;
    motorPowerKw?: Prisma.FloatNullableFilter<"BatteryPack"> | number | null;
    chargingTimeHours?: Prisma.FloatNullableFilter<"BatteryPack"> | number | null;
    fastCharging?: Prisma.BoolFilter<"BatteryPack"> | boolean;
    isActive?: Prisma.BoolFilter<"BatteryPack"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"BatteryPack"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BatteryPack"> | Date | string;
    model?: Prisma.XOR<Prisma.ModelScalarRelationFilter, Prisma.ModelWhereInput>;
    variants?: Prisma.VariantListRelationFilter;
    specs?: Prisma.BatteryPackSpecListRelationFilter;
};
export type BatteryPackOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    batteryCapacity?: Prisma.SortOrder;
    rangeKm?: Prisma.SortOrderInput | Prisma.SortOrder;
    motorPowerKw?: Prisma.SortOrderInput | Prisma.SortOrder;
    chargingTimeHours?: Prisma.SortOrderInput | Prisma.SortOrder;
    fastCharging?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    model?: Prisma.ModelOrderByWithRelationInput;
    variants?: Prisma.VariantOrderByRelationAggregateInput;
    specs?: Prisma.BatteryPackSpecOrderByRelationAggregateInput;
    _relevance?: Prisma.BatteryPackOrderByRelevanceInput;
};
export type BatteryPackWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.BatteryPackWhereInput | Prisma.BatteryPackWhereInput[];
    OR?: Prisma.BatteryPackWhereInput[];
    NOT?: Prisma.BatteryPackWhereInput | Prisma.BatteryPackWhereInput[];
    modelId?: Prisma.IntFilter<"BatteryPack"> | number;
    name?: Prisma.StringFilter<"BatteryPack"> | string;
    batteryCapacity?: Prisma.FloatFilter<"BatteryPack"> | number;
    rangeKm?: Prisma.IntNullableFilter<"BatteryPack"> | number | null;
    motorPowerKw?: Prisma.FloatNullableFilter<"BatteryPack"> | number | null;
    chargingTimeHours?: Prisma.FloatNullableFilter<"BatteryPack"> | number | null;
    fastCharging?: Prisma.BoolFilter<"BatteryPack"> | boolean;
    isActive?: Prisma.BoolFilter<"BatteryPack"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"BatteryPack"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BatteryPack"> | Date | string;
    model?: Prisma.XOR<Prisma.ModelScalarRelationFilter, Prisma.ModelWhereInput>;
    variants?: Prisma.VariantListRelationFilter;
    specs?: Prisma.BatteryPackSpecListRelationFilter;
}, "id">;
export type BatteryPackOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    batteryCapacity?: Prisma.SortOrder;
    rangeKm?: Prisma.SortOrderInput | Prisma.SortOrder;
    motorPowerKw?: Prisma.SortOrderInput | Prisma.SortOrder;
    chargingTimeHours?: Prisma.SortOrderInput | Prisma.SortOrder;
    fastCharging?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.BatteryPackCountOrderByAggregateInput;
    _avg?: Prisma.BatteryPackAvgOrderByAggregateInput;
    _max?: Prisma.BatteryPackMaxOrderByAggregateInput;
    _min?: Prisma.BatteryPackMinOrderByAggregateInput;
    _sum?: Prisma.BatteryPackSumOrderByAggregateInput;
};
export type BatteryPackScalarWhereWithAggregatesInput = {
    AND?: Prisma.BatteryPackScalarWhereWithAggregatesInput | Prisma.BatteryPackScalarWhereWithAggregatesInput[];
    OR?: Prisma.BatteryPackScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BatteryPackScalarWhereWithAggregatesInput | Prisma.BatteryPackScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"BatteryPack"> | number;
    modelId?: Prisma.IntWithAggregatesFilter<"BatteryPack"> | number;
    name?: Prisma.StringWithAggregatesFilter<"BatteryPack"> | string;
    batteryCapacity?: Prisma.FloatWithAggregatesFilter<"BatteryPack"> | number;
    rangeKm?: Prisma.IntNullableWithAggregatesFilter<"BatteryPack"> | number | null;
    motorPowerKw?: Prisma.FloatNullableWithAggregatesFilter<"BatteryPack"> | number | null;
    chargingTimeHours?: Prisma.FloatNullableWithAggregatesFilter<"BatteryPack"> | number | null;
    fastCharging?: Prisma.BoolWithAggregatesFilter<"BatteryPack"> | boolean;
    isActive?: Prisma.BoolWithAggregatesFilter<"BatteryPack"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BatteryPack"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"BatteryPack"> | Date | string;
};
export type BatteryPackCreateInput = {
    name: string;
    batteryCapacity: number;
    rangeKm?: number | null;
    motorPowerKw?: number | null;
    chargingTimeHours?: number | null;
    fastCharging?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    model: Prisma.ModelCreateNestedOneWithoutBatteryPacksInput;
    variants?: Prisma.VariantCreateNestedManyWithoutBatteryPackInput;
    specs?: Prisma.BatteryPackSpecCreateNestedManyWithoutBatteryPackInput;
};
export type BatteryPackUncheckedCreateInput = {
    id?: number;
    modelId: number;
    name: string;
    batteryCapacity: number;
    rangeKm?: number | null;
    motorPowerKw?: number | null;
    chargingTimeHours?: number | null;
    fastCharging?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    variants?: Prisma.VariantUncheckedCreateNestedManyWithoutBatteryPackInput;
    specs?: Prisma.BatteryPackSpecUncheckedCreateNestedManyWithoutBatteryPackInput;
};
export type BatteryPackUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    batteryCapacity?: Prisma.FloatFieldUpdateOperationsInput | number;
    rangeKm?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    motorPowerKw?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    chargingTimeHours?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    fastCharging?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    model?: Prisma.ModelUpdateOneRequiredWithoutBatteryPacksNestedInput;
    variants?: Prisma.VariantUpdateManyWithoutBatteryPackNestedInput;
    specs?: Prisma.BatteryPackSpecUpdateManyWithoutBatteryPackNestedInput;
};
export type BatteryPackUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    modelId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    batteryCapacity?: Prisma.FloatFieldUpdateOperationsInput | number;
    rangeKm?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    motorPowerKw?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    chargingTimeHours?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    fastCharging?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    variants?: Prisma.VariantUncheckedUpdateManyWithoutBatteryPackNestedInput;
    specs?: Prisma.BatteryPackSpecUncheckedUpdateManyWithoutBatteryPackNestedInput;
};
export type BatteryPackCreateManyInput = {
    id?: number;
    modelId: number;
    name: string;
    batteryCapacity: number;
    rangeKm?: number | null;
    motorPowerKw?: number | null;
    chargingTimeHours?: number | null;
    fastCharging?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BatteryPackUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    batteryCapacity?: Prisma.FloatFieldUpdateOperationsInput | number;
    rangeKm?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    motorPowerKw?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    chargingTimeHours?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    fastCharging?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BatteryPackUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    modelId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    batteryCapacity?: Prisma.FloatFieldUpdateOperationsInput | number;
    rangeKm?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    motorPowerKw?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    chargingTimeHours?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    fastCharging?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BatteryPackListRelationFilter = {
    every?: Prisma.BatteryPackWhereInput;
    some?: Prisma.BatteryPackWhereInput;
    none?: Prisma.BatteryPackWhereInput;
};
export type BatteryPackOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BatteryPackOrderByRelevanceInput = {
    fields: Prisma.BatteryPackOrderByRelevanceFieldEnum | Prisma.BatteryPackOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type BatteryPackCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    batteryCapacity?: Prisma.SortOrder;
    rangeKm?: Prisma.SortOrder;
    motorPowerKw?: Prisma.SortOrder;
    chargingTimeHours?: Prisma.SortOrder;
    fastCharging?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BatteryPackAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
    batteryCapacity?: Prisma.SortOrder;
    rangeKm?: Prisma.SortOrder;
    motorPowerKw?: Prisma.SortOrder;
    chargingTimeHours?: Prisma.SortOrder;
};
export type BatteryPackMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    batteryCapacity?: Prisma.SortOrder;
    rangeKm?: Prisma.SortOrder;
    motorPowerKw?: Prisma.SortOrder;
    chargingTimeHours?: Prisma.SortOrder;
    fastCharging?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BatteryPackMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    batteryCapacity?: Prisma.SortOrder;
    rangeKm?: Prisma.SortOrder;
    motorPowerKw?: Prisma.SortOrder;
    chargingTimeHours?: Prisma.SortOrder;
    fastCharging?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BatteryPackSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
    batteryCapacity?: Prisma.SortOrder;
    rangeKm?: Prisma.SortOrder;
    motorPowerKw?: Prisma.SortOrder;
    chargingTimeHours?: Prisma.SortOrder;
};
export type BatteryPackScalarRelationFilter = {
    is?: Prisma.BatteryPackWhereInput;
    isNot?: Prisma.BatteryPackWhereInput;
};
export type BatteryPackCreateNestedManyWithoutModelInput = {
    create?: Prisma.XOR<Prisma.BatteryPackCreateWithoutModelInput, Prisma.BatteryPackUncheckedCreateWithoutModelInput> | Prisma.BatteryPackCreateWithoutModelInput[] | Prisma.BatteryPackUncheckedCreateWithoutModelInput[];
    connectOrCreate?: Prisma.BatteryPackCreateOrConnectWithoutModelInput | Prisma.BatteryPackCreateOrConnectWithoutModelInput[];
    createMany?: Prisma.BatteryPackCreateManyModelInputEnvelope;
    connect?: Prisma.BatteryPackWhereUniqueInput | Prisma.BatteryPackWhereUniqueInput[];
};
export type BatteryPackUncheckedCreateNestedManyWithoutModelInput = {
    create?: Prisma.XOR<Prisma.BatteryPackCreateWithoutModelInput, Prisma.BatteryPackUncheckedCreateWithoutModelInput> | Prisma.BatteryPackCreateWithoutModelInput[] | Prisma.BatteryPackUncheckedCreateWithoutModelInput[];
    connectOrCreate?: Prisma.BatteryPackCreateOrConnectWithoutModelInput | Prisma.BatteryPackCreateOrConnectWithoutModelInput[];
    createMany?: Prisma.BatteryPackCreateManyModelInputEnvelope;
    connect?: Prisma.BatteryPackWhereUniqueInput | Prisma.BatteryPackWhereUniqueInput[];
};
export type BatteryPackUpdateManyWithoutModelNestedInput = {
    create?: Prisma.XOR<Prisma.BatteryPackCreateWithoutModelInput, Prisma.BatteryPackUncheckedCreateWithoutModelInput> | Prisma.BatteryPackCreateWithoutModelInput[] | Prisma.BatteryPackUncheckedCreateWithoutModelInput[];
    connectOrCreate?: Prisma.BatteryPackCreateOrConnectWithoutModelInput | Prisma.BatteryPackCreateOrConnectWithoutModelInput[];
    upsert?: Prisma.BatteryPackUpsertWithWhereUniqueWithoutModelInput | Prisma.BatteryPackUpsertWithWhereUniqueWithoutModelInput[];
    createMany?: Prisma.BatteryPackCreateManyModelInputEnvelope;
    set?: Prisma.BatteryPackWhereUniqueInput | Prisma.BatteryPackWhereUniqueInput[];
    disconnect?: Prisma.BatteryPackWhereUniqueInput | Prisma.BatteryPackWhereUniqueInput[];
    delete?: Prisma.BatteryPackWhereUniqueInput | Prisma.BatteryPackWhereUniqueInput[];
    connect?: Prisma.BatteryPackWhereUniqueInput | Prisma.BatteryPackWhereUniqueInput[];
    update?: Prisma.BatteryPackUpdateWithWhereUniqueWithoutModelInput | Prisma.BatteryPackUpdateWithWhereUniqueWithoutModelInput[];
    updateMany?: Prisma.BatteryPackUpdateManyWithWhereWithoutModelInput | Prisma.BatteryPackUpdateManyWithWhereWithoutModelInput[];
    deleteMany?: Prisma.BatteryPackScalarWhereInput | Prisma.BatteryPackScalarWhereInput[];
};
export type BatteryPackUncheckedUpdateManyWithoutModelNestedInput = {
    create?: Prisma.XOR<Prisma.BatteryPackCreateWithoutModelInput, Prisma.BatteryPackUncheckedCreateWithoutModelInput> | Prisma.BatteryPackCreateWithoutModelInput[] | Prisma.BatteryPackUncheckedCreateWithoutModelInput[];
    connectOrCreate?: Prisma.BatteryPackCreateOrConnectWithoutModelInput | Prisma.BatteryPackCreateOrConnectWithoutModelInput[];
    upsert?: Prisma.BatteryPackUpsertWithWhereUniqueWithoutModelInput | Prisma.BatteryPackUpsertWithWhereUniqueWithoutModelInput[];
    createMany?: Prisma.BatteryPackCreateManyModelInputEnvelope;
    set?: Prisma.BatteryPackWhereUniqueInput | Prisma.BatteryPackWhereUniqueInput[];
    disconnect?: Prisma.BatteryPackWhereUniqueInput | Prisma.BatteryPackWhereUniqueInput[];
    delete?: Prisma.BatteryPackWhereUniqueInput | Prisma.BatteryPackWhereUniqueInput[];
    connect?: Prisma.BatteryPackWhereUniqueInput | Prisma.BatteryPackWhereUniqueInput[];
    update?: Prisma.BatteryPackUpdateWithWhereUniqueWithoutModelInput | Prisma.BatteryPackUpdateWithWhereUniqueWithoutModelInput[];
    updateMany?: Prisma.BatteryPackUpdateManyWithWhereWithoutModelInput | Prisma.BatteryPackUpdateManyWithWhereWithoutModelInput[];
    deleteMany?: Prisma.BatteryPackScalarWhereInput | Prisma.BatteryPackScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type BatteryPackCreateNestedOneWithoutVariantsInput = {
    create?: Prisma.XOR<Prisma.BatteryPackCreateWithoutVariantsInput, Prisma.BatteryPackUncheckedCreateWithoutVariantsInput>;
    connectOrCreate?: Prisma.BatteryPackCreateOrConnectWithoutVariantsInput;
    connect?: Prisma.BatteryPackWhereUniqueInput;
};
export type BatteryPackUpdateOneRequiredWithoutVariantsNestedInput = {
    create?: Prisma.XOR<Prisma.BatteryPackCreateWithoutVariantsInput, Prisma.BatteryPackUncheckedCreateWithoutVariantsInput>;
    connectOrCreate?: Prisma.BatteryPackCreateOrConnectWithoutVariantsInput;
    upsert?: Prisma.BatteryPackUpsertWithoutVariantsInput;
    connect?: Prisma.BatteryPackWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BatteryPackUpdateToOneWithWhereWithoutVariantsInput, Prisma.BatteryPackUpdateWithoutVariantsInput>, Prisma.BatteryPackUncheckedUpdateWithoutVariantsInput>;
};
export type BatteryPackCreateNestedOneWithoutSpecsInput = {
    create?: Prisma.XOR<Prisma.BatteryPackCreateWithoutSpecsInput, Prisma.BatteryPackUncheckedCreateWithoutSpecsInput>;
    connectOrCreate?: Prisma.BatteryPackCreateOrConnectWithoutSpecsInput;
    connect?: Prisma.BatteryPackWhereUniqueInput;
};
export type BatteryPackUpdateOneRequiredWithoutSpecsNestedInput = {
    create?: Prisma.XOR<Prisma.BatteryPackCreateWithoutSpecsInput, Prisma.BatteryPackUncheckedCreateWithoutSpecsInput>;
    connectOrCreate?: Prisma.BatteryPackCreateOrConnectWithoutSpecsInput;
    upsert?: Prisma.BatteryPackUpsertWithoutSpecsInput;
    connect?: Prisma.BatteryPackWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BatteryPackUpdateToOneWithWhereWithoutSpecsInput, Prisma.BatteryPackUpdateWithoutSpecsInput>, Prisma.BatteryPackUncheckedUpdateWithoutSpecsInput>;
};
export type BatteryPackCreateWithoutModelInput = {
    name: string;
    batteryCapacity: number;
    rangeKm?: number | null;
    motorPowerKw?: number | null;
    chargingTimeHours?: number | null;
    fastCharging?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    variants?: Prisma.VariantCreateNestedManyWithoutBatteryPackInput;
    specs?: Prisma.BatteryPackSpecCreateNestedManyWithoutBatteryPackInput;
};
export type BatteryPackUncheckedCreateWithoutModelInput = {
    id?: number;
    name: string;
    batteryCapacity: number;
    rangeKm?: number | null;
    motorPowerKw?: number | null;
    chargingTimeHours?: number | null;
    fastCharging?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    variants?: Prisma.VariantUncheckedCreateNestedManyWithoutBatteryPackInput;
    specs?: Prisma.BatteryPackSpecUncheckedCreateNestedManyWithoutBatteryPackInput;
};
export type BatteryPackCreateOrConnectWithoutModelInput = {
    where: Prisma.BatteryPackWhereUniqueInput;
    create: Prisma.XOR<Prisma.BatteryPackCreateWithoutModelInput, Prisma.BatteryPackUncheckedCreateWithoutModelInput>;
};
export type BatteryPackCreateManyModelInputEnvelope = {
    data: Prisma.BatteryPackCreateManyModelInput | Prisma.BatteryPackCreateManyModelInput[];
    skipDuplicates?: boolean;
};
export type BatteryPackUpsertWithWhereUniqueWithoutModelInput = {
    where: Prisma.BatteryPackWhereUniqueInput;
    update: Prisma.XOR<Prisma.BatteryPackUpdateWithoutModelInput, Prisma.BatteryPackUncheckedUpdateWithoutModelInput>;
    create: Prisma.XOR<Prisma.BatteryPackCreateWithoutModelInput, Prisma.BatteryPackUncheckedCreateWithoutModelInput>;
};
export type BatteryPackUpdateWithWhereUniqueWithoutModelInput = {
    where: Prisma.BatteryPackWhereUniqueInput;
    data: Prisma.XOR<Prisma.BatteryPackUpdateWithoutModelInput, Prisma.BatteryPackUncheckedUpdateWithoutModelInput>;
};
export type BatteryPackUpdateManyWithWhereWithoutModelInput = {
    where: Prisma.BatteryPackScalarWhereInput;
    data: Prisma.XOR<Prisma.BatteryPackUpdateManyMutationInput, Prisma.BatteryPackUncheckedUpdateManyWithoutModelInput>;
};
export type BatteryPackScalarWhereInput = {
    AND?: Prisma.BatteryPackScalarWhereInput | Prisma.BatteryPackScalarWhereInput[];
    OR?: Prisma.BatteryPackScalarWhereInput[];
    NOT?: Prisma.BatteryPackScalarWhereInput | Prisma.BatteryPackScalarWhereInput[];
    id?: Prisma.IntFilter<"BatteryPack"> | number;
    modelId?: Prisma.IntFilter<"BatteryPack"> | number;
    name?: Prisma.StringFilter<"BatteryPack"> | string;
    batteryCapacity?: Prisma.FloatFilter<"BatteryPack"> | number;
    rangeKm?: Prisma.IntNullableFilter<"BatteryPack"> | number | null;
    motorPowerKw?: Prisma.FloatNullableFilter<"BatteryPack"> | number | null;
    chargingTimeHours?: Prisma.FloatNullableFilter<"BatteryPack"> | number | null;
    fastCharging?: Prisma.BoolFilter<"BatteryPack"> | boolean;
    isActive?: Prisma.BoolFilter<"BatteryPack"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"BatteryPack"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BatteryPack"> | Date | string;
};
export type BatteryPackCreateWithoutVariantsInput = {
    name: string;
    batteryCapacity: number;
    rangeKm?: number | null;
    motorPowerKw?: number | null;
    chargingTimeHours?: number | null;
    fastCharging?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    model: Prisma.ModelCreateNestedOneWithoutBatteryPacksInput;
    specs?: Prisma.BatteryPackSpecCreateNestedManyWithoutBatteryPackInput;
};
export type BatteryPackUncheckedCreateWithoutVariantsInput = {
    id?: number;
    modelId: number;
    name: string;
    batteryCapacity: number;
    rangeKm?: number | null;
    motorPowerKw?: number | null;
    chargingTimeHours?: number | null;
    fastCharging?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    specs?: Prisma.BatteryPackSpecUncheckedCreateNestedManyWithoutBatteryPackInput;
};
export type BatteryPackCreateOrConnectWithoutVariantsInput = {
    where: Prisma.BatteryPackWhereUniqueInput;
    create: Prisma.XOR<Prisma.BatteryPackCreateWithoutVariantsInput, Prisma.BatteryPackUncheckedCreateWithoutVariantsInput>;
};
export type BatteryPackUpsertWithoutVariantsInput = {
    update: Prisma.XOR<Prisma.BatteryPackUpdateWithoutVariantsInput, Prisma.BatteryPackUncheckedUpdateWithoutVariantsInput>;
    create: Prisma.XOR<Prisma.BatteryPackCreateWithoutVariantsInput, Prisma.BatteryPackUncheckedCreateWithoutVariantsInput>;
    where?: Prisma.BatteryPackWhereInput;
};
export type BatteryPackUpdateToOneWithWhereWithoutVariantsInput = {
    where?: Prisma.BatteryPackWhereInput;
    data: Prisma.XOR<Prisma.BatteryPackUpdateWithoutVariantsInput, Prisma.BatteryPackUncheckedUpdateWithoutVariantsInput>;
};
export type BatteryPackUpdateWithoutVariantsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    batteryCapacity?: Prisma.FloatFieldUpdateOperationsInput | number;
    rangeKm?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    motorPowerKw?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    chargingTimeHours?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    fastCharging?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    model?: Prisma.ModelUpdateOneRequiredWithoutBatteryPacksNestedInput;
    specs?: Prisma.BatteryPackSpecUpdateManyWithoutBatteryPackNestedInput;
};
export type BatteryPackUncheckedUpdateWithoutVariantsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    modelId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    batteryCapacity?: Prisma.FloatFieldUpdateOperationsInput | number;
    rangeKm?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    motorPowerKw?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    chargingTimeHours?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    fastCharging?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    specs?: Prisma.BatteryPackSpecUncheckedUpdateManyWithoutBatteryPackNestedInput;
};
export type BatteryPackCreateWithoutSpecsInput = {
    name: string;
    batteryCapacity: number;
    rangeKm?: number | null;
    motorPowerKw?: number | null;
    chargingTimeHours?: number | null;
    fastCharging?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    model: Prisma.ModelCreateNestedOneWithoutBatteryPacksInput;
    variants?: Prisma.VariantCreateNestedManyWithoutBatteryPackInput;
};
export type BatteryPackUncheckedCreateWithoutSpecsInput = {
    id?: number;
    modelId: number;
    name: string;
    batteryCapacity: number;
    rangeKm?: number | null;
    motorPowerKw?: number | null;
    chargingTimeHours?: number | null;
    fastCharging?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    variants?: Prisma.VariantUncheckedCreateNestedManyWithoutBatteryPackInput;
};
export type BatteryPackCreateOrConnectWithoutSpecsInput = {
    where: Prisma.BatteryPackWhereUniqueInput;
    create: Prisma.XOR<Prisma.BatteryPackCreateWithoutSpecsInput, Prisma.BatteryPackUncheckedCreateWithoutSpecsInput>;
};
export type BatteryPackUpsertWithoutSpecsInput = {
    update: Prisma.XOR<Prisma.BatteryPackUpdateWithoutSpecsInput, Prisma.BatteryPackUncheckedUpdateWithoutSpecsInput>;
    create: Prisma.XOR<Prisma.BatteryPackCreateWithoutSpecsInput, Prisma.BatteryPackUncheckedCreateWithoutSpecsInput>;
    where?: Prisma.BatteryPackWhereInput;
};
export type BatteryPackUpdateToOneWithWhereWithoutSpecsInput = {
    where?: Prisma.BatteryPackWhereInput;
    data: Prisma.XOR<Prisma.BatteryPackUpdateWithoutSpecsInput, Prisma.BatteryPackUncheckedUpdateWithoutSpecsInput>;
};
export type BatteryPackUpdateWithoutSpecsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    batteryCapacity?: Prisma.FloatFieldUpdateOperationsInput | number;
    rangeKm?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    motorPowerKw?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    chargingTimeHours?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    fastCharging?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    model?: Prisma.ModelUpdateOneRequiredWithoutBatteryPacksNestedInput;
    variants?: Prisma.VariantUpdateManyWithoutBatteryPackNestedInput;
};
export type BatteryPackUncheckedUpdateWithoutSpecsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    modelId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    batteryCapacity?: Prisma.FloatFieldUpdateOperationsInput | number;
    rangeKm?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    motorPowerKw?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    chargingTimeHours?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    fastCharging?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    variants?: Prisma.VariantUncheckedUpdateManyWithoutBatteryPackNestedInput;
};
export type BatteryPackCreateManyModelInput = {
    id?: number;
    name: string;
    batteryCapacity: number;
    rangeKm?: number | null;
    motorPowerKw?: number | null;
    chargingTimeHours?: number | null;
    fastCharging?: boolean;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BatteryPackUpdateWithoutModelInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    batteryCapacity?: Prisma.FloatFieldUpdateOperationsInput | number;
    rangeKm?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    motorPowerKw?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    chargingTimeHours?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    fastCharging?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    variants?: Prisma.VariantUpdateManyWithoutBatteryPackNestedInput;
    specs?: Prisma.BatteryPackSpecUpdateManyWithoutBatteryPackNestedInput;
};
export type BatteryPackUncheckedUpdateWithoutModelInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    batteryCapacity?: Prisma.FloatFieldUpdateOperationsInput | number;
    rangeKm?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    motorPowerKw?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    chargingTimeHours?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    fastCharging?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    variants?: Prisma.VariantUncheckedUpdateManyWithoutBatteryPackNestedInput;
    specs?: Prisma.BatteryPackSpecUncheckedUpdateManyWithoutBatteryPackNestedInput;
};
export type BatteryPackUncheckedUpdateManyWithoutModelInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    batteryCapacity?: Prisma.FloatFieldUpdateOperationsInput | number;
    rangeKm?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    motorPowerKw?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    chargingTimeHours?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    fastCharging?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BatteryPackCountOutputType = {
    variants: number;
    specs: number;
};
export type BatteryPackCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    variants?: boolean | BatteryPackCountOutputTypeCountVariantsArgs;
    specs?: boolean | BatteryPackCountOutputTypeCountSpecsArgs;
};
export type BatteryPackCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BatteryPackCountOutputTypeSelect<ExtArgs> | null;
};
export type BatteryPackCountOutputTypeCountVariantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VariantWhereInput;
};
export type BatteryPackCountOutputTypeCountSpecsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BatteryPackSpecWhereInput;
};
export type BatteryPackSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    modelId?: boolean;
    name?: boolean;
    batteryCapacity?: boolean;
    rangeKm?: boolean;
    motorPowerKw?: boolean;
    chargingTimeHours?: boolean;
    fastCharging?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    model?: boolean | Prisma.ModelDefaultArgs<ExtArgs>;
    variants?: boolean | Prisma.BatteryPack$variantsArgs<ExtArgs>;
    specs?: boolean | Prisma.BatteryPack$specsArgs<ExtArgs>;
    _count?: boolean | Prisma.BatteryPackCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["batteryPack"]>;
export type BatteryPackSelectScalar = {
    id?: boolean;
    modelId?: boolean;
    name?: boolean;
    batteryCapacity?: boolean;
    rangeKm?: boolean;
    motorPowerKw?: boolean;
    chargingTimeHours?: boolean;
    fastCharging?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type BatteryPackOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "modelId" | "name" | "batteryCapacity" | "rangeKm" | "motorPowerKw" | "chargingTimeHours" | "fastCharging" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["batteryPack"]>;
export type BatteryPackInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    model?: boolean | Prisma.ModelDefaultArgs<ExtArgs>;
    variants?: boolean | Prisma.BatteryPack$variantsArgs<ExtArgs>;
    specs?: boolean | Prisma.BatteryPack$specsArgs<ExtArgs>;
    _count?: boolean | Prisma.BatteryPackCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $BatteryPackPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BatteryPack";
    objects: {
        model: Prisma.$ModelPayload<ExtArgs>;
        variants: Prisma.$VariantPayload<ExtArgs>[];
        specs: Prisma.$BatteryPackSpecPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        modelId: number;
        name: string;
        batteryCapacity: number;
        rangeKm: number | null;
        motorPowerKw: number | null;
        chargingTimeHours: number | null;
        fastCharging: boolean;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["batteryPack"]>;
    composites: {};
};
export type BatteryPackGetPayload<S extends boolean | null | undefined | BatteryPackDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BatteryPackPayload, S>;
export type BatteryPackCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BatteryPackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BatteryPackCountAggregateInputType | true;
};
export interface BatteryPackDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BatteryPack'];
        meta: {
            name: 'BatteryPack';
        };
    };
    findUnique<T extends BatteryPackFindUniqueArgs>(args: Prisma.SelectSubset<T, BatteryPackFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BatteryPackClient<runtime.Types.Result.GetResult<Prisma.$BatteryPackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BatteryPackFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BatteryPackFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BatteryPackClient<runtime.Types.Result.GetResult<Prisma.$BatteryPackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BatteryPackFindFirstArgs>(args?: Prisma.SelectSubset<T, BatteryPackFindFirstArgs<ExtArgs>>): Prisma.Prisma__BatteryPackClient<runtime.Types.Result.GetResult<Prisma.$BatteryPackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BatteryPackFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BatteryPackFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BatteryPackClient<runtime.Types.Result.GetResult<Prisma.$BatteryPackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BatteryPackFindManyArgs>(args?: Prisma.SelectSubset<T, BatteryPackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BatteryPackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BatteryPackCreateArgs>(args: Prisma.SelectSubset<T, BatteryPackCreateArgs<ExtArgs>>): Prisma.Prisma__BatteryPackClient<runtime.Types.Result.GetResult<Prisma.$BatteryPackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BatteryPackCreateManyArgs>(args?: Prisma.SelectSubset<T, BatteryPackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends BatteryPackDeleteArgs>(args: Prisma.SelectSubset<T, BatteryPackDeleteArgs<ExtArgs>>): Prisma.Prisma__BatteryPackClient<runtime.Types.Result.GetResult<Prisma.$BatteryPackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BatteryPackUpdateArgs>(args: Prisma.SelectSubset<T, BatteryPackUpdateArgs<ExtArgs>>): Prisma.Prisma__BatteryPackClient<runtime.Types.Result.GetResult<Prisma.$BatteryPackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BatteryPackDeleteManyArgs>(args?: Prisma.SelectSubset<T, BatteryPackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BatteryPackUpdateManyArgs>(args: Prisma.SelectSubset<T, BatteryPackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends BatteryPackUpsertArgs>(args: Prisma.SelectSubset<T, BatteryPackUpsertArgs<ExtArgs>>): Prisma.Prisma__BatteryPackClient<runtime.Types.Result.GetResult<Prisma.$BatteryPackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BatteryPackCountArgs>(args?: Prisma.Subset<T, BatteryPackCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BatteryPackCountAggregateOutputType> : number>;
    aggregate<T extends BatteryPackAggregateArgs>(args: Prisma.Subset<T, BatteryPackAggregateArgs>): Prisma.PrismaPromise<GetBatteryPackAggregateType<T>>;
    groupBy<T extends BatteryPackGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BatteryPackGroupByArgs['orderBy'];
    } : {
        orderBy?: BatteryPackGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BatteryPackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBatteryPackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BatteryPackFieldRefs;
}
export interface Prisma__BatteryPackClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    model<T extends Prisma.ModelDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ModelDefaultArgs<ExtArgs>>): Prisma.Prisma__ModelClient<runtime.Types.Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    variants<T extends Prisma.BatteryPack$variantsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BatteryPack$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    specs<T extends Prisma.BatteryPack$specsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BatteryPack$specsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BatteryPackSpecPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BatteryPackFieldRefs {
    readonly id: Prisma.FieldRef<"BatteryPack", 'Int'>;
    readonly modelId: Prisma.FieldRef<"BatteryPack", 'Int'>;
    readonly name: Prisma.FieldRef<"BatteryPack", 'String'>;
    readonly batteryCapacity: Prisma.FieldRef<"BatteryPack", 'Float'>;
    readonly rangeKm: Prisma.FieldRef<"BatteryPack", 'Int'>;
    readonly motorPowerKw: Prisma.FieldRef<"BatteryPack", 'Float'>;
    readonly chargingTimeHours: Prisma.FieldRef<"BatteryPack", 'Float'>;
    readonly fastCharging: Prisma.FieldRef<"BatteryPack", 'Boolean'>;
    readonly isActive: Prisma.FieldRef<"BatteryPack", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"BatteryPack", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"BatteryPack", 'DateTime'>;
}
export type BatteryPackFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BatteryPackSelect<ExtArgs> | null;
    omit?: Prisma.BatteryPackOmit<ExtArgs> | null;
    include?: Prisma.BatteryPackInclude<ExtArgs> | null;
    where: Prisma.BatteryPackWhereUniqueInput;
};
export type BatteryPackFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BatteryPackSelect<ExtArgs> | null;
    omit?: Prisma.BatteryPackOmit<ExtArgs> | null;
    include?: Prisma.BatteryPackInclude<ExtArgs> | null;
    where: Prisma.BatteryPackWhereUniqueInput;
};
export type BatteryPackFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BatteryPackSelect<ExtArgs> | null;
    omit?: Prisma.BatteryPackOmit<ExtArgs> | null;
    include?: Prisma.BatteryPackInclude<ExtArgs> | null;
    where?: Prisma.BatteryPackWhereInput;
    orderBy?: Prisma.BatteryPackOrderByWithRelationInput | Prisma.BatteryPackOrderByWithRelationInput[];
    cursor?: Prisma.BatteryPackWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BatteryPackScalarFieldEnum | Prisma.BatteryPackScalarFieldEnum[];
};
export type BatteryPackFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BatteryPackSelect<ExtArgs> | null;
    omit?: Prisma.BatteryPackOmit<ExtArgs> | null;
    include?: Prisma.BatteryPackInclude<ExtArgs> | null;
    where?: Prisma.BatteryPackWhereInput;
    orderBy?: Prisma.BatteryPackOrderByWithRelationInput | Prisma.BatteryPackOrderByWithRelationInput[];
    cursor?: Prisma.BatteryPackWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BatteryPackScalarFieldEnum | Prisma.BatteryPackScalarFieldEnum[];
};
export type BatteryPackFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BatteryPackSelect<ExtArgs> | null;
    omit?: Prisma.BatteryPackOmit<ExtArgs> | null;
    include?: Prisma.BatteryPackInclude<ExtArgs> | null;
    where?: Prisma.BatteryPackWhereInput;
    orderBy?: Prisma.BatteryPackOrderByWithRelationInput | Prisma.BatteryPackOrderByWithRelationInput[];
    cursor?: Prisma.BatteryPackWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BatteryPackScalarFieldEnum | Prisma.BatteryPackScalarFieldEnum[];
};
export type BatteryPackCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BatteryPackSelect<ExtArgs> | null;
    omit?: Prisma.BatteryPackOmit<ExtArgs> | null;
    include?: Prisma.BatteryPackInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BatteryPackCreateInput, Prisma.BatteryPackUncheckedCreateInput>;
};
export type BatteryPackCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BatteryPackCreateManyInput | Prisma.BatteryPackCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BatteryPackUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BatteryPackSelect<ExtArgs> | null;
    omit?: Prisma.BatteryPackOmit<ExtArgs> | null;
    include?: Prisma.BatteryPackInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BatteryPackUpdateInput, Prisma.BatteryPackUncheckedUpdateInput>;
    where: Prisma.BatteryPackWhereUniqueInput;
};
export type BatteryPackUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BatteryPackUpdateManyMutationInput, Prisma.BatteryPackUncheckedUpdateManyInput>;
    where?: Prisma.BatteryPackWhereInput;
    limit?: number;
};
export type BatteryPackUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BatteryPackSelect<ExtArgs> | null;
    omit?: Prisma.BatteryPackOmit<ExtArgs> | null;
    include?: Prisma.BatteryPackInclude<ExtArgs> | null;
    where: Prisma.BatteryPackWhereUniqueInput;
    create: Prisma.XOR<Prisma.BatteryPackCreateInput, Prisma.BatteryPackUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BatteryPackUpdateInput, Prisma.BatteryPackUncheckedUpdateInput>;
};
export type BatteryPackDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BatteryPackSelect<ExtArgs> | null;
    omit?: Prisma.BatteryPackOmit<ExtArgs> | null;
    include?: Prisma.BatteryPackInclude<ExtArgs> | null;
    where: Prisma.BatteryPackWhereUniqueInput;
};
export type BatteryPackDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BatteryPackWhereInput;
    limit?: number;
};
export type BatteryPack$variantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BatteryPack$specsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BatteryPackDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BatteryPackSelect<ExtArgs> | null;
    omit?: Prisma.BatteryPackOmit<ExtArgs> | null;
    include?: Prisma.BatteryPackInclude<ExtArgs> | null;
};
export {};
