import React from 'react'
import Text from './Text'
function Button({value:{count,setCount}}) {
  return (
    <div>
      <button onClick={()=>{setCount(count+1)}}><Text value={{count,setCount}}/></button>
    </div>
  )
}

export default Button
