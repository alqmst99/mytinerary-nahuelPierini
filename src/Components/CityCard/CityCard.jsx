import React, { useEffect, useState } from "react";



 

const CityCard = ({data})=>{
const {city, country, img, _id}=data
console.log(data)
    return(
        <div className="card cardC col-4">
      <img src={img} className="card-img-top img-fluid " alt="City example"/>
      <div className="card-body">
        <p className="card-text">{city} </p>
        <p className="card-text">{country} </p>
       
        <button className='btn btn-primary'> <a className='text-decoration-none ' href="/Cities">Details</a></button>
      </div>
     
    </div>)
 
    
}
export default CityCard