import {SingleToDo, SingleToDoCreate} from "../todo";

export class TodoApi {
    private readonly url = 'https://jsonplaceholder.typicode.com/todos/';

    async get(id: number): Promise<SingleToDo> {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        return await response.json();
    }

    async list(): Promise<SingleToDo[]> {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
        return await response.json();
    }

    async create(task: SingleToDoCreate):Promise<SingleToDo> {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        return await response.json();
    }
}