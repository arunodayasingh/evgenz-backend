import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type ImageModel = runtime.Types.Result.DefaultSelection<Prisma.$ImagePayload>;
export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null;
    _avg: ImageAvgAggregateOutputType | null;
    _sum: ImageSumAggregateOutputType | null;
    _min: ImageMinAggregateOutputType | null;
    _max: ImageMaxAggregateOutputType | null;
};
export type ImageAvgAggregateOutputType = {
    id: number | null;
    entityId: number | null;
    sortOrder: number | null;
};
export type ImageSumAggregateOutputType = {
    id: number | null;
    entityId: number | null;
    sortOrder: number | null;
};
export type ImageMinAggregateOutputType = {
    id: number | null;
    entityType: $Enums.ImageEntityType | null;
    entityId: number | null;
    imageUrl: string | null;
    isPrimary: boolean | null;
    sortOrder: number | null;
    createdAt: Date | null;
};
export type ImageMaxAggregateOutputType = {
    id: number | null;
    entityType: $Enums.ImageEntityType | null;
    entityId: number | null;
    imageUrl: string | null;
    isPrimary: boolean | null;
    sortOrder: number | null;
    createdAt: Date | null;
};
export type ImageCountAggregateOutputType = {
    id: number;
    entityType: number;
    entityId: number;
    imageUrl: number;
    isPrimary: number;
    sortOrder: number;
    createdAt: number;
    _all: number;
};
export type ImageAvgAggregateInputType = {
    id?: true;
    entityId?: true;
    sortOrder?: true;
};
export type ImageSumAggregateInputType = {
    id?: true;
    entityId?: true;
    sortOrder?: true;
};
export type ImageMinAggregateInputType = {
    id?: true;
    entityType?: true;
    entityId?: true;
    imageUrl?: true;
    isPrimary?: true;
    sortOrder?: true;
    createdAt?: true;
};
export type ImageMaxAggregateInputType = {
    id?: true;
    entityType?: true;
    entityId?: true;
    imageUrl?: true;
    isPrimary?: true;
    sortOrder?: true;
    createdAt?: true;
};
export type ImageCountAggregateInputType = {
    id?: true;
    entityType?: true;
    entityId?: true;
    imageUrl?: true;
    isPrimary?: true;
    sortOrder?: true;
    createdAt?: true;
    _all?: true;
};
export type ImageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ImageWhereInput;
    orderBy?: Prisma.ImageOrderByWithRelationInput | Prisma.ImageOrderByWithRelationInput[];
    cursor?: Prisma.ImageWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ImageCountAggregateInputType;
    _avg?: ImageAvgAggregateInputType;
    _sum?: ImageSumAggregateInputType;
    _min?: ImageMinAggregateInputType;
    _max?: ImageMaxAggregateInputType;
};
export type GetImageAggregateType<T extends ImageAggregateArgs> = {
    [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateImage[P]> : Prisma.GetScalarType<T[P], AggregateImage[P]>;
};
export type ImageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ImageWhereInput;
    orderBy?: Prisma.ImageOrderByWithAggregationInput | Prisma.ImageOrderByWithAggregationInput[];
    by: Prisma.ImageScalarFieldEnum[] | Prisma.ImageScalarFieldEnum;
    having?: Prisma.ImageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ImageCountAggregateInputType | true;
    _avg?: ImageAvgAggregateInputType;
    _sum?: ImageSumAggregateInputType;
    _min?: ImageMinAggregateInputType;
    _max?: ImageMaxAggregateInputType;
};
export type ImageGroupByOutputType = {
    id: number;
    entityType: $Enums.ImageEntityType;
    entityId: number;
    imageUrl: string;
    isPrimary: boolean;
    sortOrder: number;
    createdAt: Date;
    _count: ImageCountAggregateOutputType | null;
    _avg: ImageAvgAggregateOutputType | null;
    _sum: ImageSumAggregateOutputType | null;
    _min: ImageMinAggregateOutputType | null;
    _max: ImageMaxAggregateOutputType | null;
};
type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ImageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ImageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ImageGroupByOutputType[P]>;
}>>;
export type ImageWhereInput = {
    AND?: Prisma.ImageWhereInput | Prisma.ImageWhereInput[];
    OR?: Prisma.ImageWhereInput[];
    NOT?: Prisma.ImageWhereInput | Prisma.ImageWhereInput[];
    id?: Prisma.IntFilter<"Image"> | number;
    entityType?: Prisma.EnumImageEntityTypeFilter<"Image"> | $Enums.ImageEntityType;
    entityId?: Prisma.IntFilter<"Image"> | number;
    imageUrl?: Prisma.StringFilter<"Image"> | string;
    isPrimary?: Prisma.BoolFilter<"Image"> | boolean;
    sortOrder?: Prisma.IntFilter<"Image"> | number;
    createdAt?: Prisma.DateTimeFilter<"Image"> | Date | string;
};
export type ImageOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _relevance?: Prisma.ImageOrderByRelevanceInput;
};
export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ImageWhereInput | Prisma.ImageWhereInput[];
    OR?: Prisma.ImageWhereInput[];
    NOT?: Prisma.ImageWhereInput | Prisma.ImageWhereInput[];
    entityType?: Prisma.EnumImageEntityTypeFilter<"Image"> | $Enums.ImageEntityType;
    entityId?: Prisma.IntFilter<"Image"> | number;
    imageUrl?: Prisma.StringFilter<"Image"> | string;
    isPrimary?: Prisma.BoolFilter<"Image"> | boolean;
    sortOrder?: Prisma.IntFilter<"Image"> | number;
    createdAt?: Prisma.DateTimeFilter<"Image"> | Date | string;
}, "id">;
export type ImageOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ImageCountOrderByAggregateInput;
    _avg?: Prisma.ImageAvgOrderByAggregateInput;
    _max?: Prisma.ImageMaxOrderByAggregateInput;
    _min?: Prisma.ImageMinOrderByAggregateInput;
    _sum?: Prisma.ImageSumOrderByAggregateInput;
};
export type ImageScalarWhereWithAggregatesInput = {
    AND?: Prisma.ImageScalarWhereWithAggregatesInput | Prisma.ImageScalarWhereWithAggregatesInput[];
    OR?: Prisma.ImageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ImageScalarWhereWithAggregatesInput | Prisma.ImageScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Image"> | number;
    entityType?: Prisma.EnumImageEntityTypeWithAggregatesFilter<"Image"> | $Enums.ImageEntityType;
    entityId?: Prisma.IntWithAggregatesFilter<"Image"> | number;
    imageUrl?: Prisma.StringWithAggregatesFilter<"Image"> | string;
    isPrimary?: Prisma.BoolWithAggregatesFilter<"Image"> | boolean;
    sortOrder?: Prisma.IntWithAggregatesFilter<"Image"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Image"> | Date | string;
};
export type ImageCreateInput = {
    entityType: $Enums.ImageEntityType;
    entityId: number;
    imageUrl: string;
    isPrimary?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
};
export type ImageUncheckedCreateInput = {
    id?: number;
    entityType: $Enums.ImageEntityType;
    entityId: number;
    imageUrl: string;
    isPrimary?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
};
export type ImageUpdateInput = {
    entityType?: Prisma.EnumImageEntityTypeFieldUpdateOperationsInput | $Enums.ImageEntityType;
    entityId?: Prisma.IntFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ImageUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    entityType?: Prisma.EnumImageEntityTypeFieldUpdateOperationsInput | $Enums.ImageEntityType;
    entityId?: Prisma.IntFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ImageCreateManyInput = {
    id?: number;
    entityType: $Enums.ImageEntityType;
    entityId: number;
    imageUrl: string;
    isPrimary?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
};
export type ImageUpdateManyMutationInput = {
    entityType?: Prisma.EnumImageEntityTypeFieldUpdateOperationsInput | $Enums.ImageEntityType;
    entityId?: Prisma.IntFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ImageUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    entityType?: Prisma.EnumImageEntityTypeFieldUpdateOperationsInput | $Enums.ImageEntityType;
    entityId?: Prisma.IntFieldUpdateOperationsInput | number;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    isPrimary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ImageOrderByRelevanceInput = {
    fields: Prisma.ImageOrderByRelevanceFieldEnum | Prisma.ImageOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ImageCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ImageAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type ImageMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ImageMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    isPrimary?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ImageSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type EnumImageEntityTypeFieldUpdateOperationsInput = {
    set?: $Enums.ImageEntityType;
};
export type ImageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    entityType?: boolean;
    entityId?: boolean;
    imageUrl?: boolean;
    isPrimary?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["image"]>;
export type ImageSelectScalar = {
    id?: boolean;
    entityType?: boolean;
    entityId?: boolean;
    imageUrl?: boolean;
    isPrimary?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
};
export type ImageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "entityType" | "entityId" | "imageUrl" | "isPrimary" | "sortOrder" | "createdAt", ExtArgs["result"]["image"]>;
export type $ImagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Image";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        entityType: $Enums.ImageEntityType;
        entityId: number;
        imageUrl: string;
        isPrimary: boolean;
        sortOrder: number;
        createdAt: Date;
    }, ExtArgs["result"]["image"]>;
    composites: {};
};
export type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ImagePayload, S>;
export type ImageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ImageCountAggregateInputType | true;
};
export interface ImageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Image'];
        meta: {
            name: 'Image';
        };
    };
    findUnique<T extends ImageFindUniqueArgs>(args: Prisma.SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ImageClient<runtime.Types.Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ImageClient<runtime.Types.Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ImageFindFirstArgs>(args?: Prisma.SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma.Prisma__ImageClient<runtime.Types.Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ImageClient<runtime.Types.Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ImageFindManyArgs>(args?: Prisma.SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ImageCreateArgs>(args: Prisma.SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma.Prisma__ImageClient<runtime.Types.Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ImageCreateManyArgs>(args?: Prisma.SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends ImageDeleteArgs>(args: Prisma.SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma.Prisma__ImageClient<runtime.Types.Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ImageUpdateArgs>(args: Prisma.SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma.Prisma__ImageClient<runtime.Types.Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ImageDeleteManyArgs>(args?: Prisma.SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ImageUpdateManyArgs>(args: Prisma.SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends ImageUpsertArgs>(args: Prisma.SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma.Prisma__ImageClient<runtime.Types.Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ImageCountArgs>(args?: Prisma.Subset<T, ImageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ImageCountAggregateOutputType> : number>;
    aggregate<T extends ImageAggregateArgs>(args: Prisma.Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>;
    groupBy<T extends ImageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ImageGroupByArgs['orderBy'];
    } : {
        orderBy?: ImageGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ImageFieldRefs;
}
export interface Prisma__ImageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ImageFieldRefs {
    readonly id: Prisma.FieldRef<"Image", 'Int'>;
    readonly entityType: Prisma.FieldRef<"Image", 'ImageEntityType'>;
    readonly entityId: Prisma.FieldRef<"Image", 'Int'>;
    readonly imageUrl: Prisma.FieldRef<"Image", 'String'>;
    readonly isPrimary: Prisma.FieldRef<"Image", 'Boolean'>;
    readonly sortOrder: Prisma.FieldRef<"Image", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Image", 'DateTime'>;
}
export type ImageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImageSelect<ExtArgs> | null;
    omit?: Prisma.ImageOmit<ExtArgs> | null;
    where: Prisma.ImageWhereUniqueInput;
};
export type ImageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImageSelect<ExtArgs> | null;
    omit?: Prisma.ImageOmit<ExtArgs> | null;
    where: Prisma.ImageWhereUniqueInput;
};
export type ImageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImageSelect<ExtArgs> | null;
    omit?: Prisma.ImageOmit<ExtArgs> | null;
    where?: Prisma.ImageWhereInput;
    orderBy?: Prisma.ImageOrderByWithRelationInput | Prisma.ImageOrderByWithRelationInput[];
    cursor?: Prisma.ImageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ImageScalarFieldEnum | Prisma.ImageScalarFieldEnum[];
};
export type ImageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImageSelect<ExtArgs> | null;
    omit?: Prisma.ImageOmit<ExtArgs> | null;
    where?: Prisma.ImageWhereInput;
    orderBy?: Prisma.ImageOrderByWithRelationInput | Prisma.ImageOrderByWithRelationInput[];
    cursor?: Prisma.ImageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ImageScalarFieldEnum | Prisma.ImageScalarFieldEnum[];
};
export type ImageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImageSelect<ExtArgs> | null;
    omit?: Prisma.ImageOmit<ExtArgs> | null;
    where?: Prisma.ImageWhereInput;
    orderBy?: Prisma.ImageOrderByWithRelationInput | Prisma.ImageOrderByWithRelationInput[];
    cursor?: Prisma.ImageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ImageScalarFieldEnum | Prisma.ImageScalarFieldEnum[];
};
export type ImageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImageSelect<ExtArgs> | null;
    omit?: Prisma.ImageOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ImageCreateInput, Prisma.ImageUncheckedCreateInput>;
};
export type ImageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ImageCreateManyInput | Prisma.ImageCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ImageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImageSelect<ExtArgs> | null;
    omit?: Prisma.ImageOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ImageUpdateInput, Prisma.ImageUncheckedUpdateInput>;
    where: Prisma.ImageWhereUniqueInput;
};
export type ImageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ImageUpdateManyMutationInput, Prisma.ImageUncheckedUpdateManyInput>;
    where?: Prisma.ImageWhereInput;
    limit?: number;
};
export type ImageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImageSelect<ExtArgs> | null;
    omit?: Prisma.ImageOmit<ExtArgs> | null;
    where: Prisma.ImageWhereUniqueInput;
    create: Prisma.XOR<Prisma.ImageCreateInput, Prisma.ImageUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ImageUpdateInput, Prisma.ImageUncheckedUpdateInput>;
};
export type ImageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImageSelect<ExtArgs> | null;
    omit?: Prisma.ImageOmit<ExtArgs> | null;
    where: Prisma.ImageWhereUniqueInput;
};
export type ImageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ImageWhereInput;
    limit?: number;
};
export type ImageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImageSelect<ExtArgs> | null;
    omit?: Prisma.ImageOmit<ExtArgs> | null;
};
export {};
