import React from "react";

export default function WorkCard({ demoDisabled, codeDisabled, demoLink, codeLink, workImg, text}) {

  return(
      <section 
        style={{backgroundImage: `url(${workImg})`}} 
        className='shadow-lg shadow-[#040c16] group container h-full w-full rounded-md flex justify-center 
        items-center content-div'>
        
        <div className='hidden group-hover:flex text-white h-full w-full flex-col justify-center'>
          <span className='w-full text-center text-2xl font-bold'>
            {text}
          </span>
          
          <div className='pt-8 text-center'>
            <a href={demoLink || '#'}>
              <button 
                className={`text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg 
                ${demoDisabled ? 'bg-slate-600' : 'bg-white hover:bg-cyan-300'}`}
                disabled={demoDisabled}>
                Demo
              </button>
            </a>
            
            <a href={codeLink || '#'}>
              <button className={`hover:bg-cyan-300 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg
                ${codeDisabled ? 'bg-slate-600' : 'bg-white hover:bg-cyan-300'}`}
                disabled={codeDisabled}>
                Code
              </button>
            </a>
          </div>
        </div>

      </section>
  )
}