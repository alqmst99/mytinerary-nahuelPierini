import { createReducer } from "@reduxjs/toolkit";
import authActions from "../Actions/authActions";

const {signUp, login, authenticate} = authActions

const initialState = {
    user: {},
    status:'offline' ,
    token: null,
   
}
const authReducer = createReducer(initialState,
     (builder) =>builder
    
    .addCase(signUp, (state, action) => {
        const newState ={...state, ...action.payload}
        return newState
    })
    .addCase(login, (state, action) => {
        const newState ={...state, ...action.payload}
        return newState
    })
    .addCase(authenticate.fulfilled, (state, action) => {
        const newState ={...state, ...action.payload}
        return newState
    })
)

export default authReducer