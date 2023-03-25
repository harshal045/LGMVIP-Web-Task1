import React, { useState } from 'react'
import './Form.css';
import { Todolist } from './Todolist';
export const Form = () => {

        const [input,setInput]=useState("")
        const [Items,setItems]=useState([])
        
        const handleChange=(event)=>
        {
          setInput(event.target.value);
        }

        const handleSubmit=(e)=>
        {
          e.preventDefault()
            setItems((oldItems)=>
            {
              return [...oldItems,input]
            })
            setInput("")
        }
       
        const delItem=(id)=>
  {
      console.log('Working')

      setItems((oldItems)=>
      {
        return oldItems.filter((arrElement,index)=>
        {
          return index!==id;
        })
      })
  }

  return (
    <div>
    <div className="App">
      <header>ToDo List</header>
        <br></br>
        <form>
        <input type="text" placeholder='Add task' value={input}  onChange={handleChange} style={{height:20}}></input>
        <button  onClick={handleSubmit}>Add</button>
        </form>
        <ol>
        {
          Items.map((val,index)=>
          {
            return <Todolist
             key={index}
              id={index}
               text={val}
               onSelect={delItem}
               />
          })
        }
        </ol>
        </div>
        </div>
  )
}
