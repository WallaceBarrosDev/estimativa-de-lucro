export type ButtonOptions = 'normal' | 'cancel'

export type Product = {
    name:string,
    price:number,
    weight:number,
    amount:number
}

export type ProductAttributes = Omit<Product, 'name'>;