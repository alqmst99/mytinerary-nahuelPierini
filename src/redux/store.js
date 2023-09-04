import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./Reducers/citiesReducers";
export const store = configureStore({
    reducer:{
        citiesReducer
    }
})
