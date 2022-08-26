import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/cart/actions'
import { IProductItem } from '../../types'
import Quantity from './Quantity'

const ProductItem: FC<IProductItem> = ({ product }) => {
    const [count, setCount] = useState(0)

    const dispatch = useDispatch()

    const addHandler = () => {
        dispatch(addToCart(product, count))
    }

    return (
        <div
            className='p-5 w-4/5 mx-auto relative top-14
            flex justify-center flex-col text-center
            items-center border-b-2 border-black'>
            <img className='rounded-lg hover:shadow-2xl'
                src={product.imagePath}
                alt={product.name}
                style={{ width: '50%' }}
            />
            <div className="text-lg text-white font-bold my-2">{product.name}</div>
            <div className="font-bold text-white">${product.price}</div>
            <Quantity count={count} setCount={setCount} />
            <button className='bg-white bg-opacity-40 rounded-lg px-3 py-1 mt-2 hover:bg-opacity-80
                transition-colors duration-300 ease-in-out font-semibold'
                onClick={addHandler}
            >
                Add to cart
            </button>
        </div>
    )
}

export default ProductItem