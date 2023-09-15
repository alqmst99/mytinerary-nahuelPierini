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
                    <h1 className="card-title">{title}</h1>
                      <div className="card-body" >
                    <div className="container d-flex justify-content-around">
                       <div>
                        <img className="userI img rounded-circle" src={imgU} alt={author} />
                        <h5 className="card-title">{author}</h5>

                        </div>
                        <div className="text-start" > 
                        <h3 className="card-text"><samp><b>duracion:</b> {duration}</samp> </h3>
                        <h3 className="card-text"> <samp><b>Hastack :</b> {task}</samp> </h3>
                        <h3 className="card-text"><samp><b>likes:</b> {like}</samp>  </h3>
                        <h3 className="card-text"> <samp><b>Price :</b> {Price}</samp> </h3>
                        </div>
                       
                        
                    </div>
                    <div>
               
                </div>
                </div>
                <div>
                <h2 className="text-center">Activities</h2>
                <NotFound/>
                </div>
            </div>
            </div>)
    
}
export default Itynerary