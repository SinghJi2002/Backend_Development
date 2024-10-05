import React, { useEffect } from 'react'

function Navbar(props) {

    //To be executed on every render
    useEffect(() => {
      alert("I will be executed on every render")
    })
    
    //To be executed on only first render
    useEffect(()=>{
        alert("I will be executed on the first render only")
    },[])

    //To be executed only when a certain event happens.
    useEffect(()=>{
        alert("I will be executed when the color changes")
    },)

    //To be executed only when the navbar is truncated from app.
    useEffect(()=>{
        return(()=>{
            alert("I will be executed only when trucation happens")
        })
    },[])

  return (
    <div>
        <p>This is a navbar. The color of the navbar is {props.color}</p>
    </div>
  )
}

export default Navbar
