import React, { useEffect } from "react";
import IntyneraryModal from "../../Components/ItyneraryModal/IntyModal";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneInty } from "../../redux/Actions/intyneraryActions";
const Intyneraries = ({data})=>{
const id= useParams()
const inty = useSelector(state => state.intyneraryReducer)
const dispach= useDispatch()
useEffect(()=>{
    dispach(getOneInty(id))
})
 


    return(
        <>
        <IntyneraryModal key={inty.id} data={inty}/>
        </>
    )
}
export default Intyneraries