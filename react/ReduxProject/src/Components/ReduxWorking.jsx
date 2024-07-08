import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterMinus, counterPlus } from '../Redux/counterSlice'

function ReduxWorking() {

    //import the slicer 
    const couterSlice=useSelector((state)=>state.counter)
    const dispatch=useDispatch()
    console.log(couterSlice)

    const handleClick=(op)=>{
        if(op=="+"){
            dispatch(counterPlus({counter:3}))
        }
        if(op=="-"){
          dispatch(counterMinus({counter:3}))
      }
    }

  return (
    <div>
      <div>{couterSlice.counter}</div>
      <button onClick={()=>handleClick("+")}>+</button>
      <button onClick={()=>handleClick("-")}>-</button>
    </div>
  )
}

export default ReduxWorking
