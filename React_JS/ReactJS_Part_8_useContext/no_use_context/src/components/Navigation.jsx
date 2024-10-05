import React from 'react'
import Button from './Button'
function Navigation({value:{count,setCount}}) {
  return (
    <div>
      Hello there I am 
      <Button value={{count,setCount}}/>
    </div>
  )
}

export default Navigation
