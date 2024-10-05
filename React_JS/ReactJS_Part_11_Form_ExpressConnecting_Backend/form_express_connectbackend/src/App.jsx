import { useState } from 'react'
import './App.css'
//Install react hook form
//npm install react-hook-form

//Import libraries
import { useForm } from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()
  
  // const delay = (d)=>{
  //   return new Promise((resolve, reject)=>{
  //     setTimeout(() => {
  //       resolve()
  //     }, d * 1000);
  //   })
  // }

  const onSubmit= async (data) => {
    let r=await fetch("http://localhost:3000/",{method:"POST",headers:{"Content Type":"application/json"},body: JSON.stringify(data)})
    let res=await r.text()
    console.log(data,res)
    // await delay(2)
    // console.log(data)
    // if(data.username !== "shubham"){
    //     setError("myform", {message: "Your form is not in good order because credentials are invalid"})
    // }
    // if(data.username === "rohan"){
    //   setError("blocked", {message: "Sorry this user is blocked"})
    // }
  }

  return (
    <>
      <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder='username' {...register("username",{required:{value:true, message:"This feild is compulsory"},minLength:{value:5,message:"Length too short"},maxLength:{value:10,message:"Length too large"}})} /> <br />
          {errors.username && <div className='red'>{errors.username.message}</div>}
          <input type="password" placeholder='password' {...register("password",{required:{value:true, message:"This feild is compulsory"},minLength:{value:5,message:"Length too short"},maxLength:{value:10,message:"Length too large"}})} /> <br />
          {errors.password && <div className='red'>{errors.password.message}</div>}
          <input disabled={isSubmitting} type="submit" value="Submit" />
          {errors.myform && <div className='red'>{errors.myform.message}</div>}
          {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App
