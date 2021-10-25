export class TaskList {
    id: number;
    title: string;
    isActive: boolean;
}

export class Task {
    id: number;
    taskListId: number;
    title: string;
    status: boolean;
}