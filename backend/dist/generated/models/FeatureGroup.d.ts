import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type FeatureGroupModel = runtime.Types.Result.DefaultSelection<Prisma.$FeatureGroupPayload>;
export type AggregateFeatureGroup = {
    _count: FeatureGroupCountAggregateOutputType | null;
    _avg: FeatureGroupAvgAggregateOutputType | null;
    _sum: FeatureGroupSumAggregateOutputType | null;
    _min: FeatureGroupMinAggregateOutputType | null;
    _max: FeatureGroupMaxAggregateOutputType | null;
};
export type FeatureGroupAvgAggregateOutputType = {
    id: number | null;
};
export type FeatureGroupSumAggregateOutputType = {
    id: number | null;
};
export type FeatureGroupMinAggregateOutputType = {
    id: number | null;
    name: string | null;
};
export type FeatureGroupMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
};
export type FeatureGroupCountAggregateOutputType = {
    id: number;
    name: number;
    _all: number;
};
export type FeatureGroupAvgAggregateInputType = {
    id?: true;
};
export type FeatureGroupSumAggregateInputType = {
    id?: true;
};
export type FeatureGroupMinAggregateInputType = {
    id?: true;
    name?: true;
};
export type FeatureGroupMaxAggregateInputType = {
    id?: true;
    name?: true;
};
export type FeatureGroupCountAggregateInputType = {
    id?: true;
    name?: true;
    _all?: true;
};
export type FeatureGroupAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeatureGroupWhereInput;
    orderBy?: Prisma.FeatureGroupOrderByWithRelationInput | Prisma.FeatureGroupOrderByWithRelationInput[];
    cursor?: Prisma.FeatureGroupWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FeatureGroupCountAggregateInputType;
    _avg?: FeatureGroupAvgAggregateInputType;
    _sum?: FeatureGroupSumAggregateInputType;
    _min?: FeatureGroupMinAggregateInputType;
    _max?: FeatureGroupMaxAggregateInputType;
};
export type GetFeatureGroupAggregateType<T extends FeatureGroupAggregateArgs> = {
    [P in keyof T & keyof AggregateFeatureGroup]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFeatureGroup[P]> : Prisma.GetScalarType<T[P], AggregateFeatureGroup[P]>;
};
export type FeatureGroupGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeatureGroupWhereInput;
    orderBy?: Prisma.FeatureGroupOrderByWithAggregationInput | Prisma.FeatureGroupOrderByWithAggregationInput[];
    by: Prisma.FeatureGroupScalarFieldEnum[] | Prisma.FeatureGroupScalarFieldEnum;
    having?: Prisma.FeatureGroupScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FeatureGroupCountAggregateInputType | true;
    _avg?: FeatureGroupAvgAggregateInputType;
    _sum?: FeatureGroupSumAggregateInputType;
    _min?: FeatureGroupMinAggregateInputType;
    _max?: FeatureGroupMaxAggregateInputType;
};
export type FeatureGroupGroupByOutputType = {
    id: number;
    name: string;
    _count: FeatureGroupCountAggregateOutputType | null;
    _avg: FeatureGroupAvgAggregateOutputType | null;
    _sum: FeatureGroupSumAggregateOutputType | null;
    _min: FeatureGroupMinAggregateOutputType | null;
    _max: FeatureGroupMaxAggregateOutputType | null;
};
type GetFeatureGroupGroupByPayload<T extends FeatureGroupGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FeatureGroupGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FeatureGroupGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FeatureGroupGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FeatureGroupGroupByOutputType[P]>;
}>>;
export type FeatureGroupWhereInput = {
    AND?: Prisma.FeatureGroupWhereInput | Prisma.FeatureGroupWhereInput[];
    OR?: Prisma.FeatureGroupWhereInput[];
    NOT?: Prisma.FeatureGroupWhereInput | Prisma.FeatureGroupWhereInput[];
    id?: Prisma.IntFilter<"FeatureGroup"> | number;
    name?: Prisma.StringFilter<"FeatureGroup"> | string;
    features?: Prisma.FeatureListRelationFilter;
};
export type FeatureGroupOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    features?: Prisma.FeatureOrderByRelationAggregateInput;
    _relevance?: Prisma.FeatureGroupOrderByRelevanceInput;
};
export type FeatureGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.FeatureGroupWhereInput | Prisma.FeatureGroupWhereInput[];
    OR?: Prisma.FeatureGroupWhereInput[];
    NOT?: Prisma.FeatureGroupWhereInput | Prisma.FeatureGroupWhereInput[];
    name?: Prisma.StringFilter<"FeatureGroup"> | string;
    features?: Prisma.FeatureListRelationFilter;
}, "id">;
export type FeatureGroupOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    _count?: Prisma.FeatureGroupCountOrderByAggregateInput;
    _avg?: Prisma.FeatureGroupAvgOrderByAggregateInput;
    _max?: Prisma.FeatureGroupMaxOrderByAggregateInput;
    _min?: Prisma.FeatureGroupMinOrderByAggregateInput;
    _sum?: Prisma.FeatureGroupSumOrderByAggregateInput;
};
export type FeatureGroupScalarWhereWithAggregatesInput = {
    AND?: Prisma.FeatureGroupScalarWhereWithAggregatesInput | Prisma.FeatureGroupScalarWhereWithAggregatesInput[];
    OR?: Prisma.FeatureGroupScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FeatureGroupScalarWhereWithAggregatesInput | Prisma.FeatureGroupScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"FeatureGroup"> | number;
    name?: Prisma.StringWithAggregatesFilter<"FeatureGroup"> | string;
};
export type FeatureGroupCreateInput = {
    name: string;
    features?: Prisma.FeatureCreateNestedManyWithoutGroupInput;
};
export type FeatureGroupUncheckedCreateInput = {
    id?: number;
    name: string;
    features?: Prisma.FeatureUncheckedCreateNestedManyWithoutGroupInput;
};
export type FeatureGroupUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    features?: Prisma.FeatureUpdateManyWithoutGroupNestedInput;
};
export type FeatureGroupUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    features?: Prisma.FeatureUncheckedUpdateManyWithoutGroupNestedInput;
};
export type FeatureGroupCreateManyInput = {
    id?: number;
    name: string;
};
export type FeatureGroupUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type FeatureGroupUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type FeatureGroupOrderByRelevanceInput = {
    fields: Prisma.FeatureGroupOrderByRelevanceFieldEnum | Prisma.FeatureGroupOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type FeatureGroupCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type FeatureGroupAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type FeatureGroupMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type FeatureGroupMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type FeatureGroupSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type FeatureGroupScalarRelationFilter = {
    is?: Prisma.FeatureGroupWhereInput;
    isNot?: Prisma.FeatureGroupWhereInput;
};
export type FeatureGroupCreateNestedOneWithoutFeaturesInput = {
    create?: Prisma.XOR<Prisma.FeatureGroupCreateWithoutFeaturesInput, Prisma.FeatureGroupUncheckedCreateWithoutFeaturesInput>;
    connectOrCreate?: Prisma.FeatureGroupCreateOrConnectWithoutFeaturesInput;
    connect?: Prisma.FeatureGroupWhereUniqueInput;
};
export type FeatureGroupUpdateOneRequiredWithoutFeaturesNestedInput = {
    create?: Prisma.XOR<Prisma.FeatureGroupCreateWithoutFeaturesInput, Prisma.FeatureGroupUncheckedCreateWithoutFeaturesInput>;
    connectOrCreate?: Prisma.FeatureGroupCreateOrConnectWithoutFeaturesInput;
    upsert?: Prisma.FeatureGroupUpsertWithoutFeaturesInput;
    connect?: Prisma.FeatureGroupWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FeatureGroupUpdateToOneWithWhereWithoutFeaturesInput, Prisma.FeatureGroupUpdateWithoutFeaturesInput>, Prisma.FeatureGroupUncheckedUpdateWithoutFeaturesInput>;
};
export type FeatureGroupCreateWithoutFeaturesInput = {
    name: string;
};
export type FeatureGroupUncheckedCreateWithoutFeaturesInput = {
    id?: number;
    name: string;
};
export type FeatureGroupCreateOrConnectWithoutFeaturesInput = {
    where: Prisma.FeatureGroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeatureGroupCreateWithoutFeaturesInput, Prisma.FeatureGroupUncheckedCreateWithoutFeaturesInput>;
};
export type FeatureGroupUpsertWithoutFeaturesInput = {
    update: Prisma.XOR<Prisma.FeatureGroupUpdateWithoutFeaturesInput, Prisma.FeatureGroupUncheckedUpdateWithoutFeaturesInput>;
    create: Prisma.XOR<Prisma.FeatureGroupCreateWithoutFeaturesInput, Prisma.FeatureGroupUncheckedCreateWithoutFeaturesInput>;
    where?: Prisma.FeatureGroupWhereInput;
};
export type FeatureGroupUpdateToOneWithWhereWithoutFeaturesInput = {
    where?: Prisma.FeatureGroupWhereInput;
    data: Prisma.XOR<Prisma.FeatureGroupUpdateWithoutFeaturesInput, Prisma.FeatureGroupUncheckedUpdateWithoutFeaturesInput>;
};
export type FeatureGroupUpdateWithoutFeaturesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type FeatureGroupUncheckedUpdateWithoutFeaturesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type FeatureGroupCountOutputType = {
    features: number;
};
export type FeatureGroupCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    features?: boolean | FeatureGroupCountOutputTypeCountFeaturesArgs;
};
export type FeatureGroupCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureGroupCountOutputTypeSelect<ExtArgs> | null;
};
export type FeatureGroupCountOutputTypeCountFeaturesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeatureWhereInput;
};
export type FeatureGroupSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    features?: boolean | Prisma.FeatureGroup$featuresArgs<ExtArgs>;
    _count?: boolean | Prisma.FeatureGroupCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["featureGroup"]>;
export type FeatureGroupSelectScalar = {
    id?: boolean;
    name?: boolean;
};
export type FeatureGroupOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name", ExtArgs["result"]["featureGroup"]>;
export type FeatureGroupInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    features?: boolean | Prisma.FeatureGroup$featuresArgs<ExtArgs>;
    _count?: boolean | Prisma.FeatureGroupCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $FeatureGroupPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FeatureGroup";
    objects: {
        features: Prisma.$FeaturePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
    }, ExtArgs["result"]["featureGroup"]>;
    composites: {};
};
export type FeatureGroupGetPayload<S extends boolean | null | undefined | FeatureGroupDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FeatureGroupPayload, S>;
export type FeatureGroupCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FeatureGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FeatureGroupCountAggregateInputType | true;
};
export interface FeatureGroupDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FeatureGroup'];
        meta: {
            name: 'FeatureGroup';
        };
    };
    findUnique<T extends FeatureGroupFindUniqueArgs>(args: Prisma.SelectSubset<T, FeatureGroupFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FeatureGroupClient<runtime.Types.Result.GetResult<Prisma.$FeatureGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FeatureGroupFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FeatureGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FeatureGroupClient<runtime.Types.Result.GetResult<Prisma.$FeatureGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FeatureGroupFindFirstArgs>(args?: Prisma.SelectSubset<T, FeatureGroupFindFirstArgs<ExtArgs>>): Prisma.Prisma__FeatureGroupClient<runtime.Types.Result.GetResult<Prisma.$FeatureGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FeatureGroupFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FeatureGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FeatureGroupClient<runtime.Types.Result.GetResult<Prisma.$FeatureGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FeatureGroupFindManyArgs>(args?: Prisma.SelectSubset<T, FeatureGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeatureGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FeatureGroupCreateArgs>(args: Prisma.SelectSubset<T, FeatureGroupCreateArgs<ExtArgs>>): Prisma.Prisma__FeatureGroupClient<runtime.Types.Result.GetResult<Prisma.$FeatureGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FeatureGroupCreateManyArgs>(args?: Prisma.SelectSubset<T, FeatureGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends FeatureGroupDeleteArgs>(args: Prisma.SelectSubset<T, FeatureGroupDeleteArgs<ExtArgs>>): Prisma.Prisma__FeatureGroupClient<runtime.Types.Result.GetResult<Prisma.$FeatureGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FeatureGroupUpdateArgs>(args: Prisma.SelectSubset<T, FeatureGroupUpdateArgs<ExtArgs>>): Prisma.Prisma__FeatureGroupClient<runtime.Types.Result.GetResult<Prisma.$FeatureGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FeatureGroupDeleteManyArgs>(args?: Prisma.SelectSubset<T, FeatureGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FeatureGroupUpdateManyArgs>(args: Prisma.SelectSubset<T, FeatureGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends FeatureGroupUpsertArgs>(args: Prisma.SelectSubset<T, FeatureGroupUpsertArgs<ExtArgs>>): Prisma.Prisma__FeatureGroupClient<runtime.Types.Result.GetResult<Prisma.$FeatureGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FeatureGroupCountArgs>(args?: Prisma.Subset<T, FeatureGroupCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FeatureGroupCountAggregateOutputType> : number>;
    aggregate<T extends FeatureGroupAggregateArgs>(args: Prisma.Subset<T, FeatureGroupAggregateArgs>): Prisma.PrismaPromise<GetFeatureGroupAggregateType<T>>;
    groupBy<T extends FeatureGroupGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FeatureGroupGroupByArgs['orderBy'];
    } : {
        orderBy?: FeatureGroupGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FeatureGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeatureGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FeatureGroupFieldRefs;
}
export interface Prisma__FeatureGroupClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    features<T extends Prisma.FeatureGroup$featuresArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FeatureGroup$featuresArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FeatureGroupFieldRefs {
    readonly id: Prisma.FieldRef<"FeatureGroup", 'Int'>;
    readonly name: Prisma.FieldRef<"FeatureGroup", 'String'>;
}
export type FeatureGroupFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureGroupSelect<ExtArgs> | null;
    omit?: Prisma.FeatureGroupOmit<ExtArgs> | null;
    include?: Prisma.FeatureGroupInclude<ExtArgs> | null;
    where: Prisma.FeatureGroupWhereUniqueInput;
};
export type FeatureGroupFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureGroupSelect<ExtArgs> | null;
    omit?: Prisma.FeatureGroupOmit<ExtArgs> | null;
    include?: Prisma.FeatureGroupInclude<ExtArgs> | null;
    where: Prisma.FeatureGroupWhereUniqueInput;
};
export type FeatureGroupFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureGroupSelect<ExtArgs> | null;
    omit?: Prisma.FeatureGroupOmit<ExtArgs> | null;
    include?: Prisma.FeatureGroupInclude<ExtArgs> | null;
    where?: Prisma.FeatureGroupWhereInput;
    orderBy?: Prisma.FeatureGroupOrderByWithRelationInput | Prisma.FeatureGroupOrderByWithRelationInput[];
    cursor?: Prisma.FeatureGroupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeatureGroupScalarFieldEnum | Prisma.FeatureGroupScalarFieldEnum[];
};
export type FeatureGroupFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureGroupSelect<ExtArgs> | null;
    omit?: Prisma.FeatureGroupOmit<ExtArgs> | null;
    include?: Prisma.FeatureGroupInclude<ExtArgs> | null;
    where?: Prisma.FeatureGroupWhereInput;
    orderBy?: Prisma.FeatureGroupOrderByWithRelationInput | Prisma.FeatureGroupOrderByWithRelationInput[];
    cursor?: Prisma.FeatureGroupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeatureGroupScalarFieldEnum | Prisma.FeatureGroupScalarFieldEnum[];
};
export type FeatureGroupFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureGroupSelect<ExtArgs> | null;
    omit?: Prisma.FeatureGroupOmit<ExtArgs> | null;
    include?: Prisma.FeatureGroupInclude<ExtArgs> | null;
    where?: Prisma.FeatureGroupWhereInput;
    orderBy?: Prisma.FeatureGroupOrderByWithRelationInput | Prisma.FeatureGroupOrderByWithRelationInput[];
    cursor?: Prisma.FeatureGroupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeatureGroupScalarFieldEnum | Prisma.FeatureGroupScalarFieldEnum[];
};
export type FeatureGroupCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureGroupSelect<ExtArgs> | null;
    omit?: Prisma.FeatureGroupOmit<ExtArgs> | null;
    include?: Prisma.FeatureGroupInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FeatureGroupCreateInput, Prisma.FeatureGroupUncheckedCreateInput>;
};
export type FeatureGroupCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FeatureGroupCreateManyInput | Prisma.FeatureGroupCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FeatureGroupUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureGroupSelect<ExtArgs> | null;
    omit?: Prisma.FeatureGroupOmit<ExtArgs> | null;
    include?: Prisma.FeatureGroupInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FeatureGroupUpdateInput, Prisma.FeatureGroupUncheckedUpdateInput>;
    where: Prisma.FeatureGroupWhereUniqueInput;
};
export type FeatureGroupUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FeatureGroupUpdateManyMutationInput, Prisma.FeatureGroupUncheckedUpdateManyInput>;
    where?: Prisma.FeatureGroupWhereInput;
    limit?: number;
};
export type FeatureGroupUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureGroupSelect<ExtArgs> | null;
    omit?: Prisma.FeatureGroupOmit<ExtArgs> | null;
    include?: Prisma.FeatureGroupInclude<ExtArgs> | null;
    where: Prisma.FeatureGroupWhereUniqueInput;
    create: Prisma.XOR<Prisma.FeatureGroupCreateInput, Prisma.FeatureGroupUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FeatureGroupUpdateInput, Prisma.FeatureGroupUncheckedUpdateInput>;
};
export type FeatureGroupDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureGroupSelect<ExtArgs> | null;
    omit?: Prisma.FeatureGroupOmit<ExtArgs> | null;
    include?: Prisma.FeatureGroupInclude<ExtArgs> | null;
    where: Prisma.FeatureGroupWhereUniqueInput;
};
export type FeatureGroupDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FeatureGroupWhereInput;
    limit?: number;
};
export type FeatureGroup$featuresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureSelect<ExtArgs> | null;
    omit?: Prisma.FeatureOmit<ExtArgs> | null;
    include?: Prisma.FeatureInclude<ExtArgs> | null;
    where?: Prisma.FeatureWhereInput;
    orderBy?: Prisma.FeatureOrderByWithRelationInput | Prisma.FeatureOrderByWithRelationInput[];
    cursor?: Prisma.FeatureWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FeatureScalarFieldEnum | Prisma.FeatureScalarFieldEnum[];
};
export type FeatureGroupDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FeatureGroupSelect<ExtArgs> | null;
    omit?: Prisma.FeatureGroupOmit<ExtArgs> | null;
    include?: Prisma.FeatureGroupInclude<ExtArgs> | null;
};
export {};
