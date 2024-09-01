import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JS from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import GitHub from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import SQL from '../assets/sql.png'
import C from '../assets/c.png'
import Java from '../assets/java.png'
import NextJs from '../assets/nextjsIcon.svg'
import PHP from '../assets/phpLogo.svg'
import { NavLink } from "react-router-dom"
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { useEffect, useState } from 'react'
import content_en from "../languages/content_en.json"
import content_es from "../languages/content_es.json"

export default function Skills() {
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
    <>
      {/* Div for provisional container disappearance fix */}    
      <div name='skills' className='flex flex-col gap-y-20 w-4/5 h-full dark:bg-slate-900 '>
        <section className='max-w-[840px] mx-auto p-4 flex flex-col justify-center w-full h-full px-6'>
          <header>
            <p className='text-4xl inline border-b-4 dark:text-gray-50 dark:border-cyan-300 border-[#378d86]'>
              {lang.skills.title} 
            </p>
            <p className='py-4 dark:text-gray-300'>
              {lang.skills.sub_title}
            </p>
          </header>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-10 gap-y-10 text-center py-8 dark:text-gray-300'>
            <article className='flex flex-col gap-3 hover:scale-110 duration-500'>
              <img className='htmlLogo w-20 mx-auto' src={HTML} alt="HTML icon" />
              <span>HTML</span>
            </article>
            <article className='flex flex-col gap-3 hover:scale-110 duration-500'>
              <img className='cssLogo w-20 mx-auto' src={CSS} alt="CSS icon" />
              <span>CSS</span>
            </article>
            <article className='flex flex-col gap-3 hover:scale-110 duration-500'>
              <img className='jsLogo w-20 mx-auto' src={JS} alt="JavaScript icon" />
              <span>JAVASCRIPT</span>
            </article>
            <article className='flex flex-col gap-3 hover:scale-110 duration-500'>
              <img className='nodeLogo w-20 mx-auto' src={Node} alt="Node icon" />
              <span>NODE JS</span>
            </article>
            <article className='flex flex-col gap-3 hover:scale-110 duration-500'>
              <img className='githubLogo w-20 mx-auto' src={GitHub} alt="GitHub icon" />
              <span>GITHUB</span>
            </article>
            <article className='flex flex-col gap-3 hover:scale-110 duration-500'>
              <img className='mysqlLogo w-20 mx-auto' src={SQL} alt="SLQ icon" />
              <span>MYSQL</span>
            </article>
            <article className='flex flex-col gap-3 hover:scale-110 duration-500'>
              <img className='cLogo w-20 mx-auto' src={C} alt="C icon" />
              <span>C</span>
            </article>
            <article className='flex flex-col gap-3 hover:scale-110 duration-500'>
              <img className='javaLogo w-20 mx-auto' src={Java} alt="Java icon" />
              <span>JAVA</span>
            </article>
            <article className='flex flex-col gap-3 hover:scale-110 duration-500'>
              <img className='reactLogo w-20 mx-auto' src={ReactImg} alt="React icon" />
              <span>REACT</span>
            </article>
            <article className='group flex flex-col gap-3 hover:scale-110 duration-500 group'>
              <img className='tailwindLogo w-20 mx-auto' src={Tailwind} alt="TailWind icon" />
              <span>TAILWIND</span>
            </article>
            <article className='group flex flex-col gap-3 hover:scale-110 duration-500 group'>
              <img className='nextjsLogo w-20 mx-auto' src={NextJs} alt="Next.js icon" />
              <span>NEXT JS</span>
            </article>
            <article className='group flex flex-col gap-3 hover:scale-110 duration-500 group'>
              <img className='phpLogo w-20 mx-auto' src={PHP} alt="Next.js icon" />
              <span>PHP</span>
            </article>
          </div>
        </section>

        <section className='mx-auto flex flex-col justify-center items-center w-full h-full dark:bg-slate-900 
        bg-[#bcd2d0] py-[200px]'>
            <article className='max-w-[840px] w-full h-full px-6'>
              <header>
                <span className='text-4xl inline border-b-4 dark:text-gray-50 border-[#378d86] dark:border-cyan-300'>
                  {lang.study.title}
                </span>
                <p className='dark:text-gray-300 py-10'>
                  <span>{lang.study.content[0]}</span>
                  <strong className='dark:text-cyan-300 text-[#378d86]'>{lang.study.content[1]}</strong>
                  <span> {lang.study.content[2]}</span>
                  <strong className='dark:text-cyan-300 text-[#378d86]'>{lang.study.content[3]}</strong> 
                  <span> {lang.study.content[4]}</span>
                </p>

                <p className='dark:text-gray-300'>
                  <span>{lang.study.content[5]} </span>
                  <strong className='dark:text-cyan-300 text-[#378d86]'>{lang.study.content[6]}</strong>
                </p>
                <p className='py-10 dark:text-gray-300'>
                  <span>{lang.study.content[7]} </span> 
                  <strong className='dark:text-cyan-300 text-[#378d86]'>{lang.study.content[8]}</strong>
                </p>
              </header>
            </article>
          </section>  
          <div className='flex gap-5 flex-wrap w-full justify-center dark:bg-slate-900 bg-[#bcd2d0] pb-9'>
            <NavLink to='/'>
              <button className='group sm:my-2 flex items-center dark:text-gray-200 border-2 border-black dark:border-slate-50 px-6 py-3 
              hover:bg-[#378d86] dark:hover:bg-cyan-500 hover:border-[#378d86] hover:dark:border-cyan-500 duration-300'>
                {lang.skills.button}
                <span><HiArrowNarrowLeft className='group-hover:scale-[1.4] duration-300 ml-3'></HiArrowNarrowLeft></span>
              </button>
            </NavLink>
          </div>    
      </div>
    </>
  )
}