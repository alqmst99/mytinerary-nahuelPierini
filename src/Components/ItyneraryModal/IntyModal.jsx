import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getInty, getOneInty } from "../../redux/Actions/intyneraryActions";


const IntyneraryModal = ({data})=>{

const {id }=useParams()
const intyD= useDispatch()

const {intys, inty, load} = useSelector(store => store.intyneraryReducer)



  

useEffect(()=>{
   // intyD(getOneInty(id))
    
      
 }, [])


 
  if (load) {
    return (<h1 className='text-6xl text-white'> Loading ...</h1>)
  }else {
    
    return(
        <div>
             <div className="card text-center mb-3" >
              <h5 className="card-title">{inty.title}</h5>
              <img className="imgfluid" src={inty} alt={inty.author}/>
              <p className="card-text">{inty.city}</p>
              <div className="card-body">
                  <img className="userI img rounded-circle" src={inty.imgU} alt={inty.author}  />
                <h5 className="card-title">{inty.author}</h5>
                
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text">{(data )=>{ console.log(data.Price); for(let i=0; i < data.price.value(); ++i){
                  return (<i className="bi bi-cash-stack">$$</i>)
                }}}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>)
  }}
    
    
    

  

export default IntyneraryModal