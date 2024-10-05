import { useState } from 'react'
import './App.css'

function App() {

  //1.We have already seen the event handling functionality in case of JS. For react we have already handled the onClick event before. So the topic of event handling is not new. Here we are going to see further examples of event handling.

  //2.Below we have the count state. What we want is on the render, when button linked to the state is clicked, it changes its value. See below is application.
  const [count, setCount] = useState(0)

  //3.Now lets take about another eventHandler, onMouseOver. This will perform the requested action when targets element is hovered. See below the application.

  //4.Next we are going to play with text boxes. Below we are going to create a state. This state will hold certain string entered, initially from our end. Though further, when the text box will be hosted, whatever will be entered in the texted will be stored and saved by the state accross the reders. See below the application.
  const [text,changeText] = useState("")

  //5. Now lets keep working on text boxes, but with a state of different kind. We will have a state that will contain a object.
  const [form, changeForm]=useState({email:"",password:""})

  //5.2 Function for handing onChange event.
  const onChangeForForms=(e)=>{
    changeForm({...form, [e.target.name]: e.target.value})
    //I would like to explain what is happening above. '..form' argument in the changeForm function is just expanding the given, objects, in the form state. Whenever, any form's text boxes are clicked we see that, e load the data of the object that triggered the event. So say email box, triggered the event handler, in that case we will see that, via the command "[e.target.name]:e.target.value" we are accessing the html component with the name email, and are chaning its value.
  }


  return (
    <>
      {/*2.1 onClick event*/}
      <button onClick={()=>{setCount(count+1)}}>Click Me</button>
      <p>The current count is {count}</p>

      {/* 3.1 */}
      <textarea name="textarea" rows={10} cols={5} onMouseOver={()=>{alert("I am on")}}>Enter Text</textarea><br />

      {/*4.1 Now if we go with the syntax ahead, we will see that, in the html render we are not able to enter any thing into the text. We fix this via the onChange event handler. */}
      {/* <input type="text" value={text} /> */}
      <input type="text" value={text} onChange={(e)=>{changeText(e.target.value)}}/>
      {/*4.2 What happend above we use the onChange event handler. In this we created a function which called the 'changeText' function, which changes the text via the command, 'e.target.value' */} <br/>

      {/*5.1 Below is pretty much the same syntax as the previous textbox, its just that, here we are going to use the external function for handling onChangeEvent */}
      <input type="text" name='email' value={form.email} onChange={onChangeForForms}/>
      <input type="text" name="password" value={form.password} onChange={onChangeForForms} />
    </>
  )
}
//6. After all the discussion we have had above, there is one important thing that we need to discuss. All the function that are triggered for event handlers are of async nature, hence when we test them, let say, we put a consolo.log(e.target.value) at the end of 'onChangeForForms' we see that it constantly misses the recently entered letter hence always runs a letter behind in the console.

//7.On more thing to discuss above is this,
//<input type="text" name='email' value={form.email?form.email:"" } onChange={handleChange} />
//<input type="text" name='phone' value={form.phone?form.phone:"" } onChange={handleChange} /> 
//Comparing to 5.1 we have made small changes to this. This will check if the value for the objects are defined or not.
export default App
