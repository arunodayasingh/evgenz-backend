import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type SeoMetadataModel = runtime.Types.Result.DefaultSelection<Prisma.$SeoMetadataPayload>;
export type AggregateSeoMetadata = {
    _count: SeoMetadataCountAggregateOutputType | null;
    _avg: SeoMetadataAvgAggregateOutputType | null;
    _sum: SeoMetadataSumAggregateOutputType | null;
    _min: SeoMetadataMinAggregateOutputType | null;
    _max: SeoMetadataMaxAggregateOutputType | null;
};
export type SeoMetadataAvgAggregateOutputType = {
    id: number | null;
    entityId: number | null;
};
export type SeoMetadataSumAggregateOutputType = {
    id: number | null;
    entityId: number | null;
};
export type SeoMetadataMinAggregateOutputType = {
    id: number | null;
    entityType: string | null;
    entityId: number | null;
    title: string | null;
    description: string | null;
    keywords: string | null;
    isIndexable: boolean | null;
    h1Heading: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SeoMetadataMaxAggregateOutputType = {
    id: number | null;
    entityType: string | null;
    entityId: number | null;
    title: string | null;
    description: string | null;
    keywords: string | null;
    isIndexable: boolean | null;
    h1Heading: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SeoMetadataCountAggregateOutputType = {
    id: number;
    entityType: number;
    entityId: number;
    title: number;
    description: number;
    keywords: number;
    isIndexable: number;
    h1Heading: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SeoMetadataAvgAggregateInputType = {
    id?: true;
    entityId?: true;
};
export type SeoMetadataSumAggregateInputType = {
    id?: true;
    entityId?: true;
};
export type SeoMetadataMinAggregateInputType = {
    id?: true;
    entityType?: true;
    entityId?: true;
    title?: true;
    description?: true;
    keywords?: true;
    isIndexable?: true;
    h1Heading?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SeoMetadataMaxAggregateInputType = {
    id?: true;
    entityType?: true;
    entityId?: true;
    title?: true;
    description?: true;
    keywords?: true;
    isIndexable?: true;
    h1Heading?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SeoMetadataCountAggregateInputType = {
    id?: true;
    entityType?: true;
    entityId?: true;
    title?: true;
    description?: true;
    keywords?: true;
    isIndexable?: true;
    h1Heading?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SeoMetadataAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SeoMetadataWhereInput;
    orderBy?: Prisma.SeoMetadataOrderByWithRelationInput | Prisma.SeoMetadataOrderByWithRelationInput[];
    cursor?: Prisma.SeoMetadataWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SeoMetadataCountAggregateInputType;
    _avg?: SeoMetadataAvgAggregateInputType;
    _sum?: SeoMetadataSumAggregateInputType;
    _min?: SeoMetadataMinAggregateInputType;
    _max?: SeoMetadataMaxAggregateInputType;
};
export type GetSeoMetadataAggregateType<T extends SeoMetadataAggregateArgs> = {
    [P in keyof T & keyof AggregateSeoMetadata]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSeoMetadata[P]> : Prisma.GetScalarType<T[P], AggregateSeoMetadata[P]>;
};
export type SeoMetadataGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SeoMetadataWhereInput;
    orderBy?: Prisma.SeoMetadataOrderByWithAggregationInput | Prisma.SeoMetadataOrderByWithAggregationInput[];
    by: Prisma.SeoMetadataScalarFieldEnum[] | Prisma.SeoMetadataScalarFieldEnum;
    having?: Prisma.SeoMetadataScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SeoMetadataCountAggregateInputType | true;
    _avg?: SeoMetadataAvgAggregateInputType;
    _sum?: SeoMetadataSumAggregateInputType;
    _min?: SeoMetadataMinAggregateInputType;
    _max?: SeoMetadataMaxAggregateInputType;
};
export type SeoMetadataGroupByOutputType = {
    id: number;
    entityType: string;
    entityId: number;
    title: string;
    description: string | null;
    keywords: string | null;
    isIndexable: boolean;
    h1Heading: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: SeoMetadataCountAggregateOutputType | null;
    _avg: SeoMetadataAvgAggregateOutputType | null;
    _sum: SeoMetadataSumAggregateOutputType | null;
    _min: SeoMetadataMinAggregateOutputType | null;
    _max: SeoMetadataMaxAggregateOutputType | null;
};
type GetSeoMetadataGroupByPayload<T extends SeoMetadataGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SeoMetadataGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SeoMetadataGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SeoMetadataGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SeoMetadataGroupByOutputType[P]>;
}>>;
export type SeoMetadataWhereInput = {
    AND?: Prisma.SeoMetadataWhereInput | Prisma.SeoMetadataWhereInput[];
    OR?: Prisma.SeoMetadataWhereInput[];
    NOT?: Prisma.SeoMetadataWhereInput | Prisma.SeoMetadataWhereInput[];
    id?: Prisma.IntFilter<"SeoMetadata"> | number;
    entityType?: Prisma.StringFilter<"SeoMetadata"> | string;
    entityId?: Prisma.IntFilter<"SeoMetadata"> | number;
    title?: Prisma.StringFilter<"SeoMetadata"> | string;
    description?: Prisma.StringNullableFilter<"SeoMetadata"> | string | null;
    keywords?: Prisma.StringNullableFilter<"SeoMetadata"> | string | null;
    isIndexable?: Prisma.BoolFilter<"SeoMetadata"> | boolean;
    h1Heading?: Prisma.StringNullableFilter<"SeoMetadata"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SeoMetadata"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SeoMetadata"> | Date | string;
};
export type SeoMetadataOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    keywords?: Prisma.SortOrderInput | Prisma.SortOrder;
    isIndexable?: Prisma.SortOrder;
    h1Heading?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _relevance?: Prisma.SeoMetadataOrderByRelevanceInput;
};
export type SeoMetadataWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    entityType_entityId?: Prisma.SeoMetadataEntityTypeEntityIdCompoundUniqueInput;
    AND?: Prisma.SeoMetadataWhereInput | Prisma.SeoMetadataWhereInput[];
    OR?: Prisma.SeoMetadataWhereInput[];
    NOT?: Prisma.SeoMetadataWhereInput | Prisma.SeoMetadataWhereInput[];
    entityType?: Prisma.StringFilter<"SeoMetadata"> | string;
    entityId?: Prisma.IntFilter<"SeoMetadata"> | number;
    title?: Prisma.StringFilter<"SeoMetadata"> | string;
    description?: Prisma.StringNullableFilter<"SeoMetadata"> | string | null;
    keywords?: Prisma.StringNullableFilter<"SeoMetadata"> | string | null;
    isIndexable?: Prisma.BoolFilter<"SeoMetadata"> | boolean;
    h1Heading?: Prisma.StringNullableFilter<"SeoMetadata"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"SeoMetadata"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"SeoMetadata"> | Date | string;
}, "id" | "entityType_entityId">;
export type SeoMetadataOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    keywords?: Prisma.SortOrderInput | Prisma.SortOrder;
    isIndexable?: Prisma.SortOrder;
    h1Heading?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SeoMetadataCountOrderByAggregateInput;
    _avg?: Prisma.SeoMetadataAvgOrderByAggregateInput;
    _max?: Prisma.SeoMetadataMaxOrderByAggregateInput;
    _min?: Prisma.SeoMetadataMinOrderByAggregateInput;
    _sum?: Prisma.SeoMetadataSumOrderByAggregateInput;
};
export type SeoMetadataScalarWhereWithAggregatesInput = {
    AND?: Prisma.SeoMetadataScalarWhereWithAggregatesInput | Prisma.SeoMetadataScalarWhereWithAggregatesInput[];
    OR?: Prisma.SeoMetadataScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SeoMetadataScalarWhereWithAggregatesInput | Prisma.SeoMetadataScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"SeoMetadata"> | number;
    entityType?: Prisma.StringWithAggregatesFilter<"SeoMetadata"> | string;
    entityId?: Prisma.IntWithAggregatesFilter<"SeoMetadata"> | number;
    title?: Prisma.StringWithAggregatesFilter<"SeoMetadata"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"SeoMetadata"> | string | null;
    keywords?: Prisma.StringNullableWithAggregatesFilter<"SeoMetadata"> | string | null;
    isIndexable?: Prisma.BoolWithAggregatesFilter<"SeoMetadata"> | boolean;
    h1Heading?: Prisma.StringNullableWithAggregatesFilter<"SeoMetadata"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SeoMetadata"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"SeoMetadata"> | Date | string;
};
export type SeoMetadataCreateInput = {
    entityType: string;
    entityId: number;
    title: string;
    description?: string | null;
    keywords?: string | null;
    isIndexable?: boolean;
    h1Heading?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SeoMetadataUncheckedCreateInput = {
    id?: number;
    entityType: string;
    entityId: number;
    title: string;
    description?: string | null;
    keywords?: string | null;
    isIndexable?: boolean;
    h1Heading?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SeoMetadataUpdateInput = {
    entityType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityId?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keywords?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isIndexable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    h1Heading?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SeoMetadataUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    entityType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityId?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keywords?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isIndexable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    h1Heading?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SeoMetadataCreateManyInput = {
    id?: number;
    entityType: string;
    entityId: number;
    title: string;
    description?: string | null;
    keywords?: string | null;
    isIndexable?: boolean;
    h1Heading?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SeoMetadataUpdateManyMutationInput = {
    entityType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityId?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keywords?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isIndexable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    h1Heading?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SeoMetadataUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    entityType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityId?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    keywords?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isIndexable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    h1Heading?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SeoMetadataOrderByRelevanceInput = {
    fields: Prisma.SeoMetadataOrderByRelevanceFieldEnum | Prisma.SeoMetadataOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type SeoMetadataEntityTypeEntityIdCompoundUniqueInput = {
    entityType: string;
    entityId: number;
};
export type SeoMetadataCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    keywords?: Prisma.SortOrder;
    isIndexable?: Prisma.SortOrder;
    h1Heading?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SeoMetadataAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
};
export type SeoMetadataMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    keywords?: Prisma.SortOrder;
    isIndexable?: Prisma.SortOrder;
    h1Heading?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SeoMetadataMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    keywords?: Prisma.SortOrder;
    isIndexable?: Prisma.SortOrder;
    h1Heading?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SeoMetadataSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
};
export type SeoMetadataSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    entityType?: boolean;
    entityId?: boolean;
    title?: boolean;
    description?: boolean;
    keywords?: boolean;
    isIndexable?: boolean;
    h1Heading?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["seoMetadata"]>;
export type SeoMetadataSelectScalar = {
    id?: boolean;
    entityType?: boolean;
    entityId?: boolean;
    title?: boolean;
    description?: boolean;
    keywords?: boolean;
    isIndexable?: boolean;
    h1Heading?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SeoMetadataOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "entityType" | "entityId" | "title" | "description" | "keywords" | "isIndexable" | "h1Heading" | "createdAt" | "updatedAt", ExtArgs["result"]["seoMetadata"]>;
export type $SeoMetadataPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SeoMetadata";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        entityType: string;
        entityId: number;
        title: string;
        description: string | null;
        keywords: string | null;
        isIndexable: boolean;
        h1Heading: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["seoMetadata"]>;
    composites: {};
};
export type SeoMetadataGetPayload<S extends boolean | null | undefined | SeoMetadataDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SeoMetadataPayload, S>;
export type SeoMetadataCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SeoMetadataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SeoMetadataCountAggregateInputType | true;
};
export interface SeoMetadataDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SeoMetadata'];
        meta: {
            name: 'SeoMetadata';
        };
    };
    findUnique<T extends SeoMetadataFindUniqueArgs>(args: Prisma.SelectSubset<T, SeoMetadataFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SeoMetadataClient<runtime.Types.Result.GetResult<Prisma.$SeoMetadataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SeoMetadataFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SeoMetadataFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SeoMetadataClient<runtime.Types.Result.GetResult<Prisma.$SeoMetadataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SeoMetadataFindFirstArgs>(args?: Prisma.SelectSubset<T, SeoMetadataFindFirstArgs<ExtArgs>>): Prisma.Prisma__SeoMetadataClient<runtime.Types.Result.GetResult<Prisma.$SeoMetadataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SeoMetadataFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SeoMetadataFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SeoMetadataClient<runtime.Types.Result.GetResult<Prisma.$SeoMetadataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SeoMetadataFindManyArgs>(args?: Prisma.SelectSubset<T, SeoMetadataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SeoMetadataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SeoMetadataCreateArgs>(args: Prisma.SelectSubset<T, SeoMetadataCreateArgs<ExtArgs>>): Prisma.Prisma__SeoMetadataClient<runtime.Types.Result.GetResult<Prisma.$SeoMetadataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SeoMetadataCreateManyArgs>(args?: Prisma.SelectSubset<T, SeoMetadataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends SeoMetadataDeleteArgs>(args: Prisma.SelectSubset<T, SeoMetadataDeleteArgs<ExtArgs>>): Prisma.Prisma__SeoMetadataClient<runtime.Types.Result.GetResult<Prisma.$SeoMetadataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SeoMetadataUpdateArgs>(args: Prisma.SelectSubset<T, SeoMetadataUpdateArgs<ExtArgs>>): Prisma.Prisma__SeoMetadataClient<runtime.Types.Result.GetResult<Prisma.$SeoMetadataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SeoMetadataDeleteManyArgs>(args?: Prisma.SelectSubset<T, SeoMetadataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SeoMetadataUpdateManyArgs>(args: Prisma.SelectSubset<T, SeoMetadataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends SeoMetadataUpsertArgs>(args: Prisma.SelectSubset<T, SeoMetadataUpsertArgs<ExtArgs>>): Prisma.Prisma__SeoMetadataClient<runtime.Types.Result.GetResult<Prisma.$SeoMetadataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SeoMetadataCountArgs>(args?: Prisma.Subset<T, SeoMetadataCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SeoMetadataCountAggregateOutputType> : number>;
    aggregate<T extends SeoMetadataAggregateArgs>(args: Prisma.Subset<T, SeoMetadataAggregateArgs>): Prisma.PrismaPromise<GetSeoMetadataAggregateType<T>>;
    groupBy<T extends SeoMetadataGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SeoMetadataGroupByArgs['orderBy'];
    } : {
        orderBy?: SeoMetadataGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SeoMetadataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeoMetadataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SeoMetadataFieldRefs;
}
export interface Prisma__SeoMetadataClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SeoMetadataFieldRefs {
    readonly id: Prisma.FieldRef<"SeoMetadata", 'Int'>;
    readonly entityType: Prisma.FieldRef<"SeoMetadata", 'String'>;
    readonly entityId: Prisma.FieldRef<"SeoMetadata", 'Int'>;
    readonly title: Prisma.FieldRef<"SeoMetadata", 'String'>;
    readonly description: Prisma.FieldRef<"SeoMetadata", 'String'>;
    readonly keywords: Prisma.FieldRef<"SeoMetadata", 'String'>;
    readonly isIndexable: Prisma.FieldRef<"SeoMetadata", 'Boolean'>;
    readonly h1Heading: Prisma.FieldRef<"SeoMetadata", 'String'>;
    readonly createdAt: Prisma.FieldRef<"SeoMetadata", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"SeoMetadata", 'DateTime'>;
}
export type SeoMetadataFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeoMetadataSelect<ExtArgs> | null;
    omit?: Prisma.SeoMetadataOmit<ExtArgs> | null;
    where: Prisma.SeoMetadataWhereUniqueInput;
};
export type SeoMetadataFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeoMetadataSelect<ExtArgs> | null;
    omit?: Prisma.SeoMetadataOmit<ExtArgs> | null;
    where: Prisma.SeoMetadataWhereUniqueInput;
};
export type SeoMetadataFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeoMetadataSelect<ExtArgs> | null;
    omit?: Prisma.SeoMetadataOmit<ExtArgs> | null;
    where?: Prisma.SeoMetadataWhereInput;
    orderBy?: Prisma.SeoMetadataOrderByWithRelationInput | Prisma.SeoMetadataOrderByWithRelationInput[];
    cursor?: Prisma.SeoMetadataWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SeoMetadataScalarFieldEnum | Prisma.SeoMetadataScalarFieldEnum[];
};
export type SeoMetadataFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeoMetadataSelect<ExtArgs> | null;
    omit?: Prisma.SeoMetadataOmit<ExtArgs> | null;
    where?: Prisma.SeoMetadataWhereInput;
    orderBy?: Prisma.SeoMetadataOrderByWithRelationInput | Prisma.SeoMetadataOrderByWithRelationInput[];
    cursor?: Prisma.SeoMetadataWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SeoMetadataScalarFieldEnum | Prisma.SeoMetadataScalarFieldEnum[];
};
export type SeoMetadataFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeoMetadataSelect<ExtArgs> | null;
    omit?: Prisma.SeoMetadataOmit<ExtArgs> | null;
    where?: Prisma.SeoMetadataWhereInput;
    orderBy?: Prisma.SeoMetadataOrderByWithRelationInput | Prisma.SeoMetadataOrderByWithRelationInput[];
    cursor?: Prisma.SeoMetadataWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SeoMetadataScalarFieldEnum | Prisma.SeoMetadataScalarFieldEnum[];
};
export type SeoMetadataCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeoMetadataSelect<ExtArgs> | null;
    omit?: Prisma.SeoMetadataOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SeoMetadataCreateInput, Prisma.SeoMetadataUncheckedCreateInput>;
};
export type SeoMetadataCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SeoMetadataCreateManyInput | Prisma.SeoMetadataCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SeoMetadataUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeoMetadataSelect<ExtArgs> | null;
    omit?: Prisma.SeoMetadataOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SeoMetadataUpdateInput, Prisma.SeoMetadataUncheckedUpdateInput>;
    where: Prisma.SeoMetadataWhereUniqueInput;
};
export type SeoMetadataUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SeoMetadataUpdateManyMutationInput, Prisma.SeoMetadataUncheckedUpdateManyInput>;
    where?: Prisma.SeoMetadataWhereInput;
    limit?: number;
};
export type SeoMetadataUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeoMetadataSelect<ExtArgs> | null;
    omit?: Prisma.SeoMetadataOmit<ExtArgs> | null;
    where: Prisma.SeoMetadataWhereUniqueInput;
    create: Prisma.XOR<Prisma.SeoMetadataCreateInput, Prisma.SeoMetadataUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SeoMetadataUpdateInput, Prisma.SeoMetadataUncheckedUpdateInput>;
};
export type SeoMetadataDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeoMetadataSelect<ExtArgs> | null;
    omit?: Prisma.SeoMetadataOmit<ExtArgs> | null;
    where: Prisma.SeoMetadataWhereUniqueInput;
};
export type SeoMetadataDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SeoMetadataWhereInput;
    limit?: number;
};
export type SeoMetadataDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeoMetadataSelect<ExtArgs> | null;
    omit?: Prisma.SeoMetadataOmit<ExtArgs> | null;
};
export {};
