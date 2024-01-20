import React from "react";

export default function WorkCard({ demoDisabled, codeDisabled, demoLink, codeLink, workImg }) {

  return(
      <div style={{backgroundImage: `url(${workImg})`}} 
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center 
        items-center mx-auto content-div'>
        
        <div className='opacity-0 group-hover:opacity-100 text-slate-950 duration-300'>
          <span className='text-2xl font-bold tracking-wider'>
            React Js Application
          </span>
          <div className='pt-8 text-center'>
            <a href={demoLink || '#'}>
              <button 
                className={`text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg
                ${demoDisabled ? 'bg-slate-600' : 'bg-white'}`}
                disabled={demoDisabled}>
                Demo
              </button>
            </a>
            <a href={codeLink || '#'}>
              <button className={`text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg
                ${codeDisabled ? 'bg-slate-600' : '*:bg-white'}`}
                disabled={codeDisabled}>
                Code
              </button>
            </a>
          </div>
        </div>
      </div>
  )
}