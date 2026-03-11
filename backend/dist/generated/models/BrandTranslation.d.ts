import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type BrandTranslationModel = runtime.Types.Result.DefaultSelection<Prisma.$BrandTranslationPayload>;
export type AggregateBrandTranslation = {
    _count: BrandTranslationCountAggregateOutputType | null;
    _avg: BrandTranslationAvgAggregateOutputType | null;
    _sum: BrandTranslationSumAggregateOutputType | null;
    _min: BrandTranslationMinAggregateOutputType | null;
    _max: BrandTranslationMaxAggregateOutputType | null;
};
export type BrandTranslationAvgAggregateOutputType = {
    id: number | null;
    brandId: number | null;
    languageId: number | null;
};
export type BrandTranslationSumAggregateOutputType = {
    id: number | null;
    brandId: number | null;
    languageId: number | null;
};
export type BrandTranslationMinAggregateOutputType = {
    id: number | null;
    brandId: number | null;
    languageId: number | null;
    name: string | null;
    description: string | null;
};
export type BrandTranslationMaxAggregateOutputType = {
    id: number | null;
    brandId: number | null;
    languageId: number | null;
    name: string | null;
    description: string | null;
};
export type BrandTranslationCountAggregateOutputType = {
    id: number;
    brandId: number;
    languageId: number;
    name: number;
    description: number;
    _all: number;
};
export type BrandTranslationAvgAggregateInputType = {
    id?: true;
    brandId?: true;
    languageId?: true;
};
export type BrandTranslationSumAggregateInputType = {
    id?: true;
    brandId?: true;
    languageId?: true;
};
export type BrandTranslationMinAggregateInputType = {
    id?: true;
    brandId?: true;
    languageId?: true;
    name?: true;
    description?: true;
};
export type BrandTranslationMaxAggregateInputType = {
    id?: true;
    brandId?: true;
    languageId?: true;
    name?: true;
    description?: true;
};
export type BrandTranslationCountAggregateInputType = {
    id?: true;
    brandId?: true;
    languageId?: true;
    name?: true;
    description?: true;
    _all?: true;
};
export type BrandTranslationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BrandTranslationWhereInput;
    orderBy?: Prisma.BrandTranslationOrderByWithRelationInput | Prisma.BrandTranslationOrderByWithRelationInput[];
    cursor?: Prisma.BrandTranslationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BrandTranslationCountAggregateInputType;
    _avg?: BrandTranslationAvgAggregateInputType;
    _sum?: BrandTranslationSumAggregateInputType;
    _min?: BrandTranslationMinAggregateInputType;
    _max?: BrandTranslationMaxAggregateInputType;
};
export type GetBrandTranslationAggregateType<T extends BrandTranslationAggregateArgs> = {
    [P in keyof T & keyof AggregateBrandTranslation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBrandTranslation[P]> : Prisma.GetScalarType<T[P], AggregateBrandTranslation[P]>;
};
export type BrandTranslationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BrandTranslationWhereInput;
    orderBy?: Prisma.BrandTranslationOrderByWithAggregationInput | Prisma.BrandTranslationOrderByWithAggregationInput[];
    by: Prisma.BrandTranslationScalarFieldEnum[] | Prisma.BrandTranslationScalarFieldEnum;
    having?: Prisma.BrandTranslationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BrandTranslationCountAggregateInputType | true;
    _avg?: BrandTranslationAvgAggregateInputType;
    _sum?: BrandTranslationSumAggregateInputType;
    _min?: BrandTranslationMinAggregateInputType;
    _max?: BrandTranslationMaxAggregateInputType;
};
export type BrandTranslationGroupByOutputType = {
    id: number;
    brandId: number;
    languageId: number;
    name: string;
    description: string | null;
    _count: BrandTranslationCountAggregateOutputType | null;
    _avg: BrandTranslationAvgAggregateOutputType | null;
    _sum: BrandTranslationSumAggregateOutputType | null;
    _min: BrandTranslationMinAggregateOutputType | null;
    _max: BrandTranslationMaxAggregateOutputType | null;
};
type GetBrandTranslationGroupByPayload<T extends BrandTranslationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BrandTranslationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BrandTranslationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BrandTranslationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BrandTranslationGroupByOutputType[P]>;
}>>;
export type BrandTranslationWhereInput = {
    AND?: Prisma.BrandTranslationWhereInput | Prisma.BrandTranslationWhereInput[];
    OR?: Prisma.BrandTranslationWhereInput[];
    NOT?: Prisma.BrandTranslationWhereInput | Prisma.BrandTranslationWhereInput[];
    id?: Prisma.IntFilter<"BrandTranslation"> | number;
    brandId?: Prisma.IntFilter<"BrandTranslation"> | number;
    languageId?: Prisma.IntFilter<"BrandTranslation"> | number;
    name?: Prisma.StringFilter<"BrandTranslation"> | string;
    description?: Prisma.StringNullableFilter<"BrandTranslation"> | string | null;
    brand?: Prisma.XOR<Prisma.BrandScalarRelationFilter, Prisma.BrandWhereInput>;
    language?: Prisma.XOR<Prisma.LanguageScalarRelationFilter, Prisma.LanguageWhereInput>;
};
export type BrandTranslationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    brand?: Prisma.BrandOrderByWithRelationInput;
    language?: Prisma.LanguageOrderByWithRelationInput;
    _relevance?: Prisma.BrandTranslationOrderByRelevanceInput;
};
export type BrandTranslationWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    brandId_languageId?: Prisma.BrandTranslationBrandIdLanguageIdCompoundUniqueInput;
    AND?: Prisma.BrandTranslationWhereInput | Prisma.BrandTranslationWhereInput[];
    OR?: Prisma.BrandTranslationWhereInput[];
    NOT?: Prisma.BrandTranslationWhereInput | Prisma.BrandTranslationWhereInput[];
    brandId?: Prisma.IntFilter<"BrandTranslation"> | number;
    languageId?: Prisma.IntFilter<"BrandTranslation"> | number;
    name?: Prisma.StringFilter<"BrandTranslation"> | string;
    description?: Prisma.StringNullableFilter<"BrandTranslation"> | string | null;
    brand?: Prisma.XOR<Prisma.BrandScalarRelationFilter, Prisma.BrandWhereInput>;
    language?: Prisma.XOR<Prisma.LanguageScalarRelationFilter, Prisma.LanguageWhereInput>;
}, "id" | "brandId_languageId">;
export type BrandTranslationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.BrandTranslationCountOrderByAggregateInput;
    _avg?: Prisma.BrandTranslationAvgOrderByAggregateInput;
    _max?: Prisma.BrandTranslationMaxOrderByAggregateInput;
    _min?: Prisma.BrandTranslationMinOrderByAggregateInput;
    _sum?: Prisma.BrandTranslationSumOrderByAggregateInput;
};
export type BrandTranslationScalarWhereWithAggregatesInput = {
    AND?: Prisma.BrandTranslationScalarWhereWithAggregatesInput | Prisma.BrandTranslationScalarWhereWithAggregatesInput[];
    OR?: Prisma.BrandTranslationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BrandTranslationScalarWhereWithAggregatesInput | Prisma.BrandTranslationScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"BrandTranslation"> | number;
    brandId?: Prisma.IntWithAggregatesFilter<"BrandTranslation"> | number;
    languageId?: Prisma.IntWithAggregatesFilter<"BrandTranslation"> | number;
    name?: Prisma.StringWithAggregatesFilter<"BrandTranslation"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"BrandTranslation"> | string | null;
};
export type BrandTranslationCreateInput = {
    name: string;
    description?: string | null;
    brand: Prisma.BrandCreateNestedOneWithoutTranslationsInput;
    language: Prisma.LanguageCreateNestedOneWithoutBrandTranslationsInput;
};
export type BrandTranslationUncheckedCreateInput = {
    id?: number;
    brandId: number;
    languageId: number;
    name: string;
    description?: string | null;
};
export type BrandTranslationUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brand?: Prisma.BrandUpdateOneRequiredWithoutTranslationsNestedInput;
    language?: Prisma.LanguageUpdateOneRequiredWithoutBrandTranslationsNestedInput;
};
export type BrandTranslationUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    brandId?: Prisma.IntFieldUpdateOperationsInput | number;
    languageId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BrandTranslationCreateManyInput = {
    id?: number;
    brandId: number;
    languageId: number;
    name: string;
    description?: string | null;
};
export type BrandTranslationUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BrandTranslationUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    brandId?: Prisma.IntFieldUpdateOperationsInput | number;
    languageId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BrandTranslationListRelationFilter = {
    every?: Prisma.BrandTranslationWhereInput;
    some?: Prisma.BrandTranslationWhereInput;
    none?: Prisma.BrandTranslationWhereInput;
};
export type BrandTranslationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BrandTranslationOrderByRelevanceInput = {
    fields: Prisma.BrandTranslationOrderByRelevanceFieldEnum | Prisma.BrandTranslationOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type BrandTranslationBrandIdLanguageIdCompoundUniqueInput = {
    brandId: number;
    languageId: number;
};
export type BrandTranslationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type BrandTranslationAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
};
export type BrandTranslationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type BrandTranslationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type BrandTranslationSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    brandId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
};
export type BrandTranslationCreateNestedManyWithoutLanguageInput = {
    create?: Prisma.XOR<Prisma.BrandTranslationCreateWithoutLanguageInput, Prisma.BrandTranslationUncheckedCreateWithoutLanguageInput> | Prisma.BrandTranslationCreateWithoutLanguageInput[] | Prisma.BrandTranslationUncheckedCreateWithoutLanguageInput[];
    connectOrCreate?: Prisma.BrandTranslationCreateOrConnectWithoutLanguageInput | Prisma.BrandTranslationCreateOrConnectWithoutLanguageInput[];
    createMany?: Prisma.BrandTranslationCreateManyLanguageInputEnvelope;
    connect?: Prisma.BrandTranslationWhereUniqueInput | Prisma.BrandTranslationWhereUniqueInput[];
};
export type BrandTranslationUncheckedCreateNestedManyWithoutLanguageInput = {
    create?: Prisma.XOR<Prisma.BrandTranslationCreateWithoutLanguageInput, Prisma.BrandTranslationUncheckedCreateWithoutLanguageInput> | Prisma.BrandTranslationCreateWithoutLanguageInput[] | Prisma.BrandTranslationUncheckedCreateWithoutLanguageInput[];
    connectOrCreate?: Prisma.BrandTranslationCreateOrConnectWithoutLanguageInput | Prisma.BrandTranslationCreateOrConnectWithoutLanguageInput[];
    createMany?: Prisma.BrandTranslationCreateManyLanguageInputEnvelope;
    connect?: Prisma.BrandTranslationWhereUniqueInput | Prisma.BrandTranslationWhereUniqueInput[];
};
export type BrandTranslationUpdateManyWithoutLanguageNestedInput = {
    create?: Prisma.XOR<Prisma.BrandTranslationCreateWithoutLanguageInput, Prisma.BrandTranslationUncheckedCreateWithoutLanguageInput> | Prisma.BrandTranslationCreateWithoutLanguageInput[] | Prisma.BrandTranslationUncheckedCreateWithoutLanguageInput[];
    connectOrCreate?: Prisma.BrandTranslationCreateOrConnectWithoutLanguageInput | Prisma.BrandTranslationCreateOrConnectWithoutLanguageInput[];
    upsert?: Prisma.BrandTranslationUpsertWithWhereUniqueWithoutLanguageInput | Prisma.BrandTranslationUpsertWithWhereUniqueWithoutLanguageInput[];
    createMany?: Prisma.BrandTranslationCreateManyLanguageInputEnvelope;
    set?: Prisma.BrandTranslationWhereUniqueInput | Prisma.BrandTranslationWhereUniqueInput[];
    disconnect?: Prisma.BrandTranslationWhereUniqueInput | Prisma.BrandTranslationWhereUniqueInput[];
    delete?: Prisma.BrandTranslationWhereUniqueInput | Prisma.BrandTranslationWhereUniqueInput[];
    connect?: Prisma.BrandTranslationWhereUniqueInput | Prisma.BrandTranslationWhereUniqueInput[];
    update?: Prisma.BrandTranslationUpdateWithWhereUniqueWithoutLanguageInput | Prisma.BrandTranslationUpdateWithWhereUniqueWithoutLanguageInput[];
    updateMany?: Prisma.BrandTranslationUpdateManyWithWhereWithoutLanguageInput | Prisma.BrandTranslationUpdateManyWithWhereWithoutLanguageInput[];
    deleteMany?: Prisma.BrandTranslationScalarWhereInput | Prisma.BrandTranslationScalarWhereInput[];
};
export type BrandTranslationUncheckedUpdateManyWithoutLanguageNestedInput = {
    create?: Prisma.XOR<Prisma.BrandTranslationCreateWithoutLanguageInput, Prisma.BrandTranslationUncheckedCreateWithoutLanguageInput> | Prisma.BrandTranslationCreateWithoutLanguageInput[] | Prisma.BrandTranslationUncheckedCreateWithoutLanguageInput[];
    connectOrCreate?: Prisma.BrandTranslationCreateOrConnectWithoutLanguageInput | Prisma.BrandTranslationCreateOrConnectWithoutLanguageInput[];
    upsert?: Prisma.BrandTranslationUpsertWithWhereUniqueWithoutLanguageInput | Prisma.BrandTranslationUpsertWithWhereUniqueWithoutLanguageInput[];
    createMany?: Prisma.BrandTranslationCreateManyLanguageInputEnvelope;
    set?: Prisma.BrandTranslationWhereUniqueInput | Prisma.BrandTranslationWhereUniqueInput[];
    disconnect?: Prisma.BrandTranslationWhereUniqueInput | Prisma.BrandTranslationWhereUniqueInput[];
    delete?: Prisma.BrandTranslationWhereUniqueInput | Prisma.BrandTranslationWhereUniqueInput[];
    connect?: Prisma.BrandTranslationWhereUniqueInput | Prisma.BrandTranslationWhereUniqueInput[];
    update?: Prisma.BrandTranslationUpdateWithWhereUniqueWithoutLanguageInput | Prisma.BrandTranslationUpdateWithWhereUniqueWithoutLanguageInput[];
    updateMany?: Prisma.BrandTranslationUpdateManyWithWhereWithoutLanguageInput | Prisma.BrandTranslationUpdateManyWithWhereWithoutLanguageInput[];
    deleteMany?: Prisma.BrandTranslationScalarWhereInput | Prisma.BrandTranslationScalarWhereInput[];
};
export type BrandTranslationCreateNestedManyWithoutBrandInput = {
    create?: Prisma.XOR<Prisma.BrandTranslationCreateWithoutBrandInput, Prisma.BrandTranslationUncheckedCreateWithoutBrandInput> | Prisma.BrandTranslationCreateWithoutBrandInput[] | Prisma.BrandTranslationUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.BrandTranslationCreateOrConnectWithoutBrandInput | Prisma.BrandTranslationCreateOrConnectWithoutBrandInput[];
    createMany?: Prisma.BrandTranslationCreateManyBrandInputEnvelope;
    connect?: Prisma.BrandTranslationWhereUniqueInput | Prisma.BrandTranslationWhereUniqueInput[];
};
export type BrandTranslationUncheckedCreateNestedManyWithoutBrandInput = {
    create?: Prisma.XOR<Prisma.BrandTranslationCreateWithoutBrandInput, Prisma.BrandTranslationUncheckedCreateWithoutBrandInput> | Prisma.BrandTranslationCreateWithoutBrandInput[] | Prisma.BrandTranslationUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.BrandTranslationCreateOrConnectWithoutBrandInput | Prisma.BrandTranslationCreateOrConnectWithoutBrandInput[];
    createMany?: Prisma.BrandTranslationCreateManyBrandInputEnvelope;
    connect?: Prisma.BrandTranslationWhereUniqueInput | Prisma.BrandTranslationWhereUniqueInput[];
};
export type BrandTranslationUpdateManyWithoutBrandNestedInput = {
    create?: Prisma.XOR<Prisma.BrandTranslationCreateWithoutBrandInput, Prisma.BrandTranslationUncheckedCreateWithoutBrandInput> | Prisma.BrandTranslationCreateWithoutBrandInput[] | Prisma.BrandTranslationUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.BrandTranslationCreateOrConnectWithoutBrandInput | Prisma.BrandTranslationCreateOrConnectWithoutBrandInput[];
    upsert?: Prisma.BrandTranslationUpsertWithWhereUniqueWithoutBrandInput | Prisma.BrandTranslationUpsertWithWhereUniqueWithoutBrandInput[];
    createMany?: Prisma.BrandTranslationCreateManyBrandInputEnvelope;
    set?: Prisma.BrandTranslationWhereUniqueInput | Prisma.BrandTranslationWhereUniqueInput[];
    disconnect?: Prisma.BrandTranslationWhereUniqueInput | Prisma.BrandTranslationWhereUniqueInput[];
    delete?: Prisma.BrandTranslationWhereUniqueInput | Prisma.BrandTranslationWhereUniqueInput[];
    connect?: Prisma.BrandTranslationWhereUniqueInput | Prisma.BrandTranslationWhereUniqueInput[];
    update?: Prisma.BrandTranslationUpdateWithWhereUniqueWithoutBrandInput | Prisma.BrandTranslationUpdateWithWhereUniqueWithoutBrandInput[];
    updateMany?: Prisma.BrandTranslationUpdateManyWithWhereWithoutBrandInput | Prisma.BrandTranslationUpdateManyWithWhereWithoutBrandInput[];
    deleteMany?: Prisma.BrandTranslationScalarWhereInput | Prisma.BrandTranslationScalarWhereInput[];
};
export type BrandTranslationUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: Prisma.XOR<Prisma.BrandTranslationCreateWithoutBrandInput, Prisma.BrandTranslationUncheckedCreateWithoutBrandInput> | Prisma.BrandTranslationCreateWithoutBrandInput[] | Prisma.BrandTranslationUncheckedCreateWithoutBrandInput[];
    connectOrCreate?: Prisma.BrandTranslationCreateOrConnectWithoutBrandInput | Prisma.BrandTranslationCreateOrConnectWithoutBrandInput[];
    upsert?: Prisma.BrandTranslationUpsertWithWhereUniqueWithoutBrandInput | Prisma.BrandTranslationUpsertWithWhereUniqueWithoutBrandInput[];
    createMany?: Prisma.BrandTranslationCreateManyBrandInputEnvelope;
    set?: Prisma.BrandTranslationWhereUniqueInput | Prisma.BrandTranslationWhereUniqueInput[];
    disconnect?: Prisma.BrandTranslationWhereUniqueInput | Prisma.BrandTranslationWhereUniqueInput[];
    delete?: Prisma.BrandTranslationWhereUniqueInput | Prisma.BrandTranslationWhereUniqueInput[];
    connect?: Prisma.BrandTranslationWhereUniqueInput | Prisma.BrandTranslationWhereUniqueInput[];
    update?: Prisma.BrandTranslationUpdateWithWhereUniqueWithoutBrandInput | Prisma.BrandTranslationUpdateWithWhereUniqueWithoutBrandInput[];
    updateMany?: Prisma.BrandTranslationUpdateManyWithWhereWithoutBrandInput | Prisma.BrandTranslationUpdateManyWithWhereWithoutBrandInput[];
    deleteMany?: Prisma.BrandTranslationScalarWhereInput | Prisma.BrandTranslationScalarWhereInput[];
};
export type BrandTranslationCreateWithoutLanguageInput = {
    name: string;
    description?: string | null;
    brand: Prisma.BrandCreateNestedOneWithoutTranslationsInput;
};
export type BrandTranslationUncheckedCreateWithoutLanguageInput = {
    id?: number;
    brandId: number;
    name: string;
    description?: string | null;
};
export type BrandTranslationCreateOrConnectWithoutLanguageInput = {
    where: Prisma.BrandTranslationWhereUniqueInput;
    create: Prisma.XOR<Prisma.BrandTranslationCreateWithoutLanguageInput, Prisma.BrandTranslationUncheckedCreateWithoutLanguageInput>;
};
export type BrandTranslationCreateManyLanguageInputEnvelope = {
    data: Prisma.BrandTranslationCreateManyLanguageInput | Prisma.BrandTranslationCreateManyLanguageInput[];
    skipDuplicates?: boolean;
};
export type BrandTranslationUpsertWithWhereUniqueWithoutLanguageInput = {
    where: Prisma.BrandTranslationWhereUniqueInput;
    update: Prisma.XOR<Prisma.BrandTranslationUpdateWithoutLanguageInput, Prisma.BrandTranslationUncheckedUpdateWithoutLanguageInput>;
    create: Prisma.XOR<Prisma.BrandTranslationCreateWithoutLanguageInput, Prisma.BrandTranslationUncheckedCreateWithoutLanguageInput>;
};
export type BrandTranslationUpdateWithWhereUniqueWithoutLanguageInput = {
    where: Prisma.BrandTranslationWhereUniqueInput;
    data: Prisma.XOR<Prisma.BrandTranslationUpdateWithoutLanguageInput, Prisma.BrandTranslationUncheckedUpdateWithoutLanguageInput>;
};
export type BrandTranslationUpdateManyWithWhereWithoutLanguageInput = {
    where: Prisma.BrandTranslationScalarWhereInput;
    data: Prisma.XOR<Prisma.BrandTranslationUpdateManyMutationInput, Prisma.BrandTranslationUncheckedUpdateManyWithoutLanguageInput>;
};
export type BrandTranslationScalarWhereInput = {
    AND?: Prisma.BrandTranslationScalarWhereInput | Prisma.BrandTranslationScalarWhereInput[];
    OR?: Prisma.BrandTranslationScalarWhereInput[];
    NOT?: Prisma.BrandTranslationScalarWhereInput | Prisma.BrandTranslationScalarWhereInput[];
    id?: Prisma.IntFilter<"BrandTranslation"> | number;
    brandId?: Prisma.IntFilter<"BrandTranslation"> | number;
    languageId?: Prisma.IntFilter<"BrandTranslation"> | number;
    name?: Prisma.StringFilter<"BrandTranslation"> | string;
    description?: Prisma.StringNullableFilter<"BrandTranslation"> | string | null;
};
export type BrandTranslationCreateWithoutBrandInput = {
    name: string;
    description?: string | null;
    language: Prisma.LanguageCreateNestedOneWithoutBrandTranslationsInput;
};
export type BrandTranslationUncheckedCreateWithoutBrandInput = {
    id?: number;
    languageId: number;
    name: string;
    description?: string | null;
};
export type BrandTranslationCreateOrConnectWithoutBrandInput = {
    where: Prisma.BrandTranslationWhereUniqueInput;
    create: Prisma.XOR<Prisma.BrandTranslationCreateWithoutBrandInput, Prisma.BrandTranslationUncheckedCreateWithoutBrandInput>;
};
export type BrandTranslationCreateManyBrandInputEnvelope = {
    data: Prisma.BrandTranslationCreateManyBrandInput | Prisma.BrandTranslationCreateManyBrandInput[];
    skipDuplicates?: boolean;
};
export type BrandTranslationUpsertWithWhereUniqueWithoutBrandInput = {
    where: Prisma.BrandTranslationWhereUniqueInput;
    update: Prisma.XOR<Prisma.BrandTranslationUpdateWithoutBrandInput, Prisma.BrandTranslationUncheckedUpdateWithoutBrandInput>;
    create: Prisma.XOR<Prisma.BrandTranslationCreateWithoutBrandInput, Prisma.BrandTranslationUncheckedCreateWithoutBrandInput>;
};
export type BrandTranslationUpdateWithWhereUniqueWithoutBrandInput = {
    where: Prisma.BrandTranslationWhereUniqueInput;
    data: Prisma.XOR<Prisma.BrandTranslationUpdateWithoutBrandInput, Prisma.BrandTranslationUncheckedUpdateWithoutBrandInput>;
};
export type BrandTranslationUpdateManyWithWhereWithoutBrandInput = {
    where: Prisma.BrandTranslationScalarWhereInput;
    data: Prisma.XOR<Prisma.BrandTranslationUpdateManyMutationInput, Prisma.BrandTranslationUncheckedUpdateManyWithoutBrandInput>;
};
export type BrandTranslationCreateManyLanguageInput = {
    id?: number;
    brandId: number;
    name: string;
    description?: string | null;
};
export type BrandTranslationUpdateWithoutLanguageInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    brand?: Prisma.BrandUpdateOneRequiredWithoutTranslationsNestedInput;
};
export type BrandTranslationUncheckedUpdateWithoutLanguageInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    brandId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BrandTranslationUncheckedUpdateManyWithoutLanguageInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    brandId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BrandTranslationCreateManyBrandInput = {
    id?: number;
    languageId: number;
    name: string;
    description?: string | null;
};
export type BrandTranslationUpdateWithoutBrandInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    language?: Prisma.LanguageUpdateOneRequiredWithoutBrandTranslationsNestedInput;
};
export type BrandTranslationUncheckedUpdateWithoutBrandInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    languageId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BrandTranslationUncheckedUpdateManyWithoutBrandInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    languageId?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BrandTranslationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    brandId?: boolean;
    languageId?: boolean;
    name?: boolean;
    description?: boolean;
    brand?: boolean | Prisma.BrandDefaultArgs<ExtArgs>;
    language?: boolean | Prisma.LanguageDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["brandTranslation"]>;
export type BrandTranslationSelectScalar = {
    id?: boolean;
    brandId?: boolean;
    languageId?: boolean;
    name?: boolean;
    description?: boolean;
};
export type BrandTranslationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "brandId" | "languageId" | "name" | "description", ExtArgs["result"]["brandTranslation"]>;
export type BrandTranslationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brand?: boolean | Prisma.BrandDefaultArgs<ExtArgs>;
    language?: boolean | Prisma.LanguageDefaultArgs<ExtArgs>;
};
export type $BrandTranslationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BrandTranslation";
    objects: {
        brand: Prisma.$BrandPayload<ExtArgs>;
        language: Prisma.$LanguagePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        brandId: number;
        languageId: number;
        name: string;
        description: string | null;
    }, ExtArgs["result"]["brandTranslation"]>;
    composites: {};
};
export type BrandTranslationGetPayload<S extends boolean | null | undefined | BrandTranslationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BrandTranslationPayload, S>;
export type BrandTranslationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BrandTranslationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BrandTranslationCountAggregateInputType | true;
};
export interface BrandTranslationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BrandTranslation'];
        meta: {
            name: 'BrandTranslation';
        };
    };
    findUnique<T extends BrandTranslationFindUniqueArgs>(args: Prisma.SelectSubset<T, BrandTranslationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BrandTranslationClient<runtime.Types.Result.GetResult<Prisma.$BrandTranslationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BrandTranslationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BrandTranslationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BrandTranslationClient<runtime.Types.Result.GetResult<Prisma.$BrandTranslationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BrandTranslationFindFirstArgs>(args?: Prisma.SelectSubset<T, BrandTranslationFindFirstArgs<ExtArgs>>): Prisma.Prisma__BrandTranslationClient<runtime.Types.Result.GetResult<Prisma.$BrandTranslationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BrandTranslationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BrandTranslationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BrandTranslationClient<runtime.Types.Result.GetResult<Prisma.$BrandTranslationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BrandTranslationFindManyArgs>(args?: Prisma.SelectSubset<T, BrandTranslationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrandTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BrandTranslationCreateArgs>(args: Prisma.SelectSubset<T, BrandTranslationCreateArgs<ExtArgs>>): Prisma.Prisma__BrandTranslationClient<runtime.Types.Result.GetResult<Prisma.$BrandTranslationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BrandTranslationCreateManyArgs>(args?: Prisma.SelectSubset<T, BrandTranslationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends BrandTranslationDeleteArgs>(args: Prisma.SelectSubset<T, BrandTranslationDeleteArgs<ExtArgs>>): Prisma.Prisma__BrandTranslationClient<runtime.Types.Result.GetResult<Prisma.$BrandTranslationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BrandTranslationUpdateArgs>(args: Prisma.SelectSubset<T, BrandTranslationUpdateArgs<ExtArgs>>): Prisma.Prisma__BrandTranslationClient<runtime.Types.Result.GetResult<Prisma.$BrandTranslationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BrandTranslationDeleteManyArgs>(args?: Prisma.SelectSubset<T, BrandTranslationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BrandTranslationUpdateManyArgs>(args: Prisma.SelectSubset<T, BrandTranslationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends BrandTranslationUpsertArgs>(args: Prisma.SelectSubset<T, BrandTranslationUpsertArgs<ExtArgs>>): Prisma.Prisma__BrandTranslationClient<runtime.Types.Result.GetResult<Prisma.$BrandTranslationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BrandTranslationCountArgs>(args?: Prisma.Subset<T, BrandTranslationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BrandTranslationCountAggregateOutputType> : number>;
    aggregate<T extends BrandTranslationAggregateArgs>(args: Prisma.Subset<T, BrandTranslationAggregateArgs>): Prisma.PrismaPromise<GetBrandTranslationAggregateType<T>>;
    groupBy<T extends BrandTranslationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BrandTranslationGroupByArgs['orderBy'];
    } : {
        orderBy?: BrandTranslationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BrandTranslationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandTranslationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BrandTranslationFieldRefs;
}
export interface Prisma__BrandTranslationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    brand<T extends Prisma.BrandDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BrandDefaultArgs<ExtArgs>>): Prisma.Prisma__BrandClient<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    language<T extends Prisma.LanguageDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LanguageDefaultArgs<ExtArgs>>): Prisma.Prisma__LanguageClient<runtime.Types.Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BrandTranslationFieldRefs {
    readonly id: Prisma.FieldRef<"BrandTranslation", 'Int'>;
    readonly brandId: Prisma.FieldRef<"BrandTranslation", 'Int'>;
    readonly languageId: Prisma.FieldRef<"BrandTranslation", 'Int'>;
    readonly name: Prisma.FieldRef<"BrandTranslation", 'String'>;
    readonly description: Prisma.FieldRef<"BrandTranslation", 'String'>;
}
export type BrandTranslationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandTranslationSelect<ExtArgs> | null;
    omit?: Prisma.BrandTranslationOmit<ExtArgs> | null;
    include?: Prisma.BrandTranslationInclude<ExtArgs> | null;
    where: Prisma.BrandTranslationWhereUniqueInput;
};
export type BrandTranslationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandTranslationSelect<ExtArgs> | null;
    omit?: Prisma.BrandTranslationOmit<ExtArgs> | null;
    include?: Prisma.BrandTranslationInclude<ExtArgs> | null;
    where: Prisma.BrandTranslationWhereUniqueInput;
};
export type BrandTranslationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandTranslationSelect<ExtArgs> | null;
    omit?: Prisma.BrandTranslationOmit<ExtArgs> | null;
    include?: Prisma.BrandTranslationInclude<ExtArgs> | null;
    where?: Prisma.BrandTranslationWhereInput;
    orderBy?: Prisma.BrandTranslationOrderByWithRelationInput | Prisma.BrandTranslationOrderByWithRelationInput[];
    cursor?: Prisma.BrandTranslationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BrandTranslationScalarFieldEnum | Prisma.BrandTranslationScalarFieldEnum[];
};
export type BrandTranslationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandTranslationSelect<ExtArgs> | null;
    omit?: Prisma.BrandTranslationOmit<ExtArgs> | null;
    include?: Prisma.BrandTranslationInclude<ExtArgs> | null;
    where?: Prisma.BrandTranslationWhereInput;
    orderBy?: Prisma.BrandTranslationOrderByWithRelationInput | Prisma.BrandTranslationOrderByWithRelationInput[];
    cursor?: Prisma.BrandTranslationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BrandTranslationScalarFieldEnum | Prisma.BrandTranslationScalarFieldEnum[];
};
export type BrandTranslationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandTranslationSelect<ExtArgs> | null;
    omit?: Prisma.BrandTranslationOmit<ExtArgs> | null;
    include?: Prisma.BrandTranslationInclude<ExtArgs> | null;
    where?: Prisma.BrandTranslationWhereInput;
    orderBy?: Prisma.BrandTranslationOrderByWithRelationInput | Prisma.BrandTranslationOrderByWithRelationInput[];
    cursor?: Prisma.BrandTranslationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BrandTranslationScalarFieldEnum | Prisma.BrandTranslationScalarFieldEnum[];
};
export type BrandTranslationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandTranslationSelect<ExtArgs> | null;
    omit?: Prisma.BrandTranslationOmit<ExtArgs> | null;
    include?: Prisma.BrandTranslationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BrandTranslationCreateInput, Prisma.BrandTranslationUncheckedCreateInput>;
};
export type BrandTranslationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BrandTranslationCreateManyInput | Prisma.BrandTranslationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BrandTranslationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandTranslationSelect<ExtArgs> | null;
    omit?: Prisma.BrandTranslationOmit<ExtArgs> | null;
    include?: Prisma.BrandTranslationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BrandTranslationUpdateInput, Prisma.BrandTranslationUncheckedUpdateInput>;
    where: Prisma.BrandTranslationWhereUniqueInput;
};
export type BrandTranslationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BrandTranslationUpdateManyMutationInput, Prisma.BrandTranslationUncheckedUpdateManyInput>;
    where?: Prisma.BrandTranslationWhereInput;
    limit?: number;
};
export type BrandTranslationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandTranslationSelect<ExtArgs> | null;
    omit?: Prisma.BrandTranslationOmit<ExtArgs> | null;
    include?: Prisma.BrandTranslationInclude<ExtArgs> | null;
    where: Prisma.BrandTranslationWhereUniqueInput;
    create: Prisma.XOR<Prisma.BrandTranslationCreateInput, Prisma.BrandTranslationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BrandTranslationUpdateInput, Prisma.BrandTranslationUncheckedUpdateInput>;
};
export type BrandTranslationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandTranslationSelect<ExtArgs> | null;
    omit?: Prisma.BrandTranslationOmit<ExtArgs> | null;
    include?: Prisma.BrandTranslationInclude<ExtArgs> | null;
    where: Prisma.BrandTranslationWhereUniqueInput;
};
export type BrandTranslationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BrandTranslationWhereInput;
    limit?: number;
};
export type BrandTranslationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandTranslationSelect<ExtArgs> | null;
    omit?: Prisma.BrandTranslationOmit<ExtArgs> | null;
    include?: Prisma.BrandTranslationInclude<ExtArgs> | null;
};
export {};
