import { createReducer } from "@reduxjs/toolkit";
import { getInty, getOneInty } from "../Actions/intyneraryActions";
const initialState = {
    intys:[],
    load: false,
    inty: {}
}
const intyneraryReducer = createReducer( initialState , (builder) =>
    builder
    .addCase(getInty.fulfilled, (state, action) => {
        const newState = { ...state, loading: false, intys: action.payload, }
        console.log(newState)
        return newState
    })
    .addCase(getInty.pending, (state, action) => {
        const newState = { ...state, loading: true,}
        return newState
    })
         .addCase(getOneInty.fulfilled, (state, action) => {
            const newState = { ...state, inty: action.payload, load: false }
            return newState
        })
        .addCase(getOneInty.pending, (state, action) => {
            const newState = { ...state,   load: true }
            return newState
        })

)

export default intyneraryReducer