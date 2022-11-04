export interface orderProps {
  added: boolean,
  id: number,
  _id: number,
  size: number,
  title: string,
  extras: [],
  quantity: number,
  src: string,
  totalPrice: number,
}

export interface initialStateProps {
  products: orderProps[],
  quantity: number
} 