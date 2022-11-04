export interface indexProps {
    _id: string,
    title: string,
    desсription: string,
    img: string,
    prices: [number],
    extraOptions: [
        {
            text: string,
            price: number,
        },
    ],
}