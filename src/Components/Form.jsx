export default function Form () {
  return (
     <section className='dark:bg-transparent bg-slate-700 rounded-lg shadow-lg p-8 max-w-[600px] min-w-[410px] border-2 border-[#7cb2f36c]
      shadow-[#7cb2f36c]'>
      <form method="POST" action="https://getform.io/f/3ca3d9db-d6ea-445b-863d-1d78e596c2c2" className='flex flex-col'>
        <label className='text-sm mb-2 text-gray-300' htmlFor="name">Name: </label>  
        <input 
          className='bg-transparent  border-transition border-2 p-3 mb-4 border-solid border-[#7cb2f36c] 
            shadow-md shadow-[#7cb2f36c] rounded text-sm focus:outline-none' 
          type="text" 
          id='name' 
          name='name' 
          required
        />

        <label className='text-sm mb-2 text-gray-300' htmlFor="email">Email: </label>  
        <input 
          className='bg-transparent border-transition border-2 p-3 mb-4 border-solid border-[#7cb2f36c] 
            shadow-md shadow-[#7cb2f36c] rounded text-sm focus:outline-none' 
          type="text" 
          id='email' 
          name='email' 
          required
        />

        <label className='text-sm mb-2 text-gray-300' htmlFor="menssage">Menssage: </label>  
        <textarea 
          className='bg-transparent border-transition border-2 p-3 mb-4 border-solid border-[#7cb2f36c] 
            shadow-md shadow-[#7cb2f36c] rounded text-sm focus:outline-none resize-y' 
          type="text" 
          id='menssage' 
          name='menssage' 
          rows={4} required>
        </textarea>
        
        <button 
          className='bg-cyan-500 text-gray-200 p-3 border border-none rounded-md text-base cursor-pointer 
          transition-colors hover:shadow-md hover:bg-cyan-300 w-1/4' 
          type='submit'>
          Send
        </button>
      </form> 
    </section>
  )
}