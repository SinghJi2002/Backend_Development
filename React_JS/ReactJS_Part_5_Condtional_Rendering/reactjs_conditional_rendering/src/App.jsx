//We are going to see another of list rendering. This the readObj part and map function will be one rather than being seperate.

import React from 'react'
import { useState } from 'react'

function App() {

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
            Author: "Swetabh Hagwar",
            Genre: "Facts"
        }
    ])

  return (
    <div>
        {
            objList.map((iterator,index)=>{
                return(
                    <div key={index}>
                        <p>{iterator.Title}</p>
                        <p>{iterator.Author}</p>
                        <p>{iterator.Genre}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default App
