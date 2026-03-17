import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type TaskModel = runtime.Types.Result.DefaultSelection<Prisma.$TaskPayload>;
export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null;
    _avg: TaskAvgAggregateOutputType | null;
    _sum: TaskSumAggregateOutputType | null;
    _min: TaskMinAggregateOutputType | null;
    _max: TaskMaxAggregateOutputType | null;
};
export type TaskAvgAggregateOutputType = {
    id: number | null;
    projectId: number | null;
    parentId: number | null;
};
export type TaskSumAggregateOutputType = {
    id: number | null;
    projectId: number | null;
    parentId: number | null;
};
export type TaskMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    description: string | null;
    status: $Enums.TaskStatus | null;
    priority: $Enums.Priority | null;
    dueDate: Date | null;
    createdAt: Date | null;
    projectId: number | null;
    parentId: number | null;
};
export type TaskMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    description: string | null;
    status: $Enums.TaskStatus | null;
    priority: $Enums.Priority | null;
    dueDate: Date | null;
    createdAt: Date | null;
    projectId: number | null;
    parentId: number | null;
};
export type TaskCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    status: number;
    priority: number;
    dueDate: number;
    createdAt: number;
    projectId: number;
    parentId: number;
    _all: number;
};
export type TaskAvgAggregateInputType = {
    id?: true;
    projectId?: true;
    parentId?: true;
};
export type TaskSumAggregateInputType = {
    id?: true;
    projectId?: true;
    parentId?: true;
};
export type TaskMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    status?: true;
    priority?: true;
    dueDate?: true;
    createdAt?: true;
    projectId?: true;
    parentId?: true;
};
export type TaskMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    status?: true;
    priority?: true;
    dueDate?: true;
    createdAt?: true;
    projectId?: true;
    parentId?: true;
};
export type TaskCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    status?: true;
    priority?: true;
    dueDate?: true;
    createdAt?: true;
    projectId?: true;
    parentId?: true;
    _all?: true;
};
export type TaskAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TaskCountAggregateInputType;
    _avg?: TaskAvgAggregateInputType;
    _sum?: TaskSumAggregateInputType;
    _min?: TaskMinAggregateInputType;
    _max?: TaskMaxAggregateInputType;
};
export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
    [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTask[P]> : Prisma.GetScalarType<T[P], AggregateTask[P]>;
};
export type TaskGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithAggregationInput | Prisma.TaskOrderByWithAggregationInput[];
    by: Prisma.TaskScalarFieldEnum[] | Prisma.TaskScalarFieldEnum;
    having?: Prisma.TaskScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TaskCountAggregateInputType | true;
    _avg?: TaskAvgAggregateInputType;
    _sum?: TaskSumAggregateInputType;
    _min?: TaskMinAggregateInputType;
    _max?: TaskMaxAggregateInputType;
};
export type TaskGroupByOutputType = {
    id: number;
    title: string;
    description: string | null;
    status: $Enums.TaskStatus;
    priority: $Enums.Priority;
    dueDate: Date | null;
    createdAt: Date;
    projectId: number;
    parentId: number | null;
    _count: TaskCountAggregateOutputType | null;
    _avg: TaskAvgAggregateOutputType | null;
    _sum: TaskSumAggregateOutputType | null;
    _min: TaskMinAggregateOutputType | null;
    _max: TaskMaxAggregateOutputType | null;
};
type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TaskGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TaskGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TaskGroupByOutputType[P]>;
}>>;
export type TaskWhereInput = {
    AND?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    OR?: Prisma.TaskWhereInput[];
    NOT?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    id?: Prisma.IntFilter<"Task"> | number;
    title?: Prisma.StringFilter<"Task"> | string;
    description?: Prisma.StringNullableFilter<"Task"> | string | null;
    status?: Prisma.EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus;
    priority?: Prisma.EnumPriorityFilter<"Task"> | $Enums.Priority;
    dueDate?: Prisma.DateTimeNullableFilter<"Task"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    projectId?: Prisma.IntFilter<"Task"> | number;
    parentId?: Prisma.IntNullableFilter<"Task"> | number | null;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    parent?: Prisma.XOR<Prisma.TaskNullableScalarRelationFilter, Prisma.TaskWhereInput> | null;
    subTasks?: Prisma.TaskListRelationFilter;
    assignments?: Prisma.TaskAssignmentListRelationFilter;
    comments?: Prisma.CommentListRelationFilter;
    tags?: Prisma.TaskTagListRelationFilter;
};
export type TaskOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    parentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    project?: Prisma.ProjectOrderByWithRelationInput;
    parent?: Prisma.TaskOrderByWithRelationInput;
    subTasks?: Prisma.TaskOrderByRelationAggregateInput;
    assignments?: Prisma.TaskAssignmentOrderByRelationAggregateInput;
    comments?: Prisma.CommentOrderByRelationAggregateInput;
    tags?: Prisma.TaskTagOrderByRelationAggregateInput;
};
export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    OR?: Prisma.TaskWhereInput[];
    NOT?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    title?: Prisma.StringFilter<"Task"> | string;
    description?: Prisma.StringNullableFilter<"Task"> | string | null;
    status?: Prisma.EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus;
    priority?: Prisma.EnumPriorityFilter<"Task"> | $Enums.Priority;
    dueDate?: Prisma.DateTimeNullableFilter<"Task"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    projectId?: Prisma.IntFilter<"Task"> | number;
    parentId?: Prisma.IntNullableFilter<"Task"> | number | null;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    parent?: Prisma.XOR<Prisma.TaskNullableScalarRelationFilter, Prisma.TaskWhereInput> | null;
    subTasks?: Prisma.TaskListRelationFilter;
    assignments?: Prisma.TaskAssignmentListRelationFilter;
    comments?: Prisma.CommentListRelationFilter;
    tags?: Prisma.TaskTagListRelationFilter;
}, "id">;
export type TaskOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    parentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.TaskCountOrderByAggregateInput;
    _avg?: Prisma.TaskAvgOrderByAggregateInput;
    _max?: Prisma.TaskMaxOrderByAggregateInput;
    _min?: Prisma.TaskMinOrderByAggregateInput;
    _sum?: Prisma.TaskSumOrderByAggregateInput;
};
export type TaskScalarWhereWithAggregatesInput = {
    AND?: Prisma.TaskScalarWhereWithAggregatesInput | Prisma.TaskScalarWhereWithAggregatesInput[];
    OR?: Prisma.TaskScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TaskScalarWhereWithAggregatesInput | Prisma.TaskScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Task"> | number;
    title?: Prisma.StringWithAggregatesFilter<"Task"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Task"> | string | null;
    status?: Prisma.EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus;
    priority?: Prisma.EnumPriorityWithAggregatesFilter<"Task"> | $Enums.Priority;
    dueDate?: Prisma.DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Task"> | Date | string;
    projectId?: Prisma.IntWithAggregatesFilter<"Task"> | number;
    parentId?: Prisma.IntNullableWithAggregatesFilter<"Task"> | number | null;
};
export type TaskCreateInput = {
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    priority?: $Enums.Priority;
    dueDate?: Date | string | null;
    createdAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutTasksInput;
    parent?: Prisma.TaskCreateNestedOneWithoutSubTasksInput;
    subTasks?: Prisma.TaskCreateNestedManyWithoutParentInput;
    assignments?: Prisma.TaskAssignmentCreateNestedManyWithoutTaskInput;
    comments?: Prisma.CommentCreateNestedManyWithoutTaskInput;
    tags?: Prisma.TaskTagCreateNestedManyWithoutTaskInput;
};
export type TaskUncheckedCreateInput = {
    id?: number;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    priority?: $Enums.Priority;
    dueDate?: Date | string | null;
    createdAt?: Date | string;
    projectId: number;
    parentId?: number | null;
    subTasks?: Prisma.TaskUncheckedCreateNestedManyWithoutParentInput;
    assignments?: Prisma.TaskAssignmentUncheckedCreateNestedManyWithoutTaskInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutTaskInput;
    tags?: Prisma.TaskTagUncheckedCreateNestedManyWithoutTaskInput;
};
export type TaskUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutTasksNestedInput;
    parent?: Prisma.TaskUpdateOneWithoutSubTasksNestedInput;
    subTasks?: Prisma.TaskUpdateManyWithoutParentNestedInput;
    assignments?: Prisma.TaskAssignmentUpdateManyWithoutTaskNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutTaskNestedInput;
    tags?: Prisma.TaskTagUpdateManyWithoutTaskNestedInput;
};
export type TaskUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    projectId?: Prisma.IntFieldUpdateOperationsInput | number;
    parentId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    subTasks?: Prisma.TaskUncheckedUpdateManyWithoutParentNestedInput;
    assignments?: Prisma.TaskAssignmentUncheckedUpdateManyWithoutTaskNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutTaskNestedInput;
    tags?: Prisma.TaskTagUncheckedUpdateManyWithoutTaskNestedInput;
};
export type TaskCreateManyInput = {
    id?: number;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    priority?: $Enums.Priority;
    dueDate?: Date | string | null;
    createdAt?: Date | string;
    projectId: number;
    parentId?: number | null;
};
export type TaskUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    projectId?: Prisma.IntFieldUpdateOperationsInput | number;
    parentId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type TaskListRelationFilter = {
    every?: Prisma.TaskWhereInput;
    some?: Prisma.TaskWhereInput;
    none?: Prisma.TaskWhereInput;
};
export type TaskOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TaskNullableScalarRelationFilter = {
    is?: Prisma.TaskWhereInput | null;
    isNot?: Prisma.TaskWhereInput | null;
};
export type TaskCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
};
export type TaskAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
};
export type TaskMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
};
export type TaskMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    dueDate?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
};
export type TaskSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
};
export type TaskScalarRelationFilter = {
    is?: Prisma.TaskWhereInput;
    isNot?: Prisma.TaskWhereInput;
};
export type TaskCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutProjectInput, Prisma.TaskUncheckedCreateWithoutProjectInput> | Prisma.TaskCreateWithoutProjectInput[] | Prisma.TaskUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutProjectInput | Prisma.TaskCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.TaskCreateManyProjectInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUncheckedCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutProjectInput, Prisma.TaskUncheckedCreateWithoutProjectInput> | Prisma.TaskCreateWithoutProjectInput[] | Prisma.TaskUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutProjectInput | Prisma.TaskCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.TaskCreateManyProjectInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutProjectInput, Prisma.TaskUncheckedCreateWithoutProjectInput> | Prisma.TaskCreateWithoutProjectInput[] | Prisma.TaskUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutProjectInput | Prisma.TaskCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutProjectInput | Prisma.TaskUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.TaskCreateManyProjectInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutProjectInput | Prisma.TaskUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutProjectInput | Prisma.TaskUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type TaskUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutProjectInput, Prisma.TaskUncheckedCreateWithoutProjectInput> | Prisma.TaskCreateWithoutProjectInput[] | Prisma.TaskUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutProjectInput | Prisma.TaskCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutProjectInput | Prisma.TaskUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.TaskCreateManyProjectInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutProjectInput | Prisma.TaskUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutProjectInput | Prisma.TaskUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type TaskCreateNestedOneWithoutSubTasksInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutSubTasksInput, Prisma.TaskUncheckedCreateWithoutSubTasksInput>;
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutSubTasksInput;
    connect?: Prisma.TaskWhereUniqueInput;
};
export type TaskCreateNestedManyWithoutParentInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutParentInput, Prisma.TaskUncheckedCreateWithoutParentInput> | Prisma.TaskCreateWithoutParentInput[] | Prisma.TaskUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutParentInput | Prisma.TaskCreateOrConnectWithoutParentInput[];
    createMany?: Prisma.TaskCreateManyParentInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUncheckedCreateNestedManyWithoutParentInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutParentInput, Prisma.TaskUncheckedCreateWithoutParentInput> | Prisma.TaskCreateWithoutParentInput[] | Prisma.TaskUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutParentInput | Prisma.TaskCreateOrConnectWithoutParentInput[];
    createMany?: Prisma.TaskCreateManyParentInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus;
};
export type EnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type TaskUpdateOneWithoutSubTasksNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutSubTasksInput, Prisma.TaskUncheckedCreateWithoutSubTasksInput>;
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutSubTasksInput;
    upsert?: Prisma.TaskUpsertWithoutSubTasksInput;
    disconnect?: Prisma.TaskWhereInput | boolean;
    delete?: Prisma.TaskWhereInput | boolean;
    connect?: Prisma.TaskWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TaskUpdateToOneWithWhereWithoutSubTasksInput, Prisma.TaskUpdateWithoutSubTasksInput>, Prisma.TaskUncheckedUpdateWithoutSubTasksInput>;
};
export type TaskUpdateManyWithoutParentNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutParentInput, Prisma.TaskUncheckedCreateWithoutParentInput> | Prisma.TaskCreateWithoutParentInput[] | Prisma.TaskUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutParentInput | Prisma.TaskCreateOrConnectWithoutParentInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutParentInput | Prisma.TaskUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: Prisma.TaskCreateManyParentInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutParentInput | Prisma.TaskUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutParentInput | Prisma.TaskUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type TaskUncheckedUpdateManyWithoutParentNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutParentInput, Prisma.TaskUncheckedCreateWithoutParentInput> | Prisma.TaskCreateWithoutParentInput[] | Prisma.TaskUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutParentInput | Prisma.TaskCreateOrConnectWithoutParentInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutParentInput | Prisma.TaskUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: Prisma.TaskCreateManyParentInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutParentInput | Prisma.TaskUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutParentInput | Prisma.TaskUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type TaskCreateNestedOneWithoutAssignmentsInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutAssignmentsInput, Prisma.TaskUncheckedCreateWithoutAssignmentsInput>;
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutAssignmentsInput;
    connect?: Prisma.TaskWhereUniqueInput;
};
export type TaskUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutAssignmentsInput, Prisma.TaskUncheckedCreateWithoutAssignmentsInput>;
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutAssignmentsInput;
    upsert?: Prisma.TaskUpsertWithoutAssignmentsInput;
    connect?: Prisma.TaskWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TaskUpdateToOneWithWhereWithoutAssignmentsInput, Prisma.TaskUpdateWithoutAssignmentsInput>, Prisma.TaskUncheckedUpdateWithoutAssignmentsInput>;
};
export type TaskCreateNestedOneWithoutCommentsInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutCommentsInput, Prisma.TaskUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutCommentsInput;
    connect?: Prisma.TaskWhereUniqueInput;
};
export type TaskUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutCommentsInput, Prisma.TaskUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutCommentsInput;
    upsert?: Prisma.TaskUpsertWithoutCommentsInput;
    connect?: Prisma.TaskWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TaskUpdateToOneWithWhereWithoutCommentsInput, Prisma.TaskUpdateWithoutCommentsInput>, Prisma.TaskUncheckedUpdateWithoutCommentsInput>;
};
export type TaskCreateNestedOneWithoutTagsInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutTagsInput, Prisma.TaskUncheckedCreateWithoutTagsInput>;
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutTagsInput;
    connect?: Prisma.TaskWhereUniqueInput;
};
export type TaskUpdateOneRequiredWithoutTagsNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutTagsInput, Prisma.TaskUncheckedCreateWithoutTagsInput>;
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutTagsInput;
    upsert?: Prisma.TaskUpsertWithoutTagsInput;
    connect?: Prisma.TaskWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TaskUpdateToOneWithWhereWithoutTagsInput, Prisma.TaskUpdateWithoutTagsInput>, Prisma.TaskUncheckedUpdateWithoutTagsInput>;
};
export type TaskCreateWithoutProjectInput = {
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    priority?: $Enums.Priority;
    dueDate?: Date | string | null;
    createdAt?: Date | string;
    parent?: Prisma.TaskCreateNestedOneWithoutSubTasksInput;
    subTasks?: Prisma.TaskCreateNestedManyWithoutParentInput;
    assignments?: Prisma.TaskAssignmentCreateNestedManyWithoutTaskInput;
    comments?: Prisma.CommentCreateNestedManyWithoutTaskInput;
    tags?: Prisma.TaskTagCreateNestedManyWithoutTaskInput;
};
export type TaskUncheckedCreateWithoutProjectInput = {
    id?: number;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    priority?: $Enums.Priority;
    dueDate?: Date | string | null;
    createdAt?: Date | string;
    parentId?: number | null;
    subTasks?: Prisma.TaskUncheckedCreateNestedManyWithoutParentInput;
    assignments?: Prisma.TaskAssignmentUncheckedCreateNestedManyWithoutTaskInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutTaskInput;
    tags?: Prisma.TaskTagUncheckedCreateNestedManyWithoutTaskInput;
};
export type TaskCreateOrConnectWithoutProjectInput = {
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateWithoutProjectInput, Prisma.TaskUncheckedCreateWithoutProjectInput>;
};
export type TaskCreateManyProjectInputEnvelope = {
    data: Prisma.TaskCreateManyProjectInput | Prisma.TaskCreateManyProjectInput[];
    skipDuplicates?: boolean;
};
export type TaskUpsertWithWhereUniqueWithoutProjectInput = {
    where: Prisma.TaskWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaskUpdateWithoutProjectInput, Prisma.TaskUncheckedUpdateWithoutProjectInput>;
    create: Prisma.XOR<Prisma.TaskCreateWithoutProjectInput, Prisma.TaskUncheckedCreateWithoutProjectInput>;
};
export type TaskUpdateWithWhereUniqueWithoutProjectInput = {
    where: Prisma.TaskWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaskUpdateWithoutProjectInput, Prisma.TaskUncheckedUpdateWithoutProjectInput>;
};
export type TaskUpdateManyWithWhereWithoutProjectInput = {
    where: Prisma.TaskScalarWhereInput;
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyWithoutProjectInput>;
};
export type TaskScalarWhereInput = {
    AND?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
    OR?: Prisma.TaskScalarWhereInput[];
    NOT?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
    id?: Prisma.IntFilter<"Task"> | number;
    title?: Prisma.StringFilter<"Task"> | string;
    description?: Prisma.StringNullableFilter<"Task"> | string | null;
    status?: Prisma.EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus;
    priority?: Prisma.EnumPriorityFilter<"Task"> | $Enums.Priority;
    dueDate?: Prisma.DateTimeNullableFilter<"Task"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    projectId?: Prisma.IntFilter<"Task"> | number;
    parentId?: Prisma.IntNullableFilter<"Task"> | number | null;
};
export type TaskCreateWithoutSubTasksInput = {
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    priority?: $Enums.Priority;
    dueDate?: Date | string | null;
    createdAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutTasksInput;
    parent?: Prisma.TaskCreateNestedOneWithoutSubTasksInput;
    assignments?: Prisma.TaskAssignmentCreateNestedManyWithoutTaskInput;
    comments?: Prisma.CommentCreateNestedManyWithoutTaskInput;
    tags?: Prisma.TaskTagCreateNestedManyWithoutTaskInput;
};
export type TaskUncheckedCreateWithoutSubTasksInput = {
    id?: number;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    priority?: $Enums.Priority;
    dueDate?: Date | string | null;
    createdAt?: Date | string;
    projectId: number;
    parentId?: number | null;
    assignments?: Prisma.TaskAssignmentUncheckedCreateNestedManyWithoutTaskInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutTaskInput;
    tags?: Prisma.TaskTagUncheckedCreateNestedManyWithoutTaskInput;
};
export type TaskCreateOrConnectWithoutSubTasksInput = {
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateWithoutSubTasksInput, Prisma.TaskUncheckedCreateWithoutSubTasksInput>;
};
export type TaskCreateWithoutParentInput = {
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    priority?: $Enums.Priority;
    dueDate?: Date | string | null;
    createdAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutTasksInput;
    subTasks?: Prisma.TaskCreateNestedManyWithoutParentInput;
    assignments?: Prisma.TaskAssignmentCreateNestedManyWithoutTaskInput;
    comments?: Prisma.CommentCreateNestedManyWithoutTaskInput;
    tags?: Prisma.TaskTagCreateNestedManyWithoutTaskInput;
};
export type TaskUncheckedCreateWithoutParentInput = {
    id?: number;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    priority?: $Enums.Priority;
    dueDate?: Date | string | null;
    createdAt?: Date | string;
    projectId: number;
    subTasks?: Prisma.TaskUncheckedCreateNestedManyWithoutParentInput;
    assignments?: Prisma.TaskAssignmentUncheckedCreateNestedManyWithoutTaskInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutTaskInput;
    tags?: Prisma.TaskTagUncheckedCreateNestedManyWithoutTaskInput;
};
export type TaskCreateOrConnectWithoutParentInput = {
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateWithoutParentInput, Prisma.TaskUncheckedCreateWithoutParentInput>;
};
export type TaskCreateManyParentInputEnvelope = {
    data: Prisma.TaskCreateManyParentInput | Prisma.TaskCreateManyParentInput[];
    skipDuplicates?: boolean;
};
export type TaskUpsertWithoutSubTasksInput = {
    update: Prisma.XOR<Prisma.TaskUpdateWithoutSubTasksInput, Prisma.TaskUncheckedUpdateWithoutSubTasksInput>;
    create: Prisma.XOR<Prisma.TaskCreateWithoutSubTasksInput, Prisma.TaskUncheckedCreateWithoutSubTasksInput>;
    where?: Prisma.TaskWhereInput;
};
export type TaskUpdateToOneWithWhereWithoutSubTasksInput = {
    where?: Prisma.TaskWhereInput;
    data: Prisma.XOR<Prisma.TaskUpdateWithoutSubTasksInput, Prisma.TaskUncheckedUpdateWithoutSubTasksInput>;
};
export type TaskUpdateWithoutSubTasksInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutTasksNestedInput;
    parent?: Prisma.TaskUpdateOneWithoutSubTasksNestedInput;
    assignments?: Prisma.TaskAssignmentUpdateManyWithoutTaskNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutTaskNestedInput;
    tags?: Prisma.TaskTagUpdateManyWithoutTaskNestedInput;
};
export type TaskUncheckedUpdateWithoutSubTasksInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    projectId?: Prisma.IntFieldUpdateOperationsInput | number;
    parentId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    assignments?: Prisma.TaskAssignmentUncheckedUpdateManyWithoutTaskNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutTaskNestedInput;
    tags?: Prisma.TaskTagUncheckedUpdateManyWithoutTaskNestedInput;
};
export type TaskUpsertWithWhereUniqueWithoutParentInput = {
    where: Prisma.TaskWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaskUpdateWithoutParentInput, Prisma.TaskUncheckedUpdateWithoutParentInput>;
    create: Prisma.XOR<Prisma.TaskCreateWithoutParentInput, Prisma.TaskUncheckedCreateWithoutParentInput>;
};
export type TaskUpdateWithWhereUniqueWithoutParentInput = {
    where: Prisma.TaskWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaskUpdateWithoutParentInput, Prisma.TaskUncheckedUpdateWithoutParentInput>;
};
export type TaskUpdateManyWithWhereWithoutParentInput = {
    where: Prisma.TaskScalarWhereInput;
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyWithoutParentInput>;
};
export type TaskCreateWithoutAssignmentsInput = {
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    priority?: $Enums.Priority;
    dueDate?: Date | string | null;
    createdAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutTasksInput;
    parent?: Prisma.TaskCreateNestedOneWithoutSubTasksInput;
    subTasks?: Prisma.TaskCreateNestedManyWithoutParentInput;
    comments?: Prisma.CommentCreateNestedManyWithoutTaskInput;
    tags?: Prisma.TaskTagCreateNestedManyWithoutTaskInput;
};
export type TaskUncheckedCreateWithoutAssignmentsInput = {
    id?: number;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    priority?: $Enums.Priority;
    dueDate?: Date | string | null;
    createdAt?: Date | string;
    projectId: number;
    parentId?: number | null;
    subTasks?: Prisma.TaskUncheckedCreateNestedManyWithoutParentInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutTaskInput;
    tags?: Prisma.TaskTagUncheckedCreateNestedManyWithoutTaskInput;
};
export type TaskCreateOrConnectWithoutAssignmentsInput = {
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateWithoutAssignmentsInput, Prisma.TaskUncheckedCreateWithoutAssignmentsInput>;
};
export type TaskUpsertWithoutAssignmentsInput = {
    update: Prisma.XOR<Prisma.TaskUpdateWithoutAssignmentsInput, Prisma.TaskUncheckedUpdateWithoutAssignmentsInput>;
    create: Prisma.XOR<Prisma.TaskCreateWithoutAssignmentsInput, Prisma.TaskUncheckedCreateWithoutAssignmentsInput>;
    where?: Prisma.TaskWhereInput;
};
export type TaskUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: Prisma.TaskWhereInput;
    data: Prisma.XOR<Prisma.TaskUpdateWithoutAssignmentsInput, Prisma.TaskUncheckedUpdateWithoutAssignmentsInput>;
};
export type TaskUpdateWithoutAssignmentsInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutTasksNestedInput;
    parent?: Prisma.TaskUpdateOneWithoutSubTasksNestedInput;
    subTasks?: Prisma.TaskUpdateManyWithoutParentNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutTaskNestedInput;
    tags?: Prisma.TaskTagUpdateManyWithoutTaskNestedInput;
};
export type TaskUncheckedUpdateWithoutAssignmentsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    projectId?: Prisma.IntFieldUpdateOperationsInput | number;
    parentId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    subTasks?: Prisma.TaskUncheckedUpdateManyWithoutParentNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutTaskNestedInput;
    tags?: Prisma.TaskTagUncheckedUpdateManyWithoutTaskNestedInput;
};
export type TaskCreateWithoutCommentsInput = {
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    priority?: $Enums.Priority;
    dueDate?: Date | string | null;
    createdAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutTasksInput;
    parent?: Prisma.TaskCreateNestedOneWithoutSubTasksInput;
    subTasks?: Prisma.TaskCreateNestedManyWithoutParentInput;
    assignments?: Prisma.TaskAssignmentCreateNestedManyWithoutTaskInput;
    tags?: Prisma.TaskTagCreateNestedManyWithoutTaskInput;
};
export type TaskUncheckedCreateWithoutCommentsInput = {
    id?: number;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    priority?: $Enums.Priority;
    dueDate?: Date | string | null;
    createdAt?: Date | string;
    projectId: number;
    parentId?: number | null;
    subTasks?: Prisma.TaskUncheckedCreateNestedManyWithoutParentInput;
    assignments?: Prisma.TaskAssignmentUncheckedCreateNestedManyWithoutTaskInput;
    tags?: Prisma.TaskTagUncheckedCreateNestedManyWithoutTaskInput;
};
export type TaskCreateOrConnectWithoutCommentsInput = {
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateWithoutCommentsInput, Prisma.TaskUncheckedCreateWithoutCommentsInput>;
};
export type TaskUpsertWithoutCommentsInput = {
    update: Prisma.XOR<Prisma.TaskUpdateWithoutCommentsInput, Prisma.TaskUncheckedUpdateWithoutCommentsInput>;
    create: Prisma.XOR<Prisma.TaskCreateWithoutCommentsInput, Prisma.TaskUncheckedCreateWithoutCommentsInput>;
    where?: Prisma.TaskWhereInput;
};
export type TaskUpdateToOneWithWhereWithoutCommentsInput = {
    where?: Prisma.TaskWhereInput;
    data: Prisma.XOR<Prisma.TaskUpdateWithoutCommentsInput, Prisma.TaskUncheckedUpdateWithoutCommentsInput>;
};
export type TaskUpdateWithoutCommentsInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutTasksNestedInput;
    parent?: Prisma.TaskUpdateOneWithoutSubTasksNestedInput;
    subTasks?: Prisma.TaskUpdateManyWithoutParentNestedInput;
    assignments?: Prisma.TaskAssignmentUpdateManyWithoutTaskNestedInput;
    tags?: Prisma.TaskTagUpdateManyWithoutTaskNestedInput;
};
export type TaskUncheckedUpdateWithoutCommentsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    projectId?: Prisma.IntFieldUpdateOperationsInput | number;
    parentId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    subTasks?: Prisma.TaskUncheckedUpdateManyWithoutParentNestedInput;
    assignments?: Prisma.TaskAssignmentUncheckedUpdateManyWithoutTaskNestedInput;
    tags?: Prisma.TaskTagUncheckedUpdateManyWithoutTaskNestedInput;
};
export type TaskCreateWithoutTagsInput = {
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    priority?: $Enums.Priority;
    dueDate?: Date | string | null;
    createdAt?: Date | string;
    project: Prisma.ProjectCreateNestedOneWithoutTasksInput;
    parent?: Prisma.TaskCreateNestedOneWithoutSubTasksInput;
    subTasks?: Prisma.TaskCreateNestedManyWithoutParentInput;
    assignments?: Prisma.TaskAssignmentCreateNestedManyWithoutTaskInput;
    comments?: Prisma.CommentCreateNestedManyWithoutTaskInput;
};
export type TaskUncheckedCreateWithoutTagsInput = {
    id?: number;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    priority?: $Enums.Priority;
    dueDate?: Date | string | null;
    createdAt?: Date | string;
    projectId: number;
    parentId?: number | null;
    subTasks?: Prisma.TaskUncheckedCreateNestedManyWithoutParentInput;
    assignments?: Prisma.TaskAssignmentUncheckedCreateNestedManyWithoutTaskInput;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutTaskInput;
};
export type TaskCreateOrConnectWithoutTagsInput = {
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateWithoutTagsInput, Prisma.TaskUncheckedCreateWithoutTagsInput>;
};
export type TaskUpsertWithoutTagsInput = {
    update: Prisma.XOR<Prisma.TaskUpdateWithoutTagsInput, Prisma.TaskUncheckedUpdateWithoutTagsInput>;
    create: Prisma.XOR<Prisma.TaskCreateWithoutTagsInput, Prisma.TaskUncheckedCreateWithoutTagsInput>;
    where?: Prisma.TaskWhereInput;
};
export type TaskUpdateToOneWithWhereWithoutTagsInput = {
    where?: Prisma.TaskWhereInput;
    data: Prisma.XOR<Prisma.TaskUpdateWithoutTagsInput, Prisma.TaskUncheckedUpdateWithoutTagsInput>;
};
export type TaskUpdateWithoutTagsInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutTasksNestedInput;
    parent?: Prisma.TaskUpdateOneWithoutSubTasksNestedInput;
    subTasks?: Prisma.TaskUpdateManyWithoutParentNestedInput;
    assignments?: Prisma.TaskAssignmentUpdateManyWithoutTaskNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutTaskNestedInput;
};
export type TaskUncheckedUpdateWithoutTagsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    projectId?: Prisma.IntFieldUpdateOperationsInput | number;
    parentId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    subTasks?: Prisma.TaskUncheckedUpdateManyWithoutParentNestedInput;
    assignments?: Prisma.TaskAssignmentUncheckedUpdateManyWithoutTaskNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutTaskNestedInput;
};
export type TaskCreateManyProjectInput = {
    id?: number;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    priority?: $Enums.Priority;
    dueDate?: Date | string | null;
    createdAt?: Date | string;
    parentId?: number | null;
};
export type TaskUpdateWithoutProjectInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    parent?: Prisma.TaskUpdateOneWithoutSubTasksNestedInput;
    subTasks?: Prisma.TaskUpdateManyWithoutParentNestedInput;
    assignments?: Prisma.TaskAssignmentUpdateManyWithoutTaskNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutTaskNestedInput;
    tags?: Prisma.TaskTagUpdateManyWithoutTaskNestedInput;
};
export type TaskUncheckedUpdateWithoutProjectInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    parentId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    subTasks?: Prisma.TaskUncheckedUpdateManyWithoutParentNestedInput;
    assignments?: Prisma.TaskAssignmentUncheckedUpdateManyWithoutTaskNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutTaskNestedInput;
    tags?: Prisma.TaskTagUncheckedUpdateManyWithoutTaskNestedInput;
};
export type TaskUncheckedUpdateManyWithoutProjectInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    parentId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type TaskCreateManyParentInput = {
    id?: number;
    title: string;
    description?: string | null;
    status?: $Enums.TaskStatus;
    priority?: $Enums.Priority;
    dueDate?: Date | string | null;
    createdAt?: Date | string;
    projectId: number;
};
export type TaskUpdateWithoutParentInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    project?: Prisma.ProjectUpdateOneRequiredWithoutTasksNestedInput;
    subTasks?: Prisma.TaskUpdateManyWithoutParentNestedInput;
    assignments?: Prisma.TaskAssignmentUpdateManyWithoutTaskNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutTaskNestedInput;
    tags?: Prisma.TaskTagUpdateManyWithoutTaskNestedInput;
};
export type TaskUncheckedUpdateWithoutParentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    projectId?: Prisma.IntFieldUpdateOperationsInput | number;
    subTasks?: Prisma.TaskUncheckedUpdateManyWithoutParentNestedInput;
    assignments?: Prisma.TaskAssignmentUncheckedUpdateManyWithoutTaskNestedInput;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutTaskNestedInput;
    tags?: Prisma.TaskTagUncheckedUpdateManyWithoutTaskNestedInput;
};
export type TaskUncheckedUpdateManyWithoutParentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    dueDate?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    projectId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TaskCountOutputType = {
    subTasks: number;
    assignments: number;
    comments: number;
    tags: number;
};
export type TaskCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    subTasks?: boolean | TaskCountOutputTypeCountSubTasksArgs;
    assignments?: boolean | TaskCountOutputTypeCountAssignmentsArgs;
    comments?: boolean | TaskCountOutputTypeCountCommentsArgs;
    tags?: boolean | TaskCountOutputTypeCountTagsArgs;
};
export type TaskCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskCountOutputTypeSelect<ExtArgs> | null;
};
export type TaskCountOutputTypeCountSubTasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
};
export type TaskCountOutputTypeCountAssignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskAssignmentWhereInput;
};
export type TaskCountOutputTypeCountCommentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommentWhereInput;
};
export type TaskCountOutputTypeCountTagsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskTagWhereInput;
};
export type TaskSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    priority?: boolean;
    dueDate?: boolean;
    createdAt?: boolean;
    projectId?: boolean;
    parentId?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    parent?: boolean | Prisma.Task$parentArgs<ExtArgs>;
    subTasks?: boolean | Prisma.Task$subTasksArgs<ExtArgs>;
    assignments?: boolean | Prisma.Task$assignmentsArgs<ExtArgs>;
    comments?: boolean | Prisma.Task$commentsArgs<ExtArgs>;
    tags?: boolean | Prisma.Task$tagsArgs<ExtArgs>;
    _count?: boolean | Prisma.TaskCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["task"]>;
export type TaskSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    priority?: boolean;
    dueDate?: boolean;
    createdAt?: boolean;
    projectId?: boolean;
    parentId?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    parent?: boolean | Prisma.Task$parentArgs<ExtArgs>;
}, ExtArgs["result"]["task"]>;
export type TaskSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    priority?: boolean;
    dueDate?: boolean;
    createdAt?: boolean;
    projectId?: boolean;
    parentId?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    parent?: boolean | Prisma.Task$parentArgs<ExtArgs>;
}, ExtArgs["result"]["task"]>;
export type TaskSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    priority?: boolean;
    dueDate?: boolean;
    createdAt?: boolean;
    projectId?: boolean;
    parentId?: boolean;
};
export type TaskOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "status" | "priority" | "dueDate" | "createdAt" | "projectId" | "parentId", ExtArgs["result"]["task"]>;
export type TaskInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    parent?: boolean | Prisma.Task$parentArgs<ExtArgs>;
    subTasks?: boolean | Prisma.Task$subTasksArgs<ExtArgs>;
    assignments?: boolean | Prisma.Task$assignmentsArgs<ExtArgs>;
    comments?: boolean | Prisma.Task$commentsArgs<ExtArgs>;
    tags?: boolean | Prisma.Task$tagsArgs<ExtArgs>;
    _count?: boolean | Prisma.TaskCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TaskIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    parent?: boolean | Prisma.Task$parentArgs<ExtArgs>;
};
export type TaskIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    parent?: boolean | Prisma.Task$parentArgs<ExtArgs>;
};
export type $TaskPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Task";
    objects: {
        project: Prisma.$ProjectPayload<ExtArgs>;
        parent: Prisma.$TaskPayload<ExtArgs> | null;
        subTasks: Prisma.$TaskPayload<ExtArgs>[];
        assignments: Prisma.$TaskAssignmentPayload<ExtArgs>[];
        comments: Prisma.$CommentPayload<ExtArgs>[];
        tags: Prisma.$TaskTagPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        title: string;
        description: string | null;
        status: $Enums.TaskStatus;
        priority: $Enums.Priority;
        dueDate: Date | null;
        createdAt: Date;
        projectId: number;
        parentId: number | null;
    }, ExtArgs["result"]["task"]>;
    composites: {};
};
export type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TaskPayload, S>;
export type TaskCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TaskCountAggregateInputType | true;
};
export interface TaskDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Task'];
        meta: {
            name: 'Task';
        };
    };
    findUnique<T extends TaskFindUniqueArgs>(args: Prisma.SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TaskFindFirstArgs>(args?: Prisma.SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TaskFindManyArgs>(args?: Prisma.SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TaskCreateArgs>(args: Prisma.SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TaskCreateManyArgs>(args?: Prisma.SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TaskDeleteArgs>(args: Prisma.SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TaskUpdateArgs>(args: Prisma.SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TaskDeleteManyArgs>(args?: Prisma.SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TaskUpdateManyArgs>(args: Prisma.SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TaskUpsertArgs>(args: Prisma.SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TaskCountArgs>(args?: Prisma.Subset<T, TaskCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TaskCountAggregateOutputType> : number>;
    aggregate<T extends TaskAggregateArgs>(args: Prisma.Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>;
    groupBy<T extends TaskGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TaskGroupByArgs['orderBy'];
    } : {
        orderBy?: TaskGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TaskFieldRefs;
}
export interface Prisma__TaskClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends Prisma.ProjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProjectDefaultArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    parent<T extends Prisma.Task$parentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Task$parentArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    subTasks<T extends Prisma.Task$subTasksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Task$subTasksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    assignments<T extends Prisma.Task$assignmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Task$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    comments<T extends Prisma.Task$commentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Task$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tags<T extends Prisma.Task$tagsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Task$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TaskFieldRefs {
    readonly id: Prisma.FieldRef<"Task", 'Int'>;
    readonly title: Prisma.FieldRef<"Task", 'String'>;
    readonly description: Prisma.FieldRef<"Task", 'String'>;
    readonly status: Prisma.FieldRef<"Task", 'TaskStatus'>;
    readonly priority: Prisma.FieldRef<"Task", 'Priority'>;
    readonly dueDate: Prisma.FieldRef<"Task", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Task", 'DateTime'>;
    readonly projectId: Prisma.FieldRef<"Task", 'Int'>;
    readonly parentId: Prisma.FieldRef<"Task", 'Int'>;
}
export type TaskFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskScalarFieldEnum | Prisma.TaskScalarFieldEnum[];
};
export type TaskFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskScalarFieldEnum | Prisma.TaskScalarFieldEnum[];
};
export type TaskFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskScalarFieldEnum | Prisma.TaskScalarFieldEnum[];
};
export type TaskCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskCreateInput, Prisma.TaskUncheckedCreateInput>;
};
export type TaskCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TaskCreateManyInput | Prisma.TaskCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TaskCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    data: Prisma.TaskCreateManyInput | Prisma.TaskCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TaskIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TaskUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskUpdateInput, Prisma.TaskUncheckedUpdateInput>;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyInput>;
    where?: Prisma.TaskWhereInput;
    limit?: number;
};
export type TaskUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyInput>;
    where?: Prisma.TaskWhereInput;
    limit?: number;
    include?: Prisma.TaskIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TaskUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateInput, Prisma.TaskUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TaskUpdateInput, Prisma.TaskUncheckedUpdateInput>;
};
export type TaskDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
    limit?: number;
};
export type Task$parentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where?: Prisma.TaskWhereInput;
};
export type Task$subTasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskScalarFieldEnum | Prisma.TaskScalarFieldEnum[];
};
export type Task$assignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Task$commentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Task$tagsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskTagSelect<ExtArgs> | null;
    omit?: Prisma.TaskTagOmit<ExtArgs> | null;
    include?: Prisma.TaskTagInclude<ExtArgs> | null;
    where?: Prisma.TaskTagWhereInput;
    orderBy?: Prisma.TaskTagOrderByWithRelationInput | Prisma.TaskTagOrderByWithRelationInput[];
    cursor?: Prisma.TaskTagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskTagScalarFieldEnum | Prisma.TaskTagScalarFieldEnum[];
};
export type TaskDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
};
export {};
