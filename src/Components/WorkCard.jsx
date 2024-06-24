import { useEffect, useState } from 'react'
import content_en from "../languages/content_en.json"
import content_es from "../languages/content_es.json"

export default function WorkCard({ demoDisabled, codeDisabled, demoLink, codeLink, workImg, text}) {
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

  return(
      <section 
        style={{backgroundImage: `url(${workImg})`, objectFit: 'contain'}} 
        className='shadow-lg shadow-[#040c16] group container h-full w-full rounded-md flex justify-center items-center content-div'>
        
        <div className='hidden group-hover:flex text-white h-full w-full flex-col justify-center'>
          <span className='w-full text-center text-2xl font-bold'>
            {text}
          </span>
          
          <div className='pt-8 text-center'>
            <a target='_blank' href={demoLink || '#'}>
              <button 
                className={`text-center rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg ${demoDisabled ? 'bg-slate-600' : 'bg-white hover:bg-cyan-300'}`}
                disabled={demoDisabled}>
                {lang.work.buttons[0]}
              </button>
            </a>
            
            <a target='_blank' href={codeLink || '#'}>
              <button 
                className={`hover:bg-cyan-300 text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ${codeDisabled ? 'bg-slate-600' : 'bg-white hover:bg-cyan-300'}`}
                disabled={codeDisabled}>
                {lang.work.buttons[1]}
              </button>
            </a>
          </div>
        </div>

      </section>
  )
}