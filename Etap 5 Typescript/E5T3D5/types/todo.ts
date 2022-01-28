interface SingleToDo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface SingleToDoCreate {
    userId: number;
    title: string;
    completed: boolean;
}

export {
    SingleToDo,
    SingleToDoCreate,
}