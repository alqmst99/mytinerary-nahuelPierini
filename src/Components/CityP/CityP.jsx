import React from "react";


const CityP = ({data})=>{
    const {city, description, img, score, _id}=data
    return(
        <div class="card text-bg-dark detail">
  <img src={img} class="card-img" alt={city}/>
  <div class="card-img-overlay">
    <h5 class="card-title">{city}</h5>
    <p class="card-text">{description}</p>
    <p class="card-text"><small>{score}</small></p>
  </div>
</div>
    )
}
export default CityP