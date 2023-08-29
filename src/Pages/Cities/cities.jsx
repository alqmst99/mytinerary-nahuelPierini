import React from "react";
import CityCard from "../../Components/CityCard/citycard";
import Search from "../../Components/Search/search";

const city = () => {
    return (
        <div>
            <div className="searchB">
                <Search/>
            </div>
            <div className="cardCity">
                <CityCard/>
            </div>
        </div>
    )
}
export default city
