import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type StateModel = runtime.Types.Result.DefaultSelection<Prisma.$StatePayload>;
export type AggregateState = {
    _count: StateCountAggregateOutputType | null;
    _avg: StateAvgAggregateOutputType | null;
    _sum: StateSumAggregateOutputType | null;
    _min: StateMinAggregateOutputType | null;
    _max: StateMaxAggregateOutputType | null;
};
export type StateAvgAggregateOutputType = {
    id: number | null;
};
export type StateSumAggregateOutputType = {
    id: number | null;
};
export type StateMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    code: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StateMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    code: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StateCountAggregateOutputType = {
    id: number;
    name: number;
    code: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type StateAvgAggregateInputType = {
    id?: true;
};
export type StateSumAggregateInputType = {
    id?: true;
};
export type StateMinAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StateMaxAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StateCountAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type StateAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StateWhereInput;
    orderBy?: Prisma.StateOrderByWithRelationInput | Prisma.StateOrderByWithRelationInput[];
    cursor?: Prisma.StateWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StateCountAggregateInputType;
    _avg?: StateAvgAggregateInputType;
    _sum?: StateSumAggregateInputType;
    _min?: StateMinAggregateInputType;
    _max?: StateMaxAggregateInputType;
};
export type GetStateAggregateType<T extends StateAggregateArgs> = {
    [P in keyof T & keyof AggregateState]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateState[P]> : Prisma.GetScalarType<T[P], AggregateState[P]>;
};
export type StateGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StateWhereInput;
    orderBy?: Prisma.StateOrderByWithAggregationInput | Prisma.StateOrderByWithAggregationInput[];
    by: Prisma.StateScalarFieldEnum[] | Prisma.StateScalarFieldEnum;
    having?: Prisma.StateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StateCountAggregateInputType | true;
    _avg?: StateAvgAggregateInputType;
    _sum?: StateSumAggregateInputType;
    _min?: StateMinAggregateInputType;
    _max?: StateMaxAggregateInputType;
};
export type StateGroupByOutputType = {
    id: number;
    name: string;
    code: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: StateCountAggregateOutputType | null;
    _avg: StateAvgAggregateOutputType | null;
    _sum: StateSumAggregateOutputType | null;
    _min: StateMinAggregateOutputType | null;
    _max: StateMaxAggregateOutputType | null;
};
type GetStateGroupByPayload<T extends StateGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StateGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StateGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StateGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StateGroupByOutputType[P]>;
}>>;
export type StateWhereInput = {
    AND?: Prisma.StateWhereInput | Prisma.StateWhereInput[];
    OR?: Prisma.StateWhereInput[];
    NOT?: Prisma.StateWhereInput | Prisma.StateWhereInput[];
    id?: Prisma.IntFilter<"State"> | number;
    name?: Prisma.StringFilter<"State"> | string;
    code?: Prisma.StringFilter<"State"> | string;
    isActive?: Prisma.BoolFilter<"State"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"State"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"State"> | Date | string;
    cities?: Prisma.CityListRelationFilter;
};
export type StateOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    cities?: Prisma.CityOrderByRelationAggregateInput;
    _relevance?: Prisma.StateOrderByRelevanceInput;
};
export type StateWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    name?: string;
    code?: string;
    AND?: Prisma.StateWhereInput | Prisma.StateWhereInput[];
    OR?: Prisma.StateWhereInput[];
    NOT?: Prisma.StateWhereInput | Prisma.StateWhereInput[];
    isActive?: Prisma.BoolFilter<"State"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"State"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"State"> | Date | string;
    cities?: Prisma.CityListRelationFilter;
}, "id" | "name" | "code">;
export type StateOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.StateCountOrderByAggregateInput;
    _avg?: Prisma.StateAvgOrderByAggregateInput;
    _max?: Prisma.StateMaxOrderByAggregateInput;
    _min?: Prisma.StateMinOrderByAggregateInput;
    _sum?: Prisma.StateSumOrderByAggregateInput;
};
export type StateScalarWhereWithAggregatesInput = {
    AND?: Prisma.StateScalarWhereWithAggregatesInput | Prisma.StateScalarWhereWithAggregatesInput[];
    OR?: Prisma.StateScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StateScalarWhereWithAggregatesInput | Prisma.StateScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"State"> | number;
    name?: Prisma.StringWithAggregatesFilter<"State"> | string;
    code?: Prisma.StringWithAggregatesFilter<"State"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"State"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"State"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"State"> | Date | string;
};
export type StateCreateInput = {
    name: string;
    code: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cities?: Prisma.CityCreateNestedManyWithoutStateInput;
};
export type StateUncheckedCreateInput = {
    id?: number;
    name: string;
    code: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cities?: Prisma.CityUncheckedCreateNestedManyWithoutStateInput;
};
export type StateUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cities?: Prisma.CityUpdateManyWithoutStateNestedInput;
};
export type StateUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cities?: Prisma.CityUncheckedUpdateManyWithoutStateNestedInput;
};
export type StateCreateManyInput = {
    id?: number;
    name: string;
    code: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StateUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StateUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StateOrderByRelevanceInput = {
    fields: Prisma.StateOrderByRelevanceFieldEnum | Prisma.StateOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type StateCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StateAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type StateMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StateMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StateSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type StateScalarRelationFilter = {
    is?: Prisma.StateWhereInput;
    isNot?: Prisma.StateWhereInput;
};
export type StateCreateNestedOneWithoutCitiesInput = {
    create?: Prisma.XOR<Prisma.StateCreateWithoutCitiesInput, Prisma.StateUncheckedCreateWithoutCitiesInput>;
    connectOrCreate?: Prisma.StateCreateOrConnectWithoutCitiesInput;
    connect?: Prisma.StateWhereUniqueInput;
};
export type StateUpdateOneRequiredWithoutCitiesNestedInput = {
    create?: Prisma.XOR<Prisma.StateCreateWithoutCitiesInput, Prisma.StateUncheckedCreateWithoutCitiesInput>;
    connectOrCreate?: Prisma.StateCreateOrConnectWithoutCitiesInput;
    upsert?: Prisma.StateUpsertWithoutCitiesInput;
    connect?: Prisma.StateWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.StateUpdateToOneWithWhereWithoutCitiesInput, Prisma.StateUpdateWithoutCitiesInput>, Prisma.StateUncheckedUpdateWithoutCitiesInput>;
};
export type StateCreateWithoutCitiesInput = {
    name: string;
    code: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StateUncheckedCreateWithoutCitiesInput = {
    id?: number;
    name: string;
    code: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StateCreateOrConnectWithoutCitiesInput = {
    where: Prisma.StateWhereUniqueInput;
    create: Prisma.XOR<Prisma.StateCreateWithoutCitiesInput, Prisma.StateUncheckedCreateWithoutCitiesInput>;
};
export type StateUpsertWithoutCitiesInput = {
    update: Prisma.XOR<Prisma.StateUpdateWithoutCitiesInput, Prisma.StateUncheckedUpdateWithoutCitiesInput>;
    create: Prisma.XOR<Prisma.StateCreateWithoutCitiesInput, Prisma.StateUncheckedCreateWithoutCitiesInput>;
    where?: Prisma.StateWhereInput;
};
export type StateUpdateToOneWithWhereWithoutCitiesInput = {
    where?: Prisma.StateWhereInput;
    data: Prisma.XOR<Prisma.StateUpdateWithoutCitiesInput, Prisma.StateUncheckedUpdateWithoutCitiesInput>;
};
export type StateUpdateWithoutCitiesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StateUncheckedUpdateWithoutCitiesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StateCountOutputType = {
    cities: number;
};
export type StateCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cities?: boolean | StateCountOutputTypeCountCitiesArgs;
};
export type StateCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StateCountOutputTypeSelect<ExtArgs> | null;
};
export type StateCountOutputTypeCountCitiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CityWhereInput;
};
export type StateSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    code?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    cities?: boolean | Prisma.State$citiesArgs<ExtArgs>;
    _count?: boolean | Prisma.StateCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["state"]>;
export type StateSelectScalar = {
    id?: boolean;
    name?: boolean;
    code?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type StateOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "code" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["state"]>;
export type StateInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cities?: boolean | Prisma.State$citiesArgs<ExtArgs>;
    _count?: boolean | Prisma.StateCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $StatePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "State";
    objects: {
        cities: Prisma.$CityPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        code: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["state"]>;
    composites: {};
};
export type StateGetPayload<S extends boolean | null | undefined | StateDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StatePayload, S>;
export type StateCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StateCountAggregateInputType | true;
};
export interface StateDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['State'];
        meta: {
            name: 'State';
        };
    };
    findUnique<T extends StateFindUniqueArgs>(args: Prisma.SelectSubset<T, StateFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StateClient<runtime.Types.Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StateFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StateFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StateClient<runtime.Types.Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StateFindFirstArgs>(args?: Prisma.SelectSubset<T, StateFindFirstArgs<ExtArgs>>): Prisma.Prisma__StateClient<runtime.Types.Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StateFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StateFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StateClient<runtime.Types.Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StateFindManyArgs>(args?: Prisma.SelectSubset<T, StateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StateCreateArgs>(args: Prisma.SelectSubset<T, StateCreateArgs<ExtArgs>>): Prisma.Prisma__StateClient<runtime.Types.Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StateCreateManyArgs>(args?: Prisma.SelectSubset<T, StateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends StateDeleteArgs>(args: Prisma.SelectSubset<T, StateDeleteArgs<ExtArgs>>): Prisma.Prisma__StateClient<runtime.Types.Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StateUpdateArgs>(args: Prisma.SelectSubset<T, StateUpdateArgs<ExtArgs>>): Prisma.Prisma__StateClient<runtime.Types.Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StateDeleteManyArgs>(args?: Prisma.SelectSubset<T, StateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StateUpdateManyArgs>(args: Prisma.SelectSubset<T, StateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends StateUpsertArgs>(args: Prisma.SelectSubset<T, StateUpsertArgs<ExtArgs>>): Prisma.Prisma__StateClient<runtime.Types.Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StateCountArgs>(args?: Prisma.Subset<T, StateCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StateCountAggregateOutputType> : number>;
    aggregate<T extends StateAggregateArgs>(args: Prisma.Subset<T, StateAggregateArgs>): Prisma.PrismaPromise<GetStateAggregateType<T>>;
    groupBy<T extends StateGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StateGroupByArgs['orderBy'];
    } : {
        orderBy?: StateGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StateFieldRefs;
}
export interface Prisma__StateClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cities<T extends Prisma.State$citiesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.State$citiesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StateFieldRefs {
    readonly id: Prisma.FieldRef<"State", 'Int'>;
    readonly name: Prisma.FieldRef<"State", 'String'>;
    readonly code: Prisma.FieldRef<"State", 'String'>;
    readonly isActive: Prisma.FieldRef<"State", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"State", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"State", 'DateTime'>;
}
export type StateFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StateSelect<ExtArgs> | null;
    omit?: Prisma.StateOmit<ExtArgs> | null;
    include?: Prisma.StateInclude<ExtArgs> | null;
    where: Prisma.StateWhereUniqueInput;
};
export type StateFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StateSelect<ExtArgs> | null;
    omit?: Prisma.StateOmit<ExtArgs> | null;
    include?: Prisma.StateInclude<ExtArgs> | null;
    where: Prisma.StateWhereUniqueInput;
};
export type StateFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StateSelect<ExtArgs> | null;
    omit?: Prisma.StateOmit<ExtArgs> | null;
    include?: Prisma.StateInclude<ExtArgs> | null;
    where?: Prisma.StateWhereInput;
    orderBy?: Prisma.StateOrderByWithRelationInput | Prisma.StateOrderByWithRelationInput[];
    cursor?: Prisma.StateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StateScalarFieldEnum | Prisma.StateScalarFieldEnum[];
};
export type StateFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StateSelect<ExtArgs> | null;
    omit?: Prisma.StateOmit<ExtArgs> | null;
    include?: Prisma.StateInclude<ExtArgs> | null;
    where?: Prisma.StateWhereInput;
    orderBy?: Prisma.StateOrderByWithRelationInput | Prisma.StateOrderByWithRelationInput[];
    cursor?: Prisma.StateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StateScalarFieldEnum | Prisma.StateScalarFieldEnum[];
};
export type StateFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StateSelect<ExtArgs> | null;
    omit?: Prisma.StateOmit<ExtArgs> | null;
    include?: Prisma.StateInclude<ExtArgs> | null;
    where?: Prisma.StateWhereInput;
    orderBy?: Prisma.StateOrderByWithRelationInput | Prisma.StateOrderByWithRelationInput[];
    cursor?: Prisma.StateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StateScalarFieldEnum | Prisma.StateScalarFieldEnum[];
};
export type StateCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StateSelect<ExtArgs> | null;
    omit?: Prisma.StateOmit<ExtArgs> | null;
    include?: Prisma.StateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StateCreateInput, Prisma.StateUncheckedCreateInput>;
};
export type StateCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StateCreateManyInput | Prisma.StateCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StateUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StateSelect<ExtArgs> | null;
    omit?: Prisma.StateOmit<ExtArgs> | null;
    include?: Prisma.StateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StateUpdateInput, Prisma.StateUncheckedUpdateInput>;
    where: Prisma.StateWhereUniqueInput;
};
export type StateUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StateUpdateManyMutationInput, Prisma.StateUncheckedUpdateManyInput>;
    where?: Prisma.StateWhereInput;
    limit?: number;
};
export type StateUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StateSelect<ExtArgs> | null;
    omit?: Prisma.StateOmit<ExtArgs> | null;
    include?: Prisma.StateInclude<ExtArgs> | null;
    where: Prisma.StateWhereUniqueInput;
    create: Prisma.XOR<Prisma.StateCreateInput, Prisma.StateUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StateUpdateInput, Prisma.StateUncheckedUpdateInput>;
};
export type StateDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StateSelect<ExtArgs> | null;
    omit?: Prisma.StateOmit<ExtArgs> | null;
    include?: Prisma.StateInclude<ExtArgs> | null;
    where: Prisma.StateWhereUniqueInput;
};
export type StateDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StateWhereInput;
    limit?: number;
};
export type State$citiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitySelect<ExtArgs> | null;
    omit?: Prisma.CityOmit<ExtArgs> | null;
    include?: Prisma.CityInclude<ExtArgs> | null;
    where?: Prisma.CityWhereInput;
    orderBy?: Prisma.CityOrderByWithRelationInput | Prisma.CityOrderByWithRelationInput[];
    cursor?: Prisma.CityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CityScalarFieldEnum | Prisma.CityScalarFieldEnum[];
};
export type StateDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StateSelect<ExtArgs> | null;
    omit?: Prisma.StateOmit<ExtArgs> | null;
    include?: Prisma.StateInclude<ExtArgs> | null;
};
export {};
