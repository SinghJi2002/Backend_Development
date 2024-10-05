import { useRef } from 'react'
import { useEffect } from 'react'
import React from 'react'

//Here we are going to see the implementation of useRef hook in reactjs. Now understand, using the useState hook, in JS we create variable which retains is value across different renders. The important point here is renders. When the state is changed, the whole page is reredered again. So useRef, provides us an option where we can have a variable, we can update its value without causing rerendering and it can retain its value across different renders.

function App1() {

  const a=useRef(10)

  //Using use effect to change the value of ref variable a.

  useEffect(()=>{
    a.current=a.current+1 //We use a.current to access useRef a, always.
    console.log(a.current)
  })
  //Note its preffered to use state in the script, not the refs. This is because ref updates the value but since it doesnt perform rerendering, we see that the value is not reflected on the render, which by the way is not the case with states.
  return (
    <>
      {/* <button> The value is {a} </button> This will not be rendered. Since a used here is a ref. */}
      {/* Next see App1.jsx */}
    </>
  )
}

export default App1
