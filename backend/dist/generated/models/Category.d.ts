import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type CategoryModel = runtime.Types.Result.DefaultSelection<Prisma.$CategoryPayload>;
export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null;
    _avg: CategoryAvgAggregateOutputType | null;
    _sum: CategorySumAggregateOutputType | null;
    _min: CategoryMinAggregateOutputType | null;
    _max: CategoryMaxAggregateOutputType | null;
};
export type CategoryAvgAggregateOutputType = {
    id: number | null;
};
export type CategorySumAggregateOutputType = {
    id: number | null;
};
export type CategoryMinAggregateOutputType = {
    id: number | null;
    slug: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CategoryMaxAggregateOutputType = {
    id: number | null;
    slug: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CategoryCountAggregateOutputType = {
    id: number;
    slug: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CategoryAvgAggregateInputType = {
    id?: true;
};
export type CategorySumAggregateInputType = {
    id?: true;
};
export type CategoryMinAggregateInputType = {
    id?: true;
    slug?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CategoryMaxAggregateInputType = {
    id?: true;
    slug?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CategoryCountAggregateInputType = {
    id?: true;
    slug?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CategoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CategoryWhereInput;
    orderBy?: Prisma.CategoryOrderByWithRelationInput | Prisma.CategoryOrderByWithRelationInput[];
    cursor?: Prisma.CategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CategoryCountAggregateInputType;
    _avg?: CategoryAvgAggregateInputType;
    _sum?: CategorySumAggregateInputType;
    _min?: CategoryMinAggregateInputType;
    _max?: CategoryMaxAggregateInputType;
};
export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCategory[P]> : Prisma.GetScalarType<T[P], AggregateCategory[P]>;
};
export type CategoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CategoryWhereInput;
    orderBy?: Prisma.CategoryOrderByWithAggregationInput | Prisma.CategoryOrderByWithAggregationInput[];
    by: Prisma.CategoryScalarFieldEnum[] | Prisma.CategoryScalarFieldEnum;
    having?: Prisma.CategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoryCountAggregateInputType | true;
    _avg?: CategoryAvgAggregateInputType;
    _sum?: CategorySumAggregateInputType;
    _min?: CategoryMinAggregateInputType;
    _max?: CategoryMaxAggregateInputType;
};
export type CategoryGroupByOutputType = {
    id: number;
    slug: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: CategoryCountAggregateOutputType | null;
    _avg: CategoryAvgAggregateOutputType | null;
    _sum: CategorySumAggregateOutputType | null;
    _min: CategoryMinAggregateOutputType | null;
    _max: CategoryMaxAggregateOutputType | null;
};
type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CategoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CategoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CategoryGroupByOutputType[P]>;
}>>;
export type CategoryWhereInput = {
    AND?: Prisma.CategoryWhereInput | Prisma.CategoryWhereInput[];
    OR?: Prisma.CategoryWhereInput[];
    NOT?: Prisma.CategoryWhereInput | Prisma.CategoryWhereInput[];
    id?: Prisma.IntFilter<"Category"> | number;
    slug?: Prisma.StringFilter<"Category"> | string;
    isActive?: Prisma.BoolFilter<"Category"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Category"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Category"> | Date | string;
    translations?: Prisma.CategoryTranslationListRelationFilter;
    brands?: Prisma.BrandListRelationFilter;
    models?: Prisma.ModelListRelationFilter;
};
export type CategoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    translations?: Prisma.CategoryTranslationOrderByRelationAggregateInput;
    brands?: Prisma.BrandOrderByRelationAggregateInput;
    models?: Prisma.ModelOrderByRelationAggregateInput;
    _relevance?: Prisma.CategoryOrderByRelevanceInput;
};
export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    slug?: string;
    AND?: Prisma.CategoryWhereInput | Prisma.CategoryWhereInput[];
    OR?: Prisma.CategoryWhereInput[];
    NOT?: Prisma.CategoryWhereInput | Prisma.CategoryWhereInput[];
    isActive?: Prisma.BoolFilter<"Category"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Category"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Category"> | Date | string;
    translations?: Prisma.CategoryTranslationListRelationFilter;
    brands?: Prisma.BrandListRelationFilter;
    models?: Prisma.ModelListRelationFilter;
}, "id" | "slug">;
export type CategoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CategoryCountOrderByAggregateInput;
    _avg?: Prisma.CategoryAvgOrderByAggregateInput;
    _max?: Prisma.CategoryMaxOrderByAggregateInput;
    _min?: Prisma.CategoryMinOrderByAggregateInput;
    _sum?: Prisma.CategorySumOrderByAggregateInput;
};
export type CategoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.CategoryScalarWhereWithAggregatesInput | Prisma.CategoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.CategoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CategoryScalarWhereWithAggregatesInput | Prisma.CategoryScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Category"> | number;
    slug?: Prisma.StringWithAggregatesFilter<"Category"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"Category"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Category"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Category"> | Date | string;
};
export type CategoryCreateInput = {
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    translations?: Prisma.CategoryTranslationCreateNestedManyWithoutCategoryInput;
    brands?: Prisma.BrandCreateNestedManyWithoutCategoryInput;
    models?: Prisma.ModelCreateNestedManyWithoutCategoryInput;
};
export type CategoryUncheckedCreateInput = {
    id?: number;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    translations?: Prisma.CategoryTranslationUncheckedCreateNestedManyWithoutCategoryInput;
    brands?: Prisma.BrandUncheckedCreateNestedManyWithoutCategoryInput;
    models?: Prisma.ModelUncheckedCreateNestedManyWithoutCategoryInput;
};
export type CategoryUpdateInput = {
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    translations?: Prisma.CategoryTranslationUpdateManyWithoutCategoryNestedInput;
    brands?: Prisma.BrandUpdateManyWithoutCategoryNestedInput;
    models?: Prisma.ModelUpdateManyWithoutCategoryNestedInput;
};
export type CategoryUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    translations?: Prisma.CategoryTranslationUncheckedUpdateManyWithoutCategoryNestedInput;
    brands?: Prisma.BrandUncheckedUpdateManyWithoutCategoryNestedInput;
    models?: Prisma.ModelUncheckedUpdateManyWithoutCategoryNestedInput;
};
export type CategoryCreateManyInput = {
    id?: number;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CategoryUpdateManyMutationInput = {
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CategoryUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CategoryOrderByRelevanceInput = {
    fields: Prisma.CategoryOrderByRelevanceFieldEnum | Prisma.CategoryOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type CategoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CategoryAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type CategoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CategoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CategorySumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type CategoryScalarRelationFilter = {
    is?: Prisma.CategoryWhereInput;
    isNot?: Prisma.CategoryWhereInput;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type CategoryCreateNestedOneWithoutTranslationsInput = {
    create?: Prisma.XOR<Prisma.CategoryCreateWithoutTranslationsInput, Prisma.CategoryUncheckedCreateWithoutTranslationsInput>;
    connectOrCreate?: Prisma.CategoryCreateOrConnectWithoutTranslationsInput;
    connect?: Prisma.CategoryWhereUniqueInput;
};
export type CategoryUpdateOneRequiredWithoutTranslationsNestedInput = {
    create?: Prisma.XOR<Prisma.CategoryCreateWithoutTranslationsInput, Prisma.CategoryUncheckedCreateWithoutTranslationsInput>;
    connectOrCreate?: Prisma.CategoryCreateOrConnectWithoutTranslationsInput;
    upsert?: Prisma.CategoryUpsertWithoutTranslationsInput;
    connect?: Prisma.CategoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CategoryUpdateToOneWithWhereWithoutTranslationsInput, Prisma.CategoryUpdateWithoutTranslationsInput>, Prisma.CategoryUncheckedUpdateWithoutTranslationsInput>;
};
export type CategoryCreateNestedOneWithoutBrandsInput = {
    create?: Prisma.XOR<Prisma.CategoryCreateWithoutBrandsInput, Prisma.CategoryUncheckedCreateWithoutBrandsInput>;
    connectOrCreate?: Prisma.CategoryCreateOrConnectWithoutBrandsInput;
    connect?: Prisma.CategoryWhereUniqueInput;
};
export type CategoryUpdateOneRequiredWithoutBrandsNestedInput = {
    create?: Prisma.XOR<Prisma.CategoryCreateWithoutBrandsInput, Prisma.CategoryUncheckedCreateWithoutBrandsInput>;
    connectOrCreate?: Prisma.CategoryCreateOrConnectWithoutBrandsInput;
    upsert?: Prisma.CategoryUpsertWithoutBrandsInput;
    connect?: Prisma.CategoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CategoryUpdateToOneWithWhereWithoutBrandsInput, Prisma.CategoryUpdateWithoutBrandsInput>, Prisma.CategoryUncheckedUpdateWithoutBrandsInput>;
};
export type CategoryCreateNestedOneWithoutModelsInput = {
    create?: Prisma.XOR<Prisma.CategoryCreateWithoutModelsInput, Prisma.CategoryUncheckedCreateWithoutModelsInput>;
    connectOrCreate?: Prisma.CategoryCreateOrConnectWithoutModelsInput;
    connect?: Prisma.CategoryWhereUniqueInput;
};
export type CategoryUpdateOneRequiredWithoutModelsNestedInput = {
    create?: Prisma.XOR<Prisma.CategoryCreateWithoutModelsInput, Prisma.CategoryUncheckedCreateWithoutModelsInput>;
    connectOrCreate?: Prisma.CategoryCreateOrConnectWithoutModelsInput;
    upsert?: Prisma.CategoryUpsertWithoutModelsInput;
    connect?: Prisma.CategoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CategoryUpdateToOneWithWhereWithoutModelsInput, Prisma.CategoryUpdateWithoutModelsInput>, Prisma.CategoryUncheckedUpdateWithoutModelsInput>;
};
export type CategoryCreateWithoutTranslationsInput = {
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    brands?: Prisma.BrandCreateNestedManyWithoutCategoryInput;
    models?: Prisma.ModelCreateNestedManyWithoutCategoryInput;
};
export type CategoryUncheckedCreateWithoutTranslationsInput = {
    id?: number;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    brands?: Prisma.BrandUncheckedCreateNestedManyWithoutCategoryInput;
    models?: Prisma.ModelUncheckedCreateNestedManyWithoutCategoryInput;
};
export type CategoryCreateOrConnectWithoutTranslationsInput = {
    where: Prisma.CategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.CategoryCreateWithoutTranslationsInput, Prisma.CategoryUncheckedCreateWithoutTranslationsInput>;
};
export type CategoryUpsertWithoutTranslationsInput = {
    update: Prisma.XOR<Prisma.CategoryUpdateWithoutTranslationsInput, Prisma.CategoryUncheckedUpdateWithoutTranslationsInput>;
    create: Prisma.XOR<Prisma.CategoryCreateWithoutTranslationsInput, Prisma.CategoryUncheckedCreateWithoutTranslationsInput>;
    where?: Prisma.CategoryWhereInput;
};
export type CategoryUpdateToOneWithWhereWithoutTranslationsInput = {
    where?: Prisma.CategoryWhereInput;
    data: Prisma.XOR<Prisma.CategoryUpdateWithoutTranslationsInput, Prisma.CategoryUncheckedUpdateWithoutTranslationsInput>;
};
export type CategoryUpdateWithoutTranslationsInput = {
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brands?: Prisma.BrandUpdateManyWithoutCategoryNestedInput;
    models?: Prisma.ModelUpdateManyWithoutCategoryNestedInput;
};
export type CategoryUncheckedUpdateWithoutTranslationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brands?: Prisma.BrandUncheckedUpdateManyWithoutCategoryNestedInput;
    models?: Prisma.ModelUncheckedUpdateManyWithoutCategoryNestedInput;
};
export type CategoryCreateWithoutBrandsInput = {
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    translations?: Prisma.CategoryTranslationCreateNestedManyWithoutCategoryInput;
    models?: Prisma.ModelCreateNestedManyWithoutCategoryInput;
};
export type CategoryUncheckedCreateWithoutBrandsInput = {
    id?: number;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    translations?: Prisma.CategoryTranslationUncheckedCreateNestedManyWithoutCategoryInput;
    models?: Prisma.ModelUncheckedCreateNestedManyWithoutCategoryInput;
};
export type CategoryCreateOrConnectWithoutBrandsInput = {
    where: Prisma.CategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.CategoryCreateWithoutBrandsInput, Prisma.CategoryUncheckedCreateWithoutBrandsInput>;
};
export type CategoryUpsertWithoutBrandsInput = {
    update: Prisma.XOR<Prisma.CategoryUpdateWithoutBrandsInput, Prisma.CategoryUncheckedUpdateWithoutBrandsInput>;
    create: Prisma.XOR<Prisma.CategoryCreateWithoutBrandsInput, Prisma.CategoryUncheckedCreateWithoutBrandsInput>;
    where?: Prisma.CategoryWhereInput;
};
export type CategoryUpdateToOneWithWhereWithoutBrandsInput = {
    where?: Prisma.CategoryWhereInput;
    data: Prisma.XOR<Prisma.CategoryUpdateWithoutBrandsInput, Prisma.CategoryUncheckedUpdateWithoutBrandsInput>;
};
export type CategoryUpdateWithoutBrandsInput = {
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    translations?: Prisma.CategoryTranslationUpdateManyWithoutCategoryNestedInput;
    models?: Prisma.ModelUpdateManyWithoutCategoryNestedInput;
};
export type CategoryUncheckedUpdateWithoutBrandsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    translations?: Prisma.CategoryTranslationUncheckedUpdateManyWithoutCategoryNestedInput;
    models?: Prisma.ModelUncheckedUpdateManyWithoutCategoryNestedInput;
};
export type CategoryCreateWithoutModelsInput = {
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    translations?: Prisma.CategoryTranslationCreateNestedManyWithoutCategoryInput;
    brands?: Prisma.BrandCreateNestedManyWithoutCategoryInput;
};
export type CategoryUncheckedCreateWithoutModelsInput = {
    id?: number;
    slug: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    translations?: Prisma.CategoryTranslationUncheckedCreateNestedManyWithoutCategoryInput;
    brands?: Prisma.BrandUncheckedCreateNestedManyWithoutCategoryInput;
};
export type CategoryCreateOrConnectWithoutModelsInput = {
    where: Prisma.CategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.CategoryCreateWithoutModelsInput, Prisma.CategoryUncheckedCreateWithoutModelsInput>;
};
export type CategoryUpsertWithoutModelsInput = {
    update: Prisma.XOR<Prisma.CategoryUpdateWithoutModelsInput, Prisma.CategoryUncheckedUpdateWithoutModelsInput>;
    create: Prisma.XOR<Prisma.CategoryCreateWithoutModelsInput, Prisma.CategoryUncheckedCreateWithoutModelsInput>;
    where?: Prisma.CategoryWhereInput;
};
export type CategoryUpdateToOneWithWhereWithoutModelsInput = {
    where?: Prisma.CategoryWhereInput;
    data: Prisma.XOR<Prisma.CategoryUpdateWithoutModelsInput, Prisma.CategoryUncheckedUpdateWithoutModelsInput>;
};
export type CategoryUpdateWithoutModelsInput = {
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    translations?: Prisma.CategoryTranslationUpdateManyWithoutCategoryNestedInput;
    brands?: Prisma.BrandUpdateManyWithoutCategoryNestedInput;
};
export type CategoryUncheckedUpdateWithoutModelsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    translations?: Prisma.CategoryTranslationUncheckedUpdateManyWithoutCategoryNestedInput;
    brands?: Prisma.BrandUncheckedUpdateManyWithoutCategoryNestedInput;
};
export type CategoryCountOutputType = {
    translations: number;
    brands: number;
    models: number;
};
export type CategoryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    translations?: boolean | CategoryCountOutputTypeCountTranslationsArgs;
    brands?: boolean | CategoryCountOutputTypeCountBrandsArgs;
    models?: boolean | CategoryCountOutputTypeCountModelsArgs;
};
export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoryCountOutputTypeSelect<ExtArgs> | null;
};
export type CategoryCountOutputTypeCountTranslationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CategoryTranslationWhereInput;
};
export type CategoryCountOutputTypeCountBrandsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BrandWhereInput;
};
export type CategoryCountOutputTypeCountModelsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ModelWhereInput;
};
export type CategorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slug?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    translations?: boolean | Prisma.Category$translationsArgs<ExtArgs>;
    brands?: boolean | Prisma.Category$brandsArgs<ExtArgs>;
    models?: boolean | Prisma.Category$modelsArgs<ExtArgs>;
    _count?: boolean | Prisma.CategoryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["category"]>;
export type CategorySelectScalar = {
    id?: boolean;
    slug?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CategoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "slug" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>;
export type CategoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    translations?: boolean | Prisma.Category$translationsArgs<ExtArgs>;
    brands?: boolean | Prisma.Category$brandsArgs<ExtArgs>;
    models?: boolean | Prisma.Category$modelsArgs<ExtArgs>;
    _count?: boolean | Prisma.CategoryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $CategoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Category";
    objects: {
        translations: Prisma.$CategoryTranslationPayload<ExtArgs>[];
        brands: Prisma.$BrandPayload<ExtArgs>[];
        models: Prisma.$ModelPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        slug: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["category"]>;
    composites: {};
};
export type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CategoryPayload, S>;
export type CategoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CategoryCountAggregateInputType | true;
};
export interface CategoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Category'];
        meta: {
            name: 'Category';
        };
    };
    findUnique<T extends CategoryFindUniqueArgs>(args: Prisma.SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CategoryFindFirstArgs>(args?: Prisma.SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CategoryFindManyArgs>(args?: Prisma.SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CategoryCreateArgs>(args: Prisma.SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CategoryCreateManyArgs>(args?: Prisma.SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends CategoryDeleteArgs>(args: Prisma.SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CategoryUpdateArgs>(args: Prisma.SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CategoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CategoryUpdateManyArgs>(args: Prisma.SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends CategoryUpsertArgs>(args: Prisma.SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CategoryCountArgs>(args?: Prisma.Subset<T, CategoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CategoryCountAggregateOutputType> : number>;
    aggregate<T extends CategoryAggregateArgs>(args: Prisma.Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>;
    groupBy<T extends CategoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CategoryGroupByArgs['orderBy'];
    } : {
        orderBy?: CategoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CategoryFieldRefs;
}
export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    translations<T extends Prisma.Category$translationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Category$translationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CategoryTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    brands<T extends Prisma.Category$brandsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Category$brandsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    models<T extends Prisma.Category$modelsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Category$modelsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CategoryFieldRefs {
    readonly id: Prisma.FieldRef<"Category", 'Int'>;
    readonly slug: Prisma.FieldRef<"Category", 'String'>;
    readonly isActive: Prisma.FieldRef<"Category", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Category", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Category", 'DateTime'>;
}
export type CategoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategorySelect<ExtArgs> | null;
    omit?: Prisma.CategoryOmit<ExtArgs> | null;
    include?: Prisma.CategoryInclude<ExtArgs> | null;
    where: Prisma.CategoryWhereUniqueInput;
};
export type CategoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategorySelect<ExtArgs> | null;
    omit?: Prisma.CategoryOmit<ExtArgs> | null;
    include?: Prisma.CategoryInclude<ExtArgs> | null;
    where: Prisma.CategoryWhereUniqueInput;
};
export type CategoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategorySelect<ExtArgs> | null;
    omit?: Prisma.CategoryOmit<ExtArgs> | null;
    include?: Prisma.CategoryInclude<ExtArgs> | null;
    where?: Prisma.CategoryWhereInput;
    orderBy?: Prisma.CategoryOrderByWithRelationInput | Prisma.CategoryOrderByWithRelationInput[];
    cursor?: Prisma.CategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoryScalarFieldEnum | Prisma.CategoryScalarFieldEnum[];
};
export type CategoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategorySelect<ExtArgs> | null;
    omit?: Prisma.CategoryOmit<ExtArgs> | null;
    include?: Prisma.CategoryInclude<ExtArgs> | null;
    where?: Prisma.CategoryWhereInput;
    orderBy?: Prisma.CategoryOrderByWithRelationInput | Prisma.CategoryOrderByWithRelationInput[];
    cursor?: Prisma.CategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoryScalarFieldEnum | Prisma.CategoryScalarFieldEnum[];
};
export type CategoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategorySelect<ExtArgs> | null;
    omit?: Prisma.CategoryOmit<ExtArgs> | null;
    include?: Prisma.CategoryInclude<ExtArgs> | null;
    where?: Prisma.CategoryWhereInput;
    orderBy?: Prisma.CategoryOrderByWithRelationInput | Prisma.CategoryOrderByWithRelationInput[];
    cursor?: Prisma.CategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoryScalarFieldEnum | Prisma.CategoryScalarFieldEnum[];
};
export type CategoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategorySelect<ExtArgs> | null;
    omit?: Prisma.CategoryOmit<ExtArgs> | null;
    include?: Prisma.CategoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CategoryCreateInput, Prisma.CategoryUncheckedCreateInput>;
};
export type CategoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CategoryCreateManyInput | Prisma.CategoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CategoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategorySelect<ExtArgs> | null;
    omit?: Prisma.CategoryOmit<ExtArgs> | null;
    include?: Prisma.CategoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CategoryUpdateInput, Prisma.CategoryUncheckedUpdateInput>;
    where: Prisma.CategoryWhereUniqueInput;
};
export type CategoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CategoryUpdateManyMutationInput, Prisma.CategoryUncheckedUpdateManyInput>;
    where?: Prisma.CategoryWhereInput;
    limit?: number;
};
export type CategoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategorySelect<ExtArgs> | null;
    omit?: Prisma.CategoryOmit<ExtArgs> | null;
    include?: Prisma.CategoryInclude<ExtArgs> | null;
    where: Prisma.CategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.CategoryCreateInput, Prisma.CategoryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CategoryUpdateInput, Prisma.CategoryUncheckedUpdateInput>;
};
export type CategoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategorySelect<ExtArgs> | null;
    omit?: Prisma.CategoryOmit<ExtArgs> | null;
    include?: Prisma.CategoryInclude<ExtArgs> | null;
    where: Prisma.CategoryWhereUniqueInput;
};
export type CategoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CategoryWhereInput;
    limit?: number;
};
export type Category$translationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Category$brandsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Category$modelsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CategoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategorySelect<ExtArgs> | null;
    omit?: Prisma.CategoryOmit<ExtArgs> | null;
    include?: Prisma.CategoryInclude<ExtArgs> | null;
};
export {};
