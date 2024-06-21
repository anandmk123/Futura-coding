import React, { useState } from 'react'

function NamesContainer({listnames,deletenames,changeStatus,setListNames}) {
    // console.log(listnames)
    const [editableIndex,setEditableIndex]=useState(-1)
    const [editedText,setEditedText]=useState('')

    const submitEdited=()=>{
        const user=listnames[editableIndex]
        listnames[editableIndex]={...user,username:editedText}
        setListNames(listnames)
        setEditableIndex(-1)
    }

  return (
    <div className='w-100% p-5'>
        <ul className='list-unstyled d-flex flex-column gap-4' >
            {listnames.map((ele,index)=>{
                return <li key={ele.id} className='d-flex flex-row gap-5 align-items-center shadow'>
                        
                        {editableIndex===index?<>
                            <input type="text" name="" id="" value={editedText} onChange={e=>{setEditedText(e.target.value)}}/>
                            <button onClick={submitEdited}>Edit</button>
                        </>
                        :<>
                            <input type="checkbox" name="" id="" 
                                checked={ele.userstatus}
                                onChange={()=>{changeStatus(ele)}}
                            />
                            {ele.userstatus?<del><h3>{ele.username}</h3></del>:
                            <>
                                <h3>{ele.username}</h3>
                                <i className="fa-solid fa-pen-to-square "
                                    onClick={()=>{setEditableIndex(index)
                                        setEditedText(ele.username)
                                    }}
                                ></i>
                            </>}
                        </>
                        }
                        <i 
                            onClick={()=>deletenames(ele)}
                            className="fa-solid fa-trash" 
                        ></i>
                    </li>
            })
            }
        </ul>      
    </div>
  )
}

export default NamesContainer
