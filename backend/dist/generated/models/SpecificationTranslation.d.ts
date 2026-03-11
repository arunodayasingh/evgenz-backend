import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type SpecificationTranslationModel = runtime.Types.Result.DefaultSelection<Prisma.$SpecificationTranslationPayload>;
export type AggregateSpecificationTranslation = {
    _count: SpecificationTranslationCountAggregateOutputType | null;
    _avg: SpecificationTranslationAvgAggregateOutputType | null;
    _sum: SpecificationTranslationSumAggregateOutputType | null;
    _min: SpecificationTranslationMinAggregateOutputType | null;
    _max: SpecificationTranslationMaxAggregateOutputType | null;
};
export type SpecificationTranslationAvgAggregateOutputType = {
    id: number | null;
    specificationId: number | null;
    languageId: number | null;
};
export type SpecificationTranslationSumAggregateOutputType = {
    id: number | null;
    specificationId: number | null;
    languageId: number | null;
};
export type SpecificationTranslationMinAggregateOutputType = {
    id: number | null;
    specificationId: number | null;
    languageId: number | null;
    value: string | null;
};
export type SpecificationTranslationMaxAggregateOutputType = {
    id: number | null;
    specificationId: number | null;
    languageId: number | null;
    value: string | null;
};
export type SpecificationTranslationCountAggregateOutputType = {
    id: number;
    specificationId: number;
    languageId: number;
    value: number;
    _all: number;
};
export type SpecificationTranslationAvgAggregateInputType = {
    id?: true;
    specificationId?: true;
    languageId?: true;
};
export type SpecificationTranslationSumAggregateInputType = {
    id?: true;
    specificationId?: true;
    languageId?: true;
};
export type SpecificationTranslationMinAggregateInputType = {
    id?: true;
    specificationId?: true;
    languageId?: true;
    value?: true;
};
export type SpecificationTranslationMaxAggregateInputType = {
    id?: true;
    specificationId?: true;
    languageId?: true;
    value?: true;
};
export type SpecificationTranslationCountAggregateInputType = {
    id?: true;
    specificationId?: true;
    languageId?: true;
    value?: true;
    _all?: true;
};
export type SpecificationTranslationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SpecificationTranslationWhereInput;
    orderBy?: Prisma.SpecificationTranslationOrderByWithRelationInput | Prisma.SpecificationTranslationOrderByWithRelationInput[];
    cursor?: Prisma.SpecificationTranslationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SpecificationTranslationCountAggregateInputType;
    _avg?: SpecificationTranslationAvgAggregateInputType;
    _sum?: SpecificationTranslationSumAggregateInputType;
    _min?: SpecificationTranslationMinAggregateInputType;
    _max?: SpecificationTranslationMaxAggregateInputType;
};
export type GetSpecificationTranslationAggregateType<T extends SpecificationTranslationAggregateArgs> = {
    [P in keyof T & keyof AggregateSpecificationTranslation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSpecificationTranslation[P]> : Prisma.GetScalarType<T[P], AggregateSpecificationTranslation[P]>;
};
export type SpecificationTranslationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SpecificationTranslationWhereInput;
    orderBy?: Prisma.SpecificationTranslationOrderByWithAggregationInput | Prisma.SpecificationTranslationOrderByWithAggregationInput[];
    by: Prisma.SpecificationTranslationScalarFieldEnum[] | Prisma.SpecificationTranslationScalarFieldEnum;
    having?: Prisma.SpecificationTranslationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SpecificationTranslationCountAggregateInputType | true;
    _avg?: SpecificationTranslationAvgAggregateInputType;
    _sum?: SpecificationTranslationSumAggregateInputType;
    _min?: SpecificationTranslationMinAggregateInputType;
    _max?: SpecificationTranslationMaxAggregateInputType;
};
export type SpecificationTranslationGroupByOutputType = {
    id: number;
    specificationId: number;
    languageId: number;
    value: string;
    _count: SpecificationTranslationCountAggregateOutputType | null;
    _avg: SpecificationTranslationAvgAggregateOutputType | null;
    _sum: SpecificationTranslationSumAggregateOutputType | null;
    _min: SpecificationTranslationMinAggregateOutputType | null;
    _max: SpecificationTranslationMaxAggregateOutputType | null;
};
type GetSpecificationTranslationGroupByPayload<T extends SpecificationTranslationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SpecificationTranslationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SpecificationTranslationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SpecificationTranslationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SpecificationTranslationGroupByOutputType[P]>;
}>>;
export type SpecificationTranslationWhereInput = {
    AND?: Prisma.SpecificationTranslationWhereInput | Prisma.SpecificationTranslationWhereInput[];
    OR?: Prisma.SpecificationTranslationWhereInput[];
    NOT?: Prisma.SpecificationTranslationWhereInput | Prisma.SpecificationTranslationWhereInput[];
    id?: Prisma.IntFilter<"SpecificationTranslation"> | number;
    specificationId?: Prisma.IntFilter<"SpecificationTranslation"> | number;
    languageId?: Prisma.IntFilter<"SpecificationTranslation"> | number;
    value?: Prisma.StringFilter<"SpecificationTranslation"> | string;
    specification?: Prisma.XOR<Prisma.SpecificationScalarRelationFilter, Prisma.SpecificationWhereInput>;
    language?: Prisma.XOR<Prisma.LanguageScalarRelationFilter, Prisma.LanguageWhereInput>;
};
export type SpecificationTranslationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    specificationId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    specification?: Prisma.SpecificationOrderByWithRelationInput;
    language?: Prisma.LanguageOrderByWithRelationInput;
    _relevance?: Prisma.SpecificationTranslationOrderByRelevanceInput;
};
export type SpecificationTranslationWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    specificationId_languageId?: Prisma.SpecificationTranslationSpecificationIdLanguageIdCompoundUniqueInput;
    AND?: Prisma.SpecificationTranslationWhereInput | Prisma.SpecificationTranslationWhereInput[];
    OR?: Prisma.SpecificationTranslationWhereInput[];
    NOT?: Prisma.SpecificationTranslationWhereInput | Prisma.SpecificationTranslationWhereInput[];
    specificationId?: Prisma.IntFilter<"SpecificationTranslation"> | number;
    languageId?: Prisma.IntFilter<"SpecificationTranslation"> | number;
    value?: Prisma.StringFilter<"SpecificationTranslation"> | string;
    specification?: Prisma.XOR<Prisma.SpecificationScalarRelationFilter, Prisma.SpecificationWhereInput>;
    language?: Prisma.XOR<Prisma.LanguageScalarRelationFilter, Prisma.LanguageWhereInput>;
}, "id" | "specificationId_languageId">;
export type SpecificationTranslationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    specificationId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    _count?: Prisma.SpecificationTranslationCountOrderByAggregateInput;
    _avg?: Prisma.SpecificationTranslationAvgOrderByAggregateInput;
    _max?: Prisma.SpecificationTranslationMaxOrderByAggregateInput;
    _min?: Prisma.SpecificationTranslationMinOrderByAggregateInput;
    _sum?: Prisma.SpecificationTranslationSumOrderByAggregateInput;
};
export type SpecificationTranslationScalarWhereWithAggregatesInput = {
    AND?: Prisma.SpecificationTranslationScalarWhereWithAggregatesInput | Prisma.SpecificationTranslationScalarWhereWithAggregatesInput[];
    OR?: Prisma.SpecificationTranslationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SpecificationTranslationScalarWhereWithAggregatesInput | Prisma.SpecificationTranslationScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"SpecificationTranslation"> | number;
    specificationId?: Prisma.IntWithAggregatesFilter<"SpecificationTranslation"> | number;
    languageId?: Prisma.IntWithAggregatesFilter<"SpecificationTranslation"> | number;
    value?: Prisma.StringWithAggregatesFilter<"SpecificationTranslation"> | string;
};
export type SpecificationTranslationCreateInput = {
    value: string;
    specification: Prisma.SpecificationCreateNestedOneWithoutTranslationsInput;
    language: Prisma.LanguageCreateNestedOneWithoutSpecificationTranslationsInput;
};
export type SpecificationTranslationUncheckedCreateInput = {
    id?: number;
    specificationId: number;
    languageId: number;
    value: string;
};
export type SpecificationTranslationUpdateInput = {
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    specification?: Prisma.SpecificationUpdateOneRequiredWithoutTranslationsNestedInput;
    language?: Prisma.LanguageUpdateOneRequiredWithoutSpecificationTranslationsNestedInput;
};
export type SpecificationTranslationUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    specificationId?: Prisma.IntFieldUpdateOperationsInput | number;
    languageId?: Prisma.IntFieldUpdateOperationsInput | number;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SpecificationTranslationCreateManyInput = {
    id?: number;
    specificationId: number;
    languageId: number;
    value: string;
};
export type SpecificationTranslationUpdateManyMutationInput = {
    value?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SpecificationTranslationUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    specificationId?: Prisma.IntFieldUpdateOperationsInput | number;
    languageId?: Prisma.IntFieldUpdateOperationsInput | number;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SpecificationTranslationListRelationFilter = {
    every?: Prisma.SpecificationTranslationWhereInput;
    some?: Prisma.SpecificationTranslationWhereInput;
    none?: Prisma.SpecificationTranslationWhereInput;
};
export type SpecificationTranslationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SpecificationTranslationOrderByRelevanceInput = {
    fields: Prisma.SpecificationTranslationOrderByRelevanceFieldEnum | Prisma.SpecificationTranslationOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type SpecificationTranslationSpecificationIdLanguageIdCompoundUniqueInput = {
    specificationId: number;
    languageId: number;
};
export type SpecificationTranslationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    specificationId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
};
export type SpecificationTranslationAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    specificationId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
};
export type SpecificationTranslationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    specificationId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
};
export type SpecificationTranslationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    specificationId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
};
export type SpecificationTranslationSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    specificationId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
};
export type SpecificationTranslationCreateNestedManyWithoutLanguageInput = {
    create?: Prisma.XOR<Prisma.SpecificationTranslationCreateWithoutLanguageInput, Prisma.SpecificationTranslationUncheckedCreateWithoutLanguageInput> | Prisma.SpecificationTranslationCreateWithoutLanguageInput[] | Prisma.SpecificationTranslationUncheckedCreateWithoutLanguageInput[];
    connectOrCreate?: Prisma.SpecificationTranslationCreateOrConnectWithoutLanguageInput | Prisma.SpecificationTranslationCreateOrConnectWithoutLanguageInput[];
    createMany?: Prisma.SpecificationTranslationCreateManyLanguageInputEnvelope;
    connect?: Prisma.SpecificationTranslationWhereUniqueInput | Prisma.SpecificationTranslationWhereUniqueInput[];
};
export type SpecificationTranslationUncheckedCreateNestedManyWithoutLanguageInput = {
    create?: Prisma.XOR<Prisma.SpecificationTranslationCreateWithoutLanguageInput, Prisma.SpecificationTranslationUncheckedCreateWithoutLanguageInput> | Prisma.SpecificationTranslationCreateWithoutLanguageInput[] | Prisma.SpecificationTranslationUncheckedCreateWithoutLanguageInput[];
    connectOrCreate?: Prisma.SpecificationTranslationCreateOrConnectWithoutLanguageInput | Prisma.SpecificationTranslationCreateOrConnectWithoutLanguageInput[];
    createMany?: Prisma.SpecificationTranslationCreateManyLanguageInputEnvelope;
    connect?: Prisma.SpecificationTranslationWhereUniqueInput | Prisma.SpecificationTranslationWhereUniqueInput[];
};
export type SpecificationTranslationUpdateManyWithoutLanguageNestedInput = {
    create?: Prisma.XOR<Prisma.SpecificationTranslationCreateWithoutLanguageInput, Prisma.SpecificationTranslationUncheckedCreateWithoutLanguageInput> | Prisma.SpecificationTranslationCreateWithoutLanguageInput[] | Prisma.SpecificationTranslationUncheckedCreateWithoutLanguageInput[];
    connectOrCreate?: Prisma.SpecificationTranslationCreateOrConnectWithoutLanguageInput | Prisma.SpecificationTranslationCreateOrConnectWithoutLanguageInput[];
    upsert?: Prisma.SpecificationTranslationUpsertWithWhereUniqueWithoutLanguageInput | Prisma.SpecificationTranslationUpsertWithWhereUniqueWithoutLanguageInput[];
    createMany?: Prisma.SpecificationTranslationCreateManyLanguageInputEnvelope;
    set?: Prisma.SpecificationTranslationWhereUniqueInput | Prisma.SpecificationTranslationWhereUniqueInput[];
    disconnect?: Prisma.SpecificationTranslationWhereUniqueInput | Prisma.SpecificationTranslationWhereUniqueInput[];
    delete?: Prisma.SpecificationTranslationWhereUniqueInput | Prisma.SpecificationTranslationWhereUniqueInput[];
    connect?: Prisma.SpecificationTranslationWhereUniqueInput | Prisma.SpecificationTranslationWhereUniqueInput[];
    update?: Prisma.SpecificationTranslationUpdateWithWhereUniqueWithoutLanguageInput | Prisma.SpecificationTranslationUpdateWithWhereUniqueWithoutLanguageInput[];
    updateMany?: Prisma.SpecificationTranslationUpdateManyWithWhereWithoutLanguageInput | Prisma.SpecificationTranslationUpdateManyWithWhereWithoutLanguageInput[];
    deleteMany?: Prisma.SpecificationTranslationScalarWhereInput | Prisma.SpecificationTranslationScalarWhereInput[];
};
export type SpecificationTranslationUncheckedUpdateManyWithoutLanguageNestedInput = {
    create?: Prisma.XOR<Prisma.SpecificationTranslationCreateWithoutLanguageInput, Prisma.SpecificationTranslationUncheckedCreateWithoutLanguageInput> | Prisma.SpecificationTranslationCreateWithoutLanguageInput[] | Prisma.SpecificationTranslationUncheckedCreateWithoutLanguageInput[];
    connectOrCreate?: Prisma.SpecificationTranslationCreateOrConnectWithoutLanguageInput | Prisma.SpecificationTranslationCreateOrConnectWithoutLanguageInput[];
    upsert?: Prisma.SpecificationTranslationUpsertWithWhereUniqueWithoutLanguageInput | Prisma.SpecificationTranslationUpsertWithWhereUniqueWithoutLanguageInput[];
    createMany?: Prisma.SpecificationTranslationCreateManyLanguageInputEnvelope;
    set?: Prisma.SpecificationTranslationWhereUniqueInput | Prisma.SpecificationTranslationWhereUniqueInput[];
    disconnect?: Prisma.SpecificationTranslationWhereUniqueInput | Prisma.SpecificationTranslationWhereUniqueInput[];
    delete?: Prisma.SpecificationTranslationWhereUniqueInput | Prisma.SpecificationTranslationWhereUniqueInput[];
    connect?: Prisma.SpecificationTranslationWhereUniqueInput | Prisma.SpecificationTranslationWhereUniqueInput[];
    update?: Prisma.SpecificationTranslationUpdateWithWhereUniqueWithoutLanguageInput | Prisma.SpecificationTranslationUpdateWithWhereUniqueWithoutLanguageInput[];
    updateMany?: Prisma.SpecificationTranslationUpdateManyWithWhereWithoutLanguageInput | Prisma.SpecificationTranslationUpdateManyWithWhereWithoutLanguageInput[];
    deleteMany?: Prisma.SpecificationTranslationScalarWhereInput | Prisma.SpecificationTranslationScalarWhereInput[];
};
export type SpecificationTranslationCreateNestedManyWithoutSpecificationInput = {
    create?: Prisma.XOR<Prisma.SpecificationTranslationCreateWithoutSpecificationInput, Prisma.SpecificationTranslationUncheckedCreateWithoutSpecificationInput> | Prisma.SpecificationTranslationCreateWithoutSpecificationInput[] | Prisma.SpecificationTranslationUncheckedCreateWithoutSpecificationInput[];
    connectOrCreate?: Prisma.SpecificationTranslationCreateOrConnectWithoutSpecificationInput | Prisma.SpecificationTranslationCreateOrConnectWithoutSpecificationInput[];
    createMany?: Prisma.SpecificationTranslationCreateManySpecificationInputEnvelope;
    connect?: Prisma.SpecificationTranslationWhereUniqueInput | Prisma.SpecificationTranslationWhereUniqueInput[];
};
export type SpecificationTranslationUncheckedCreateNestedManyWithoutSpecificationInput = {
    create?: Prisma.XOR<Prisma.SpecificationTranslationCreateWithoutSpecificationInput, Prisma.SpecificationTranslationUncheckedCreateWithoutSpecificationInput> | Prisma.SpecificationTranslationCreateWithoutSpecificationInput[] | Prisma.SpecificationTranslationUncheckedCreateWithoutSpecificationInput[];
    connectOrCreate?: Prisma.SpecificationTranslationCreateOrConnectWithoutSpecificationInput | Prisma.SpecificationTranslationCreateOrConnectWithoutSpecificationInput[];
    createMany?: Prisma.SpecificationTranslationCreateManySpecificationInputEnvelope;
    connect?: Prisma.SpecificationTranslationWhereUniqueInput | Prisma.SpecificationTranslationWhereUniqueInput[];
};
export type SpecificationTranslationUpdateManyWithoutSpecificationNestedInput = {
    create?: Prisma.XOR<Prisma.SpecificationTranslationCreateWithoutSpecificationInput, Prisma.SpecificationTranslationUncheckedCreateWithoutSpecificationInput> | Prisma.SpecificationTranslationCreateWithoutSpecificationInput[] | Prisma.SpecificationTranslationUncheckedCreateWithoutSpecificationInput[];
    connectOrCreate?: Prisma.SpecificationTranslationCreateOrConnectWithoutSpecificationInput | Prisma.SpecificationTranslationCreateOrConnectWithoutSpecificationInput[];
    upsert?: Prisma.SpecificationTranslationUpsertWithWhereUniqueWithoutSpecificationInput | Prisma.SpecificationTranslationUpsertWithWhereUniqueWithoutSpecificationInput[];
    createMany?: Prisma.SpecificationTranslationCreateManySpecificationInputEnvelope;
    set?: Prisma.SpecificationTranslationWhereUniqueInput | Prisma.SpecificationTranslationWhereUniqueInput[];
    disconnect?: Prisma.SpecificationTranslationWhereUniqueInput | Prisma.SpecificationTranslationWhereUniqueInput[];
    delete?: Prisma.SpecificationTranslationWhereUniqueInput | Prisma.SpecificationTranslationWhereUniqueInput[];
    connect?: Prisma.SpecificationTranslationWhereUniqueInput | Prisma.SpecificationTranslationWhereUniqueInput[];
    update?: Prisma.SpecificationTranslationUpdateWithWhereUniqueWithoutSpecificationInput | Prisma.SpecificationTranslationUpdateWithWhereUniqueWithoutSpecificationInput[];
    updateMany?: Prisma.SpecificationTranslationUpdateManyWithWhereWithoutSpecificationInput | Prisma.SpecificationTranslationUpdateManyWithWhereWithoutSpecificationInput[];
    deleteMany?: Prisma.SpecificationTranslationScalarWhereInput | Prisma.SpecificationTranslationScalarWhereInput[];
};
export type SpecificationTranslationUncheckedUpdateManyWithoutSpecificationNestedInput = {
    create?: Prisma.XOR<Prisma.SpecificationTranslationCreateWithoutSpecificationInput, Prisma.SpecificationTranslationUncheckedCreateWithoutSpecificationInput> | Prisma.SpecificationTranslationCreateWithoutSpecificationInput[] | Prisma.SpecificationTranslationUncheckedCreateWithoutSpecificationInput[];
    connectOrCreate?: Prisma.SpecificationTranslationCreateOrConnectWithoutSpecificationInput | Prisma.SpecificationTranslationCreateOrConnectWithoutSpecificationInput[];
    upsert?: Prisma.SpecificationTranslationUpsertWithWhereUniqueWithoutSpecificationInput | Prisma.SpecificationTranslationUpsertWithWhereUniqueWithoutSpecificationInput[];
    createMany?: Prisma.SpecificationTranslationCreateManySpecificationInputEnvelope;
    set?: Prisma.SpecificationTranslationWhereUniqueInput | Prisma.SpecificationTranslationWhereUniqueInput[];
    disconnect?: Prisma.SpecificationTranslationWhereUniqueInput | Prisma.SpecificationTranslationWhereUniqueInput[];
    delete?: Prisma.SpecificationTranslationWhereUniqueInput | Prisma.SpecificationTranslationWhereUniqueInput[];
    connect?: Prisma.SpecificationTranslationWhereUniqueInput | Prisma.SpecificationTranslationWhereUniqueInput[];
    update?: Prisma.SpecificationTranslationUpdateWithWhereUniqueWithoutSpecificationInput | Prisma.SpecificationTranslationUpdateWithWhereUniqueWithoutSpecificationInput[];
    updateMany?: Prisma.SpecificationTranslationUpdateManyWithWhereWithoutSpecificationInput | Prisma.SpecificationTranslationUpdateManyWithWhereWithoutSpecificationInput[];
    deleteMany?: Prisma.SpecificationTranslationScalarWhereInput | Prisma.SpecificationTranslationScalarWhereInput[];
};
export type SpecificationTranslationCreateWithoutLanguageInput = {
    value: string;
    specification: Prisma.SpecificationCreateNestedOneWithoutTranslationsInput;
};
export type SpecificationTranslationUncheckedCreateWithoutLanguageInput = {
    id?: number;
    specificationId: number;
    value: string;
};
export type SpecificationTranslationCreateOrConnectWithoutLanguageInput = {
    where: Prisma.SpecificationTranslationWhereUniqueInput;
    create: Prisma.XOR<Prisma.SpecificationTranslationCreateWithoutLanguageInput, Prisma.SpecificationTranslationUncheckedCreateWithoutLanguageInput>;
};
export type SpecificationTranslationCreateManyLanguageInputEnvelope = {
    data: Prisma.SpecificationTranslationCreateManyLanguageInput | Prisma.SpecificationTranslationCreateManyLanguageInput[];
    skipDuplicates?: boolean;
};
export type SpecificationTranslationUpsertWithWhereUniqueWithoutLanguageInput = {
    where: Prisma.SpecificationTranslationWhereUniqueInput;
    update: Prisma.XOR<Prisma.SpecificationTranslationUpdateWithoutLanguageInput, Prisma.SpecificationTranslationUncheckedUpdateWithoutLanguageInput>;
    create: Prisma.XOR<Prisma.SpecificationTranslationCreateWithoutLanguageInput, Prisma.SpecificationTranslationUncheckedCreateWithoutLanguageInput>;
};
export type SpecificationTranslationUpdateWithWhereUniqueWithoutLanguageInput = {
    where: Prisma.SpecificationTranslationWhereUniqueInput;
    data: Prisma.XOR<Prisma.SpecificationTranslationUpdateWithoutLanguageInput, Prisma.SpecificationTranslationUncheckedUpdateWithoutLanguageInput>;
};
export type SpecificationTranslationUpdateManyWithWhereWithoutLanguageInput = {
    where: Prisma.SpecificationTranslationScalarWhereInput;
    data: Prisma.XOR<Prisma.SpecificationTranslationUpdateManyMutationInput, Prisma.SpecificationTranslationUncheckedUpdateManyWithoutLanguageInput>;
};
export type SpecificationTranslationScalarWhereInput = {
    AND?: Prisma.SpecificationTranslationScalarWhereInput | Prisma.SpecificationTranslationScalarWhereInput[];
    OR?: Prisma.SpecificationTranslationScalarWhereInput[];
    NOT?: Prisma.SpecificationTranslationScalarWhereInput | Prisma.SpecificationTranslationScalarWhereInput[];
    id?: Prisma.IntFilter<"SpecificationTranslation"> | number;
    specificationId?: Prisma.IntFilter<"SpecificationTranslation"> | number;
    languageId?: Prisma.IntFilter<"SpecificationTranslation"> | number;
    value?: Prisma.StringFilter<"SpecificationTranslation"> | string;
};
export type SpecificationTranslationCreateWithoutSpecificationInput = {
    value: string;
    language: Prisma.LanguageCreateNestedOneWithoutSpecificationTranslationsInput;
};
export type SpecificationTranslationUncheckedCreateWithoutSpecificationInput = {
    id?: number;
    languageId: number;
    value: string;
};
export type SpecificationTranslationCreateOrConnectWithoutSpecificationInput = {
    where: Prisma.SpecificationTranslationWhereUniqueInput;
    create: Prisma.XOR<Prisma.SpecificationTranslationCreateWithoutSpecificationInput, Prisma.SpecificationTranslationUncheckedCreateWithoutSpecificationInput>;
};
export type SpecificationTranslationCreateManySpecificationInputEnvelope = {
    data: Prisma.SpecificationTranslationCreateManySpecificationInput | Prisma.SpecificationTranslationCreateManySpecificationInput[];
    skipDuplicates?: boolean;
};
export type SpecificationTranslationUpsertWithWhereUniqueWithoutSpecificationInput = {
    where: Prisma.SpecificationTranslationWhereUniqueInput;
    update: Prisma.XOR<Prisma.SpecificationTranslationUpdateWithoutSpecificationInput, Prisma.SpecificationTranslationUncheckedUpdateWithoutSpecificationInput>;
    create: Prisma.XOR<Prisma.SpecificationTranslationCreateWithoutSpecificationInput, Prisma.SpecificationTranslationUncheckedCreateWithoutSpecificationInput>;
};
export type SpecificationTranslationUpdateWithWhereUniqueWithoutSpecificationInput = {
    where: Prisma.SpecificationTranslationWhereUniqueInput;
    data: Prisma.XOR<Prisma.SpecificationTranslationUpdateWithoutSpecificationInput, Prisma.SpecificationTranslationUncheckedUpdateWithoutSpecificationInput>;
};
export type SpecificationTranslationUpdateManyWithWhereWithoutSpecificationInput = {
    where: Prisma.SpecificationTranslationScalarWhereInput;
    data: Prisma.XOR<Prisma.SpecificationTranslationUpdateManyMutationInput, Prisma.SpecificationTranslationUncheckedUpdateManyWithoutSpecificationInput>;
};
export type SpecificationTranslationCreateManyLanguageInput = {
    id?: number;
    specificationId: number;
    value: string;
};
export type SpecificationTranslationUpdateWithoutLanguageInput = {
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    specification?: Prisma.SpecificationUpdateOneRequiredWithoutTranslationsNestedInput;
};
export type SpecificationTranslationUncheckedUpdateWithoutLanguageInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    specificationId?: Prisma.IntFieldUpdateOperationsInput | number;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SpecificationTranslationUncheckedUpdateManyWithoutLanguageInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    specificationId?: Prisma.IntFieldUpdateOperationsInput | number;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SpecificationTranslationCreateManySpecificationInput = {
    id?: number;
    languageId: number;
    value: string;
};
export type SpecificationTranslationUpdateWithoutSpecificationInput = {
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    language?: Prisma.LanguageUpdateOneRequiredWithoutSpecificationTranslationsNestedInput;
};
export type SpecificationTranslationUncheckedUpdateWithoutSpecificationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    languageId?: Prisma.IntFieldUpdateOperationsInput | number;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SpecificationTranslationUncheckedUpdateManyWithoutSpecificationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    languageId?: Prisma.IntFieldUpdateOperationsInput | number;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SpecificationTranslationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    specificationId?: boolean;
    languageId?: boolean;
    value?: boolean;
    specification?: boolean | Prisma.SpecificationDefaultArgs<ExtArgs>;
    language?: boolean | Prisma.LanguageDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["specificationTranslation"]>;
export type SpecificationTranslationSelectScalar = {
    id?: boolean;
    specificationId?: boolean;
    languageId?: boolean;
    value?: boolean;
};
export type SpecificationTranslationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "specificationId" | "languageId" | "value", ExtArgs["result"]["specificationTranslation"]>;
export type SpecificationTranslationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    specification?: boolean | Prisma.SpecificationDefaultArgs<ExtArgs>;
    language?: boolean | Prisma.LanguageDefaultArgs<ExtArgs>;
};
export type $SpecificationTranslationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SpecificationTranslation";
    objects: {
        specification: Prisma.$SpecificationPayload<ExtArgs>;
        language: Prisma.$LanguagePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        specificationId: number;
        languageId: number;
        value: string;
    }, ExtArgs["result"]["specificationTranslation"]>;
    composites: {};
};
export type SpecificationTranslationGetPayload<S extends boolean | null | undefined | SpecificationTranslationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SpecificationTranslationPayload, S>;
export type SpecificationTranslationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SpecificationTranslationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SpecificationTranslationCountAggregateInputType | true;
};
export interface SpecificationTranslationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SpecificationTranslation'];
        meta: {
            name: 'SpecificationTranslation';
        };
    };
    findUnique<T extends SpecificationTranslationFindUniqueArgs>(args: Prisma.SelectSubset<T, SpecificationTranslationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SpecificationTranslationClient<runtime.Types.Result.GetResult<Prisma.$SpecificationTranslationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SpecificationTranslationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SpecificationTranslationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SpecificationTranslationClient<runtime.Types.Result.GetResult<Prisma.$SpecificationTranslationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SpecificationTranslationFindFirstArgs>(args?: Prisma.SelectSubset<T, SpecificationTranslationFindFirstArgs<ExtArgs>>): Prisma.Prisma__SpecificationTranslationClient<runtime.Types.Result.GetResult<Prisma.$SpecificationTranslationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SpecificationTranslationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SpecificationTranslationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SpecificationTranslationClient<runtime.Types.Result.GetResult<Prisma.$SpecificationTranslationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SpecificationTranslationFindManyArgs>(args?: Prisma.SelectSubset<T, SpecificationTranslationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SpecificationTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SpecificationTranslationCreateArgs>(args: Prisma.SelectSubset<T, SpecificationTranslationCreateArgs<ExtArgs>>): Prisma.Prisma__SpecificationTranslationClient<runtime.Types.Result.GetResult<Prisma.$SpecificationTranslationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SpecificationTranslationCreateManyArgs>(args?: Prisma.SelectSubset<T, SpecificationTranslationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends SpecificationTranslationDeleteArgs>(args: Prisma.SelectSubset<T, SpecificationTranslationDeleteArgs<ExtArgs>>): Prisma.Prisma__SpecificationTranslationClient<runtime.Types.Result.GetResult<Prisma.$SpecificationTranslationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SpecificationTranslationUpdateArgs>(args: Prisma.SelectSubset<T, SpecificationTranslationUpdateArgs<ExtArgs>>): Prisma.Prisma__SpecificationTranslationClient<runtime.Types.Result.GetResult<Prisma.$SpecificationTranslationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SpecificationTranslationDeleteManyArgs>(args?: Prisma.SelectSubset<T, SpecificationTranslationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SpecificationTranslationUpdateManyArgs>(args: Prisma.SelectSubset<T, SpecificationTranslationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends SpecificationTranslationUpsertArgs>(args: Prisma.SelectSubset<T, SpecificationTranslationUpsertArgs<ExtArgs>>): Prisma.Prisma__SpecificationTranslationClient<runtime.Types.Result.GetResult<Prisma.$SpecificationTranslationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SpecificationTranslationCountArgs>(args?: Prisma.Subset<T, SpecificationTranslationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SpecificationTranslationCountAggregateOutputType> : number>;
    aggregate<T extends SpecificationTranslationAggregateArgs>(args: Prisma.Subset<T, SpecificationTranslationAggregateArgs>): Prisma.PrismaPromise<GetSpecificationTranslationAggregateType<T>>;
    groupBy<T extends SpecificationTranslationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SpecificationTranslationGroupByArgs['orderBy'];
    } : {
        orderBy?: SpecificationTranslationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SpecificationTranslationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecificationTranslationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SpecificationTranslationFieldRefs;
}
export interface Prisma__SpecificationTranslationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    specification<T extends Prisma.SpecificationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SpecificationDefaultArgs<ExtArgs>>): Prisma.Prisma__SpecificationClient<runtime.Types.Result.GetResult<Prisma.$SpecificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    language<T extends Prisma.LanguageDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LanguageDefaultArgs<ExtArgs>>): Prisma.Prisma__LanguageClient<runtime.Types.Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SpecificationTranslationFieldRefs {
    readonly id: Prisma.FieldRef<"SpecificationTranslation", 'Int'>;
    readonly specificationId: Prisma.FieldRef<"SpecificationTranslation", 'Int'>;
    readonly languageId: Prisma.FieldRef<"SpecificationTranslation", 'Int'>;
    readonly value: Prisma.FieldRef<"SpecificationTranslation", 'String'>;
}
export type SpecificationTranslationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpecificationTranslationSelect<ExtArgs> | null;
    omit?: Prisma.SpecificationTranslationOmit<ExtArgs> | null;
    include?: Prisma.SpecificationTranslationInclude<ExtArgs> | null;
    where: Prisma.SpecificationTranslationWhereUniqueInput;
};
export type SpecificationTranslationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpecificationTranslationSelect<ExtArgs> | null;
    omit?: Prisma.SpecificationTranslationOmit<ExtArgs> | null;
    include?: Prisma.SpecificationTranslationInclude<ExtArgs> | null;
    where: Prisma.SpecificationTranslationWhereUniqueInput;
};
export type SpecificationTranslationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SpecificationTranslationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SpecificationTranslationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SpecificationTranslationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpecificationTranslationSelect<ExtArgs> | null;
    omit?: Prisma.SpecificationTranslationOmit<ExtArgs> | null;
    include?: Prisma.SpecificationTranslationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SpecificationTranslationCreateInput, Prisma.SpecificationTranslationUncheckedCreateInput>;
};
export type SpecificationTranslationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SpecificationTranslationCreateManyInput | Prisma.SpecificationTranslationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SpecificationTranslationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpecificationTranslationSelect<ExtArgs> | null;
    omit?: Prisma.SpecificationTranslationOmit<ExtArgs> | null;
    include?: Prisma.SpecificationTranslationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SpecificationTranslationUpdateInput, Prisma.SpecificationTranslationUncheckedUpdateInput>;
    where: Prisma.SpecificationTranslationWhereUniqueInput;
};
export type SpecificationTranslationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SpecificationTranslationUpdateManyMutationInput, Prisma.SpecificationTranslationUncheckedUpdateManyInput>;
    where?: Prisma.SpecificationTranslationWhereInput;
    limit?: number;
};
export type SpecificationTranslationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpecificationTranslationSelect<ExtArgs> | null;
    omit?: Prisma.SpecificationTranslationOmit<ExtArgs> | null;
    include?: Prisma.SpecificationTranslationInclude<ExtArgs> | null;
    where: Prisma.SpecificationTranslationWhereUniqueInput;
    create: Prisma.XOR<Prisma.SpecificationTranslationCreateInput, Prisma.SpecificationTranslationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SpecificationTranslationUpdateInput, Prisma.SpecificationTranslationUncheckedUpdateInput>;
};
export type SpecificationTranslationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpecificationTranslationSelect<ExtArgs> | null;
    omit?: Prisma.SpecificationTranslationOmit<ExtArgs> | null;
    include?: Prisma.SpecificationTranslationInclude<ExtArgs> | null;
    where: Prisma.SpecificationTranslationWhereUniqueInput;
};
export type SpecificationTranslationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SpecificationTranslationWhereInput;
    limit?: number;
};
export type SpecificationTranslationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SpecificationTranslationSelect<ExtArgs> | null;
    omit?: Prisma.SpecificationTranslationOmit<ExtArgs> | null;
    include?: Prisma.SpecificationTranslationInclude<ExtArgs> | null;
};
export {};
