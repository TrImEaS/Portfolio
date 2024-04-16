import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav'
import { Home, Error, Work, Skills, Contact } from './Routes/Routes'
import SocialIcons from './Components/SocialIcons';

export default function App() {

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const setTheme = (darkModeOn) => {
      document.documentElement.classList.toggle('dark', darkModeOn)
      localStorage.setItem('theme', darkModeOn ? 'dark' : 'light')
    }

    setTheme(darkModeMediaQuery.matches)

    darkModeMediaQuery.addEventListener('change', (e) => {
      setTheme(e.matches);
    })
    
  }, []);

  return (
    <main className='flex flex-col items-center bg-[#bcd2d0] dark:bg-slate-900 font-bold 
      text-black dark:text-slate-50 min-h-screen h-full font-[Nunito] relative'>
      <Nav/>
      <Routes>
        <Route 
          path='/' 
          element={<Home/>}>
        </Route>
        <Route 
          path='/skills' 
          element={<Skills/>}>
        </Route>
        <Route 
          path='/work' 
          element={<Work/>}>
        </Route>
        <Route 
          path='/contact'
          element={<Contact/>}>
        </Route>
        <Route 
          path='*' 
          element={<Error/>}>
        </Route>
      </Routes>
      <SocialIcons/>
    </main>
  )
}