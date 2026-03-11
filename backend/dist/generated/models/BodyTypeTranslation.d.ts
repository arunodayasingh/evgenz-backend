import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type BodyTypeTranslationModel = runtime.Types.Result.DefaultSelection<Prisma.$BodyTypeTranslationPayload>;
export type AggregateBodyTypeTranslation = {
    _count: BodyTypeTranslationCountAggregateOutputType | null;
    _avg: BodyTypeTranslationAvgAggregateOutputType | null;
    _sum: BodyTypeTranslationSumAggregateOutputType | null;
    _min: BodyTypeTranslationMinAggregateOutputType | null;
    _max: BodyTypeTranslationMaxAggregateOutputType | null;
};
export type BodyTypeTranslationAvgAggregateOutputType = {
    id: number | null;
    bodyTypeId: number | null;
    languageId: number | null;
};
export type BodyTypeTranslationSumAggregateOutputType = {
    id: number | null;
    bodyTypeId: number | null;
    languageId: number | null;
};
export type BodyTypeTranslationMinAggregateOutputType = {
    id: number | null;
    bodyTypeId: number | null;
    languageId: number | null;
    name: string | null;
};
export type BodyTypeTranslationMaxAggregateOutputType = {
    id: number | null;
    bodyTypeId: number | null;
    languageId: number | null;
    name: string | null;
};
export type BodyTypeTranslationCountAggregateOutputType = {
    id: number;
    bodyTypeId: number;
    languageId: number;
    name: number;
    _all: number;
};
export type BodyTypeTranslationAvgAggregateInputType = {
    id?: true;
    bodyTypeId?: true;
    languageId?: true;
};
export type BodyTypeTranslationSumAggregateInputType = {
    id?: true;
    bodyTypeId?: true;
    languageId?: true;
};
export type BodyTypeTranslationMinAggregateInputType = {
    id?: true;
    bodyTypeId?: true;
    languageId?: true;
    name?: true;
};
export type BodyTypeTranslationMaxAggregateInputType = {
    id?: true;
    bodyTypeId?: true;
    languageId?: true;
    name?: true;
};
export type BodyTypeTranslationCountAggregateInputType = {
    id?: true;
    bodyTypeId?: true;
    languageId?: true;
    name?: true;
    _all?: true;
};
export type BodyTypeTranslationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BodyTypeTranslationWhereInput;
    orderBy?: Prisma.BodyTypeTranslationOrderByWithRelationInput | Prisma.BodyTypeTranslationOrderByWithRelationInput[];
    cursor?: Prisma.BodyTypeTranslationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BodyTypeTranslationCountAggregateInputType;
    _avg?: BodyTypeTranslationAvgAggregateInputType;
    _sum?: BodyTypeTranslationSumAggregateInputType;
    _min?: BodyTypeTranslationMinAggregateInputType;
    _max?: BodyTypeTranslationMaxAggregateInputType;
};
export type GetBodyTypeTranslationAggregateType<T extends BodyTypeTranslationAggregateArgs> = {
    [P in keyof T & keyof AggregateBodyTypeTranslation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBodyTypeTranslation[P]> : Prisma.GetScalarType<T[P], AggregateBodyTypeTranslation[P]>;
};
export type BodyTypeTranslationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BodyTypeTranslationWhereInput;
    orderBy?: Prisma.BodyTypeTranslationOrderByWithAggregationInput | Prisma.BodyTypeTranslationOrderByWithAggregationInput[];
    by: Prisma.BodyTypeTranslationScalarFieldEnum[] | Prisma.BodyTypeTranslationScalarFieldEnum;
    having?: Prisma.BodyTypeTranslationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BodyTypeTranslationCountAggregateInputType | true;
    _avg?: BodyTypeTranslationAvgAggregateInputType;
    _sum?: BodyTypeTranslationSumAggregateInputType;
    _min?: BodyTypeTranslationMinAggregateInputType;
    _max?: BodyTypeTranslationMaxAggregateInputType;
};
export type BodyTypeTranslationGroupByOutputType = {
    id: number;
    bodyTypeId: number;
    languageId: number;
    name: string;
    _count: BodyTypeTranslationCountAggregateOutputType | null;
    _avg: BodyTypeTranslationAvgAggregateOutputType | null;
    _sum: BodyTypeTranslationSumAggregateOutputType | null;
    _min: BodyTypeTranslationMinAggregateOutputType | null;
    _max: BodyTypeTranslationMaxAggregateOutputType | null;
};
type GetBodyTypeTranslationGroupByPayload<T extends BodyTypeTranslationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BodyTypeTranslationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BodyTypeTranslationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BodyTypeTranslationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BodyTypeTranslationGroupByOutputType[P]>;
}>>;
export type BodyTypeTranslationWhereInput = {
    AND?: Prisma.BodyTypeTranslationWhereInput | Prisma.BodyTypeTranslationWhereInput[];
    OR?: Prisma.BodyTypeTranslationWhereInput[];
    NOT?: Prisma.BodyTypeTranslationWhereInput | Prisma.BodyTypeTranslationWhereInput[];
    id?: Prisma.IntFilter<"BodyTypeTranslation"> | number;
    bodyTypeId?: Prisma.IntFilter<"BodyTypeTranslation"> | number;
    languageId?: Prisma.IntFilter<"BodyTypeTranslation"> | number;
    name?: Prisma.StringFilter<"BodyTypeTranslation"> | string;
    bodyType?: Prisma.XOR<Prisma.BodyTypeScalarRelationFilter, Prisma.BodyTypeWhereInput>;
    language?: Prisma.XOR<Prisma.LanguageScalarRelationFilter, Prisma.LanguageWhereInput>;
};
export type BodyTypeTranslationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    bodyTypeId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    bodyType?: Prisma.BodyTypeOrderByWithRelationInput;
    language?: Prisma.LanguageOrderByWithRelationInput;
    _relevance?: Prisma.BodyTypeTranslationOrderByRelevanceInput;
};
export type BodyTypeTranslationWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    bodyTypeId_languageId?: Prisma.BodyTypeTranslationBodyTypeIdLanguageIdCompoundUniqueInput;
    AND?: Prisma.BodyTypeTranslationWhereInput | Prisma.BodyTypeTranslationWhereInput[];
    OR?: Prisma.BodyTypeTranslationWhereInput[];
    NOT?: Prisma.BodyTypeTranslationWhereInput | Prisma.BodyTypeTranslationWhereInput[];
    bodyTypeId?: Prisma.IntFilter<"BodyTypeTranslation"> | number;
    languageId?: Prisma.IntFilter<"BodyTypeTranslation"> | number;
    name?: Prisma.StringFilter<"BodyTypeTranslation"> | string;
    bodyType?: Prisma.XOR<Prisma.BodyTypeScalarRelationFilter, Prisma.BodyTypeWhereInput>;
    language?: Prisma.XOR<Prisma.LanguageScalarRelationFilter, Prisma.LanguageWhereInput>;
}, "id" | "bodyTypeId_languageId">;
export type BodyTypeTranslationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    bodyTypeId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    _count?: Prisma.BodyTypeTranslationCountOrderByAggregateInput;
    _avg?: Prisma.BodyTypeTranslationAvgOrderByAggregateInput;
    _max?: Prisma.BodyTypeTranslationMaxOrderByAggregateInput;
    _min?: Prisma.BodyTypeTranslationMinOrderByAggregateInput;
    _sum?: Prisma.BodyTypeTranslationSumOrderByAggregateInput;
};
export type BodyTypeTranslationScalarWhereWithAggregatesInput = {
    AND?: Prisma.BodyTypeTranslationScalarWhereWithAggregatesInput | Prisma.BodyTypeTranslationScalarWhereWithAggregatesInput[];
    OR?: Prisma.BodyTypeTranslationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BodyTypeTranslationScalarWhereWithAggregatesInput | Prisma.BodyTypeTranslationScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"BodyTypeTranslation"> | number;
    bodyTypeId?: Prisma.IntWithAggregatesFilter<"BodyTypeTranslation"> | number;
    languageId?: Prisma.IntWithAggregatesFilter<"BodyTypeTranslation"> | number;
    name?: Prisma.StringWithAggregatesFilter<"BodyTypeTranslation"> | string;
};
export type BodyTypeTranslationCreateInput = {
    name: string;
    bodyType: Prisma.BodyTypeCreateNestedOneWithoutTranslationsInput;
    language: Prisma.LanguageCreateNestedOneWithoutBodyTypeTranslationsInput;
};
export type BodyTypeTranslationUncheckedCreateInput = {
    id?: number;
    bodyTypeId: number;
    languageId: number;
    name: string;
};
export type BodyTypeTranslationUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    bodyType?: Prisma.BodyTypeUpdateOneRequiredWithoutTranslationsNestedInput;
    language?: Prisma.LanguageUpdateOneRequiredWithoutBodyTypeTranslationsNestedInput;
};
export type BodyTypeTranslationUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    bodyTypeId?: Prisma.IntFieldUpdateOperationsInput | number;
    languageId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BodyTypeTranslationCreateManyInput = {
    id?: number;
    bodyTypeId: number;
    languageId: number;
    name: string;
};
export type BodyTypeTranslationUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BodyTypeTranslationUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    bodyTypeId?: Prisma.IntFieldUpdateOperationsInput | number;
    languageId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BodyTypeTranslationListRelationFilter = {
    every?: Prisma.BodyTypeTranslationWhereInput;
    some?: Prisma.BodyTypeTranslationWhereInput;
    none?: Prisma.BodyTypeTranslationWhereInput;
};
export type BodyTypeTranslationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BodyTypeTranslationOrderByRelevanceInput = {
    fields: Prisma.BodyTypeTranslationOrderByRelevanceFieldEnum | Prisma.BodyTypeTranslationOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type BodyTypeTranslationBodyTypeIdLanguageIdCompoundUniqueInput = {
    bodyTypeId: number;
    languageId: number;
};
export type BodyTypeTranslationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bodyTypeId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type BodyTypeTranslationAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bodyTypeId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
};
export type BodyTypeTranslationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bodyTypeId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type BodyTypeTranslationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bodyTypeId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type BodyTypeTranslationSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bodyTypeId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
};
export type BodyTypeTranslationCreateNestedManyWithoutLanguageInput = {
    create?: Prisma.XOR<Prisma.BodyTypeTranslationCreateWithoutLanguageInput, Prisma.BodyTypeTranslationUncheckedCreateWithoutLanguageInput> | Prisma.BodyTypeTranslationCreateWithoutLanguageInput[] | Prisma.BodyTypeTranslationUncheckedCreateWithoutLanguageInput[];
    connectOrCreate?: Prisma.BodyTypeTranslationCreateOrConnectWithoutLanguageInput | Prisma.BodyTypeTranslationCreateOrConnectWithoutLanguageInput[];
    createMany?: Prisma.BodyTypeTranslationCreateManyLanguageInputEnvelope;
    connect?: Prisma.BodyTypeTranslationWhereUniqueInput | Prisma.BodyTypeTranslationWhereUniqueInput[];
};
export type BodyTypeTranslationUncheckedCreateNestedManyWithoutLanguageInput = {
    create?: Prisma.XOR<Prisma.BodyTypeTranslationCreateWithoutLanguageInput, Prisma.BodyTypeTranslationUncheckedCreateWithoutLanguageInput> | Prisma.BodyTypeTranslationCreateWithoutLanguageInput[] | Prisma.BodyTypeTranslationUncheckedCreateWithoutLanguageInput[];
    connectOrCreate?: Prisma.BodyTypeTranslationCreateOrConnectWithoutLanguageInput | Prisma.BodyTypeTranslationCreateOrConnectWithoutLanguageInput[];
    createMany?: Prisma.BodyTypeTranslationCreateManyLanguageInputEnvelope;
    connect?: Prisma.BodyTypeTranslationWhereUniqueInput | Prisma.BodyTypeTranslationWhereUniqueInput[];
};
export type BodyTypeTranslationUpdateManyWithoutLanguageNestedInput = {
    create?: Prisma.XOR<Prisma.BodyTypeTranslationCreateWithoutLanguageInput, Prisma.BodyTypeTranslationUncheckedCreateWithoutLanguageInput> | Prisma.BodyTypeTranslationCreateWithoutLanguageInput[] | Prisma.BodyTypeTranslationUncheckedCreateWithoutLanguageInput[];
    connectOrCreate?: Prisma.BodyTypeTranslationCreateOrConnectWithoutLanguageInput | Prisma.BodyTypeTranslationCreateOrConnectWithoutLanguageInput[];
    upsert?: Prisma.BodyTypeTranslationUpsertWithWhereUniqueWithoutLanguageInput | Prisma.BodyTypeTranslationUpsertWithWhereUniqueWithoutLanguageInput[];
    createMany?: Prisma.BodyTypeTranslationCreateManyLanguageInputEnvelope;
    set?: Prisma.BodyTypeTranslationWhereUniqueInput | Prisma.BodyTypeTranslationWhereUniqueInput[];
    disconnect?: Prisma.BodyTypeTranslationWhereUniqueInput | Prisma.BodyTypeTranslationWhereUniqueInput[];
    delete?: Prisma.BodyTypeTranslationWhereUniqueInput | Prisma.BodyTypeTranslationWhereUniqueInput[];
    connect?: Prisma.BodyTypeTranslationWhereUniqueInput | Prisma.BodyTypeTranslationWhereUniqueInput[];
    update?: Prisma.BodyTypeTranslationUpdateWithWhereUniqueWithoutLanguageInput | Prisma.BodyTypeTranslationUpdateWithWhereUniqueWithoutLanguageInput[];
    updateMany?: Prisma.BodyTypeTranslationUpdateManyWithWhereWithoutLanguageInput | Prisma.BodyTypeTranslationUpdateManyWithWhereWithoutLanguageInput[];
    deleteMany?: Prisma.BodyTypeTranslationScalarWhereInput | Prisma.BodyTypeTranslationScalarWhereInput[];
};
export type BodyTypeTranslationUncheckedUpdateManyWithoutLanguageNestedInput = {
    create?: Prisma.XOR<Prisma.BodyTypeTranslationCreateWithoutLanguageInput, Prisma.BodyTypeTranslationUncheckedCreateWithoutLanguageInput> | Prisma.BodyTypeTranslationCreateWithoutLanguageInput[] | Prisma.BodyTypeTranslationUncheckedCreateWithoutLanguageInput[];
    connectOrCreate?: Prisma.BodyTypeTranslationCreateOrConnectWithoutLanguageInput | Prisma.BodyTypeTranslationCreateOrConnectWithoutLanguageInput[];
    upsert?: Prisma.BodyTypeTranslationUpsertWithWhereUniqueWithoutLanguageInput | Prisma.BodyTypeTranslationUpsertWithWhereUniqueWithoutLanguageInput[];
    createMany?: Prisma.BodyTypeTranslationCreateManyLanguageInputEnvelope;
    set?: Prisma.BodyTypeTranslationWhereUniqueInput | Prisma.BodyTypeTranslationWhereUniqueInput[];
    disconnect?: Prisma.BodyTypeTranslationWhereUniqueInput | Prisma.BodyTypeTranslationWhereUniqueInput[];
    delete?: Prisma.BodyTypeTranslationWhereUniqueInput | Prisma.BodyTypeTranslationWhereUniqueInput[];
    connect?: Prisma.BodyTypeTranslationWhereUniqueInput | Prisma.BodyTypeTranslationWhereUniqueInput[];
    update?: Prisma.BodyTypeTranslationUpdateWithWhereUniqueWithoutLanguageInput | Prisma.BodyTypeTranslationUpdateWithWhereUniqueWithoutLanguageInput[];
    updateMany?: Prisma.BodyTypeTranslationUpdateManyWithWhereWithoutLanguageInput | Prisma.BodyTypeTranslationUpdateManyWithWhereWithoutLanguageInput[];
    deleteMany?: Prisma.BodyTypeTranslationScalarWhereInput | Prisma.BodyTypeTranslationScalarWhereInput[];
};
export type BodyTypeTranslationCreateNestedManyWithoutBodyTypeInput = {
    create?: Prisma.XOR<Prisma.BodyTypeTranslationCreateWithoutBodyTypeInput, Prisma.BodyTypeTranslationUncheckedCreateWithoutBodyTypeInput> | Prisma.BodyTypeTranslationCreateWithoutBodyTypeInput[] | Prisma.BodyTypeTranslationUncheckedCreateWithoutBodyTypeInput[];
    connectOrCreate?: Prisma.BodyTypeTranslationCreateOrConnectWithoutBodyTypeInput | Prisma.BodyTypeTranslationCreateOrConnectWithoutBodyTypeInput[];
    createMany?: Prisma.BodyTypeTranslationCreateManyBodyTypeInputEnvelope;
    connect?: Prisma.BodyTypeTranslationWhereUniqueInput | Prisma.BodyTypeTranslationWhereUniqueInput[];
};
export type BodyTypeTranslationUncheckedCreateNestedManyWithoutBodyTypeInput = {
    create?: Prisma.XOR<Prisma.BodyTypeTranslationCreateWithoutBodyTypeInput, Prisma.BodyTypeTranslationUncheckedCreateWithoutBodyTypeInput> | Prisma.BodyTypeTranslationCreateWithoutBodyTypeInput[] | Prisma.BodyTypeTranslationUncheckedCreateWithoutBodyTypeInput[];
    connectOrCreate?: Prisma.BodyTypeTranslationCreateOrConnectWithoutBodyTypeInput | Prisma.BodyTypeTranslationCreateOrConnectWithoutBodyTypeInput[];
    createMany?: Prisma.BodyTypeTranslationCreateManyBodyTypeInputEnvelope;
    connect?: Prisma.BodyTypeTranslationWhereUniqueInput | Prisma.BodyTypeTranslationWhereUniqueInput[];
};
export type BodyTypeTranslationUpdateManyWithoutBodyTypeNestedInput = {
    create?: Prisma.XOR<Prisma.BodyTypeTranslationCreateWithoutBodyTypeInput, Prisma.BodyTypeTranslationUncheckedCreateWithoutBodyTypeInput> | Prisma.BodyTypeTranslationCreateWithoutBodyTypeInput[] | Prisma.BodyTypeTranslationUncheckedCreateWithoutBodyTypeInput[];
    connectOrCreate?: Prisma.BodyTypeTranslationCreateOrConnectWithoutBodyTypeInput | Prisma.BodyTypeTranslationCreateOrConnectWithoutBodyTypeInput[];
    upsert?: Prisma.BodyTypeTranslationUpsertWithWhereUniqueWithoutBodyTypeInput | Prisma.BodyTypeTranslationUpsertWithWhereUniqueWithoutBodyTypeInput[];
    createMany?: Prisma.BodyTypeTranslationCreateManyBodyTypeInputEnvelope;
    set?: Prisma.BodyTypeTranslationWhereUniqueInput | Prisma.BodyTypeTranslationWhereUniqueInput[];
    disconnect?: Prisma.BodyTypeTranslationWhereUniqueInput | Prisma.BodyTypeTranslationWhereUniqueInput[];
    delete?: Prisma.BodyTypeTranslationWhereUniqueInput | Prisma.BodyTypeTranslationWhereUniqueInput[];
    connect?: Prisma.BodyTypeTranslationWhereUniqueInput | Prisma.BodyTypeTranslationWhereUniqueInput[];
    update?: Prisma.BodyTypeTranslationUpdateWithWhereUniqueWithoutBodyTypeInput | Prisma.BodyTypeTranslationUpdateWithWhereUniqueWithoutBodyTypeInput[];
    updateMany?: Prisma.BodyTypeTranslationUpdateManyWithWhereWithoutBodyTypeInput | Prisma.BodyTypeTranslationUpdateManyWithWhereWithoutBodyTypeInput[];
    deleteMany?: Prisma.BodyTypeTranslationScalarWhereInput | Prisma.BodyTypeTranslationScalarWhereInput[];
};
export type BodyTypeTranslationUncheckedUpdateManyWithoutBodyTypeNestedInput = {
    create?: Prisma.XOR<Prisma.BodyTypeTranslationCreateWithoutBodyTypeInput, Prisma.BodyTypeTranslationUncheckedCreateWithoutBodyTypeInput> | Prisma.BodyTypeTranslationCreateWithoutBodyTypeInput[] | Prisma.BodyTypeTranslationUncheckedCreateWithoutBodyTypeInput[];
    connectOrCreate?: Prisma.BodyTypeTranslationCreateOrConnectWithoutBodyTypeInput | Prisma.BodyTypeTranslationCreateOrConnectWithoutBodyTypeInput[];
    upsert?: Prisma.BodyTypeTranslationUpsertWithWhereUniqueWithoutBodyTypeInput | Prisma.BodyTypeTranslationUpsertWithWhereUniqueWithoutBodyTypeInput[];
    createMany?: Prisma.BodyTypeTranslationCreateManyBodyTypeInputEnvelope;
    set?: Prisma.BodyTypeTranslationWhereUniqueInput | Prisma.BodyTypeTranslationWhereUniqueInput[];
    disconnect?: Prisma.BodyTypeTranslationWhereUniqueInput | Prisma.BodyTypeTranslationWhereUniqueInput[];
    delete?: Prisma.BodyTypeTranslationWhereUniqueInput | Prisma.BodyTypeTranslationWhereUniqueInput[];
    connect?: Prisma.BodyTypeTranslationWhereUniqueInput | Prisma.BodyTypeTranslationWhereUniqueInput[];
    update?: Prisma.BodyTypeTranslationUpdateWithWhereUniqueWithoutBodyTypeInput | Prisma.BodyTypeTranslationUpdateWithWhereUniqueWithoutBodyTypeInput[];
    updateMany?: Prisma.BodyTypeTranslationUpdateManyWithWhereWithoutBodyTypeInput | Prisma.BodyTypeTranslationUpdateManyWithWhereWithoutBodyTypeInput[];
    deleteMany?: Prisma.BodyTypeTranslationScalarWhereInput | Prisma.BodyTypeTranslationScalarWhereInput[];
};
export type BodyTypeTranslationCreateWithoutLanguageInput = {
    name: string;
    bodyType: Prisma.BodyTypeCreateNestedOneWithoutTranslationsInput;
};
export type BodyTypeTranslationUncheckedCreateWithoutLanguageInput = {
    id?: number;
    bodyTypeId: number;
    name: string;
};
export type BodyTypeTranslationCreateOrConnectWithoutLanguageInput = {
    where: Prisma.BodyTypeTranslationWhereUniqueInput;
    create: Prisma.XOR<Prisma.BodyTypeTranslationCreateWithoutLanguageInput, Prisma.BodyTypeTranslationUncheckedCreateWithoutLanguageInput>;
};
export type BodyTypeTranslationCreateManyLanguageInputEnvelope = {
    data: Prisma.BodyTypeTranslationCreateManyLanguageInput | Prisma.BodyTypeTranslationCreateManyLanguageInput[];
    skipDuplicates?: boolean;
};
export type BodyTypeTranslationUpsertWithWhereUniqueWithoutLanguageInput = {
    where: Prisma.BodyTypeTranslationWhereUniqueInput;
    update: Prisma.XOR<Prisma.BodyTypeTranslationUpdateWithoutLanguageInput, Prisma.BodyTypeTranslationUncheckedUpdateWithoutLanguageInput>;
    create: Prisma.XOR<Prisma.BodyTypeTranslationCreateWithoutLanguageInput, Prisma.BodyTypeTranslationUncheckedCreateWithoutLanguageInput>;
};
export type BodyTypeTranslationUpdateWithWhereUniqueWithoutLanguageInput = {
    where: Prisma.BodyTypeTranslationWhereUniqueInput;
    data: Prisma.XOR<Prisma.BodyTypeTranslationUpdateWithoutLanguageInput, Prisma.BodyTypeTranslationUncheckedUpdateWithoutLanguageInput>;
};
export type BodyTypeTranslationUpdateManyWithWhereWithoutLanguageInput = {
    where: Prisma.BodyTypeTranslationScalarWhereInput;
    data: Prisma.XOR<Prisma.BodyTypeTranslationUpdateManyMutationInput, Prisma.BodyTypeTranslationUncheckedUpdateManyWithoutLanguageInput>;
};
export type BodyTypeTranslationScalarWhereInput = {
    AND?: Prisma.BodyTypeTranslationScalarWhereInput | Prisma.BodyTypeTranslationScalarWhereInput[];
    OR?: Prisma.BodyTypeTranslationScalarWhereInput[];
    NOT?: Prisma.BodyTypeTranslationScalarWhereInput | Prisma.BodyTypeTranslationScalarWhereInput[];
    id?: Prisma.IntFilter<"BodyTypeTranslation"> | number;
    bodyTypeId?: Prisma.IntFilter<"BodyTypeTranslation"> | number;
    languageId?: Prisma.IntFilter<"BodyTypeTranslation"> | number;
    name?: Prisma.StringFilter<"BodyTypeTranslation"> | string;
};
export type BodyTypeTranslationCreateWithoutBodyTypeInput = {
    name: string;
    language: Prisma.LanguageCreateNestedOneWithoutBodyTypeTranslationsInput;
};
export type BodyTypeTranslationUncheckedCreateWithoutBodyTypeInput = {
    id?: number;
    languageId: number;
    name: string;
};
export type BodyTypeTranslationCreateOrConnectWithoutBodyTypeInput = {
    where: Prisma.BodyTypeTranslationWhereUniqueInput;
    create: Prisma.XOR<Prisma.BodyTypeTranslationCreateWithoutBodyTypeInput, Prisma.BodyTypeTranslationUncheckedCreateWithoutBodyTypeInput>;
};
export type BodyTypeTranslationCreateManyBodyTypeInputEnvelope = {
    data: Prisma.BodyTypeTranslationCreateManyBodyTypeInput | Prisma.BodyTypeTranslationCreateManyBodyTypeInput[];
    skipDuplicates?: boolean;
};
export type BodyTypeTranslationUpsertWithWhereUniqueWithoutBodyTypeInput = {
    where: Prisma.BodyTypeTranslationWhereUniqueInput;
    update: Prisma.XOR<Prisma.BodyTypeTranslationUpdateWithoutBodyTypeInput, Prisma.BodyTypeTranslationUncheckedUpdateWithoutBodyTypeInput>;
    create: Prisma.XOR<Prisma.BodyTypeTranslationCreateWithoutBodyTypeInput, Prisma.BodyTypeTranslationUncheckedCreateWithoutBodyTypeInput>;
};
export type BodyTypeTranslationUpdateWithWhereUniqueWithoutBodyTypeInput = {
    where: Prisma.BodyTypeTranslationWhereUniqueInput;
    data: Prisma.XOR<Prisma.BodyTypeTranslationUpdateWithoutBodyTypeInput, Prisma.BodyTypeTranslationUncheckedUpdateWithoutBodyTypeInput>;
};
export type BodyTypeTranslationUpdateManyWithWhereWithoutBodyTypeInput = {
    where: Prisma.BodyTypeTranslationScalarWhereInput;
    data: Prisma.XOR<Prisma.BodyTypeTranslationUpdateManyMutationInput, Prisma.BodyTypeTranslationUncheckedUpdateManyWithoutBodyTypeInput>;
};
export type BodyTypeTranslationCreateManyLanguageInput = {
    id?: number;
    bodyTypeId: number;
    name: string;
};
export type BodyTypeTranslationUpdateWithoutLanguageInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    bodyType?: Prisma.BodyTypeUpdateOneRequiredWithoutTranslationsNestedInput;
};
export type BodyTypeTranslationUncheckedUpdateWithoutLanguageInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    bodyTypeId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BodyTypeTranslationUncheckedUpdateManyWithoutLanguageInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    bodyTypeId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BodyTypeTranslationCreateManyBodyTypeInput = {
    id?: number;
    languageId: number;
    name: string;
};
export type BodyTypeTranslationUpdateWithoutBodyTypeInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    language?: Prisma.LanguageUpdateOneRequiredWithoutBodyTypeTranslationsNestedInput;
};
export type BodyTypeTranslationUncheckedUpdateWithoutBodyTypeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    languageId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BodyTypeTranslationUncheckedUpdateManyWithoutBodyTypeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    languageId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type BodyTypeTranslationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bodyTypeId?: boolean;
    languageId?: boolean;
    name?: boolean;
    bodyType?: boolean | Prisma.BodyTypeDefaultArgs<ExtArgs>;
    language?: boolean | Prisma.LanguageDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bodyTypeTranslation"]>;
export type BodyTypeTranslationSelectScalar = {
    id?: boolean;
    bodyTypeId?: boolean;
    languageId?: boolean;
    name?: boolean;
};
export type BodyTypeTranslationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "bodyTypeId" | "languageId" | "name", ExtArgs["result"]["bodyTypeTranslation"]>;
export type BodyTypeTranslationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bodyType?: boolean | Prisma.BodyTypeDefaultArgs<ExtArgs>;
    language?: boolean | Prisma.LanguageDefaultArgs<ExtArgs>;
};
export type $BodyTypeTranslationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BodyTypeTranslation";
    objects: {
        bodyType: Prisma.$BodyTypePayload<ExtArgs>;
        language: Prisma.$LanguagePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        bodyTypeId: number;
        languageId: number;
        name: string;
    }, ExtArgs["result"]["bodyTypeTranslation"]>;
    composites: {};
};
export type BodyTypeTranslationGetPayload<S extends boolean | null | undefined | BodyTypeTranslationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BodyTypeTranslationPayload, S>;
export type BodyTypeTranslationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BodyTypeTranslationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BodyTypeTranslationCountAggregateInputType | true;
};
export interface BodyTypeTranslationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BodyTypeTranslation'];
        meta: {
            name: 'BodyTypeTranslation';
        };
    };
    findUnique<T extends BodyTypeTranslationFindUniqueArgs>(args: Prisma.SelectSubset<T, BodyTypeTranslationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BodyTypeTranslationClient<runtime.Types.Result.GetResult<Prisma.$BodyTypeTranslationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BodyTypeTranslationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BodyTypeTranslationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BodyTypeTranslationClient<runtime.Types.Result.GetResult<Prisma.$BodyTypeTranslationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BodyTypeTranslationFindFirstArgs>(args?: Prisma.SelectSubset<T, BodyTypeTranslationFindFirstArgs<ExtArgs>>): Prisma.Prisma__BodyTypeTranslationClient<runtime.Types.Result.GetResult<Prisma.$BodyTypeTranslationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BodyTypeTranslationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BodyTypeTranslationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BodyTypeTranslationClient<runtime.Types.Result.GetResult<Prisma.$BodyTypeTranslationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BodyTypeTranslationFindManyArgs>(args?: Prisma.SelectSubset<T, BodyTypeTranslationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BodyTypeTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BodyTypeTranslationCreateArgs>(args: Prisma.SelectSubset<T, BodyTypeTranslationCreateArgs<ExtArgs>>): Prisma.Prisma__BodyTypeTranslationClient<runtime.Types.Result.GetResult<Prisma.$BodyTypeTranslationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BodyTypeTranslationCreateManyArgs>(args?: Prisma.SelectSubset<T, BodyTypeTranslationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends BodyTypeTranslationDeleteArgs>(args: Prisma.SelectSubset<T, BodyTypeTranslationDeleteArgs<ExtArgs>>): Prisma.Prisma__BodyTypeTranslationClient<runtime.Types.Result.GetResult<Prisma.$BodyTypeTranslationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BodyTypeTranslationUpdateArgs>(args: Prisma.SelectSubset<T, BodyTypeTranslationUpdateArgs<ExtArgs>>): Prisma.Prisma__BodyTypeTranslationClient<runtime.Types.Result.GetResult<Prisma.$BodyTypeTranslationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BodyTypeTranslationDeleteManyArgs>(args?: Prisma.SelectSubset<T, BodyTypeTranslationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BodyTypeTranslationUpdateManyArgs>(args: Prisma.SelectSubset<T, BodyTypeTranslationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends BodyTypeTranslationUpsertArgs>(args: Prisma.SelectSubset<T, BodyTypeTranslationUpsertArgs<ExtArgs>>): Prisma.Prisma__BodyTypeTranslationClient<runtime.Types.Result.GetResult<Prisma.$BodyTypeTranslationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BodyTypeTranslationCountArgs>(args?: Prisma.Subset<T, BodyTypeTranslationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BodyTypeTranslationCountAggregateOutputType> : number>;
    aggregate<T extends BodyTypeTranslationAggregateArgs>(args: Prisma.Subset<T, BodyTypeTranslationAggregateArgs>): Prisma.PrismaPromise<GetBodyTypeTranslationAggregateType<T>>;
    groupBy<T extends BodyTypeTranslationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BodyTypeTranslationGroupByArgs['orderBy'];
    } : {
        orderBy?: BodyTypeTranslationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BodyTypeTranslationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBodyTypeTranslationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BodyTypeTranslationFieldRefs;
}
export interface Prisma__BodyTypeTranslationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    bodyType<T extends Prisma.BodyTypeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BodyTypeDefaultArgs<ExtArgs>>): Prisma.Prisma__BodyTypeClient<runtime.Types.Result.GetResult<Prisma.$BodyTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    language<T extends Prisma.LanguageDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LanguageDefaultArgs<ExtArgs>>): Prisma.Prisma__LanguageClient<runtime.Types.Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BodyTypeTranslationFieldRefs {
    readonly id: Prisma.FieldRef<"BodyTypeTranslation", 'Int'>;
    readonly bodyTypeId: Prisma.FieldRef<"BodyTypeTranslation", 'Int'>;
    readonly languageId: Prisma.FieldRef<"BodyTypeTranslation", 'Int'>;
    readonly name: Prisma.FieldRef<"BodyTypeTranslation", 'String'>;
}
export type BodyTypeTranslationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BodyTypeTranslationSelect<ExtArgs> | null;
    omit?: Prisma.BodyTypeTranslationOmit<ExtArgs> | null;
    include?: Prisma.BodyTypeTranslationInclude<ExtArgs> | null;
    where: Prisma.BodyTypeTranslationWhereUniqueInput;
};
export type BodyTypeTranslationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BodyTypeTranslationSelect<ExtArgs> | null;
    omit?: Prisma.BodyTypeTranslationOmit<ExtArgs> | null;
    include?: Prisma.BodyTypeTranslationInclude<ExtArgs> | null;
    where: Prisma.BodyTypeTranslationWhereUniqueInput;
};
export type BodyTypeTranslationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BodyTypeTranslationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BodyTypeTranslationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BodyTypeTranslationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BodyTypeTranslationSelect<ExtArgs> | null;
    omit?: Prisma.BodyTypeTranslationOmit<ExtArgs> | null;
    include?: Prisma.BodyTypeTranslationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BodyTypeTranslationCreateInput, Prisma.BodyTypeTranslationUncheckedCreateInput>;
};
export type BodyTypeTranslationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BodyTypeTranslationCreateManyInput | Prisma.BodyTypeTranslationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BodyTypeTranslationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BodyTypeTranslationSelect<ExtArgs> | null;
    omit?: Prisma.BodyTypeTranslationOmit<ExtArgs> | null;
    include?: Prisma.BodyTypeTranslationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BodyTypeTranslationUpdateInput, Prisma.BodyTypeTranslationUncheckedUpdateInput>;
    where: Prisma.BodyTypeTranslationWhereUniqueInput;
};
export type BodyTypeTranslationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BodyTypeTranslationUpdateManyMutationInput, Prisma.BodyTypeTranslationUncheckedUpdateManyInput>;
    where?: Prisma.BodyTypeTranslationWhereInput;
    limit?: number;
};
export type BodyTypeTranslationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BodyTypeTranslationSelect<ExtArgs> | null;
    omit?: Prisma.BodyTypeTranslationOmit<ExtArgs> | null;
    include?: Prisma.BodyTypeTranslationInclude<ExtArgs> | null;
    where: Prisma.BodyTypeTranslationWhereUniqueInput;
    create: Prisma.XOR<Prisma.BodyTypeTranslationCreateInput, Prisma.BodyTypeTranslationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BodyTypeTranslationUpdateInput, Prisma.BodyTypeTranslationUncheckedUpdateInput>;
};
export type BodyTypeTranslationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BodyTypeTranslationSelect<ExtArgs> | null;
    omit?: Prisma.BodyTypeTranslationOmit<ExtArgs> | null;
    include?: Prisma.BodyTypeTranslationInclude<ExtArgs> | null;
    where: Prisma.BodyTypeTranslationWhereUniqueInput;
};
export type BodyTypeTranslationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BodyTypeTranslationWhereInput;
    limit?: number;
};
export type BodyTypeTranslationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BodyTypeTranslationSelect<ExtArgs> | null;
    omit?: Prisma.BodyTypeTranslationOmit<ExtArgs> | null;
    include?: Prisma.BodyTypeTranslationInclude<ExtArgs> | null;
};
export {};
