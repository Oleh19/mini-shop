import React, { FC, useState } from 'react'
import cn from 'classnames'

import logoImage from '../../assets/images/taskade-icon.svg'
import cartIcon from '../../assets/images/bx-cart.svg'
import done from '../../assets/images/done.png'


import { useTypeSelector } from '../../hooks/useTypeSelector'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../store/cart/actions'

const Header: FC = () => {
    const [isShowCart, setIsShowCart] = useState(false)
    const [order, setOrder] = useState(false)

    const cart = useTypeSelector(state => state.cart)

    const total = cart.reduce((acc, item) =>
        acc + item.price
        , 0)

    const dispatch = useDispatch()

    const removeHandler = (id: string) => {
        dispatch(removeFromCart(id))
    }

    function swap(order: boolean, isShowCart: boolean) {
        setOrder(!order)
        setIsShowCart(!isShowCart)
    }

    return (
        <div
            className='flex items-center justify-between
            fixed top-0 left-0 bg-black bg-opacity-30
            w-full py-2 px-4 z-10 shadow-2xl'>
            <img
                src={logoImage}
                alt="Logo"
                width='70'
            />
            <button
                className='bg-transparent border-none relative inline-flex'
                onClick={() => setIsShowCart(!isShowCart)}>
                <img
                    src={cartIcon}
                    alt="Cart"
                    width='40' />
                <div className='text-red-700 absolute -top-1
                    right-0 font-bold rounded-full bg-white
                    flex items-center content-center text-center
                    bg-opacity-50 max-w-max max-h-4 px-1'>
                    {cart.length}
                </div>
            </button>
            {
                order ?
                    <div className='md:w-full md:border-0 text-center md:shadow-2xl md:bg-opacity-80 absolute right-0 shadow-2xl border-4 border-opacity-60 border-indigo-500 bg-white bg-opacity-50 p-5 rounded-lg font-bold text-white'
                        style={{
                            top: '11vh'
                        }}
                    >
                        <img src={done}
                            alt="Done"
                            style={{ width: '20vw' }}
                            className='inline-flex cursor-pointer'
                            onClick={() => swap(order, isShowCart)}
                        />
                        <div className="text-center mt-3 font-bold text-2xl text-black">
                            Order processed
                        </div>
                    </div>
                    : <div
                        className={cn('md:w-screen md:bg-opacity-80 md:shadow-2xl absolute md:right-0  -right-1 shadow-2xl border-4 border-opacity-60 border-indigo-500 bg-black bg-opacity-30 p-5 rounded-lg font-bold text-white w-1/5',
                            {
                                hidden: !isShowCart,
                            })}
                        style={{
                            top: '11vh'
                        }} >
                        {cart.map(item => (
                            <div
                                className="flex items-center pb-7"
                                key={item._id}>
                                <img
                                    src={item.imagePath}
                                    alt={item.name}
                                    width='55'
                                    height='55'
                                    className='mr-3 rounded-lg md:w-1/5 md:h-1/5 md:border-white md:border-2' />
                                <div>
                                    <div>{item.name}</div>
                                    <div>{`${item.count} x $${item.price.toLocaleString()}`}</div>
                                    <button className="bg-transparent border-0 text-black text-2xl md:text-red-500"
                                        onClick={() => removeHandler(item._id)}
                                    >Delete</button>
                                </div>
                            </div>
                        ))}
                        < div className='text-lg mt-3 pt-2 border-t-4 border-zinc-400'>
                            Total: <b>${total.toLocaleString()}</b>
                        </div>
                        <button
                            onClick={() => setOrder(!order)}
                            className='text-xl'
                        >Buy</button>
                    </div>
            }
        </div >
    )
}

export default Header
