import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type FuelTypeModel = runtime.Types.Result.DefaultSelection<Prisma.$FuelTypePayload>;
export type AggregateFuelType = {
    _count: FuelTypeCountAggregateOutputType | null;
    _avg: FuelTypeAvgAggregateOutputType | null;
    _sum: FuelTypeSumAggregateOutputType | null;
    _min: FuelTypeMinAggregateOutputType | null;
    _max: FuelTypeMaxAggregateOutputType | null;
};
export type FuelTypeAvgAggregateOutputType = {
    id: number | null;
};
export type FuelTypeSumAggregateOutputType = {
    id: number | null;
};
export type FuelTypeMinAggregateOutputType = {
    id: number | null;
    code: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FuelTypeMaxAggregateOutputType = {
    id: number | null;
    code: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FuelTypeCountAggregateOutputType = {
    id: number;
    code: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FuelTypeAvgAggregateInputType = {
    id?: true;
};
export type FuelTypeSumAggregateInputType = {
    id?: true;
};
export type FuelTypeMinAggregateInputType = {
    id?: true;
    code?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FuelTypeMaxAggregateInputType = {
    id?: true;
    code?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FuelTypeCountAggregateInputType = {
    id?: true;
    code?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FuelTypeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FuelTypeWhereInput;
    orderBy?: Prisma.FuelTypeOrderByWithRelationInput | Prisma.FuelTypeOrderByWithRelationInput[];
    cursor?: Prisma.FuelTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FuelTypeCountAggregateInputType;
    _avg?: FuelTypeAvgAggregateInputType;
    _sum?: FuelTypeSumAggregateInputType;
    _min?: FuelTypeMinAggregateInputType;
    _max?: FuelTypeMaxAggregateInputType;
};
export type GetFuelTypeAggregateType<T extends FuelTypeAggregateArgs> = {
    [P in keyof T & keyof AggregateFuelType]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFuelType[P]> : Prisma.GetScalarType<T[P], AggregateFuelType[P]>;
};
export type FuelTypeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FuelTypeWhereInput;
    orderBy?: Prisma.FuelTypeOrderByWithAggregationInput | Prisma.FuelTypeOrderByWithAggregationInput[];
    by: Prisma.FuelTypeScalarFieldEnum[] | Prisma.FuelTypeScalarFieldEnum;
    having?: Prisma.FuelTypeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FuelTypeCountAggregateInputType | true;
    _avg?: FuelTypeAvgAggregateInputType;
    _sum?: FuelTypeSumAggregateInputType;
    _min?: FuelTypeMinAggregateInputType;
    _max?: FuelTypeMaxAggregateInputType;
};
export type FuelTypeGroupByOutputType = {
    id: number;
    code: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: FuelTypeCountAggregateOutputType | null;
    _avg: FuelTypeAvgAggregateOutputType | null;
    _sum: FuelTypeSumAggregateOutputType | null;
    _min: FuelTypeMinAggregateOutputType | null;
    _max: FuelTypeMaxAggregateOutputType | null;
};
type GetFuelTypeGroupByPayload<T extends FuelTypeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FuelTypeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FuelTypeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FuelTypeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FuelTypeGroupByOutputType[P]>;
}>>;
export type FuelTypeWhereInput = {
    AND?: Prisma.FuelTypeWhereInput | Prisma.FuelTypeWhereInput[];
    OR?: Prisma.FuelTypeWhereInput[];
    NOT?: Prisma.FuelTypeWhereInput | Prisma.FuelTypeWhereInput[];
    id?: Prisma.IntFilter<"FuelType"> | number;
    code?: Prisma.StringFilter<"FuelType"> | string;
    isActive?: Prisma.BoolFilter<"FuelType"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"FuelType"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FuelType"> | Date | string;
    translations?: Prisma.FuelTypeTranslationListRelationFilter;
    models?: Prisma.ModelListRelationFilter;
};
export type FuelTypeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    translations?: Prisma.FuelTypeTranslationOrderByRelationAggregateInput;
    models?: Prisma.ModelOrderByRelationAggregateInput;
    _relevance?: Prisma.FuelTypeOrderByRelevanceInput;
};
export type FuelTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    code?: string;
    AND?: Prisma.FuelTypeWhereInput | Prisma.FuelTypeWhereInput[];
    OR?: Prisma.FuelTypeWhereInput[];
    NOT?: Prisma.FuelTypeWhereInput | Prisma.FuelTypeWhereInput[];
    isActive?: Prisma.BoolFilter<"FuelType"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"FuelType"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"FuelType"> | Date | string;
    translations?: Prisma.FuelTypeTranslationListRelationFilter;
    models?: Prisma.ModelListRelationFilter;
}, "id" | "code">;
export type FuelTypeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.FuelTypeCountOrderByAggregateInput;
    _avg?: Prisma.FuelTypeAvgOrderByAggregateInput;
    _max?: Prisma.FuelTypeMaxOrderByAggregateInput;
    _min?: Prisma.FuelTypeMinOrderByAggregateInput;
    _sum?: Prisma.FuelTypeSumOrderByAggregateInput;
};
export type FuelTypeScalarWhereWithAggregatesInput = {
    AND?: Prisma.FuelTypeScalarWhereWithAggregatesInput | Prisma.FuelTypeScalarWhereWithAggregatesInput[];
    OR?: Prisma.FuelTypeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FuelTypeScalarWhereWithAggregatesInput | Prisma.FuelTypeScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"FuelType"> | number;
    code?: Prisma.StringWithAggregatesFilter<"FuelType"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"FuelType"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"FuelType"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"FuelType"> | Date | string;
};
export type FuelTypeCreateInput = {
    code: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    translations?: Prisma.FuelTypeTranslationCreateNestedManyWithoutFuelTypeInput;
    models?: Prisma.ModelCreateNestedManyWithoutFuelTypeInput;
};
export type FuelTypeUncheckedCreateInput = {
    id?: number;
    code: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    translations?: Prisma.FuelTypeTranslationUncheckedCreateNestedManyWithoutFuelTypeInput;
    models?: Prisma.ModelUncheckedCreateNestedManyWithoutFuelTypeInput;
};
export type FuelTypeUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    translations?: Prisma.FuelTypeTranslationUpdateManyWithoutFuelTypeNestedInput;
    models?: Prisma.ModelUpdateManyWithoutFuelTypeNestedInput;
};
export type FuelTypeUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    translations?: Prisma.FuelTypeTranslationUncheckedUpdateManyWithoutFuelTypeNestedInput;
    models?: Prisma.ModelUncheckedUpdateManyWithoutFuelTypeNestedInput;
};
export type FuelTypeCreateManyInput = {
    id?: number;
    code: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FuelTypeUpdateManyMutationInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FuelTypeUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FuelTypeOrderByRelevanceInput = {
    fields: Prisma.FuelTypeOrderByRelevanceFieldEnum | Prisma.FuelTypeOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type FuelTypeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FuelTypeAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type FuelTypeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FuelTypeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FuelTypeSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type FuelTypeScalarRelationFilter = {
    is?: Prisma.FuelTypeWhereInput;
    isNot?: Prisma.FuelTypeWhereInput;
};
export type FuelTypeCreateNestedOneWithoutTranslationsInput = {
    create?: Prisma.XOR<Prisma.FuelTypeCreateWithoutTranslationsInput, Prisma.FuelTypeUncheckedCreateWithoutTranslationsInput>;
    connectOrCreate?: Prisma.FuelTypeCreateOrConnectWithoutTranslationsInput;
    connect?: Prisma.FuelTypeWhereUniqueInput;
};
export type FuelTypeUpdateOneRequiredWithoutTranslationsNestedInput = {
    create?: Prisma.XOR<Prisma.FuelTypeCreateWithoutTranslationsInput, Prisma.FuelTypeUncheckedCreateWithoutTranslationsInput>;
    connectOrCreate?: Prisma.FuelTypeCreateOrConnectWithoutTranslationsInput;
    upsert?: Prisma.FuelTypeUpsertWithoutTranslationsInput;
    connect?: Prisma.FuelTypeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FuelTypeUpdateToOneWithWhereWithoutTranslationsInput, Prisma.FuelTypeUpdateWithoutTranslationsInput>, Prisma.FuelTypeUncheckedUpdateWithoutTranslationsInput>;
};
export type FuelTypeCreateNestedOneWithoutModelsInput = {
    create?: Prisma.XOR<Prisma.FuelTypeCreateWithoutModelsInput, Prisma.FuelTypeUncheckedCreateWithoutModelsInput>;
    connectOrCreate?: Prisma.FuelTypeCreateOrConnectWithoutModelsInput;
    connect?: Prisma.FuelTypeWhereUniqueInput;
};
export type FuelTypeUpdateOneRequiredWithoutModelsNestedInput = {
    create?: Prisma.XOR<Prisma.FuelTypeCreateWithoutModelsInput, Prisma.FuelTypeUncheckedCreateWithoutModelsInput>;
    connectOrCreate?: Prisma.FuelTypeCreateOrConnectWithoutModelsInput;
    upsert?: Prisma.FuelTypeUpsertWithoutModelsInput;
    connect?: Prisma.FuelTypeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FuelTypeUpdateToOneWithWhereWithoutModelsInput, Prisma.FuelTypeUpdateWithoutModelsInput>, Prisma.FuelTypeUncheckedUpdateWithoutModelsInput>;
};
export type FuelTypeCreateWithoutTranslationsInput = {
    code: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    models?: Prisma.ModelCreateNestedManyWithoutFuelTypeInput;
};
export type FuelTypeUncheckedCreateWithoutTranslationsInput = {
    id?: number;
    code: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    models?: Prisma.ModelUncheckedCreateNestedManyWithoutFuelTypeInput;
};
export type FuelTypeCreateOrConnectWithoutTranslationsInput = {
    where: Prisma.FuelTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.FuelTypeCreateWithoutTranslationsInput, Prisma.FuelTypeUncheckedCreateWithoutTranslationsInput>;
};
export type FuelTypeUpsertWithoutTranslationsInput = {
    update: Prisma.XOR<Prisma.FuelTypeUpdateWithoutTranslationsInput, Prisma.FuelTypeUncheckedUpdateWithoutTranslationsInput>;
    create: Prisma.XOR<Prisma.FuelTypeCreateWithoutTranslationsInput, Prisma.FuelTypeUncheckedCreateWithoutTranslationsInput>;
    where?: Prisma.FuelTypeWhereInput;
};
export type FuelTypeUpdateToOneWithWhereWithoutTranslationsInput = {
    where?: Prisma.FuelTypeWhereInput;
    data: Prisma.XOR<Prisma.FuelTypeUpdateWithoutTranslationsInput, Prisma.FuelTypeUncheckedUpdateWithoutTranslationsInput>;
};
export type FuelTypeUpdateWithoutTranslationsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    models?: Prisma.ModelUpdateManyWithoutFuelTypeNestedInput;
};
export type FuelTypeUncheckedUpdateWithoutTranslationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    models?: Prisma.ModelUncheckedUpdateManyWithoutFuelTypeNestedInput;
};
export type FuelTypeCreateWithoutModelsInput = {
    code: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    translations?: Prisma.FuelTypeTranslationCreateNestedManyWithoutFuelTypeInput;
};
export type FuelTypeUncheckedCreateWithoutModelsInput = {
    id?: number;
    code: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    translations?: Prisma.FuelTypeTranslationUncheckedCreateNestedManyWithoutFuelTypeInput;
};
export type FuelTypeCreateOrConnectWithoutModelsInput = {
    where: Prisma.FuelTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.FuelTypeCreateWithoutModelsInput, Prisma.FuelTypeUncheckedCreateWithoutModelsInput>;
};
export type FuelTypeUpsertWithoutModelsInput = {
    update: Prisma.XOR<Prisma.FuelTypeUpdateWithoutModelsInput, Prisma.FuelTypeUncheckedUpdateWithoutModelsInput>;
    create: Prisma.XOR<Prisma.FuelTypeCreateWithoutModelsInput, Prisma.FuelTypeUncheckedCreateWithoutModelsInput>;
    where?: Prisma.FuelTypeWhereInput;
};
export type FuelTypeUpdateToOneWithWhereWithoutModelsInput = {
    where?: Prisma.FuelTypeWhereInput;
    data: Prisma.XOR<Prisma.FuelTypeUpdateWithoutModelsInput, Prisma.FuelTypeUncheckedUpdateWithoutModelsInput>;
};
export type FuelTypeUpdateWithoutModelsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    translations?: Prisma.FuelTypeTranslationUpdateManyWithoutFuelTypeNestedInput;
};
export type FuelTypeUncheckedUpdateWithoutModelsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    translations?: Prisma.FuelTypeTranslationUncheckedUpdateManyWithoutFuelTypeNestedInput;
};
export type FuelTypeCountOutputType = {
    translations: number;
    models: number;
};
export type FuelTypeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    translations?: boolean | FuelTypeCountOutputTypeCountTranslationsArgs;
    models?: boolean | FuelTypeCountOutputTypeCountModelsArgs;
};
export type FuelTypeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FuelTypeCountOutputTypeSelect<ExtArgs> | null;
};
export type FuelTypeCountOutputTypeCountTranslationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FuelTypeTranslationWhereInput;
};
export type FuelTypeCountOutputTypeCountModelsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ModelWhereInput;
};
export type FuelTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    translations?: boolean | Prisma.FuelType$translationsArgs<ExtArgs>;
    models?: boolean | Prisma.FuelType$modelsArgs<ExtArgs>;
    _count?: boolean | Prisma.FuelTypeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["fuelType"]>;
export type FuelTypeSelectScalar = {
    id?: boolean;
    code?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type FuelTypeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["fuelType"]>;
export type FuelTypeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    translations?: boolean | Prisma.FuelType$translationsArgs<ExtArgs>;
    models?: boolean | Prisma.FuelType$modelsArgs<ExtArgs>;
    _count?: boolean | Prisma.FuelTypeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $FuelTypePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FuelType";
    objects: {
        translations: Prisma.$FuelTypeTranslationPayload<ExtArgs>[];
        models: Prisma.$ModelPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        code: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["fuelType"]>;
    composites: {};
};
export type FuelTypeGetPayload<S extends boolean | null | undefined | FuelTypeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FuelTypePayload, S>;
export type FuelTypeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FuelTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FuelTypeCountAggregateInputType | true;
};
export interface FuelTypeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FuelType'];
        meta: {
            name: 'FuelType';
        };
    };
    findUnique<T extends FuelTypeFindUniqueArgs>(args: Prisma.SelectSubset<T, FuelTypeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FuelTypeClient<runtime.Types.Result.GetResult<Prisma.$FuelTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FuelTypeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FuelTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FuelTypeClient<runtime.Types.Result.GetResult<Prisma.$FuelTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FuelTypeFindFirstArgs>(args?: Prisma.SelectSubset<T, FuelTypeFindFirstArgs<ExtArgs>>): Prisma.Prisma__FuelTypeClient<runtime.Types.Result.GetResult<Prisma.$FuelTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FuelTypeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FuelTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FuelTypeClient<runtime.Types.Result.GetResult<Prisma.$FuelTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FuelTypeFindManyArgs>(args?: Prisma.SelectSubset<T, FuelTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FuelTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FuelTypeCreateArgs>(args: Prisma.SelectSubset<T, FuelTypeCreateArgs<ExtArgs>>): Prisma.Prisma__FuelTypeClient<runtime.Types.Result.GetResult<Prisma.$FuelTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FuelTypeCreateManyArgs>(args?: Prisma.SelectSubset<T, FuelTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends FuelTypeDeleteArgs>(args: Prisma.SelectSubset<T, FuelTypeDeleteArgs<ExtArgs>>): Prisma.Prisma__FuelTypeClient<runtime.Types.Result.GetResult<Prisma.$FuelTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FuelTypeUpdateArgs>(args: Prisma.SelectSubset<T, FuelTypeUpdateArgs<ExtArgs>>): Prisma.Prisma__FuelTypeClient<runtime.Types.Result.GetResult<Prisma.$FuelTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FuelTypeDeleteManyArgs>(args?: Prisma.SelectSubset<T, FuelTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FuelTypeUpdateManyArgs>(args: Prisma.SelectSubset<T, FuelTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends FuelTypeUpsertArgs>(args: Prisma.SelectSubset<T, FuelTypeUpsertArgs<ExtArgs>>): Prisma.Prisma__FuelTypeClient<runtime.Types.Result.GetResult<Prisma.$FuelTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FuelTypeCountArgs>(args?: Prisma.Subset<T, FuelTypeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FuelTypeCountAggregateOutputType> : number>;
    aggregate<T extends FuelTypeAggregateArgs>(args: Prisma.Subset<T, FuelTypeAggregateArgs>): Prisma.PrismaPromise<GetFuelTypeAggregateType<T>>;
    groupBy<T extends FuelTypeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FuelTypeGroupByArgs['orderBy'];
    } : {
        orderBy?: FuelTypeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FuelTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuelTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FuelTypeFieldRefs;
}
export interface Prisma__FuelTypeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    translations<T extends Prisma.FuelType$translationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FuelType$translationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FuelTypeTranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    models<T extends Prisma.FuelType$modelsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FuelType$modelsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FuelTypeFieldRefs {
    readonly id: Prisma.FieldRef<"FuelType", 'Int'>;
    readonly code: Prisma.FieldRef<"FuelType", 'String'>;
    readonly isActive: Prisma.FieldRef<"FuelType", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"FuelType", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"FuelType", 'DateTime'>;
}
export type FuelTypeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FuelTypeSelect<ExtArgs> | null;
    omit?: Prisma.FuelTypeOmit<ExtArgs> | null;
    include?: Prisma.FuelTypeInclude<ExtArgs> | null;
    where: Prisma.FuelTypeWhereUniqueInput;
};
export type FuelTypeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FuelTypeSelect<ExtArgs> | null;
    omit?: Prisma.FuelTypeOmit<ExtArgs> | null;
    include?: Prisma.FuelTypeInclude<ExtArgs> | null;
    where: Prisma.FuelTypeWhereUniqueInput;
};
export type FuelTypeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FuelTypeSelect<ExtArgs> | null;
    omit?: Prisma.FuelTypeOmit<ExtArgs> | null;
    include?: Prisma.FuelTypeInclude<ExtArgs> | null;
    where?: Prisma.FuelTypeWhereInput;
    orderBy?: Prisma.FuelTypeOrderByWithRelationInput | Prisma.FuelTypeOrderByWithRelationInput[];
    cursor?: Prisma.FuelTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FuelTypeScalarFieldEnum | Prisma.FuelTypeScalarFieldEnum[];
};
export type FuelTypeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FuelTypeSelect<ExtArgs> | null;
    omit?: Prisma.FuelTypeOmit<ExtArgs> | null;
    include?: Prisma.FuelTypeInclude<ExtArgs> | null;
    where?: Prisma.FuelTypeWhereInput;
    orderBy?: Prisma.FuelTypeOrderByWithRelationInput | Prisma.FuelTypeOrderByWithRelationInput[];
    cursor?: Prisma.FuelTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FuelTypeScalarFieldEnum | Prisma.FuelTypeScalarFieldEnum[];
};
export type FuelTypeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FuelTypeSelect<ExtArgs> | null;
    omit?: Prisma.FuelTypeOmit<ExtArgs> | null;
    include?: Prisma.FuelTypeInclude<ExtArgs> | null;
    where?: Prisma.FuelTypeWhereInput;
    orderBy?: Prisma.FuelTypeOrderByWithRelationInput | Prisma.FuelTypeOrderByWithRelationInput[];
    cursor?: Prisma.FuelTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FuelTypeScalarFieldEnum | Prisma.FuelTypeScalarFieldEnum[];
};
export type FuelTypeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FuelTypeSelect<ExtArgs> | null;
    omit?: Prisma.FuelTypeOmit<ExtArgs> | null;
    include?: Prisma.FuelTypeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FuelTypeCreateInput, Prisma.FuelTypeUncheckedCreateInput>;
};
export type FuelTypeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FuelTypeCreateManyInput | Prisma.FuelTypeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FuelTypeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FuelTypeSelect<ExtArgs> | null;
    omit?: Prisma.FuelTypeOmit<ExtArgs> | null;
    include?: Prisma.FuelTypeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FuelTypeUpdateInput, Prisma.FuelTypeUncheckedUpdateInput>;
    where: Prisma.FuelTypeWhereUniqueInput;
};
export type FuelTypeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FuelTypeUpdateManyMutationInput, Prisma.FuelTypeUncheckedUpdateManyInput>;
    where?: Prisma.FuelTypeWhereInput;
    limit?: number;
};
export type FuelTypeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FuelTypeSelect<ExtArgs> | null;
    omit?: Prisma.FuelTypeOmit<ExtArgs> | null;
    include?: Prisma.FuelTypeInclude<ExtArgs> | null;
    where: Prisma.FuelTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.FuelTypeCreateInput, Prisma.FuelTypeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FuelTypeUpdateInput, Prisma.FuelTypeUncheckedUpdateInput>;
};
export type FuelTypeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FuelTypeSelect<ExtArgs> | null;
    omit?: Prisma.FuelTypeOmit<ExtArgs> | null;
    include?: Prisma.FuelTypeInclude<ExtArgs> | null;
    where: Prisma.FuelTypeWhereUniqueInput;
};
export type FuelTypeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FuelTypeWhereInput;
    limit?: number;
};
export type FuelType$translationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FuelType$modelsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FuelTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FuelTypeSelect<ExtArgs> | null;
    omit?: Prisma.FuelTypeOmit<ExtArgs> | null;
    include?: Prisma.FuelTypeInclude<ExtArgs> | null;
};
export {};
