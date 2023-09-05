import React, { useEffect, useState } from "react";
import CityCard from "../../Components/CityCard/citycard";

import { useDispatch, useSelector } from "react-redux";
import { getCities } from "../../redux/Actions/citiesActions.js";




const city = () => {
    const   [searchs, setS ] = React.useState();
    const citiesD = useDispatch();
    const { loading, cities } = useSelector(store => store.citiesReducer);
    console.log(cities)


//method filter search
let citiess = []
if (!searchs) {
    citiess = cities
}else{
    citiess= cities.filter(each => {
        return (each.city.toLowerCase().startsWith(searchs.toLowerCase())||each.country.toLowerCase().startsWith(searchs.toLowerCase()))
    } )
}

useEffect(() => {

    citiesD(getCities())


}, [])
if (loading) {
    return <h1 className=' text-6xl text-white'> Loading ...</h1>
}
return (
    <div className="row  col-12">
        <div className="searchB">
            
                <input value={searchs} onChange={e => setS(e.target.value)} className="form-control me-2" type="text" placeholder="Search your favorite city..."  />
                
           
        </div>

        <div className="cardCity col-12 ">
            {
                citiess.map(data => <CityCard key={data._id} data={data} />)
            }
        </div>
    </div>
)
}
export default city
