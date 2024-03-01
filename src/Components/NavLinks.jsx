import { NavLink, useLocation } from "react-router-dom"

export default function NavLinks({ style }) {
  const location = useLocation();

  const isNavLinkActive = (path) => { return location.pathname === path }
  return(
    <>
      <NavLink 
        to='/'
        className={` ${location.pathname === '/' ? 'isActive' : ''} ${style} 
        dark:hover:text-cyan-500 hover:text-[#378d86]  dark:text-slate-50 duration-300`}>
        Home
      </NavLink>
      
      <NavLink 
        to='/skills'
        className={` ${location.pathname === '/skills' ? 'isActive' : ''} ${style} 
        dark:hover:text-cyan-500 hover:text-[#378d86]  dark:text-slate-50 duration-300`}>
        Skills
      </NavLink>

      <NavLink 
        to='/work'
        className={` ${location.pathname === '/work' ? 'isActive' : ''} ${style} 
        dark:hover:text-cyan-500 hover:text-[#378d86]  dark:text-slate-50 duration-300`}>
        Work
      </NavLink>

      <NavLink 
        to='/contact'
        className={` ${location.pathname === '/contact' ? 'isActive' : ''} ${style} 
        dark:hover:text-cyan-500 hover:text-[#378d86]  dark:text-slate-50 duration-300`}>
        Contact
      </NavLink>

    </>
  )
}