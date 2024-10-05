import { useMemo, useState } from 'react'
import './App.css'

//1.First visit App1.jsx. useMemo is a hook that is used to remember a value, such that when rerendering occurs, the calculations required to find the number are not performed, the memorised number is directly rendered. See demonstration.
//General syntax is,
//useMemo(() => first, [second])
const nums = new Array(30_000_000).fill(0).map((_, i) => {
    return {
        index: i,
        isMagical: i === 29_000_000
    }
})

function App1() {
    const [count, setCount] = useState(0)
    const magical=useMemo(() => nums.find(i => i.isMagical === true), [])
    {/* Using useMemo here we are remembering and transferring the data of magical to each render so that function in 'first' is not executed repeatedly. It it will only executed when the value variable stored in 'second' changes its value. */}

    return (

        <>
            <p>The magical variable is at the index, {magical.index}</p>
            <button onClick={() => { setCount(count + 1) }}>Current Count is {count}</button>
        </>
    )
}

export default App1
