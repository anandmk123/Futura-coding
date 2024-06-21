import React, { useEffect, useState } from 'react'
import './MouseFollower.css'

function MouseFollower() {

    const [axis,setAxis]=useState(
        {
          x:0,
          y:0  
        }
    )

    const handleMove=(e)=>{
        setAxis(prev=>({...prev,x:e.pageX,y:e.pageY}))
    }

    useEffect(()=>{
        document.addEventListener('mousemove',handleMove)
        return ()=>{
            document.removeEventListener('mousemove',handleMove)
        }
    },[])


  return (
    <div className='follower' style={{top:`${axis.y}px`,left:`${axis.x}px`}}>
    </div>
  )
}

export default MouseFollower

