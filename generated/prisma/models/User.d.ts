import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserAvgAggregateOutputType = {
    id: number | null;
};
export type UserSumAggregateOutputType = {
    id: number | null;
};
export type UserMinAggregateOutputType = {
    id: number | null;
    email: string | null;
    name: string | null;
    avatarUrl: string | null;
    createdAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: number | null;
    email: string | null;
    name: string | null;
    avatarUrl: string | null;
    createdAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    name: number;
    avatarUrl: number;
    createdAt: number;
    _all: number;
};
export type UserAvgAggregateInputType = {
    id?: true;
};
export type UserSumAggregateInputType = {
    id?: true;
};
export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    avatarUrl?: true;
    createdAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    avatarUrl?: true;
    createdAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    avatarUrl?: true;
    createdAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: number;
    email: string;
    name: string;
    avatarUrl: string | null;
    createdAt: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.IntFilter<"User"> | number;
    email?: Prisma.StringFilter<"User"> | string;
    name?: Prisma.StringFilter<"User"> | string;
    avatarUrl?: Prisma.StringNullableFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    memberships?: Prisma.MemberListRelationFilter;
    assignments?: Prisma.TaskAssignmentListRelationFilter;
    comments?: Prisma.CommentListRelationFilter;
    ownedProjects?: Prisma.ProjectListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    memberships?: Prisma.MemberOrderByRelationAggregateInput;
    assignments?: Prisma.TaskAssignmentOrderByRelationAggregateInput;
    comments?: Prisma.CommentOrderByRelationAggregateInput;
    ownedProjects?: Prisma.ProjectOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    name?: Prisma.StringFilter<"User"> | string;
    avatarUrl?: Prisma.StringNullableFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    memberships?: Prisma.MemberListRelationFilter;
    assignments?: Prisma.TaskAssignmentListRelationFilter;
    comments?: Prisma.CommentListRelationFilter;
    ownedProjects?: Prisma.ProjectListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _avg?: Prisma.UserAvgOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
    _sum?: Prisma.UserSumOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"User"> | number;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    name?: Prisma.StringWithAggregatesFilter<"User"> | string;
    avatarUrl?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    email: string;
    name: string;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    memberships?: Prisma.MemberCreateNestedManyWithoutUserInput;
    assignments?: Prisma.TaskAssignmentCreateNestedManyWithoutUserInput;
    comments?: Prisma.CommentCreateNestedManyWithoutAuthorInput;
    ownedProjects?: Prisma.ProjectCreateNestedManyWithoutOwnerInput;
};
export type UserUncheckedCreateInput = {
    id?: number;
    email: string;
    name: string;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    memberships?: Prisma.MemberUncheckedCreateNestedManyWithoutUserInput;
    assignments?: Prisma.TaskAssignmentUncheckedCreateNestedManyWithoutUserInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutAuthorInput;
    ownedProjects?: Prisma.ProjectUncheckedCreateNestedManyWithoutOwnerInput;
};
export type UserUpdateInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MemberUpdateManyWithoutUserNestedInput;
    assignments?: Prisma.TaskAssignmentUpdateManyWithoutUserNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutAuthorNestedInput;
    ownedProjects?: Prisma.ProjectUpdateManyWithoutOwnerNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MemberUncheckedUpdateManyWithoutUserNestedInput;
    assignments?: Prisma.TaskAssignmentUncheckedUpdateManyWithoutUserNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutAuthorNestedInput;
    ownedProjects?: Prisma.ProjectUncheckedUpdateManyWithoutOwnerNestedInput;
};
export type UserCreateManyInput = {
    id?: number;
    email: string;
    name: string;
    avatarUrl?: string | null;
    createdAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UserAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UserSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMembershipsInput, Prisma.UserUncheckedCreateWithoutMembershipsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMembershipsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMembershipsInput, Prisma.UserUncheckedCreateWithoutMembershipsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMembershipsInput;
    upsert?: Prisma.UserUpsertWithoutMembershipsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutMembershipsInput, Prisma.UserUpdateWithoutMembershipsInput>, Prisma.UserUncheckedUpdateWithoutMembershipsInput>;
};
export type UserCreateNestedOneWithoutOwnedProjectsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOwnedProjectsInput, Prisma.UserUncheckedCreateWithoutOwnedProjectsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOwnedProjectsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutOwnedProjectsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOwnedProjectsInput, Prisma.UserUncheckedCreateWithoutOwnedProjectsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOwnedProjectsInput;
    upsert?: Prisma.UserUpsertWithoutOwnedProjectsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutOwnedProjectsInput, Prisma.UserUpdateWithoutOwnedProjectsInput>, Prisma.UserUncheckedUpdateWithoutOwnedProjectsInput>;
};
export type UserCreateNestedOneWithoutAssignmentsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAssignmentsInput, Prisma.UserUncheckedCreateWithoutAssignmentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAssignmentsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutAssignmentsInput, Prisma.UserUncheckedCreateWithoutAssignmentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutAssignmentsInput;
    upsert?: Prisma.UserUpsertWithoutAssignmentsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutAssignmentsInput, Prisma.UserUpdateWithoutAssignmentsInput>, Prisma.UserUncheckedUpdateWithoutAssignmentsInput>;
};
export type UserCreateNestedOneWithoutCommentsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCommentsInput, Prisma.UserUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCommentsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCommentsInput, Prisma.UserUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCommentsInput;
    upsert?: Prisma.UserUpsertWithoutCommentsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCommentsInput, Prisma.UserUpdateWithoutCommentsInput>, Prisma.UserUncheckedUpdateWithoutCommentsInput>;
};
export type UserCreateWithoutMembershipsInput = {
    email: string;
    name: string;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    assignments?: Prisma.TaskAssignmentCreateNestedManyWithoutUserInput;
    comments?: Prisma.CommentCreateNestedManyWithoutAuthorInput;
    ownedProjects?: Prisma.ProjectCreateNestedManyWithoutOwnerInput;
};
export type UserUncheckedCreateWithoutMembershipsInput = {
    id?: number;
    email: string;
    name: string;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    assignments?: Prisma.TaskAssignmentUncheckedCreateNestedManyWithoutUserInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutAuthorInput;
    ownedProjects?: Prisma.ProjectUncheckedCreateNestedManyWithoutOwnerInput;
};
export type UserCreateOrConnectWithoutMembershipsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutMembershipsInput, Prisma.UserUncheckedCreateWithoutMembershipsInput>;
};
export type UserUpsertWithoutMembershipsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutMembershipsInput, Prisma.UserUncheckedUpdateWithoutMembershipsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutMembershipsInput, Prisma.UserUncheckedCreateWithoutMembershipsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutMembershipsInput, Prisma.UserUncheckedUpdateWithoutMembershipsInput>;
};
export type UserUpdateWithoutMembershipsInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignments?: Prisma.TaskAssignmentUpdateManyWithoutUserNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutAuthorNestedInput;
    ownedProjects?: Prisma.ProjectUpdateManyWithoutOwnerNestedInput;
};
export type UserUncheckedUpdateWithoutMembershipsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assignments?: Prisma.TaskAssignmentUncheckedUpdateManyWithoutUserNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutAuthorNestedInput;
    ownedProjects?: Prisma.ProjectUncheckedUpdateManyWithoutOwnerNestedInput;
};
export type UserCreateWithoutOwnedProjectsInput = {
    email: string;
    name: string;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    memberships?: Prisma.MemberCreateNestedManyWithoutUserInput;
    assignments?: Prisma.TaskAssignmentCreateNestedManyWithoutUserInput;
    comments?: Prisma.CommentCreateNestedManyWithoutAuthorInput;
};
export type UserUncheckedCreateWithoutOwnedProjectsInput = {
    id?: number;
    email: string;
    name: string;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    memberships?: Prisma.MemberUncheckedCreateNestedManyWithoutUserInput;
    assignments?: Prisma.TaskAssignmentUncheckedCreateNestedManyWithoutUserInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutAuthorInput;
};
export type UserCreateOrConnectWithoutOwnedProjectsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutOwnedProjectsInput, Prisma.UserUncheckedCreateWithoutOwnedProjectsInput>;
};
export type UserUpsertWithoutOwnedProjectsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutOwnedProjectsInput, Prisma.UserUncheckedUpdateWithoutOwnedProjectsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutOwnedProjectsInput, Prisma.UserUncheckedCreateWithoutOwnedProjectsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutOwnedProjectsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutOwnedProjectsInput, Prisma.UserUncheckedUpdateWithoutOwnedProjectsInput>;
};
export type UserUpdateWithoutOwnedProjectsInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MemberUpdateManyWithoutUserNestedInput;
    assignments?: Prisma.TaskAssignmentUpdateManyWithoutUserNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutAuthorNestedInput;
};
export type UserUncheckedUpdateWithoutOwnedProjectsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MemberUncheckedUpdateManyWithoutUserNestedInput;
    assignments?: Prisma.TaskAssignmentUncheckedUpdateManyWithoutUserNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutAuthorNestedInput;
};
export type UserCreateWithoutAssignmentsInput = {
    email: string;
    name: string;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    memberships?: Prisma.MemberCreateNestedManyWithoutUserInput;
    comments?: Prisma.CommentCreateNestedManyWithoutAuthorInput;
    ownedProjects?: Prisma.ProjectCreateNestedManyWithoutOwnerInput;
};
export type UserUncheckedCreateWithoutAssignmentsInput = {
    id?: number;
    email: string;
    name: string;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    memberships?: Prisma.MemberUncheckedCreateNestedManyWithoutUserInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutAuthorInput;
    ownedProjects?: Prisma.ProjectUncheckedCreateNestedManyWithoutOwnerInput;
};
export type UserCreateOrConnectWithoutAssignmentsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutAssignmentsInput, Prisma.UserUncheckedCreateWithoutAssignmentsInput>;
};
export type UserUpsertWithoutAssignmentsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutAssignmentsInput, Prisma.UserUncheckedUpdateWithoutAssignmentsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutAssignmentsInput, Prisma.UserUncheckedCreateWithoutAssignmentsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutAssignmentsInput, Prisma.UserUncheckedUpdateWithoutAssignmentsInput>;
};
export type UserUpdateWithoutAssignmentsInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MemberUpdateManyWithoutUserNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutAuthorNestedInput;
    ownedProjects?: Prisma.ProjectUpdateManyWithoutOwnerNestedInput;
};
export type UserUncheckedUpdateWithoutAssignmentsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MemberUncheckedUpdateManyWithoutUserNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutAuthorNestedInput;
    ownedProjects?: Prisma.ProjectUncheckedUpdateManyWithoutOwnerNestedInput;
};
export type UserCreateWithoutCommentsInput = {
    email: string;
    name: string;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    memberships?: Prisma.MemberCreateNestedManyWithoutUserInput;
    assignments?: Prisma.TaskAssignmentCreateNestedManyWithoutUserInput;
    ownedProjects?: Prisma.ProjectCreateNestedManyWithoutOwnerInput;
};
export type UserUncheckedCreateWithoutCommentsInput = {
    id?: number;
    email: string;
    name: string;
    avatarUrl?: string | null;
    createdAt?: Date | string;
    memberships?: Prisma.MemberUncheckedCreateNestedManyWithoutUserInput;
    assignments?: Prisma.TaskAssignmentUncheckedCreateNestedManyWithoutUserInput;
    ownedProjects?: Prisma.ProjectUncheckedCreateNestedManyWithoutOwnerInput;
};
export type UserCreateOrConnectWithoutCommentsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCommentsInput, Prisma.UserUncheckedCreateWithoutCommentsInput>;
};
export type UserUpsertWithoutCommentsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCommentsInput, Prisma.UserUncheckedUpdateWithoutCommentsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCommentsInput, Prisma.UserUncheckedCreateWithoutCommentsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCommentsInput, Prisma.UserUncheckedUpdateWithoutCommentsInput>;
};
export type UserUpdateWithoutCommentsInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MemberUpdateManyWithoutUserNestedInput;
    assignments?: Prisma.TaskAssignmentUpdateManyWithoutUserNestedInput;
    ownedProjects?: Prisma.ProjectUpdateManyWithoutOwnerNestedInput;
};
export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    memberships?: Prisma.MemberUncheckedUpdateManyWithoutUserNestedInput;
    assignments?: Prisma.TaskAssignmentUncheckedUpdateManyWithoutUserNestedInput;
    ownedProjects?: Prisma.ProjectUncheckedUpdateManyWithoutOwnerNestedInput;
};
export type UserCountOutputType = {
    memberships: number;
    assignments: number;
    comments: number;
    ownedProjects: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs;
    assignments?: boolean | UserCountOutputTypeCountAssignmentsArgs;
    comments?: boolean | UserCountOutputTypeCountCommentsArgs;
    ownedProjects?: boolean | UserCountOutputTypeCountOwnedProjectsArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MemberWhereInput;
};
export type UserCountOutputTypeCountAssignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskAssignmentWhereInput;
};
export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommentWhereInput;
};
export type UserCountOutputTypeCountOwnedProjectsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProjectWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
    avatarUrl?: boolean;
    createdAt?: boolean;
    memberships?: boolean | Prisma.User$membershipsArgs<ExtArgs>;
    assignments?: boolean | Prisma.User$assignmentsArgs<ExtArgs>;
    comments?: boolean | Prisma.User$commentsArgs<ExtArgs>;
    ownedProjects?: boolean | Prisma.User$ownedProjectsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
    avatarUrl?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
    avatarUrl?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    name?: boolean;
    avatarUrl?: boolean;
    createdAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "name" | "avatarUrl" | "createdAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    memberships?: boolean | Prisma.User$membershipsArgs<ExtArgs>;
    assignments?: boolean | Prisma.User$assignmentsArgs<ExtArgs>;
    comments?: boolean | Prisma.User$commentsArgs<ExtArgs>;
    ownedProjects?: boolean | Prisma.User$ownedProjectsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        memberships: Prisma.$MemberPayload<ExtArgs>[];
        assignments: Prisma.$TaskAssignmentPayload<ExtArgs>[];
        comments: Prisma.$CommentPayload<ExtArgs>[];
        ownedProjects: Prisma.$ProjectPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        email: string;
        name: string;
        avatarUrl: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    memberships<T extends Prisma.User$membershipsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    assignments<T extends Prisma.User$assignmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    comments<T extends Prisma.User$commentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    ownedProjects<T extends Prisma.User$ownedProjectsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$ownedProjectsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'Int'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly avatarUrl: Prisma.FieldRef<"User", 'String'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$membershipsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$assignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskAssignmentSelect<ExtArgs> | null;
    omit?: Prisma.TaskAssignmentOmit<ExtArgs> | null;
    include?: Prisma.TaskAssignmentInclude<ExtArgs> | null;
    where?: Prisma.TaskAssignmentWhereInput;
    orderBy?: Prisma.TaskAssignmentOrderByWithRelationInput | Prisma.TaskAssignmentOrderByWithRelationInput[];
    cursor?: Prisma.TaskAssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskAssignmentScalarFieldEnum | Prisma.TaskAssignmentScalarFieldEnum[];
};
export type User$commentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CommentSelect<ExtArgs> | null;
    omit?: Prisma.CommentOmit<ExtArgs> | null;
    include?: Prisma.CommentInclude<ExtArgs> | null;
    where?: Prisma.CommentWhereInput;
    orderBy?: Prisma.CommentOrderByWithRelationInput | Prisma.CommentOrderByWithRelationInput[];
    cursor?: Prisma.CommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommentScalarFieldEnum | Prisma.CommentScalarFieldEnum[];
};
export type User$ownedProjectsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProjectSelect<ExtArgs> | null;
    omit?: Prisma.ProjectOmit<ExtArgs> | null;
    include?: Prisma.ProjectInclude<ExtArgs> | null;
    where?: Prisma.ProjectWhereInput;
    orderBy?: Prisma.ProjectOrderByWithRelationInput | Prisma.ProjectOrderByWithRelationInput[];
    cursor?: Prisma.ProjectWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProjectScalarFieldEnum | Prisma.ProjectScalarFieldEnum[];
};
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
export {};
