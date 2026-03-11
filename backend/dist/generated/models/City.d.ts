import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type CityModel = runtime.Types.Result.DefaultSelection<Prisma.$CityPayload>;
export type AggregateCity = {
    _count: CityCountAggregateOutputType | null;
    _avg: CityAvgAggregateOutputType | null;
    _sum: CitySumAggregateOutputType | null;
    _min: CityMinAggregateOutputType | null;
    _max: CityMaxAggregateOutputType | null;
};
export type CityAvgAggregateOutputType = {
    id: number | null;
    stateId: number | null;
};
export type CitySumAggregateOutputType = {
    id: number | null;
    stateId: number | null;
};
export type CityMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    stateId: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CityMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    stateId: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CityCountAggregateOutputType = {
    id: number;
    name: number;
    stateId: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CityAvgAggregateInputType = {
    id?: true;
    stateId?: true;
};
export type CitySumAggregateInputType = {
    id?: true;
    stateId?: true;
};
export type CityMinAggregateInputType = {
    id?: true;
    name?: true;
    stateId?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CityMaxAggregateInputType = {
    id?: true;
    name?: true;
    stateId?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CityCountAggregateInputType = {
    id?: true;
    name?: true;
    stateId?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CityAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CityWhereInput;
    orderBy?: Prisma.CityOrderByWithRelationInput | Prisma.CityOrderByWithRelationInput[];
    cursor?: Prisma.CityWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CityCountAggregateInputType;
    _avg?: CityAvgAggregateInputType;
    _sum?: CitySumAggregateInputType;
    _min?: CityMinAggregateInputType;
    _max?: CityMaxAggregateInputType;
};
export type GetCityAggregateType<T extends CityAggregateArgs> = {
    [P in keyof T & keyof AggregateCity]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCity[P]> : Prisma.GetScalarType<T[P], AggregateCity[P]>;
};
export type CityGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CityWhereInput;
    orderBy?: Prisma.CityOrderByWithAggregationInput | Prisma.CityOrderByWithAggregationInput[];
    by: Prisma.CityScalarFieldEnum[] | Prisma.CityScalarFieldEnum;
    having?: Prisma.CityScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CityCountAggregateInputType | true;
    _avg?: CityAvgAggregateInputType;
    _sum?: CitySumAggregateInputType;
    _min?: CityMinAggregateInputType;
    _max?: CityMaxAggregateInputType;
};
export type CityGroupByOutputType = {
    id: number;
    name: string;
    stateId: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: CityCountAggregateOutputType | null;
    _avg: CityAvgAggregateOutputType | null;
    _sum: CitySumAggregateOutputType | null;
    _min: CityMinAggregateOutputType | null;
    _max: CityMaxAggregateOutputType | null;
};
type GetCityGroupByPayload<T extends CityGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CityGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CityGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CityGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CityGroupByOutputType[P]>;
}>>;
export type CityWhereInput = {
    AND?: Prisma.CityWhereInput | Prisma.CityWhereInput[];
    OR?: Prisma.CityWhereInput[];
    NOT?: Prisma.CityWhereInput | Prisma.CityWhereInput[];
    id?: Prisma.IntFilter<"City"> | number;
    name?: Prisma.StringFilter<"City"> | string;
    stateId?: Prisma.IntFilter<"City"> | number;
    isActive?: Prisma.BoolFilter<"City"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"City"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"City"> | Date | string;
    state?: Prisma.XOR<Prisma.StateScalarRelationFilter, Prisma.StateWhereInput>;
    stations?: Prisma.ChargingStationListRelationFilter;
};
export type CityOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    stateId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    state?: Prisma.StateOrderByWithRelationInput;
    stations?: Prisma.ChargingStationOrderByRelationAggregateInput;
    _relevance?: Prisma.CityOrderByRelevanceInput;
};
export type CityWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.CityWhereInput | Prisma.CityWhereInput[];
    OR?: Prisma.CityWhereInput[];
    NOT?: Prisma.CityWhereInput | Prisma.CityWhereInput[];
    name?: Prisma.StringFilter<"City"> | string;
    stateId?: Prisma.IntFilter<"City"> | number;
    isActive?: Prisma.BoolFilter<"City"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"City"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"City"> | Date | string;
    state?: Prisma.XOR<Prisma.StateScalarRelationFilter, Prisma.StateWhereInput>;
    stations?: Prisma.ChargingStationListRelationFilter;
}, "id">;
export type CityOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    stateId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CityCountOrderByAggregateInput;
    _avg?: Prisma.CityAvgOrderByAggregateInput;
    _max?: Prisma.CityMaxOrderByAggregateInput;
    _min?: Prisma.CityMinOrderByAggregateInput;
    _sum?: Prisma.CitySumOrderByAggregateInput;
};
export type CityScalarWhereWithAggregatesInput = {
    AND?: Prisma.CityScalarWhereWithAggregatesInput | Prisma.CityScalarWhereWithAggregatesInput[];
    OR?: Prisma.CityScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CityScalarWhereWithAggregatesInput | Prisma.CityScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"City"> | number;
    name?: Prisma.StringWithAggregatesFilter<"City"> | string;
    stateId?: Prisma.IntWithAggregatesFilter<"City"> | number;
    isActive?: Prisma.BoolWithAggregatesFilter<"City"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"City"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"City"> | Date | string;
};
export type CityCreateInput = {
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    state: Prisma.StateCreateNestedOneWithoutCitiesInput;
    stations?: Prisma.ChargingStationCreateNestedManyWithoutCityInput;
};
export type CityUncheckedCreateInput = {
    id?: number;
    name: string;
    stateId: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stations?: Prisma.ChargingStationUncheckedCreateNestedManyWithoutCityInput;
};
export type CityUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    state?: Prisma.StateUpdateOneRequiredWithoutCitiesNestedInput;
    stations?: Prisma.ChargingStationUpdateManyWithoutCityNestedInput;
};
export type CityUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    stateId?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stations?: Prisma.ChargingStationUncheckedUpdateManyWithoutCityNestedInput;
};
export type CityCreateManyInput = {
    id?: number;
    name: string;
    stateId: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CityUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CityUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    stateId?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CityListRelationFilter = {
    every?: Prisma.CityWhereInput;
    some?: Prisma.CityWhereInput;
    none?: Prisma.CityWhereInput;
};
export type CityOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CityOrderByRelevanceInput = {
    fields: Prisma.CityOrderByRelevanceFieldEnum | Prisma.CityOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type CityCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    stateId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CityAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    stateId?: Prisma.SortOrder;
};
export type CityMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    stateId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CityMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    stateId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CitySumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    stateId?: Prisma.SortOrder;
};
export type CityScalarRelationFilter = {
    is?: Prisma.CityWhereInput;
    isNot?: Prisma.CityWhereInput;
};
export type CityCreateNestedManyWithoutStateInput = {
    create?: Prisma.XOR<Prisma.CityCreateWithoutStateInput, Prisma.CityUncheckedCreateWithoutStateInput> | Prisma.CityCreateWithoutStateInput[] | Prisma.CityUncheckedCreateWithoutStateInput[];
    connectOrCreate?: Prisma.CityCreateOrConnectWithoutStateInput | Prisma.CityCreateOrConnectWithoutStateInput[];
    createMany?: Prisma.CityCreateManyStateInputEnvelope;
    connect?: Prisma.CityWhereUniqueInput | Prisma.CityWhereUniqueInput[];
};
export type CityUncheckedCreateNestedManyWithoutStateInput = {
    create?: Prisma.XOR<Prisma.CityCreateWithoutStateInput, Prisma.CityUncheckedCreateWithoutStateInput> | Prisma.CityCreateWithoutStateInput[] | Prisma.CityUncheckedCreateWithoutStateInput[];
    connectOrCreate?: Prisma.CityCreateOrConnectWithoutStateInput | Prisma.CityCreateOrConnectWithoutStateInput[];
    createMany?: Prisma.CityCreateManyStateInputEnvelope;
    connect?: Prisma.CityWhereUniqueInput | Prisma.CityWhereUniqueInput[];
};
export type CityUpdateManyWithoutStateNestedInput = {
    create?: Prisma.XOR<Prisma.CityCreateWithoutStateInput, Prisma.CityUncheckedCreateWithoutStateInput> | Prisma.CityCreateWithoutStateInput[] | Prisma.CityUncheckedCreateWithoutStateInput[];
    connectOrCreate?: Prisma.CityCreateOrConnectWithoutStateInput | Prisma.CityCreateOrConnectWithoutStateInput[];
    upsert?: Prisma.CityUpsertWithWhereUniqueWithoutStateInput | Prisma.CityUpsertWithWhereUniqueWithoutStateInput[];
    createMany?: Prisma.CityCreateManyStateInputEnvelope;
    set?: Prisma.CityWhereUniqueInput | Prisma.CityWhereUniqueInput[];
    disconnect?: Prisma.CityWhereUniqueInput | Prisma.CityWhereUniqueInput[];
    delete?: Prisma.CityWhereUniqueInput | Prisma.CityWhereUniqueInput[];
    connect?: Prisma.CityWhereUniqueInput | Prisma.CityWhereUniqueInput[];
    update?: Prisma.CityUpdateWithWhereUniqueWithoutStateInput | Prisma.CityUpdateWithWhereUniqueWithoutStateInput[];
    updateMany?: Prisma.CityUpdateManyWithWhereWithoutStateInput | Prisma.CityUpdateManyWithWhereWithoutStateInput[];
    deleteMany?: Prisma.CityScalarWhereInput | Prisma.CityScalarWhereInput[];
};
export type CityUncheckedUpdateManyWithoutStateNestedInput = {
    create?: Prisma.XOR<Prisma.CityCreateWithoutStateInput, Prisma.CityUncheckedCreateWithoutStateInput> | Prisma.CityCreateWithoutStateInput[] | Prisma.CityUncheckedCreateWithoutStateInput[];
    connectOrCreate?: Prisma.CityCreateOrConnectWithoutStateInput | Prisma.CityCreateOrConnectWithoutStateInput[];
    upsert?: Prisma.CityUpsertWithWhereUniqueWithoutStateInput | Prisma.CityUpsertWithWhereUniqueWithoutStateInput[];
    createMany?: Prisma.CityCreateManyStateInputEnvelope;
    set?: Prisma.CityWhereUniqueInput | Prisma.CityWhereUniqueInput[];
    disconnect?: Prisma.CityWhereUniqueInput | Prisma.CityWhereUniqueInput[];
    delete?: Prisma.CityWhereUniqueInput | Prisma.CityWhereUniqueInput[];
    connect?: Prisma.CityWhereUniqueInput | Prisma.CityWhereUniqueInput[];
    update?: Prisma.CityUpdateWithWhereUniqueWithoutStateInput | Prisma.CityUpdateWithWhereUniqueWithoutStateInput[];
    updateMany?: Prisma.CityUpdateManyWithWhereWithoutStateInput | Prisma.CityUpdateManyWithWhereWithoutStateInput[];
    deleteMany?: Prisma.CityScalarWhereInput | Prisma.CityScalarWhereInput[];
};
export type CityCreateNestedOneWithoutStationsInput = {
    create?: Prisma.XOR<Prisma.CityCreateWithoutStationsInput, Prisma.CityUncheckedCreateWithoutStationsInput>;
    connectOrCreate?: Prisma.CityCreateOrConnectWithoutStationsInput;
    connect?: Prisma.CityWhereUniqueInput;
};
export type CityUpdateOneRequiredWithoutStationsNestedInput = {
    create?: Prisma.XOR<Prisma.CityCreateWithoutStationsInput, Prisma.CityUncheckedCreateWithoutStationsInput>;
    connectOrCreate?: Prisma.CityCreateOrConnectWithoutStationsInput;
    upsert?: Prisma.CityUpsertWithoutStationsInput;
    connect?: Prisma.CityWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CityUpdateToOneWithWhereWithoutStationsInput, Prisma.CityUpdateWithoutStationsInput>, Prisma.CityUncheckedUpdateWithoutStationsInput>;
};
export type CityCreateWithoutStateInput = {
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stations?: Prisma.ChargingStationCreateNestedManyWithoutCityInput;
};
export type CityUncheckedCreateWithoutStateInput = {
    id?: number;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    stations?: Prisma.ChargingStationUncheckedCreateNestedManyWithoutCityInput;
};
export type CityCreateOrConnectWithoutStateInput = {
    where: Prisma.CityWhereUniqueInput;
    create: Prisma.XOR<Prisma.CityCreateWithoutStateInput, Prisma.CityUncheckedCreateWithoutStateInput>;
};
export type CityCreateManyStateInputEnvelope = {
    data: Prisma.CityCreateManyStateInput | Prisma.CityCreateManyStateInput[];
    skipDuplicates?: boolean;
};
export type CityUpsertWithWhereUniqueWithoutStateInput = {
    where: Prisma.CityWhereUniqueInput;
    update: Prisma.XOR<Prisma.CityUpdateWithoutStateInput, Prisma.CityUncheckedUpdateWithoutStateInput>;
    create: Prisma.XOR<Prisma.CityCreateWithoutStateInput, Prisma.CityUncheckedCreateWithoutStateInput>;
};
export type CityUpdateWithWhereUniqueWithoutStateInput = {
    where: Prisma.CityWhereUniqueInput;
    data: Prisma.XOR<Prisma.CityUpdateWithoutStateInput, Prisma.CityUncheckedUpdateWithoutStateInput>;
};
export type CityUpdateManyWithWhereWithoutStateInput = {
    where: Prisma.CityScalarWhereInput;
    data: Prisma.XOR<Prisma.CityUpdateManyMutationInput, Prisma.CityUncheckedUpdateManyWithoutStateInput>;
};
export type CityScalarWhereInput = {
    AND?: Prisma.CityScalarWhereInput | Prisma.CityScalarWhereInput[];
    OR?: Prisma.CityScalarWhereInput[];
    NOT?: Prisma.CityScalarWhereInput | Prisma.CityScalarWhereInput[];
    id?: Prisma.IntFilter<"City"> | number;
    name?: Prisma.StringFilter<"City"> | string;
    stateId?: Prisma.IntFilter<"City"> | number;
    isActive?: Prisma.BoolFilter<"City"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"City"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"City"> | Date | string;
};
export type CityCreateWithoutStationsInput = {
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    state: Prisma.StateCreateNestedOneWithoutCitiesInput;
};
export type CityUncheckedCreateWithoutStationsInput = {
    id?: number;
    name: string;
    stateId: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CityCreateOrConnectWithoutStationsInput = {
    where: Prisma.CityWhereUniqueInput;
    create: Prisma.XOR<Prisma.CityCreateWithoutStationsInput, Prisma.CityUncheckedCreateWithoutStationsInput>;
};
export type CityUpsertWithoutStationsInput = {
    update: Prisma.XOR<Prisma.CityUpdateWithoutStationsInput, Prisma.CityUncheckedUpdateWithoutStationsInput>;
    create: Prisma.XOR<Prisma.CityCreateWithoutStationsInput, Prisma.CityUncheckedCreateWithoutStationsInput>;
    where?: Prisma.CityWhereInput;
};
export type CityUpdateToOneWithWhereWithoutStationsInput = {
    where?: Prisma.CityWhereInput;
    data: Prisma.XOR<Prisma.CityUpdateWithoutStationsInput, Prisma.CityUncheckedUpdateWithoutStationsInput>;
};
export type CityUpdateWithoutStationsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    state?: Prisma.StateUpdateOneRequiredWithoutCitiesNestedInput;
};
export type CityUncheckedUpdateWithoutStationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    stateId?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CityCreateManyStateInput = {
    id?: number;
    name: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CityUpdateWithoutStateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stations?: Prisma.ChargingStationUpdateManyWithoutCityNestedInput;
};
export type CityUncheckedUpdateWithoutStateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    stations?: Prisma.ChargingStationUncheckedUpdateManyWithoutCityNestedInput;
};
export type CityUncheckedUpdateManyWithoutStateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CityCountOutputType = {
    stations: number;
};
export type CityCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    stations?: boolean | CityCountOutputTypeCountStationsArgs;
};
export type CityCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CityCountOutputTypeSelect<ExtArgs> | null;
};
export type CityCountOutputTypeCountStationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChargingStationWhereInput;
};
export type CitySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    stateId?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    state?: boolean | Prisma.StateDefaultArgs<ExtArgs>;
    stations?: boolean | Prisma.City$stationsArgs<ExtArgs>;
    _count?: boolean | Prisma.CityCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["city"]>;
export type CitySelectScalar = {
    id?: boolean;
    name?: boolean;
    stateId?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CityOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "stateId" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["city"]>;
export type CityInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    state?: boolean | Prisma.StateDefaultArgs<ExtArgs>;
    stations?: boolean | Prisma.City$stationsArgs<ExtArgs>;
    _count?: boolean | Prisma.CityCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $CityPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "City";
    objects: {
        state: Prisma.$StatePayload<ExtArgs>;
        stations: Prisma.$ChargingStationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        stateId: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["city"]>;
    composites: {};
};
export type CityGetPayload<S extends boolean | null | undefined | CityDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CityPayload, S>;
export type CityCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CityCountAggregateInputType | true;
};
export interface CityDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['City'];
        meta: {
            name: 'City';
        };
    };
    findUnique<T extends CityFindUniqueArgs>(args: Prisma.SelectSubset<T, CityFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CityClient<runtime.Types.Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CityFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CityFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CityClient<runtime.Types.Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CityFindFirstArgs>(args?: Prisma.SelectSubset<T, CityFindFirstArgs<ExtArgs>>): Prisma.Prisma__CityClient<runtime.Types.Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CityFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CityFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CityClient<runtime.Types.Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CityFindManyArgs>(args?: Prisma.SelectSubset<T, CityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CityCreateArgs>(args: Prisma.SelectSubset<T, CityCreateArgs<ExtArgs>>): Prisma.Prisma__CityClient<runtime.Types.Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CityCreateManyArgs>(args?: Prisma.SelectSubset<T, CityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends CityDeleteArgs>(args: Prisma.SelectSubset<T, CityDeleteArgs<ExtArgs>>): Prisma.Prisma__CityClient<runtime.Types.Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CityUpdateArgs>(args: Prisma.SelectSubset<T, CityUpdateArgs<ExtArgs>>): Prisma.Prisma__CityClient<runtime.Types.Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CityDeleteManyArgs>(args?: Prisma.SelectSubset<T, CityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CityUpdateManyArgs>(args: Prisma.SelectSubset<T, CityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends CityUpsertArgs>(args: Prisma.SelectSubset<T, CityUpsertArgs<ExtArgs>>): Prisma.Prisma__CityClient<runtime.Types.Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CityCountArgs>(args?: Prisma.Subset<T, CityCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CityCountAggregateOutputType> : number>;
    aggregate<T extends CityAggregateArgs>(args: Prisma.Subset<T, CityAggregateArgs>): Prisma.PrismaPromise<GetCityAggregateType<T>>;
    groupBy<T extends CityGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CityGroupByArgs['orderBy'];
    } : {
        orderBy?: CityGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CityFieldRefs;
}
export interface Prisma__CityClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    state<T extends Prisma.StateDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StateDefaultArgs<ExtArgs>>): Prisma.Prisma__StateClient<runtime.Types.Result.GetResult<Prisma.$StatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    stations<T extends Prisma.City$stationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.City$stationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChargingStationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CityFieldRefs {
    readonly id: Prisma.FieldRef<"City", 'Int'>;
    readonly name: Prisma.FieldRef<"City", 'String'>;
    readonly stateId: Prisma.FieldRef<"City", 'Int'>;
    readonly isActive: Prisma.FieldRef<"City", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"City", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"City", 'DateTime'>;
}
export type CityFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitySelect<ExtArgs> | null;
    omit?: Prisma.CityOmit<ExtArgs> | null;
    include?: Prisma.CityInclude<ExtArgs> | null;
    where: Prisma.CityWhereUniqueInput;
};
export type CityFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitySelect<ExtArgs> | null;
    omit?: Prisma.CityOmit<ExtArgs> | null;
    include?: Prisma.CityInclude<ExtArgs> | null;
    where: Prisma.CityWhereUniqueInput;
};
export type CityFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CityFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CityFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CityCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitySelect<ExtArgs> | null;
    omit?: Prisma.CityOmit<ExtArgs> | null;
    include?: Prisma.CityInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CityCreateInput, Prisma.CityUncheckedCreateInput>;
};
export type CityCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CityCreateManyInput | Prisma.CityCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CityUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitySelect<ExtArgs> | null;
    omit?: Prisma.CityOmit<ExtArgs> | null;
    include?: Prisma.CityInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CityUpdateInput, Prisma.CityUncheckedUpdateInput>;
    where: Prisma.CityWhereUniqueInput;
};
export type CityUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CityUpdateManyMutationInput, Prisma.CityUncheckedUpdateManyInput>;
    where?: Prisma.CityWhereInput;
    limit?: number;
};
export type CityUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitySelect<ExtArgs> | null;
    omit?: Prisma.CityOmit<ExtArgs> | null;
    include?: Prisma.CityInclude<ExtArgs> | null;
    where: Prisma.CityWhereUniqueInput;
    create: Prisma.XOR<Prisma.CityCreateInput, Prisma.CityUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CityUpdateInput, Prisma.CityUncheckedUpdateInput>;
};
export type CityDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitySelect<ExtArgs> | null;
    omit?: Prisma.CityOmit<ExtArgs> | null;
    include?: Prisma.CityInclude<ExtArgs> | null;
    where: Prisma.CityWhereUniqueInput;
};
export type CityDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CityWhereInput;
    limit?: number;
};
export type City$stationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChargingStationSelect<ExtArgs> | null;
    omit?: Prisma.ChargingStationOmit<ExtArgs> | null;
    include?: Prisma.ChargingStationInclude<ExtArgs> | null;
    where?: Prisma.ChargingStationWhereInput;
    orderBy?: Prisma.ChargingStationOrderByWithRelationInput | Prisma.ChargingStationOrderByWithRelationInput[];
    cursor?: Prisma.ChargingStationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChargingStationScalarFieldEnum | Prisma.ChargingStationScalarFieldEnum[];
};
export type CityDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitySelect<ExtArgs> | null;
    omit?: Prisma.CityOmit<ExtArgs> | null;
    include?: Prisma.CityInclude<ExtArgs> | null;
};
export {};
