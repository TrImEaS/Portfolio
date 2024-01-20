import React from "react"
import { useState } from "react"

export default function Avatar() {
  const [lampOn, setLampOn] = useState(true)
  const handleClick = () => setLampOn(!lampOn)

  return (
      <i 
        className={!lampOn 
          ? `my-5 relative css-peeps avatar2 inline-block rounded-full lg:w-[350px] lg:h-[350px] w-[250px] h-[250px] bg-gradient-to-bl from-slate-900 via-slate-800 to-slate-750` 
          : `my-5 relative css-peeps avatar inline-block rounded-full lg:w-[350px] lg:h-[350px] w-[250px] h-[250px] bg-gradient-to-bl from-yellow-100 via-white to-slate-750`}
        href="https://css-peeps.com/" 
        target="_blank">
        <div name='lamp' className={!lampOn 
          ? 'w-4 h-4 rounded-full absolute top-[20px] right-[52px] bg-slate-100 lg:w-5 lg:h-7 lg:top-[40px]' 
          : 'w-4 h-4 rounded-full absolute top-[20px] right-[52px] bg-yellow-400 lg:w-5 lg:h-7 lg:top-[40px]'}>
          <div className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] rounded-br-full rotate-45 absolute top-[-3px] left-[-2px] bg-gray-900"></div>
          <button onClick={handleClick} className="absolute cursor-pointer w-[2px] h-[30px] lg:w-[3px] lg:h-[40px] lg:top-[29px] bg-black top-[16px] 
          left-[6px] rounded-full hover:animate-pulse lg:active:top-[30px] active:top-[18px]"></button>
        </div>
      </i>
  )
}