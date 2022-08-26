import { Dispatch, SetStateAction } from "react"

export interface IProduct {
    name: string
    imagePath: string
    price: number
    _id: string
}

export interface ICartItem extends IProduct{
    count: number
}

export interface IProductItem {
    product: IProduct
}

export type TypeSetState<T> = Dispatch<SetStateAction<T>>

export interface IQuantity {
    count: number
    setCount: TypeSetState<number>
}