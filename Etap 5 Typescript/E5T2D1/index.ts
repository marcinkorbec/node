/* ZADANIE 1 */

// function pricify(
//     price: number,
//     currency: string,
//     vat: number,
//     ): string {
//     return `${(price + (price * vat)).toFixed(2)} ${currency}`
// }
//
// console.log((pricify(10, 'PLN', 0.23)))

// A co jeżeli currency i VAT najczęściej jest taki sam?


// const pricify = (price: number,
//                  currency: string = 'PLN',
//                  vat: number = 0.23
// ): string => {
//     return `${(price + (price * vat)).toFixed(2)} ${currency}`
// }
//
// console.log(pricify(10));

/* ZADANIE 2 */

// interface Person {
//     name: string;
//     points: number;
// }
//
//
// const data:  Person[] = [
//     {
//         name: 'Anna',
//         points: 1000,
//     },
//     {
//         name: 'Krzysztof',
//         points: 1500,
//     },
//     {
//         name: 'Ola',
//         points: 0,
//     },
//     {
//         name: 'Marek',
//         points: 0,
//     },
// ];
//
// function incPoints(obj: Person) :void {
//     obj.points++;
// }
//
// function totalPoints(ar:  Person[]) : number {
//    return ar.reduce((prev, curr) => prev + curr.points, 0);
// }
//
// function personWithMostPoints(ar:  Person[]): Person {
//     // return ar.reduce((prev, curr) => {
//         // if(prev.points < curr.points) {
//         //     return curr;
//         // } else {
//         //     return prev;
//         // }
//     return ar.sort(function(a, b) {
//         if ( a.points < b.points ) {
//             return 1;
//         }
//         else if ( a.points > b.points ) {
//             return -1;
//         }
//         else {
//             return 0;
//         }
//     })[0];
// }
//
//
// console.log(totalPoints(data))
// incPoints(data[1]);
// console.log(totalPoints(data));
// console.log(personWithMostPoints(data))

/* ZADANIE 3 */

// Nie zmieniaj poniższego kodu OPRÓCZ dodawania odpowiednich typów

// {
//     class User {
//         firstName: string;
//         constructor(firstName: string) {
//             this.firstName = firstName;
//         }
//     }
//
//     const json: string = '{"firstName":"Jan"}';
//     const {firstName} = JSON.parse(json) as User;
//
//     let user: string | User = firstName === '' ? '' : `User ${firstName}`;
//
//     if (user !== '') {
//         user = new User(user);
//     }
//
//     console.log(user);
// }

/* ZADANIE 4 */

// type Sign = '+'|"-"|"/"|"*";
//
// interface DoubleData {
//     a: string | number;
//     b?: string | number;
//     sign?: Sign;
// }
//
// interface SingleData {
//     a: string | number;
//     sign: "++" | "--"
// }
//
// type CorrectType = SingleData | DoubleData;
//
// const a: CorrectType = {
//     a: 1,
//     b: 2,
//     sign: '+',
// };
//
// const b: CorrectType = {
//     a: 1,
//     b: 2,
// };
//
// const c: CorrectType = {
//     a: '1',
//     b: '2',
//     sign: '-',
// };
//
// const d: CorrectType | SingleData= {
//     a: 1,
//     sign: '++',
// };

// Zmiana: zmień teraz typ tak, aby znak mógł być tylko +, -, * lub /

// Zmiana: stwórz dokładne typy tak, by w przypadku posiadania tylko 1 danej (a) można było na niej wykonać ++ i --, ale nie w przypadku dwóch i na odwrót

// Zmień program w taki sposób, aby do operacji używało się enumów, a nie stringów

// enum TwoNumberSign {
//     Add,
//     Subtract,
//     Multiply,
//     Divide,
// }
//
// enum OneNumberSign {
//     Increment,
//     Decrement,
// }
//
// interface DoubleData {
//     a: string | number;
//     b?: string | number;
//     sign?: TwoNumberSign;
// }
//
// interface SingleData {
//     a: string | number;
//     sign: OneNumberSign
// }
//
// type CorrectType = SingleData | DoubleData;
//
// const a: CorrectType = {
//     a: 1,
//     b: 2,
//     sign: TwoNumberSign.Add,
// };
//
// const b: CorrectType = {
//     a: 1,
//     b: 2,
// };
//
// const c: CorrectType = {
//     a: '1',
//     b: '2',
//     sign: TwoNumberSign.Divide,
// };
//
// const d: CorrectType | SingleData= {
//     a: 1,
//     sign: OneNumberSign.Increment,
// };
//
// function calc({a, b, sign}: DoubleData) {
//     switch (sign) {
//         case TwoNumberSign.Add:
//             console.log(Number(a) + Number(b));
//             break;
//         case TwoNumberSign.Subtract:
//             console.log(Number(a) - Number(b));
//             break;
//         case TwoNumberSign.Multiply:
//             console.log(Number(a) * Number(b));
//             break;
//         case TwoNumberSign.Divide:
//             console.log(Number(a) / Number(b));
//             break;
//     }
// }
//
// function calc2({a, sign}: SingleData) {
//     switch (sign) {
//         case OneNumberSign.Decrement:
//             console.log(Number(a) - Number(a));
//             break;
//         case OneNumberSign.Increment:
//             console.log(Number(a) + Number(a))
//             break;
//     }
// }
//
// calc(a);
// calc(b);
// calc(c);
// calc2(d);

/* ZADANIE 5 */

// // Uzupełnij typy - w jaki sposób możesz to zrobić? Czy musisz coś jeszcze modyfikować?
//
// interface Product {
//     name: string;
//     count: number;
//     isDegradable: boolean;
// }
//
// const product: Product = {
//     name: 'Opakowanie zbiorcze',
//     count: 1000,
//     isDegradable: true,
// };
//
// function getProductProp(obj: Product, propName: keyof Product): string | number | boolean {
//     return obj[propName];
// }
//
// const count = getProductProp(product, 'count') as number;
// const degraded = getProductProp(product, 'isDegradable') as boolean;
// console.log(`${count.toFixed(2)} ${degraded ? 'degraded' : 'undegraded'}`);