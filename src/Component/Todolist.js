import React from 'react'
import mrk from '../Pic/checkmrk.svg'

export const Todolist = (props) => {

  

  return (
    <div>
      
      <li>{props.text} <img style={{paddingLeft:410}} src={mrk}/> <button style={{backgroundColor:"red"}} onClick={()=>
      {
        props.onSelect(props.id)
      }}>x</button></li>
    </div>
  )
}

