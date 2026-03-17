"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.TaskTagScalarFieldEnum = exports.TagScalarFieldEnum = exports.CommentScalarFieldEnum = exports.TaskAssignmentScalarFieldEnum = exports.TaskScalarFieldEnum = exports.ProjectScalarFieldEnum = exports.MemberScalarFieldEnum = exports.OrganizationScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = require("@prisma/client/runtime/index-browser");
exports.Decimal = runtime.Decimal;
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
//# sourceMappingURL=prismaNamespaceBrowser.js.map