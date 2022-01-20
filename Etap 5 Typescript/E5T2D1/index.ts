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

interface Person {
    name: string;
    points: number;
}


const data:  Person[] = [
    {
        name: 'Anna',
        points: 1000,
    },
    {
        name: 'Krzysztof',
        points: 1500,
    },
    {
        name: 'Ola',
        points: 0,
    },
    {
        name: 'Marek',
        points: 0,
    },
];

function incPoints(obj: Person) :void {
    obj.points++;
}

function totalPoints(ar:  Person[]) : number {
   return ar.reduce((prev, curr) => prev + curr.points, 0);
}

function personWithMostPoints(ar:  Person[]): Person {
    // return ar.reduce((prev, curr) => {
        // if(prev.points < curr.points) {
        //     return curr;
        // } else {
        //     return prev;
        // }
    return ar.sort(function(a, b) {
        if ( a.points < b.points ) {
            return 1;
        }
        else if ( a.points > b.points ) {
            return -1;
        }
        else {
            return 0;
        }
    })[0];
}


console.log(totalPoints(data))
incPoints(data[1]);
console.log(totalPoints(data));
console.log(personWithMostPoints(data))
