//Hooks are functions that provide us with state and function. 
//const [count, setCount]=useState(0)

import { useState } from "react"

function App() {
  //Lets write a hook. See below.
  const [counter,setCount]=useState(0)
  //In the code above, useState is a hook. Its name is counter and the function to update its value is setCount. Below we will see how its implemented.

  return (
    <>
    <p>Current Count Is {counter}</p>
      <button onClick={()=>{setCount(counter+1)}}>Click Me !!</button>
    </>
  )
}

//In the code above enclosed between <> </> we see we have paragraph with its text and the javascript code {counter} that is fetching the state counter's value. Then we are creating button with onClick event. In the function in this event we call the update function of the state, "setCount" and using that we are updating the value.

//One aspect we need to see usage of normal js for the same purpose.
/* let a=1
<button onClick=({a=a+1})> Click Me !! </button> */
//The code above will update a but the value will not be visible.

export default App
