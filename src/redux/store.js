import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./Reducers/citiesReducers";
import intyneraryReducer from "./Reducers/intyneraryReducers";
export const store = configureStore({
    reducer:{
        citiesReducer,
        intyneraryReducer
    }
})
