//3. Import the context instance exported in context.js and import useContext to read it and the values it carries. The use them as shown below.

import React from 'react'
import { useContext } from 'react'
import { buttonContext } from '../context/context'
function Text() {
    const value=useContext(buttonContext)
  return (
    <div>
      I am button. My count is {value.count}
    </div>
  )
}

export default Text
