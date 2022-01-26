// import {TodoApi, Gender} from "./types/index";
//
//
//
//
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
//
// console.log(Gender[Gender.Women]);

import {addDays} from "date-fns";

console.log(addDays(new Date(), 30));