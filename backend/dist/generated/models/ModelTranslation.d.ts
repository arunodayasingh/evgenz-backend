import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ModelTranslationModel = runtime.Types.Result.DefaultSelection<Prisma.$ModelTranslationPayload>;
export type AggregateModelTranslation = {
    _count: ModelTranslationCountAggregateOutputType | null;
    _avg: ModelTranslationAvgAggregateOutputType | null;
    _sum: ModelTranslationSumAggregateOutputType | null;
    _min: ModelTranslationMinAggregateOutputType | null;
    _max: ModelTranslationMaxAggregateOutputType | null;
};
export type ModelTranslationAvgAggregateOutputType = {
    id: number | null;
    modelId: number | null;
    languageId: number | null;
};
export type ModelTranslationSumAggregateOutputType = {
    id: number | null;
    modelId: number | null;
    languageId: number | null;
};
export type ModelTranslationMinAggregateOutputType = {
    id: number | null;
    modelId: number | null;
    languageId: number | null;
    name: string | null;
    description: string | null;
};
export type ModelTranslationMaxAggregateOutputType = {
    id: number | null;
    modelId: number | null;
    languageId: number | null;
    name: string | null;
    description: string | null;
};
export type ModelTranslationCountAggregateOutputType = {
    id: number;
    modelId: number;
    languageId: number;
    name: number;
    description: number;
    _all: number;
};
export type ModelTranslationAvgAggregateInputType = {
    id?: true;
    modelId?: true;
    languageId?: true;
};
export type ModelTranslationSumAggregateInputType = {
    id?: true;
    modelId?: true;
    languageId?: true;
};
export type ModelTranslationMinAggregateInputType = {
    id?: true;
    modelId?: true;
    languageId?: true;
    name?: true;
    description?: true;
};
export type ModelTranslationMaxAggregateInputType = {
    id?: true;
    modelId?: true;
    languageId?: true;
    name?: true;
    description?: true;
};
export type ModelTranslationCountAggregateInputType = {
    id?: true;
    modelId?: true;
    languageId?: true;
    name?: true;
    description?: true;
    _all?: true;
};
export type ModelTranslationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ModelTranslationWhereInput;
    orderBy?: Prisma.ModelTranslationOrderByWithRelationInput | Prisma.ModelTranslationOrderByWithRelationInput[];
    cursor?: Prisma.ModelTranslationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ModelTranslationCountAggregateInputType;
    _avg?: ModelTranslationAvgAggregateInputType;
    _sum?: ModelTranslationSumAggregateInputType;
    _min?: ModelTranslationMinAggregateInputType;
    _max?: ModelTranslationMaxAggregateInputType;
};
export type GetModelTranslationAggregateType<T extends ModelTranslationAggregateArgs> = {
    [P in keyof T & keyof AggregateModelTranslation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateModelTranslation[P]> : Prisma.GetScalarType<T[P], AggregateModelTranslation[P]>;
};
export type ModelTranslationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ModelTranslationWhereInput;
    orderBy?: Prisma.ModelTranslationOrderByWithAggregationInput | Prisma.ModelTranslationOrderByWithAggregationInput[];
    by: Prisma.ModelTranslationScalarFieldEnum[] | Prisma.ModelTranslationScalarFieldEnum;
    having?: Prisma.ModelTranslationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ModelTranslationCountAggregateInputType | true;
    _avg?: ModelTranslationAvgAggregateInputType;
    _sum?: ModelTranslationSumAggregateInputType;
    _min?: ModelTranslationMinAggregateInputType;
    _max?: ModelTranslationMaxAggregateInputType;
};
export type ModelTranslationGroupByOutputType = {
    id: number;
    modelId: number;
    languageId: number;
    name: string;
    description: string | null;
    _count: ModelTranslationCountAggregateOutputType | null;
    _avg: ModelTranslationAvgAggregateOutputType | null;
    _sum: ModelTranslationSumAggregateOutputType | null;
    _min: ModelTranslationMinAggregateOutputType | null;
    _max: ModelTranslationMaxAggregateOutputType | null;
};
type GetModelTranslationGroupByPayload<T extends ModelTranslationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ModelTranslationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ModelTranslationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ModelTranslationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ModelTranslationGroupByOutputType[P]>;
}>>;
export type ModelTranslationWhereInput = {
    AND?: Prisma.ModelTranslationWhereInput | Prisma.ModelTranslationWhereInput[];
    OR?: Prisma.ModelTranslationWhereInput[];
    NOT?: Prisma.ModelTranslationWhereInput | Prisma.ModelTranslationWhereInput[];
    id?: Prisma.IntFilter<"ModelTranslation"> | number;
    modelId?: Prisma.IntFilter<"ModelTranslation"> | number;
    languageId?: Prisma.IntFilter<"ModelTranslation"> | number;
    name?: Prisma.StringFilter<"ModelTranslation"> | string;
    description?: Prisma.StringNullableFilter<"ModelTranslation"> | string | null;
    model?: Prisma.XOR<Prisma.ModelScalarRelationFilter, Prisma.ModelWhereInput>;
    language?: Prisma.XOR<Prisma.LanguageScalarRelationFilter, Prisma.LanguageWhereInput>;
};
export type ModelTranslationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    model?: Prisma.ModelOrderByWithRelationInput;
    language?: Prisma.LanguageOrderByWithRelationInput;
    _relevance?: Prisma.ModelTranslationOrderByRelevanceInput;
};
export type ModelTranslationWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    modelId_languageId?: Prisma.ModelTranslationModelIdLanguageIdCompoundUniqueInput;
    AND?: Prisma.ModelTranslationWhereInput | Prisma.ModelTranslationWhereInput[];
    OR?: Prisma.ModelTranslationWhereInput[];
    NOT?: Prisma.ModelTranslationWhereInput | Prisma.ModelTranslationWhereInput[];
    modelId?: Prisma.IntFilter<"ModelTranslation"> | number;
    languageId?: Prisma.IntFilter<"ModelTranslation"> | number;
    name?: Prisma.StringFilter<"ModelTranslation"> | string;
    description?: Prisma.StringNullableFilter<"ModelTranslation"> | string | null;
    model?: Prisma.XOR<Prisma.ModelScalarRelationFilter, Prisma.ModelWhereInput>;
    language?: Prisma.XOR<Prisma.LanguageScalarRelationFilter, Prisma.LanguageWhereInput>;
}, "id" | "modelId_languageId">;
export type ModelTranslationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ModelTranslationCountOrderByAggregateInput;
    _avg?: Prisma.ModelTranslationAvgOrderByAggregateInput;
    _max?: Prisma.ModelTranslationMaxOrderByAggregateInput;
    _min?: Prisma.ModelTranslationMinOrderByAggregateInput;
    _sum?: Prisma.ModelTranslationSumOrderByAggregateInput;
};
export type ModelTranslationScalarWhereWithAggregatesInput = {
    AND?: Prisma.ModelTranslationScalarWhereWithAggregatesInput | Prisma.ModelTranslationScalarWhereWithAggregatesInput[];
    OR?: Prisma.ModelTranslationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ModelTranslationScalarWhereWithAggregatesInput | Prisma.ModelTranslationScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ModelTranslation"> | number;
    modelId?: Prisma.IntWithAggregatesFilter<"ModelTranslation"> | number;
    languageId?: Prisma.IntWithAggregatesFilter<"ModelTranslation"> | number;
    name?: Prisma.StringWithAggregatesFilter<"ModelTranslation"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"ModelTranslation"> | string | null;
};
export type ModelTranslationCreateInput = {
    name: string;
    description?: string | null;
    model: Prisma.ModelCreateNestedOneWithoutTranslationsInput;
    language: Prisma.LanguageCreateNestedOneWithoutModelTranslationsInput;
};
export type ModelTranslationUncheckedCreateInput = {
    id?: number;
    modelId: number;
    languageId: number;
    name: string;
    description?: string | null;
};
export type ModelTranslationUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    model?: Prisma.ModelUpdateOneRequiredWithoutTranslationsNestedInput;
    language?: Prisma.LanguageUpdateOneRequiredWithoutModelTranslationsNestedInput;
};
export type ModelTranslationUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    modelId?: Prisma.IntFieldUpdateOperationsInput | number;
    languageId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ModelTranslationCreateManyInput = {
    id?: number;
    modelId: number;
    languageId: number;
    name: string;
    description?: string | null;
};
export type ModelTranslationUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ModelTranslationUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    modelId?: Prisma.IntFieldUpdateOperationsInput | number;
    languageId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ModelTranslationListRelationFilter = {
    every?: Prisma.ModelTranslationWhereInput;
    some?: Prisma.ModelTranslationWhereInput;
    none?: Prisma.ModelTranslationWhereInput;
};
export type ModelTranslationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ModelTranslationOrderByRelevanceInput = {
    fields: Prisma.ModelTranslationOrderByRelevanceFieldEnum | Prisma.ModelTranslationOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ModelTranslationModelIdLanguageIdCompoundUniqueInput = {
    modelId: number;
    languageId: number;
};
export type ModelTranslationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type ModelTranslationAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
};
export type ModelTranslationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type ModelTranslationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type ModelTranslationSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
};
export type ModelTranslationCreateNestedManyWithoutLanguageInput = {
    create?: Prisma.XOR<Prisma.ModelTranslationCreateWithoutLanguageInput, Prisma.ModelTranslationUncheckedCreateWithoutLanguageInput> | Prisma.ModelTranslationCreateWithoutLanguageInput[] | Prisma.ModelTranslationUncheckedCreateWithoutLanguageInput[];
    connectOrCreate?: Prisma.ModelTranslationCreateOrConnectWithoutLanguageInput | Prisma.ModelTranslationCreateOrConnectWithoutLanguageInput[];
    createMany?: Prisma.ModelTranslationCreateManyLanguageInputEnvelope;
    connect?: Prisma.ModelTranslationWhereUniqueInput | Prisma.ModelTranslationWhereUniqueInput[];
};
export type ModelTranslationUncheckedCreateNestedManyWithoutLanguageInput = {
    create?: Prisma.XOR<Prisma.ModelTranslationCreateWithoutLanguageInput, Prisma.ModelTranslationUncheckedCreateWithoutLanguageInput> | Prisma.ModelTranslationCreateWithoutLanguageInput[] | Prisma.ModelTranslationUncheckedCreateWithoutLanguageInput[];
    connectOrCreate?: Prisma.ModelTranslationCreateOrConnectWithoutLanguageInput | Prisma.ModelTranslationCreateOrConnectWithoutLanguageInput[];
    createMany?: Prisma.ModelTranslationCreateManyLanguageInputEnvelope;
    connect?: Prisma.ModelTranslationWhereUniqueInput | Prisma.ModelTranslationWhereUniqueInput[];
};
export type ModelTranslationUpdateManyWithoutLanguageNestedInput = {
    create?: Prisma.XOR<Prisma.ModelTranslationCreateWithoutLanguageInput, Prisma.ModelTranslationUncheckedCreateWithoutLanguageInput> | Prisma.ModelTranslationCreateWithoutLanguageInput[] | Prisma.ModelTranslationUncheckedCreateWithoutLanguageInput[];
    connectOrCreate?: Prisma.ModelTranslationCreateOrConnectWithoutLanguageInput | Prisma.ModelTranslationCreateOrConnectWithoutLanguageInput[];
    upsert?: Prisma.ModelTranslationUpsertWithWhereUniqueWithoutLanguageInput | Prisma.ModelTranslationUpsertWithWhereUniqueWithoutLanguageInput[];
    createMany?: Prisma.ModelTranslationCreateManyLanguageInputEnvelope;
    set?: Prisma.ModelTranslationWhereUniqueInput | Prisma.ModelTranslationWhereUniqueInput[];
    disconnect?: Prisma.ModelTranslationWhereUniqueInput | Prisma.ModelTranslationWhereUniqueInput[];
    delete?: Prisma.ModelTranslationWhereUniqueInput | Prisma.ModelTranslationWhereUniqueInput[];
    connect?: Prisma.ModelTranslationWhereUniqueInput | Prisma.ModelTranslationWhereUniqueInput[];
    update?: Prisma.ModelTranslationUpdateWithWhereUniqueWithoutLanguageInput | Prisma.ModelTranslationUpdateWithWhereUniqueWithoutLanguageInput[];
    updateMany?: Prisma.ModelTranslationUpdateManyWithWhereWithoutLanguageInput | Prisma.ModelTranslationUpdateManyWithWhereWithoutLanguageInput[];
    deleteMany?: Prisma.ModelTranslationScalarWhereInput | Prisma.ModelTranslationScalarWhereInput[];
};
export type ModelTranslationUncheckedUpdateManyWithoutLanguageNestedInput = {
    create?: Prisma.XOR<Prisma.ModelTranslationCreateWithoutLanguageInput, Prisma.ModelTranslationUncheckedCreateWithoutLanguageInput> | Prisma.ModelTranslationCreateWithoutLanguageInput[] | Prisma.ModelTranslationUncheckedCreateWithoutLanguageInput[];
    connectOrCreate?: Prisma.ModelTranslationCreateOrConnectWithoutLanguageInput | Prisma.ModelTranslationCreateOrConnectWithoutLanguageInput[];
    upsert?: Prisma.ModelTranslationUpsertWithWhereUniqueWithoutLanguageInput | Prisma.ModelTranslationUpsertWithWhereUniqueWithoutLanguageInput[];
    createMany?: Prisma.ModelTranslationCreateManyLanguageInputEnvelope;
    set?: Prisma.ModelTranslationWhereUniqueInput | Prisma.ModelTranslationWhereUniqueInput[];
    disconnect?: Prisma.ModelTranslationWhereUniqueInput | Prisma.ModelTranslationWhereUniqueInput[];
    delete?: Prisma.ModelTranslationWhereUniqueInput | Prisma.ModelTranslationWhereUniqueInput[];
    connect?: Prisma.ModelTranslationWhereUniqueInput | Prisma.ModelTranslationWhereUniqueInput[];
    update?: Prisma.ModelTranslationUpdateWithWhereUniqueWithoutLanguageInput | Prisma.ModelTranslationUpdateWithWhereUniqueWithoutLanguageInput[];
    updateMany?: Prisma.ModelTranslationUpdateManyWithWhereWithoutLanguageInput | Prisma.ModelTranslationUpdateManyWithWhereWithoutLanguageInput[];
    deleteMany?: Prisma.ModelTranslationScalarWhereInput | Prisma.ModelTranslationScalarWhereInput[];
};
export type ModelTranslationCreateNestedManyWithoutModelInput = {
    create?: Prisma.XOR<Prisma.ModelTranslationCreateWithoutModelInput, Prisma.ModelTranslationUncheckedCreateWithoutModelInput> | Prisma.ModelTranslationCreateWithoutModelInput[] | Prisma.ModelTranslationUncheckedCreateWithoutModelInput[];
    connectOrCreate?: Prisma.ModelTranslationCreateOrConnectWithoutModelInput | Prisma.ModelTranslationCreateOrConnectWithoutModelInput[];
    createMany?: Prisma.ModelTranslationCreateManyModelInputEnvelope;
    connect?: Prisma.ModelTranslationWhereUniqueInput | Prisma.ModelTranslationWhereUniqueInput[];
};
export type ModelTranslationUncheckedCreateNestedManyWithoutModelInput = {
    create?: Prisma.XOR<Prisma.ModelTranslationCreateWithoutModelInput, Prisma.ModelTranslationUncheckedCreateWithoutModelInput> | Prisma.ModelTranslationCreateWithoutModelInput[] | Prisma.ModelTranslationUncheckedCreateWithoutModelInput[];
    connectOrCreate?: Prisma.ModelTranslationCreateOrConnectWithoutModelInput | Prisma.ModelTranslationCreateOrConnectWithoutModelInput[];
    createMany?: Prisma.ModelTranslationCreateManyModelInputEnvelope;
    connect?: Prisma.ModelTranslationWhereUniqueInput | Prisma.ModelTranslationWhereUniqueInput[];
};
export type ModelTranslationUpdateManyWithoutModelNestedInput = {
    create?: Prisma.XOR<Prisma.ModelTranslationCreateWithoutModelInput, Prisma.ModelTranslationUncheckedCreateWithoutModelInput> | Prisma.ModelTranslationCreateWithoutModelInput[] | Prisma.ModelTranslationUncheckedCreateWithoutModelInput[];
    connectOrCreate?: Prisma.ModelTranslationCreateOrConnectWithoutModelInput | Prisma.ModelTranslationCreateOrConnectWithoutModelInput[];
    upsert?: Prisma.ModelTranslationUpsertWithWhereUniqueWithoutModelInput | Prisma.ModelTranslationUpsertWithWhereUniqueWithoutModelInput[];
    createMany?: Prisma.ModelTranslationCreateManyModelInputEnvelope;
    set?: Prisma.ModelTranslationWhereUniqueInput | Prisma.ModelTranslationWhereUniqueInput[];
    disconnect?: Prisma.ModelTranslationWhereUniqueInput | Prisma.ModelTranslationWhereUniqueInput[];
    delete?: Prisma.ModelTranslationWhereUniqueInput | Prisma.ModelTranslationWhereUniqueInput[];
    connect?: Prisma.ModelTranslationWhereUniqueInput | Prisma.ModelTranslationWhereUniqueInput[];
    update?: Prisma.ModelTranslationUpdateWithWhereUniqueWithoutModelInput | Prisma.ModelTranslationUpdateWithWhereUniqueWithoutModelInput[];
    updateMany?: Prisma.ModelTranslationUpdateManyWithWhereWithoutModelInput | Prisma.ModelTranslationUpdateManyWithWhereWithoutModelInput[];
    deleteMany?: Prisma.ModelTranslationScalarWhereInput | Prisma.ModelTranslationScalarWhereInput[];
};
export type ModelTranslationUncheckedUpdateManyWithoutModelNestedInput = {
    create?: Prisma.XOR<Prisma.ModelTranslationCreateWithoutModelInput, Prisma.ModelTranslationUncheckedCreateWithoutModelInput> | Prisma.ModelTranslationCreateWithoutModelInput[] | Prisma.ModelTranslationUncheckedCreateWithoutModelInput[];
    connectOrCreate?: Prisma.ModelTranslationCreateOrConnectWithoutModelInput | Prisma.ModelTranslationCreateOrConnectWithoutModelInput[];
    upsert?: Prisma.ModelTranslationUpsertWithWhereUniqueWithoutModelInput | Prisma.ModelTranslationUpsertWithWhereUniqueWithoutModelInput[];
    createMany?: Prisma.ModelTranslationCreateManyModelInputEnvelope;
    set?: Prisma.ModelTranslationWhereUniqueInput | Prisma.ModelTranslationWhereUniqueInput[];
    disconnect?: Prisma.ModelTranslationWhereUniqueInput | Prisma.ModelTranslationWhereUniqueInput[];
    delete?: Prisma.ModelTranslationWhereUniqueInput | Prisma.ModelTranslationWhereUniqueInput[];
    connect?: Prisma.ModelTranslationWhereUniqueInput | Prisma.ModelTranslationWhereUniqueInput[];
    update?: Prisma.ModelTranslationUpdateWithWhereUniqueWithoutModelInput | Prisma.ModelTranslationUpdateWithWhereUniqueWithoutModelInput[];
    updateMany?: Prisma.ModelTranslationUpdateManyWithWhereWithoutModelInput | Prisma.ModelTranslationUpdateManyWithWhereWithoutModelInput[];
    deleteMany?: Prisma.ModelTranslationScalarWhereInput | Prisma.ModelTranslationScalarWhereInput[];
};
export type ModelTranslationCreateWithoutLanguageInput = {
    name: string;
    description?: string | null;
    model: Prisma.ModelCreateNestedOneWithoutTranslationsInput;
};
export type ModelTranslationUncheckedCreateWithoutLanguageInput = {
    id?: number;
    modelId: number;
    name: string;
    description?: string | null;
};
export type ModelTranslationCreateOrConnectWithoutLanguageInput = {
    where: Prisma.ModelTranslationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ModelTranslationCreateWithoutLanguageInput, Prisma.ModelTranslationUncheckedCreateWithoutLanguageInput>;
};
export type ModelTranslationCreateManyLanguageInputEnvelope = {
    data: Prisma.ModelTranslationCreateManyLanguageInput | Prisma.ModelTranslationCreateManyLanguageInput[];
    skipDuplicates?: boolean;
};
export type ModelTranslationUpsertWithWhereUniqueWithoutLanguageInput = {
    where: Prisma.ModelTranslationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ModelTranslationUpdateWithoutLanguageInput, Prisma.ModelTranslationUncheckedUpdateWithoutLanguageInput>;
    create: Prisma.XOR<Prisma.ModelTranslationCreateWithoutLanguageInput, Prisma.ModelTranslationUncheckedCreateWithoutLanguageInput>;
};
export type ModelTranslationUpdateWithWhereUniqueWithoutLanguageInput = {
    where: Prisma.ModelTranslationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ModelTranslationUpdateWithoutLanguageInput, Prisma.ModelTranslationUncheckedUpdateWithoutLanguageInput>;
};
export type ModelTranslationUpdateManyWithWhereWithoutLanguageInput = {
    where: Prisma.ModelTranslationScalarWhereInput;
    data: Prisma.XOR<Prisma.ModelTranslationUpdateManyMutationInput, Prisma.ModelTranslationUncheckedUpdateManyWithoutLanguageInput>;
};
export type ModelTranslationScalarWhereInput = {
    AND?: Prisma.ModelTranslationScalarWhereInput | Prisma.ModelTranslationScalarWhereInput[];
    OR?: Prisma.ModelTranslationScalarWhereInput[];
    NOT?: Prisma.ModelTranslationScalarWhereInput | Prisma.ModelTranslationScalarWhereInput[];
    id?: Prisma.IntFilter<"ModelTranslation"> | number;
    modelId?: Prisma.IntFilter<"ModelTranslation"> | number;
    languageId?: Prisma.IntFilter<"ModelTranslation"> | number;
    name?: Prisma.StringFilter<"ModelTranslation"> | string;
    description?: Prisma.StringNullableFilter<"ModelTranslation"> | string | null;
};
export type ModelTranslationCreateWithoutModelInput = {
    name: string;
    description?: string | null;
    language: Prisma.LanguageCreateNestedOneWithoutModelTranslationsInput;
};
export type ModelTranslationUncheckedCreateWithoutModelInput = {
    id?: number;
    languageId: number;
    name: string;
    description?: string | null;
};
export type ModelTranslationCreateOrConnectWithoutModelInput = {
    where: Prisma.ModelTranslationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ModelTranslationCreateWithoutModelInput, Prisma.ModelTranslationUncheckedCreateWithoutModelInput>;
};
export type ModelTranslationCreateManyModelInputEnvelope = {
    data: Prisma.ModelTranslationCreateManyModelInput | Prisma.ModelTranslationCreateManyModelInput[];
    skipDuplicates?: boolean;
};
export type ModelTranslationUpsertWithWhereUniqueWithoutModelInput = {
    where: Prisma.ModelTranslationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ModelTranslationUpdateWithoutModelInput, Prisma.ModelTranslationUncheckedUpdateWithoutModelInput>;
    create: Prisma.XOR<Prisma.ModelTranslationCreateWithoutModelInput, Prisma.ModelTranslationUncheckedCreateWithoutModelInput>;
};
export type ModelTranslationUpdateWithWhereUniqueWithoutModelInput = {
    where: Prisma.ModelTranslationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ModelTranslationUpdateWithoutModelInput, Prisma.ModelTranslationUncheckedUpdateWithoutModelInput>;
};
export type ModelTranslationUpdateManyWithWhereWithoutModelInput = {
    where: Prisma.ModelTranslationScalarWhereInput;
    data: Prisma.XOR<Prisma.ModelTranslationUpdateManyMutationInput, Prisma.ModelTranslationUncheckedUpdateManyWithoutModelInput>;
};
export type ModelTranslationCreateManyLanguageInput = {
    id?: number;
    modelId: number;
    name: string;
    description?: string | null;
};
export type ModelTranslationUpdateWithoutLanguageInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    model?: Prisma.ModelUpdateOneRequiredWithoutTranslationsNestedInput;
};
export type ModelTranslationUncheckedUpdateWithoutLanguageInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    modelId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ModelTranslationUncheckedUpdateManyWithoutLanguageInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    modelId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ModelTranslationCreateManyModelInput = {
    id?: number;
    languageId: number;
    name: string;
    description?: string | null;
};
export type ModelTranslationUpdateWithoutModelInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language?: Prisma.LanguageUpdateOneRequiredWithoutModelTranslationsNestedInput;
};
export type ModelTranslationUncheckedUpdateWithoutModelInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    languageId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ModelTranslationUncheckedUpdateManyWithoutModelInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    languageId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ModelTranslationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    modelId?: boolean;
    languageId?: boolean;
    name?: boolean;
    description?: boolean;
    model?: boolean | Prisma.ModelDefaultArgs<ExtArgs>;
    language?: boolean | Prisma.LanguageDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["modelTranslation"]>;
export type ModelTranslationSelectScalar = {
    id?: boolean;
    modelId?: boolean;
    languageId?: boolean;
    name?: boolean;
    description?: boolean;
};
export type ModelTranslationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "modelId" | "languageId" | "name" | "description", ExtArgs["result"]["modelTranslation"]>;
export type ModelTranslationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    model?: boolean | Prisma.ModelDefaultArgs<ExtArgs>;
    language?: boolean | Prisma.LanguageDefaultArgs<ExtArgs>;
};
export type $ModelTranslationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ModelTranslation";
    objects: {
        model: Prisma.$ModelPayload<ExtArgs>;
        language: Prisma.$LanguagePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        modelId: number;
        languageId: number;
        name: string;
        description: string | null;
    }, ExtArgs["result"]["modelTranslation"]>;
    composites: {};
};
export type ModelTranslationGetPayload<S extends boolean | null | undefined | ModelTranslationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ModelTranslationPayload, S>;
export type ModelTranslationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ModelTranslationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ModelTranslationCountAggregateInputType | true;
};
export interface ModelTranslationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ModelTranslation'];
        meta: {
            name: 'ModelTranslation';
        };
    };
    findUnique<T extends ModelTranslationFindUniqueArgs>(args: Prisma.SelectSubset<T, ModelTranslationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ModelTranslationClient<runtime.Types.Result.GetResult<Prisma.$ModelTranslationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ModelTranslationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ModelTranslationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ModelTranslationClient<runtime.Types.Result.GetResult<Prisma.$ModelTranslationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ModelTranslationFindFirstArgs>(args?: Prisma.SelectSubset<T, ModelTranslationFindFirstArgs<ExtArgs>>): Prisma.Prisma__ModelTranslationClient<runtime.Types.Result.GetResult<Prisma.$ModelTranslationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ModelTranslationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ModelTranslationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ModelTranslationClient<runtime.Types.Result.GetResult<Prisma.$ModelTranslationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ModelTranslationFindManyArgs>(args?: Prisma.SelectSubset<T, ModelTranslationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModelTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ModelTranslationCreateArgs>(args: Prisma.SelectSubset<T, ModelTranslationCreateArgs<ExtArgs>>): Prisma.Prisma__ModelTranslationClient<runtime.Types.Result.GetResult<Prisma.$ModelTranslationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ModelTranslationCreateManyArgs>(args?: Prisma.SelectSubset<T, ModelTranslationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ModelTranslationDeleteArgs>(args: Prisma.SelectSubset<T, ModelTranslationDeleteArgs<ExtArgs>>): Prisma.Prisma__ModelTranslationClient<runtime.Types.Result.GetResult<Prisma.$ModelTranslationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ModelTranslationUpdateArgs>(args: Prisma.SelectSubset<T, ModelTranslationUpdateArgs<ExtArgs>>): Prisma.Prisma__ModelTranslationClient<runtime.Types.Result.GetResult<Prisma.$ModelTranslationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ModelTranslationDeleteManyArgs>(args?: Prisma.SelectSubset<T, ModelTranslationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ModelTranslationUpdateManyArgs>(args: Prisma.SelectSubset<T, ModelTranslationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ModelTranslationUpsertArgs>(args: Prisma.SelectSubset<T, ModelTranslationUpsertArgs<ExtArgs>>): Prisma.Prisma__ModelTranslationClient<runtime.Types.Result.GetResult<Prisma.$ModelTranslationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ModelTranslationCountArgs>(args?: Prisma.Subset<T, ModelTranslationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ModelTranslationCountAggregateOutputType> : number>;
    aggregate<T extends ModelTranslationAggregateArgs>(args: Prisma.Subset<T, ModelTranslationAggregateArgs>): Prisma.PrismaPromise<GetModelTranslationAggregateType<T>>;
    groupBy<T extends ModelTranslationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ModelTranslationGroupByArgs['orderBy'];
    } : {
        orderBy?: ModelTranslationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ModelTranslationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelTranslationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ModelTranslationFieldRefs;
}
export interface Prisma__ModelTranslationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    model<T extends Prisma.ModelDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ModelDefaultArgs<ExtArgs>>): Prisma.Prisma__ModelClient<runtime.Types.Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    language<T extends Prisma.LanguageDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LanguageDefaultArgs<ExtArgs>>): Prisma.Prisma__LanguageClient<runtime.Types.Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ModelTranslationFieldRefs {
    readonly id: Prisma.FieldRef<"ModelTranslation", 'Int'>;
    readonly modelId: Prisma.FieldRef<"ModelTranslation", 'Int'>;
    readonly languageId: Prisma.FieldRef<"ModelTranslation", 'Int'>;
    readonly name: Prisma.FieldRef<"ModelTranslation", 'String'>;
    readonly description: Prisma.FieldRef<"ModelTranslation", 'String'>;
}
export type ModelTranslationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModelTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ModelTranslationOmit<ExtArgs> | null;
    include?: Prisma.ModelTranslationInclude<ExtArgs> | null;
    where: Prisma.ModelTranslationWhereUniqueInput;
};
export type ModelTranslationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModelTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ModelTranslationOmit<ExtArgs> | null;
    include?: Prisma.ModelTranslationInclude<ExtArgs> | null;
    where: Prisma.ModelTranslationWhereUniqueInput;
};
export type ModelTranslationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModelTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ModelTranslationOmit<ExtArgs> | null;
    include?: Prisma.ModelTranslationInclude<ExtArgs> | null;
    where?: Prisma.ModelTranslationWhereInput;
    orderBy?: Prisma.ModelTranslationOrderByWithRelationInput | Prisma.ModelTranslationOrderByWithRelationInput[];
    cursor?: Prisma.ModelTranslationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ModelTranslationScalarFieldEnum | Prisma.ModelTranslationScalarFieldEnum[];
};
export type ModelTranslationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModelTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ModelTranslationOmit<ExtArgs> | null;
    include?: Prisma.ModelTranslationInclude<ExtArgs> | null;
    where?: Prisma.ModelTranslationWhereInput;
    orderBy?: Prisma.ModelTranslationOrderByWithRelationInput | Prisma.ModelTranslationOrderByWithRelationInput[];
    cursor?: Prisma.ModelTranslationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ModelTranslationScalarFieldEnum | Prisma.ModelTranslationScalarFieldEnum[];
};
export type ModelTranslationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModelTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ModelTranslationOmit<ExtArgs> | null;
    include?: Prisma.ModelTranslationInclude<ExtArgs> | null;
    where?: Prisma.ModelTranslationWhereInput;
    orderBy?: Prisma.ModelTranslationOrderByWithRelationInput | Prisma.ModelTranslationOrderByWithRelationInput[];
    cursor?: Prisma.ModelTranslationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ModelTranslationScalarFieldEnum | Prisma.ModelTranslationScalarFieldEnum[];
};
export type ModelTranslationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModelTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ModelTranslationOmit<ExtArgs> | null;
    include?: Prisma.ModelTranslationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ModelTranslationCreateInput, Prisma.ModelTranslationUncheckedCreateInput>;
};
export type ModelTranslationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ModelTranslationCreateManyInput | Prisma.ModelTranslationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ModelTranslationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModelTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ModelTranslationOmit<ExtArgs> | null;
    include?: Prisma.ModelTranslationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ModelTranslationUpdateInput, Prisma.ModelTranslationUncheckedUpdateInput>;
    where: Prisma.ModelTranslationWhereUniqueInput;
};
export type ModelTranslationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ModelTranslationUpdateManyMutationInput, Prisma.ModelTranslationUncheckedUpdateManyInput>;
    where?: Prisma.ModelTranslationWhereInput;
    limit?: number;
};
export type ModelTranslationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModelTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ModelTranslationOmit<ExtArgs> | null;
    include?: Prisma.ModelTranslationInclude<ExtArgs> | null;
    where: Prisma.ModelTranslationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ModelTranslationCreateInput, Prisma.ModelTranslationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ModelTranslationUpdateInput, Prisma.ModelTranslationUncheckedUpdateInput>;
};
export type ModelTranslationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModelTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ModelTranslationOmit<ExtArgs> | null;
    include?: Prisma.ModelTranslationInclude<ExtArgs> | null;
    where: Prisma.ModelTranslationWhereUniqueInput;
};
export type ModelTranslationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ModelTranslationWhereInput;
    limit?: number;
};
export type ModelTranslationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModelTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ModelTranslationOmit<ExtArgs> | null;
    include?: Prisma.ModelTranslationInclude<ExtArgs> | null;
};
export {};
