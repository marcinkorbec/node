// interface SingleToDo {
//     userId: number;
//     id: number;
//     title: string;
//     completed: boolean;
// }
//
// interface SingleToDoCreate {
//     userId: number;
//     title: string;
//     completed: boolean;
// }
//
// class TodoApi {
//     private readonly url = 'https://jsonplaceholder.typicode.com/todos/';
//
//     async get(id: number): Promise<SingleToDo> {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
//         return await response.json();
//     }
//
//     async list(): Promise<SingleToDo[]> {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
//         return await response.json();
//     }
//
//     async create(task: SingleToDoCreate):Promise<SingleToDo> {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`, {
//             method: 'POST',
//             body: JSON.stringify(task),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         });
//         return await response.json();
//     }
// }
//
// (async () => {
//     const todo = new TodoApi();
//     console.log(await todo.get(1));
// })();
//
// (async () => {
//     const todo = new TodoApi();
//     console.log(await todo.list());
// })();
//
// (async () => {
//     const todo = new TodoApi();
//     console.log(await todo.create({
//         title: 'foo',
//         userId: 1,
//         completed: false,
//     }));
// })();


import {} from "./types/gender";

console.log(Gender[Gender.Women]);
