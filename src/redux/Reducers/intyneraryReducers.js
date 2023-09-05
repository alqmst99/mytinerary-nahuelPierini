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
        const newState = { ...state, loading: false, intys: action.payload, load: false }
        return newState
    })
    .addCase(getInty.pending, (state, action) => {
        const newState = { ...state, loading: false,  load: true }
        return newState
    })
         .addCase(getOneInty.fulfilled, (state, action) => {
            const newState = { ...state, loading: false, inty: action.payload, load: false }
            return newState
        })
        .addCase(getOneInty.pending, (state, action) => {
            const newState = { ...state, loading: false,  load: true }
            return newState
        })

)

export default intyneraryReducer