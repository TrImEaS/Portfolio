import React from 'react'
import WorkImg from '../assets/projects/workImg.png'

export default function Work() {

  return (
   <section name='projects' className='w-full md:h-screen text-gray-300 mt-[80px]'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-ful h-full'>
      <header className='pb-8'>
        <p className='text-4xl inline border-b-4 border-cyan-300'>Work</p>
        <p className='text-gray-300 py-6'>// Check out some of my recent work</p>
      </header>

      <article className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <div style={{backgroundImage: `url(${WorkImg})`}} 
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
         
          <div className='opacity-0 group-hover:opacity-100 text-slate-950 duration-300'>
            <span className='text-2xl font-bold tracking-wider'>
            React Js Application
            </span>
            <div className='pt-8 text-center'>
              <a href="/">
                <button disabled className='text-center rounded-lg px-4 py-3 m-2 bg-white disabled:bg-slate-600 text-gray-700 font-bold text-lg'>
                  Demo
                </button>
              </a>
              <a href="/">
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Code
                </button>
              </a>

            </div>
          </div>
        </div>
      </article>

    </div>
   </section>
  )
}