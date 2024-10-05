//1.In a react app every component we make is a function. Below you the default syntax that is to be followed while creating a react app. React is a library. 

//2.Libraries and frameworkds are different. Libraries in general target specific functionality of an app while the frameworks target every aspect of creating an app.

// function App() {

//   return (
//     <>
      
//     </>
//   )
// }

// export default App

//3.Lets understand the working scheme we are going to follow with react.js. In general html we creating everything present in page in the same docs. The navbar, mainsection, footer all are there in the same docs. With react js, we can have a components folder and all these components(navbar, mainsection,) can be seperately created, and stored in this folder. We can have, say combining jsx file like, App.jsx. In this file we will first import the components, as you can see below and then use in the document with the syntax "<"Name Of Component"/>" which also you can see below.

//4.Another thing to talk here is that in React that every thing is a function. Wheather its the App.jsx file or the components in components folder. So when in the document below, we are writing <"Name of component"/> we are simply calling the function, that in tern that function will return the required html into this main App.jsx file which can also be parsed as html file in the browser.

//5.Note, in the general working, App.jsx is the calling function to all other components.

//6.Since the sturcture is function like, there is concept of argument and parameter too. This is done via something called props. See the implementation below. 

//7."<Card title="Card 1" subtitle="Enter Data In Card 1"/>". We in this code are calling the card function that will return the card html. Now the code has two arguments being passed to the card html, title and subtitle. Now go to Card.jsx file to see how these arguments are recieved and processed.

import Navbar from "./components/Navbar" 
import Footer from "./components/Footer"
import Card from "./components/Card"

function App() {

  return (
    <>
      <Navbar/> 
      <Footer/>
      <div className="cards">
        <Card title="Card 1" subtitle="Enter Data In Card 1"/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </>
  )
}

export default App
