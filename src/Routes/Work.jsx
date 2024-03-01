import React from 'react'
import WorkCard from '../Components/WorkCard'
import LiquidsProject from '../assets/projects/liquids.png'
import technologylinePage from '../assets/projects/technologylinepage.png'
import { NavLink } from "react-router-dom"
import { HiArrowNarrowLeft } from 'react-icons/hi'

export default function Work() {
  return (
      <section 
        name='projects' 
        className='w-4/5 h-full flex flex-col justify-center items-center py-20'>
        <div className='flex flex-col h-full gap-y-6 w-full'>
          <header>
            <p className='text-4xl inline border-b-4 dark:text-gray-50 dark:border-cyan-300 border-[#378d86]'>
              Work
            </p>
            <p className=' dark:text-gray-300 py-6 text-pretty'>
              // Check out some of my recent work
            </p>
          </header>

          <section className='flex flex-wrap gap-10 items-center justify-between w-full'>
            <article className='grid sm:grid-cols-2 gap-4 border-2 min-h-[300px] border-black dark:border-white p-2 rounded-lg'>
              <aside>
                <p className='text-4xl text-center text-[#378d86] dark:text-cyan-300 border-black dark:border-white border-b-2 py-3'>
                  'LiquidS (Payroll web-app)'
                </p>
                <p className='py-6 px-4 text-pretty'>
                This is a project that I started for the administration sector of my company which focuses on creating salary receipts, with 
                full control (CRUD) by the admin(s). The front is simply made with React, React-router-dom and tailwind. The backend is made 
                with Node, Express, MVC, and soon a database in Turso. This project is in development...
                </p>
              </aside>
              <div className='min-h-[300px]'>
                <WorkCard
                  text={'LiquidS project'}
                  demoDisabled={'disabled'} 
                  codeLink={'https://github.com/TrImEaS/Liquids-Work-Project'} 
                  workImg={LiquidsProject}
                ></WorkCard>
              </div>
            </article>

            <article className='grid sm:grid-cols-2 gap-4 border-2 p-2 rounded-lg min-h-[300px] border-black dark:border-white'>
              <aside>
                <p className='text-4xl text-center text-[#378d86] dark:text-cyan-300 border-black dark:border-white border-b-2 py-3'>
                  'Technology Line (e-commerce)'
                </p>
                <p className='py-6 px-4 text-pretty'>
                  This is an e-commerce that I am doing for the company and they are currently using it and selling it there.
                  At the moment it is still in development but this first version has already started to be used. It is made with React, 
                  React-router-dom, tailwind, deployed on GoDaddy. Coming soon, backend to perform Admin-Auth and other features
                </p>
              </aside>
              <div className='min-h-[300px]'>
                <WorkCard 
                  text={'Old porfolio project'}
                  demoLink={'https://technologyline.com.ar/'}
                  codeLink={'https://github.com/TrImEaS/Liquids-Work-Project'}
                  workImg={technologylinePage}
                ></WorkCard>
              </div>

            </article>
          </section>

          <div className='flex gap-5 flex-wrap w-full justify-center'>
              <NavLink to='/'>
                <button className='group sm:my-2 flex items-center dark:text-gray-200 border-2 border-black dark:border-slate-50 px-6 py-3 
                hover:bg-[#378d86] dark:hover:bg-cyan-500 hover:border-[#378d86] hover:dark:border-cyan-500 duration-300'> 
                  Return to Home
                  <span>
                    <HiArrowNarrowLeft className='group-hover:scale-[1.4] duration-300 ml-3'/>
                  </span>
                </button>
              </NavLink>
            </div>
        </div>
      </section>
  )
}