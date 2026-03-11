import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ChargingStationTranslationModel = runtime.Types.Result.DefaultSelection<Prisma.$ChargingStationTranslationPayload>;
export type AggregateChargingStationTranslation = {
    _count: ChargingStationTranslationCountAggregateOutputType | null;
    _avg: ChargingStationTranslationAvgAggregateOutputType | null;
    _sum: ChargingStationTranslationSumAggregateOutputType | null;
    _min: ChargingStationTranslationMinAggregateOutputType | null;
    _max: ChargingStationTranslationMaxAggregateOutputType | null;
};
export type ChargingStationTranslationAvgAggregateOutputType = {
    id: number | null;
    chargingStationId: number | null;
    languageId: number | null;
};
export type ChargingStationTranslationSumAggregateOutputType = {
    id: number | null;
    chargingStationId: number | null;
    languageId: number | null;
};
export type ChargingStationTranslationMinAggregateOutputType = {
    id: number | null;
    chargingStationId: number | null;
    languageId: number | null;
    name: string | null;
    address: string | null;
};
export type ChargingStationTranslationMaxAggregateOutputType = {
    id: number | null;
    chargingStationId: number | null;
    languageId: number | null;
    name: string | null;
    address: string | null;
};
export type ChargingStationTranslationCountAggregateOutputType = {
    id: number;
    chargingStationId: number;
    languageId: number;
    name: number;
    address: number;
    _all: number;
};
export type ChargingStationTranslationAvgAggregateInputType = {
    id?: true;
    chargingStationId?: true;
    languageId?: true;
};
export type ChargingStationTranslationSumAggregateInputType = {
    id?: true;
    chargingStationId?: true;
    languageId?: true;
};
export type ChargingStationTranslationMinAggregateInputType = {
    id?: true;
    chargingStationId?: true;
    languageId?: true;
    name?: true;
    address?: true;
};
export type ChargingStationTranslationMaxAggregateInputType = {
    id?: true;
    chargingStationId?: true;
    languageId?: true;
    name?: true;
    address?: true;
};
export type ChargingStationTranslationCountAggregateInputType = {
    id?: true;
    chargingStationId?: true;
    languageId?: true;
    name?: true;
    address?: true;
    _all?: true;
};
export type ChargingStationTranslationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChargingStationTranslationWhereInput;
    orderBy?: Prisma.ChargingStationTranslationOrderByWithRelationInput | Prisma.ChargingStationTranslationOrderByWithRelationInput[];
    cursor?: Prisma.ChargingStationTranslationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ChargingStationTranslationCountAggregateInputType;
    _avg?: ChargingStationTranslationAvgAggregateInputType;
    _sum?: ChargingStationTranslationSumAggregateInputType;
    _min?: ChargingStationTranslationMinAggregateInputType;
    _max?: ChargingStationTranslationMaxAggregateInputType;
};
export type GetChargingStationTranslationAggregateType<T extends ChargingStationTranslationAggregateArgs> = {
    [P in keyof T & keyof AggregateChargingStationTranslation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateChargingStationTranslation[P]> : Prisma.GetScalarType<T[P], AggregateChargingStationTranslation[P]>;
};
export type ChargingStationTranslationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChargingStationTranslationWhereInput;
    orderBy?: Prisma.ChargingStationTranslationOrderByWithAggregationInput | Prisma.ChargingStationTranslationOrderByWithAggregationInput[];
    by: Prisma.ChargingStationTranslationScalarFieldEnum[] | Prisma.ChargingStationTranslationScalarFieldEnum;
    having?: Prisma.ChargingStationTranslationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ChargingStationTranslationCountAggregateInputType | true;
    _avg?: ChargingStationTranslationAvgAggregateInputType;
    _sum?: ChargingStationTranslationSumAggregateInputType;
    _min?: ChargingStationTranslationMinAggregateInputType;
    _max?: ChargingStationTranslationMaxAggregateInputType;
};
export type ChargingStationTranslationGroupByOutputType = {
    id: number;
    chargingStationId: number;
    languageId: number;
    name: string;
    address: string | null;
    _count: ChargingStationTranslationCountAggregateOutputType | null;
    _avg: ChargingStationTranslationAvgAggregateOutputType | null;
    _sum: ChargingStationTranslationSumAggregateOutputType | null;
    _min: ChargingStationTranslationMinAggregateOutputType | null;
    _max: ChargingStationTranslationMaxAggregateOutputType | null;
};
type GetChargingStationTranslationGroupByPayload<T extends ChargingStationTranslationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ChargingStationTranslationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ChargingStationTranslationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ChargingStationTranslationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ChargingStationTranslationGroupByOutputType[P]>;
}>>;
export type ChargingStationTranslationWhereInput = {
    AND?: Prisma.ChargingStationTranslationWhereInput | Prisma.ChargingStationTranslationWhereInput[];
    OR?: Prisma.ChargingStationTranslationWhereInput[];
    NOT?: Prisma.ChargingStationTranslationWhereInput | Prisma.ChargingStationTranslationWhereInput[];
    id?: Prisma.IntFilter<"ChargingStationTranslation"> | number;
    chargingStationId?: Prisma.IntFilter<"ChargingStationTranslation"> | number;
    languageId?: Prisma.IntFilter<"ChargingStationTranslation"> | number;
    name?: Prisma.StringFilter<"ChargingStationTranslation"> | string;
    address?: Prisma.StringNullableFilter<"ChargingStationTranslation"> | string | null;
    chargingStation?: Prisma.XOR<Prisma.ChargingStationScalarRelationFilter, Prisma.ChargingStationWhereInput>;
    language?: Prisma.XOR<Prisma.LanguageScalarRelationFilter, Prisma.LanguageWhereInput>;
};
export type ChargingStationTranslationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    chargingStationId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    chargingStation?: Prisma.ChargingStationOrderByWithRelationInput;
    language?: Prisma.LanguageOrderByWithRelationInput;
    _relevance?: Prisma.ChargingStationTranslationOrderByRelevanceInput;
};
export type ChargingStationTranslationWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    chargingStationId_languageId?: Prisma.ChargingStationTranslationChargingStationIdLanguageIdCompoundUniqueInput;
    AND?: Prisma.ChargingStationTranslationWhereInput | Prisma.ChargingStationTranslationWhereInput[];
    OR?: Prisma.ChargingStationTranslationWhereInput[];
    NOT?: Prisma.ChargingStationTranslationWhereInput | Prisma.ChargingStationTranslationWhereInput[];
    chargingStationId?: Prisma.IntFilter<"ChargingStationTranslation"> | number;
    languageId?: Prisma.IntFilter<"ChargingStationTranslation"> | number;
    name?: Prisma.StringFilter<"ChargingStationTranslation"> | string;
    address?: Prisma.StringNullableFilter<"ChargingStationTranslation"> | string | null;
    chargingStation?: Prisma.XOR<Prisma.ChargingStationScalarRelationFilter, Prisma.ChargingStationWhereInput>;
    language?: Prisma.XOR<Prisma.LanguageScalarRelationFilter, Prisma.LanguageWhereInput>;
}, "id" | "chargingStationId_languageId">;
export type ChargingStationTranslationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    chargingStationId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ChargingStationTranslationCountOrderByAggregateInput;
    _avg?: Prisma.ChargingStationTranslationAvgOrderByAggregateInput;
    _max?: Prisma.ChargingStationTranslationMaxOrderByAggregateInput;
    _min?: Prisma.ChargingStationTranslationMinOrderByAggregateInput;
    _sum?: Prisma.ChargingStationTranslationSumOrderByAggregateInput;
};
export type ChargingStationTranslationScalarWhereWithAggregatesInput = {
    AND?: Prisma.ChargingStationTranslationScalarWhereWithAggregatesInput | Prisma.ChargingStationTranslationScalarWhereWithAggregatesInput[];
    OR?: Prisma.ChargingStationTranslationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ChargingStationTranslationScalarWhereWithAggregatesInput | Prisma.ChargingStationTranslationScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ChargingStationTranslation"> | number;
    chargingStationId?: Prisma.IntWithAggregatesFilter<"ChargingStationTranslation"> | number;
    languageId?: Prisma.IntWithAggregatesFilter<"ChargingStationTranslation"> | number;
    name?: Prisma.StringWithAggregatesFilter<"ChargingStationTranslation"> | string;
    address?: Prisma.StringNullableWithAggregatesFilter<"ChargingStationTranslation"> | string | null;
};
export type ChargingStationTranslationCreateInput = {
    name: string;
    address?: string | null;
    chargingStation: Prisma.ChargingStationCreateNestedOneWithoutTranslationsInput;
    language: Prisma.LanguageCreateNestedOneWithoutChargingStationTranslationsInput;
};
export type ChargingStationTranslationUncheckedCreateInput = {
    id?: number;
    chargingStationId: number;
    languageId: number;
    name: string;
    address?: string | null;
};
export type ChargingStationTranslationUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chargingStation?: Prisma.ChargingStationUpdateOneRequiredWithoutTranslationsNestedInput;
    language?: Prisma.LanguageUpdateOneRequiredWithoutChargingStationTranslationsNestedInput;
};
export type ChargingStationTranslationUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    chargingStationId?: Prisma.IntFieldUpdateOperationsInput | number;
    languageId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ChargingStationTranslationCreateManyInput = {
    id?: number;
    chargingStationId: number;
    languageId: number;
    name: string;
    address?: string | null;
};
export type ChargingStationTranslationUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ChargingStationTranslationUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    chargingStationId?: Prisma.IntFieldUpdateOperationsInput | number;
    languageId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ChargingStationTranslationListRelationFilter = {
    every?: Prisma.ChargingStationTranslationWhereInput;
    some?: Prisma.ChargingStationTranslationWhereInput;
    none?: Prisma.ChargingStationTranslationWhereInput;
};
export type ChargingStationTranslationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ChargingStationTranslationOrderByRelevanceInput = {
    fields: Prisma.ChargingStationTranslationOrderByRelevanceFieldEnum | Prisma.ChargingStationTranslationOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ChargingStationTranslationChargingStationIdLanguageIdCompoundUniqueInput = {
    chargingStationId: number;
    languageId: number;
};
export type ChargingStationTranslationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chargingStationId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
};
export type ChargingStationTranslationAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chargingStationId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
};
export type ChargingStationTranslationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chargingStationId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
};
export type ChargingStationTranslationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chargingStationId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
};
export type ChargingStationTranslationSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    chargingStationId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
};
export type ChargingStationTranslationCreateNestedManyWithoutLanguageInput = {
    create?: Prisma.XOR<Prisma.ChargingStationTranslationCreateWithoutLanguageInput, Prisma.ChargingStationTranslationUncheckedCreateWithoutLanguageInput> | Prisma.ChargingStationTranslationCreateWithoutLanguageInput[] | Prisma.ChargingStationTranslationUncheckedCreateWithoutLanguageInput[];
    connectOrCreate?: Prisma.ChargingStationTranslationCreateOrConnectWithoutLanguageInput | Prisma.ChargingStationTranslationCreateOrConnectWithoutLanguageInput[];
    createMany?: Prisma.ChargingStationTranslationCreateManyLanguageInputEnvelope;
    connect?: Prisma.ChargingStationTranslationWhereUniqueInput | Prisma.ChargingStationTranslationWhereUniqueInput[];
};
export type ChargingStationTranslationUncheckedCreateNestedManyWithoutLanguageInput = {
    create?: Prisma.XOR<Prisma.ChargingStationTranslationCreateWithoutLanguageInput, Prisma.ChargingStationTranslationUncheckedCreateWithoutLanguageInput> | Prisma.ChargingStationTranslationCreateWithoutLanguageInput[] | Prisma.ChargingStationTranslationUncheckedCreateWithoutLanguageInput[];
    connectOrCreate?: Prisma.ChargingStationTranslationCreateOrConnectWithoutLanguageInput | Prisma.ChargingStationTranslationCreateOrConnectWithoutLanguageInput[];
    createMany?: Prisma.ChargingStationTranslationCreateManyLanguageInputEnvelope;
    connect?: Prisma.ChargingStationTranslationWhereUniqueInput | Prisma.ChargingStationTranslationWhereUniqueInput[];
};
export type ChargingStationTranslationUpdateManyWithoutLanguageNestedInput = {
    create?: Prisma.XOR<Prisma.ChargingStationTranslationCreateWithoutLanguageInput, Prisma.ChargingStationTranslationUncheckedCreateWithoutLanguageInput> | Prisma.ChargingStationTranslationCreateWithoutLanguageInput[] | Prisma.ChargingStationTranslationUncheckedCreateWithoutLanguageInput[];
    connectOrCreate?: Prisma.ChargingStationTranslationCreateOrConnectWithoutLanguageInput | Prisma.ChargingStationTranslationCreateOrConnectWithoutLanguageInput[];
    upsert?: Prisma.ChargingStationTranslationUpsertWithWhereUniqueWithoutLanguageInput | Prisma.ChargingStationTranslationUpsertWithWhereUniqueWithoutLanguageInput[];
    createMany?: Prisma.ChargingStationTranslationCreateManyLanguageInputEnvelope;
    set?: Prisma.ChargingStationTranslationWhereUniqueInput | Prisma.ChargingStationTranslationWhereUniqueInput[];
    disconnect?: Prisma.ChargingStationTranslationWhereUniqueInput | Prisma.ChargingStationTranslationWhereUniqueInput[];
    delete?: Prisma.ChargingStationTranslationWhereUniqueInput | Prisma.ChargingStationTranslationWhereUniqueInput[];
    connect?: Prisma.ChargingStationTranslationWhereUniqueInput | Prisma.ChargingStationTranslationWhereUniqueInput[];
    update?: Prisma.ChargingStationTranslationUpdateWithWhereUniqueWithoutLanguageInput | Prisma.ChargingStationTranslationUpdateWithWhereUniqueWithoutLanguageInput[];
    updateMany?: Prisma.ChargingStationTranslationUpdateManyWithWhereWithoutLanguageInput | Prisma.ChargingStationTranslationUpdateManyWithWhereWithoutLanguageInput[];
    deleteMany?: Prisma.ChargingStationTranslationScalarWhereInput | Prisma.ChargingStationTranslationScalarWhereInput[];
};
export type ChargingStationTranslationUncheckedUpdateManyWithoutLanguageNestedInput = {
    create?: Prisma.XOR<Prisma.ChargingStationTranslationCreateWithoutLanguageInput, Prisma.ChargingStationTranslationUncheckedCreateWithoutLanguageInput> | Prisma.ChargingStationTranslationCreateWithoutLanguageInput[] | Prisma.ChargingStationTranslationUncheckedCreateWithoutLanguageInput[];
    connectOrCreate?: Prisma.ChargingStationTranslationCreateOrConnectWithoutLanguageInput | Prisma.ChargingStationTranslationCreateOrConnectWithoutLanguageInput[];
    upsert?: Prisma.ChargingStationTranslationUpsertWithWhereUniqueWithoutLanguageInput | Prisma.ChargingStationTranslationUpsertWithWhereUniqueWithoutLanguageInput[];
    createMany?: Prisma.ChargingStationTranslationCreateManyLanguageInputEnvelope;
    set?: Prisma.ChargingStationTranslationWhereUniqueInput | Prisma.ChargingStationTranslationWhereUniqueInput[];
    disconnect?: Prisma.ChargingStationTranslationWhereUniqueInput | Prisma.ChargingStationTranslationWhereUniqueInput[];
    delete?: Prisma.ChargingStationTranslationWhereUniqueInput | Prisma.ChargingStationTranslationWhereUniqueInput[];
    connect?: Prisma.ChargingStationTranslationWhereUniqueInput | Prisma.ChargingStationTranslationWhereUniqueInput[];
    update?: Prisma.ChargingStationTranslationUpdateWithWhereUniqueWithoutLanguageInput | Prisma.ChargingStationTranslationUpdateWithWhereUniqueWithoutLanguageInput[];
    updateMany?: Prisma.ChargingStationTranslationUpdateManyWithWhereWithoutLanguageInput | Prisma.ChargingStationTranslationUpdateManyWithWhereWithoutLanguageInput[];
    deleteMany?: Prisma.ChargingStationTranslationScalarWhereInput | Prisma.ChargingStationTranslationScalarWhereInput[];
};
export type ChargingStationTranslationCreateNestedManyWithoutChargingStationInput = {
    create?: Prisma.XOR<Prisma.ChargingStationTranslationCreateWithoutChargingStationInput, Prisma.ChargingStationTranslationUncheckedCreateWithoutChargingStationInput> | Prisma.ChargingStationTranslationCreateWithoutChargingStationInput[] | Prisma.ChargingStationTranslationUncheckedCreateWithoutChargingStationInput[];
    connectOrCreate?: Prisma.ChargingStationTranslationCreateOrConnectWithoutChargingStationInput | Prisma.ChargingStationTranslationCreateOrConnectWithoutChargingStationInput[];
    createMany?: Prisma.ChargingStationTranslationCreateManyChargingStationInputEnvelope;
    connect?: Prisma.ChargingStationTranslationWhereUniqueInput | Prisma.ChargingStationTranslationWhereUniqueInput[];
};
export type ChargingStationTranslationUncheckedCreateNestedManyWithoutChargingStationInput = {
    create?: Prisma.XOR<Prisma.ChargingStationTranslationCreateWithoutChargingStationInput, Prisma.ChargingStationTranslationUncheckedCreateWithoutChargingStationInput> | Prisma.ChargingStationTranslationCreateWithoutChargingStationInput[] | Prisma.ChargingStationTranslationUncheckedCreateWithoutChargingStationInput[];
    connectOrCreate?: Prisma.ChargingStationTranslationCreateOrConnectWithoutChargingStationInput | Prisma.ChargingStationTranslationCreateOrConnectWithoutChargingStationInput[];
    createMany?: Prisma.ChargingStationTranslationCreateManyChargingStationInputEnvelope;
    connect?: Prisma.ChargingStationTranslationWhereUniqueInput | Prisma.ChargingStationTranslationWhereUniqueInput[];
};
export type ChargingStationTranslationUpdateManyWithoutChargingStationNestedInput = {
    create?: Prisma.XOR<Prisma.ChargingStationTranslationCreateWithoutChargingStationInput, Prisma.ChargingStationTranslationUncheckedCreateWithoutChargingStationInput> | Prisma.ChargingStationTranslationCreateWithoutChargingStationInput[] | Prisma.ChargingStationTranslationUncheckedCreateWithoutChargingStationInput[];
    connectOrCreate?: Prisma.ChargingStationTranslationCreateOrConnectWithoutChargingStationInput | Prisma.ChargingStationTranslationCreateOrConnectWithoutChargingStationInput[];
    upsert?: Prisma.ChargingStationTranslationUpsertWithWhereUniqueWithoutChargingStationInput | Prisma.ChargingStationTranslationUpsertWithWhereUniqueWithoutChargingStationInput[];
    createMany?: Prisma.ChargingStationTranslationCreateManyChargingStationInputEnvelope;
    set?: Prisma.ChargingStationTranslationWhereUniqueInput | Prisma.ChargingStationTranslationWhereUniqueInput[];
    disconnect?: Prisma.ChargingStationTranslationWhereUniqueInput | Prisma.ChargingStationTranslationWhereUniqueInput[];
    delete?: Prisma.ChargingStationTranslationWhereUniqueInput | Prisma.ChargingStationTranslationWhereUniqueInput[];
    connect?: Prisma.ChargingStationTranslationWhereUniqueInput | Prisma.ChargingStationTranslationWhereUniqueInput[];
    update?: Prisma.ChargingStationTranslationUpdateWithWhereUniqueWithoutChargingStationInput | Prisma.ChargingStationTranslationUpdateWithWhereUniqueWithoutChargingStationInput[];
    updateMany?: Prisma.ChargingStationTranslationUpdateManyWithWhereWithoutChargingStationInput | Prisma.ChargingStationTranslationUpdateManyWithWhereWithoutChargingStationInput[];
    deleteMany?: Prisma.ChargingStationTranslationScalarWhereInput | Prisma.ChargingStationTranslationScalarWhereInput[];
};
export type ChargingStationTranslationUncheckedUpdateManyWithoutChargingStationNestedInput = {
    create?: Prisma.XOR<Prisma.ChargingStationTranslationCreateWithoutChargingStationInput, Prisma.ChargingStationTranslationUncheckedCreateWithoutChargingStationInput> | Prisma.ChargingStationTranslationCreateWithoutChargingStationInput[] | Prisma.ChargingStationTranslationUncheckedCreateWithoutChargingStationInput[];
    connectOrCreate?: Prisma.ChargingStationTranslationCreateOrConnectWithoutChargingStationInput | Prisma.ChargingStationTranslationCreateOrConnectWithoutChargingStationInput[];
    upsert?: Prisma.ChargingStationTranslationUpsertWithWhereUniqueWithoutChargingStationInput | Prisma.ChargingStationTranslationUpsertWithWhereUniqueWithoutChargingStationInput[];
    createMany?: Prisma.ChargingStationTranslationCreateManyChargingStationInputEnvelope;
    set?: Prisma.ChargingStationTranslationWhereUniqueInput | Prisma.ChargingStationTranslationWhereUniqueInput[];
    disconnect?: Prisma.ChargingStationTranslationWhereUniqueInput | Prisma.ChargingStationTranslationWhereUniqueInput[];
    delete?: Prisma.ChargingStationTranslationWhereUniqueInput | Prisma.ChargingStationTranslationWhereUniqueInput[];
    connect?: Prisma.ChargingStationTranslationWhereUniqueInput | Prisma.ChargingStationTranslationWhereUniqueInput[];
    update?: Prisma.ChargingStationTranslationUpdateWithWhereUniqueWithoutChargingStationInput | Prisma.ChargingStationTranslationUpdateWithWhereUniqueWithoutChargingStationInput[];
    updateMany?: Prisma.ChargingStationTranslationUpdateManyWithWhereWithoutChargingStationInput | Prisma.ChargingStationTranslationUpdateManyWithWhereWithoutChargingStationInput[];
    deleteMany?: Prisma.ChargingStationTranslationScalarWhereInput | Prisma.ChargingStationTranslationScalarWhereInput[];
};
export type ChargingStationTranslationCreateWithoutLanguageInput = {
    name: string;
    address?: string | null;
    chargingStation: Prisma.ChargingStationCreateNestedOneWithoutTranslationsInput;
};
export type ChargingStationTranslationUncheckedCreateWithoutLanguageInput = {
    id?: number;
    chargingStationId: number;
    name: string;
    address?: string | null;
};
export type ChargingStationTranslationCreateOrConnectWithoutLanguageInput = {
    where: Prisma.ChargingStationTranslationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChargingStationTranslationCreateWithoutLanguageInput, Prisma.ChargingStationTranslationUncheckedCreateWithoutLanguageInput>;
};
export type ChargingStationTranslationCreateManyLanguageInputEnvelope = {
    data: Prisma.ChargingStationTranslationCreateManyLanguageInput | Prisma.ChargingStationTranslationCreateManyLanguageInput[];
    skipDuplicates?: boolean;
};
export type ChargingStationTranslationUpsertWithWhereUniqueWithoutLanguageInput = {
    where: Prisma.ChargingStationTranslationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ChargingStationTranslationUpdateWithoutLanguageInput, Prisma.ChargingStationTranslationUncheckedUpdateWithoutLanguageInput>;
    create: Prisma.XOR<Prisma.ChargingStationTranslationCreateWithoutLanguageInput, Prisma.ChargingStationTranslationUncheckedCreateWithoutLanguageInput>;
};
export type ChargingStationTranslationUpdateWithWhereUniqueWithoutLanguageInput = {
    where: Prisma.ChargingStationTranslationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ChargingStationTranslationUpdateWithoutLanguageInput, Prisma.ChargingStationTranslationUncheckedUpdateWithoutLanguageInput>;
};
export type ChargingStationTranslationUpdateManyWithWhereWithoutLanguageInput = {
    where: Prisma.ChargingStationTranslationScalarWhereInput;
    data: Prisma.XOR<Prisma.ChargingStationTranslationUpdateManyMutationInput, Prisma.ChargingStationTranslationUncheckedUpdateManyWithoutLanguageInput>;
};
export type ChargingStationTranslationScalarWhereInput = {
    AND?: Prisma.ChargingStationTranslationScalarWhereInput | Prisma.ChargingStationTranslationScalarWhereInput[];
    OR?: Prisma.ChargingStationTranslationScalarWhereInput[];
    NOT?: Prisma.ChargingStationTranslationScalarWhereInput | Prisma.ChargingStationTranslationScalarWhereInput[];
    id?: Prisma.IntFilter<"ChargingStationTranslation"> | number;
    chargingStationId?: Prisma.IntFilter<"ChargingStationTranslation"> | number;
    languageId?: Prisma.IntFilter<"ChargingStationTranslation"> | number;
    name?: Prisma.StringFilter<"ChargingStationTranslation"> | string;
    address?: Prisma.StringNullableFilter<"ChargingStationTranslation"> | string | null;
};
export type ChargingStationTranslationCreateWithoutChargingStationInput = {
    name: string;
    address?: string | null;
    language: Prisma.LanguageCreateNestedOneWithoutChargingStationTranslationsInput;
};
export type ChargingStationTranslationUncheckedCreateWithoutChargingStationInput = {
    id?: number;
    languageId: number;
    name: string;
    address?: string | null;
};
export type ChargingStationTranslationCreateOrConnectWithoutChargingStationInput = {
    where: Prisma.ChargingStationTranslationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChargingStationTranslationCreateWithoutChargingStationInput, Prisma.ChargingStationTranslationUncheckedCreateWithoutChargingStationInput>;
};
export type ChargingStationTranslationCreateManyChargingStationInputEnvelope = {
    data: Prisma.ChargingStationTranslationCreateManyChargingStationInput | Prisma.ChargingStationTranslationCreateManyChargingStationInput[];
    skipDuplicates?: boolean;
};
export type ChargingStationTranslationUpsertWithWhereUniqueWithoutChargingStationInput = {
    where: Prisma.ChargingStationTranslationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ChargingStationTranslationUpdateWithoutChargingStationInput, Prisma.ChargingStationTranslationUncheckedUpdateWithoutChargingStationInput>;
    create: Prisma.XOR<Prisma.ChargingStationTranslationCreateWithoutChargingStationInput, Prisma.ChargingStationTranslationUncheckedCreateWithoutChargingStationInput>;
};
export type ChargingStationTranslationUpdateWithWhereUniqueWithoutChargingStationInput = {
    where: Prisma.ChargingStationTranslationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ChargingStationTranslationUpdateWithoutChargingStationInput, Prisma.ChargingStationTranslationUncheckedUpdateWithoutChargingStationInput>;
};
export type ChargingStationTranslationUpdateManyWithWhereWithoutChargingStationInput = {
    where: Prisma.ChargingStationTranslationScalarWhereInput;
    data: Prisma.XOR<Prisma.ChargingStationTranslationUpdateManyMutationInput, Prisma.ChargingStationTranslationUncheckedUpdateManyWithoutChargingStationInput>;
};
export type ChargingStationTranslationCreateManyLanguageInput = {
    id?: number;
    chargingStationId: number;
    name: string;
    address?: string | null;
};
export type ChargingStationTranslationUpdateWithoutLanguageInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    chargingStation?: Prisma.ChargingStationUpdateOneRequiredWithoutTranslationsNestedInput;
};
export type ChargingStationTranslationUncheckedUpdateWithoutLanguageInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    chargingStationId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ChargingStationTranslationUncheckedUpdateManyWithoutLanguageInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    chargingStationId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ChargingStationTranslationCreateManyChargingStationInput = {
    id?: number;
    languageId: number;
    name: string;
    address?: string | null;
};
export type ChargingStationTranslationUpdateWithoutChargingStationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language?: Prisma.LanguageUpdateOneRequiredWithoutChargingStationTranslationsNestedInput;
};
export type ChargingStationTranslationUncheckedUpdateWithoutChargingStationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    languageId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ChargingStationTranslationUncheckedUpdateManyWithoutChargingStationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    languageId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ChargingStationTranslationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    chargingStationId?: boolean;
    languageId?: boolean;
    name?: boolean;
    address?: boolean;
    chargingStation?: boolean | Prisma.ChargingStationDefaultArgs<ExtArgs>;
    language?: boolean | Prisma.LanguageDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chargingStationTranslation"]>;
export type ChargingStationTranslationSelectScalar = {
    id?: boolean;
    chargingStationId?: boolean;
    languageId?: boolean;
    name?: boolean;
    address?: boolean;
};
export type ChargingStationTranslationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "chargingStationId" | "languageId" | "name" | "address", ExtArgs["result"]["chargingStationTranslation"]>;
export type ChargingStationTranslationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    chargingStation?: boolean | Prisma.ChargingStationDefaultArgs<ExtArgs>;
    language?: boolean | Prisma.LanguageDefaultArgs<ExtArgs>;
};
export type $ChargingStationTranslationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ChargingStationTranslation";
    objects: {
        chargingStation: Prisma.$ChargingStationPayload<ExtArgs>;
        language: Prisma.$LanguagePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        chargingStationId: number;
        languageId: number;
        name: string;
        address: string | null;
    }, ExtArgs["result"]["chargingStationTranslation"]>;
    composites: {};
};
export type ChargingStationTranslationGetPayload<S extends boolean | null | undefined | ChargingStationTranslationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ChargingStationTranslationPayload, S>;
export type ChargingStationTranslationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ChargingStationTranslationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ChargingStationTranslationCountAggregateInputType | true;
};
export interface ChargingStationTranslationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ChargingStationTranslation'];
        meta: {
            name: 'ChargingStationTranslation';
        };
    };
    findUnique<T extends ChargingStationTranslationFindUniqueArgs>(args: Prisma.SelectSubset<T, ChargingStationTranslationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ChargingStationTranslationClient<runtime.Types.Result.GetResult<Prisma.$ChargingStationTranslationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ChargingStationTranslationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ChargingStationTranslationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChargingStationTranslationClient<runtime.Types.Result.GetResult<Prisma.$ChargingStationTranslationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ChargingStationTranslationFindFirstArgs>(args?: Prisma.SelectSubset<T, ChargingStationTranslationFindFirstArgs<ExtArgs>>): Prisma.Prisma__ChargingStationTranslationClient<runtime.Types.Result.GetResult<Prisma.$ChargingStationTranslationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ChargingStationTranslationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ChargingStationTranslationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChargingStationTranslationClient<runtime.Types.Result.GetResult<Prisma.$ChargingStationTranslationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ChargingStationTranslationFindManyArgs>(args?: Prisma.SelectSubset<T, ChargingStationTranslationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChargingStationTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ChargingStationTranslationCreateArgs>(args: Prisma.SelectSubset<T, ChargingStationTranslationCreateArgs<ExtArgs>>): Prisma.Prisma__ChargingStationTranslationClient<runtime.Types.Result.GetResult<Prisma.$ChargingStationTranslationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ChargingStationTranslationCreateManyArgs>(args?: Prisma.SelectSubset<T, ChargingStationTranslationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ChargingStationTranslationDeleteArgs>(args: Prisma.SelectSubset<T, ChargingStationTranslationDeleteArgs<ExtArgs>>): Prisma.Prisma__ChargingStationTranslationClient<runtime.Types.Result.GetResult<Prisma.$ChargingStationTranslationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ChargingStationTranslationUpdateArgs>(args: Prisma.SelectSubset<T, ChargingStationTranslationUpdateArgs<ExtArgs>>): Prisma.Prisma__ChargingStationTranslationClient<runtime.Types.Result.GetResult<Prisma.$ChargingStationTranslationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ChargingStationTranslationDeleteManyArgs>(args?: Prisma.SelectSubset<T, ChargingStationTranslationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ChargingStationTranslationUpdateManyArgs>(args: Prisma.SelectSubset<T, ChargingStationTranslationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ChargingStationTranslationUpsertArgs>(args: Prisma.SelectSubset<T, ChargingStationTranslationUpsertArgs<ExtArgs>>): Prisma.Prisma__ChargingStationTranslationClient<runtime.Types.Result.GetResult<Prisma.$ChargingStationTranslationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ChargingStationTranslationCountArgs>(args?: Prisma.Subset<T, ChargingStationTranslationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ChargingStationTranslationCountAggregateOutputType> : number>;
    aggregate<T extends ChargingStationTranslationAggregateArgs>(args: Prisma.Subset<T, ChargingStationTranslationAggregateArgs>): Prisma.PrismaPromise<GetChargingStationTranslationAggregateType<T>>;
    groupBy<T extends ChargingStationTranslationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ChargingStationTranslationGroupByArgs['orderBy'];
    } : {
        orderBy?: ChargingStationTranslationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ChargingStationTranslationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChargingStationTranslationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ChargingStationTranslationFieldRefs;
}
export interface Prisma__ChargingStationTranslationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    chargingStation<T extends Prisma.ChargingStationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ChargingStationDefaultArgs<ExtArgs>>): Prisma.Prisma__ChargingStationClient<runtime.Types.Result.GetResult<Prisma.$ChargingStationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    language<T extends Prisma.LanguageDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LanguageDefaultArgs<ExtArgs>>): Prisma.Prisma__LanguageClient<runtime.Types.Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ChargingStationTranslationFieldRefs {
    readonly id: Prisma.FieldRef<"ChargingStationTranslation", 'Int'>;
    readonly chargingStationId: Prisma.FieldRef<"ChargingStationTranslation", 'Int'>;
    readonly languageId: Prisma.FieldRef<"ChargingStationTranslation", 'Int'>;
    readonly name: Prisma.FieldRef<"ChargingStationTranslation", 'String'>;
    readonly address: Prisma.FieldRef<"ChargingStationTranslation", 'String'>;
}
export type ChargingStationTranslationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChargingStationTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ChargingStationTranslationOmit<ExtArgs> | null;
    include?: Prisma.ChargingStationTranslationInclude<ExtArgs> | null;
    where: Prisma.ChargingStationTranslationWhereUniqueInput;
};
export type ChargingStationTranslationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChargingStationTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ChargingStationTranslationOmit<ExtArgs> | null;
    include?: Prisma.ChargingStationTranslationInclude<ExtArgs> | null;
    where: Prisma.ChargingStationTranslationWhereUniqueInput;
};
export type ChargingStationTranslationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChargingStationTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ChargingStationTranslationOmit<ExtArgs> | null;
    include?: Prisma.ChargingStationTranslationInclude<ExtArgs> | null;
    where?: Prisma.ChargingStationTranslationWhereInput;
    orderBy?: Prisma.ChargingStationTranslationOrderByWithRelationInput | Prisma.ChargingStationTranslationOrderByWithRelationInput[];
    cursor?: Prisma.ChargingStationTranslationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChargingStationTranslationScalarFieldEnum | Prisma.ChargingStationTranslationScalarFieldEnum[];
};
export type ChargingStationTranslationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChargingStationTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ChargingStationTranslationOmit<ExtArgs> | null;
    include?: Prisma.ChargingStationTranslationInclude<ExtArgs> | null;
    where?: Prisma.ChargingStationTranslationWhereInput;
    orderBy?: Prisma.ChargingStationTranslationOrderByWithRelationInput | Prisma.ChargingStationTranslationOrderByWithRelationInput[];
    cursor?: Prisma.ChargingStationTranslationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChargingStationTranslationScalarFieldEnum | Prisma.ChargingStationTranslationScalarFieldEnum[];
};
export type ChargingStationTranslationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChargingStationTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ChargingStationTranslationOmit<ExtArgs> | null;
    include?: Prisma.ChargingStationTranslationInclude<ExtArgs> | null;
    where?: Prisma.ChargingStationTranslationWhereInput;
    orderBy?: Prisma.ChargingStationTranslationOrderByWithRelationInput | Prisma.ChargingStationTranslationOrderByWithRelationInput[];
    cursor?: Prisma.ChargingStationTranslationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChargingStationTranslationScalarFieldEnum | Prisma.ChargingStationTranslationScalarFieldEnum[];
};
export type ChargingStationTranslationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChargingStationTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ChargingStationTranslationOmit<ExtArgs> | null;
    include?: Prisma.ChargingStationTranslationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChargingStationTranslationCreateInput, Prisma.ChargingStationTranslationUncheckedCreateInput>;
};
export type ChargingStationTranslationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ChargingStationTranslationCreateManyInput | Prisma.ChargingStationTranslationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ChargingStationTranslationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChargingStationTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ChargingStationTranslationOmit<ExtArgs> | null;
    include?: Prisma.ChargingStationTranslationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChargingStationTranslationUpdateInput, Prisma.ChargingStationTranslationUncheckedUpdateInput>;
    where: Prisma.ChargingStationTranslationWhereUniqueInput;
};
export type ChargingStationTranslationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ChargingStationTranslationUpdateManyMutationInput, Prisma.ChargingStationTranslationUncheckedUpdateManyInput>;
    where?: Prisma.ChargingStationTranslationWhereInput;
    limit?: number;
};
export type ChargingStationTranslationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChargingStationTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ChargingStationTranslationOmit<ExtArgs> | null;
    include?: Prisma.ChargingStationTranslationInclude<ExtArgs> | null;
    where: Prisma.ChargingStationTranslationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChargingStationTranslationCreateInput, Prisma.ChargingStationTranslationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ChargingStationTranslationUpdateInput, Prisma.ChargingStationTranslationUncheckedUpdateInput>;
};
export type ChargingStationTranslationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChargingStationTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ChargingStationTranslationOmit<ExtArgs> | null;
    include?: Prisma.ChargingStationTranslationInclude<ExtArgs> | null;
    where: Prisma.ChargingStationTranslationWhereUniqueInput;
};
export type ChargingStationTranslationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChargingStationTranslationWhereInput;
    limit?: number;
};
export type ChargingStationTranslationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChargingStationTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ChargingStationTranslationOmit<ExtArgs> | null;
    include?: Prisma.ChargingStationTranslationInclude<ExtArgs> | null;
};
export {};
