import { useState } from 'react'
import './App.css'

//Below code is an example of conditional rendering. Here there are two buttons, one which is always visible, the other is visible only when the state of the button that is always visible is true. The always visible button has the state called btnToggle which when clicked changes the state.

//The other button we see is in ejs script. The script performs and on 2 objects, the btnToggle state and button that is to be visible when toggle is true. The html will always be true, while btnToggle state changes.

function App1() {
  const [btnToggle, toggled] = useState(false)


  return (
    <>
      <button onClick={()=>{
        toggled(!btnToggle)
      }}> {btnToggle?"Toggle Button. Current toggle is true.":"Toggle Button. Current toggle is false."}  </button>

      {btnToggle && <button>I am visible when toggle button is true</button>}

      {/* Alternate syntax can be */}

      {btnToggle?<button>I use ternary operatore</button>:""}
    </>
  )
}

export default App1
