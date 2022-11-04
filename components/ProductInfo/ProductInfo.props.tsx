export interface ProductInfoProps {
    quantity: number,
    pizzaPrice: number,
    additional: {
        title: string,
        price: number
    }[],
}

export interface ProductAdditionalProps {
    text: string,
    price: number,
    _id: number
}