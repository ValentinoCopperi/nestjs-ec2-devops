export declare const Role: {
    readonly ADMIN: "ADMIN";
    readonly MEMBER: "MEMBER";
    readonly VIEWER: "VIEWER";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const TaskStatus: {
    readonly TODO: "TODO";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly IN_REVIEW: "IN_REVIEW";
    readonly DONE: "DONE";
};
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];
export declare const Priority: {
    readonly LOW: "LOW";
    readonly MEDIUM: "MEDIUM";
    readonly HIGH: "HIGH";
    readonly CRITICAL: "CRITICAL";
};
export type Priority = (typeof Priority)[keyof typeof Priority];
