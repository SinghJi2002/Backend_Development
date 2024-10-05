import React from 'react'
import Logo from '../assets/logo.png'

function Navigation() {
  return (
    <div className='flex flex-row justify-between items-center bg-white-400 pr-5  z-10'>
      <img src={Logo} alt="Logo-Image" className='w-12'/>
      <li className=' list-none flex flex-row gap-[20px]'>
        <ul className=' text-black hover:cursor-pointer hover:scale-110 transition-all duration-[0.5s]'><a href="/">Home</a></ul>
        <ul className=' text-black hover:cursor-pointer hover:scale-110 transition-all duration-[0.5s]'><a href="/contact">Contact</a></ul>
        <ul className=' text-black hover:cursor-pointer hover:scale-110 transition-all duration-[0.5s]'><a href="/about">About</a></ul>
      </li>
    </div>
  )
}

export default Navigation
