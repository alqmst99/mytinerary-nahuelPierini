import React from 'react'
import reactLogo from './../../assets/react.svg'
const NavBar = () => {
  return (
    <nav className="navbar navbar-light text-center" >
          <img src={reactLogo} alt="LogoApp" />
          <h1 className='title'> MyTinerary</h1>
         
          <div>
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/con">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/nF">Cities</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <button className='btn btn-primary' ><i className="fa fa-user"></i></button>
              </li>
            </ul>
          </div>
     
        </nav>
  )
}

export default NavBar