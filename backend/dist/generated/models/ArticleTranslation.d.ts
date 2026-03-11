import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ArticleTranslationModel = runtime.Types.Result.DefaultSelection<Prisma.$ArticleTranslationPayload>;
export type AggregateArticleTranslation = {
    _count: ArticleTranslationCountAggregateOutputType | null;
    _avg: ArticleTranslationAvgAggregateOutputType | null;
    _sum: ArticleTranslationSumAggregateOutputType | null;
    _min: ArticleTranslationMinAggregateOutputType | null;
    _max: ArticleTranslationMaxAggregateOutputType | null;
};
export type ArticleTranslationAvgAggregateOutputType = {
    id: number | null;
    articleId: number | null;
    languageId: number | null;
};
export type ArticleTranslationSumAggregateOutputType = {
    id: number | null;
    articleId: number | null;
    languageId: number | null;
};
export type ArticleTranslationMinAggregateOutputType = {
    id: number | null;
    articleId: number | null;
    languageId: number | null;
    title: string | null;
    content: string | null;
};
export type ArticleTranslationMaxAggregateOutputType = {
    id: number | null;
    articleId: number | null;
    languageId: number | null;
    title: string | null;
    content: string | null;
};
export type ArticleTranslationCountAggregateOutputType = {
    id: number;
    articleId: number;
    languageId: number;
    title: number;
    content: number;
    _all: number;
};
export type ArticleTranslationAvgAggregateInputType = {
    id?: true;
    articleId?: true;
    languageId?: true;
};
export type ArticleTranslationSumAggregateInputType = {
    id?: true;
    articleId?: true;
    languageId?: true;
};
export type ArticleTranslationMinAggregateInputType = {
    id?: true;
    articleId?: true;
    languageId?: true;
    title?: true;
    content?: true;
};
export type ArticleTranslationMaxAggregateInputType = {
    id?: true;
    articleId?: true;
    languageId?: true;
    title?: true;
    content?: true;
};
export type ArticleTranslationCountAggregateInputType = {
    id?: true;
    articleId?: true;
    languageId?: true;
    title?: true;
    content?: true;
    _all?: true;
};
export type ArticleTranslationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ArticleTranslationWhereInput;
    orderBy?: Prisma.ArticleTranslationOrderByWithRelationInput | Prisma.ArticleTranslationOrderByWithRelationInput[];
    cursor?: Prisma.ArticleTranslationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ArticleTranslationCountAggregateInputType;
    _avg?: ArticleTranslationAvgAggregateInputType;
    _sum?: ArticleTranslationSumAggregateInputType;
    _min?: ArticleTranslationMinAggregateInputType;
    _max?: ArticleTranslationMaxAggregateInputType;
};
export type GetArticleTranslationAggregateType<T extends ArticleTranslationAggregateArgs> = {
    [P in keyof T & keyof AggregateArticleTranslation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateArticleTranslation[P]> : Prisma.GetScalarType<T[P], AggregateArticleTranslation[P]>;
};
export type ArticleTranslationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ArticleTranslationWhereInput;
    orderBy?: Prisma.ArticleTranslationOrderByWithAggregationInput | Prisma.ArticleTranslationOrderByWithAggregationInput[];
    by: Prisma.ArticleTranslationScalarFieldEnum[] | Prisma.ArticleTranslationScalarFieldEnum;
    having?: Prisma.ArticleTranslationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ArticleTranslationCountAggregateInputType | true;
    _avg?: ArticleTranslationAvgAggregateInputType;
    _sum?: ArticleTranslationSumAggregateInputType;
    _min?: ArticleTranslationMinAggregateInputType;
    _max?: ArticleTranslationMaxAggregateInputType;
};
export type ArticleTranslationGroupByOutputType = {
    id: number;
    articleId: number;
    languageId: number;
    title: string;
    content: string;
    _count: ArticleTranslationCountAggregateOutputType | null;
    _avg: ArticleTranslationAvgAggregateOutputType | null;
    _sum: ArticleTranslationSumAggregateOutputType | null;
    _min: ArticleTranslationMinAggregateOutputType | null;
    _max: ArticleTranslationMaxAggregateOutputType | null;
};
type GetArticleTranslationGroupByPayload<T extends ArticleTranslationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ArticleTranslationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ArticleTranslationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ArticleTranslationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ArticleTranslationGroupByOutputType[P]>;
}>>;
export type ArticleTranslationWhereInput = {
    AND?: Prisma.ArticleTranslationWhereInput | Prisma.ArticleTranslationWhereInput[];
    OR?: Prisma.ArticleTranslationWhereInput[];
    NOT?: Prisma.ArticleTranslationWhereInput | Prisma.ArticleTranslationWhereInput[];
    id?: Prisma.IntFilter<"ArticleTranslation"> | number;
    articleId?: Prisma.IntFilter<"ArticleTranslation"> | number;
    languageId?: Prisma.IntFilter<"ArticleTranslation"> | number;
    title?: Prisma.StringFilter<"ArticleTranslation"> | string;
    content?: Prisma.StringFilter<"ArticleTranslation"> | string;
    article?: Prisma.XOR<Prisma.ArticleScalarRelationFilter, Prisma.ArticleWhereInput>;
    language?: Prisma.XOR<Prisma.LanguageScalarRelationFilter, Prisma.LanguageWhereInput>;
};
export type ArticleTranslationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    articleId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    article?: Prisma.ArticleOrderByWithRelationInput;
    language?: Prisma.LanguageOrderByWithRelationInput;
    _relevance?: Prisma.ArticleTranslationOrderByRelevanceInput;
};
export type ArticleTranslationWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    articleId_languageId?: Prisma.ArticleTranslationArticleIdLanguageIdCompoundUniqueInput;
    AND?: Prisma.ArticleTranslationWhereInput | Prisma.ArticleTranslationWhereInput[];
    OR?: Prisma.ArticleTranslationWhereInput[];
    NOT?: Prisma.ArticleTranslationWhereInput | Prisma.ArticleTranslationWhereInput[];
    articleId?: Prisma.IntFilter<"ArticleTranslation"> | number;
    languageId?: Prisma.IntFilter<"ArticleTranslation"> | number;
    title?: Prisma.StringFilter<"ArticleTranslation"> | string;
    content?: Prisma.StringFilter<"ArticleTranslation"> | string;
    article?: Prisma.XOR<Prisma.ArticleScalarRelationFilter, Prisma.ArticleWhereInput>;
    language?: Prisma.XOR<Prisma.LanguageScalarRelationFilter, Prisma.LanguageWhereInput>;
}, "id" | "articleId_languageId">;
export type ArticleTranslationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    articleId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    _count?: Prisma.ArticleTranslationCountOrderByAggregateInput;
    _avg?: Prisma.ArticleTranslationAvgOrderByAggregateInput;
    _max?: Prisma.ArticleTranslationMaxOrderByAggregateInput;
    _min?: Prisma.ArticleTranslationMinOrderByAggregateInput;
    _sum?: Prisma.ArticleTranslationSumOrderByAggregateInput;
};
export type ArticleTranslationScalarWhereWithAggregatesInput = {
    AND?: Prisma.ArticleTranslationScalarWhereWithAggregatesInput | Prisma.ArticleTranslationScalarWhereWithAggregatesInput[];
    OR?: Prisma.ArticleTranslationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ArticleTranslationScalarWhereWithAggregatesInput | Prisma.ArticleTranslationScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ArticleTranslation"> | number;
    articleId?: Prisma.IntWithAggregatesFilter<"ArticleTranslation"> | number;
    languageId?: Prisma.IntWithAggregatesFilter<"ArticleTranslation"> | number;
    title?: Prisma.StringWithAggregatesFilter<"ArticleTranslation"> | string;
    content?: Prisma.StringWithAggregatesFilter<"ArticleTranslation"> | string;
};
export type ArticleTranslationCreateInput = {
    title: string;
    content: string;
    article: Prisma.ArticleCreateNestedOneWithoutTranslationsInput;
    language: Prisma.LanguageCreateNestedOneWithoutArticleTranslationsInput;
};
export type ArticleTranslationUncheckedCreateInput = {
    id?: number;
    articleId: number;
    languageId: number;
    title: string;
    content: string;
};
export type ArticleTranslationUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    article?: Prisma.ArticleUpdateOneRequiredWithoutTranslationsNestedInput;
    language?: Prisma.LanguageUpdateOneRequiredWithoutArticleTranslationsNestedInput;
};
export type ArticleTranslationUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    articleId?: Prisma.IntFieldUpdateOperationsInput | number;
    languageId?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ArticleTranslationCreateManyInput = {
    id?: number;
    articleId: number;
    languageId: number;
    title: string;
    content: string;
};
export type ArticleTranslationUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ArticleTranslationUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    articleId?: Prisma.IntFieldUpdateOperationsInput | number;
    languageId?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ArticleTranslationListRelationFilter = {
    every?: Prisma.ArticleTranslationWhereInput;
    some?: Prisma.ArticleTranslationWhereInput;
    none?: Prisma.ArticleTranslationWhereInput;
};
export type ArticleTranslationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ArticleTranslationOrderByRelevanceInput = {
    fields: Prisma.ArticleTranslationOrderByRelevanceFieldEnum | Prisma.ArticleTranslationOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ArticleTranslationArticleIdLanguageIdCompoundUniqueInput = {
    articleId: number;
    languageId: number;
};
export type ArticleTranslationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    articleId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
};
export type ArticleTranslationAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    articleId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
};
export type ArticleTranslationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    articleId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
};
export type ArticleTranslationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    articleId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
};
export type ArticleTranslationSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    articleId?: Prisma.SortOrder;
    languageId?: Prisma.SortOrder;
};
export type ArticleTranslationCreateNestedManyWithoutLanguageInput = {
    create?: Prisma.XOR<Prisma.ArticleTranslationCreateWithoutLanguageInput, Prisma.ArticleTranslationUncheckedCreateWithoutLanguageInput> | Prisma.ArticleTranslationCreateWithoutLanguageInput[] | Prisma.ArticleTranslationUncheckedCreateWithoutLanguageInput[];
    connectOrCreate?: Prisma.ArticleTranslationCreateOrConnectWithoutLanguageInput | Prisma.ArticleTranslationCreateOrConnectWithoutLanguageInput[];
    createMany?: Prisma.ArticleTranslationCreateManyLanguageInputEnvelope;
    connect?: Prisma.ArticleTranslationWhereUniqueInput | Prisma.ArticleTranslationWhereUniqueInput[];
};
export type ArticleTranslationUncheckedCreateNestedManyWithoutLanguageInput = {
    create?: Prisma.XOR<Prisma.ArticleTranslationCreateWithoutLanguageInput, Prisma.ArticleTranslationUncheckedCreateWithoutLanguageInput> | Prisma.ArticleTranslationCreateWithoutLanguageInput[] | Prisma.ArticleTranslationUncheckedCreateWithoutLanguageInput[];
    connectOrCreate?: Prisma.ArticleTranslationCreateOrConnectWithoutLanguageInput | Prisma.ArticleTranslationCreateOrConnectWithoutLanguageInput[];
    createMany?: Prisma.ArticleTranslationCreateManyLanguageInputEnvelope;
    connect?: Prisma.ArticleTranslationWhereUniqueInput | Prisma.ArticleTranslationWhereUniqueInput[];
};
export type ArticleTranslationUpdateManyWithoutLanguageNestedInput = {
    create?: Prisma.XOR<Prisma.ArticleTranslationCreateWithoutLanguageInput, Prisma.ArticleTranslationUncheckedCreateWithoutLanguageInput> | Prisma.ArticleTranslationCreateWithoutLanguageInput[] | Prisma.ArticleTranslationUncheckedCreateWithoutLanguageInput[];
    connectOrCreate?: Prisma.ArticleTranslationCreateOrConnectWithoutLanguageInput | Prisma.ArticleTranslationCreateOrConnectWithoutLanguageInput[];
    upsert?: Prisma.ArticleTranslationUpsertWithWhereUniqueWithoutLanguageInput | Prisma.ArticleTranslationUpsertWithWhereUniqueWithoutLanguageInput[];
    createMany?: Prisma.ArticleTranslationCreateManyLanguageInputEnvelope;
    set?: Prisma.ArticleTranslationWhereUniqueInput | Prisma.ArticleTranslationWhereUniqueInput[];
    disconnect?: Prisma.ArticleTranslationWhereUniqueInput | Prisma.ArticleTranslationWhereUniqueInput[];
    delete?: Prisma.ArticleTranslationWhereUniqueInput | Prisma.ArticleTranslationWhereUniqueInput[];
    connect?: Prisma.ArticleTranslationWhereUniqueInput | Prisma.ArticleTranslationWhereUniqueInput[];
    update?: Prisma.ArticleTranslationUpdateWithWhereUniqueWithoutLanguageInput | Prisma.ArticleTranslationUpdateWithWhereUniqueWithoutLanguageInput[];
    updateMany?: Prisma.ArticleTranslationUpdateManyWithWhereWithoutLanguageInput | Prisma.ArticleTranslationUpdateManyWithWhereWithoutLanguageInput[];
    deleteMany?: Prisma.ArticleTranslationScalarWhereInput | Prisma.ArticleTranslationScalarWhereInput[];
};
export type ArticleTranslationUncheckedUpdateManyWithoutLanguageNestedInput = {
    create?: Prisma.XOR<Prisma.ArticleTranslationCreateWithoutLanguageInput, Prisma.ArticleTranslationUncheckedCreateWithoutLanguageInput> | Prisma.ArticleTranslationCreateWithoutLanguageInput[] | Prisma.ArticleTranslationUncheckedCreateWithoutLanguageInput[];
    connectOrCreate?: Prisma.ArticleTranslationCreateOrConnectWithoutLanguageInput | Prisma.ArticleTranslationCreateOrConnectWithoutLanguageInput[];
    upsert?: Prisma.ArticleTranslationUpsertWithWhereUniqueWithoutLanguageInput | Prisma.ArticleTranslationUpsertWithWhereUniqueWithoutLanguageInput[];
    createMany?: Prisma.ArticleTranslationCreateManyLanguageInputEnvelope;
    set?: Prisma.ArticleTranslationWhereUniqueInput | Prisma.ArticleTranslationWhereUniqueInput[];
    disconnect?: Prisma.ArticleTranslationWhereUniqueInput | Prisma.ArticleTranslationWhereUniqueInput[];
    delete?: Prisma.ArticleTranslationWhereUniqueInput | Prisma.ArticleTranslationWhereUniqueInput[];
    connect?: Prisma.ArticleTranslationWhereUniqueInput | Prisma.ArticleTranslationWhereUniqueInput[];
    update?: Prisma.ArticleTranslationUpdateWithWhereUniqueWithoutLanguageInput | Prisma.ArticleTranslationUpdateWithWhereUniqueWithoutLanguageInput[];
    updateMany?: Prisma.ArticleTranslationUpdateManyWithWhereWithoutLanguageInput | Prisma.ArticleTranslationUpdateManyWithWhereWithoutLanguageInput[];
    deleteMany?: Prisma.ArticleTranslationScalarWhereInput | Prisma.ArticleTranslationScalarWhereInput[];
};
export type ArticleTranslationCreateNestedManyWithoutArticleInput = {
    create?: Prisma.XOR<Prisma.ArticleTranslationCreateWithoutArticleInput, Prisma.ArticleTranslationUncheckedCreateWithoutArticleInput> | Prisma.ArticleTranslationCreateWithoutArticleInput[] | Prisma.ArticleTranslationUncheckedCreateWithoutArticleInput[];
    connectOrCreate?: Prisma.ArticleTranslationCreateOrConnectWithoutArticleInput | Prisma.ArticleTranslationCreateOrConnectWithoutArticleInput[];
    createMany?: Prisma.ArticleTranslationCreateManyArticleInputEnvelope;
    connect?: Prisma.ArticleTranslationWhereUniqueInput | Prisma.ArticleTranslationWhereUniqueInput[];
};
export type ArticleTranslationUncheckedCreateNestedManyWithoutArticleInput = {
    create?: Prisma.XOR<Prisma.ArticleTranslationCreateWithoutArticleInput, Prisma.ArticleTranslationUncheckedCreateWithoutArticleInput> | Prisma.ArticleTranslationCreateWithoutArticleInput[] | Prisma.ArticleTranslationUncheckedCreateWithoutArticleInput[];
    connectOrCreate?: Prisma.ArticleTranslationCreateOrConnectWithoutArticleInput | Prisma.ArticleTranslationCreateOrConnectWithoutArticleInput[];
    createMany?: Prisma.ArticleTranslationCreateManyArticleInputEnvelope;
    connect?: Prisma.ArticleTranslationWhereUniqueInput | Prisma.ArticleTranslationWhereUniqueInput[];
};
export type ArticleTranslationUpdateManyWithoutArticleNestedInput = {
    create?: Prisma.XOR<Prisma.ArticleTranslationCreateWithoutArticleInput, Prisma.ArticleTranslationUncheckedCreateWithoutArticleInput> | Prisma.ArticleTranslationCreateWithoutArticleInput[] | Prisma.ArticleTranslationUncheckedCreateWithoutArticleInput[];
    connectOrCreate?: Prisma.ArticleTranslationCreateOrConnectWithoutArticleInput | Prisma.ArticleTranslationCreateOrConnectWithoutArticleInput[];
    upsert?: Prisma.ArticleTranslationUpsertWithWhereUniqueWithoutArticleInput | Prisma.ArticleTranslationUpsertWithWhereUniqueWithoutArticleInput[];
    createMany?: Prisma.ArticleTranslationCreateManyArticleInputEnvelope;
    set?: Prisma.ArticleTranslationWhereUniqueInput | Prisma.ArticleTranslationWhereUniqueInput[];
    disconnect?: Prisma.ArticleTranslationWhereUniqueInput | Prisma.ArticleTranslationWhereUniqueInput[];
    delete?: Prisma.ArticleTranslationWhereUniqueInput | Prisma.ArticleTranslationWhereUniqueInput[];
    connect?: Prisma.ArticleTranslationWhereUniqueInput | Prisma.ArticleTranslationWhereUniqueInput[];
    update?: Prisma.ArticleTranslationUpdateWithWhereUniqueWithoutArticleInput | Prisma.ArticleTranslationUpdateWithWhereUniqueWithoutArticleInput[];
    updateMany?: Prisma.ArticleTranslationUpdateManyWithWhereWithoutArticleInput | Prisma.ArticleTranslationUpdateManyWithWhereWithoutArticleInput[];
    deleteMany?: Prisma.ArticleTranslationScalarWhereInput | Prisma.ArticleTranslationScalarWhereInput[];
};
export type ArticleTranslationUncheckedUpdateManyWithoutArticleNestedInput = {
    create?: Prisma.XOR<Prisma.ArticleTranslationCreateWithoutArticleInput, Prisma.ArticleTranslationUncheckedCreateWithoutArticleInput> | Prisma.ArticleTranslationCreateWithoutArticleInput[] | Prisma.ArticleTranslationUncheckedCreateWithoutArticleInput[];
    connectOrCreate?: Prisma.ArticleTranslationCreateOrConnectWithoutArticleInput | Prisma.ArticleTranslationCreateOrConnectWithoutArticleInput[];
    upsert?: Prisma.ArticleTranslationUpsertWithWhereUniqueWithoutArticleInput | Prisma.ArticleTranslationUpsertWithWhereUniqueWithoutArticleInput[];
    createMany?: Prisma.ArticleTranslationCreateManyArticleInputEnvelope;
    set?: Prisma.ArticleTranslationWhereUniqueInput | Prisma.ArticleTranslationWhereUniqueInput[];
    disconnect?: Prisma.ArticleTranslationWhereUniqueInput | Prisma.ArticleTranslationWhereUniqueInput[];
    delete?: Prisma.ArticleTranslationWhereUniqueInput | Prisma.ArticleTranslationWhereUniqueInput[];
    connect?: Prisma.ArticleTranslationWhereUniqueInput | Prisma.ArticleTranslationWhereUniqueInput[];
    update?: Prisma.ArticleTranslationUpdateWithWhereUniqueWithoutArticleInput | Prisma.ArticleTranslationUpdateWithWhereUniqueWithoutArticleInput[];
    updateMany?: Prisma.ArticleTranslationUpdateManyWithWhereWithoutArticleInput | Prisma.ArticleTranslationUpdateManyWithWhereWithoutArticleInput[];
    deleteMany?: Prisma.ArticleTranslationScalarWhereInput | Prisma.ArticleTranslationScalarWhereInput[];
};
export type ArticleTranslationCreateWithoutLanguageInput = {
    title: string;
    content: string;
    article: Prisma.ArticleCreateNestedOneWithoutTranslationsInput;
};
export type ArticleTranslationUncheckedCreateWithoutLanguageInput = {
    id?: number;
    articleId: number;
    title: string;
    content: string;
};
export type ArticleTranslationCreateOrConnectWithoutLanguageInput = {
    where: Prisma.ArticleTranslationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ArticleTranslationCreateWithoutLanguageInput, Prisma.ArticleTranslationUncheckedCreateWithoutLanguageInput>;
};
export type ArticleTranslationCreateManyLanguageInputEnvelope = {
    data: Prisma.ArticleTranslationCreateManyLanguageInput | Prisma.ArticleTranslationCreateManyLanguageInput[];
    skipDuplicates?: boolean;
};
export type ArticleTranslationUpsertWithWhereUniqueWithoutLanguageInput = {
    where: Prisma.ArticleTranslationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ArticleTranslationUpdateWithoutLanguageInput, Prisma.ArticleTranslationUncheckedUpdateWithoutLanguageInput>;
    create: Prisma.XOR<Prisma.ArticleTranslationCreateWithoutLanguageInput, Prisma.ArticleTranslationUncheckedCreateWithoutLanguageInput>;
};
export type ArticleTranslationUpdateWithWhereUniqueWithoutLanguageInput = {
    where: Prisma.ArticleTranslationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ArticleTranslationUpdateWithoutLanguageInput, Prisma.ArticleTranslationUncheckedUpdateWithoutLanguageInput>;
};
export type ArticleTranslationUpdateManyWithWhereWithoutLanguageInput = {
    where: Prisma.ArticleTranslationScalarWhereInput;
    data: Prisma.XOR<Prisma.ArticleTranslationUpdateManyMutationInput, Prisma.ArticleTranslationUncheckedUpdateManyWithoutLanguageInput>;
};
export type ArticleTranslationScalarWhereInput = {
    AND?: Prisma.ArticleTranslationScalarWhereInput | Prisma.ArticleTranslationScalarWhereInput[];
    OR?: Prisma.ArticleTranslationScalarWhereInput[];
    NOT?: Prisma.ArticleTranslationScalarWhereInput | Prisma.ArticleTranslationScalarWhereInput[];
    id?: Prisma.IntFilter<"ArticleTranslation"> | number;
    articleId?: Prisma.IntFilter<"ArticleTranslation"> | number;
    languageId?: Prisma.IntFilter<"ArticleTranslation"> | number;
    title?: Prisma.StringFilter<"ArticleTranslation"> | string;
    content?: Prisma.StringFilter<"ArticleTranslation"> | string;
};
export type ArticleTranslationCreateWithoutArticleInput = {
    title: string;
    content: string;
    language: Prisma.LanguageCreateNestedOneWithoutArticleTranslationsInput;
};
export type ArticleTranslationUncheckedCreateWithoutArticleInput = {
    id?: number;
    languageId: number;
    title: string;
    content: string;
};
export type ArticleTranslationCreateOrConnectWithoutArticleInput = {
    where: Prisma.ArticleTranslationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ArticleTranslationCreateWithoutArticleInput, Prisma.ArticleTranslationUncheckedCreateWithoutArticleInput>;
};
export type ArticleTranslationCreateManyArticleInputEnvelope = {
    data: Prisma.ArticleTranslationCreateManyArticleInput | Prisma.ArticleTranslationCreateManyArticleInput[];
    skipDuplicates?: boolean;
};
export type ArticleTranslationUpsertWithWhereUniqueWithoutArticleInput = {
    where: Prisma.ArticleTranslationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ArticleTranslationUpdateWithoutArticleInput, Prisma.ArticleTranslationUncheckedUpdateWithoutArticleInput>;
    create: Prisma.XOR<Prisma.ArticleTranslationCreateWithoutArticleInput, Prisma.ArticleTranslationUncheckedCreateWithoutArticleInput>;
};
export type ArticleTranslationUpdateWithWhereUniqueWithoutArticleInput = {
    where: Prisma.ArticleTranslationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ArticleTranslationUpdateWithoutArticleInput, Prisma.ArticleTranslationUncheckedUpdateWithoutArticleInput>;
};
export type ArticleTranslationUpdateManyWithWhereWithoutArticleInput = {
    where: Prisma.ArticleTranslationScalarWhereInput;
    data: Prisma.XOR<Prisma.ArticleTranslationUpdateManyMutationInput, Prisma.ArticleTranslationUncheckedUpdateManyWithoutArticleInput>;
};
export type ArticleTranslationCreateManyLanguageInput = {
    id?: number;
    articleId: number;
    title: string;
    content: string;
};
export type ArticleTranslationUpdateWithoutLanguageInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    article?: Prisma.ArticleUpdateOneRequiredWithoutTranslationsNestedInput;
};
export type ArticleTranslationUncheckedUpdateWithoutLanguageInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    articleId?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ArticleTranslationUncheckedUpdateManyWithoutLanguageInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    articleId?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ArticleTranslationCreateManyArticleInput = {
    id?: number;
    languageId: number;
    title: string;
    content: string;
};
export type ArticleTranslationUpdateWithoutArticleInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    language?: Prisma.LanguageUpdateOneRequiredWithoutArticleTranslationsNestedInput;
};
export type ArticleTranslationUncheckedUpdateWithoutArticleInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    languageId?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ArticleTranslationUncheckedUpdateManyWithoutArticleInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    languageId?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ArticleTranslationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    articleId?: boolean;
    languageId?: boolean;
    title?: boolean;
    content?: boolean;
    article?: boolean | Prisma.ArticleDefaultArgs<ExtArgs>;
    language?: boolean | Prisma.LanguageDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["articleTranslation"]>;
export type ArticleTranslationSelectScalar = {
    id?: boolean;
    articleId?: boolean;
    languageId?: boolean;
    title?: boolean;
    content?: boolean;
};
export type ArticleTranslationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "articleId" | "languageId" | "title" | "content", ExtArgs["result"]["articleTranslation"]>;
export type ArticleTranslationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    article?: boolean | Prisma.ArticleDefaultArgs<ExtArgs>;
    language?: boolean | Prisma.LanguageDefaultArgs<ExtArgs>;
};
export type $ArticleTranslationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ArticleTranslation";
    objects: {
        article: Prisma.$ArticlePayload<ExtArgs>;
        language: Prisma.$LanguagePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        articleId: number;
        languageId: number;
        title: string;
        content: string;
    }, ExtArgs["result"]["articleTranslation"]>;
    composites: {};
};
export type ArticleTranslationGetPayload<S extends boolean | null | undefined | ArticleTranslationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ArticleTranslationPayload, S>;
export type ArticleTranslationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ArticleTranslationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ArticleTranslationCountAggregateInputType | true;
};
export interface ArticleTranslationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ArticleTranslation'];
        meta: {
            name: 'ArticleTranslation';
        };
    };
    findUnique<T extends ArticleTranslationFindUniqueArgs>(args: Prisma.SelectSubset<T, ArticleTranslationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ArticleTranslationClient<runtime.Types.Result.GetResult<Prisma.$ArticleTranslationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ArticleTranslationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ArticleTranslationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ArticleTranslationClient<runtime.Types.Result.GetResult<Prisma.$ArticleTranslationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ArticleTranslationFindFirstArgs>(args?: Prisma.SelectSubset<T, ArticleTranslationFindFirstArgs<ExtArgs>>): Prisma.Prisma__ArticleTranslationClient<runtime.Types.Result.GetResult<Prisma.$ArticleTranslationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ArticleTranslationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ArticleTranslationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ArticleTranslationClient<runtime.Types.Result.GetResult<Prisma.$ArticleTranslationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ArticleTranslationFindManyArgs>(args?: Prisma.SelectSubset<T, ArticleTranslationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ArticleTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ArticleTranslationCreateArgs>(args: Prisma.SelectSubset<T, ArticleTranslationCreateArgs<ExtArgs>>): Prisma.Prisma__ArticleTranslationClient<runtime.Types.Result.GetResult<Prisma.$ArticleTranslationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ArticleTranslationCreateManyArgs>(args?: Prisma.SelectSubset<T, ArticleTranslationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ArticleTranslationDeleteArgs>(args: Prisma.SelectSubset<T, ArticleTranslationDeleteArgs<ExtArgs>>): Prisma.Prisma__ArticleTranslationClient<runtime.Types.Result.GetResult<Prisma.$ArticleTranslationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ArticleTranslationUpdateArgs>(args: Prisma.SelectSubset<T, ArticleTranslationUpdateArgs<ExtArgs>>): Prisma.Prisma__ArticleTranslationClient<runtime.Types.Result.GetResult<Prisma.$ArticleTranslationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ArticleTranslationDeleteManyArgs>(args?: Prisma.SelectSubset<T, ArticleTranslationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ArticleTranslationUpdateManyArgs>(args: Prisma.SelectSubset<T, ArticleTranslationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ArticleTranslationUpsertArgs>(args: Prisma.SelectSubset<T, ArticleTranslationUpsertArgs<ExtArgs>>): Prisma.Prisma__ArticleTranslationClient<runtime.Types.Result.GetResult<Prisma.$ArticleTranslationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ArticleTranslationCountArgs>(args?: Prisma.Subset<T, ArticleTranslationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ArticleTranslationCountAggregateOutputType> : number>;
    aggregate<T extends ArticleTranslationAggregateArgs>(args: Prisma.Subset<T, ArticleTranslationAggregateArgs>): Prisma.PrismaPromise<GetArticleTranslationAggregateType<T>>;
    groupBy<T extends ArticleTranslationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ArticleTranslationGroupByArgs['orderBy'];
    } : {
        orderBy?: ArticleTranslationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ArticleTranslationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleTranslationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ArticleTranslationFieldRefs;
}
export interface Prisma__ArticleTranslationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    article<T extends Prisma.ArticleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ArticleDefaultArgs<ExtArgs>>): Prisma.Prisma__ArticleClient<runtime.Types.Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    language<T extends Prisma.LanguageDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LanguageDefaultArgs<ExtArgs>>): Prisma.Prisma__LanguageClient<runtime.Types.Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ArticleTranslationFieldRefs {
    readonly id: Prisma.FieldRef<"ArticleTranslation", 'Int'>;
    readonly articleId: Prisma.FieldRef<"ArticleTranslation", 'Int'>;
    readonly languageId: Prisma.FieldRef<"ArticleTranslation", 'Int'>;
    readonly title: Prisma.FieldRef<"ArticleTranslation", 'String'>;
    readonly content: Prisma.FieldRef<"ArticleTranslation", 'String'>;
}
export type ArticleTranslationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ArticleTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ArticleTranslationOmit<ExtArgs> | null;
    include?: Prisma.ArticleTranslationInclude<ExtArgs> | null;
    where: Prisma.ArticleTranslationWhereUniqueInput;
};
export type ArticleTranslationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ArticleTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ArticleTranslationOmit<ExtArgs> | null;
    include?: Prisma.ArticleTranslationInclude<ExtArgs> | null;
    where: Prisma.ArticleTranslationWhereUniqueInput;
};
export type ArticleTranslationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ArticleTranslationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ArticleTranslationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ArticleTranslationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ArticleTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ArticleTranslationOmit<ExtArgs> | null;
    include?: Prisma.ArticleTranslationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ArticleTranslationCreateInput, Prisma.ArticleTranslationUncheckedCreateInput>;
};
export type ArticleTranslationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ArticleTranslationCreateManyInput | Prisma.ArticleTranslationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ArticleTranslationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ArticleTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ArticleTranslationOmit<ExtArgs> | null;
    include?: Prisma.ArticleTranslationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ArticleTranslationUpdateInput, Prisma.ArticleTranslationUncheckedUpdateInput>;
    where: Prisma.ArticleTranslationWhereUniqueInput;
};
export type ArticleTranslationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ArticleTranslationUpdateManyMutationInput, Prisma.ArticleTranslationUncheckedUpdateManyInput>;
    where?: Prisma.ArticleTranslationWhereInput;
    limit?: number;
};
export type ArticleTranslationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ArticleTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ArticleTranslationOmit<ExtArgs> | null;
    include?: Prisma.ArticleTranslationInclude<ExtArgs> | null;
    where: Prisma.ArticleTranslationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ArticleTranslationCreateInput, Prisma.ArticleTranslationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ArticleTranslationUpdateInput, Prisma.ArticleTranslationUncheckedUpdateInput>;
};
export type ArticleTranslationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ArticleTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ArticleTranslationOmit<ExtArgs> | null;
    include?: Prisma.ArticleTranslationInclude<ExtArgs> | null;
    where: Prisma.ArticleTranslationWhereUniqueInput;
};
export type ArticleTranslationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ArticleTranslationWhereInput;
    limit?: number;
};
export type ArticleTranslationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ArticleTranslationSelect<ExtArgs> | null;
    omit?: Prisma.ArticleTranslationOmit<ExtArgs> | null;
    include?: Prisma.ArticleTranslationInclude<ExtArgs> | null;
};
export {};
