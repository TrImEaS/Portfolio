import React from 'react'
import { useState } from 'react'
import NavLinks from './NavLinks'
import Logo from "./Logo"
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Nav() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <>
    <nav className='z-50 w-full fixed dark:bg-slate-900 bg-[#bcd2d0] flex h-[80px] justify-between items-center px-4'>
      <div>
        <Logo></Logo>
      </div>

      {/* Menu */}
      <ul className='hidden md:flex gap-6'>
        <NavLinks style={'px-6'}></NavLinks>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-20'>
        {!nav ? <FaBars></FaBars> : <FaTimes></FaTimes>}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute text-slate-50 bg-slate-500 dark:bg-slate-700 top-0 left-0 w-full h-screen flex flex-col justify-center items-center z-10'}>
        <NavLinks style={'py-6 text-4xl'}></NavLinks>
      </ul> 
    </nav>
    </>
  )
}
