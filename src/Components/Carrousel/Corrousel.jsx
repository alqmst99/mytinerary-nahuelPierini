import React from 'react'
import gales from './../../assets/gales.jpg'
import england from './../../assets/england.jpg'
import irland from './../../assets/irland.jpg'
import niza from './../../assets/niza.jpg'
import normandia from './../../assets/normandia.jpg'
import paris from './../../assets/paris.jpg'
import neuquen from './../../assets/neuquen.jpg'
import mendoza from './../../assets/mendoza.jpg'
import tierra from './../../assets/tierradelfuego.jpg'
import tokyo from './../../assets/tokyo.jpg'
import okinawa from './../../assets/okinawa.jpg'
import kioto from './../../assets/kioto.jpg'

let Cities= [
  {id: 1, nameC: "France", City: "Paris", link:paris },
  {id: 2, nameC: "France", City: "Normandia", link:normandia  },
  {id: 3, nameC: "France", City: "Niza", link:niza  },
  {id: 4, nameC: "Argentina", City: "Mendoza", link:mendoza  },
  {id: 5, nameC: "Argentina", City: "Neuquen", link:neuquen  },
  {id: 6, nameC: "Argentina", City: "Tierra del Fuego", link:tierra  },
  {id: 7, nameC: "Japan", City: "Okinawa", link:okinawa  },
  {id: 8, nameC: "Japan", City: "Tokyo", link:tokyo  },
  {id: 9, nameC: "Japan", City: "Kyoto", link:kioto  },
  {id: 10, nameC: "UK", City: "Engalnd", link:england  },
  {id: 11, nameC: "UK", City: "Irland", link:irland  },
  {id: 12, nameC: "UK", City: "Gales", link:gales  },
 ]
 


const Corrousel = () => {
  return (
<div className='container col-12 col-md-4 col-lg-8  text-center '>
    <h2>Popular Mytynerary</h2>
<div id="carousel" className="carousel slide " data-bs-touch="false" data-bs-interval="false">
<div className="carousel-indicators">

      <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
  
    </div>
    <div className="carousel-inner ">
<div className="carousel-item active " >
  { Cities.map(city => { 
    
   if(city.id <=4){
  return(
  <><figure className=' col-lg-5 d-inline-block' >
     <img src={city.link} key={city.id} className="w-100 img-thumbnail " alt={city.nameC} />
     <h5>{city.nameC}, {city.City} </h5>
  </figure>
   
     
   </>) 
    }
   })}
   </div>
   <div className="carousel-item " >
   { Cities.map(city => { 
    
    if(city.id >4 && city.id <=8 ){
   return(
   <>
   <figure className='col-lg-5 d-inline-block'>
     <img src={city.link} key={city.id} className="w-100 img-thumbnail " alt={city.nameC} />
     <h5>{city.nameC}, {city.City} </h5>
  </figure>
  
       
    </>) 
     }
    })}
   </div>
   <div className="carousel-item" >
   { Cities.map(city => { 
    
    if(city.id >8 && city.id <=12){
   return(
   <>
   <figure className='col-lg-5 d-inline-block '>
     <img src={city.link} key={city.id} className="w-100 img-thumbnail " alt={city.nameC} />
     <h5>{city.nameC}, {city.City} </h5>
  </figure>
 
       
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