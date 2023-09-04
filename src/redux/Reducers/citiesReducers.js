import { createReducer } from "@reduxjs/toolkit";
import { getCities, getCity } from '../Actions/citiesActions'

const initialState = {
    cities: [],
    loading: false,
    city: {}
}
const citiesReducer = createReducer( initialState , (builder) =>
    builder
        .addCase(getCities.fulfilled, (state, action) => {
            const newState = { ...state, loading: false, cities: action.payload , loading: false}
            return newState
        })
        .addCase(getCities.pending, (state, action) => {
            const newState = { ...state, loading: false,  loading: true }
            return newState
        })
        .addCase(getCity.fulfilled, (state, action) => {
            const newState = { ...state, loading: false, city: action.payload, loading: false }
            return newState
        })
        .addCase(getCity.pending, (state, action) => {
            const newState = { ...state, loading: false,  loading: true }
            return newState
        })

)

export default citiesReducer