{/* ZADANIE 1 */

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

    /* ZADANIE 6 */

    // Optypuj poniższy kod, następie napisz pętlę, która będzie wypisywała wartość po kolei wszystkich elementów pojedynczo w konsoli.
    // Spróbuj użyć różnych typów pętli. //forEach, for...i, for...in, for...of
    // Zwróć uwagę na to jak edytor sprawnie podpowiada Ci w pracy.
    // W kodzie jest błąd - powinno to być widać i łatwo możesz go naprawić.

    // interface Item {
    //     name: string;
    //     count: number;
    //     pricePerOne: number;
    //     vat: number
    // }
    //
    // function showItems(items: Item[]):void {
    //     for (let item in items) {
    //         console.log(items[item]);
    //     }
    // }
    //
    // showItems([
    //     {
    //         name: 'Pomarańcze luz',
    //         count: 1.2,
    //         pricePerOne: 1,
    //         vat: 0,
    //     },
    //     {
    //         name: 'Opony komplet',
    //         count: 1,
    //         pricePerOne: 800,
    //         vat: 23,
    //     },
    //     {
    //         name: 'MP3 Player Manta 256MB',
    //         count: 1,
    //         pricePerOne: 75,
    //         vat: 23,
    //     },
    //     {
    //         name: 'Baton Mega "Kursowy Baton Masło Orzechowe"',
    //         count: 5,
    //         pricePerOne: 2,
    //         vat: 23,
    //     },
    // ]);

    /* ZADANIE 7 */

    // 1. Dodaj typy do programu.
    // 2. Usuń błędy w wyznaczonym miejscu.
    // *3. Napisz interfejs, który będzie w całości opisywał klasę Bookmarks, a następnie zrób tak, żeby klasa Bookmarks implementowała ten interfejs.


    // // Nie zmieniaj w klasie nic oprócz typów!
    // interface List {
    //     list: string[]; //tablica stringów
    //     first(): string | undefined;
    //     last():string;
    //     add(url:string): void;
    //     remove(urlOrAll: string | true):void
    // }
    //
    // class Bookmarks implements List{
    //     list: string[];
    //     constructor() {
    //         this.list = [];
    //     }
    //
    //     first(): string | undefined {
    //         return this.list[0];
    //     }
    //
    //     last():string {
    //         return this.list[this.list.length - 1];
    //     }
    //
    //     add(url:string): void {
    //         this.list.push(url);
    //     }
    //
    //     remove(urlOrAll: string | true):void {
    //         if (urlOrAll === true) {
    //             this.list = [];
    //         } else {
    //             this.list = this.list.filter(bookmark => bookmark !== urlOrAll);
    //         }
    //     }
    // }
    //
    // // Poniższy kod możesz zmieniać - tak, aby miał typy, sens i nie wywalał błędów :)
    // const favorites = new Bookmarks();
    //
    // function createLink(bookmark: string | undefined):string {
    //     if (!bookmark) {
    //         return '';
    //     }
    //     return `<a href="${bookmark}">${bookmark.substring(bookmark.indexOf('//')+2)}</a>`;
    // }
    //
    // favorites.add('http://wp.pl');
    // console.log(createLink(favorites.first()));
    // favorites.remove('http://wp.pl');
    // console.log(createLink(favorites.first()));
    // favorites.add('http://wp.pl');
    // favorites.add('http://onet.pl');
    // favorites.remove(true); // This should remove all
    // console.log('This should be true if list is empty', !favorites.first());

    // abstract class Animal {
    //     constructor(
    //         private speciesName: string) {
    //     };
    // }
    //
    // const duck = new Animal('duck')
    //
    // class Human extends Animal {
    //     private lifeEventsList: string[] = [];
    //     private isAlive: boolean = true;
    //
    //     constructor(
    //         private readonly name: string,
    //         private readonly surname: string
    //     ) {
    //         super('human');
    //     }
    //
    //     addLifeEvent(eventName: string): void {
    //         this.lifeEventsList.push(eventName);
    //     }
    //
    //     get lifeEvents(): string[] {
    //         return this.lifeEventsList.filter(s => s !== 'Kompromitacja');
    //     }
    //
    //     get alive(): boolean {
    //         return this.isAlive;
    //     }
    //
    //     set alive(newAlive: boolean) {
    //         if (!this.isAlive && newAlive) {
    //             throw new Error('Nie jesteś Bogiem');
    //         }
    //         this.isAlive = newAlive;
    //     }
    // }
    //
    // const adolf = new Human('Adolf', 'H.');
    // console.log(adolf.alive);
    // adolf.alive = false;
    // console.log(adolf.alive);
    // adolf.alive = true;
}

interface SingleToDo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

async function getToDo(id: number): Promise<SingleToDo> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return await response.json();
}

(async () => {
    const todo = await getToDo(1);
    console.log(todo.title, todo.completed ? 'is completed' : 'is to be done');
})();


// const ar: Array<number> = [1,2,3,4]

// const a = async (): string => {

// }