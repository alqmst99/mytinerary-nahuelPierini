import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { server } from "../../Utils/axios";
//import { toast } from 'react-toastify';

const Login = ()=>{

  const navigate = useNavigate()
  const inputEmail = useRef();
  const inputPass = useRef();
  const dispatch = useDispatch()

  const handleSubmit = async () => {
      try {
          const userData = {
              email: inputEmail.current.value,
              password: inputPass.current.value,
          }
          const { data } = await server.post('/auth/login', userData)
          console.log(data);
          await dispatch(authActions.signUp(data.response))
         
          navigate('/')
      } catch (error) {
          const { message } = error.response.data
          console.log(error)
          toast.error(message)

      }
  }

    return(<section >
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 ">
  
          <div class="px-5 ms-xl-4">
            <i class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" ></i>
            <span class="h1 fw-bold mb-0">Logo</span>
          </div>
  
          <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
  
            <form >
  
              <h3 class="fw-normal mb-3 pb-3" >Log in</h3>
  
              <div class="form-outline mb-4">
                <input type="email" ref={inputEmail} id="emailL" class="form-control form-control-lg" />
                <label class="form-label" for="email">Email address</label>
              </div>
  
              <div class="form-outline mb-4">
                <input type="password" ref={inputPass} id="passwordL" class="form-control form-control-lg" />
                <label class="form-label" for="password">Password</label>
              </div>
  
              <div class="pt-1 mb-4">
                <button class="btn btn-info btn-lg btn-block" onClick={handleSubmit} type="button">Login</button>
              </div>
  
              <p class="small mb-5 pb-lg-2"><a class="text-muted" href="#!">Forgot password?</a></p>
              <p>Don't have an account? </p>
              <button className="btn btn-primary" data-bs-dismiss="modal"><Link  to={'/register'}>Register here</Link></button>
              
  
            </form>
  
          </div>
  
        </div>
        <div class="col-sm-6 px-0 d-none d-sm-block">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"  alt="Login image" className="w-100 vh-100" />
        </div>
      </div>
    </div>
  </section>)
}
export default Login