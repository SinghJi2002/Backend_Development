import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Login from './components/Login'
//1. In a web page we generally see, that when we click href links, the page reloads. React on the alternative provides us an approach where we click the href links, and we do reach to pages that those links point to but this time, without reloading the page. This is done via use of react-router-dom library of react.

//2. Routing also provides us the way of designing and hosting multiple pages at a time via giving each page a different route. See Navbar in components folder.
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


//4. Below we have created the router object. This tells the script that when the given paths in the paths attribute are loaded, what all components to load, stored in the elements attribute.

//5. We can pass props from here too. See the demonstration. The fourth route in the router object not only routes use to url but also takes a prop named username. The see Login.jsx to see further implementation.
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/></>
    },
    {
      path: "/about",
      element: <><About/><Navbar/></>
    },
    {
      path: "/contacts",
      element: <><Contact/></>
    },
    {
      path:"/login/:username",
      element:<><Login/></>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

//At last we use the RouteProvider which also we have imported from the react router object, that tells all we have discussed till now to the script.

export default App
