import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ReviewModel = runtime.Types.Result.DefaultSelection<Prisma.$ReviewPayload>;
export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null;
    _avg: ReviewAvgAggregateOutputType | null;
    _sum: ReviewSumAggregateOutputType | null;
    _min: ReviewMinAggregateOutputType | null;
    _max: ReviewMaxAggregateOutputType | null;
};
export type ReviewAvgAggregateOutputType = {
    id: number | null;
    modelId: number | null;
    rating: number | null;
};
export type ReviewSumAggregateOutputType = {
    id: number | null;
    modelId: number | null;
    rating: number | null;
};
export type ReviewMinAggregateOutputType = {
    id: number | null;
    modelId: number | null;
    rating: number | null;
    pros: string | null;
    cons: string | null;
    reviewText: string | null;
    createdAt: Date | null;
};
export type ReviewMaxAggregateOutputType = {
    id: number | null;
    modelId: number | null;
    rating: number | null;
    pros: string | null;
    cons: string | null;
    reviewText: string | null;
    createdAt: Date | null;
};
export type ReviewCountAggregateOutputType = {
    id: number;
    modelId: number;
    rating: number;
    pros: number;
    cons: number;
    reviewText: number;
    createdAt: number;
    _all: number;
};
export type ReviewAvgAggregateInputType = {
    id?: true;
    modelId?: true;
    rating?: true;
};
export type ReviewSumAggregateInputType = {
    id?: true;
    modelId?: true;
    rating?: true;
};
export type ReviewMinAggregateInputType = {
    id?: true;
    modelId?: true;
    rating?: true;
    pros?: true;
    cons?: true;
    reviewText?: true;
    createdAt?: true;
};
export type ReviewMaxAggregateInputType = {
    id?: true;
    modelId?: true;
    rating?: true;
    pros?: true;
    cons?: true;
    reviewText?: true;
    createdAt?: true;
};
export type ReviewCountAggregateInputType = {
    id?: true;
    modelId?: true;
    rating?: true;
    pros?: true;
    cons?: true;
    reviewText?: true;
    createdAt?: true;
    _all?: true;
};
export type ReviewAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReviewWhereInput;
    orderBy?: Prisma.ReviewOrderByWithRelationInput | Prisma.ReviewOrderByWithRelationInput[];
    cursor?: Prisma.ReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ReviewCountAggregateInputType;
    _avg?: ReviewAvgAggregateInputType;
    _sum?: ReviewSumAggregateInputType;
    _min?: ReviewMinAggregateInputType;
    _max?: ReviewMaxAggregateInputType;
};
export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
    [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReview[P]> : Prisma.GetScalarType<T[P], AggregateReview[P]>;
};
export type ReviewGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReviewWhereInput;
    orderBy?: Prisma.ReviewOrderByWithAggregationInput | Prisma.ReviewOrderByWithAggregationInput[];
    by: Prisma.ReviewScalarFieldEnum[] | Prisma.ReviewScalarFieldEnum;
    having?: Prisma.ReviewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReviewCountAggregateInputType | true;
    _avg?: ReviewAvgAggregateInputType;
    _sum?: ReviewSumAggregateInputType;
    _min?: ReviewMinAggregateInputType;
    _max?: ReviewMaxAggregateInputType;
};
export type ReviewGroupByOutputType = {
    id: number;
    modelId: number;
    rating: number;
    pros: string | null;
    cons: string | null;
    reviewText: string | null;
    createdAt: Date;
    _count: ReviewCountAggregateOutputType | null;
    _avg: ReviewAvgAggregateOutputType | null;
    _sum: ReviewSumAggregateOutputType | null;
    _min: ReviewMinAggregateOutputType | null;
    _max: ReviewMaxAggregateOutputType | null;
};
type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ReviewGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ReviewGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ReviewGroupByOutputType[P]>;
}>>;
export type ReviewWhereInput = {
    AND?: Prisma.ReviewWhereInput | Prisma.ReviewWhereInput[];
    OR?: Prisma.ReviewWhereInput[];
    NOT?: Prisma.ReviewWhereInput | Prisma.ReviewWhereInput[];
    id?: Prisma.IntFilter<"Review"> | number;
    modelId?: Prisma.IntFilter<"Review"> | number;
    rating?: Prisma.IntFilter<"Review"> | number;
    pros?: Prisma.StringNullableFilter<"Review"> | string | null;
    cons?: Prisma.StringNullableFilter<"Review"> | string | null;
    reviewText?: Prisma.StringNullableFilter<"Review"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Review"> | Date | string;
    model?: Prisma.XOR<Prisma.ModelScalarRelationFilter, Prisma.ModelWhereInput>;
};
export type ReviewOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    pros?: Prisma.SortOrderInput | Prisma.SortOrder;
    cons?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewText?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    model?: Prisma.ModelOrderByWithRelationInput;
    _relevance?: Prisma.ReviewOrderByRelevanceInput;
};
export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ReviewWhereInput | Prisma.ReviewWhereInput[];
    OR?: Prisma.ReviewWhereInput[];
    NOT?: Prisma.ReviewWhereInput | Prisma.ReviewWhereInput[];
    modelId?: Prisma.IntFilter<"Review"> | number;
    rating?: Prisma.IntFilter<"Review"> | number;
    pros?: Prisma.StringNullableFilter<"Review"> | string | null;
    cons?: Prisma.StringNullableFilter<"Review"> | string | null;
    reviewText?: Prisma.StringNullableFilter<"Review"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Review"> | Date | string;
    model?: Prisma.XOR<Prisma.ModelScalarRelationFilter, Prisma.ModelWhereInput>;
}, "id">;
export type ReviewOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    pros?: Prisma.SortOrderInput | Prisma.SortOrder;
    cons?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewText?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ReviewCountOrderByAggregateInput;
    _avg?: Prisma.ReviewAvgOrderByAggregateInput;
    _max?: Prisma.ReviewMaxOrderByAggregateInput;
    _min?: Prisma.ReviewMinOrderByAggregateInput;
    _sum?: Prisma.ReviewSumOrderByAggregateInput;
};
export type ReviewScalarWhereWithAggregatesInput = {
    AND?: Prisma.ReviewScalarWhereWithAggregatesInput | Prisma.ReviewScalarWhereWithAggregatesInput[];
    OR?: Prisma.ReviewScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ReviewScalarWhereWithAggregatesInput | Prisma.ReviewScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Review"> | number;
    modelId?: Prisma.IntWithAggregatesFilter<"Review"> | number;
    rating?: Prisma.IntWithAggregatesFilter<"Review"> | number;
    pros?: Prisma.StringNullableWithAggregatesFilter<"Review"> | string | null;
    cons?: Prisma.StringNullableWithAggregatesFilter<"Review"> | string | null;
    reviewText?: Prisma.StringNullableWithAggregatesFilter<"Review"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Review"> | Date | string;
};
export type ReviewCreateInput = {
    rating: number;
    pros?: string | null;
    cons?: string | null;
    reviewText?: string | null;
    createdAt?: Date | string;
    model: Prisma.ModelCreateNestedOneWithoutReviewsInput;
};
export type ReviewUncheckedCreateInput = {
    id?: number;
    modelId: number;
    rating: number;
    pros?: string | null;
    cons?: string | null;
    reviewText?: string | null;
    createdAt?: Date | string;
};
export type ReviewUpdateInput = {
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    pros?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cons?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    model?: Prisma.ModelUpdateOneRequiredWithoutReviewsNestedInput;
};
export type ReviewUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    modelId?: Prisma.IntFieldUpdateOperationsInput | number;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    pros?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cons?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReviewCreateManyInput = {
    id?: number;
    modelId: number;
    rating: number;
    pros?: string | null;
    cons?: string | null;
    reviewText?: string | null;
    createdAt?: Date | string;
};
export type ReviewUpdateManyMutationInput = {
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    pros?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cons?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReviewUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    modelId?: Prisma.IntFieldUpdateOperationsInput | number;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    pros?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cons?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReviewListRelationFilter = {
    every?: Prisma.ReviewWhereInput;
    some?: Prisma.ReviewWhereInput;
    none?: Prisma.ReviewWhereInput;
};
export type ReviewOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ReviewOrderByRelevanceInput = {
    fields: Prisma.ReviewOrderByRelevanceFieldEnum | Prisma.ReviewOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ReviewCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    pros?: Prisma.SortOrder;
    cons?: Prisma.SortOrder;
    reviewText?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ReviewAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
};
export type ReviewMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    pros?: Prisma.SortOrder;
    cons?: Prisma.SortOrder;
    reviewText?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ReviewMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    pros?: Prisma.SortOrder;
    cons?: Prisma.SortOrder;
    reviewText?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ReviewSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modelId?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
};
export type ReviewCreateNestedManyWithoutModelInput = {
    create?: Prisma.XOR<Prisma.ReviewCreateWithoutModelInput, Prisma.ReviewUncheckedCreateWithoutModelInput> | Prisma.ReviewCreateWithoutModelInput[] | Prisma.ReviewUncheckedCreateWithoutModelInput[];
    connectOrCreate?: Prisma.ReviewCreateOrConnectWithoutModelInput | Prisma.ReviewCreateOrConnectWithoutModelInput[];
    createMany?: Prisma.ReviewCreateManyModelInputEnvelope;
    connect?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
};
export type ReviewUncheckedCreateNestedManyWithoutModelInput = {
    create?: Prisma.XOR<Prisma.ReviewCreateWithoutModelInput, Prisma.ReviewUncheckedCreateWithoutModelInput> | Prisma.ReviewCreateWithoutModelInput[] | Prisma.ReviewUncheckedCreateWithoutModelInput[];
    connectOrCreate?: Prisma.ReviewCreateOrConnectWithoutModelInput | Prisma.ReviewCreateOrConnectWithoutModelInput[];
    createMany?: Prisma.ReviewCreateManyModelInputEnvelope;
    connect?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
};
export type ReviewUpdateManyWithoutModelNestedInput = {
    create?: Prisma.XOR<Prisma.ReviewCreateWithoutModelInput, Prisma.ReviewUncheckedCreateWithoutModelInput> | Prisma.ReviewCreateWithoutModelInput[] | Prisma.ReviewUncheckedCreateWithoutModelInput[];
    connectOrCreate?: Prisma.ReviewCreateOrConnectWithoutModelInput | Prisma.ReviewCreateOrConnectWithoutModelInput[];
    upsert?: Prisma.ReviewUpsertWithWhereUniqueWithoutModelInput | Prisma.ReviewUpsertWithWhereUniqueWithoutModelInput[];
    createMany?: Prisma.ReviewCreateManyModelInputEnvelope;
    set?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
    disconnect?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
    delete?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
    connect?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
    update?: Prisma.ReviewUpdateWithWhereUniqueWithoutModelInput | Prisma.ReviewUpdateWithWhereUniqueWithoutModelInput[];
    updateMany?: Prisma.ReviewUpdateManyWithWhereWithoutModelInput | Prisma.ReviewUpdateManyWithWhereWithoutModelInput[];
    deleteMany?: Prisma.ReviewScalarWhereInput | Prisma.ReviewScalarWhereInput[];
};
export type ReviewUncheckedUpdateManyWithoutModelNestedInput = {
    create?: Prisma.XOR<Prisma.ReviewCreateWithoutModelInput, Prisma.ReviewUncheckedCreateWithoutModelInput> | Prisma.ReviewCreateWithoutModelInput[] | Prisma.ReviewUncheckedCreateWithoutModelInput[];
    connectOrCreate?: Prisma.ReviewCreateOrConnectWithoutModelInput | Prisma.ReviewCreateOrConnectWithoutModelInput[];
    upsert?: Prisma.ReviewUpsertWithWhereUniqueWithoutModelInput | Prisma.ReviewUpsertWithWhereUniqueWithoutModelInput[];
    createMany?: Prisma.ReviewCreateManyModelInputEnvelope;
    set?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
    disconnect?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
    delete?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
    connect?: Prisma.ReviewWhereUniqueInput | Prisma.ReviewWhereUniqueInput[];
    update?: Prisma.ReviewUpdateWithWhereUniqueWithoutModelInput | Prisma.ReviewUpdateWithWhereUniqueWithoutModelInput[];
    updateMany?: Prisma.ReviewUpdateManyWithWhereWithoutModelInput | Prisma.ReviewUpdateManyWithWhereWithoutModelInput[];
    deleteMany?: Prisma.ReviewScalarWhereInput | Prisma.ReviewScalarWhereInput[];
};
export type ReviewCreateWithoutModelInput = {
    rating: number;
    pros?: string | null;
    cons?: string | null;
    reviewText?: string | null;
    createdAt?: Date | string;
};
export type ReviewUncheckedCreateWithoutModelInput = {
    id?: number;
    rating: number;
    pros?: string | null;
    cons?: string | null;
    reviewText?: string | null;
    createdAt?: Date | string;
};
export type ReviewCreateOrConnectWithoutModelInput = {
    where: Prisma.ReviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReviewCreateWithoutModelInput, Prisma.ReviewUncheckedCreateWithoutModelInput>;
};
export type ReviewCreateManyModelInputEnvelope = {
    data: Prisma.ReviewCreateManyModelInput | Prisma.ReviewCreateManyModelInput[];
    skipDuplicates?: boolean;
};
export type ReviewUpsertWithWhereUniqueWithoutModelInput = {
    where: Prisma.ReviewWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReviewUpdateWithoutModelInput, Prisma.ReviewUncheckedUpdateWithoutModelInput>;
    create: Prisma.XOR<Prisma.ReviewCreateWithoutModelInput, Prisma.ReviewUncheckedCreateWithoutModelInput>;
};
export type ReviewUpdateWithWhereUniqueWithoutModelInput = {
    where: Prisma.ReviewWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReviewUpdateWithoutModelInput, Prisma.ReviewUncheckedUpdateWithoutModelInput>;
};
export type ReviewUpdateManyWithWhereWithoutModelInput = {
    where: Prisma.ReviewScalarWhereInput;
    data: Prisma.XOR<Prisma.ReviewUpdateManyMutationInput, Prisma.ReviewUncheckedUpdateManyWithoutModelInput>;
};
export type ReviewScalarWhereInput = {
    AND?: Prisma.ReviewScalarWhereInput | Prisma.ReviewScalarWhereInput[];
    OR?: Prisma.ReviewScalarWhereInput[];
    NOT?: Prisma.ReviewScalarWhereInput | Prisma.ReviewScalarWhereInput[];
    id?: Prisma.IntFilter<"Review"> | number;
    modelId?: Prisma.IntFilter<"Review"> | number;
    rating?: Prisma.IntFilter<"Review"> | number;
    pros?: Prisma.StringNullableFilter<"Review"> | string | null;
    cons?: Prisma.StringNullableFilter<"Review"> | string | null;
    reviewText?: Prisma.StringNullableFilter<"Review"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Review"> | Date | string;
};
export type ReviewCreateManyModelInput = {
    id?: number;
    rating: number;
    pros?: string | null;
    cons?: string | null;
    reviewText?: string | null;
    createdAt?: Date | string;
};
export type ReviewUpdateWithoutModelInput = {
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    pros?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cons?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReviewUncheckedUpdateWithoutModelInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    pros?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cons?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReviewUncheckedUpdateManyWithoutModelInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    pros?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cons?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewText?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReviewSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    modelId?: boolean;
    rating?: boolean;
    pros?: boolean;
    cons?: boolean;
    reviewText?: boolean;
    createdAt?: boolean;
    model?: boolean | Prisma.ModelDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["review"]>;
export type ReviewSelectScalar = {
    id?: boolean;
    modelId?: boolean;
    rating?: boolean;
    pros?: boolean;
    cons?: boolean;
    reviewText?: boolean;
    createdAt?: boolean;
};
export type ReviewOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "modelId" | "rating" | "pros" | "cons" | "reviewText" | "createdAt", ExtArgs["result"]["review"]>;
export type ReviewInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    model?: boolean | Prisma.ModelDefaultArgs<ExtArgs>;
};
export type $ReviewPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Review";
    objects: {
        model: Prisma.$ModelPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        modelId: number;
        rating: number;
        pros: string | null;
        cons: string | null;
        reviewText: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["review"]>;
    composites: {};
};
export type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ReviewPayload, S>;
export type ReviewCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ReviewCountAggregateInputType | true;
};
export interface ReviewDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Review'];
        meta: {
            name: 'Review';
        };
    };
    findUnique<T extends ReviewFindUniqueArgs>(args: Prisma.SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ReviewClient<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReviewClient<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ReviewFindFirstArgs>(args?: Prisma.SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma.Prisma__ReviewClient<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReviewClient<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ReviewFindManyArgs>(args?: Prisma.SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ReviewCreateArgs>(args: Prisma.SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma.Prisma__ReviewClient<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ReviewCreateManyArgs>(args?: Prisma.SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ReviewDeleteArgs>(args: Prisma.SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma.Prisma__ReviewClient<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ReviewUpdateArgs>(args: Prisma.SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma.Prisma__ReviewClient<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ReviewDeleteManyArgs>(args?: Prisma.SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ReviewUpdateManyArgs>(args: Prisma.SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ReviewUpsertArgs>(args: Prisma.SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma.Prisma__ReviewClient<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ReviewCountArgs>(args?: Prisma.Subset<T, ReviewCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ReviewCountAggregateOutputType> : number>;
    aggregate<T extends ReviewAggregateArgs>(args: Prisma.Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>;
    groupBy<T extends ReviewGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ReviewGroupByArgs['orderBy'];
    } : {
        orderBy?: ReviewGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ReviewFieldRefs;
}
export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    model<T extends Prisma.ModelDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ModelDefaultArgs<ExtArgs>>): Prisma.Prisma__ModelClient<runtime.Types.Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ReviewFieldRefs {
    readonly id: Prisma.FieldRef<"Review", 'Int'>;
    readonly modelId: Prisma.FieldRef<"Review", 'Int'>;
    readonly rating: Prisma.FieldRef<"Review", 'Int'>;
    readonly pros: Prisma.FieldRef<"Review", 'String'>;
    readonly cons: Prisma.FieldRef<"Review", 'String'>;
    readonly reviewText: Prisma.FieldRef<"Review", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Review", 'DateTime'>;
}
export type ReviewFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReviewSelect<ExtArgs> | null;
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    include?: Prisma.ReviewInclude<ExtArgs> | null;
    where: Prisma.ReviewWhereUniqueInput;
};
export type ReviewFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReviewSelect<ExtArgs> | null;
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    include?: Prisma.ReviewInclude<ExtArgs> | null;
    where: Prisma.ReviewWhereUniqueInput;
};
export type ReviewFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReviewSelect<ExtArgs> | null;
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    include?: Prisma.ReviewInclude<ExtArgs> | null;
    where?: Prisma.ReviewWhereInput;
    orderBy?: Prisma.ReviewOrderByWithRelationInput | Prisma.ReviewOrderByWithRelationInput[];
    cursor?: Prisma.ReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReviewScalarFieldEnum | Prisma.ReviewScalarFieldEnum[];
};
export type ReviewFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReviewSelect<ExtArgs> | null;
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    include?: Prisma.ReviewInclude<ExtArgs> | null;
    where?: Prisma.ReviewWhereInput;
    orderBy?: Prisma.ReviewOrderByWithRelationInput | Prisma.ReviewOrderByWithRelationInput[];
    cursor?: Prisma.ReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReviewScalarFieldEnum | Prisma.ReviewScalarFieldEnum[];
};
export type ReviewFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReviewSelect<ExtArgs> | null;
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    include?: Prisma.ReviewInclude<ExtArgs> | null;
    where?: Prisma.ReviewWhereInput;
    orderBy?: Prisma.ReviewOrderByWithRelationInput | Prisma.ReviewOrderByWithRelationInput[];
    cursor?: Prisma.ReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReviewScalarFieldEnum | Prisma.ReviewScalarFieldEnum[];
};
export type ReviewCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReviewSelect<ExtArgs> | null;
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    include?: Prisma.ReviewInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReviewCreateInput, Prisma.ReviewUncheckedCreateInput>;
};
export type ReviewCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ReviewCreateManyInput | Prisma.ReviewCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ReviewUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReviewSelect<ExtArgs> | null;
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    include?: Prisma.ReviewInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReviewUpdateInput, Prisma.ReviewUncheckedUpdateInput>;
    where: Prisma.ReviewWhereUniqueInput;
};
export type ReviewUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ReviewUpdateManyMutationInput, Prisma.ReviewUncheckedUpdateManyInput>;
    where?: Prisma.ReviewWhereInput;
    limit?: number;
};
export type ReviewUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReviewSelect<ExtArgs> | null;
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    include?: Prisma.ReviewInclude<ExtArgs> | null;
    where: Prisma.ReviewWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReviewCreateInput, Prisma.ReviewUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ReviewUpdateInput, Prisma.ReviewUncheckedUpdateInput>;
};
export type ReviewDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReviewSelect<ExtArgs> | null;
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    include?: Prisma.ReviewInclude<ExtArgs> | null;
    where: Prisma.ReviewWhereUniqueInput;
};
export type ReviewDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReviewWhereInput;
    limit?: number;
};
export type ReviewDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReviewSelect<ExtArgs> | null;
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    include?: Prisma.ReviewInclude<ExtArgs> | null;
};
export {};
