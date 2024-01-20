import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa'
export default function SocialIcons() {
  return (
          <div className='relative lg:flex lg:top-[35%] flex-col left-0 top-[65%]'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a 
                href="https://www.linkedin.com/in/thomas-rojas-2a7780207/" 
                className='flex justify-between items-center w-full text-white px-4' >LinkedIn<FaLinkedin size={30}></FaLinkedin>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-500'>
              <a 
                href="https://wa.me/541135790133" 
                className='flex justify-between items-center w-full text-white px-4' >WhatsApp<FaWhatsapp size={30}></FaWhatsapp>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 
              bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]'>
              <a 
                href="https://www.instagram.com/_trimeas_/" 
                className='flex justify-between items-center w-full text-white px-4' >Instagram<FaInstagram size={30}></FaInstagram>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a 
                href="https://github.com/TrImEaS" 
                className='flex justify-between items-center w-full text-white px-4' >GitHub<FaGithub size={30}></FaGithub>
              </a>
            </li>
          </ul>
        </div>  
  )
} 