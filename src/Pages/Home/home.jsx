import React from 'react'

import NavBar from './../../Components/NavBar/NavBar'

import { Outlet, } from 'react-router-dom'
import Footer from '../../Components/Footer/Footers'

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
       <Footer/>
      </footer>

    </div>
  )
}

export default home