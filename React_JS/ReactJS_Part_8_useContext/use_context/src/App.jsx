import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import { buttonContext } from './context/context'

//1. Assume we are working on a project, where we have app.jsx as main page. Now this jsx file has many components, say one of them is navigation. Now say in navigation we have a button component. And lets say button component has a text component. If thats understood, lets say there is a state declared in the main app file, and we want to use it in text component. The general process for that will be, to prop this state from app to navigation, then prop it from navigation to button and then prop it from button to text component. This is demonstrated in the other vite project no_context. We have performed this implementation in no_use_context folder. But as understandable this is a heptic method, and better way would be to send the prop directly from App to text component. This can be done using context API. See further demonstration.

//2. So how we do it? Create context folder and create the context.js. Create the context using createContext in this file. Import it here. Now use the instance exported in context.js and enclose code in return like we have did while exporting whatever you want the other components to access. See the buttons and text component.

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <buttonContext.Provider value={{count,setCount}}>
        <Navigation/>
      </buttonContext.Provider>
    </>
  )
}

export default App
