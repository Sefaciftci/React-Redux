import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment , customDecrement, customIncrement} from '../features/counter/counterSlice'

const Counter = () => {

    //state mizi kullanamak counter state içerisindeki value muzu alırız 
    const count = useSelector((state)=> state.counter.value)
    // reducer larımız kullnamak için dispatch kullanırız
    const dispatch = useDispatch()


  return (
    <div className='flex justify-center mt-5'>
        <button className='py-2 px-3 m-2 text-white  bg-amber-600 rounded' onClick={()=> dispatch(increment())}> + </button>
        <button className='py-2 px-3 m-2 text-white bg-amber-600 rounded'  onClick={()=> dispatch(customIncrement(5))}> +5 </button>
        <span className='text-lg font-bold bg-blue-600 text-white rounded py-3 px-4 m-4'>{count}</span>
        <button className='py-2 px-3 m-4 text-white bg-red-500 rounded'  onClick={()=> dispatch(decrement())}> - </button>
        <button className='py-2 px-3 m-4 text-white bg-red-500 rounded' onClick={()=> dispatch(customDecrement(5))}> -5 </button>
        
    </div>
  )
}

export default Counter
