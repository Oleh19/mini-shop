import { FC } from 'react'
import { IQuantity } from '../../types'

const Quantity: FC<IQuantity> = ({ count, setCount }) => {

    return (
        <div className='flex items-center my-2'>
            <button className=' text-4xl font-bold'
                onClick={() => count >= 0 && setCount(count + 1)}>
                +</button>
            <input
                type="number"
                className='mx-2 bg-opacity-40 bg-white hover:bg-opacity-100
                rounded-lg px-2 py-1 text-center font-bold cursor-pointer'
                onChange={e => setCount(+e.target.value)}
                value={count}
            />
            <button className=' text-4xl font-bold'
                onClick={() => count > 0 && setCount(count - 1)}>
                -</button>
        </div>
    )
}

export default Quantity