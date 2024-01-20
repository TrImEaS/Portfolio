import React from 'react'
import Avatar from '../Components/Avatar/'
import About from '../Components/About'
import { HiArrowNarrowRight } from 'react-icons/hi'

export default function Home() {

  return (
    <>
      <div className='w-full flex flex-col px-8 justify-center items-center h-screen'>
        <div>
          <p className='text-cyan-300 dark:text-cyan-300 text-lg'>
            <strong>Hi, my name is</strong>
          </p>
          
          <h1 className='text-4xl sm:text-7xl font-bold dark:text-gray-200 text-gray-50'>
            Thomas Rojas
          </h1>

          <h2 className='text-4xl sm:text-7xl font-bold dark:text-[#8892b0] text-gray-800'>
            I'm a Full Stack Developer
          </h2>

          <p className='dark:text-[#8892b0] text-gray-800 py-4 max-w-[700px] font-bold text-lg text-pretty'>
            I'm a full-stack developer <strong className='text-cyan-300'>specializing in building exceptional digital experiences</strong>.
            Currently, i'm focused on building <strong className='text-cyan-300'>responsive full-stack web application and SPA</strong>.
          </p>

          <div className='flex gap-5 flex-wrap justify-center sm:justify-start'>
            <button className='text-gray-50 group dark:text-gray-200 border-2 border-gray-50 dark:border-slate-50 px-5 py-3 
              sm:my-2 flex items-center hover:bg-cyan-500 hover:border-cyan-500 hover:dark:border-cyan-500 duration-300'>
              View work
              <span><HiArrowNarrowRight className='group-hover:scale-[1.4] duration-300 ml-3'></HiArrowNarrowRight></span>
            </button>
            <button className='text-gray-50 group dark:text-gray-200 border-2 border-gray-50 dark:border-slate-50 px-6 py-3 
              sm:my-2 flex items-center hover:bg-cyan-500 hover:border-cyan-500 hover:dark:border-cyan-500 duration-300'>
              About me
              <span><HiArrowNarrowRight className='group-hover:rotate-90 duration-300 ml-3'></HiArrowNarrowRight></span>
            </button>
            <button className='text-gray-50 group dark:text-gray-200 border-2 border-gray-50 dark:border-slate-50 px-6 py-3 
              sm:my-2 flex items-center hover:bg-cyan-500 hover:border-cyan-500 hover:dark:border-cyan-500 duration-300'>
              View Skills
              <span><HiArrowNarrowRight className='group-hover:scale-[1.4] duration-300 ml-3'></HiArrowNarrowRight></span>
            </button>
          </div>
        </div> 
        <Avatar></Avatar>
      </div>
      <About></About>
    </>
  )
}
