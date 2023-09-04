import React from 'react'
import travel from './../../assets/plane-solid.svg'
const NavBar = () => {
  return (
    <nav className="navbar navbar-light text-center" >
      <img src={travel} className='travel' alt="LogoApp" />
      <div className="d-flex justify-content-center"> </div>
      <h1 className='title'> MyTinerary</h1>

      <div className='bar'>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/cities">Cities</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/nF">About</a>
          </li>
          <li className="nav-item">
            <button className='btn btn-primary' ><i className="fa fa-user"></i></button>
          </li>
        </ul>
      </div>

      <div class="dropdown">
        <button className='btn btn-primary dropdown-toggle' type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-user"></i></button>
        <ul class="dropdown-menu">
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/cities">Cities</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/nF">About</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar