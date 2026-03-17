"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.TaskTagScalarFieldEnum = exports.TagScalarFieldEnum = exports.CommentScalarFieldEnum = exports.TaskAssignmentScalarFieldEnum = exports.TaskScalarFieldEnum = exports.ProjectScalarFieldEnum = exports.MemberScalarFieldEnum = exports.OrganizationScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = require("@prisma/client/runtime/client");
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.5.0",
    engine: "280c870be64f457428992c43c1f6d557fab6e29e"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    Organization: 'Organization',
    Member: 'Member',
    Project: 'Project',
    Task: 'Task',
    TaskAssignment: 'TaskAssignment',
    Comment: 'Comment',
    Tag: 'Tag',
    TaskTag: 'TaskTag'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    name: 'name',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt'
};
exports.OrganizationScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt'
};
exports.MemberScalarFieldEnum = {
    id: 'id',
    role: 'role',
    joinedAt: 'joinedAt',
    userId: 'userId',
    organizationId: 'organizationId'
};
exports.ProjectScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    isArchived: 'isArchived',
    createdAt: 'createdAt',
    ownerId: 'ownerId',
    organizationId: 'organizationId'
};
exports.TaskScalarFieldEnum = {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    priority: 'priority',
    dueDate: 'dueDate',
    createdAt: 'createdAt',
    projectId: 'projectId',
    parentId: 'parentId'
};
exports.TaskAssignmentScalarFieldEnum = {
    assignedAt: 'assignedAt',
    taskId: 'taskId',
    userId: 'userId'
};
exports.CommentScalarFieldEnum = {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    taskId: 'taskId',
    authorId: 'authorId'
};
exports.TagScalarFieldEnum = {
    id: 'id',
    name: 'name',
    color: 'color'
};
exports.TaskTagScalarFieldEnum = {
    taskId: 'taskId',
    tagId: 'tagId'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map