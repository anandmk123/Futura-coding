import React, { useReducer } from 'react'

const reducer=(state,action)=>{

    if(action.type=="+"){
        return state+1
    }
    if(action.type=="-"){
        return state-1
    }

}


function UseReducerWorking() {

    const [counter,dispatch] =useReducer(reducer,0)

    const plus=()=>{
        dispatch({type:"+"})
    }

    
    const minus=()=>{
        dispatch({type:"-"})
    }


  return (
    <div>
      <div>{counter}</div>
      <button onClick={plus}>+1</button>
      <button onClick={minus}>-1</button>
    </div>
  )
}

export default UseReducerWorking
