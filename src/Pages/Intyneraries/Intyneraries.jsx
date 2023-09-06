import React, { useEffect } from "react";
import IntyneraryModal from "../../Components/Itynerary/Itynerary";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneInty } from "../../redux/Actions/intyneraryActions";
import Itynerary from "../../Components/Itynerary/Itynerary";

const Intyneraries = ()=>{
const id= useParams()
const {inty, load} = useSelector(state => state.intyneraryReducer)
const dispach= useDispatch()
 
//const _id=  inty._id
console.log(id);
useEffect(()=>{
    dispach(getOneInty(id))
}, [])
 
 return(
        <>
        <Itynerary key={inty._id} data={inty} />
        </>
    )
}
export default Intyneraries