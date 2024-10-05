//3. Import the context instance exported in context.js and import useContext to read it and the values it carries. The use them as shown below.

import React from 'react'
import Text from './Text'
import { useContext } from 'react'
import { buttonContext } from '../context/context'
function Button() {
    const value=useContext(buttonContext)
  return (
    <div>
      <button onClick={()=>{value.setCount(value.count+1)}}><Text/></button>
    </div>
  )
}
export default Button