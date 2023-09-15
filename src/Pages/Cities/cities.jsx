import React, { useEffect, useState } from "react";
import CityCard from "../../Components/CityCard/citycard";

import { useDispatch, useSelector } from "react-redux";
import { getCities } from "../../redux/Actions/citiesActions.js";
import { Link } from "react-router-dom";




const city = () => {
    const   [searchs, setS ] = React.useState("");
    const citiesD = useDispatch();
    const { loading, cities } = useSelector(store => store.citiesReducer);
    console.log(cities)

    useEffect(() => {

        citiesD(getCities())
    }, [])
    

//method filter search
let citiess = []

if (!searchs) {
    citiess = cities
}else if (searchs){
    citiess= cities.filter(each => {
        return ((each.city.toLowerCase().startsWith(searchs.toLowerCase()))||(each.country?.toLowerCase().startsWith(searchs.toLowerCase())))
    } )
}else{
    return (<>
    <h1>Not fint to result</h1>
    </> )
}


if (loading) {
    return <h1 className=' text-6xl text-white'> Loading ...</h1>
}
return (
    <div className="row  col-12">
        <div className="searchB">
                <input value={searchs} onChange={search => setS(search.target.value)} className="form-control me-2" type="text" placeholder="Search your favorite city..."  />
                <i class="fa-solid fa-circle-arrow-left"></i>
        </div>

        <div className="cardCity col-12 ">
        <i class="fa-solid fa-circle-arrow-left"><Link to='/' className="btn btn-secondary col-4 ">Back</Link></i>
        
            {
                citiess.map(data => <CityCard key={data._id} data={data} />)
            }
        </div>
    </div>
)
}
export default city
