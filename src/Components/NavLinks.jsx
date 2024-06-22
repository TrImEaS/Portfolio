import { NavLink, useLocation } from "react-router-dom"
import { useEffect, useState } from 'react'
import content_en from "../languages/content_en.json"
import content_es from "../languages/content_es.json"

export default function NavLinks({ style }) {
  const location = useLocation();
  const [lang, setLang] = useState(null)
  const [load, setLoad] = useState(true)

  useEffect(()=> {
    const actualLang = navigator.language || navigator.userLanguage 

    if(actualLang.includes('es')){ 
      setLang(content_es)
      setLoad(false)
    }
    else {
      setLang(content_en)
      setLoad(false)
    }
  }, [])

  if(load){
    return <div>Loading...</div>
  }

  return(
    <>
      <NavLink 
        to='/'
        className={` ${location.pathname === '/' ? 'isActive' : ''} ${style} 
        dark:hover:text-cyan-500 hover:text-[#378d86]  dark:text-slate-50 duration-300`}>
        {lang.nav[0]}
      </NavLink>
      
      <NavLink 
        to='/skills'
        className={` ${location.pathname === '/skills' ? 'isActive' : ''} ${style} 
        dark:hover:text-cyan-500 hover:text-[#378d86]  dark:text-slate-50 duration-300`}>
        {lang.nav[1]}
      </NavLink>

      <NavLink 
        to='/work'
        className={` ${location.pathname === '/work' ? 'isActive' : ''} ${style} 
        dark:hover:text-cyan-500 hover:text-[#378d86]  dark:text-slate-50 duration-300`}>
        {lang.nav[2]}
      </NavLink>

      <NavLink 
        to='/contact'
        className={` ${location.pathname === '/contact' ? 'isActive' : ''} ${style} 
        dark:hover:text-cyan-500 hover:text-[#378d86]  dark:text-slate-50 duration-300`}>
        {lang.nav[3]}
      </NavLink>

    </>
  )
}