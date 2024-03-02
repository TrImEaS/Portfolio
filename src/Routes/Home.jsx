import React from 'react'
import Avatar from '../Components/Avatar/'
import About from '../Components/About'
import SocialIcons from '../Components/SocialIcons'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import { NavLink } from "react-router-dom"


export default function Home() {

  return (
      <section name='home' className='relative w-4/5 flex flex-col p-8 justify-center items-center h-full gap-y-20'>
        <article className='flex flex-col w-full items-center'>
          <div className='flex flex-col gap-y-2'>
            <p className='text-[#378d86] dark:text-cyan-300 text-lg'>
              <strong>Hi, my name is</strong>
            </p>
            
            <h1 className='text-4xl sm:text-5xl font-bold  dark:text-gray-200 text-slate-50'>
              Thomas Rojas
            </h1>

            <h2 className='text-4xl sm:text-5xl font-bold dark:text-[#8892b0] text-gray-800'>
              I'm a Full Stack Developer
            </h2>

            <p className='dark:text-[#8892b0] text-gray-800 py-4 font-bold text-lg text-pretty'>
              I'm a full-stack developer <strong className='text-[#378d86] dark:text-cyan-300'>specializing in building exceptional digital experiences</strong>.
              Currently, i'm focused on building <strong className='text-[#378d86] dark:text-cyan-300'>responsive full-stack web application and SPA</strong>.
            </p>
          </div>
          <div className='flex gap-5 pt-20 flex-wrap justify-center'>
            <NavLink to='/work'>
            <button className='group sm:my-2 flex items-center dark:text-gray-200 border-2 border-black dark:border-slate-50 px-6 py-3 
              hover:bg-[#378d86] dark:hover:bg-cyan-500 hover:border-[#378d86] hover:dark:border-cyan-500 duration-300'>
              View work
              <span><HiArrowNarrowRight className='group-hover:scale-[1.4] duration-300 ml-3'></HiArrowNarrowRight></span>
            </button>
            </NavLink>

            <Link to='about' smooth={true} duration={500}>
            <button className='group sm:my-2 flex items-center dark:text-gray-200 border-2 border-black dark:border-slate-50 px-6 py-3 
              hover:bg-[#378d86] dark:hover:bg-cyan-500 hover:border-[#378d86] hover:dark:border-cyan-500 duration-300'>
                  About Me
              <span><HiArrowNarrowRight className='group-hover:rotate-90 duration-300 ml-3'></HiArrowNarrowRight></span>
              </button>
            </Link>

            <NavLink to='/skills'>
            <button className='group sm:my-2 flex items-center dark:text-gray-200 border-2 border-black dark:border-slate-50 px-6 py-3 
              hover:bg-[#378d86] dark:hover:bg-cyan-500 hover:border-[#378d86] hover:dark:border-cyan-500 duration-300'>
              View Skills
              <span><HiArrowNarrowRight className='group-hover:scale-[1.4] duration-300 ml-3'></HiArrowNarrowRight></span>
            </button>
            </NavLink>
          </div>
          <Avatar/>
        </article> 
        <About/>
        {/* <SocialIcons/> */}
      </section>
  )
}
