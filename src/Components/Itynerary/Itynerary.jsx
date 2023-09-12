import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneInty } from "../../redux/Actions/intyneraryActions";
import NotFound from "./../../Pages/NotFound/NotFound"

const Itynerary = ({data, data2})=>{
    const { title, author, imgU, Price, duration, like, task } = data
    const {img, city, localitation}=data2
    const { id } = useParams()
    const intyD = useDispatch()

    const { inty, load } = useSelector(store => store.intyneraryReducer)


    console.log(id)


    useEffect(() => {
        intyD(getOneInty({ id }))


    }, [])
   

        return (
            <div >
                
                <div className="card text-center " >
                    <h5 className="card-title">{title}</h5>
                    <img className="imgfluid card-img" src={img} alt={city} />
                    <h2>{city}</h2>
                    <div className="card-body" >
                    <div className="container d-flex justify-content-around ">
                        <div className="card-img-overlay">
                        <img className="userI img rounded-circle" src={imgU} alt={author} />
                        <h5 className="card-title">{author}</h5>

                        </div>
                        <div>
                        <p className="card-text">duracion: {duration} </p>
                        <p className="card-text">  Hastack : {task}</p>
                        <p className="card-text">likes: {like} </p>
                        <p className="card-text">  Price : {Price}</p>
                        </div>
                        </div>
                        
                    </div>
                    <div>
                <frameset>
                    <iframe src={localitation} frameborder="0"></iframe>
                </frameset>
                </div>
                </div>
                <div>
                <h2 className="text-center">Activities</h2>
                <NotFound/>
                </div>
            </div>)
    
}
export default Itynerary.forceUpdate() 