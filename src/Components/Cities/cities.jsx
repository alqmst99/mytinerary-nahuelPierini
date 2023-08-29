import React from "react";
import CityCard from "../CityCard/citycard";
import Search from "../Search/search";

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
