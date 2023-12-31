import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



 

const CityCard = ({data})=>{
const {city, country, img, _id}=data
console.log(data)
    return(
        <div className="card cardC col-4 ">
      <img src={img} className="img card-img-top img-flit" alt="City example"/>
      <div className="card-body">
        <p className="card-text"> City: {city} </p>
        <p className="card-text"> Country: {country} </p>
       
        <Link to={"/city/" + _id} className="btn btn-secondary col-4 ">Details</Link>
      </div>
     
    </div>)
 
    
}
export default CityCard