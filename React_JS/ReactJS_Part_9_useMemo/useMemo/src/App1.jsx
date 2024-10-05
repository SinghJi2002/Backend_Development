import { useState } from 'react'
import './App.css'

//1.In general development there are many times when complex operation will be performed on the frontend. In general the time taken to perform these operation is more than normal hence slows down the frontend.

//2. In context of whatever have been said above, look at the code below. We have the count state. A nums array that stores the defined object. We then have found the object whose isMagical is true and stored it in magical variable. In html we access the magical variable in p tag to print its index. Further in the html, we have the button which on click updates count state. We know w.r.t states that whenever they are updated, the whole page rerenders.

//3. The problem in code below is, when button is clicked a state is changed and the whole page rerenders. Since the operation of finding magical object is heavy, it lags the page every time it is rerendered, and degrades our expierence.

//4. To solve this we use useMemo. For further explaination, see App.jsx.


const nums=new Array(30_000_000).fill(0).map((_,i)=>{
  return{
    index:i,
    isMagical:i===29_000_000
  }
})

function App1() {
  const [count, setCount] = useState(0)
  const magical=nums.find(i=>i.isMagical===true)

  return (

    <>
      <p>The magical variable is at the index, {magical.index}</p>
       <button onClick={()=>{setCount(count+1)}}>Current Count is {count}</button>
    </>
  )
}

export default App1
