import React from 'react'
import Container from './../../Components/Container/Container'
import NavBar from './../../Components/NavBar/NavBar'
import NotFount from './../NotFound/NotFound'//'travel\src\Pages\NotFound\NotFound.jsx'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'


const home = () => {
  return (
    <div>
      <header className="header">
        <NavBar />
      </header>
      <main className='col-12 col-md-12 col-lg-12'>
      <Outlet/>
      </main>
      <footer className="footer">
       
      </footer>

    </div>
  )
}

export default home