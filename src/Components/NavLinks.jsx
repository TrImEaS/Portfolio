import { NavLink } from "react-router-dom"

export default function NavLinks({ style }) {
  return(
    <>
      <NavLink 
        to='/'
        className={` ${({isActive})=> (isActive ? "isActive": undefined)} ${style} 
        dark:hover:text-cyan-500 hover:text-[#378d86]  dark:text-slate-50 duration-300`} 
        >Home
      </NavLink>
      
      <NavLink 
        to='/skills'
        className={` ${({isActive})=> (isActive ? "isActive": undefined)} ${style}
        dark:hover:text-cyan-500 hover:text-[#378d86] dark:text-slate-50 duration-300`} 
        >Skills
      </NavLink>

      <NavLink 
        to='/work'
        className={` ${({isActive})=> (isActive ? "isActive": undefined)} ${style}
        dark:hover:text-cyan-500 hover:text-[#378d86] dark:text-slate-50 duration-300`}
        >Work
      </NavLink>

      <NavLink 
        to='/contact'
        className= {` ${({isActive})=> (isActive ? "isActive": undefined)} ${style} 
        dark:hover:text-cyan-500 hover:text-[#378d86] dark:text-slate-50 duration-300`} 
        >Contact
      </NavLink>

    </>
  )
}