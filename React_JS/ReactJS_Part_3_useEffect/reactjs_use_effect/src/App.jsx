import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//1.We have already introduced ourselves to states and hooks. The next thing to do look at a few more hooks. Lets then talk about useEffect. The general syntax of use effect is as follows.

// useEffect(() => {
//   first

//   return () => {
//     second
//   }
// }, [third])

//2.Above is the general syntax of useEffect hook. Now next question is what is the use of useEffect hooks?
//It is used to add special effects upon happening of an event.

//3.The general syntax we see above is modifiable. Modified syntaxes are as follows.

/* 
  useEffect(()=>{
    first(Generally contains html you want to happen for certain events)
  })

  //The code above we will executed for each render and re-render.
*/

/*
  useEffect(()=>{
    first(General contains html you want to happen for certain event)
  },[<Name of state for whose change you want the 'first' effect to take place])
  
  The code will be executed only when state changes.
*/

/*
  useEffect(()=>{
    first(General contains html you want to happen for certain event)
  },[])
  
  The code above will be executed, only on the first render.
*/

/*
  useEffect(()=>{
    first(General contains html you want to happen for a certain event)
    return(()=>{
  
    })
  })

  The code in return will be executed when the element in which the useEffect function is present is removed from the maincode.

*/

//4.Ahead we will see the implementation of all these things.

import Navbar from './components/Navbar'

function App() {

  //5.We created the count state.
  const [count, setCount] = useState(0)

  //6.useEffect for change in count state.
  useEffect(()=>{
    alert("Count state was changed")
  },[count])

  //7.One thing to discuss here is, when the react app is lauched, every thing rendered for the first time or the value of the states are being changed, hence, we will see the useEffect prompts happen at the start of each app lauch. 

  //8.One thing to discuss here is that every hook that is created is tested when react app is lauched. View main.jsx file. When the App.jsx file is executed in StrictMode in main.jsx, the hooks are texted twice. Hence when we lauch the app, we see the prompts of useEffect appear twice. This can be fixed via removing the StrictMode tags.

  //9.Now we will use components to see further functionality of useEffect.

  return (
    <>
      <div>
        <Navbar color="red"/>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

//10.Now go and see Navbar.jsx from components for further understanding of use effect. 

export default App
