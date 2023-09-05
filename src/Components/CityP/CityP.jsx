import React from "react";


const CityP = ({data})=>{
    const {city, description, img, score, _id}=data
    return(
        <div class="card text-bg-dark detail">
  <img src={img} class="card-img" alt={city}/>
  <div class="card-img-overlay text-center textI">
    <h5 class="card-title titleI">City: {city}</h5>
    <p class="card-text">About: {description}</p>
    <p class="card-text"><small>Score: {score}</small></p>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">View Ityneraries</button>
  </div>
 
  

</div>
    )
}
export default CityP