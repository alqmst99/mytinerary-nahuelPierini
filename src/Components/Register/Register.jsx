import React, { useState } from "react";
import { server } from "../../Utils/axios";
import GoogleButton from "../Button/GoogleButton";
import { useDispatch } from "react-redux";
import singUp from '../../redux/Reducers/authReducer.js'
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const countries = [
        {
            value: 'ecuador',
            name: 'Ecuador'
        },
        {
            value: 'mexico',
            name: 'México'
        },
        {
            value: 'uruguay',
            name: 'Uruguay'
        },
        {
            value: 'peru',
            name: 'Perú'
        },
        {
            value: 'argentina',
            name: 'Argentina'
        },
    ];

    const [reg, setReg] = useState({
        email: "",
        name: "",
        lastName: "",
        password: "",
        countries: "",
        age: 0,
        verified: false
    })

    const handleChangeData = (e) => {

        setReg((prevState) => {
            return e.target.name === 'terms' ? { ...prevState, [e.target.name]: e.target.checked } : { ...prevState, [e.target.name]: e.target.value }

        })
    }

    const handleSubmitData = async (reg) => {
        e.preventDefault()
        const userData = { ...reg }
        alert('se toco')
        if (!userData.verified) {
            delete userData.verified
            const res = await server.post('/auth/singup', userData)
            console.log(res);
            dispatch(singUp(res.data))
            navigate('/')
        }
    }
    const handleSubmitDataGoogle = async (reg) => {

        const userData = { ...reg }
        alert('se toco')
        if (!userData.verified) {

            const res = await server.post('/auth/singup', userData)
            console.log(res);
            dispatch(singUp(res.data))
            navigate('/cities')
        }
    }


    return (
        <section className="h-100 bg-dark">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="card card-registration my-4">
                            <div className="row g-0">
                                <div className="col-xl-6 d-none d-xl-block">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp" alt="Sample photo" className="img-fluid" />
                                </div>
                                <div className=" col-xl-6">
                                    <form role="form" onSubmit={handleSubmitData}>

                                        <div className="card-body p-md-5 text-black">

                                            <h3 className="mb-5 text-uppercase">Registration form</h3>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" for="email">Email</label>
                                                <input type="text" name="email" onChange={handleChangeData} value={reg.email} id="email" className="form-control form-control-lg" />
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <label className="form-label" for="name">name</label>
                                                        <input type="text" name="name" id="name" onChange={handleChangeData} value={reg.name} placeholder="Name" className="form-control form-control-lg" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <label className="form-label" for="lastName">Last name</label>
                                                        <input type="text" name="lastName" onChange={handleChangeData} value={reg.lastName} id="lastName" className="form-control form-control-lg" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label className="form-label" for="Country">Country</label>
                                                    <select id="Country" onChange={handleChangeData} value={reg.countries} className="form-select form-select-lg mb-3"  >
                                                        <option selected>Select Country</option>
                                                        {countries.map(country => <option key={country.value} value={country.value}>{country.name}</option>)}


                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" for="age">Age</label>
                                                <input type="text" name="age" onChange={handleChangeData} value={reg.age} id="age" className="form-control form-control-lg" />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" for="password">password</label>
                                                <input type="password" name="password" onChange={handleChangeData} value={reg.password} id="password" className="form-control form-control-lg" />
                                            </div>
                                            <p><b> Or sign up with:</b></p>
                                            <GoogleButton fn={handleSubmitDataGoogle} />

                                            <div className="d-flex justify-content-end pt-3">

                                                <button type="submit" className="btn btn-warning btn-lg ms-2">Submit form</button>
                                            </div>

                                        </div>

                                    </form>
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