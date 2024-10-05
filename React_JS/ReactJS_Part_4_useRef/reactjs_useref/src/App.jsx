import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import React from 'react'

//useRef can also be use for html objects. See the implementation below.

function App() {

    const btnRef = useRef()

    const [count,setCount]=useState(0)

    return (
        <>
            <button ref={btnRef} onClick={()=>{setCount(count+1)}}>This is count's value {count}</button>
            {/* This is were we are linking the btnRef ref to the button */}

            <button onClick={()=>{btnRef.current.style.display = "none"}}>Change me</button>
            {/* Here we are using the reference button for change. */}
        </>
    )
}

export default App
