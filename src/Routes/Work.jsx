import React from 'react'
import WorkCard from '../Components/WorkCard'
import LiquidsProject from '../assets/projects/liquids-project.png'
import OldPortfolioProject from '../assets/projects/old-portfolio.png'
import { NavLink } from "react-router-dom"
import { HiArrowNarrowLeft } from 'react-icons/hi'

export default function Work() {
  return (
      <section name='projects' className='w-full h-full flex flex-col px-8 justify-center items-center'>
        <div className='max-w-[840px] mx-auto p-4 flex flex-col justify-center w-ful h-full'>

          <header className='pb-8'>
            <p className='text-4xl inline border-b-4 dark:text-gray-50 dark:border-cyan-300 border-[#378d86]'>
              Work
            </p>
            <p className=' dark:text-gray-300 py-6 text-pretty'>
              // Check out some of my recent work
            </p>
          </header>

          <section className='flex flex-col gap-y-20'>
            <article className='grid sm:grid-cols-2 gap-4 border-2 border-black dark:border-white p-2 rounded-lg'>
              <aside>
                <p className='text-4xl text-center text-[#378d86] dark:text-cyan-300 border-black dark:border-white border-b-2 py-3'>'LiquidS'</p>
                <p className='py-6 text-pretty'>
                  This project is created for makes salary receipts and salary books. In this version the administration 
                  team can enter data by data and print an salary receipt
                </p>
              </aside>
              <WorkCard
                text={'LiquidS project'}
                demoDisabled={'disabled'} 
                codeLink={'https://github.com/TrImEaS/RealWorkFiles'} 
                workImg={LiquidsProject}></WorkCard>
            </article>

            <article className='grid sm:grid-cols-2 gap-4 border-2 p-2 rounded-lg border-black dark:border-white'>
              <aside>
                <p className='text-4xl text-center text-[#378d86] dark:text-cyan-300 border-black dark:border-white border-b-2 py-3'>'Old Portfolio'</p>
                <p className='py-6 text-pretty'>
                  This project is created for makes salary receipts and salary books. In this version the administration team can enter data 
                  by data and print an salary receipt
                </p>
              </aside>
              <WorkCard 
                text={'Old porfolio project'}
                demoDisabled={'disabled'} 
                codeLink={'https://github.com/TrImEaS/First-Portfolio'}
                workImg={OldPortfolioProject}></WorkCard>
            </article>
            <div className='flex gap-5 flex-wrap w-full justify-center'>
              <NavLink to='/'>
              <button className='group sm:my-2 flex items-center dark:text-gray-200 border-2 border-black dark:border-slate-50 px-6 py-3 
               hover:bg-[#378d86] dark:hover:bg-cyan-500 hover:border-[#378d86] hover:dark:border-cyan-500 duration-300'> 
                Return to Home
                <span><HiArrowNarrowLeft className='group-hover:scale-[1.4] duration-300 ml-3'></HiArrowNarrowLeft></span>
              </button>
              </NavLink>
            </div>
          </section>

        </div>
      </section>
  )
}