import React, { useEffect } from "react";
import IntyneraryModal from "../../Components/ItyneraryModal/IntyModal";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneInty } from "../../redux/Actions/intyneraryActions";

const Intyneraries = ({data})=>{
const id= useParams()
const {inty, load} = useSelector(state => state.intyneraryReducer)
const dispach= useDispatch()
 const int =inty
const _id= inty._id
console.log(id);
useEffect(()=>{
    dispach(getOneInty(_id))
}, [])
 


    return(
        <>
        <IntyneraryModal key={inty._id} data={inty}/>
        </>
    )
}
export default Intyneraries