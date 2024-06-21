import { useState } from "react"
import { Prev } from "react-bootstrap/esm/PageItem"


function Profile() {
    const [username,setUsername]=useState('') //hooks-->Used to import class component methods in function component//array destructure

    const [listnames,setListNames]=useState([])
    const [inputvalue,setInputValue]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault() //to avoid loading on submit
        if(inputvalue!=''){
            let flag=false
            listnames.forEach(element => {
                if(element===inputvalue)
                    flag=true                
            });
            if(flag==true)
                alert('Value already exists')
            else 
                {
                    setListNames((previousState)=>{return [...previousState,inputvalue]})
                }
        }
        else
            alert('Input can not be empty')
        setInputValue('')

    }
    console.log(listnames)

  return (
    <div>
      <input type="text" name="" id="" 
      value={username}
      onChange={(e)=>{
        setUsername(e.target.value)
      }}
      />
      <h1>{username}</h1>

      <div>
        <form className="form-control d-flex justify-content-center" onSubmit={handleSubmit}>
            <input type="text" name="" id="" 
                value={inputvalue}
                onChange={(e)=>{setInputValue(e.target.value)}}
            />
            <button type="submit" className="mx-2">Add</button>
        </form>
      </div>
    </div>
  )
}

export default Profile
