import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

//3. Most of the time, the links to different pages are located on the navbar itself, hence we are see demonstation of how using react routing, we can link and move to different pages, without reloading. Firstly we use the NavLink or Link component to create dynamic links. There is to attribute that defines to which route will the button take us to once clicked. Go back to App.jsx.

//What we have done below using the NavLinks could also have been done via using the Link tag. Though, there is an advantage of using NavLinks over Links, that is usage of function via we can implement effects when the specific links are clicked. See in case of contacts

function Navbar() {
    return (
        <div>
            <ul>
                <li><NavLink to="/contacts">Contacts</NavLink></li>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about" className={(e)=>{return e.isActive?"red":""}}>About</NavLink></li>
                <li><NavLink to="/login/:username">Login</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar
