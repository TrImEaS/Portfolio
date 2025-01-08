import WorkCard from '../Components/WorkCard'
import LiquidsProject from '../assets/projects/liquids.png'
import QRGen from '../assets/projects/qrgen.png'
import menu_card from '../assets/projects/menu-card.png'
import technologylinePage from '../assets/projects/technologylinepage.png'
import gestions from '../assets/projects/gestions.png'
import flyer from '../assets/projects/flyer.png'
import content_en from "../languages/content_en.json"
import content_es from "../languages/content_es.json"
import { NavLink } from "react-router-dom"
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { useEffect, useState } from 'react'

export default function Work() {
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

  return (
      <section 
        name='projects' 
        className='w-4/5 h-full flex flex-col justify-center items-center py-20'>
        <div className='flex flex-col h-full gap-y-6 w-full'>
          <header>
            <p className='text-4xl inline border-b-4 dark:text-gray-50 dark:border-cyan-300 border-[#378d86]'>
              {lang.work.title}
            </p>
            <p className=' dark:text-gray-300 text-gray-700 py-6 text-pretty'>
              {lang.work.sub_title}
            </p>
          </header>

          <section className='flex flex-col gap-10 items-center justify-between w-full'>
            {/* GestionS */}
            <article className='max-w-[1200px] grid sm:grid-cols-2 gap-4 border-[3px] p-2 rounded-lg min-h-[300px] border-[#378d86] dark:border-white'>
              <aside>
                <p className='text-4xl text-center text-[#378d86] dark:text-cyan-300 border-[#378d86] dark:border-white border-b-2 py-3'>
                  {lang.work.proyect_5.title}
                </p>
                <p className='py-6 px-4 text-pretty dark:text-white text-gray-700'>
                  {lang.work.proyect_5.description}
                </p>
              </aside>

              <div className='min-h-[300px]'>
                <WorkCard 
                  text={'GestionS'}
                  demoDisabled={'disabled'}
                  codeDisabled={'disabled'}
                  workImg={gestions}
                ></WorkCard>
              </div>
            </article>

            {/* Technology Line - Ecommerce */}
            <article className='max-w-[1200px] grid sm:grid-cols-2 gap-4 border-[3px] p-2 rounded-lg min-h-[300px] border-[#378d86] dark:border-white'>
              <aside>
                <p className='text-4xl text-center text-[#378d86] dark:text-cyan-300 border-[#378d86] dark:border-white border-b-2 py-3'>
                  {lang.work.proyect_2.title}
                </p>
                <p className='py-6 px-4 text-pretty dark:text-white text-gray-700'>
                  {lang.work.proyect_2.description}
                </p>
              </aside>

              <div className='min-h-[300px]'>
                <WorkCard 
                  text={'Technology Line - Ecommerce'}
                  demoLink={'https://technologyline.com.ar/'}
                  codeLink={'https://github.com/TrImEaS/Liquids-Work-Project'}
                  workImg={technologylinePage}
                ></WorkCard>
              </div>
            </article>

            {/* Flyer (GestionS) */}
            <article className='max-w-[1200px] grid sm:grid-cols-2 gap-4 border-[3px] p-2 rounded-lg min-h-[300px] border-[#378d86] dark:border-white'>
              <aside>
                <p className='text-4xl text-center text-[#378d86] dark:text-cyan-300 border-[#378d86] dark:border-white border-b-2 py-3'>
                  {lang.work.proyect_6.title}
                </p>
                <p className='py-6 px-4 text-pretty dark:text-white text-gray-700'>
                  {lang.work.proyect_6.description}
                </p>
              </aside>

              <div className='min-h-[300px]'>
                <WorkCard 
                  text={'Flyer (GestionS)'}
                  demoLink={'https://outletgolosinas.com.ar/'}
                  codeLink={'https://github.com/TrImEaS/GestionS'}
                  workImg={flyer}
                ></WorkCard>
              </div>
            </article>
            
            {/* Menu_Card */}
            <article className='max-w-[1200px] grid sm:grid-cols-2 gap-4 border-[3px] min-h-[300px] w-full border-[#378d86] dark:border-white p-2 rounded-lg'>
              <aside>
                <p className='text-4xl text-center text-[#378d86] dark:text-cyan-300 border-[#378d86] dark:border-white border-b-2 py-3'>
                  {lang.work.proyect_4.title}
                </p>
                <p className='py-6 px-4 text-pretty dark:text-white text-gray-700'>
                  {lang.work.proyect_4.description}
                </p>
              </aside>

              <div className='min-h-[300px]'>
                <WorkCard
                  text={'Menu Card'}
                  demoLink={'https://menu-card-kappa.vercel.app/'} 
                  codeLink={'https://github.com/TrImEaS-Work/Menu-Card'} 
                  workImg={menu_card}
                ></WorkCard>
              </div>
            </article>

            {/* QR Gen */}
            <article className='max-w-[1200px] grid sm:grid-cols-2 gap-4 border-[3px] min-h-[300px] border-[#378d86] dark:border-white p-2 rounded-lg'>
              <aside>
                <p className='text-4xl text-center text-[#378d86] dark:text-cyan-300 border-[#378d86] dark:border-white border-b-2 py-3'>
                  {lang.work.proyect_1.title}
                </p>
                <p className='py-6 px-4 text-pretty dark:text-white text-gray-700'>
                  {lang.work.proyect_1.description}
                </p>
              </aside>

              <div className='min-h-[300px]'>
                <WorkCard
                  text={'QR Gen project'}
                  demoDisabled={'disabled'} 
                  codeLink={'https://github.com/TrImEaS/QRGEN-API'} 
                  workImg={QRGen}
                ></WorkCard>
              </div>
            </article>

            {/* LiquidS */}
            {/* <article className='max-w-[1200px] grid sm:grid-cols-2 gap-4 border-2 min-h-[300px] border-[#378d86] dark:border-white p-2 rounded-lg'>
              <aside>
                <p className='text-4xl text-center text-[#378d86] dark:text-cyan-300 border-black dark:border-white border-b-2 py-3'>
                  {lang.work.proyect_3.title}
                </p>
                <p className='py-6 px-4 text-pretty dark:text-white text-gray-700'>
                  {lang.work.proyect_3.description}
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
            </article> */}
          </section>

          <div className='flex gap-5 flex-wrap w-full justify-center'>
              <NavLink to='/'>
                <button className='group sm:my-2 flex items-center dark:text-gray-200 border-2 border-black dark:border-slate-50 px-6 py-3 
                hover:bg-[#378d86] dark:hover:bg-cyan-500 hover:border-[#378d86] hover:dark:border-cyan-500 duration-300'> 
                  {lang.work.buttons[2]}
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