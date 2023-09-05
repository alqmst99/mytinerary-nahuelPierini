import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getInty, getOneInty } from "../../redux/Actions/intyneraryActions";


const IntyneraryModal = ({data})=>{
    const {title, author, imgU, Price, duration,  like, task, _id}=data
const {id }=useParams()
const intyD= useDispatch()

const {inty, load} = useSelector(store => store.intyneraryReducer)


console.log(id)
  

useEffect(()=>{
    intyD(getOneInty(id))
    
      
 }, [])


 
  if (load) {
    return (<h1 className='text-6xl text-white'> Loading ...</h1>)
  }else {
    
    return(
        <div>
             <div className="card text-center mb-3" >
              <h5 className="card-title">{title}</h5>
              <img className="imgfluid" src={inty} alt={author}/>
              
              <div className="card-body">
                  <img className="userI img rounded-circle" src={imgU} alt={author}  />
                <h5 className="card-title">{author}</h5>
                
                <p className="card-text">duracion: {duration} </p>
                <p className="card-text">likes: {like} </p>
                <p className="card-text">  {()=>{
                    let i=0;
                    while (i==Price) {
                        return <i class="bi bi-cash">$$</i>
                    }
                }}</p>
                <Link className="btn btn-primary" to={"/intynerary/" + _id}>Go somewhere</Link>
              </div>
            </div>
          </div>)
  }}
    
    
    

  

export default IntyneraryModal