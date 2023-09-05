import React, { useEffect } from "react";
import CityP from "../../Components/CityP/CityP";
import { useDispatch, useSelector } from "react-redux";
import { getCity } from "../../redux/Actions/citiesActions";
import { useParams } from "react-router-dom";
import IntyneraryModal from "../../Components/ItyneraryModal/IntyModal";
import { getInty } from "../../redux/Actions/intyneraryActions";


const City= ()=>{
    const {id}= useParams()
    const cityD= useDispatch()
    const intynD= useDispatch()
    const {intys}= useSelector(store => store.intyneraryReducer)
    const {city, loading}= useSelector(store => store.citiesReducer)

    //function select intinerary
if(intys.city === city){
  console.log('si es ' + intys.id.toString());
}

    //useEffect
    useEffect(()=>{
        cityD(getCity({ id })),
        intynD(getInty())
    }, [])
    console.log(intys.map(data=>{ data.city
  
    }));
    if (loading) {
        return <h1 className='text-6xl text-white'> Loading ...</h1>
    }
    
    
    return( 
    
   
    <div className="city">
         <CityP key={city.id} data={city}/>
        <div className="detail">

<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Ityneraries</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <IntyneraryModal key={city.id} data={city}/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      
      </div>
    </div>
  </div>
</div>
    </div>
    </div>
    )
}
export default City