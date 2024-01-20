import React from "react"
import { useState, useEffect } from "react"
import { NavLink } from 'react-router-dom'
import { FaMoon, FaSun } from "react-icons/fa"

export default function Logo() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const userThemePreference = localStorage.getItem('theme')
    setDarkMode(userThemePreference)
  }, [])

  const toggleDarkMode = () => setDarkMode((prevDarkMode) => !prevDarkMode)
  document.documentElement.classList.toggle('dark', darkMode);

  return (
    <>
    <section className='flex gap-6'>
      <div className='w-8 h-8 bg-transparent rounded-full border-white border-solid border hover:animate-bounce'>
        <div className='w-9 h-8 bg-transparent rounded-full border-white border-solid border'>
          <NavLink 
            to='/' 
            className='flex items-center justify-center text-white text-xl'
            >T
          </NavLink>
        </div>
      </div>

      <button onClick={toggleDarkMode}>{
        !darkMode 
        ? <FaMoon className='text-slate-50 hover:text-slate-950 text-3xl mt-0.5 hover:scale-105 duration-200'></FaMoon> 
        : <FaSun className='text-slate-50 hover:text-slate-950 text-3xl mt-0.5 hover:scale-105 duration-200'></FaSun>
       
      }</button>
    </section>
    </>
  )
}