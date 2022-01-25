interface SingleToDo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

class TodoApi {
    private readonly url = 'https://jsonplaceholder.typicode.com/todos/';

   async get (id: number): Promise<SingleToDo> {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    }
}