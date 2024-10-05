import { useState } from 'react'
// import './App.css'


//Below we will see how to render lists via react.
import React from 'react'

function App2() {
    //The state below is a list of objects.
    const [objList, changeList] = useState([
        {
            Title: "Harry Potter",
            Author: "JK Rowling",
            Genre: "Magic"
        },
        {
            Title: "Mahabharat",
            Author: "Vedvyasa",
            Genre: "Epic"
        },
        {
            Title: "Ruddest Book Ever",
            Author: "Swetabh Gangwar",
            Genre: "Facts"
        }
    ])

    //This function below is to be called to read the list of objects. It will take one object sent to it via objList prop, and display its title, author and genre.

    const ReadObj=(({obj})=>{
        return(
            <div>
            <p>{obj.Title}</p>
            <p>{obj.Author}</p>
            <p>{obj.Genre}</p>
            </div>
        )
    })

    return (
        <div>
            {
            //This is the main function that will send readObj function object to read from a list of objects. For this purpose specifically we use, map.
            
            objList.map((iterator,index)=>{
                //Calling objRead function
                return <ReadObj key={index} obj={iterator}/>//Iterator here is the actual object and key is used and is compulsory to for each object of the list to be rendered.
            })
            }
        </div>
    )
}

export default App2
