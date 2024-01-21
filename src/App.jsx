import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav'
import { Home, Error, Work, Skills, Contact } from './Routes/Routes'
import './App.css'

function App() {

  useEffect(() => {
    const userThemePreference = localStorage.getItem('theme');
    global.document.documentElement.classList.add(userThemePreference);
  }, []);

  return (
      <main className='flex flex-col items-center bg-slate-400 dark:bg-slate-900 font-bold text-slate-800 dark:text-slate-50 min-h-screen font-[Nunito] min-w-[390px]'>
        <Nav></Nav>
        <Routes>
          <Route 
            path='/' 
            element={<Home></Home>}>
          </Route>
          <Route 
            path='/skills' 
            element={<Skills></Skills>}>

            </Route>
          <Route 
            path='/work' 
            element={<Work></Work>}>
          </Route>
          <Route 
            path='/contact' 
            element={<Contact></Contact>}>
          </Route>
          <Route 
            path='*' 
            element={<Error></Error>}>
          </Route>
        </Routes>
      </main>
  )
}

export default App
