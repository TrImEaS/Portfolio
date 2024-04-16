import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa'

export default function SocialIcons() {
  return (
    <section className='fixed flex left-0 bottom-[20%] max-sm:left-[25%] max-sm:bottom-0'>
      <ul className="flex flex-col max-sm:flex-row w-full">
        <li className='flex justify-between items-center duration-300 bg-blue-600 
        sm:w-[160px] sm:h-[60px] sm:ml-[-100px] sm:hover:ml-[-10px] 
        max-sm:h-[160px] max-sm:w-[60px] max-sm:mb-[-90px] max-sm:hover:mt-[-90px]'>
          <a 
            href="https://www.linkedin.com/in/thomas-rojas-2a7780207/" 
            className='flex justify-between items-center w-full text-white px-4 max-sm:flex-col max-sm:gap-10'>
            <FaLinkedin className='sm:hidden' size={30}/>
            <span className="max-sm:rotate-90">LinkedIn</span>
            <FaLinkedin className='max-sm:hidden' size={30}/>
          </a>
        </li>

        <li className='flex justify-between items-center duration-300 bg-green-500
        w-[160px] h-[60px] sm:ml-[-100px] sm:hover:ml-[-10px]  
        max-sm:h-[160px] max-sm:w-[60px] max-sm:mb-[-90px] max-sm:hover:mt-[-90px]'>
          <a 
            href="https://wa.me/541135790133" 
            className='flex justify-between items-center w-full text-white px-4 max-sm:flex-col max-sm:gap-10'>
            <FaWhatsapp className='sm:hidden' size={30}/>
            <span className="max-sm:rotate-90">WhatsApp</span>
            <FaWhatsapp className='max-sm:hidden' size={30}/>
          </a>
        </li>

        <li className='flex justify-between items-center duration-300 bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]
        w-[160px] h-[60px] sm:ml-[-100px] sm:hover:ml-[-10px]
        max-sm:h-[160px] max-sm:w-[60px] max-sm:mb-[-90px] max-sm:hover:mt-[-90px]'>
          <a 
            href="https://www.instagram.com/_trimeas_/" 
            className='flex justify-between items-center w-full text-white px-4 max-sm:flex-col max-sm:gap-10'>
            <FaInstagram className='sm:hidden' size={30}/>
            <span className="max-sm:rotate-90">Instagram</span>
            <FaInstagram className='max-sm:hidden' size={30}/>
          </a>
        </li>

        <li className='flex justify-between items-center duration-300 bg-[#333333] 
        w-[160px] h-[60px] sm:ml-[-100px] sm:hover:ml-[-10px] 
        max-sm:h-[160px] max-sm:w-[60px] max-sm:mb-[-90px] max-sm:hover:mt-[-90px]'>
          <a 
            href="https://github.com/TrImEaS" 
            className='flex justify-between items-center w-full text-white px-4 max-sm:flex-col max-sm:gap-10'>
            <FaGithub className='sm:hidden' size={30}/>
            <span className="max-sm:rotate-90">GitHub</span>
            <FaGithub className='max-sm:hidden' size={30}/>
          </a>
        </li>
      </ul>
    </section>  
  )
} 