export default function Form () {
  return (
     <section className='bg-white rounded-lg shadow-lg p-5 w-96 max-w-xl'>
      <form action="" className='flex flex-col'>
        <label className='text-sm mb-2 text-gray-500' htmlFor="name">Name: </label>  
        <input className='border-transition p-3 mb-4 border-solid border-gray-200 rounded text-sm focus:outline-none' type="text" id='name' name='name' required/>

        <label className='text-sm mb-2 text-gray-500' htmlFor="email">Email: </label>  
        <input className='border-transition p-3 mb-4 border-solid border-gray-200 rounded text-sm focus:outline-none' type="text" id='email' name='email' required/>

        <label className='text-sm mb-2 text-gray-500' htmlFor="menssage">Menssage: </label>  
        <textarea className='border-transition p-3 mb-4 border-solid border-gray-200 rounded text-sm focus:outline-none resize-y' type="text" id='menssage' name='menssage' rows={4} required></textarea>
        
        <button className='bg-cyan-500 text-white p-3 border-none rounded-md text-base cursor-pointer transition-colors hover:bg-cyan-400' type='submit'>Send</button>
      </form> 
    </section>
  )
}