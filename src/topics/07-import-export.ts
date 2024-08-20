import { Product, taxCalculation } from "./06-function-destructuring";

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 150
    }
];

const [ total, taxTotal ] = taxCalculation({
    products: shoppingCart,
    tax: 0.14
})

console.table({total, taxTotal });