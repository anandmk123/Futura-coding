import React, { useEffect, useState } from 'react'

function UseEffectTest() {

    const [count,setCount]=useState(0)

    const handleCount=()=>{
        setCount(prevCount=>(prevCount+1)
        )
    }

    useEffect(()=>{
        //works if there is a change in count
        console.log('mounting or updating')

        //works on any virtual dom change
        return ()=>{
            console.log('unmounting...')
        }
    }
    ,[count])

  return (
    <div>
        <h1>UseEffect</h1>
        <button onClick={handleCount}>Increment {count}</button>
    </div>
  )
}

export default UseEffectTest
