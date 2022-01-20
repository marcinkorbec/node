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


const pricify = (price: number,
                 currency: string = 'PLN',
                 vat: number = 0.23
): string => {
    return `${(price + (price * vat)).toFixed(2)} ${currency}`
}

console.log(pricify(10));
