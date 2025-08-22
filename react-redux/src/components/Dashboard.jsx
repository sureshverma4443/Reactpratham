import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../../redux/src/redux/actions/countAction';
import { reset } from '../redux/actions/countAction';

const  Dashboard=()=> {

    const user = useSelector ((state)=>state.a)
    const dispatch = useDispatch();

    const handleIncrease = ()=>{
        dispatch(increment());

    }

    const handleDecrease= ()=>{
         dispatch(decrement());
        
    }

    const handleReset= ()=>{
         dispatch(reset());
        
    }
  return (
    <>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default Dashboard
