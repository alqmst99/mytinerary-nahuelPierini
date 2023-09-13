import React, { useState } from "react";
import { server } from "../../Utils/axios";

const Register = () => {

    const [data, setData] = useState({
        email: "",
        name: "",
        lastName:"",
        password: "",
        age:"",
        terms: false
    })

    const handleChangeData = (e) => {
        setData((prevState) => {
            return e.target.name === 'terms' ? { ...prevState, [e.target.name]: e.target.checked } : { ...prevState, [e.target.name]: e.target.value }
        })
    }

    const handleSubmitData = async (e) => {
        e.preventDefault()
        const userData = { ...data }
        if (userData.terms) {
            delete userData.terms
            const res = await server.post('/auth/singup', userData)
            console.log(res);
        }
    }


    return (
        <section class="h-100 bg-dark">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col">
                        <div class="card card-registration my-4">
                            <div class="row g-0">
                                <div class="col-xl-6 d-none d-xl-block">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp" alt="Sample photo" class="img-fluid" />
                                </div>
                                <div class="col-xl-6">
                                    <div class="card-body p-md-5 text-black">
                                        <h3 class="mb-5 text-uppercase">Registration form</h3>

                                        <div class="form-outline mb-4">
                                            <label class="form-label" for="email">Email</label>
                                            <input type="text" id="email" class="form-control form-control-lg" />
                                        </div>

                                        <div class="row">
                                            <div class="col-md-6 mb-4">
                                                <div class="form-outline">
                                                    <label class="form-label" for="name">name</label>
                                                    <input type="text" id="name" className="form-control form-control-lg" />
                                                </div>
                                            </div>
                                            <div class="col-md-6 mb-4">
                                                <div class="form-outline">
                                                    <label class="form-label" for="lastName">Last name</label>
                                                    <input type="text" id="lastName" class="form-control form-control-lg" />
                                                </div>
                                            </div>
                                        </div>

                                                                           
                                        <div class="form-outline mb-4">
                                            <label class="form-label" for="password">password</label>
                                            <input type="password" id="password" class="form-control form-control-lg" />
                                        </div>


                                        <div class="d-flex justify-content-end pt-3">
                                            <button type="button" class="btn btn-light btn-lg">Reset all</button>
                                            <button type="button" class="btn btn-warning btn-lg ms-2">Submit form</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register