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
type sum = '+';
type subtract = "-";
type multiply = "*";
type divide = "/";



interface CurrentType {
    a: string | number;
    b?: string | number;
    sign?: sum | subtract | multiply | divide;
}

interface SingleData {
    a: string | number;
    sign: "++" | "--"
}

const a: CurrentType = {
    a: 1,
    b: 2,
    sign: '+',
};

const b: CurrentType = {
    a: 1,
    b: 2,
};

const c: CurrentType = {
    a: '1',
    b: '2',
    sign: '-',
};

const d: CurrentType | SingleData= {
    a: 1,
    sign: '++',
};

// Zmiana: zmień teraz typ tak, aby znak mógł być tylko +, -, * lub /

// Zmiana: stwórz dokładne typy tak, by w przypadku posiadania tylko 1 danej (a) można było na niej wykonać ++ i --, ale nie w przypadku dwóch i na odwrót

// Zmień program w taki sposób, aby do operacji używało się enumów, a nie stringów