import React, { useEffect } from "react";
import CityP from "../../Components/CityP/CityP";


import { useDispatch, useSelector } from "react-redux";
import { getCity } from "../../redux/Actions/citiesActions";
import { useParams } from "react-router-dom";


const City= ()=>{
    const {id}= useParams()
    const intyD= useDispatch()
    const {city, loading}= useSelector(store => store.citiesReducer)
    useEffect(()=>{
        intyD(getCity({ id }))
    }, [])
    
    if (loading) {
        return <h1 className='text-6xl text-white'> Loading ...</h1>
    }
    
    
    return( 
    
   
    <div className="city">
         <CityP key={city.id} data={city}/>
        <div className="detail">
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  
</button>
        </div>
      


<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      
      </div>
    </div>
  </div>
</div>
    </div>
    )
}
export default City