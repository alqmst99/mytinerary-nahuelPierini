import React, { useEffect } from "react";
import IntyneraryModal from "../../Components/Itynerary/Itynerary";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneInty } from "../../redux/Actions/intyneraryActions";
import Itynerary from "../../Components/Itynerary/Itynerary";
import { getCities} from "../../redux/Actions/citiesActions";

const Intyneraries = ()=>{

const id= useParams()
const {inty, load} = useSelector(state => state.intyneraryReducer)
const {cities}= useSelector(state => state.citiesReducer)
const dispach= useDispatch()

 const c= cities.filter(each =>{return  (each.id === inty.city)})
console.log(c)
//const _id=  inty._id
console.log(load);
useEffect(()=>{
    dispach(getOneInty(id))
    dispach(getCities())
}, [])
 
 return(
        <>
        <Itynerary key={inty._id} data={inty} data2={c} />
        </>
    )
}
export default Intyneraries