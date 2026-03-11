import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type BrandModel = runtime.Types.Result.DefaultSelection<Prisma.$BrandPayload>;
export type AggregateBrand = {
    _count: BrandCountAggregateOutputType | null;
    _avg: BrandAvgAggregateOutputType | null;
    _sum: BrandSumAggregateOutputType | null;
    _min: BrandMinAggregateOutputType | null;
    _max: BrandMaxAggregateOutputType | null;
};
export type BrandAvgAggregateOutputType = {
    id: number | null;
    categoryId: number | null;
};
export type BrandSumAggregateOutputType = {
    id: number | null;
    categoryId: number | null;
};
export type BrandMinAggregateOutputType = {
    id: number | null;
    categoryId: number | null;
    slug: string | null;
    logo: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BrandMaxAggregateOutputType = {
    id: number | null;
    categoryId: number | null;
    slug: string | null;
    logo: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BrandCountAggregateOutputType = {
    id: number;
    categoryId: number;
    slug: number;
    logo: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type BrandAvgAggregateInputType = {
    id?: true;
    categoryId?: true;
};
export type BrandSumAggregateInputType = {
    id?: true;
    categoryId?: true;
};
export type BrandMinAggregateInputType = {
    id?: true;
    categoryId?: true;
    slug?: true;
    logo?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BrandMaxAggregateInputType = {
    id?: true;
    categoryId?: true;
    slug?: true;
    logo?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BrandCountAggregateInputType = {
    id?: true;
    categoryId?: true;
    slug?: true;
    logo?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type BrandAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BrandWhereInput;
    orderBy?: Prisma.BrandOrderByWithRelationInput | Prisma.BrandOrderByWithRelationInput[];
    cursor?: Prisma.BrandWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BrandCountAggregateInputType;
    _avg?: BrandAvgAggregateInputType;
    _sum?: BrandSumAggregateInputType;
    _min?: BrandMinAggregateInputType;
    _max?: BrandMaxAggregateInputType;
};
export type GetBrandAggregateType<T extends BrandAggregateArgs> = {
    [P in keyof T & keyof AggregateBrand]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBrand[P]> : Prisma.GetScalarType<T[P], AggregateBrand[P]>;
};
export type BrandGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BrandWhereInput;
    orderBy?: Prisma.BrandOrderByWithAggregationInput | Prisma.BrandOrderByWithAggregationInput[];
    by: Prisma.BrandScalarFieldEnum[] | Prisma.BrandScalarFieldEnum;
    having?: Prisma.BrandScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BrandCountAggregateInputType | true;
    _avg?: BrandAvgAggregateInputType;
    _sum?: BrandSumAggregateInputType;
    _min?: BrandMinAggregateInputType;
    _max?: BrandMaxAggregateInputType;
};
export type BrandGroupByOutputType = {
    id: number;
    categoryId: number;
    slug: string;
    logo: string | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: BrandCountAggregateOutputType | null;
    _avg: BrandAvgAggregateOutputType | null;
    _sum: BrandSumAggregateOutputType | null;
    _min: BrandMinAggregateOutputType | null;
    _max: BrandMaxAggregateOutputType | null;
};
type GetBrandGroupByPayload<T extends BrandGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BrandGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BrandGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BrandGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BrandGroupByOutputType[P]>;
}>>;
export type BrandWhereInput = {
    AND?: Prisma.BrandWhereInput | Prisma.BrandWhereInput[];
    OR?: Prisma.BrandWhereInput[];
    NOT?: Prisma.BrandWhereInput | Prisma.BrandWhereInput[];
    id?: Prisma.IntFilter<"Brand"> | number;
    categoryId?: Prisma.IntFilter<"Brand"> | number;
    slug?: Prisma.StringFilter<"Brand"> | string;
    logo?: Prisma.StringNullableFilter<"Brand"> | string | null;
    isActive?: Prisma.BoolFilter<"Brand"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Brand"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Brand"> | Date | string;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.CategoryWhereInput>;
    translations?: Prisma.BrandTranslationListRelationFilter;
    models?: Prisma.ModelListRelationFilter;
};
export type BrandOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    logo?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    category?: Prisma.CategoryOrderByWithRelationInput;
    translations?: Prisma.BrandTranslationOrderByRelationAggregateInput;
    models?: Prisma.ModelOrderByRelationAggregateInput;
    _relevance?: Prisma.BrandOrderByRelevanceInput;
};
export type BrandWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    slug?: string;
    AND?: Prisma.BrandWhereInput | Prisma.BrandWhereInput[];
    OR?: Prisma.BrandWhereInput[];
    NOT?: Prisma.BrandWhereInput | Prisma.BrandWhereInput[];
    categoryId?: Prisma.IntFilter<"Brand"> | number;
    logo?: Prisma.StringNullableFilter<"Brand"> | string | null;
    isActive?: Prisma.BoolFilter<"Brand"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Brand"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Brand"> | Date | string;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.CategoryWhereInput>;
    translations?: Prisma.BrandTranslationListRelationFilter;
    models?: Prisma.ModelListRelationFilter;
}, "id" | "slug">;
export type BrandOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    logo?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.BrandCountOrderByAggregateInput;
    _avg?: Prisma.BrandAvgOrderByAggregateInput;
    _max?: Prisma.BrandMaxOrderByAggregateInput;
    _min?: Prisma.BrandMinOrderByAggregateInput;
    _sum?: Prisma.BrandSumOrderByAggregateInput;
};
export type BrandScalarWhereWithAggregatesInput = {
    AND?: Prisma.BrandScalarWhereWithAggregatesInput | Prisma.BrandScalarWhereWithAggregatesInput[];
    OR?: Prisma.BrandScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BrandScalarWhereWithAggregatesInput | Prisma.BrandScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Brand"> | number;
    categoryId?: Prisma.IntWithAggregatesFilter<"Brand"> | number;
    slug?: Prisma.StringWithAggregatesFilter<"Brand"> | string;
    logo?: Prisma.StringNullableWithAggregatesFilter<"Brand"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"Brand"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Brand"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Brand"> | Date | string;
};
export type BrandCreateInput = {
    slug: string;
    logo?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: Prisma.CategoryCreateNestedOneWithoutBrandsInput;
    translations?: Prisma.BrandTranslationCreateNestedManyWithoutBrandInput;
    models?: Prisma.ModelCreateNestedManyWithoutBrandInput;
};
export type BrandUncheckedCreateInput = {
    id?: number;
    categoryId: number;
    slug: string;
    logo?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    translations?: Prisma.BrandTranslationUncheckedCreateNestedManyWithoutBrandInput;
    models?: Prisma.ModelUncheckedCreateNestedManyWithoutBrandInput;
};
export type BrandUpdateInput = {
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneRequiredWithoutBrandsNestedInput;
    translations?: Prisma.BrandTranslationUpdateManyWithoutBrandNestedInput;
    models?: Prisma.ModelUpdateManyWithoutBrandNestedInput;
};
export type BrandUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    translations?: Prisma.BrandTranslationUncheckedUpdateManyWithoutBrandNestedInput;
    models?: Prisma.ModelUncheckedUpdateManyWithoutBrandNestedInput;
};
export type BrandCreateManyInput = {
    id?: number;
    categoryId: number;
    slug: string;
    logo?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BrandUpdateManyMutationInput = {
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BrandUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BrandListRelationFilter = {
    every?: Prisma.BrandWhereInput;
    some?: Prisma.BrandWhereInput;
    none?: Prisma.BrandWhereInput;
};
export type BrandOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BrandOrderByRelevanceInput = {
    fields: Prisma.BrandOrderByRelevanceFieldEnum | Prisma.BrandOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type BrandCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BrandAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
};
export type BrandMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BrandMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    logo?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BrandSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
};
export type BrandScalarRelationFilter = {
    is?: Prisma.BrandWhereInput;
    isNot?: Prisma.BrandWhereInput;
};
export type BrandCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutCategoryInput, Prisma.BrandUncheckedCreateWithoutCategoryInput> | Prisma.BrandCreateWithoutCategoryInput[] | Prisma.BrandUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutCategoryInput | Prisma.BrandCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.BrandCreateManyCategoryInputEnvelope;
    connect?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
};
export type BrandUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutCategoryInput, Prisma.BrandUncheckedCreateWithoutCategoryInput> | Prisma.BrandCreateWithoutCategoryInput[] | Prisma.BrandUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutCategoryInput | Prisma.BrandCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.BrandCreateManyCategoryInputEnvelope;
    connect?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
};
export type BrandUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutCategoryInput, Prisma.BrandUncheckedCreateWithoutCategoryInput> | Prisma.BrandCreateWithoutCategoryInput[] | Prisma.BrandUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutCategoryInput | Prisma.BrandCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.BrandUpsertWithWhereUniqueWithoutCategoryInput | Prisma.BrandUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.BrandCreateManyCategoryInputEnvelope;
    set?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
    disconnect?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
    delete?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
    connect?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
    update?: Prisma.BrandUpdateWithWhereUniqueWithoutCategoryInput | Prisma.BrandUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.BrandUpdateManyWithWhereWithoutCategoryInput | Prisma.BrandUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.BrandScalarWhereInput | Prisma.BrandScalarWhereInput[];
};
export type BrandUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutCategoryInput, Prisma.BrandUncheckedCreateWithoutCategoryInput> | Prisma.BrandCreateWithoutCategoryInput[] | Prisma.BrandUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutCategoryInput | Prisma.BrandCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.BrandUpsertWithWhereUniqueWithoutCategoryInput | Prisma.BrandUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.BrandCreateManyCategoryInputEnvelope;
    set?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
    disconnect?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
    delete?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
    connect?: Prisma.BrandWhereUniqueInput | Prisma.BrandWhereUniqueInput[];
    update?: Prisma.BrandUpdateWithWhereUniqueWithoutCategoryInput | Prisma.BrandUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.BrandUpdateManyWithWhereWithoutCategoryInput | Prisma.BrandUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.BrandScalarWhereInput | Prisma.BrandScalarWhereInput[];
};
export type BrandCreateNestedOneWithoutTranslationsInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutTranslationsInput, Prisma.BrandUncheckedCreateWithoutTranslationsInput>;
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutTranslationsInput;
    connect?: Prisma.BrandWhereUniqueInput;
};
export type BrandUpdateOneRequiredWithoutTranslationsNestedInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutTranslationsInput, Prisma.BrandUncheckedCreateWithoutTranslationsInput>;
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutTranslationsInput;
    upsert?: Prisma.BrandUpsertWithoutTranslationsInput;
    connect?: Prisma.BrandWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BrandUpdateToOneWithWhereWithoutTranslationsInput, Prisma.BrandUpdateWithoutTranslationsInput>, Prisma.BrandUncheckedUpdateWithoutTranslationsInput>;
};
export type BrandCreateNestedOneWithoutModelsInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutModelsInput, Prisma.BrandUncheckedCreateWithoutModelsInput>;
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutModelsInput;
    connect?: Prisma.BrandWhereUniqueInput;
};
export type BrandUpdateOneRequiredWithoutModelsNestedInput = {
    create?: Prisma.XOR<Prisma.BrandCreateWithoutModelsInput, Prisma.BrandUncheckedCreateWithoutModelsInput>;
    connectOrCreate?: Prisma.BrandCreateOrConnectWithoutModelsInput;
    upsert?: Prisma.BrandUpsertWithoutModelsInput;
    connect?: Prisma.BrandWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BrandUpdateToOneWithWhereWithoutModelsInput, Prisma.BrandUpdateWithoutModelsInput>, Prisma.BrandUncheckedUpdateWithoutModelsInput>;
};
export type BrandCreateWithoutCategoryInput = {
    slug: string;
    logo?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    translations?: Prisma.BrandTranslationCreateNestedManyWithoutBrandInput;
    models?: Prisma.ModelCreateNestedManyWithoutBrandInput;
};
export type BrandUncheckedCreateWithoutCategoryInput = {
    id?: number;
    slug: string;
    logo?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    translations?: Prisma.BrandTranslationUncheckedCreateNestedManyWithoutBrandInput;
    models?: Prisma.ModelUncheckedCreateNestedManyWithoutBrandInput;
};
export type BrandCreateOrConnectWithoutCategoryInput = {
    where: Prisma.BrandWhereUniqueInput;
    create: Prisma.XOR<Prisma.BrandCreateWithoutCategoryInput, Prisma.BrandUncheckedCreateWithoutCategoryInput>;
};
export type BrandCreateManyCategoryInputEnvelope = {
    data: Prisma.BrandCreateManyCategoryInput | Prisma.BrandCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type BrandUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.BrandWhereUniqueInput;
    update: Prisma.XOR<Prisma.BrandUpdateWithoutCategoryInput, Prisma.BrandUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.BrandCreateWithoutCategoryInput, Prisma.BrandUncheckedCreateWithoutCategoryInput>;
};
export type BrandUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.BrandWhereUniqueInput;
    data: Prisma.XOR<Prisma.BrandUpdateWithoutCategoryInput, Prisma.BrandUncheckedUpdateWithoutCategoryInput>;
};
export type BrandUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.BrandScalarWhereInput;
    data: Prisma.XOR<Prisma.BrandUpdateManyMutationInput, Prisma.BrandUncheckedUpdateManyWithoutCategoryInput>;
};
export type BrandScalarWhereInput = {
    AND?: Prisma.BrandScalarWhereInput | Prisma.BrandScalarWhereInput[];
    OR?: Prisma.BrandScalarWhereInput[];
    NOT?: Prisma.BrandScalarWhereInput | Prisma.BrandScalarWhereInput[];
    id?: Prisma.IntFilter<"Brand"> | number;
    categoryId?: Prisma.IntFilter<"Brand"> | number;
    slug?: Prisma.StringFilter<"Brand"> | string;
    logo?: Prisma.StringNullableFilter<"Brand"> | string | null;
    isActive?: Prisma.BoolFilter<"Brand"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Brand"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Brand"> | Date | string;
};
export type BrandCreateWithoutTranslationsInput = {
    slug: string;
    logo?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: Prisma.CategoryCreateNestedOneWithoutBrandsInput;
    models?: Prisma.ModelCreateNestedManyWithoutBrandInput;
};
export type BrandUncheckedCreateWithoutTranslationsInput = {
    id?: number;
    categoryId: number;
    slug: string;
    logo?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    models?: Prisma.ModelUncheckedCreateNestedManyWithoutBrandInput;
};
export type BrandCreateOrConnectWithoutTranslationsInput = {
    where: Prisma.BrandWhereUniqueInput;
    create: Prisma.XOR<Prisma.BrandCreateWithoutTranslationsInput, Prisma.BrandUncheckedCreateWithoutTranslationsInput>;
};
export type BrandUpsertWithoutTranslationsInput = {
    update: Prisma.XOR<Prisma.BrandUpdateWithoutTranslationsInput, Prisma.BrandUncheckedUpdateWithoutTranslationsInput>;
    create: Prisma.XOR<Prisma.BrandCreateWithoutTranslationsInput, Prisma.BrandUncheckedCreateWithoutTranslationsInput>;
    where?: Prisma.BrandWhereInput;
};
export type BrandUpdateToOneWithWhereWithoutTranslationsInput = {
    where?: Prisma.BrandWhereInput;
    data: Prisma.XOR<Prisma.BrandUpdateWithoutTranslationsInput, Prisma.BrandUncheckedUpdateWithoutTranslationsInput>;
};
export type BrandUpdateWithoutTranslationsInput = {
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneRequiredWithoutBrandsNestedInput;
    models?: Prisma.ModelUpdateManyWithoutBrandNestedInput;
};
export type BrandUncheckedUpdateWithoutTranslationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    models?: Prisma.ModelUncheckedUpdateManyWithoutBrandNestedInput;
};
export type BrandCreateWithoutModelsInput = {
    slug: string;
    logo?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: Prisma.CategoryCreateNestedOneWithoutBrandsInput;
    translations?: Prisma.BrandTranslationCreateNestedManyWithoutBrandInput;
};
export type BrandUncheckedCreateWithoutModelsInput = {
    id?: number;
    categoryId: number;
    slug: string;
    logo?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    translations?: Prisma.BrandTranslationUncheckedCreateNestedManyWithoutBrandInput;
};
export type BrandCreateOrConnectWithoutModelsInput = {
    where: Prisma.BrandWhereUniqueInput;
    create: Prisma.XOR<Prisma.BrandCreateWithoutModelsInput, Prisma.BrandUncheckedCreateWithoutModelsInput>;
};
export type BrandUpsertWithoutModelsInput = {
    update: Prisma.XOR<Prisma.BrandUpdateWithoutModelsInput, Prisma.BrandUncheckedUpdateWithoutModelsInput>;
    create: Prisma.XOR<Prisma.BrandCreateWithoutModelsInput, Prisma.BrandUncheckedCreateWithoutModelsInput>;
    where?: Prisma.BrandWhereInput;
};
export type BrandUpdateToOneWithWhereWithoutModelsInput = {
    where?: Prisma.BrandWhereInput;
    data: Prisma.XOR<Prisma.BrandUpdateWithoutModelsInput, Prisma.BrandUncheckedUpdateWithoutModelsInput>;
};
export type BrandUpdateWithoutModelsInput = {
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneRequiredWithoutBrandsNestedInput;
    translations?: Prisma.BrandTranslationUpdateManyWithoutBrandNestedInput;
};
export type BrandUncheckedUpdateWithoutModelsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    categoryId?: Prisma.IntFieldUpdateOperationsInput | number;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    translations?: Prisma.BrandTranslationUncheckedUpdateManyWithoutBrandNestedInput;
};
export type BrandCreateManyCategoryInput = {
    id?: number;
    slug: string;
    logo?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BrandUpdateWithoutCategoryInput = {
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    translations?: Prisma.BrandTranslationUpdateManyWithoutBrandNestedInput;
    models?: Prisma.ModelUpdateManyWithoutBrandNestedInput;
};
export type BrandUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    translations?: Prisma.BrandTranslationUncheckedUpdateManyWithoutBrandNestedInput;
    models?: Prisma.ModelUncheckedUpdateManyWithoutBrandNestedInput;
};
export type BrandUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    logo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BrandCountOutputType = {
    translations: number;
    models: number;
};
export type BrandCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    translations?: boolean | BrandCountOutputTypeCountTranslationsArgs;
    models?: boolean | BrandCountOutputTypeCountModelsArgs;
};
export type BrandCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandCountOutputTypeSelect<ExtArgs> | null;
};
export type BrandCountOutputTypeCountTranslationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BrandTranslationWhereInput;
};
export type BrandCountOutputTypeCountModelsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ModelWhereInput;
};
export type BrandSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    categoryId?: boolean;
    slug?: boolean;
    logo?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    translations?: boolean | Prisma.Brand$translationsArgs<ExtArgs>;
    models?: boolean | Prisma.Brand$modelsArgs<ExtArgs>;
    _count?: boolean | Prisma.BrandCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["brand"]>;
export type BrandSelectScalar = {
    id?: boolean;
    categoryId?: boolean;
    slug?: boolean;
    logo?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type BrandOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "categoryId" | "slug" | "logo" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["brand"]>;
export type BrandInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    translations?: boolean | Prisma.Brand$translationsArgs<ExtArgs>;
    models?: boolean | Prisma.Brand$modelsArgs<ExtArgs>;
    _count?: boolean | Prisma.BrandCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $BrandPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Brand";
    objects: {
        category: Prisma.$CategoryPayload<ExtArgs>;
        translations: Prisma.$BrandTranslationPayload<ExtArgs>[];
        models: Prisma.$ModelPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        categoryId: number;
        slug: string;
        logo: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["brand"]>;
    composites: {};
};
export type BrandGetPayload<S extends boolean | null | undefined | BrandDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BrandPayload, S>;
export type BrandCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BrandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BrandCountAggregateInputType | true;
};
export interface BrandDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Brand'];
        meta: {
            name: 'Brand';
        };
    };
    findUnique<T extends BrandFindUniqueArgs>(args: Prisma.SelectSubset<T, BrandFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BrandClient<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BrandFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BrandFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BrandClient<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BrandFindFirstArgs>(args?: Prisma.SelectSubset<T, BrandFindFirstArgs<ExtArgs>>): Prisma.Prisma__BrandClient<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BrandFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BrandFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BrandClient<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BrandFindManyArgs>(args?: Prisma.SelectSubset<T, BrandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BrandCreateArgs>(args: Prisma.SelectSubset<T, BrandCreateArgs<ExtArgs>>): Prisma.Prisma__BrandClient<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BrandCreateManyArgs>(args?: Prisma.SelectSubset<T, BrandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends BrandDeleteArgs>(args: Prisma.SelectSubset<T, BrandDeleteArgs<ExtArgs>>): Prisma.Prisma__BrandClient<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BrandUpdateArgs>(args: Prisma.SelectSubset<T, BrandUpdateArgs<ExtArgs>>): Prisma.Prisma__BrandClient<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BrandDeleteManyArgs>(args?: Prisma.SelectSubset<T, BrandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BrandUpdateManyArgs>(args: Prisma.SelectSubset<T, BrandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends BrandUpsertArgs>(args: Prisma.SelectSubset<T, BrandUpsertArgs<ExtArgs>>): Prisma.Prisma__BrandClient<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BrandCountArgs>(args?: Prisma.Subset<T, BrandCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BrandCountAggregateOutputType> : number>;
    aggregate<T extends BrandAggregateArgs>(args: Prisma.Subset<T, BrandAggregateArgs>): Prisma.PrismaPromise<GetBrandAggregateType<T>>;
    groupBy<T extends BrandGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BrandGroupByArgs['orderBy'];
    } : {
        orderBy?: BrandGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BrandFieldRefs;
}
export interface Prisma__BrandClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    category<T extends Prisma.CategoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategoryDefaultArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    translations<T extends Prisma.Brand$translationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Brand$translationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrandTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    models<T extends Prisma.Brand$modelsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Brand$modelsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BrandFieldRefs {
    readonly id: Prisma.FieldRef<"Brand", 'Int'>;
    readonly categoryId: Prisma.FieldRef<"Brand", 'Int'>;
    readonly slug: Prisma.FieldRef<"Brand", 'String'>;
    readonly logo: Prisma.FieldRef<"Brand", 'String'>;
    readonly isActive: Prisma.FieldRef<"Brand", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Brand", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Brand", 'DateTime'>;
}
export type BrandFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandSelect<ExtArgs> | null;
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    include?: Prisma.BrandInclude<ExtArgs> | null;
    where: Prisma.BrandWhereUniqueInput;
};
export type BrandFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandSelect<ExtArgs> | null;
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    include?: Prisma.BrandInclude<ExtArgs> | null;
    where: Prisma.BrandWhereUniqueInput;
};
export type BrandFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandSelect<ExtArgs> | null;
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    include?: Prisma.BrandInclude<ExtArgs> | null;
    where?: Prisma.BrandWhereInput;
    orderBy?: Prisma.BrandOrderByWithRelationInput | Prisma.BrandOrderByWithRelationInput[];
    cursor?: Prisma.BrandWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BrandScalarFieldEnum | Prisma.BrandScalarFieldEnum[];
};
export type BrandFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandSelect<ExtArgs> | null;
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    include?: Prisma.BrandInclude<ExtArgs> | null;
    where?: Prisma.BrandWhereInput;
    orderBy?: Prisma.BrandOrderByWithRelationInput | Prisma.BrandOrderByWithRelationInput[];
    cursor?: Prisma.BrandWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BrandScalarFieldEnum | Prisma.BrandScalarFieldEnum[];
};
export type BrandFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandSelect<ExtArgs> | null;
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    include?: Prisma.BrandInclude<ExtArgs> | null;
    where?: Prisma.BrandWhereInput;
    orderBy?: Prisma.BrandOrderByWithRelationInput | Prisma.BrandOrderByWithRelationInput[];
    cursor?: Prisma.BrandWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BrandScalarFieldEnum | Prisma.BrandScalarFieldEnum[];
};
export type BrandCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandSelect<ExtArgs> | null;
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    include?: Prisma.BrandInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BrandCreateInput, Prisma.BrandUncheckedCreateInput>;
};
export type BrandCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BrandCreateManyInput | Prisma.BrandCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BrandUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandSelect<ExtArgs> | null;
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    include?: Prisma.BrandInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BrandUpdateInput, Prisma.BrandUncheckedUpdateInput>;
    where: Prisma.BrandWhereUniqueInput;
};
export type BrandUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BrandUpdateManyMutationInput, Prisma.BrandUncheckedUpdateManyInput>;
    where?: Prisma.BrandWhereInput;
    limit?: number;
};
export type BrandUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandSelect<ExtArgs> | null;
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    include?: Prisma.BrandInclude<ExtArgs> | null;
    where: Prisma.BrandWhereUniqueInput;
    create: Prisma.XOR<Prisma.BrandCreateInput, Prisma.BrandUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BrandUpdateInput, Prisma.BrandUncheckedUpdateInput>;
};
export type BrandDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandSelect<ExtArgs> | null;
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    include?: Prisma.BrandInclude<ExtArgs> | null;
    where: Prisma.BrandWhereUniqueInput;
};
export type BrandDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BrandWhereInput;
    limit?: number;
};
export type Brand$translationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Brand$modelsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModelSelect<ExtArgs> | null;
    omit?: Prisma.ModelOmit<ExtArgs> | null;
    include?: Prisma.ModelInclude<ExtArgs> | null;
    where?: Prisma.ModelWhereInput;
    orderBy?: Prisma.ModelOrderByWithRelationInput | Prisma.ModelOrderByWithRelationInput[];
    cursor?: Prisma.ModelWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ModelScalarFieldEnum | Prisma.ModelScalarFieldEnum[];
};
export type BrandDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BrandSelect<ExtArgs> | null;
    omit?: Prisma.BrandOmit<ExtArgs> | null;
    include?: Prisma.BrandInclude<ExtArgs> | null;
};
export {};
