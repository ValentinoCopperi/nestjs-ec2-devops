import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type TaskTagModel = runtime.Types.Result.DefaultSelection<Prisma.$TaskTagPayload>;
export type AggregateTaskTag = {
    _count: TaskTagCountAggregateOutputType | null;
    _avg: TaskTagAvgAggregateOutputType | null;
    _sum: TaskTagSumAggregateOutputType | null;
    _min: TaskTagMinAggregateOutputType | null;
    _max: TaskTagMaxAggregateOutputType | null;
};
export type TaskTagAvgAggregateOutputType = {
    taskId: number | null;
    tagId: number | null;
};
export type TaskTagSumAggregateOutputType = {
    taskId: number | null;
    tagId: number | null;
};
export type TaskTagMinAggregateOutputType = {
    taskId: number | null;
    tagId: number | null;
};
export type TaskTagMaxAggregateOutputType = {
    taskId: number | null;
    tagId: number | null;
};
export type TaskTagCountAggregateOutputType = {
    taskId: number;
    tagId: number;
    _all: number;
};
export type TaskTagAvgAggregateInputType = {
    taskId?: true;
    tagId?: true;
};
export type TaskTagSumAggregateInputType = {
    taskId?: true;
    tagId?: true;
};
export type TaskTagMinAggregateInputType = {
    taskId?: true;
    tagId?: true;
};
export type TaskTagMaxAggregateInputType = {
    taskId?: true;
    tagId?: true;
};
export type TaskTagCountAggregateInputType = {
    taskId?: true;
    tagId?: true;
    _all?: true;
};
export type TaskTagAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskTagWhereInput;
    orderBy?: Prisma.TaskTagOrderByWithRelationInput | Prisma.TaskTagOrderByWithRelationInput[];
    cursor?: Prisma.TaskTagWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TaskTagCountAggregateInputType;
    _avg?: TaskTagAvgAggregateInputType;
    _sum?: TaskTagSumAggregateInputType;
    _min?: TaskTagMinAggregateInputType;
    _max?: TaskTagMaxAggregateInputType;
};
export type GetTaskTagAggregateType<T extends TaskTagAggregateArgs> = {
    [P in keyof T & keyof AggregateTaskTag]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTaskTag[P]> : Prisma.GetScalarType<T[P], AggregateTaskTag[P]>;
};
export type TaskTagGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskTagWhereInput;
    orderBy?: Prisma.TaskTagOrderByWithAggregationInput | Prisma.TaskTagOrderByWithAggregationInput[];
    by: Prisma.TaskTagScalarFieldEnum[] | Prisma.TaskTagScalarFieldEnum;
    having?: Prisma.TaskTagScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TaskTagCountAggregateInputType | true;
    _avg?: TaskTagAvgAggregateInputType;
    _sum?: TaskTagSumAggregateInputType;
    _min?: TaskTagMinAggregateInputType;
    _max?: TaskTagMaxAggregateInputType;
};
export type TaskTagGroupByOutputType = {
    taskId: number;
    tagId: number;
    _count: TaskTagCountAggregateOutputType | null;
    _avg: TaskTagAvgAggregateOutputType | null;
    _sum: TaskTagSumAggregateOutputType | null;
    _min: TaskTagMinAggregateOutputType | null;
    _max: TaskTagMaxAggregateOutputType | null;
};
type GetTaskTagGroupByPayload<T extends TaskTagGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TaskTagGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TaskTagGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TaskTagGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TaskTagGroupByOutputType[P]>;
}>>;
export type TaskTagWhereInput = {
    AND?: Prisma.TaskTagWhereInput | Prisma.TaskTagWhereInput[];
    OR?: Prisma.TaskTagWhereInput[];
    NOT?: Prisma.TaskTagWhereInput | Prisma.TaskTagWhereInput[];
    taskId?: Prisma.IntFilter<"TaskTag"> | number;
    tagId?: Prisma.IntFilter<"TaskTag"> | number;
    task?: Prisma.XOR<Prisma.TaskScalarRelationFilter, Prisma.TaskWhereInput>;
    tag?: Prisma.XOR<Prisma.TagScalarRelationFilter, Prisma.TagWhereInput>;
};
export type TaskTagOrderByWithRelationInput = {
    taskId?: Prisma.SortOrder;
    tagId?: Prisma.SortOrder;
    task?: Prisma.TaskOrderByWithRelationInput;
    tag?: Prisma.TagOrderByWithRelationInput;
};
export type TaskTagWhereUniqueInput = Prisma.AtLeast<{
    taskId_tagId?: Prisma.TaskTagTaskIdTagIdCompoundUniqueInput;
    AND?: Prisma.TaskTagWhereInput | Prisma.TaskTagWhereInput[];
    OR?: Prisma.TaskTagWhereInput[];
    NOT?: Prisma.TaskTagWhereInput | Prisma.TaskTagWhereInput[];
    taskId?: Prisma.IntFilter<"TaskTag"> | number;
    tagId?: Prisma.IntFilter<"TaskTag"> | number;
    task?: Prisma.XOR<Prisma.TaskScalarRelationFilter, Prisma.TaskWhereInput>;
    tag?: Prisma.XOR<Prisma.TagScalarRelationFilter, Prisma.TagWhereInput>;
}, "taskId_tagId">;
export type TaskTagOrderByWithAggregationInput = {
    taskId?: Prisma.SortOrder;
    tagId?: Prisma.SortOrder;
    _count?: Prisma.TaskTagCountOrderByAggregateInput;
    _avg?: Prisma.TaskTagAvgOrderByAggregateInput;
    _max?: Prisma.TaskTagMaxOrderByAggregateInput;
    _min?: Prisma.TaskTagMinOrderByAggregateInput;
    _sum?: Prisma.TaskTagSumOrderByAggregateInput;
};
export type TaskTagScalarWhereWithAggregatesInput = {
    AND?: Prisma.TaskTagScalarWhereWithAggregatesInput | Prisma.TaskTagScalarWhereWithAggregatesInput[];
    OR?: Prisma.TaskTagScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TaskTagScalarWhereWithAggregatesInput | Prisma.TaskTagScalarWhereWithAggregatesInput[];
    taskId?: Prisma.IntWithAggregatesFilter<"TaskTag"> | number;
    tagId?: Prisma.IntWithAggregatesFilter<"TaskTag"> | number;
};
export type TaskTagCreateInput = {
    task: Prisma.TaskCreateNestedOneWithoutTagsInput;
    tag: Prisma.TagCreateNestedOneWithoutTasksInput;
};
export type TaskTagUncheckedCreateInput = {
    taskId: number;
    tagId: number;
};
export type TaskTagUpdateInput = {
    task?: Prisma.TaskUpdateOneRequiredWithoutTagsNestedInput;
    tag?: Prisma.TagUpdateOneRequiredWithoutTasksNestedInput;
};
export type TaskTagUncheckedUpdateInput = {
    taskId?: Prisma.IntFieldUpdateOperationsInput | number;
    tagId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TaskTagCreateManyInput = {
    taskId: number;
    tagId: number;
};
export type TaskTagUpdateManyMutationInput = {};
export type TaskTagUncheckedUpdateManyInput = {
    taskId?: Prisma.IntFieldUpdateOperationsInput | number;
    tagId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TaskTagListRelationFilter = {
    every?: Prisma.TaskTagWhereInput;
    some?: Prisma.TaskTagWhereInput;
    none?: Prisma.TaskTagWhereInput;
};
export type TaskTagOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TaskTagTaskIdTagIdCompoundUniqueInput = {
    taskId: number;
    tagId: number;
};
export type TaskTagCountOrderByAggregateInput = {
    taskId?: Prisma.SortOrder;
    tagId?: Prisma.SortOrder;
};
export type TaskTagAvgOrderByAggregateInput = {
    taskId?: Prisma.SortOrder;
    tagId?: Prisma.SortOrder;
};
export type TaskTagMaxOrderByAggregateInput = {
    taskId?: Prisma.SortOrder;
    tagId?: Prisma.SortOrder;
};
export type TaskTagMinOrderByAggregateInput = {
    taskId?: Prisma.SortOrder;
    tagId?: Prisma.SortOrder;
};
export type TaskTagSumOrderByAggregateInput = {
    taskId?: Prisma.SortOrder;
    tagId?: Prisma.SortOrder;
};
export type TaskTagCreateNestedManyWithoutTaskInput = {
    create?: Prisma.XOR<Prisma.TaskTagCreateWithoutTaskInput, Prisma.TaskTagUncheckedCreateWithoutTaskInput> | Prisma.TaskTagCreateWithoutTaskInput[] | Prisma.TaskTagUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.TaskTagCreateOrConnectWithoutTaskInput | Prisma.TaskTagCreateOrConnectWithoutTaskInput[];
    createMany?: Prisma.TaskTagCreateManyTaskInputEnvelope;
    connect?: Prisma.TaskTagWhereUniqueInput | Prisma.TaskTagWhereUniqueInput[];
};
export type TaskTagUncheckedCreateNestedManyWithoutTaskInput = {
    create?: Prisma.XOR<Prisma.TaskTagCreateWithoutTaskInput, Prisma.TaskTagUncheckedCreateWithoutTaskInput> | Prisma.TaskTagCreateWithoutTaskInput[] | Prisma.TaskTagUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.TaskTagCreateOrConnectWithoutTaskInput | Prisma.TaskTagCreateOrConnectWithoutTaskInput[];
    createMany?: Prisma.TaskTagCreateManyTaskInputEnvelope;
    connect?: Prisma.TaskTagWhereUniqueInput | Prisma.TaskTagWhereUniqueInput[];
};
export type TaskTagUpdateManyWithoutTaskNestedInput = {
    create?: Prisma.XOR<Prisma.TaskTagCreateWithoutTaskInput, Prisma.TaskTagUncheckedCreateWithoutTaskInput> | Prisma.TaskTagCreateWithoutTaskInput[] | Prisma.TaskTagUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.TaskTagCreateOrConnectWithoutTaskInput | Prisma.TaskTagCreateOrConnectWithoutTaskInput[];
    upsert?: Prisma.TaskTagUpsertWithWhereUniqueWithoutTaskInput | Prisma.TaskTagUpsertWithWhereUniqueWithoutTaskInput[];
    createMany?: Prisma.TaskTagCreateManyTaskInputEnvelope;
    set?: Prisma.TaskTagWhereUniqueInput | Prisma.TaskTagWhereUniqueInput[];
    disconnect?: Prisma.TaskTagWhereUniqueInput | Prisma.TaskTagWhereUniqueInput[];
    delete?: Prisma.TaskTagWhereUniqueInput | Prisma.TaskTagWhereUniqueInput[];
    connect?: Prisma.TaskTagWhereUniqueInput | Prisma.TaskTagWhereUniqueInput[];
    update?: Prisma.TaskTagUpdateWithWhereUniqueWithoutTaskInput | Prisma.TaskTagUpdateWithWhereUniqueWithoutTaskInput[];
    updateMany?: Prisma.TaskTagUpdateManyWithWhereWithoutTaskInput | Prisma.TaskTagUpdateManyWithWhereWithoutTaskInput[];
    deleteMany?: Prisma.TaskTagScalarWhereInput | Prisma.TaskTagScalarWhereInput[];
};
export type TaskTagUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: Prisma.XOR<Prisma.TaskTagCreateWithoutTaskInput, Prisma.TaskTagUncheckedCreateWithoutTaskInput> | Prisma.TaskTagCreateWithoutTaskInput[] | Prisma.TaskTagUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: Prisma.TaskTagCreateOrConnectWithoutTaskInput | Prisma.TaskTagCreateOrConnectWithoutTaskInput[];
    upsert?: Prisma.TaskTagUpsertWithWhereUniqueWithoutTaskInput | Prisma.TaskTagUpsertWithWhereUniqueWithoutTaskInput[];
    createMany?: Prisma.TaskTagCreateManyTaskInputEnvelope;
    set?: Prisma.TaskTagWhereUniqueInput | Prisma.TaskTagWhereUniqueInput[];
    disconnect?: Prisma.TaskTagWhereUniqueInput | Prisma.TaskTagWhereUniqueInput[];
    delete?: Prisma.TaskTagWhereUniqueInput | Prisma.TaskTagWhereUniqueInput[];
    connect?: Prisma.TaskTagWhereUniqueInput | Prisma.TaskTagWhereUniqueInput[];
    update?: Prisma.TaskTagUpdateWithWhereUniqueWithoutTaskInput | Prisma.TaskTagUpdateWithWhereUniqueWithoutTaskInput[];
    updateMany?: Prisma.TaskTagUpdateManyWithWhereWithoutTaskInput | Prisma.TaskTagUpdateManyWithWhereWithoutTaskInput[];
    deleteMany?: Prisma.TaskTagScalarWhereInput | Prisma.TaskTagScalarWhereInput[];
};
export type TaskTagCreateNestedManyWithoutTagInput = {
    create?: Prisma.XOR<Prisma.TaskTagCreateWithoutTagInput, Prisma.TaskTagUncheckedCreateWithoutTagInput> | Prisma.TaskTagCreateWithoutTagInput[] | Prisma.TaskTagUncheckedCreateWithoutTagInput[];
    connectOrCreate?: Prisma.TaskTagCreateOrConnectWithoutTagInput | Prisma.TaskTagCreateOrConnectWithoutTagInput[];
    createMany?: Prisma.TaskTagCreateManyTagInputEnvelope;
    connect?: Prisma.TaskTagWhereUniqueInput | Prisma.TaskTagWhereUniqueInput[];
};
export type TaskTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: Prisma.XOR<Prisma.TaskTagCreateWithoutTagInput, Prisma.TaskTagUncheckedCreateWithoutTagInput> | Prisma.TaskTagCreateWithoutTagInput[] | Prisma.TaskTagUncheckedCreateWithoutTagInput[];
    connectOrCreate?: Prisma.TaskTagCreateOrConnectWithoutTagInput | Prisma.TaskTagCreateOrConnectWithoutTagInput[];
    createMany?: Prisma.TaskTagCreateManyTagInputEnvelope;
    connect?: Prisma.TaskTagWhereUniqueInput | Prisma.TaskTagWhereUniqueInput[];
};
export type TaskTagUpdateManyWithoutTagNestedInput = {
    create?: Prisma.XOR<Prisma.TaskTagCreateWithoutTagInput, Prisma.TaskTagUncheckedCreateWithoutTagInput> | Prisma.TaskTagCreateWithoutTagInput[] | Prisma.TaskTagUncheckedCreateWithoutTagInput[];
    connectOrCreate?: Prisma.TaskTagCreateOrConnectWithoutTagInput | Prisma.TaskTagCreateOrConnectWithoutTagInput[];
    upsert?: Prisma.TaskTagUpsertWithWhereUniqueWithoutTagInput | Prisma.TaskTagUpsertWithWhereUniqueWithoutTagInput[];
    createMany?: Prisma.TaskTagCreateManyTagInputEnvelope;
    set?: Prisma.TaskTagWhereUniqueInput | Prisma.TaskTagWhereUniqueInput[];
    disconnect?: Prisma.TaskTagWhereUniqueInput | Prisma.TaskTagWhereUniqueInput[];
    delete?: Prisma.TaskTagWhereUniqueInput | Prisma.TaskTagWhereUniqueInput[];
    connect?: Prisma.TaskTagWhereUniqueInput | Prisma.TaskTagWhereUniqueInput[];
    update?: Prisma.TaskTagUpdateWithWhereUniqueWithoutTagInput | Prisma.TaskTagUpdateWithWhereUniqueWithoutTagInput[];
    updateMany?: Prisma.TaskTagUpdateManyWithWhereWithoutTagInput | Prisma.TaskTagUpdateManyWithWhereWithoutTagInput[];
    deleteMany?: Prisma.TaskTagScalarWhereInput | Prisma.TaskTagScalarWhereInput[];
};
export type TaskTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: Prisma.XOR<Prisma.TaskTagCreateWithoutTagInput, Prisma.TaskTagUncheckedCreateWithoutTagInput> | Prisma.TaskTagCreateWithoutTagInput[] | Prisma.TaskTagUncheckedCreateWithoutTagInput[];
    connectOrCreate?: Prisma.TaskTagCreateOrConnectWithoutTagInput | Prisma.TaskTagCreateOrConnectWithoutTagInput[];
    upsert?: Prisma.TaskTagUpsertWithWhereUniqueWithoutTagInput | Prisma.TaskTagUpsertWithWhereUniqueWithoutTagInput[];
    createMany?: Prisma.TaskTagCreateManyTagInputEnvelope;
    set?: Prisma.TaskTagWhereUniqueInput | Prisma.TaskTagWhereUniqueInput[];
    disconnect?: Prisma.TaskTagWhereUniqueInput | Prisma.TaskTagWhereUniqueInput[];
    delete?: Prisma.TaskTagWhereUniqueInput | Prisma.TaskTagWhereUniqueInput[];
    connect?: Prisma.TaskTagWhereUniqueInput | Prisma.TaskTagWhereUniqueInput[];
    update?: Prisma.TaskTagUpdateWithWhereUniqueWithoutTagInput | Prisma.TaskTagUpdateWithWhereUniqueWithoutTagInput[];
    updateMany?: Prisma.TaskTagUpdateManyWithWhereWithoutTagInput | Prisma.TaskTagUpdateManyWithWhereWithoutTagInput[];
    deleteMany?: Prisma.TaskTagScalarWhereInput | Prisma.TaskTagScalarWhereInput[];
};
export type TaskTagCreateWithoutTaskInput = {
    tag: Prisma.TagCreateNestedOneWithoutTasksInput;
};
export type TaskTagUncheckedCreateWithoutTaskInput = {
    tagId: number;
};
export type TaskTagCreateOrConnectWithoutTaskInput = {
    where: Prisma.TaskTagWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskTagCreateWithoutTaskInput, Prisma.TaskTagUncheckedCreateWithoutTaskInput>;
};
export type TaskTagCreateManyTaskInputEnvelope = {
    data: Prisma.TaskTagCreateManyTaskInput | Prisma.TaskTagCreateManyTaskInput[];
    skipDuplicates?: boolean;
};
export type TaskTagUpsertWithWhereUniqueWithoutTaskInput = {
    where: Prisma.TaskTagWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaskTagUpdateWithoutTaskInput, Prisma.TaskTagUncheckedUpdateWithoutTaskInput>;
    create: Prisma.XOR<Prisma.TaskTagCreateWithoutTaskInput, Prisma.TaskTagUncheckedCreateWithoutTaskInput>;
};
export type TaskTagUpdateWithWhereUniqueWithoutTaskInput = {
    where: Prisma.TaskTagWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaskTagUpdateWithoutTaskInput, Prisma.TaskTagUncheckedUpdateWithoutTaskInput>;
};
export type TaskTagUpdateManyWithWhereWithoutTaskInput = {
    where: Prisma.TaskTagScalarWhereInput;
    data: Prisma.XOR<Prisma.TaskTagUpdateManyMutationInput, Prisma.TaskTagUncheckedUpdateManyWithoutTaskInput>;
};
export type TaskTagScalarWhereInput = {
    AND?: Prisma.TaskTagScalarWhereInput | Prisma.TaskTagScalarWhereInput[];
    OR?: Prisma.TaskTagScalarWhereInput[];
    NOT?: Prisma.TaskTagScalarWhereInput | Prisma.TaskTagScalarWhereInput[];
    taskId?: Prisma.IntFilter<"TaskTag"> | number;
    tagId?: Prisma.IntFilter<"TaskTag"> | number;
};
export type TaskTagCreateWithoutTagInput = {
    task: Prisma.TaskCreateNestedOneWithoutTagsInput;
};
export type TaskTagUncheckedCreateWithoutTagInput = {
    taskId: number;
};
export type TaskTagCreateOrConnectWithoutTagInput = {
    where: Prisma.TaskTagWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskTagCreateWithoutTagInput, Prisma.TaskTagUncheckedCreateWithoutTagInput>;
};
export type TaskTagCreateManyTagInputEnvelope = {
    data: Prisma.TaskTagCreateManyTagInput | Prisma.TaskTagCreateManyTagInput[];
    skipDuplicates?: boolean;
};
export type TaskTagUpsertWithWhereUniqueWithoutTagInput = {
    where: Prisma.TaskTagWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaskTagUpdateWithoutTagInput, Prisma.TaskTagUncheckedUpdateWithoutTagInput>;
    create: Prisma.XOR<Prisma.TaskTagCreateWithoutTagInput, Prisma.TaskTagUncheckedCreateWithoutTagInput>;
};
export type TaskTagUpdateWithWhereUniqueWithoutTagInput = {
    where: Prisma.TaskTagWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaskTagUpdateWithoutTagInput, Prisma.TaskTagUncheckedUpdateWithoutTagInput>;
};
export type TaskTagUpdateManyWithWhereWithoutTagInput = {
    where: Prisma.TaskTagScalarWhereInput;
    data: Prisma.XOR<Prisma.TaskTagUpdateManyMutationInput, Prisma.TaskTagUncheckedUpdateManyWithoutTagInput>;
};
export type TaskTagCreateManyTaskInput = {
    tagId: number;
};
export type TaskTagUpdateWithoutTaskInput = {
    tag?: Prisma.TagUpdateOneRequiredWithoutTasksNestedInput;
};
export type TaskTagUncheckedUpdateWithoutTaskInput = {
    tagId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TaskTagUncheckedUpdateManyWithoutTaskInput = {
    tagId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TaskTagCreateManyTagInput = {
    taskId: number;
};
export type TaskTagUpdateWithoutTagInput = {
    task?: Prisma.TaskUpdateOneRequiredWithoutTagsNestedInput;
};
export type TaskTagUncheckedUpdateWithoutTagInput = {
    taskId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TaskTagUncheckedUpdateManyWithoutTagInput = {
    taskId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type TaskTagSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    taskId?: boolean;
    tagId?: boolean;
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
    tag?: boolean | Prisma.TagDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taskTag"]>;
export type TaskTagSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    taskId?: boolean;
    tagId?: boolean;
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
    tag?: boolean | Prisma.TagDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taskTag"]>;
export type TaskTagSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    taskId?: boolean;
    tagId?: boolean;
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
    tag?: boolean | Prisma.TagDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["taskTag"]>;
export type TaskTagSelectScalar = {
    taskId?: boolean;
    tagId?: boolean;
};
export type TaskTagOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"taskId" | "tagId", ExtArgs["result"]["taskTag"]>;
export type TaskTagInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
    tag?: boolean | Prisma.TagDefaultArgs<ExtArgs>;
};
export type TaskTagIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
    tag?: boolean | Prisma.TagDefaultArgs<ExtArgs>;
};
export type TaskTagIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    task?: boolean | Prisma.TaskDefaultArgs<ExtArgs>;
    tag?: boolean | Prisma.TagDefaultArgs<ExtArgs>;
};
export type $TaskTagPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TaskTag";
    objects: {
        task: Prisma.$TaskPayload<ExtArgs>;
        tag: Prisma.$TagPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        taskId: number;
        tagId: number;
    }, ExtArgs["result"]["taskTag"]>;
    composites: {};
};
export type TaskTagGetPayload<S extends boolean | null | undefined | TaskTagDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TaskTagPayload, S>;
export type TaskTagCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TaskTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TaskTagCountAggregateInputType | true;
};
export interface TaskTagDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TaskTag'];
        meta: {
            name: 'TaskTag';
        };
    };
    findUnique<T extends TaskTagFindUniqueArgs>(args: Prisma.SelectSubset<T, TaskTagFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TaskTagClient<runtime.Types.Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TaskTagFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TaskTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaskTagClient<runtime.Types.Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TaskTagFindFirstArgs>(args?: Prisma.SelectSubset<T, TaskTagFindFirstArgs<ExtArgs>>): Prisma.Prisma__TaskTagClient<runtime.Types.Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TaskTagFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TaskTagFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaskTagClient<runtime.Types.Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TaskTagFindManyArgs>(args?: Prisma.SelectSubset<T, TaskTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TaskTagCreateArgs>(args: Prisma.SelectSubset<T, TaskTagCreateArgs<ExtArgs>>): Prisma.Prisma__TaskTagClient<runtime.Types.Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TaskTagCreateManyArgs>(args?: Prisma.SelectSubset<T, TaskTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TaskTagCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TaskTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TaskTagDeleteArgs>(args: Prisma.SelectSubset<T, TaskTagDeleteArgs<ExtArgs>>): Prisma.Prisma__TaskTagClient<runtime.Types.Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TaskTagUpdateArgs>(args: Prisma.SelectSubset<T, TaskTagUpdateArgs<ExtArgs>>): Prisma.Prisma__TaskTagClient<runtime.Types.Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TaskTagDeleteManyArgs>(args?: Prisma.SelectSubset<T, TaskTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TaskTagUpdateManyArgs>(args: Prisma.SelectSubset<T, TaskTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TaskTagUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TaskTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TaskTagUpsertArgs>(args: Prisma.SelectSubset<T, TaskTagUpsertArgs<ExtArgs>>): Prisma.Prisma__TaskTagClient<runtime.Types.Result.GetResult<Prisma.$TaskTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TaskTagCountArgs>(args?: Prisma.Subset<T, TaskTagCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TaskTagCountAggregateOutputType> : number>;
    aggregate<T extends TaskTagAggregateArgs>(args: Prisma.Subset<T, TaskTagAggregateArgs>): Prisma.PrismaPromise<GetTaskTagAggregateType<T>>;
    groupBy<T extends TaskTagGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TaskTagGroupByArgs['orderBy'];
    } : {
        orderBy?: TaskTagGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TaskTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TaskTagFieldRefs;
}
export interface Prisma__TaskTagClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    task<T extends Prisma.TaskDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TaskDefaultArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tag<T extends Prisma.TagDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TagDefaultArgs<ExtArgs>>): Prisma.Prisma__TagClient<runtime.Types.Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TaskTagFieldRefs {
    readonly taskId: Prisma.FieldRef<"TaskTag", 'Int'>;
    readonly tagId: Prisma.FieldRef<"TaskTag", 'Int'>;
}
export type TaskTagFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskTagSelect<ExtArgs> | null;
    omit?: Prisma.TaskTagOmit<ExtArgs> | null;
    include?: Prisma.TaskTagInclude<ExtArgs> | null;
    where: Prisma.TaskTagWhereUniqueInput;
};
export type TaskTagFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskTagSelect<ExtArgs> | null;
    omit?: Prisma.TaskTagOmit<ExtArgs> | null;
    include?: Prisma.TaskTagInclude<ExtArgs> | null;
    where: Prisma.TaskTagWhereUniqueInput;
};
export type TaskTagFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TaskTagFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TaskTagFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TaskTagCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskTagSelect<ExtArgs> | null;
    omit?: Prisma.TaskTagOmit<ExtArgs> | null;
    include?: Prisma.TaskTagInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskTagCreateInput, Prisma.TaskTagUncheckedCreateInput>;
};
export type TaskTagCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TaskTagCreateManyInput | Prisma.TaskTagCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TaskTagCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskTagSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaskTagOmit<ExtArgs> | null;
    data: Prisma.TaskTagCreateManyInput | Prisma.TaskTagCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TaskTagIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TaskTagUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskTagSelect<ExtArgs> | null;
    omit?: Prisma.TaskTagOmit<ExtArgs> | null;
    include?: Prisma.TaskTagInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskTagUpdateInput, Prisma.TaskTagUncheckedUpdateInput>;
    where: Prisma.TaskTagWhereUniqueInput;
};
export type TaskTagUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TaskTagUpdateManyMutationInput, Prisma.TaskTagUncheckedUpdateManyInput>;
    where?: Prisma.TaskTagWhereInput;
    limit?: number;
};
export type TaskTagUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskTagSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaskTagOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskTagUpdateManyMutationInput, Prisma.TaskTagUncheckedUpdateManyInput>;
    where?: Prisma.TaskTagWhereInput;
    limit?: number;
    include?: Prisma.TaskTagIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TaskTagUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskTagSelect<ExtArgs> | null;
    omit?: Prisma.TaskTagOmit<ExtArgs> | null;
    include?: Prisma.TaskTagInclude<ExtArgs> | null;
    where: Prisma.TaskTagWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskTagCreateInput, Prisma.TaskTagUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TaskTagUpdateInput, Prisma.TaskTagUncheckedUpdateInput>;
};
export type TaskTagDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskTagSelect<ExtArgs> | null;
    omit?: Prisma.TaskTagOmit<ExtArgs> | null;
    include?: Prisma.TaskTagInclude<ExtArgs> | null;
    where: Prisma.TaskTagWhereUniqueInput;
};
export type TaskTagDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskTagWhereInput;
    limit?: number;
};
export type TaskTagDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskTagSelect<ExtArgs> | null;
    omit?: Prisma.TaskTagOmit<ExtArgs> | null;
    include?: Prisma.TaskTagInclude<ExtArgs> | null;
};
export {};
