import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type CategoryTranslationModel = runtime.Types.Result.DefaultSelection<Prisma.$CategoryTranslationPayload>;
export type AggregateCategoryTranslation = {
    _count: CategoryTranslationCountAggregateOutputType | null;
    _avg: CategoryTranslationAvgAggregateOutputType | null;
    _sum: CategoryTranslationSumAggregateOutputType | null;
    _min: CategoryTranslationMinAggregateOutputType | null;
    _max: CategoryTranslationMaxAggregateOutputType | null;
};
export type CategoryTranslationAvgAggregateOutputType = {
    id: number | null;
    categoryId: number | null;
    languageId: number | null;
};
export type CategoryTranslationSumAggregateOutputType = {
    id: number | null;
    categoryId: number | null;
    languageId: number | null;
};
export type CategoryTranslationMinAggregateOutputType = {
    id: number | null;
    categoryId: number | null;
    languageId: number | null;
    name: string | null;
    description: string | null;
};
export type CategoryTranslationMaxAggregateOutputType = {
    id: number | null;
    categoryId: number | null;
    languageId: number | null;
    name: string | null;
    description: string | null;
};
export type CategoryTranslationCountAggregateOutputType = {
    id: number;
    categoryId: number;
    languageId: number;
    name: number;
    description: number;
    _all: number;
};
export type CategoryTranslationAvgAggregateInputType = {
    id?: true;
    categoryId?: true;
    languageId?: true;
};
export type CategoryTranslationSumAggregateInputType = {
    id?: true;
    categoryId?: true;
    languageId?: true;
};
export type CategoryTranslationMinAggregateInputType = {
    id?: true;
    categoryId?: true;
    languageId?: true;
    name?: true;
    description?: true;
};
export type CategoryTranslationMaxAggregateInputType = {
    id?: true;
    categoryId?: true;
    languageId?: true;
    name?: true;
    description?: true;
};
export type CategoryTranslationCountAggregateInputType = {
    id?: true;
    categoryId?: true;
    languageId?: true;
    name?: true;
    description?: true;
    _all?: true;
};
export type CategoryTranslationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CategoryTranslationWhereInput;
    orderBy?: Prisma.CategoryTranslationOrderByWithRelationInput | Prisma.CategoryTranslationOrderByWithRelationInput[];
    cursor?: Prisma.CategoryTranslationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CategoryTranslationCountAggregateInputType;
    _avg?: CategoryTranslationAvgAggregateInputType;
    _sum?: CategoryTranslationSumAggregateInputType;
    _min?: CategoryTranslationMinAggregateInputType;
    _max?: CategoryTranslationMaxAggregateInputType;
};
export type GetCategoryTranslationAggregateType<T extends CategoryTranslationAggregateArgs> = {
    [P in keyof T & keyof AggregateCategoryTranslation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCategoryTranslation[P]> : Prisma.GetScalarType<T[P], AggregateCategoryTranslation[P]>;
};
export type CategoryTranslationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CategoryTranslationWhereInput;
    orderBy?: Prisma.CategoryTranslationOrderByWithAggregationInput | Prisma.CategoryTranslationOrderByWithAggregationInput[];
    by: Prisma.CategoryTranslationScalarFieldEnum[] | Prisma.CategoryTranslationScalarFieldEnum;
    having?: Prisma.CategoryTranslationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoryTranslationCountAggregateInputType | true;
    _avg?: CategoryTranslationAvgAggregateInputType;
    _sum?: CategoryTranslationSumAggregateInputType;
    _min?: CategoryTranslationMinAggregateInputType;
    _max?: CategoryTranslationMaxAggregateInputType;
};
export type CategoryTranslationGroupByOutputType = {
    id: number;
    categoryId: number;
    languageId: number;
    name: string;
    description: string | null;
    _count: CategoryTranslationCountAggregateOutputType | null;
    _avg: CategoryTranslationAvgAggregateOutputType | null;
    _sum: CategoryTranslationSumAggregateOutputType | null;
    _min: CategoryTranslationMinAggregateOutputType | null;
    _max: CategoryTranslationMaxAggregateOutputType | null;
};
type GetCategoryTranslationGroupByPayload<T extends CategoryTranslationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CategoryTranslationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CategoryTranslationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CategoryTranslationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CategoryTranslationGroupByOutputType[P]>;
}>>;
export type CategoryTranslationWhereInput = {
    AND?: Prisma.CategoryTranslationWhereInput | Prisma.CategoryTranslationWhereInput[];
    OR?: Prisma.CategoryTranslationWhereInput[];
    NOT?: Prisma.CategoryTranslationWhereInput | Prisma.CategoryTranslationWhereInput[];
    id?: Prisma.IntFilter<"CategoryTranslation"> | number;
    categoryId?: Prisma.IntFilter<"CategoryTranslation"> | number;
    languageId?: Prisma.IntFilter<"CategoryTranslation"> | number;
    name?: Prisma.StringFilter<"CategoryTranslation"> | string;
    description?: Prisma.StringNullableFilter<"CategoryTranslation"> | string | null;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.CategoryWhereInput>;
    language?: Prisma.XOR<Prisma.LanguageScalarRelationFilter, Prisma.LanguageWhereInput>;
};
export type CategoryTranslationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.CategoryOrderByWithRelationInput;
    language?: Prisma.LanguageOrderByWithRelationInput;
    _relevance?: Prisma.CategoryTranslationOrderByRelevanceInput;
};
export type CategoryTranslationWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    categoryId_languageId?: Prisma.CategoryTranslationCategoryIdLanguageIdCompoundUniqueInput;
    AND?: Prisma.CategoryTranslationWhereInput | Prisma.CategoryTranslationWhereInput[];
    OR?: Prisma.CategoryTranslationWhereInput[];
    NOT?: Prisma.CategoryTranslationWhereInput | Prisma.CategoryTranslationWhereInput[];
    categoryId?: Prisma.IntFilter<"CategoryTranslation"> | number;
    languageId?: Prisma.IntFilter<"CategoryTranslation"> | number;
    name?: Prisma.StringFilter<"CategoryTranslation"> | string;
    description?: Prisma.StringNullableFilter<"CategoryTranslation"> | string | null;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.CategoryWhereInput>;
    language?: Prisma.XOR<Prisma.LanguageScalarRelationFilter, Prisma.LanguageWhereInput>;
}, "id" | "categoryId_languageId">;
export type CategoryTranslationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.CategoryTranslationCountOrderByAggregateInput;
    _avg?: Prisma.CategoryTranslationAvgOrderByAggregateInput;
    _max?: Prisma.CategoryTranslationMaxOrderByAggregateInput;
    _min?: Prisma.CategoryTranslationMinOrderByAggregateInput;
    _sum?: Prisma.CategoryTranslationSumOrderByAggregateInput;
};
export type CategoryTranslationScalarWhereWithAggregatesInput = {
    AND?: Prisma.CategoryTranslationScalarWhereWithAggregatesInput | Prisma.CategoryTranslationScalarWhereWithAggregatesInput[];
    OR?: Prisma.CategoryTranslationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CategoryTranslationScalarWhereWithAggregatesInput | Prisma.CategoryTranslationScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"CategoryTranslation"> | number;
    categoryId?: Prisma.IntWithAggregatesFilter<"CategoryTranslation"> | number;
    languageId?: Prisma.IntWithAggregatesFilter<"CategoryTranslation"> | number;
    name?: Prisma.StringWithAggregatesFilter<"CategoryTranslation"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"CategoryTranslation"> | string | null;
};
export type CategoryTranslationCreateInput = {
    name: string;
    description?: string | null;
    category: Prisma.CategoryCreateNestedOneWithoutTranslationsInput;
    language: Prisma.LanguageCreateNestedOneWithoutCategoryTranslationsInput;
};
export type CategoryTranslationUncheckedCreateInput = {
    id?: number;
    categoryId: number;
    languageId: number;
    name: string;
    description?: string | null;
};
export type CategoryTranslationUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.CategoryUpdateOneRequiredWithoutTranslationsNestedInput;
    language?: Prisma.LanguageUpdateOneRequiredWithoutCategoryTranslationsNestedInput;
};
export type CategoryTranslationUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    languageId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CategoryTranslationCreateManyInput = {
    id?: number;
    categoryId: number;
    languageId: number;
    name: string;
    description?: string | null;
};
export type CategoryTranslationUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CategoryTranslationUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    languageId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CategoryTranslationListRelationFilter = {
    every?: Prisma.CategoryTranslationWhereInput;
    some?: Prisma.CategoryTranslationWhereInput;
    none?: Prisma.CategoryTranslationWhereInput;
};
export type CategoryTranslationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CategoryTranslationOrderByRelevanceInput = {
    fields: Prisma.CategoryTranslationOrderByRelevanceFieldEnum | Prisma.CategoryTranslationOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type CategoryTranslationCategoryIdLanguageIdCompoundUniqueInput = {
    categoryId: number;
    languageId: number;
};
export type CategoryTranslationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type CategoryTranslationAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
};
export type CategoryTranslationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type CategoryTranslationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type CategoryTranslationSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
};
export type CategoryTranslationCreateNestedManyWithoutLanguageInput = {
    create?: Prisma.XOR<Prisma.CategoryTranslationCreateWithoutLanguageInput, Prisma.CategoryTranslationUncheckedCreateWithoutLanguageInput> | Prisma.CategoryTranslationCreateWithoutLanguageInput[] | Prisma.CategoryTranslationUncheckedCreateWithoutLanguageInput[];
    connectOrCreate?: Prisma.CategoryTranslationCreateOrConnectWithoutLanguageInput | Prisma.CategoryTranslationCreateOrConnectWithoutLanguageInput[];
    createMany?: Prisma.CategoryTranslationCreateManyLanguageInputEnvelope;
    connect?: Prisma.CategoryTranslationWhereUniqueInput | Prisma.CategoryTranslationWhereUniqueInput[];
};
export type CategoryTranslationUncheckedCreateNestedManyWithoutLanguageInput = {
    create?: Prisma.XOR<Prisma.CategoryTranslationCreateWithoutLanguageInput, Prisma.CategoryTranslationUncheckedCreateWithoutLanguageInput> | Prisma.CategoryTranslationCreateWithoutLanguageInput[] | Prisma.CategoryTranslationUncheckedCreateWithoutLanguageInput[];
    connectOrCreate?: Prisma.CategoryTranslationCreateOrConnectWithoutLanguageInput | Prisma.CategoryTranslationCreateOrConnectWithoutLanguageInput[];
    createMany?: Prisma.CategoryTranslationCreateManyLanguageInputEnvelope;
    connect?: Prisma.CategoryTranslationWhereUniqueInput | Prisma.CategoryTranslationWhereUniqueInput[];
};
export type CategoryTranslationUpdateManyWithoutLanguageNestedInput = {
    create?: Prisma.XOR<Prisma.CategoryTranslationCreateWithoutLanguageInput, Prisma.CategoryTranslationUncheckedCreateWithoutLanguageInput> | Prisma.CategoryTranslationCreateWithoutLanguageInput[] | Prisma.CategoryTranslationUncheckedCreateWithoutLanguageInput[];
    connectOrCreate?: Prisma.CategoryTranslationCreateOrConnectWithoutLanguageInput | Prisma.CategoryTranslationCreateOrConnectWithoutLanguageInput[];
    upsert?: Prisma.CategoryTranslationUpsertWithWhereUniqueWithoutLanguageInput | Prisma.CategoryTranslationUpsertWithWhereUniqueWithoutLanguageInput[];
    createMany?: Prisma.CategoryTranslationCreateManyLanguageInputEnvelope;
    set?: Prisma.CategoryTranslationWhereUniqueInput | Prisma.CategoryTranslationWhereUniqueInput[];
    disconnect?: Prisma.CategoryTranslationWhereUniqueInput | Prisma.CategoryTranslationWhereUniqueInput[];
    delete?: Prisma.CategoryTranslationWhereUniqueInput | Prisma.CategoryTranslationWhereUniqueInput[];
    connect?: Prisma.CategoryTranslationWhereUniqueInput | Prisma.CategoryTranslationWhereUniqueInput[];
    update?: Prisma.CategoryTranslationUpdateWithWhereUniqueWithoutLanguageInput | Prisma.CategoryTranslationUpdateWithWhereUniqueWithoutLanguageInput[];
    updateMany?: Prisma.CategoryTranslationUpdateManyWithWhereWithoutLanguageInput | Prisma.CategoryTranslationUpdateManyWithWhereWithoutLanguageInput[];
    deleteMany?: Prisma.CategoryTranslationScalarWhereInput | Prisma.CategoryTranslationScalarWhereInput[];
};
export type CategoryTranslationUncheckedUpdateManyWithoutLanguageNestedInput = {
    create?: Prisma.XOR<Prisma.CategoryTranslationCreateWithoutLanguageInput, Prisma.CategoryTranslationUncheckedCreateWithoutLanguageInput> | Prisma.CategoryTranslationCreateWithoutLanguageInput[] | Prisma.CategoryTranslationUncheckedCreateWithoutLanguageInput[];
    connectOrCreate?: Prisma.CategoryTranslationCreateOrConnectWithoutLanguageInput | Prisma.CategoryTranslationCreateOrConnectWithoutLanguageInput[];
    upsert?: Prisma.CategoryTranslationUpsertWithWhereUniqueWithoutLanguageInput | Prisma.CategoryTranslationUpsertWithWhereUniqueWithoutLanguageInput[];
    createMany?: Prisma.CategoryTranslationCreateManyLanguageInputEnvelope;
    set?: Prisma.CategoryTranslationWhereUniqueInput | Prisma.CategoryTranslationWhereUniqueInput[];
    disconnect?: Prisma.CategoryTranslationWhereUniqueInput | Prisma.CategoryTranslationWhereUniqueInput[];
    delete?: Prisma.CategoryTranslationWhereUniqueInput | Prisma.CategoryTranslationWhereUniqueInput[];
    connect?: Prisma.CategoryTranslationWhereUniqueInput | Prisma.CategoryTranslationWhereUniqueInput[];
    update?: Prisma.CategoryTranslationUpdateWithWhereUniqueWithoutLanguageInput | Prisma.CategoryTranslationUpdateWithWhereUniqueWithoutLanguageInput[];
    updateMany?: Prisma.CategoryTranslationUpdateManyWithWhereWithoutLanguageInput | Prisma.CategoryTranslationUpdateManyWithWhereWithoutLanguageInput[];
    deleteMany?: Prisma.CategoryTranslationScalarWhereInput | Prisma.CategoryTranslationScalarWhereInput[];
};
export type CategoryTranslationCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.CategoryTranslationCreateWithoutCategoryInput, Prisma.CategoryTranslationUncheckedCreateWithoutCategoryInput> | Prisma.CategoryTranslationCreateWithoutCategoryInput[] | Prisma.CategoryTranslationUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.CategoryTranslationCreateOrConnectWithoutCategoryInput | Prisma.CategoryTranslationCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.CategoryTranslationCreateManyCategoryInputEnvelope;
    connect?: Prisma.CategoryTranslationWhereUniqueInput | Prisma.CategoryTranslationWhereUniqueInput[];
};
export type CategoryTranslationUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.CategoryTranslationCreateWithoutCategoryInput, Prisma.CategoryTranslationUncheckedCreateWithoutCategoryInput> | Prisma.CategoryTranslationCreateWithoutCategoryInput[] | Prisma.CategoryTranslationUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.CategoryTranslationCreateOrConnectWithoutCategoryInput | Prisma.CategoryTranslationCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.CategoryTranslationCreateManyCategoryInputEnvelope;
    connect?: Prisma.CategoryTranslationWhereUniqueInput | Prisma.CategoryTranslationWhereUniqueInput[];
};
export type CategoryTranslationUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.CategoryTranslationCreateWithoutCategoryInput, Prisma.CategoryTranslationUncheckedCreateWithoutCategoryInput> | Prisma.CategoryTranslationCreateWithoutCategoryInput[] | Prisma.CategoryTranslationUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.CategoryTranslationCreateOrConnectWithoutCategoryInput | Prisma.CategoryTranslationCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.CategoryTranslationUpsertWithWhereUniqueWithoutCategoryInput | Prisma.CategoryTranslationUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.CategoryTranslationCreateManyCategoryInputEnvelope;
    set?: Prisma.CategoryTranslationWhereUniqueInput | Prisma.CategoryTranslationWhereUniqueInput[];
    disconnect?: Prisma.CategoryTranslationWhereUniqueInput | Prisma.CategoryTranslationWhereUniqueInput[];
    delete?: Prisma.CategoryTranslationWhereUniqueInput | Prisma.CategoryTranslationWhereUniqueInput[];
    connect?: Prisma.CategoryTranslationWhereUniqueInput | Prisma.CategoryTranslationWhereUniqueInput[];
    update?: Prisma.CategoryTranslationUpdateWithWhereUniqueWithoutCategoryInput | Prisma.CategoryTranslationUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.CategoryTranslationUpdateManyWithWhereWithoutCategoryInput | Prisma.CategoryTranslationUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.CategoryTranslationScalarWhereInput | Prisma.CategoryTranslationScalarWhereInput[];
};
export type CategoryTranslationUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.CategoryTranslationCreateWithoutCategoryInput, Prisma.CategoryTranslationUncheckedCreateWithoutCategoryInput> | Prisma.CategoryTranslationCreateWithoutCategoryInput[] | Prisma.CategoryTranslationUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.CategoryTranslationCreateOrConnectWithoutCategoryInput | Prisma.CategoryTranslationCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.CategoryTranslationUpsertWithWhereUniqueWithoutCategoryInput | Prisma.CategoryTranslationUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.CategoryTranslationCreateManyCategoryInputEnvelope;
    set?: Prisma.CategoryTranslationWhereUniqueInput | Prisma.CategoryTranslationWhereUniqueInput[];
    disconnect?: Prisma.CategoryTranslationWhereUniqueInput | Prisma.CategoryTranslationWhereUniqueInput[];
    delete?: Prisma.CategoryTranslationWhereUniqueInput | Prisma.CategoryTranslationWhereUniqueInput[];
    connect?: Prisma.CategoryTranslationWhereUniqueInput | Prisma.CategoryTranslationWhereUniqueInput[];
    update?: Prisma.CategoryTranslationUpdateWithWhereUniqueWithoutCategoryInput | Prisma.CategoryTranslationUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.CategoryTranslationUpdateManyWithWhereWithoutCategoryInput | Prisma.CategoryTranslationUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.CategoryTranslationScalarWhereInput | Prisma.CategoryTranslationScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type CategoryTranslationCreateWithoutLanguageInput = {
    name: string;
    description?: string | null;
    category: Prisma.CategoryCreateNestedOneWithoutTranslationsInput;
};
export type CategoryTranslationUncheckedCreateWithoutLanguageInput = {
    id?: number;
    categoryId: number;
    name: string;
    description?: string | null;
};
export type CategoryTranslationCreateOrConnectWithoutLanguageInput = {
    where: Prisma.CategoryTranslationWhereUniqueInput;
    create: Prisma.XOR<Prisma.CategoryTranslationCreateWithoutLanguageInput, Prisma.CategoryTranslationUncheckedCreateWithoutLanguageInput>;
};
export type CategoryTranslationCreateManyLanguageInputEnvelope = {
    data: Prisma.CategoryTranslationCreateManyLanguageInput | Prisma.CategoryTranslationCreateManyLanguageInput[];
    skipDuplicates?: boolean;
};
export type CategoryTranslationUpsertWithWhereUniqueWithoutLanguageInput = {
    where: Prisma.CategoryTranslationWhereUniqueInput;
    update: Prisma.XOR<Prisma.CategoryTranslationUpdateWithoutLanguageInput, Prisma.CategoryTranslationUncheckedUpdateWithoutLanguageInput>;
    create: Prisma.XOR<Prisma.CategoryTranslationCreateWithoutLanguageInput, Prisma.CategoryTranslationUncheckedCreateWithoutLanguageInput>;
};
export type CategoryTranslationUpdateWithWhereUniqueWithoutLanguageInput = {
    where: Prisma.CategoryTranslationWhereUniqueInput;
    data: Prisma.XOR<Prisma.CategoryTranslationUpdateWithoutLanguageInput, Prisma.CategoryTranslationUncheckedUpdateWithoutLanguageInput>;
};
export type CategoryTranslationUpdateManyWithWhereWithoutLanguageInput = {
    where: Prisma.CategoryTranslationScalarWhereInput;
    data: Prisma.XOR<Prisma.CategoryTranslationUpdateManyMutationInput, Prisma.CategoryTranslationUncheckedUpdateManyWithoutLanguageInput>;
};
export type CategoryTranslationScalarWhereInput = {
    AND?: Prisma.CategoryTranslationScalarWhereInput | Prisma.CategoryTranslationScalarWhereInput[];
    OR?: Prisma.CategoryTranslationScalarWhereInput[];
    NOT?: Prisma.CategoryTranslationScalarWhereInput | Prisma.CategoryTranslationScalarWhereInput[];
    id?: Prisma.IntFilter<"CategoryTranslation"> | number;
    categoryId?: Prisma.IntFilter<"CategoryTranslation"> | number;
    languageId?: Prisma.IntFilter<"CategoryTranslation"> | number;
    name?: Prisma.StringFilter<"CategoryTranslation"> | string;
    description?: Prisma.StringNullableFilter<"CategoryTranslation"> | string | null;
};
export type CategoryTranslationCreateWithoutCategoryInput = {
    name: string;
    description?: string | null;
    language: Prisma.LanguageCreateNestedOneWithoutCategoryTranslationsInput;
};
export type CategoryTranslationUncheckedCreateWithoutCategoryInput = {
    id?: number;
    languageId: number;
    name: string;
    description?: string | null;
};
export type CategoryTranslationCreateOrConnectWithoutCategoryInput = {
    where: Prisma.CategoryTranslationWhereUniqueInput;
    create: Prisma.XOR<Prisma.CategoryTranslationCreateWithoutCategoryInput, Prisma.CategoryTranslationUncheckedCreateWithoutCategoryInput>;
};
export type CategoryTranslationCreateManyCategoryInputEnvelope = {
    data: Prisma.CategoryTranslationCreateManyCategoryInput | Prisma.CategoryTranslationCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type CategoryTranslationUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.CategoryTranslationWhereUniqueInput;
    update: Prisma.XOR<Prisma.CategoryTranslationUpdateWithoutCategoryInput, Prisma.CategoryTranslationUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.CategoryTranslationCreateWithoutCategoryInput, Prisma.CategoryTranslationUncheckedCreateWithoutCategoryInput>;
};
export type CategoryTranslationUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.CategoryTranslationWhereUniqueInput;
    data: Prisma.XOR<Prisma.CategoryTranslationUpdateWithoutCategoryInput, Prisma.CategoryTranslationUncheckedUpdateWithoutCategoryInput>;
};
export type CategoryTranslationUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.CategoryTranslationScalarWhereInput;
    data: Prisma.XOR<Prisma.CategoryTranslationUpdateManyMutationInput, Prisma.CategoryTranslationUncheckedUpdateManyWithoutCategoryInput>;
};
export type CategoryTranslationCreateManyLanguageInput = {
    id?: number;
    categoryId: number;
    name: string;
    description?: string | null;
};
export type CategoryTranslationUpdateWithoutLanguageInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.CategoryUpdateOneRequiredWithoutTranslationsNestedInput;
};
export type CategoryTranslationUncheckedUpdateWithoutLanguageInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CategoryTranslationUncheckedUpdateManyWithoutLanguageInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CategoryTranslationCreateManyCategoryInput = {
    id?: number;
    languageId: number;
    name: string;
    description?: string | null;
};
export type CategoryTranslationUpdateWithoutCategoryInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language?: Prisma.LanguageUpdateOneRequiredWithoutCategoryTranslationsNestedInput;
};
export type CategoryTranslationUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    languageId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CategoryTranslationUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    languageId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type CategoryTranslationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    categoryId?: boolean;
    languageId?: boolean;
    name?: boolean;
    description?: boolean;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    language?: boolean | Prisma.LanguageDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["categoryTranslation"]>;
export type CategoryTranslationSelectScalar = {
    id?: boolean;
    categoryId?: boolean;
    languageId?: boolean;
    name?: boolean;
    description?: boolean;
};
export type CategoryTranslationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "categoryId" | "languageId" | "name" | "description", ExtArgs["result"]["categoryTranslation"]>;
export type CategoryTranslationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    language?: boolean | Prisma.LanguageDefaultArgs<ExtArgs>;
};
export type $CategoryTranslationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CategoryTranslation";
    objects: {
        category: Prisma.$CategoryPayload<ExtArgs>;
        language: Prisma.$LanguagePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        categoryId: number;
        languageId: number;
        name: string;
        description: string | null;
    }, ExtArgs["result"]["categoryTranslation"]>;
    composites: {};
};
export type CategoryTranslationGetPayload<S extends boolean | null | undefined | CategoryTranslationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CategoryTranslationPayload, S>;
export type CategoryTranslationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CategoryTranslationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CategoryTranslationCountAggregateInputType | true;
};
export interface CategoryTranslationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CategoryTranslation'];
        meta: {
            name: 'CategoryTranslation';
        };
    };
    findUnique<T extends CategoryTranslationFindUniqueArgs>(args: Prisma.SelectSubset<T, CategoryTranslationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CategoryTranslationClient<runtime.Types.Result.GetResult<Prisma.$CategoryTranslationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CategoryTranslationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CategoryTranslationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CategoryTranslationClient<runtime.Types.Result.GetResult<Prisma.$CategoryTranslationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CategoryTranslationFindFirstArgs>(args?: Prisma.SelectSubset<T, CategoryTranslationFindFirstArgs<ExtArgs>>): Prisma.Prisma__CategoryTranslationClient<runtime.Types.Result.GetResult<Prisma.$CategoryTranslationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CategoryTranslationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CategoryTranslationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CategoryTranslationClient<runtime.Types.Result.GetResult<Prisma.$CategoryTranslationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CategoryTranslationFindManyArgs>(args?: Prisma.SelectSubset<T, CategoryTranslationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CategoryTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CategoryTranslationCreateArgs>(args: Prisma.SelectSubset<T, CategoryTranslationCreateArgs<ExtArgs>>): Prisma.Prisma__CategoryTranslationClient<runtime.Types.Result.GetResult<Prisma.$CategoryTranslationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CategoryTranslationCreateManyArgs>(args?: Prisma.SelectSubset<T, CategoryTranslationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends CategoryTranslationDeleteArgs>(args: Prisma.SelectSubset<T, CategoryTranslationDeleteArgs<ExtArgs>>): Prisma.Prisma__CategoryTranslationClient<runtime.Types.Result.GetResult<Prisma.$CategoryTranslationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CategoryTranslationUpdateArgs>(args: Prisma.SelectSubset<T, CategoryTranslationUpdateArgs<ExtArgs>>): Prisma.Prisma__CategoryTranslationClient<runtime.Types.Result.GetResult<Prisma.$CategoryTranslationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CategoryTranslationDeleteManyArgs>(args?: Prisma.SelectSubset<T, CategoryTranslationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CategoryTranslationUpdateManyArgs>(args: Prisma.SelectSubset<T, CategoryTranslationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends CategoryTranslationUpsertArgs>(args: Prisma.SelectSubset<T, CategoryTranslationUpsertArgs<ExtArgs>>): Prisma.Prisma__CategoryTranslationClient<runtime.Types.Result.GetResult<Prisma.$CategoryTranslationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CategoryTranslationCountArgs>(args?: Prisma.Subset<T, CategoryTranslationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CategoryTranslationCountAggregateOutputType> : number>;
    aggregate<T extends CategoryTranslationAggregateArgs>(args: Prisma.Subset<T, CategoryTranslationAggregateArgs>): Prisma.PrismaPromise<GetCategoryTranslationAggregateType<T>>;
    groupBy<T extends CategoryTranslationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CategoryTranslationGroupByArgs['orderBy'];
    } : {
        orderBy?: CategoryTranslationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CategoryTranslationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryTranslationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CategoryTranslationFieldRefs;
}
export interface Prisma__CategoryTranslationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    category<T extends Prisma.CategoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategoryDefaultArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    language<T extends Prisma.LanguageDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LanguageDefaultArgs<ExtArgs>>): Prisma.Prisma__LanguageClient<runtime.Types.Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CategoryTranslationFieldRefs {
    readonly id: Prisma.FieldRef<"CategoryTranslation", 'Int'>;
    readonly categoryId: Prisma.FieldRef<"CategoryTranslation", 'Int'>;
    readonly languageId: Prisma.FieldRef<"CategoryTranslation", 'Int'>;
    readonly name: Prisma.FieldRef<"CategoryTranslation", 'String'>;
    readonly description: Prisma.FieldRef<"CategoryTranslation", 'String'>;
}
export type CategoryTranslationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoryTranslationSelect<ExtArgs> | null;
    omit?: Prisma.CategoryTranslationOmit<ExtArgs> | null;
    include?: Prisma.CategoryTranslationInclude<ExtArgs> | null;
    where: Prisma.CategoryTranslationWhereUniqueInput;
};
export type CategoryTranslationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoryTranslationSelect<ExtArgs> | null;
    omit?: Prisma.CategoryTranslationOmit<ExtArgs> | null;
    include?: Prisma.CategoryTranslationInclude<ExtArgs> | null;
    where: Prisma.CategoryTranslationWhereUniqueInput;
};
export type CategoryTranslationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoryTranslationSelect<ExtArgs> | null;
    omit?: Prisma.CategoryTranslationOmit<ExtArgs> | null;
    include?: Prisma.CategoryTranslationInclude<ExtArgs> | null;
    where?: Prisma.CategoryTranslationWhereInput;
    orderBy?: Prisma.CategoryTranslationOrderByWithRelationInput | Prisma.CategoryTranslationOrderByWithRelationInput[];
    cursor?: Prisma.CategoryTranslationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoryTranslationScalarFieldEnum | Prisma.CategoryTranslationScalarFieldEnum[];
};
export type CategoryTranslationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoryTranslationSelect<ExtArgs> | null;
    omit?: Prisma.CategoryTranslationOmit<ExtArgs> | null;
    include?: Prisma.CategoryTranslationInclude<ExtArgs> | null;
    where?: Prisma.CategoryTranslationWhereInput;
    orderBy?: Prisma.CategoryTranslationOrderByWithRelationInput | Prisma.CategoryTranslationOrderByWithRelationInput[];
    cursor?: Prisma.CategoryTranslationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoryTranslationScalarFieldEnum | Prisma.CategoryTranslationScalarFieldEnum[];
};
export type CategoryTranslationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoryTranslationSelect<ExtArgs> | null;
    omit?: Prisma.CategoryTranslationOmit<ExtArgs> | null;
    include?: Prisma.CategoryTranslationInclude<ExtArgs> | null;
    where?: Prisma.CategoryTranslationWhereInput;
    orderBy?: Prisma.CategoryTranslationOrderByWithRelationInput | Prisma.CategoryTranslationOrderByWithRelationInput[];
    cursor?: Prisma.CategoryTranslationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoryTranslationScalarFieldEnum | Prisma.CategoryTranslationScalarFieldEnum[];
};
export type CategoryTranslationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoryTranslationSelect<ExtArgs> | null;
    omit?: Prisma.CategoryTranslationOmit<ExtArgs> | null;
    include?: Prisma.CategoryTranslationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CategoryTranslationCreateInput, Prisma.CategoryTranslationUncheckedCreateInput>;
};
export type CategoryTranslationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CategoryTranslationCreateManyInput | Prisma.CategoryTranslationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CategoryTranslationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoryTranslationSelect<ExtArgs> | null;
    omit?: Prisma.CategoryTranslationOmit<ExtArgs> | null;
    include?: Prisma.CategoryTranslationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CategoryTranslationUpdateInput, Prisma.CategoryTranslationUncheckedUpdateInput>;
    where: Prisma.CategoryTranslationWhereUniqueInput;
};
export type CategoryTranslationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CategoryTranslationUpdateManyMutationInput, Prisma.CategoryTranslationUncheckedUpdateManyInput>;
    where?: Prisma.CategoryTranslationWhereInput;
    limit?: number;
};
export type CategoryTranslationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoryTranslationSelect<ExtArgs> | null;
    omit?: Prisma.CategoryTranslationOmit<ExtArgs> | null;
    include?: Prisma.CategoryTranslationInclude<ExtArgs> | null;
    where: Prisma.CategoryTranslationWhereUniqueInput;
    create: Prisma.XOR<Prisma.CategoryTranslationCreateInput, Prisma.CategoryTranslationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CategoryTranslationUpdateInput, Prisma.CategoryTranslationUncheckedUpdateInput>;
};
export type CategoryTranslationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoryTranslationSelect<ExtArgs> | null;
    omit?: Prisma.CategoryTranslationOmit<ExtArgs> | null;
    include?: Prisma.CategoryTranslationInclude<ExtArgs> | null;
    where: Prisma.CategoryTranslationWhereUniqueInput;
};
export type CategoryTranslationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CategoryTranslationWhereInput;
    limit?: number;
};
export type CategoryTranslationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoryTranslationSelect<ExtArgs> | null;
    omit?: Prisma.CategoryTranslationOmit<ExtArgs> | null;
    include?: Prisma.CategoryTranslationInclude<ExtArgs> | null;
};
export {};
