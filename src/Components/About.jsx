import { useEffect, useState } from 'react'
import content_en from "../languages/content_en.json"
import content_es from "../languages/content_es.json"

export default function About() {
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
    return <div></div>
  }
  
  return (
    <div name='about' className="flex justify-center items-center w-full h-full max-md:px-0 px-24 py-60 bg-[#bcd2d0] dark:bg-slate-900">
      <div className="flex flex-col justify-center items-center w-full h-full px-3 gap-y-10">
        <div className="sm:text-right pb-10">
          <p className="text-4xl font-bold inline border-b-4 dark:text-gray-50 border-[#378d86] dark:border-cyan-300">
            {lang.about.title}
          </p>
        </div>
        <div className="flex flex-col gap-y-10 w-full">
          <div className="sm:text-pretty text-4xl font-bold">
            <p className="dark:text-gray-50">
              {lang.about.sub_title[0]} 
              <span className="text-[#378d86] dark:text-cyan-300"> {lang.about.sub_title[1]}</span>
              {lang.about.sub_title[2]}
              <span className="text-[#378d86] dark:text-cyan-300">{lang.about.sub_title[3]}</span>.
            </p>
          </div>
          <div className="text-prettyfont-bold dark:text-gray-50 w-full">
            <p className="mb-4">
              <span>{lang.about.content[0]} </span> 
              <strong className="text-[#378d86] dark:text-cyan-300">{lang.about.content[1]}</strong> 
              <span> {lang.about.content[2]}</span>
              <strong className="text-[#378d86] dark:text-cyan-300">{lang.about.content[3]}</strong>.
            </p>
            <p>
              <span>{lang.about.content[4]}</span> 
              <strong className="text-[#378d86] dark:text-cyan-300">{lang.about.content[5]} </strong> 
              <span>{lang.about.content[6]}</span>
              <strong className="text-[#378d86] dark:text-cyan-300">{lang.about.content[7]}</strong>
              <span>{lang.about.content[8]}</span>
              <strong className="text-[#378d86] dark:text-cyan-300">{lang.about.content[9]}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}