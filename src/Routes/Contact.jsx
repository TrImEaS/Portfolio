import { useEffect, useState } from 'react'
import content_en from "../languages/content_en.json"
import content_es from "../languages/content_es.json"

export default function Contact() {
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
    <section name='contact' className='w-4/5 h-full min-h-screen dark:bg-slate-900
    flex justify-center items-center p-4'>
      <form 
        method="POST" 
        action="https://getform.io/f/3ca3d9db-d6ea-445b-863d-1d78e596c2c2"
        className='flex flex-col max-w-[600px] h-full w-full'>
      <div className='pb-8'>
        <p className='text-4xl inline border-b-4 dark:text-gray-50 dark:border-cyan-300 border-[#378d86]'>
          {lang.contact.title}
        </p>
        <p className='py-4'>
          {lang.contact.sub_title}
        </p>
      </div>
      <input 
        className='dark:bg-[#ccd6f6] p-2 rounded-md' 
        type="text" 
        placeholder={lang.contact.inputs_placeholders[0]}
        name='name'/>
      <input 
        className='my-4 p-2 dark:bg-[#ccd6f6] rounded-md' 
        type="email" 
        placeholder={lang.contact.inputs_placeholders[1]} 
        name='email'/>
      <textarea 
        className='dark:bg-[#ccd6f6] p-2 rounded-md' 
        name="message" 
        rows="10"
      ></textarea>
      <button className='border-2 dark:hover:bg-cyan-500 dark:hover:border-cyan-500 hover:bg-[#378d86] hover:border-[#378d86] dark:border-white border-black px-4 py-3 my-8 mx-auto flex items-center rounded'>
        {lang.contact.button}
      </button>
      </form>
    </section>
  )
}