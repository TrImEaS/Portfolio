import React from "react"
import { useState, useEffect, useRef } from "react"
import { NavLink } from 'react-router-dom'
import { FaMoon, FaSun } from "react-icons/fa"

export default function Logo() {
  const [darkMode, setDarkMode] = useState(false)
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const [isMenuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const userThemePreference = localStorage.getItem('theme')
    setDarkMode(userThemePreference)
    
    document.addEventListener('click', handleClickOutside)
    return () => { document.removeEventListener('click', handleClickOutside) }

  }, [])

  const handleContextMenu = (event) => {
    event.preventDefault()
    setMenuPosition({ top: event.pageY, left: event.pageX })
    setMenuOpen(true);
  }

  const handleCloseMenu = () => {
    setMenuOpen(false)
  }

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      handleCloseMenu()
    }
  }

  const toggleDarkMode = () => setDarkMode((prevDarkMode) => !prevDarkMode)
  document.documentElement.classList.toggle('dark', darkMode)

  return (
    <>
    <section className='flex gap-6'>
      <div className='group w-8 h-8 bg-transparent rounded-full dark:border-white border-black border-solid border'>
        <div className='group w-9 h-8 bg-transparent rounded-full dark:border-white border-black border-solid border'>
          <NavLink 
            to='/' 
            className='flex items-center justify-center dark:text-white text-xl group-hover:animate-bounce'
            onContextMenu={handleContextMenu}
            >T
          </NavLink>
        </div>
      </div>

      {isMenuOpen && (
         <div 
         className='px-5 py-3 absolute border rounded-sm bg-slate-900'
         style={{ top: menuPosition.top, left: menuPosition.left }}
         onClick={handleCloseMenu}
         ref={menuRef}
       >
         {/* Contenido del menú */}
         <a href="https://github.com/TrImEaS/trimeas.github.io">See portfolio code</a>
         {/* Agrega más elementos según sea necesario */}
       </div>
      )}

      <button onClick={toggleDarkMode}>{
        !darkMode 
        ? <FaMoon className='hover:text-slate-50 text-slate-950 text-3xl mt-0.5 hover:scale-105 duration-200'></FaMoon> 
        : <FaSun className='text-slate-50 hover:text-slate-950 text-3xl mt-0.5 hover:scale-105 duration-200'></FaSun>
       
      }</button>
    </section>
    </>
  )
}