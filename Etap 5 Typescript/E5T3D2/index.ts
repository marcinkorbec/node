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
        return await response.json();
    }

    async list(): Promise<SingleToDo[]> {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
        return await response.json();
    }
}

(async ()=> {
    const todo = new TodoApi();
    console.log(await todo.get(1));
})();

(async ()=> {
    const todo = new TodoApi();
    console.log(await todo.list());
})();