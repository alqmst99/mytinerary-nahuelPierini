import React from 'react'
import travel from './../../../public/plane-solid.svg'
const NavBar = () => {
  return (
    <nav className="navbar navbar-light text-center" >
          <img src={travel} className='travel' alt="LogoApp" />
          <div className="d-flex justify-content-center"> </div>
          <h1 className='title'> MyTinerary</h1>
         
          <div>
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
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