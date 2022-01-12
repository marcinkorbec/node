function sum(a: number, b: number) {
    return a + b;
}

const input = document.querySelector('input');
if (input) {
    const val = parseInt(input.value);

    console.log(sum(2, 3));
    console.log(sum(2, val));


}

const add = (a: any, b: any): number | string => {
    return a + b;
}
console.log(add(2, 3));
console.log(add('Hello', ' World!'));