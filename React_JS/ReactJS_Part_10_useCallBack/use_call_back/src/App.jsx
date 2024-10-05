import { useCallback, useState } from 'react'
import Navigation from './components/Navigation'
import './App.css'

//1.Lets talk then. We have built a navigation component. In this App.jsx, We have a adjective state. Then in the return block we are importing the navigation component. We also have a button which changes count state. We are also sending adjective state, initially. Now see that file.

//3. Now we sending setAdjective function too. See navigation.jsx.

//5. Syntax of useCallBack
// useCallback(
//   () => {
//     first
//   },
//   [second],
// )


function App() {
  const [count,setCount]=useState(0)

  const [adjective,setAdjective]=useState("Good")

  //Before use callback,
  //const getAdjective=()={
  //   setAdjective("another")
  // }

  const getAdjective=useCallback(()=>{
    setAdjective("another")
  },[count])

  //Use callback works similarly to useMemo, only that is memorises functions. One thing to note here is that, the second part of the function is tell at change of which state, the function is to be updated. For instance to pass another, we need to have count in the box, for fucntion change.
  return (
    <>
      <Navigation value={{adjective,getAdjective}}/>
      <p>Current Count is {count}</p>
      <button onClick={()=>{setCount(count+1)}}>Click Counter!!</button>
    </>
  )
}

export default App
