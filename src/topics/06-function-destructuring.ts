export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia',
    price: 150.1
}


const tablet: Product = {
    description: 'iPad',
    price: 250.0
}

const shoppinCart: Product[] = [phone, tablet];
const tax:number  = 0.15;

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export function taxCalculation( options: TaxCalculationOptions ): [number, number]{
    let total = 0;
    const { products, tax } = options;
    products.forEach( ({ price }) => {
        total += price;
    });

    return [total, total * tax];
}

/* const [total, taxTotal] = taxCalculation({
    products: shoppinCart,
    tax
}); */

/* console.log('Total', total);
console.log('Total Tax', taxTotal); */