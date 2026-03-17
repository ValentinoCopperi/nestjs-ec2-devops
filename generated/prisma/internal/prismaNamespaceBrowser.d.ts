import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client/runtime/client").DbNullClass;
export declare const JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
export declare const AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Organization: "Organization";
    readonly Member: "Member";
    readonly Project: "Project";
    readonly Task: "Task";
    readonly TaskAssignment: "TaskAssignment";
    readonly Comment: "Comment";
    readonly Tag: "Tag";
    readonly TaskTag: "TaskTag";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly name: "name";
    readonly avatarUrl: "avatarUrl";
    readonly createdAt: "createdAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const OrganizationScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly createdAt: "createdAt";
};
export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];
export declare const MemberScalarFieldEnum: {
    readonly id: "id";
    readonly role: "role";
    readonly joinedAt: "joinedAt";
    readonly userId: "userId";
    readonly organizationId: "organizationId";
};
export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum];
export declare const ProjectScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly isArchived: "isArchived";
    readonly createdAt: "createdAt";
    readonly ownerId: "ownerId";
    readonly organizationId: "organizationId";
};
export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum];
export declare const TaskScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly status: "status";
    readonly priority: "priority";
    readonly dueDate: "dueDate";
    readonly createdAt: "createdAt";
    readonly projectId: "projectId";
    readonly parentId: "parentId";
};
export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum];
export declare const TaskAssignmentScalarFieldEnum: {
    readonly assignedAt: "assignedAt";
    readonly taskId: "taskId";
    readonly userId: "userId";
};
export type TaskAssignmentScalarFieldEnum = (typeof TaskAssignmentScalarFieldEnum)[keyof typeof TaskAssignmentScalarFieldEnum];
export declare const CommentScalarFieldEnum: {
    readonly id: "id";
    readonly content: "content";
    readonly createdAt: "createdAt";
    readonly taskId: "taskId";
    readonly authorId: "authorId";
};
export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum];
export declare const TagScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly color: "color";
};
export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum];
export declare const TaskTagScalarFieldEnum: {
    readonly taskId: "taskId";
    readonly tagId: "tagId";
};
export type TaskTagScalarFieldEnum = (typeof TaskTagScalarFieldEnum)[keyof typeof TaskTagScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
