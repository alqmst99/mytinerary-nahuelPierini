import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneInty } from "../../redux/Actions/intyneraryActions";
import NotFound from "./../../Pages/NotFound/NotFound"

const Itynerary = ({data})=>{
    const { title, author, imgU, Price, duration, like, task, _id } = data
    const { id } = useParams()
    const intyD = useDispatch()

    const { inty, load } = useSelector(store => store.intyneraryReducer)


    console.log(id)


    useEffect(() => {
        intyD(getOneInty({ id }))


    }, [])
   

        return (
            <div>
                <div className="card text-center mb-3" >
                    <h5 className="card-title">{title}</h5>
                    <img className="imgfluid" src={inty} alt={author} />

                    <div className="card-body">
                        <img className="userI img rounded-circle" src={imgU} alt={author} />
                        <h5 className="card-title">{author}</h5>

                        <p className="card-text">duracion: {duration} </p>
                        <p className="card-text">  Hastack : {task}</p>
                        <p className="card-text">likes: {like} </p>
                        <p className="card-text">  Price : {Price}</p>

                        
                    </div>
                </div>
                <h2 className="text-center">Activities</h2>
                <NotFound/>
            </div>)
    
}
export default Itynerary