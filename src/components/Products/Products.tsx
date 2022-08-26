import React from 'react'
import { IProduct } from '../../types'

import manga1 from '../../assets/images/manga1.jpeg'
import manga2 from '../../assets/images/manga2.jpeg'
import manga3 from '../../assets/images/manga3.webp'
import manga4 from '../../assets/images/manga4.jpeg'

import ProductItem from './ProductItem'

const products: IProduct[] = [
    {
        _id: 'vgjioejgew',
        imagePath: manga1,
        name: 'Magic battle',
        price: 500
    },
    {
        _id: 'dhwjnqkl',
        imagePath: manga2,
        name: 'Black clever',
        price: 400
    },
    {
        _id: 'ewfjpi45t',
        imagePath: manga3,
        name: 'My hero academia',
        price: 300
    },
    {
        _id: '460ifwihf834',
        imagePath: manga4,
        name: 'Fullmetal alchemist',
        price: 700
    },
]

function Products() {
    return (
        <div className='mt-4'>
            {products.map(product => (
                <ProductItem
                    product={product}
                    key={product._id}
                />
            ))}
        </div>
    )
}

export default Products