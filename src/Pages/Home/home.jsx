import React from 'react'
import Container from './../../Components/Container/Container'
import NavBar from './../../Components/NavBar/NavBar'


const home = () => {
  return (
    <div>
      <header className="header">
        <NavBar />
      </header>
      <main>
        <Container />
      </main>
      <footer className="footer">
       
      </footer>

    </div>
  )
}

export default home