import React from 'react'
import reactLogo from './../../assets/react.svg'
import viteLogo from '../../../public/vite.svg'
let Cities= [
  {id: 1, nameC: "France", City: "Paris" },
  {id: 2, nameC: "France", City: "Paris" },
  {id: 3, nameC: "France", City: "Paris" },
  {id: 4, nameC: "France", City: "Paris" },
  {id: 5, nameC: "EEUU", City: "New York" },
  {id: 6, nameC: "EEUU", City: "New York" },
  {id: 7, nameC: "EEUU", City: "New York" },
  {id: 8, nameC: "EEUU", City: "New York" },
  {id: 9, nameC: "France", City: "Paris" },
  {id: 10, nameC: "France", City: "Paris" },
  {id: 11, nameC: "EEUU", City: "New York" },
  {id: 12, nameC: "EEUU", City: "New York" },
 ]
 


const Corrousel = () => {
  return (
<div className='container col-12 col-md-6 col-lg-6  text-center '>
    <h2>Popular Mytynerary</h2>
<div id="carousel" className="carousel slide " data-bs-touch="false" data-bs-interval="false">
<div class="carousel-indicators">

      <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
  
    </div><div className="carousel-inner">
<div className="carousel-item active " >
  { Cities.map(city => { 
    
   if(city.id <=4){
  return(
  <>
      <img src={reactLogo} key={city.id} className=" w-50 rounded-fit " alt={city.nameC} />
      
   </>) 
    }
   })}
   </div>
   <div className="carousel-item active " >
   { Cities.map(city => { 
    
    if(city.id >4 && city.id <=8 ){
   return(
   <>
       <img src={viteLogo} key={city.id} className=" w-50 rounded-fit " alt={city.nameC} />
       
    </>) 
     }
    })}
   </div>
   <div className="carousel-item active " >
   { Cities.map(city => { 
    
    if(city.id >8 && city.id <=12){
   return(
   <>
       <img src={reactLogo} key={city.id} className=" w-50 rounded-fit " alt={city.nameC} />
       
    </>) 
     }
    })}
    </div>
  </div>
   <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    </div>
    
)}


export default Corrousel