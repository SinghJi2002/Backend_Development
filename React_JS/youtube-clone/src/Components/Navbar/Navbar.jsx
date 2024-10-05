import React from 'react'
import './Navbar.css'
import menu from '../../assets/menu.png'
import Logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import voice from '../../assets/voice-search.png'
import upload from '../../assets/upload.png'
import more from '../../assets/more.png'
import notification from '../../assets/notification.png'
import user_profile from '../../assets/user_profile.jpg'
import { Link } from 'react-router-dom'

const Navbar = ({sidebar,setSidebar}) => {
  return (
    <div className='nav-bar'>
        <div className='nav-main'>
            <img src={menu} alt="" className='menu' onClick={()=>setSidebar(!sidebar)}/>
            <Link to='/'><img src={Logo} alt="logo" className='logo'/></Link>
        </div>

        <div className='search-div'>
            <input type="text" className='search-bar'/>
            <button className='search-button'>
                <img src={search} alt="" className='search-pic'/>
            </button>
            <button className='voice-search'>
                <img src={voice} alt="" className='voice-pic'/>
            </button>
        </div>

        <div className='nav-options'>
            <button className='np-buttons'>
                <img src={upload} alt="" className='upload'/>    
            </button>
            <button className='np-buttons'>
                <img src={more} alt="" className='more'/>
            </button>
            <button className='np-buttons'>
                <img src={notification} alt="" className='notification'/>
            </button>
            <img src={user_profile} alt="" className='np-buttons'/>
        </div>
    </div>
  )
}

export default Navbar
