import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./Reducers/citiesReducers";
import intyneraryReducer from "./Reducers/intyneraryReducers";
import authReducer from "./Reducers/authReducer";
export const store = configureStore({
    reducer:{
        citiesReducer,
        intyneraryReducer,
        authReducer
    }
})
