import React from 'react'
//To use the prop sent from router, we need to import useParams.
import { useParams } from 'react-router-dom'

function login() {
    //We will simple access username prop from use params.
    const params=useParams()
  return (
    <div>
        I am user {params.username}
    </div>
  )
}

export default login
