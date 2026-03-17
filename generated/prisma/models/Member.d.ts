import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type MemberModel = runtime.Types.Result.DefaultSelection<Prisma.$MemberPayload>;
export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null;
    _avg: MemberAvgAggregateOutputType | null;
    _sum: MemberSumAggregateOutputType | null;
    _min: MemberMinAggregateOutputType | null;
    _max: MemberMaxAggregateOutputType | null;
};
export type MemberAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
    organizationId: number | null;
};
export type MemberSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
    organizationId: number | null;
};
export type MemberMinAggregateOutputType = {
    id: number | null;
    role: $Enums.Role | null;
    joinedAt: Date | null;
    userId: number | null;
    organizationId: number | null;
};
export type MemberMaxAggregateOutputType = {
    id: number | null;
    role: $Enums.Role | null;
    joinedAt: Date | null;
    userId: number | null;
    organizationId: number | null;
};
export type MemberCountAggregateOutputType = {
    id: number;
    role: number;
    joinedAt: number;
    userId: number;
    organizationId: number;
    _all: number;
};
export type MemberAvgAggregateInputType = {
    id?: true;
    userId?: true;
    organizationId?: true;
};
export type MemberSumAggregateInputType = {
    id?: true;
    userId?: true;
    organizationId?: true;
};
export type MemberMinAggregateInputType = {
    id?: true;
    role?: true;
    joinedAt?: true;
    userId?: true;
    organizationId?: true;
};
export type MemberMaxAggregateInputType = {
    id?: true;
    role?: true;
    joinedAt?: true;
    userId?: true;
    organizationId?: true;
};
export type MemberCountAggregateInputType = {
    id?: true;
    role?: true;
    joinedAt?: true;
    userId?: true;
    organizationId?: true;
    _all?: true;
};
export type MemberAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MemberWhereInput;
    orderBy?: Prisma.MemberOrderByWithRelationInput | Prisma.MemberOrderByWithRelationInput[];
    cursor?: Prisma.MemberWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MemberCountAggregateInputType;
    _avg?: MemberAvgAggregateInputType;
    _sum?: MemberSumAggregateInputType;
    _min?: MemberMinAggregateInputType;
    _max?: MemberMaxAggregateInputType;
};
export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
    [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMember[P]> : Prisma.GetScalarType<T[P], AggregateMember[P]>;
};
export type MemberGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MemberWhereInput;
    orderBy?: Prisma.MemberOrderByWithAggregationInput | Prisma.MemberOrderByWithAggregationInput[];
    by: Prisma.MemberScalarFieldEnum[] | Prisma.MemberScalarFieldEnum;
    having?: Prisma.MemberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MemberCountAggregateInputType | true;
    _avg?: MemberAvgAggregateInputType;
    _sum?: MemberSumAggregateInputType;
    _min?: MemberMinAggregateInputType;
    _max?: MemberMaxAggregateInputType;
};
export type MemberGroupByOutputType = {
    id: number;
    role: $Enums.Role;
    joinedAt: Date;
    userId: number;
    organizationId: number;
    _count: MemberCountAggregateOutputType | null;
    _avg: MemberAvgAggregateOutputType | null;
    _sum: MemberSumAggregateOutputType | null;
    _min: MemberMinAggregateOutputType | null;
    _max: MemberMaxAggregateOutputType | null;
};
type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MemberGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MemberGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MemberGroupByOutputType[P]>;
}>>;
export type MemberWhereInput = {
    AND?: Prisma.MemberWhereInput | Prisma.MemberWhereInput[];
    OR?: Prisma.MemberWhereInput[];
    NOT?: Prisma.MemberWhereInput | Prisma.MemberWhereInput[];
    id?: Prisma.IntFilter<"Member"> | number;
    role?: Prisma.EnumRoleFilter<"Member"> | $Enums.Role;
    joinedAt?: Prisma.DateTimeFilter<"Member"> | Date | string;
    userId?: Prisma.IntFilter<"Member"> | number;
    organizationId?: Prisma.IntFilter<"Member"> | number;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
};
export type MemberOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    organization?: Prisma.OrganizationOrderByWithRelationInput;
};
export type MemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    userId_organizationId?: Prisma.MemberUserIdOrganizationIdCompoundUniqueInput;
    AND?: Prisma.MemberWhereInput | Prisma.MemberWhereInput[];
    OR?: Prisma.MemberWhereInput[];
    NOT?: Prisma.MemberWhereInput | Prisma.MemberWhereInput[];
    role?: Prisma.EnumRoleFilter<"Member"> | $Enums.Role;
    joinedAt?: Prisma.DateTimeFilter<"Member"> | Date | string;
    userId?: Prisma.IntFilter<"Member"> | number;
    organizationId?: Prisma.IntFilter<"Member"> | number;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    organization?: Prisma.XOR<Prisma.OrganizationScalarRelationFilter, Prisma.OrganizationWhereInput>;
}, "id" | "userId_organizationId">;
export type MemberOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
    _count?: Prisma.MemberCountOrderByAggregateInput;
    _avg?: Prisma.MemberAvgOrderByAggregateInput;
    _max?: Prisma.MemberMaxOrderByAggregateInput;
    _min?: Prisma.MemberMinOrderByAggregateInput;
    _sum?: Prisma.MemberSumOrderByAggregateInput;
};
export type MemberScalarWhereWithAggregatesInput = {
    AND?: Prisma.MemberScalarWhereWithAggregatesInput | Prisma.MemberScalarWhereWithAggregatesInput[];
    OR?: Prisma.MemberScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MemberScalarWhereWithAggregatesInput | Prisma.MemberScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Member"> | number;
    role?: Prisma.EnumRoleWithAggregatesFilter<"Member"> | $Enums.Role;
    joinedAt?: Prisma.DateTimeWithAggregatesFilter<"Member"> | Date | string;
    userId?: Prisma.IntWithAggregatesFilter<"Member"> | number;
    organizationId?: Prisma.IntWithAggregatesFilter<"Member"> | number;
};
export type MemberCreateInput = {
    role?: $Enums.Role;
    joinedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutMembershipsInput;
    organization: Prisma.OrganizationCreateNestedOneWithoutMembersInput;
};
export type MemberUncheckedCreateInput = {
    id?: number;
    role?: $Enums.Role;
    joinedAt?: Date | string;
    userId: number;
    organizationId: number;
};
export type MemberUpdateInput = {
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMembershipsNestedInput;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutMembersNestedInput;
};
export type MemberUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    organizationId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type MemberCreateManyInput = {
    id?: number;
    role?: $Enums.Role;
    joinedAt?: Date | string;
    userId: number;
    organizationId: number;
};
export type MemberUpdateManyMutationInput = {
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MemberUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    organizationId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type MemberListRelationFilter = {
    every?: Prisma.MemberWhereInput;
    some?: Prisma.MemberWhereInput;
    none?: Prisma.MemberWhereInput;
};
export type MemberOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MemberUserIdOrganizationIdCompoundUniqueInput = {
    userId: number;
    organizationId: number;
};
export type MemberCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
};
export type MemberAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
};
export type MemberMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
};
export type MemberMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
};
export type MemberSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    organizationId?: Prisma.SortOrder;
};
export type MemberCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MemberCreateWithoutUserInput, Prisma.MemberUncheckedCreateWithoutUserInput> | Prisma.MemberCreateWithoutUserInput[] | Prisma.MemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MemberCreateOrConnectWithoutUserInput | Prisma.MemberCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MemberCreateManyUserInputEnvelope;
    connect?: Prisma.MemberWhereUniqueInput | Prisma.MemberWhereUniqueInput[];
};
export type MemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MemberCreateWithoutUserInput, Prisma.MemberUncheckedCreateWithoutUserInput> | Prisma.MemberCreateWithoutUserInput[] | Prisma.MemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MemberCreateOrConnectWithoutUserInput | Prisma.MemberCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MemberCreateManyUserInputEnvelope;
    connect?: Prisma.MemberWhereUniqueInput | Prisma.MemberWhereUniqueInput[];
};
export type MemberUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MemberCreateWithoutUserInput, Prisma.MemberUncheckedCreateWithoutUserInput> | Prisma.MemberCreateWithoutUserInput[] | Prisma.MemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MemberCreateOrConnectWithoutUserInput | Prisma.MemberCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MemberUpsertWithWhereUniqueWithoutUserInput | Prisma.MemberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MemberCreateManyUserInputEnvelope;
    set?: Prisma.MemberWhereUniqueInput | Prisma.MemberWhereUniqueInput[];
    disconnect?: Prisma.MemberWhereUniqueInput | Prisma.MemberWhereUniqueInput[];
    delete?: Prisma.MemberWhereUniqueInput | Prisma.MemberWhereUniqueInput[];
    connect?: Prisma.MemberWhereUniqueInput | Prisma.MemberWhereUniqueInput[];
    update?: Prisma.MemberUpdateWithWhereUniqueWithoutUserInput | Prisma.MemberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MemberUpdateManyWithWhereWithoutUserInput | Prisma.MemberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MemberScalarWhereInput | Prisma.MemberScalarWhereInput[];
};
export type MemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MemberCreateWithoutUserInput, Prisma.MemberUncheckedCreateWithoutUserInput> | Prisma.MemberCreateWithoutUserInput[] | Prisma.MemberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MemberCreateOrConnectWithoutUserInput | Prisma.MemberCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MemberUpsertWithWhereUniqueWithoutUserInput | Prisma.MemberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MemberCreateManyUserInputEnvelope;
    set?: Prisma.MemberWhereUniqueInput | Prisma.MemberWhereUniqueInput[];
    disconnect?: Prisma.MemberWhereUniqueInput | Prisma.MemberWhereUniqueInput[];
    delete?: Prisma.MemberWhereUniqueInput | Prisma.MemberWhereUniqueInput[];
    connect?: Prisma.MemberWhereUniqueInput | Prisma.MemberWhereUniqueInput[];
    update?: Prisma.MemberUpdateWithWhereUniqueWithoutUserInput | Prisma.MemberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MemberUpdateManyWithWhereWithoutUserInput | Prisma.MemberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MemberScalarWhereInput | Prisma.MemberScalarWhereInput[];
};
export type MemberCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.MemberCreateWithoutOrganizationInput, Prisma.MemberUncheckedCreateWithoutOrganizationInput> | Prisma.MemberCreateWithoutOrganizationInput[] | Prisma.MemberUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.MemberCreateOrConnectWithoutOrganizationInput | Prisma.MemberCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.MemberCreateManyOrganizationInputEnvelope;
    connect?: Prisma.MemberWhereUniqueInput | Prisma.MemberWhereUniqueInput[];
};
export type MemberUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: Prisma.XOR<Prisma.MemberCreateWithoutOrganizationInput, Prisma.MemberUncheckedCreateWithoutOrganizationInput> | Prisma.MemberCreateWithoutOrganizationInput[] | Prisma.MemberUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.MemberCreateOrConnectWithoutOrganizationInput | Prisma.MemberCreateOrConnectWithoutOrganizationInput[];
    createMany?: Prisma.MemberCreateManyOrganizationInputEnvelope;
    connect?: Prisma.MemberWhereUniqueInput | Prisma.MemberWhereUniqueInput[];
};
export type MemberUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.MemberCreateWithoutOrganizationInput, Prisma.MemberUncheckedCreateWithoutOrganizationInput> | Prisma.MemberCreateWithoutOrganizationInput[] | Prisma.MemberUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.MemberCreateOrConnectWithoutOrganizationInput | Prisma.MemberCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.MemberUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.MemberUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.MemberCreateManyOrganizationInputEnvelope;
    set?: Prisma.MemberWhereUniqueInput | Prisma.MemberWhereUniqueInput[];
    disconnect?: Prisma.MemberWhereUniqueInput | Prisma.MemberWhereUniqueInput[];
    delete?: Prisma.MemberWhereUniqueInput | Prisma.MemberWhereUniqueInput[];
    connect?: Prisma.MemberWhereUniqueInput | Prisma.MemberWhereUniqueInput[];
    update?: Prisma.MemberUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.MemberUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.MemberUpdateManyWithWhereWithoutOrganizationInput | Prisma.MemberUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.MemberScalarWhereInput | Prisma.MemberScalarWhereInput[];
};
export type MemberUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: Prisma.XOR<Prisma.MemberCreateWithoutOrganizationInput, Prisma.MemberUncheckedCreateWithoutOrganizationInput> | Prisma.MemberCreateWithoutOrganizationInput[] | Prisma.MemberUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: Prisma.MemberCreateOrConnectWithoutOrganizationInput | Prisma.MemberCreateOrConnectWithoutOrganizationInput[];
    upsert?: Prisma.MemberUpsertWithWhereUniqueWithoutOrganizationInput | Prisma.MemberUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: Prisma.MemberCreateManyOrganizationInputEnvelope;
    set?: Prisma.MemberWhereUniqueInput | Prisma.MemberWhereUniqueInput[];
    disconnect?: Prisma.MemberWhereUniqueInput | Prisma.MemberWhereUniqueInput[];
    delete?: Prisma.MemberWhereUniqueInput | Prisma.MemberWhereUniqueInput[];
    connect?: Prisma.MemberWhereUniqueInput | Prisma.MemberWhereUniqueInput[];
    update?: Prisma.MemberUpdateWithWhereUniqueWithoutOrganizationInput | Prisma.MemberUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: Prisma.MemberUpdateManyWithWhereWithoutOrganizationInput | Prisma.MemberUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: Prisma.MemberScalarWhereInput | Prisma.MemberScalarWhereInput[];
};
export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
};
export type MemberCreateWithoutUserInput = {
    role?: $Enums.Role;
    joinedAt?: Date | string;
    organization: Prisma.OrganizationCreateNestedOneWithoutMembersInput;
};
export type MemberUncheckedCreateWithoutUserInput = {
    id?: number;
    role?: $Enums.Role;
    joinedAt?: Date | string;
    organizationId: number;
};
export type MemberCreateOrConnectWithoutUserInput = {
    where: Prisma.MemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.MemberCreateWithoutUserInput, Prisma.MemberUncheckedCreateWithoutUserInput>;
};
export type MemberCreateManyUserInputEnvelope = {
    data: Prisma.MemberCreateManyUserInput | Prisma.MemberCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type MemberUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.MemberWhereUniqueInput;
    update: Prisma.XOR<Prisma.MemberUpdateWithoutUserInput, Prisma.MemberUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.MemberCreateWithoutUserInput, Prisma.MemberUncheckedCreateWithoutUserInput>;
};
export type MemberUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.MemberWhereUniqueInput;
    data: Prisma.XOR<Prisma.MemberUpdateWithoutUserInput, Prisma.MemberUncheckedUpdateWithoutUserInput>;
};
export type MemberUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.MemberScalarWhereInput;
    data: Prisma.XOR<Prisma.MemberUpdateManyMutationInput, Prisma.MemberUncheckedUpdateManyWithoutUserInput>;
};
export type MemberScalarWhereInput = {
    AND?: Prisma.MemberScalarWhereInput | Prisma.MemberScalarWhereInput[];
    OR?: Prisma.MemberScalarWhereInput[];
    NOT?: Prisma.MemberScalarWhereInput | Prisma.MemberScalarWhereInput[];
    id?: Prisma.IntFilter<"Member"> | number;
    role?: Prisma.EnumRoleFilter<"Member"> | $Enums.Role;
    joinedAt?: Prisma.DateTimeFilter<"Member"> | Date | string;
    userId?: Prisma.IntFilter<"Member"> | number;
    organizationId?: Prisma.IntFilter<"Member"> | number;
};
export type MemberCreateWithoutOrganizationInput = {
    role?: $Enums.Role;
    joinedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutMembershipsInput;
};
export type MemberUncheckedCreateWithoutOrganizationInput = {
    id?: number;
    role?: $Enums.Role;
    joinedAt?: Date | string;
    userId: number;
};
export type MemberCreateOrConnectWithoutOrganizationInput = {
    where: Prisma.MemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.MemberCreateWithoutOrganizationInput, Prisma.MemberUncheckedCreateWithoutOrganizationInput>;
};
export type MemberCreateManyOrganizationInputEnvelope = {
    data: Prisma.MemberCreateManyOrganizationInput | Prisma.MemberCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
};
export type MemberUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.MemberWhereUniqueInput;
    update: Prisma.XOR<Prisma.MemberUpdateWithoutOrganizationInput, Prisma.MemberUncheckedUpdateWithoutOrganizationInput>;
    create: Prisma.XOR<Prisma.MemberCreateWithoutOrganizationInput, Prisma.MemberUncheckedCreateWithoutOrganizationInput>;
};
export type MemberUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: Prisma.MemberWhereUniqueInput;
    data: Prisma.XOR<Prisma.MemberUpdateWithoutOrganizationInput, Prisma.MemberUncheckedUpdateWithoutOrganizationInput>;
};
export type MemberUpdateManyWithWhereWithoutOrganizationInput = {
    where: Prisma.MemberScalarWhereInput;
    data: Prisma.XOR<Prisma.MemberUpdateManyMutationInput, Prisma.MemberUncheckedUpdateManyWithoutOrganizationInput>;
};
export type MemberCreateManyUserInput = {
    id?: number;
    role?: $Enums.Role;
    joinedAt?: Date | string;
    organizationId: number;
};
export type MemberUpdateWithoutUserInput = {
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: Prisma.OrganizationUpdateOneRequiredWithoutMembersNestedInput;
};
export type MemberUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organizationId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type MemberUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organizationId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type MemberCreateManyOrganizationInput = {
    id?: number;
    role?: $Enums.Role;
    joinedAt?: Date | string;
    userId: number;
};
export type MemberUpdateWithoutOrganizationInput = {
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMembershipsNestedInput;
};
export type MemberUncheckedUpdateWithoutOrganizationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type MemberUncheckedUpdateManyWithoutOrganizationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type MemberSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    role?: boolean;
    joinedAt?: boolean;
    userId?: boolean;
    organizationId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["member"]>;
export type MemberSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    role?: boolean;
    joinedAt?: boolean;
    userId?: boolean;
    organizationId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["member"]>;
export type MemberSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    role?: boolean;
    joinedAt?: boolean;
    userId?: boolean;
    organizationId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["member"]>;
export type MemberSelectScalar = {
    id?: boolean;
    role?: boolean;
    joinedAt?: boolean;
    userId?: boolean;
    organizationId?: boolean;
};
export type MemberOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "role" | "joinedAt" | "userId" | "organizationId", ExtArgs["result"]["member"]>;
export type MemberInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type MemberIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type MemberIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    organization?: boolean | Prisma.OrganizationDefaultArgs<ExtArgs>;
};
export type $MemberPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Member";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        organization: Prisma.$OrganizationPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        role: $Enums.Role;
        joinedAt: Date;
        userId: number;
        organizationId: number;
    }, ExtArgs["result"]["member"]>;
    composites: {};
};
export type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MemberPayload, S>;
export type MemberCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MemberCountAggregateInputType | true;
};
export interface MemberDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Member'];
        meta: {
            name: 'Member';
        };
    };
    findUnique<T extends MemberFindUniqueArgs>(args: Prisma.SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MemberClient<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MemberClient<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MemberFindFirstArgs>(args?: Prisma.SelectSubset<T, MemberFindFirstArgs<ExtArgs>>): Prisma.Prisma__MemberClient<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MemberClient<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MemberFindManyArgs>(args?: Prisma.SelectSubset<T, MemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MemberCreateArgs>(args: Prisma.SelectSubset<T, MemberCreateArgs<ExtArgs>>): Prisma.Prisma__MemberClient<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MemberCreateManyArgs>(args?: Prisma.SelectSubset<T, MemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MemberCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MemberDeleteArgs>(args: Prisma.SelectSubset<T, MemberDeleteArgs<ExtArgs>>): Prisma.Prisma__MemberClient<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MemberUpdateArgs>(args: Prisma.SelectSubset<T, MemberUpdateArgs<ExtArgs>>): Prisma.Prisma__MemberClient<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MemberDeleteManyArgs>(args?: Prisma.SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MemberUpdateManyArgs>(args: Prisma.SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MemberUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MemberUpsertArgs>(args: Prisma.SelectSubset<T, MemberUpsertArgs<ExtArgs>>): Prisma.Prisma__MemberClient<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MemberCountArgs>(args?: Prisma.Subset<T, MemberCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MemberCountAggregateOutputType> : number>;
    aggregate<T extends MemberAggregateArgs>(args: Prisma.Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>;
    groupBy<T extends MemberGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MemberGroupByArgs['orderBy'];
    } : {
        orderBy?: MemberGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MemberFieldRefs;
}
export interface Prisma__MemberClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    organization<T extends Prisma.OrganizationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrganizationDefaultArgs<ExtArgs>>): Prisma.Prisma__OrganizationClient<runtime.Types.Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MemberFieldRefs {
    readonly id: Prisma.FieldRef<"Member", 'Int'>;
    readonly role: Prisma.FieldRef<"Member", 'Role'>;
    readonly joinedAt: Prisma.FieldRef<"Member", 'DateTime'>;
    readonly userId: Prisma.FieldRef<"Member", 'Int'>;
    readonly organizationId: Prisma.FieldRef<"Member", 'Int'>;
}
export type MemberFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelect<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    include?: Prisma.MemberInclude<ExtArgs> | null;
    where: Prisma.MemberWhereUniqueInput;
};
export type MemberFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelect<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    include?: Prisma.MemberInclude<ExtArgs> | null;
    where: Prisma.MemberWhereUniqueInput;
};
export type MemberFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelect<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    include?: Prisma.MemberInclude<ExtArgs> | null;
    where?: Prisma.MemberWhereInput;
    orderBy?: Prisma.MemberOrderByWithRelationInput | Prisma.MemberOrderByWithRelationInput[];
    cursor?: Prisma.MemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MemberScalarFieldEnum | Prisma.MemberScalarFieldEnum[];
};
export type MemberFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelect<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    include?: Prisma.MemberInclude<ExtArgs> | null;
    where?: Prisma.MemberWhereInput;
    orderBy?: Prisma.MemberOrderByWithRelationInput | Prisma.MemberOrderByWithRelationInput[];
    cursor?: Prisma.MemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MemberScalarFieldEnum | Prisma.MemberScalarFieldEnum[];
};
export type MemberFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelect<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    include?: Prisma.MemberInclude<ExtArgs> | null;
    where?: Prisma.MemberWhereInput;
    orderBy?: Prisma.MemberOrderByWithRelationInput | Prisma.MemberOrderByWithRelationInput[];
    cursor?: Prisma.MemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MemberScalarFieldEnum | Prisma.MemberScalarFieldEnum[];
};
export type MemberCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelect<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    include?: Prisma.MemberInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MemberCreateInput, Prisma.MemberUncheckedCreateInput>;
};
export type MemberCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MemberCreateManyInput | Prisma.MemberCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MemberCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    data: Prisma.MemberCreateManyInput | Prisma.MemberCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MemberIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MemberUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelect<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    include?: Prisma.MemberInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MemberUpdateInput, Prisma.MemberUncheckedUpdateInput>;
    where: Prisma.MemberWhereUniqueInput;
};
export type MemberUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MemberUpdateManyMutationInput, Prisma.MemberUncheckedUpdateManyInput>;
    where?: Prisma.MemberWhereInput;
    limit?: number;
};
export type MemberUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MemberUpdateManyMutationInput, Prisma.MemberUncheckedUpdateManyInput>;
    where?: Prisma.MemberWhereInput;
    limit?: number;
    include?: Prisma.MemberIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MemberUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelect<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    include?: Prisma.MemberInclude<ExtArgs> | null;
    where: Prisma.MemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.MemberCreateInput, Prisma.MemberUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MemberUpdateInput, Prisma.MemberUncheckedUpdateInput>;
};
export type MemberDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelect<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    include?: Prisma.MemberInclude<ExtArgs> | null;
    where: Prisma.MemberWhereUniqueInput;
};
export type MemberDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MemberWhereInput;
    limit?: number;
};
export type MemberDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MemberSelect<ExtArgs> | null;
    omit?: Prisma.MemberOmit<ExtArgs> | null;
    include?: Prisma.MemberInclude<ExtArgs> | null;
};
export {};
