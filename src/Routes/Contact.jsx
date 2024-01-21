import React from 'react'
 
export default function Contact() {

  return (
    <div name='contact' className='w-full h-screen dark:bg-slate-900 bg-slate-400
    flex justify-center items-center p-4'>
      <form 
        method="POST" 
        action="https://getform.io/f/3ca3d9db-d6ea-445b-863d-1d78e596c2c2"
        className='flex flex-col max-w-[600px] w-full'>
      <div className='pb-8'>
        <p className='text-4xl inline border-b-4 border-cyan-300'>Contact</p>
        <p className='py-4 text-gray-300'>// These are the technologies I've worked with - trimeas@hotamil.com</p>
      </div>
      <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'/>
      <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
      <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10"></textarea>
      <button className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  )
}