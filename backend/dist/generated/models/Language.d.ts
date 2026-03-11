import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type LanguageModel = runtime.Types.Result.DefaultSelection<Prisma.$LanguagePayload>;
export type AggregateLanguage = {
    _count: LanguageCountAggregateOutputType | null;
    _avg: LanguageAvgAggregateOutputType | null;
    _sum: LanguageSumAggregateOutputType | null;
    _min: LanguageMinAggregateOutputType | null;
    _max: LanguageMaxAggregateOutputType | null;
};
export type LanguageAvgAggregateOutputType = {
    id: number | null;
};
export type LanguageSumAggregateOutputType = {
    id: number | null;
};
export type LanguageMinAggregateOutputType = {
    id: number | null;
    code: string | null;
    name: string | null;
    isDefault: boolean | null;
    isActive: boolean | null;
};
export type LanguageMaxAggregateOutputType = {
    id: number | null;
    code: string | null;
    name: string | null;
    isDefault: boolean | null;
    isActive: boolean | null;
};
export type LanguageCountAggregateOutputType = {
    id: number;
    code: number;
    name: number;
    isDefault: number;
    isActive: number;
    _all: number;
};
export type LanguageAvgAggregateInputType = {
    id?: true;
};
export type LanguageSumAggregateInputType = {
    id?: true;
};
export type LanguageMinAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    isDefault?: true;
    isActive?: true;
};
export type LanguageMaxAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    isDefault?: true;
    isActive?: true;
};
export type LanguageCountAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    isDefault?: true;
    isActive?: true;
    _all?: true;
};
export type LanguageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LanguageWhereInput;
    orderBy?: Prisma.LanguageOrderByWithRelationInput | Prisma.LanguageOrderByWithRelationInput[];
    cursor?: Prisma.LanguageWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LanguageCountAggregateInputType;
    _avg?: LanguageAvgAggregateInputType;
    _sum?: LanguageSumAggregateInputType;
    _min?: LanguageMinAggregateInputType;
    _max?: LanguageMaxAggregateInputType;
};
export type GetLanguageAggregateType<T extends LanguageAggregateArgs> = {
    [P in keyof T & keyof AggregateLanguage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLanguage[P]> : Prisma.GetScalarType<T[P], AggregateLanguage[P]>;
};
export type LanguageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LanguageWhereInput;
    orderBy?: Prisma.LanguageOrderByWithAggregationInput | Prisma.LanguageOrderByWithAggregationInput[];
    by: Prisma.LanguageScalarFieldEnum[] | Prisma.LanguageScalarFieldEnum;
    having?: Prisma.LanguageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LanguageCountAggregateInputType | true;
    _avg?: LanguageAvgAggregateInputType;
    _sum?: LanguageSumAggregateInputType;
    _min?: LanguageMinAggregateInputType;
    _max?: LanguageMaxAggregateInputType;
};
export type LanguageGroupByOutputType = {
    id: number;
    code: string;
    name: string;
    isDefault: boolean;
    isActive: boolean;
    _count: LanguageCountAggregateOutputType | null;
    _avg: LanguageAvgAggregateOutputType | null;
    _sum: LanguageSumAggregateOutputType | null;
    _min: LanguageMinAggregateOutputType | null;
    _max: LanguageMaxAggregateOutputType | null;
};
type GetLanguageGroupByPayload<T extends LanguageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LanguageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LanguageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LanguageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LanguageGroupByOutputType[P]>;
}>>;
export type LanguageWhereInput = {
    AND?: Prisma.LanguageWhereInput | Prisma.LanguageWhereInput[];
    OR?: Prisma.LanguageWhereInput[];
    NOT?: Prisma.LanguageWhereInput | Prisma.LanguageWhereInput[];
    id?: Prisma.IntFilter<"Language"> | number;
    code?: Prisma.StringFilter<"Language"> | string;
    name?: Prisma.StringFilter<"Language"> | string;
    isDefault?: Prisma.BoolFilter<"Language"> | boolean;
    isActive?: Prisma.BoolFilter<"Language"> | boolean;
    categoryTranslations?: Prisma.CategoryTranslationListRelationFilter;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationListRelationFilter;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationListRelationFilter;
    brandTranslations?: Prisma.BrandTranslationListRelationFilter;
    modelTranslations?: Prisma.ModelTranslationListRelationFilter;
    specificationTranslations?: Prisma.SpecificationTranslationListRelationFilter;
    chargingStationTranslations?: Prisma.ChargingStationTranslationListRelationFilter;
    articleTranslations?: Prisma.ArticleTranslationListRelationFilter;
};
export type LanguageOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    categoryTranslations?: Prisma.CategoryTranslationOrderByRelationAggregateInput;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationOrderByRelationAggregateInput;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationOrderByRelationAggregateInput;
    brandTranslations?: Prisma.BrandTranslationOrderByRelationAggregateInput;
    modelTranslations?: Prisma.ModelTranslationOrderByRelationAggregateInput;
    specificationTranslations?: Prisma.SpecificationTranslationOrderByRelationAggregateInput;
    chargingStationTranslations?: Prisma.ChargingStationTranslationOrderByRelationAggregateInput;
    articleTranslations?: Prisma.ArticleTranslationOrderByRelationAggregateInput;
    _relevance?: Prisma.LanguageOrderByRelevanceInput;
};
export type LanguageWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    code?: string;
    AND?: Prisma.LanguageWhereInput | Prisma.LanguageWhereInput[];
    OR?: Prisma.LanguageWhereInput[];
    NOT?: Prisma.LanguageWhereInput | Prisma.LanguageWhereInput[];
    name?: Prisma.StringFilter<"Language"> | string;
    isDefault?: Prisma.BoolFilter<"Language"> | boolean;
    isActive?: Prisma.BoolFilter<"Language"> | boolean;
    categoryTranslations?: Prisma.CategoryTranslationListRelationFilter;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationListRelationFilter;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationListRelationFilter;
    brandTranslations?: Prisma.BrandTranslationListRelationFilter;
    modelTranslations?: Prisma.ModelTranslationListRelationFilter;
    specificationTranslations?: Prisma.SpecificationTranslationListRelationFilter;
    chargingStationTranslations?: Prisma.ChargingStationTranslationListRelationFilter;
    articleTranslations?: Prisma.ArticleTranslationListRelationFilter;
}, "id" | "code">;
export type LanguageOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    _count?: Prisma.LanguageCountOrderByAggregateInput;
    _avg?: Prisma.LanguageAvgOrderByAggregateInput;
    _max?: Prisma.LanguageMaxOrderByAggregateInput;
    _min?: Prisma.LanguageMinOrderByAggregateInput;
    _sum?: Prisma.LanguageSumOrderByAggregateInput;
};
export type LanguageScalarWhereWithAggregatesInput = {
    AND?: Prisma.LanguageScalarWhereWithAggregatesInput | Prisma.LanguageScalarWhereWithAggregatesInput[];
    OR?: Prisma.LanguageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LanguageScalarWhereWithAggregatesInput | Prisma.LanguageScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Language"> | number;
    code?: Prisma.StringWithAggregatesFilter<"Language"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Language"> | string;
    isDefault?: Prisma.BoolWithAggregatesFilter<"Language"> | boolean;
    isActive?: Prisma.BoolWithAggregatesFilter<"Language"> | boolean;
};
export type LanguageCreateInput = {
    code: string;
    name: string;
    isDefault?: boolean;
    isActive?: boolean;
    categoryTranslations?: Prisma.CategoryTranslationCreateNestedManyWithoutLanguageInput;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationCreateNestedManyWithoutLanguageInput;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationCreateNestedManyWithoutLanguageInput;
    brandTranslations?: Prisma.BrandTranslationCreateNestedManyWithoutLanguageInput;
    modelTranslations?: Prisma.ModelTranslationCreateNestedManyWithoutLanguageInput;
    specificationTranslations?: Prisma.SpecificationTranslationCreateNestedManyWithoutLanguageInput;
    chargingStationTranslations?: Prisma.ChargingStationTranslationCreateNestedManyWithoutLanguageInput;
    articleTranslations?: Prisma.ArticleTranslationCreateNestedManyWithoutLanguageInput;
};
export type LanguageUncheckedCreateInput = {
    id?: number;
    code: string;
    name: string;
    isDefault?: boolean;
    isActive?: boolean;
    categoryTranslations?: Prisma.CategoryTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    brandTranslations?: Prisma.BrandTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    modelTranslations?: Prisma.ModelTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    specificationTranslations?: Prisma.SpecificationTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    chargingStationTranslations?: Prisma.ChargingStationTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    articleTranslations?: Prisma.ArticleTranslationUncheckedCreateNestedManyWithoutLanguageInput;
};
export type LanguageUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categoryTranslations?: Prisma.CategoryTranslationUpdateManyWithoutLanguageNestedInput;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationUpdateManyWithoutLanguageNestedInput;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationUpdateManyWithoutLanguageNestedInput;
    brandTranslations?: Prisma.BrandTranslationUpdateManyWithoutLanguageNestedInput;
    modelTranslations?: Prisma.ModelTranslationUpdateManyWithoutLanguageNestedInput;
    specificationTranslations?: Prisma.SpecificationTranslationUpdateManyWithoutLanguageNestedInput;
    chargingStationTranslations?: Prisma.ChargingStationTranslationUpdateManyWithoutLanguageNestedInput;
    articleTranslations?: Prisma.ArticleTranslationUpdateManyWithoutLanguageNestedInput;
};
export type LanguageUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categoryTranslations?: Prisma.CategoryTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    brandTranslations?: Prisma.BrandTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    modelTranslations?: Prisma.ModelTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    specificationTranslations?: Prisma.SpecificationTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    chargingStationTranslations?: Prisma.ChargingStationTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    articleTranslations?: Prisma.ArticleTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
};
export type LanguageCreateManyInput = {
    id?: number;
    code: string;
    name: string;
    isDefault?: boolean;
    isActive?: boolean;
};
export type LanguageUpdateManyMutationInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type LanguageUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type LanguageOrderByRelevanceInput = {
    fields: Prisma.LanguageOrderByRelevanceFieldEnum | Prisma.LanguageOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type LanguageCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type LanguageAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type LanguageMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type LanguageMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    isDefault?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
};
export type LanguageSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type LanguageScalarRelationFilter = {
    is?: Prisma.LanguageWhereInput;
    isNot?: Prisma.LanguageWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type LanguageCreateNestedOneWithoutCategoryTranslationsInput = {
    create?: Prisma.XOR<Prisma.LanguageCreateWithoutCategoryTranslationsInput, Prisma.LanguageUncheckedCreateWithoutCategoryTranslationsInput>;
    connectOrCreate?: Prisma.LanguageCreateOrConnectWithoutCategoryTranslationsInput;
    connect?: Prisma.LanguageWhereUniqueInput;
};
export type LanguageUpdateOneRequiredWithoutCategoryTranslationsNestedInput = {
    create?: Prisma.XOR<Prisma.LanguageCreateWithoutCategoryTranslationsInput, Prisma.LanguageUncheckedCreateWithoutCategoryTranslationsInput>;
    connectOrCreate?: Prisma.LanguageCreateOrConnectWithoutCategoryTranslationsInput;
    upsert?: Prisma.LanguageUpsertWithoutCategoryTranslationsInput;
    connect?: Prisma.LanguageWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LanguageUpdateToOneWithWhereWithoutCategoryTranslationsInput, Prisma.LanguageUpdateWithoutCategoryTranslationsInput>, Prisma.LanguageUncheckedUpdateWithoutCategoryTranslationsInput>;
};
export type LanguageCreateNestedOneWithoutFuelTypeTranslationsInput = {
    create?: Prisma.XOR<Prisma.LanguageCreateWithoutFuelTypeTranslationsInput, Prisma.LanguageUncheckedCreateWithoutFuelTypeTranslationsInput>;
    connectOrCreate?: Prisma.LanguageCreateOrConnectWithoutFuelTypeTranslationsInput;
    connect?: Prisma.LanguageWhereUniqueInput;
};
export type LanguageUpdateOneRequiredWithoutFuelTypeTranslationsNestedInput = {
    create?: Prisma.XOR<Prisma.LanguageCreateWithoutFuelTypeTranslationsInput, Prisma.LanguageUncheckedCreateWithoutFuelTypeTranslationsInput>;
    connectOrCreate?: Prisma.LanguageCreateOrConnectWithoutFuelTypeTranslationsInput;
    upsert?: Prisma.LanguageUpsertWithoutFuelTypeTranslationsInput;
    connect?: Prisma.LanguageWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LanguageUpdateToOneWithWhereWithoutFuelTypeTranslationsInput, Prisma.LanguageUpdateWithoutFuelTypeTranslationsInput>, Prisma.LanguageUncheckedUpdateWithoutFuelTypeTranslationsInput>;
};
export type LanguageCreateNestedOneWithoutBodyTypeTranslationsInput = {
    create?: Prisma.XOR<Prisma.LanguageCreateWithoutBodyTypeTranslationsInput, Prisma.LanguageUncheckedCreateWithoutBodyTypeTranslationsInput>;
    connectOrCreate?: Prisma.LanguageCreateOrConnectWithoutBodyTypeTranslationsInput;
    connect?: Prisma.LanguageWhereUniqueInput;
};
export type LanguageUpdateOneRequiredWithoutBodyTypeTranslationsNestedInput = {
    create?: Prisma.XOR<Prisma.LanguageCreateWithoutBodyTypeTranslationsInput, Prisma.LanguageUncheckedCreateWithoutBodyTypeTranslationsInput>;
    connectOrCreate?: Prisma.LanguageCreateOrConnectWithoutBodyTypeTranslationsInput;
    upsert?: Prisma.LanguageUpsertWithoutBodyTypeTranslationsInput;
    connect?: Prisma.LanguageWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LanguageUpdateToOneWithWhereWithoutBodyTypeTranslationsInput, Prisma.LanguageUpdateWithoutBodyTypeTranslationsInput>, Prisma.LanguageUncheckedUpdateWithoutBodyTypeTranslationsInput>;
};
export type LanguageCreateNestedOneWithoutBrandTranslationsInput = {
    create?: Prisma.XOR<Prisma.LanguageCreateWithoutBrandTranslationsInput, Prisma.LanguageUncheckedCreateWithoutBrandTranslationsInput>;
    connectOrCreate?: Prisma.LanguageCreateOrConnectWithoutBrandTranslationsInput;
    connect?: Prisma.LanguageWhereUniqueInput;
};
export type LanguageUpdateOneRequiredWithoutBrandTranslationsNestedInput = {
    create?: Prisma.XOR<Prisma.LanguageCreateWithoutBrandTranslationsInput, Prisma.LanguageUncheckedCreateWithoutBrandTranslationsInput>;
    connectOrCreate?: Prisma.LanguageCreateOrConnectWithoutBrandTranslationsInput;
    upsert?: Prisma.LanguageUpsertWithoutBrandTranslationsInput;
    connect?: Prisma.LanguageWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LanguageUpdateToOneWithWhereWithoutBrandTranslationsInput, Prisma.LanguageUpdateWithoutBrandTranslationsInput>, Prisma.LanguageUncheckedUpdateWithoutBrandTranslationsInput>;
};
export type LanguageCreateNestedOneWithoutModelTranslationsInput = {
    create?: Prisma.XOR<Prisma.LanguageCreateWithoutModelTranslationsInput, Prisma.LanguageUncheckedCreateWithoutModelTranslationsInput>;
    connectOrCreate?: Prisma.LanguageCreateOrConnectWithoutModelTranslationsInput;
    connect?: Prisma.LanguageWhereUniqueInput;
};
export type LanguageUpdateOneRequiredWithoutModelTranslationsNestedInput = {
    create?: Prisma.XOR<Prisma.LanguageCreateWithoutModelTranslationsInput, Prisma.LanguageUncheckedCreateWithoutModelTranslationsInput>;
    connectOrCreate?: Prisma.LanguageCreateOrConnectWithoutModelTranslationsInput;
    upsert?: Prisma.LanguageUpsertWithoutModelTranslationsInput;
    connect?: Prisma.LanguageWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LanguageUpdateToOneWithWhereWithoutModelTranslationsInput, Prisma.LanguageUpdateWithoutModelTranslationsInput>, Prisma.LanguageUncheckedUpdateWithoutModelTranslationsInput>;
};
export type LanguageCreateNestedOneWithoutSpecificationTranslationsInput = {
    create?: Prisma.XOR<Prisma.LanguageCreateWithoutSpecificationTranslationsInput, Prisma.LanguageUncheckedCreateWithoutSpecificationTranslationsInput>;
    connectOrCreate?: Prisma.LanguageCreateOrConnectWithoutSpecificationTranslationsInput;
    connect?: Prisma.LanguageWhereUniqueInput;
};
export type LanguageUpdateOneRequiredWithoutSpecificationTranslationsNestedInput = {
    create?: Prisma.XOR<Prisma.LanguageCreateWithoutSpecificationTranslationsInput, Prisma.LanguageUncheckedCreateWithoutSpecificationTranslationsInput>;
    connectOrCreate?: Prisma.LanguageCreateOrConnectWithoutSpecificationTranslationsInput;
    upsert?: Prisma.LanguageUpsertWithoutSpecificationTranslationsInput;
    connect?: Prisma.LanguageWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LanguageUpdateToOneWithWhereWithoutSpecificationTranslationsInput, Prisma.LanguageUpdateWithoutSpecificationTranslationsInput>, Prisma.LanguageUncheckedUpdateWithoutSpecificationTranslationsInput>;
};
export type LanguageCreateNestedOneWithoutChargingStationTranslationsInput = {
    create?: Prisma.XOR<Prisma.LanguageCreateWithoutChargingStationTranslationsInput, Prisma.LanguageUncheckedCreateWithoutChargingStationTranslationsInput>;
    connectOrCreate?: Prisma.LanguageCreateOrConnectWithoutChargingStationTranslationsInput;
    connect?: Prisma.LanguageWhereUniqueInput;
};
export type LanguageUpdateOneRequiredWithoutChargingStationTranslationsNestedInput = {
    create?: Prisma.XOR<Prisma.LanguageCreateWithoutChargingStationTranslationsInput, Prisma.LanguageUncheckedCreateWithoutChargingStationTranslationsInput>;
    connectOrCreate?: Prisma.LanguageCreateOrConnectWithoutChargingStationTranslationsInput;
    upsert?: Prisma.LanguageUpsertWithoutChargingStationTranslationsInput;
    connect?: Prisma.LanguageWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LanguageUpdateToOneWithWhereWithoutChargingStationTranslationsInput, Prisma.LanguageUpdateWithoutChargingStationTranslationsInput>, Prisma.LanguageUncheckedUpdateWithoutChargingStationTranslationsInput>;
};
export type LanguageCreateNestedOneWithoutArticleTranslationsInput = {
    create?: Prisma.XOR<Prisma.LanguageCreateWithoutArticleTranslationsInput, Prisma.LanguageUncheckedCreateWithoutArticleTranslationsInput>;
    connectOrCreate?: Prisma.LanguageCreateOrConnectWithoutArticleTranslationsInput;
    connect?: Prisma.LanguageWhereUniqueInput;
};
export type LanguageUpdateOneRequiredWithoutArticleTranslationsNestedInput = {
    create?: Prisma.XOR<Prisma.LanguageCreateWithoutArticleTranslationsInput, Prisma.LanguageUncheckedCreateWithoutArticleTranslationsInput>;
    connectOrCreate?: Prisma.LanguageCreateOrConnectWithoutArticleTranslationsInput;
    upsert?: Prisma.LanguageUpsertWithoutArticleTranslationsInput;
    connect?: Prisma.LanguageWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LanguageUpdateToOneWithWhereWithoutArticleTranslationsInput, Prisma.LanguageUpdateWithoutArticleTranslationsInput>, Prisma.LanguageUncheckedUpdateWithoutArticleTranslationsInput>;
};
export type LanguageCreateWithoutCategoryTranslationsInput = {
    code: string;
    name: string;
    isDefault?: boolean;
    isActive?: boolean;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationCreateNestedManyWithoutLanguageInput;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationCreateNestedManyWithoutLanguageInput;
    brandTranslations?: Prisma.BrandTranslationCreateNestedManyWithoutLanguageInput;
    modelTranslations?: Prisma.ModelTranslationCreateNestedManyWithoutLanguageInput;
    specificationTranslations?: Prisma.SpecificationTranslationCreateNestedManyWithoutLanguageInput;
    chargingStationTranslations?: Prisma.ChargingStationTranslationCreateNestedManyWithoutLanguageInput;
    articleTranslations?: Prisma.ArticleTranslationCreateNestedManyWithoutLanguageInput;
};
export type LanguageUncheckedCreateWithoutCategoryTranslationsInput = {
    id?: number;
    code: string;
    name: string;
    isDefault?: boolean;
    isActive?: boolean;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    brandTranslations?: Prisma.BrandTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    modelTranslations?: Prisma.ModelTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    specificationTranslations?: Prisma.SpecificationTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    chargingStationTranslations?: Prisma.ChargingStationTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    articleTranslations?: Prisma.ArticleTranslationUncheckedCreateNestedManyWithoutLanguageInput;
};
export type LanguageCreateOrConnectWithoutCategoryTranslationsInput = {
    where: Prisma.LanguageWhereUniqueInput;
    create: Prisma.XOR<Prisma.LanguageCreateWithoutCategoryTranslationsInput, Prisma.LanguageUncheckedCreateWithoutCategoryTranslationsInput>;
};
export type LanguageUpsertWithoutCategoryTranslationsInput = {
    update: Prisma.XOR<Prisma.LanguageUpdateWithoutCategoryTranslationsInput, Prisma.LanguageUncheckedUpdateWithoutCategoryTranslationsInput>;
    create: Prisma.XOR<Prisma.LanguageCreateWithoutCategoryTranslationsInput, Prisma.LanguageUncheckedCreateWithoutCategoryTranslationsInput>;
    where?: Prisma.LanguageWhereInput;
};
export type LanguageUpdateToOneWithWhereWithoutCategoryTranslationsInput = {
    where?: Prisma.LanguageWhereInput;
    data: Prisma.XOR<Prisma.LanguageUpdateWithoutCategoryTranslationsInput, Prisma.LanguageUncheckedUpdateWithoutCategoryTranslationsInput>;
};
export type LanguageUpdateWithoutCategoryTranslationsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationUpdateManyWithoutLanguageNestedInput;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationUpdateManyWithoutLanguageNestedInput;
    brandTranslations?: Prisma.BrandTranslationUpdateManyWithoutLanguageNestedInput;
    modelTranslations?: Prisma.ModelTranslationUpdateManyWithoutLanguageNestedInput;
    specificationTranslations?: Prisma.SpecificationTranslationUpdateManyWithoutLanguageNestedInput;
    chargingStationTranslations?: Prisma.ChargingStationTranslationUpdateManyWithoutLanguageNestedInput;
    articleTranslations?: Prisma.ArticleTranslationUpdateManyWithoutLanguageNestedInput;
};
export type LanguageUncheckedUpdateWithoutCategoryTranslationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    brandTranslations?: Prisma.BrandTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    modelTranslations?: Prisma.ModelTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    specificationTranslations?: Prisma.SpecificationTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    chargingStationTranslations?: Prisma.ChargingStationTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    articleTranslations?: Prisma.ArticleTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
};
export type LanguageCreateWithoutFuelTypeTranslationsInput = {
    code: string;
    name: string;
    isDefault?: boolean;
    isActive?: boolean;
    categoryTranslations?: Prisma.CategoryTranslationCreateNestedManyWithoutLanguageInput;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationCreateNestedManyWithoutLanguageInput;
    brandTranslations?: Prisma.BrandTranslationCreateNestedManyWithoutLanguageInput;
    modelTranslations?: Prisma.ModelTranslationCreateNestedManyWithoutLanguageInput;
    specificationTranslations?: Prisma.SpecificationTranslationCreateNestedManyWithoutLanguageInput;
    chargingStationTranslations?: Prisma.ChargingStationTranslationCreateNestedManyWithoutLanguageInput;
    articleTranslations?: Prisma.ArticleTranslationCreateNestedManyWithoutLanguageInput;
};
export type LanguageUncheckedCreateWithoutFuelTypeTranslationsInput = {
    id?: number;
    code: string;
    name: string;
    isDefault?: boolean;
    isActive?: boolean;
    categoryTranslations?: Prisma.CategoryTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    brandTranslations?: Prisma.BrandTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    modelTranslations?: Prisma.ModelTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    specificationTranslations?: Prisma.SpecificationTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    chargingStationTranslations?: Prisma.ChargingStationTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    articleTranslations?: Prisma.ArticleTranslationUncheckedCreateNestedManyWithoutLanguageInput;
};
export type LanguageCreateOrConnectWithoutFuelTypeTranslationsInput = {
    where: Prisma.LanguageWhereUniqueInput;
    create: Prisma.XOR<Prisma.LanguageCreateWithoutFuelTypeTranslationsInput, Prisma.LanguageUncheckedCreateWithoutFuelTypeTranslationsInput>;
};
export type LanguageUpsertWithoutFuelTypeTranslationsInput = {
    update: Prisma.XOR<Prisma.LanguageUpdateWithoutFuelTypeTranslationsInput, Prisma.LanguageUncheckedUpdateWithoutFuelTypeTranslationsInput>;
    create: Prisma.XOR<Prisma.LanguageCreateWithoutFuelTypeTranslationsInput, Prisma.LanguageUncheckedCreateWithoutFuelTypeTranslationsInput>;
    where?: Prisma.LanguageWhereInput;
};
export type LanguageUpdateToOneWithWhereWithoutFuelTypeTranslationsInput = {
    where?: Prisma.LanguageWhereInput;
    data: Prisma.XOR<Prisma.LanguageUpdateWithoutFuelTypeTranslationsInput, Prisma.LanguageUncheckedUpdateWithoutFuelTypeTranslationsInput>;
};
export type LanguageUpdateWithoutFuelTypeTranslationsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categoryTranslations?: Prisma.CategoryTranslationUpdateManyWithoutLanguageNestedInput;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationUpdateManyWithoutLanguageNestedInput;
    brandTranslations?: Prisma.BrandTranslationUpdateManyWithoutLanguageNestedInput;
    modelTranslations?: Prisma.ModelTranslationUpdateManyWithoutLanguageNestedInput;
    specificationTranslations?: Prisma.SpecificationTranslationUpdateManyWithoutLanguageNestedInput;
    chargingStationTranslations?: Prisma.ChargingStationTranslationUpdateManyWithoutLanguageNestedInput;
    articleTranslations?: Prisma.ArticleTranslationUpdateManyWithoutLanguageNestedInput;
};
export type LanguageUncheckedUpdateWithoutFuelTypeTranslationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categoryTranslations?: Prisma.CategoryTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    brandTranslations?: Prisma.BrandTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    modelTranslations?: Prisma.ModelTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    specificationTranslations?: Prisma.SpecificationTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    chargingStationTranslations?: Prisma.ChargingStationTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    articleTranslations?: Prisma.ArticleTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
};
export type LanguageCreateWithoutBodyTypeTranslationsInput = {
    code: string;
    name: string;
    isDefault?: boolean;
    isActive?: boolean;
    categoryTranslations?: Prisma.CategoryTranslationCreateNestedManyWithoutLanguageInput;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationCreateNestedManyWithoutLanguageInput;
    brandTranslations?: Prisma.BrandTranslationCreateNestedManyWithoutLanguageInput;
    modelTranslations?: Prisma.ModelTranslationCreateNestedManyWithoutLanguageInput;
    specificationTranslations?: Prisma.SpecificationTranslationCreateNestedManyWithoutLanguageInput;
    chargingStationTranslations?: Prisma.ChargingStationTranslationCreateNestedManyWithoutLanguageInput;
    articleTranslations?: Prisma.ArticleTranslationCreateNestedManyWithoutLanguageInput;
};
export type LanguageUncheckedCreateWithoutBodyTypeTranslationsInput = {
    id?: number;
    code: string;
    name: string;
    isDefault?: boolean;
    isActive?: boolean;
    categoryTranslations?: Prisma.CategoryTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    brandTranslations?: Prisma.BrandTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    modelTranslations?: Prisma.ModelTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    specificationTranslations?: Prisma.SpecificationTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    chargingStationTranslations?: Prisma.ChargingStationTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    articleTranslations?: Prisma.ArticleTranslationUncheckedCreateNestedManyWithoutLanguageInput;
};
export type LanguageCreateOrConnectWithoutBodyTypeTranslationsInput = {
    where: Prisma.LanguageWhereUniqueInput;
    create: Prisma.XOR<Prisma.LanguageCreateWithoutBodyTypeTranslationsInput, Prisma.LanguageUncheckedCreateWithoutBodyTypeTranslationsInput>;
};
export type LanguageUpsertWithoutBodyTypeTranslationsInput = {
    update: Prisma.XOR<Prisma.LanguageUpdateWithoutBodyTypeTranslationsInput, Prisma.LanguageUncheckedUpdateWithoutBodyTypeTranslationsInput>;
    create: Prisma.XOR<Prisma.LanguageCreateWithoutBodyTypeTranslationsInput, Prisma.LanguageUncheckedCreateWithoutBodyTypeTranslationsInput>;
    where?: Prisma.LanguageWhereInput;
};
export type LanguageUpdateToOneWithWhereWithoutBodyTypeTranslationsInput = {
    where?: Prisma.LanguageWhereInput;
    data: Prisma.XOR<Prisma.LanguageUpdateWithoutBodyTypeTranslationsInput, Prisma.LanguageUncheckedUpdateWithoutBodyTypeTranslationsInput>;
};
export type LanguageUpdateWithoutBodyTypeTranslationsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categoryTranslations?: Prisma.CategoryTranslationUpdateManyWithoutLanguageNestedInput;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationUpdateManyWithoutLanguageNestedInput;
    brandTranslations?: Prisma.BrandTranslationUpdateManyWithoutLanguageNestedInput;
    modelTranslations?: Prisma.ModelTranslationUpdateManyWithoutLanguageNestedInput;
    specificationTranslations?: Prisma.SpecificationTranslationUpdateManyWithoutLanguageNestedInput;
    chargingStationTranslations?: Prisma.ChargingStationTranslationUpdateManyWithoutLanguageNestedInput;
    articleTranslations?: Prisma.ArticleTranslationUpdateManyWithoutLanguageNestedInput;
};
export type LanguageUncheckedUpdateWithoutBodyTypeTranslationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categoryTranslations?: Prisma.CategoryTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    brandTranslations?: Prisma.BrandTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    modelTranslations?: Prisma.ModelTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    specificationTranslations?: Prisma.SpecificationTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    chargingStationTranslations?: Prisma.ChargingStationTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    articleTranslations?: Prisma.ArticleTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
};
export type LanguageCreateWithoutBrandTranslationsInput = {
    code: string;
    name: string;
    isDefault?: boolean;
    isActive?: boolean;
    categoryTranslations?: Prisma.CategoryTranslationCreateNestedManyWithoutLanguageInput;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationCreateNestedManyWithoutLanguageInput;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationCreateNestedManyWithoutLanguageInput;
    modelTranslations?: Prisma.ModelTranslationCreateNestedManyWithoutLanguageInput;
    specificationTranslations?: Prisma.SpecificationTranslationCreateNestedManyWithoutLanguageInput;
    chargingStationTranslations?: Prisma.ChargingStationTranslationCreateNestedManyWithoutLanguageInput;
    articleTranslations?: Prisma.ArticleTranslationCreateNestedManyWithoutLanguageInput;
};
export type LanguageUncheckedCreateWithoutBrandTranslationsInput = {
    id?: number;
    code: string;
    name: string;
    isDefault?: boolean;
    isActive?: boolean;
    categoryTranslations?: Prisma.CategoryTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    modelTranslations?: Prisma.ModelTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    specificationTranslations?: Prisma.SpecificationTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    chargingStationTranslations?: Prisma.ChargingStationTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    articleTranslations?: Prisma.ArticleTranslationUncheckedCreateNestedManyWithoutLanguageInput;
};
export type LanguageCreateOrConnectWithoutBrandTranslationsInput = {
    where: Prisma.LanguageWhereUniqueInput;
    create: Prisma.XOR<Prisma.LanguageCreateWithoutBrandTranslationsInput, Prisma.LanguageUncheckedCreateWithoutBrandTranslationsInput>;
};
export type LanguageUpsertWithoutBrandTranslationsInput = {
    update: Prisma.XOR<Prisma.LanguageUpdateWithoutBrandTranslationsInput, Prisma.LanguageUncheckedUpdateWithoutBrandTranslationsInput>;
    create: Prisma.XOR<Prisma.LanguageCreateWithoutBrandTranslationsInput, Prisma.LanguageUncheckedCreateWithoutBrandTranslationsInput>;
    where?: Prisma.LanguageWhereInput;
};
export type LanguageUpdateToOneWithWhereWithoutBrandTranslationsInput = {
    where?: Prisma.LanguageWhereInput;
    data: Prisma.XOR<Prisma.LanguageUpdateWithoutBrandTranslationsInput, Prisma.LanguageUncheckedUpdateWithoutBrandTranslationsInput>;
};
export type LanguageUpdateWithoutBrandTranslationsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categoryTranslations?: Prisma.CategoryTranslationUpdateManyWithoutLanguageNestedInput;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationUpdateManyWithoutLanguageNestedInput;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationUpdateManyWithoutLanguageNestedInput;
    modelTranslations?: Prisma.ModelTranslationUpdateManyWithoutLanguageNestedInput;
    specificationTranslations?: Prisma.SpecificationTranslationUpdateManyWithoutLanguageNestedInput;
    chargingStationTranslations?: Prisma.ChargingStationTranslationUpdateManyWithoutLanguageNestedInput;
    articleTranslations?: Prisma.ArticleTranslationUpdateManyWithoutLanguageNestedInput;
};
export type LanguageUncheckedUpdateWithoutBrandTranslationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categoryTranslations?: Prisma.CategoryTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    modelTranslations?: Prisma.ModelTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    specificationTranslations?: Prisma.SpecificationTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    chargingStationTranslations?: Prisma.ChargingStationTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    articleTranslations?: Prisma.ArticleTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
};
export type LanguageCreateWithoutModelTranslationsInput = {
    code: string;
    name: string;
    isDefault?: boolean;
    isActive?: boolean;
    categoryTranslations?: Prisma.CategoryTranslationCreateNestedManyWithoutLanguageInput;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationCreateNestedManyWithoutLanguageInput;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationCreateNestedManyWithoutLanguageInput;
    brandTranslations?: Prisma.BrandTranslationCreateNestedManyWithoutLanguageInput;
    specificationTranslations?: Prisma.SpecificationTranslationCreateNestedManyWithoutLanguageInput;
    chargingStationTranslations?: Prisma.ChargingStationTranslationCreateNestedManyWithoutLanguageInput;
    articleTranslations?: Prisma.ArticleTranslationCreateNestedManyWithoutLanguageInput;
};
export type LanguageUncheckedCreateWithoutModelTranslationsInput = {
    id?: number;
    code: string;
    name: string;
    isDefault?: boolean;
    isActive?: boolean;
    categoryTranslations?: Prisma.CategoryTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    brandTranslations?: Prisma.BrandTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    specificationTranslations?: Prisma.SpecificationTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    chargingStationTranslations?: Prisma.ChargingStationTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    articleTranslations?: Prisma.ArticleTranslationUncheckedCreateNestedManyWithoutLanguageInput;
};
export type LanguageCreateOrConnectWithoutModelTranslationsInput = {
    where: Prisma.LanguageWhereUniqueInput;
    create: Prisma.XOR<Prisma.LanguageCreateWithoutModelTranslationsInput, Prisma.LanguageUncheckedCreateWithoutModelTranslationsInput>;
};
export type LanguageUpsertWithoutModelTranslationsInput = {
    update: Prisma.XOR<Prisma.LanguageUpdateWithoutModelTranslationsInput, Prisma.LanguageUncheckedUpdateWithoutModelTranslationsInput>;
    create: Prisma.XOR<Prisma.LanguageCreateWithoutModelTranslationsInput, Prisma.LanguageUncheckedCreateWithoutModelTranslationsInput>;
    where?: Prisma.LanguageWhereInput;
};
export type LanguageUpdateToOneWithWhereWithoutModelTranslationsInput = {
    where?: Prisma.LanguageWhereInput;
    data: Prisma.XOR<Prisma.LanguageUpdateWithoutModelTranslationsInput, Prisma.LanguageUncheckedUpdateWithoutModelTranslationsInput>;
};
export type LanguageUpdateWithoutModelTranslationsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categoryTranslations?: Prisma.CategoryTranslationUpdateManyWithoutLanguageNestedInput;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationUpdateManyWithoutLanguageNestedInput;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationUpdateManyWithoutLanguageNestedInput;
    brandTranslations?: Prisma.BrandTranslationUpdateManyWithoutLanguageNestedInput;
    specificationTranslations?: Prisma.SpecificationTranslationUpdateManyWithoutLanguageNestedInput;
    chargingStationTranslations?: Prisma.ChargingStationTranslationUpdateManyWithoutLanguageNestedInput;
    articleTranslations?: Prisma.ArticleTranslationUpdateManyWithoutLanguageNestedInput;
};
export type LanguageUncheckedUpdateWithoutModelTranslationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categoryTranslations?: Prisma.CategoryTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    brandTranslations?: Prisma.BrandTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    specificationTranslations?: Prisma.SpecificationTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    chargingStationTranslations?: Prisma.ChargingStationTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    articleTranslations?: Prisma.ArticleTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
};
export type LanguageCreateWithoutSpecificationTranslationsInput = {
    code: string;
    name: string;
    isDefault?: boolean;
    isActive?: boolean;
    categoryTranslations?: Prisma.CategoryTranslationCreateNestedManyWithoutLanguageInput;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationCreateNestedManyWithoutLanguageInput;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationCreateNestedManyWithoutLanguageInput;
    brandTranslations?: Prisma.BrandTranslationCreateNestedManyWithoutLanguageInput;
    modelTranslations?: Prisma.ModelTranslationCreateNestedManyWithoutLanguageInput;
    chargingStationTranslations?: Prisma.ChargingStationTranslationCreateNestedManyWithoutLanguageInput;
    articleTranslations?: Prisma.ArticleTranslationCreateNestedManyWithoutLanguageInput;
};
export type LanguageUncheckedCreateWithoutSpecificationTranslationsInput = {
    id?: number;
    code: string;
    name: string;
    isDefault?: boolean;
    isActive?: boolean;
    categoryTranslations?: Prisma.CategoryTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    brandTranslations?: Prisma.BrandTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    modelTranslations?: Prisma.ModelTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    chargingStationTranslations?: Prisma.ChargingStationTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    articleTranslations?: Prisma.ArticleTranslationUncheckedCreateNestedManyWithoutLanguageInput;
};
export type LanguageCreateOrConnectWithoutSpecificationTranslationsInput = {
    where: Prisma.LanguageWhereUniqueInput;
    create: Prisma.XOR<Prisma.LanguageCreateWithoutSpecificationTranslationsInput, Prisma.LanguageUncheckedCreateWithoutSpecificationTranslationsInput>;
};
export type LanguageUpsertWithoutSpecificationTranslationsInput = {
    update: Prisma.XOR<Prisma.LanguageUpdateWithoutSpecificationTranslationsInput, Prisma.LanguageUncheckedUpdateWithoutSpecificationTranslationsInput>;
    create: Prisma.XOR<Prisma.LanguageCreateWithoutSpecificationTranslationsInput, Prisma.LanguageUncheckedCreateWithoutSpecificationTranslationsInput>;
    where?: Prisma.LanguageWhereInput;
};
export type LanguageUpdateToOneWithWhereWithoutSpecificationTranslationsInput = {
    where?: Prisma.LanguageWhereInput;
    data: Prisma.XOR<Prisma.LanguageUpdateWithoutSpecificationTranslationsInput, Prisma.LanguageUncheckedUpdateWithoutSpecificationTranslationsInput>;
};
export type LanguageUpdateWithoutSpecificationTranslationsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categoryTranslations?: Prisma.CategoryTranslationUpdateManyWithoutLanguageNestedInput;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationUpdateManyWithoutLanguageNestedInput;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationUpdateManyWithoutLanguageNestedInput;
    brandTranslations?: Prisma.BrandTranslationUpdateManyWithoutLanguageNestedInput;
    modelTranslations?: Prisma.ModelTranslationUpdateManyWithoutLanguageNestedInput;
    chargingStationTranslations?: Prisma.ChargingStationTranslationUpdateManyWithoutLanguageNestedInput;
    articleTranslations?: Prisma.ArticleTranslationUpdateManyWithoutLanguageNestedInput;
};
export type LanguageUncheckedUpdateWithoutSpecificationTranslationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categoryTranslations?: Prisma.CategoryTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    brandTranslations?: Prisma.BrandTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    modelTranslations?: Prisma.ModelTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    chargingStationTranslations?: Prisma.ChargingStationTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    articleTranslations?: Prisma.ArticleTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
};
export type LanguageCreateWithoutChargingStationTranslationsInput = {
    code: string;
    name: string;
    isDefault?: boolean;
    isActive?: boolean;
    categoryTranslations?: Prisma.CategoryTranslationCreateNestedManyWithoutLanguageInput;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationCreateNestedManyWithoutLanguageInput;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationCreateNestedManyWithoutLanguageInput;
    brandTranslations?: Prisma.BrandTranslationCreateNestedManyWithoutLanguageInput;
    modelTranslations?: Prisma.ModelTranslationCreateNestedManyWithoutLanguageInput;
    specificationTranslations?: Prisma.SpecificationTranslationCreateNestedManyWithoutLanguageInput;
    articleTranslations?: Prisma.ArticleTranslationCreateNestedManyWithoutLanguageInput;
};
export type LanguageUncheckedCreateWithoutChargingStationTranslationsInput = {
    id?: number;
    code: string;
    name: string;
    isDefault?: boolean;
    isActive?: boolean;
    categoryTranslations?: Prisma.CategoryTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    brandTranslations?: Prisma.BrandTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    modelTranslations?: Prisma.ModelTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    specificationTranslations?: Prisma.SpecificationTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    articleTranslations?: Prisma.ArticleTranslationUncheckedCreateNestedManyWithoutLanguageInput;
};
export type LanguageCreateOrConnectWithoutChargingStationTranslationsInput = {
    where: Prisma.LanguageWhereUniqueInput;
    create: Prisma.XOR<Prisma.LanguageCreateWithoutChargingStationTranslationsInput, Prisma.LanguageUncheckedCreateWithoutChargingStationTranslationsInput>;
};
export type LanguageUpsertWithoutChargingStationTranslationsInput = {
    update: Prisma.XOR<Prisma.LanguageUpdateWithoutChargingStationTranslationsInput, Prisma.LanguageUncheckedUpdateWithoutChargingStationTranslationsInput>;
    create: Prisma.XOR<Prisma.LanguageCreateWithoutChargingStationTranslationsInput, Prisma.LanguageUncheckedCreateWithoutChargingStationTranslationsInput>;
    where?: Prisma.LanguageWhereInput;
};
export type LanguageUpdateToOneWithWhereWithoutChargingStationTranslationsInput = {
    where?: Prisma.LanguageWhereInput;
    data: Prisma.XOR<Prisma.LanguageUpdateWithoutChargingStationTranslationsInput, Prisma.LanguageUncheckedUpdateWithoutChargingStationTranslationsInput>;
};
export type LanguageUpdateWithoutChargingStationTranslationsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categoryTranslations?: Prisma.CategoryTranslationUpdateManyWithoutLanguageNestedInput;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationUpdateManyWithoutLanguageNestedInput;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationUpdateManyWithoutLanguageNestedInput;
    brandTranslations?: Prisma.BrandTranslationUpdateManyWithoutLanguageNestedInput;
    modelTranslations?: Prisma.ModelTranslationUpdateManyWithoutLanguageNestedInput;
    specificationTranslations?: Prisma.SpecificationTranslationUpdateManyWithoutLanguageNestedInput;
    articleTranslations?: Prisma.ArticleTranslationUpdateManyWithoutLanguageNestedInput;
};
export type LanguageUncheckedUpdateWithoutChargingStationTranslationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categoryTranslations?: Prisma.CategoryTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    brandTranslations?: Prisma.BrandTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    modelTranslations?: Prisma.ModelTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    specificationTranslations?: Prisma.SpecificationTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    articleTranslations?: Prisma.ArticleTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
};
export type LanguageCreateWithoutArticleTranslationsInput = {
    code: string;
    name: string;
    isDefault?: boolean;
    isActive?: boolean;
    categoryTranslations?: Prisma.CategoryTranslationCreateNestedManyWithoutLanguageInput;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationCreateNestedManyWithoutLanguageInput;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationCreateNestedManyWithoutLanguageInput;
    brandTranslations?: Prisma.BrandTranslationCreateNestedManyWithoutLanguageInput;
    modelTranslations?: Prisma.ModelTranslationCreateNestedManyWithoutLanguageInput;
    specificationTranslations?: Prisma.SpecificationTranslationCreateNestedManyWithoutLanguageInput;
    chargingStationTranslations?: Prisma.ChargingStationTranslationCreateNestedManyWithoutLanguageInput;
};
export type LanguageUncheckedCreateWithoutArticleTranslationsInput = {
    id?: number;
    code: string;
    name: string;
    isDefault?: boolean;
    isActive?: boolean;
    categoryTranslations?: Prisma.CategoryTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    brandTranslations?: Prisma.BrandTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    modelTranslations?: Prisma.ModelTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    specificationTranslations?: Prisma.SpecificationTranslationUncheckedCreateNestedManyWithoutLanguageInput;
    chargingStationTranslations?: Prisma.ChargingStationTranslationUncheckedCreateNestedManyWithoutLanguageInput;
};
export type LanguageCreateOrConnectWithoutArticleTranslationsInput = {
    where: Prisma.LanguageWhereUniqueInput;
    create: Prisma.XOR<Prisma.LanguageCreateWithoutArticleTranslationsInput, Prisma.LanguageUncheckedCreateWithoutArticleTranslationsInput>;
};
export type LanguageUpsertWithoutArticleTranslationsInput = {
    update: Prisma.XOR<Prisma.LanguageUpdateWithoutArticleTranslationsInput, Prisma.LanguageUncheckedUpdateWithoutArticleTranslationsInput>;
    create: Prisma.XOR<Prisma.LanguageCreateWithoutArticleTranslationsInput, Prisma.LanguageUncheckedCreateWithoutArticleTranslationsInput>;
    where?: Prisma.LanguageWhereInput;
};
export type LanguageUpdateToOneWithWhereWithoutArticleTranslationsInput = {
    where?: Prisma.LanguageWhereInput;
    data: Prisma.XOR<Prisma.LanguageUpdateWithoutArticleTranslationsInput, Prisma.LanguageUncheckedUpdateWithoutArticleTranslationsInput>;
};
export type LanguageUpdateWithoutArticleTranslationsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categoryTranslations?: Prisma.CategoryTranslationUpdateManyWithoutLanguageNestedInput;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationUpdateManyWithoutLanguageNestedInput;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationUpdateManyWithoutLanguageNestedInput;
    brandTranslations?: Prisma.BrandTranslationUpdateManyWithoutLanguageNestedInput;
    modelTranslations?: Prisma.ModelTranslationUpdateManyWithoutLanguageNestedInput;
    specificationTranslations?: Prisma.SpecificationTranslationUpdateManyWithoutLanguageNestedInput;
    chargingStationTranslations?: Prisma.ChargingStationTranslationUpdateManyWithoutLanguageNestedInput;
};
export type LanguageUncheckedUpdateWithoutArticleTranslationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isDefault?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categoryTranslations?: Prisma.CategoryTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    fuelTypeTranslations?: Prisma.FuelTypeTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    bodyTypeTranslations?: Prisma.BodyTypeTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    brandTranslations?: Prisma.BrandTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    modelTranslations?: Prisma.ModelTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    specificationTranslations?: Prisma.SpecificationTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
    chargingStationTranslations?: Prisma.ChargingStationTranslationUncheckedUpdateManyWithoutLanguageNestedInput;
};
export type LanguageCountOutputType = {
    categoryTranslations: number;
    fuelTypeTranslations: number;
    bodyTypeTranslations: number;
    brandTranslations: number;
    modelTranslations: number;
    specificationTranslations: number;
    chargingStationTranslations: number;
    articleTranslations: number;
};
export type LanguageCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categoryTranslations?: boolean | LanguageCountOutputTypeCountCategoryTranslationsArgs;
    fuelTypeTranslations?: boolean | LanguageCountOutputTypeCountFuelTypeTranslationsArgs;
    bodyTypeTranslations?: boolean | LanguageCountOutputTypeCountBodyTypeTranslationsArgs;
    brandTranslations?: boolean | LanguageCountOutputTypeCountBrandTranslationsArgs;
    modelTranslations?: boolean | LanguageCountOutputTypeCountModelTranslationsArgs;
    specificationTranslations?: boolean | LanguageCountOutputTypeCountSpecificationTranslationsArgs;
    chargingStationTranslations?: boolean | LanguageCountOutputTypeCountChargingStationTranslationsArgs;
    articleTranslations?: boolean | LanguageCountOutputTypeCountArticleTranslationsArgs;
};
export type LanguageCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LanguageCountOutputTypeSelect<ExtArgs> | null;
};
export type LanguageCountOutputTypeCountCategoryTranslationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CategoryTranslationWhereInput;
};
export type LanguageCountOutputTypeCountFuelTypeTranslationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FuelTypeTranslationWhereInput;
};
export type LanguageCountOutputTypeCountBodyTypeTranslationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BodyTypeTranslationWhereInput;
};
export type LanguageCountOutputTypeCountBrandTranslationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BrandTranslationWhereInput;
};
export type LanguageCountOutputTypeCountModelTranslationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ModelTranslationWhereInput;
};
export type LanguageCountOutputTypeCountSpecificationTranslationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SpecificationTranslationWhereInput;
};
export type LanguageCountOutputTypeCountChargingStationTranslationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChargingStationTranslationWhereInput;
};
export type LanguageCountOutputTypeCountArticleTranslationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ArticleTranslationWhereInput;
};
export type LanguageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    isDefault?: boolean;
    isActive?: boolean;
    categoryTranslations?: boolean | Prisma.Language$categoryTranslationsArgs<ExtArgs>;
    fuelTypeTranslations?: boolean | Prisma.Language$fuelTypeTranslationsArgs<ExtArgs>;
    bodyTypeTranslations?: boolean | Prisma.Language$bodyTypeTranslationsArgs<ExtArgs>;
    brandTranslations?: boolean | Prisma.Language$brandTranslationsArgs<ExtArgs>;
    modelTranslations?: boolean | Prisma.Language$modelTranslationsArgs<ExtArgs>;
    specificationTranslations?: boolean | Prisma.Language$specificationTranslationsArgs<ExtArgs>;
    chargingStationTranslations?: boolean | Prisma.Language$chargingStationTranslationsArgs<ExtArgs>;
    articleTranslations?: boolean | Prisma.Language$articleTranslationsArgs<ExtArgs>;
    _count?: boolean | Prisma.LanguageCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["language"]>;
export type LanguageSelectScalar = {
    id?: boolean;
    code?: boolean;
    name?: boolean;
    isDefault?: boolean;
    isActive?: boolean;
};
export type LanguageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "name" | "isDefault" | "isActive", ExtArgs["result"]["language"]>;
export type LanguageInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categoryTranslations?: boolean | Prisma.Language$categoryTranslationsArgs<ExtArgs>;
    fuelTypeTranslations?: boolean | Prisma.Language$fuelTypeTranslationsArgs<ExtArgs>;
    bodyTypeTranslations?: boolean | Prisma.Language$bodyTypeTranslationsArgs<ExtArgs>;
    brandTranslations?: boolean | Prisma.Language$brandTranslationsArgs<ExtArgs>;
    modelTranslations?: boolean | Prisma.Language$modelTranslationsArgs<ExtArgs>;
    specificationTranslations?: boolean | Prisma.Language$specificationTranslationsArgs<ExtArgs>;
    chargingStationTranslations?: boolean | Prisma.Language$chargingStationTranslationsArgs<ExtArgs>;
    articleTranslations?: boolean | Prisma.Language$articleTranslationsArgs<ExtArgs>;
    _count?: boolean | Prisma.LanguageCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $LanguagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Language";
    objects: {
        categoryTranslations: Prisma.$CategoryTranslationPayload<ExtArgs>[];
        fuelTypeTranslations: Prisma.$FuelTypeTranslationPayload<ExtArgs>[];
        bodyTypeTranslations: Prisma.$BodyTypeTranslationPayload<ExtArgs>[];
        brandTranslations: Prisma.$BrandTranslationPayload<ExtArgs>[];
        modelTranslations: Prisma.$ModelTranslationPayload<ExtArgs>[];
        specificationTranslations: Prisma.$SpecificationTranslationPayload<ExtArgs>[];
        chargingStationTranslations: Prisma.$ChargingStationTranslationPayload<ExtArgs>[];
        articleTranslations: Prisma.$ArticleTranslationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        code: string;
        name: string;
        isDefault: boolean;
        isActive: boolean;
    }, ExtArgs["result"]["language"]>;
    composites: {};
};
export type LanguageGetPayload<S extends boolean | null | undefined | LanguageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LanguagePayload, S>;
export type LanguageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LanguageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LanguageCountAggregateInputType | true;
};
export interface LanguageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Language'];
        meta: {
            name: 'Language';
        };
    };
    findUnique<T extends LanguageFindUniqueArgs>(args: Prisma.SelectSubset<T, LanguageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LanguageClient<runtime.Types.Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LanguageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LanguageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LanguageClient<runtime.Types.Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LanguageFindFirstArgs>(args?: Prisma.SelectSubset<T, LanguageFindFirstArgs<ExtArgs>>): Prisma.Prisma__LanguageClient<runtime.Types.Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LanguageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LanguageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LanguageClient<runtime.Types.Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LanguageFindManyArgs>(args?: Prisma.SelectSubset<T, LanguageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LanguageCreateArgs>(args: Prisma.SelectSubset<T, LanguageCreateArgs<ExtArgs>>): Prisma.Prisma__LanguageClient<runtime.Types.Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LanguageCreateManyArgs>(args?: Prisma.SelectSubset<T, LanguageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends LanguageDeleteArgs>(args: Prisma.SelectSubset<T, LanguageDeleteArgs<ExtArgs>>): Prisma.Prisma__LanguageClient<runtime.Types.Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LanguageUpdateArgs>(args: Prisma.SelectSubset<T, LanguageUpdateArgs<ExtArgs>>): Prisma.Prisma__LanguageClient<runtime.Types.Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LanguageDeleteManyArgs>(args?: Prisma.SelectSubset<T, LanguageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LanguageUpdateManyArgs>(args: Prisma.SelectSubset<T, LanguageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends LanguageUpsertArgs>(args: Prisma.SelectSubset<T, LanguageUpsertArgs<ExtArgs>>): Prisma.Prisma__LanguageClient<runtime.Types.Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LanguageCountArgs>(args?: Prisma.Subset<T, LanguageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LanguageCountAggregateOutputType> : number>;
    aggregate<T extends LanguageAggregateArgs>(args: Prisma.Subset<T, LanguageAggregateArgs>): Prisma.PrismaPromise<GetLanguageAggregateType<T>>;
    groupBy<T extends LanguageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LanguageGroupByArgs['orderBy'];
    } : {
        orderBy?: LanguageGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LanguageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LanguageFieldRefs;
}
export interface Prisma__LanguageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    categoryTranslations<T extends Prisma.Language$categoryTranslationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Language$categoryTranslationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CategoryTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    fuelTypeTranslations<T extends Prisma.Language$fuelTypeTranslationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Language$fuelTypeTranslationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FuelTypeTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    bodyTypeTranslations<T extends Prisma.Language$bodyTypeTranslationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Language$bodyTypeTranslationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BodyTypeTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    brandTranslations<T extends Prisma.Language$brandTranslationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Language$brandTranslationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrandTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    modelTranslations<T extends Prisma.Language$modelTranslationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Language$modelTranslationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModelTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    specificationTranslations<T extends Prisma.Language$specificationTranslationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Language$specificationTranslationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SpecificationTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    chargingStationTranslations<T extends Prisma.Language$chargingStationTranslationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Language$chargingStationTranslationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChargingStationTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    articleTranslations<T extends Prisma.Language$articleTranslationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Language$articleTranslationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ArticleTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LanguageFieldRefs {
    readonly id: Prisma.FieldRef<"Language", 'Int'>;
    readonly code: Prisma.FieldRef<"Language", 'String'>;
    readonly name: Prisma.FieldRef<"Language", 'String'>;
    readonly isDefault: Prisma.FieldRef<"Language", 'Boolean'>;
    readonly isActive: Prisma.FieldRef<"Language", 'Boolean'>;
}
export type LanguageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LanguageSelect<ExtArgs> | null;
    omit?: Prisma.LanguageOmit<ExtArgs> | null;
    include?: Prisma.LanguageInclude<ExtArgs> | null;
    where: Prisma.LanguageWhereUniqueInput;
};
export type LanguageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LanguageSelect<ExtArgs> | null;
    omit?: Prisma.LanguageOmit<ExtArgs> | null;
    include?: Prisma.LanguageInclude<ExtArgs> | null;
    where: Prisma.LanguageWhereUniqueInput;
};
export type LanguageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LanguageSelect<ExtArgs> | null;
    omit?: Prisma.LanguageOmit<ExtArgs> | null;
    include?: Prisma.LanguageInclude<ExtArgs> | null;
    where?: Prisma.LanguageWhereInput;
    orderBy?: Prisma.LanguageOrderByWithRelationInput | Prisma.LanguageOrderByWithRelationInput[];
    cursor?: Prisma.LanguageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LanguageScalarFieldEnum | Prisma.LanguageScalarFieldEnum[];
};
export type LanguageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LanguageSelect<ExtArgs> | null;
    omit?: Prisma.LanguageOmit<ExtArgs> | null;
    include?: Prisma.LanguageInclude<ExtArgs> | null;
    where?: Prisma.LanguageWhereInput;
    orderBy?: Prisma.LanguageOrderByWithRelationInput | Prisma.LanguageOrderByWithRelationInput[];
    cursor?: Prisma.LanguageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LanguageScalarFieldEnum | Prisma.LanguageScalarFieldEnum[];
};
export type LanguageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LanguageSelect<ExtArgs> | null;
    omit?: Prisma.LanguageOmit<ExtArgs> | null;
    include?: Prisma.LanguageInclude<ExtArgs> | null;
    where?: Prisma.LanguageWhereInput;
    orderBy?: Prisma.LanguageOrderByWithRelationInput | Prisma.LanguageOrderByWithRelationInput[];
    cursor?: Prisma.LanguageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LanguageScalarFieldEnum | Prisma.LanguageScalarFieldEnum[];
};
export type LanguageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LanguageSelect<ExtArgs> | null;
    omit?: Prisma.LanguageOmit<ExtArgs> | null;
    include?: Prisma.LanguageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LanguageCreateInput, Prisma.LanguageUncheckedCreateInput>;
};
export type LanguageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LanguageCreateManyInput | Prisma.LanguageCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LanguageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LanguageSelect<ExtArgs> | null;
    omit?: Prisma.LanguageOmit<ExtArgs> | null;
    include?: Prisma.LanguageInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LanguageUpdateInput, Prisma.LanguageUncheckedUpdateInput>;
    where: Prisma.LanguageWhereUniqueInput;
};
export type LanguageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LanguageUpdateManyMutationInput, Prisma.LanguageUncheckedUpdateManyInput>;
    where?: Prisma.LanguageWhereInput;
    limit?: number;
};
export type LanguageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LanguageSelect<ExtArgs> | null;
    omit?: Prisma.LanguageOmit<ExtArgs> | null;
    include?: Prisma.LanguageInclude<ExtArgs> | null;
    where: Prisma.LanguageWhereUniqueInput;
    create: Prisma.XOR<Prisma.LanguageCreateInput, Prisma.LanguageUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LanguageUpdateInput, Prisma.LanguageUncheckedUpdateInput>;
};
export type LanguageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LanguageSelect<ExtArgs> | null;
    omit?: Prisma.LanguageOmit<ExtArgs> | null;
    include?: Prisma.LanguageInclude<ExtArgs> | null;
    where: Prisma.LanguageWhereUniqueInput;
};
export type LanguageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LanguageWhereInput;
    limit?: number;
};
export type Language$categoryTranslationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Language$fuelTypeTranslationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FuelTypeTranslationSelect<ExtArgs> | null;
    omit?: Prisma.FuelTypeTranslationOmit<ExtArgs> | null;
    include?: Prisma.FuelTypeTranslationInclude<ExtArgs> | null;
    where?: Prisma.FuelTypeTranslationWhereInput;
    orderBy?: Prisma.FuelTypeTranslationOrderByWithRelationInput | Prisma.FuelTypeTranslationOrderByWithRelationInput[];
    cursor?: Prisma.FuelTypeTranslationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FuelTypeTranslationScalarFieldEnum | Prisma.FuelTypeTranslationScalarFieldEnum[];
};
export type Language$bodyTypeTranslationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Language$brandTranslationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Language$modelTranslationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Language$specificationTranslationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Language$chargingStationTranslationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Language$articleTranslationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ArticleTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ArticleTranslationOmit<ExtArgs> | null;
    include?: Prisma.ArticleTranslationInclude<ExtArgs> | null;
    where?: Prisma.ArticleTranslationWhereInput;
    orderBy?: Prisma.ArticleTranslationOrderByWithRelationInput | Prisma.ArticleTranslationOrderByWithRelationInput[];
    cursor?: Prisma.ArticleTranslationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ArticleTranslationScalarFieldEnum | Prisma.ArticleTranslationScalarFieldEnum[];
};
export type LanguageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LanguageSelect<ExtArgs> | null;
    omit?: Prisma.LanguageOmit<ExtArgs> | null;
    include?: Prisma.LanguageInclude<ExtArgs> | null;
};
export {};
