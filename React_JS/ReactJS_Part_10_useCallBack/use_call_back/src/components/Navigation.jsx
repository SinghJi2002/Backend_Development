import React from 'react'
import { memo } from 'react'

//2. Now let see something. Initially the code block below has the console.log method, and p tag element and initially we are only importing adjective. So when Click Counter!! is clicked, rendering happens since state changes, hence the console will show the navbar is rendered again again. To stop this, we use memo. For using memo we simply need to import it. See rerendering wont trigger console log. This is because the rerendering of navigation will take place only when one of its props is changed, something which is ensured by memo. See app.jsx

//4. Now in second case we will recieve both adjective and setAdjective. Now what we see is, although memo is imported, console.log prints continously. This is because in JS on rerendering, everytime a function is treated as a new object hence the consoleing. We can stop this via useCallBack. See App.jsx

function Navigation({value:{adjective,getAdjective}}) {
  console.log("Navbar is rendered")
  return (
    <div>
      <p>My name now is {adjective}</p>
      <button onClick={()=>{getAdjective}}>Click Me!!</button>
    </div>
  )
}

export default Navigation
