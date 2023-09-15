import React, { useState } from 'react'
import travel from './../../assets/plane-solid.svg'
import Login from '../Login/Login'
import { useSelector } from 'react-redux'
const NavBar = () => {
const {user} = useSelector( store => store.authReducer)
console.log(user)

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
          { (user?.photo )
          ? <img  src={user.photo} className="img-circle" style={{maxWidth:"25px", borderRadius:"10px" } }/>: <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#Login" ><i className="fa fa-user"></i></button> 
        
        }

            <div className="modal fade " id="Login" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content  Log">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">SigUp</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <Login />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="dropdown">
        <button className='btn btn-primary dropdown-toggle' type="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-user"></i></button>
        <ul class="dropdown-menu">
        <li className="nav-item">
        { (user?.photo )
          ? <a className="nav-link active" aria-current="page" href="#">Log Out</a>: <a className="nav-link active" aria-current="page" href="/login">Login</a> 
        
        }
          </li>
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