import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getInty, getOneInty } from "../../redux/Actions/intyneraryActions";


const IntyneraryModal = ({ data }) => {
    const { title, author, imgU, Price, duration, like, task, _id } = data
    const { id } = useParams()
    const intyD = useDispatch()

    const { inty, load } = useSelector(store => store.intyneraryReducer)


    console.log(_id)


    useEffect(() => {
        intyD(getOneInty({ id }))


    }, [])



    if (load) {
        return (<h1 className='text-6xl text-white'> Loading ...</h1>)
    } else if(data.length !== 0) {

        return (
            <div>
                <div className="card text-center mb-3" >
                    <h5 className="card-title">{title}</h5>
                    <img className="imgfluid" src={inty} alt={author} />

                    <div className="card-body">
                        <div className="d-flex justify-content-around align-items-center">
                        <img className="userI img rounded-circle" src={imgU} alt={author} />
                        <h5 className="card-title">{author}</h5>

                        </div>
                        <div className="d-flex justify-content-around">
                        <p className="card-text">Duracion: {duration} </p>
                        <p className="card-text">  Hastack : {task} </p>
                        <p className="card-text">Likes: {like} </p>
                        <p className="card-text">  Price : {Price} </p>
                        </div>

                        <Link to={"/intynerary/" + _id} className="btn btn-primary col-4" >Go somewhere</Link>
                    </div>
                </div>
               
            </div>)
    }else {
        return (<div><h2>Don't have Ityneraries</h2></div>)
        
    }
}






export default IntyneraryModal