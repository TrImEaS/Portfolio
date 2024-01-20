import React from 'react'
import WorkCard from '../Components/WorkCard'
import LiquidsProject from '../assets/projects/liquids-project.png'
import OldPortfolioProject from '../assets/projects/old-portfolio.png'

export default function Work() {
  return (
      <section name='projects' className='w-full h-full flex flex-col px-8 justify-center items-center text-gray-300 my-[150px]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-ful h-full'>

          <header className='pb-8'>
            <p className='text-4xl inline border-b-4 border-cyan-300'>Work</p>
            <p className='text-gray-300 py-6 text-pretty'>// Check out some of my recent work</p>
          </header>

          <section className='flex flex-col gap-y-20'>
            <article className='grid sm:grid-cols-2 gap-4 border-2 p-2 rounded-lg'>
              <aside>
                <p className='text-4xl text-center text-cyan-300 border-b-2 py-3'>'LiquidS'</p>
                <p className='text-gray-300 py-6 text-pretty'>
                  This project is created for makes salary receipts and salary books. In this version the administration team can enter data by data and print an salary receipt</p>
              </aside>
              <WorkCard
                text={'LiquidS project'}
                demoDisabled={'disabled'} 
                codeLink={'https://github.com/TrImEaS/RealWorkFiles'} 
                workImg={LiquidsProject}></WorkCard>
            </article>

            <article className='grid sm:grid-cols-2 gap-4 border-2 p-2 rounded-lg'>
              <aside>
                <p className='text-4xl text-center text-cyan-300 border-b-2 py-3'>'Old Portfolio'</p>
                <p className='text-gray-300 py-6 text-pretty'>
                  This project is created for makes salary receipts and salary books. In this version the administration team can enter data by data and print an salary receipt
                </p>
              </aside>
              <WorkCard 
                text={'Old porfolio project'}
                demoDisabled={'disabled'} 
                codeLink={'https://github.com/TrImEaS/First-Portfolio'}
                workImg={OldPortfolioProject}></WorkCard>
            </article>
            
          </section>

        </div>
      </section>
  )
}