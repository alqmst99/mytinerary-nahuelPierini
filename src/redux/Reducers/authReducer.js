import { createReducer } from "@reduxjs/toolkit";
import{signUp, Login, authenticate} from "../Actions/authActions";
import Login from "../../Components/Login/Login";


const initialState = {
     user: '',
    state: offline,
    token: null,
   
}
const authReducer = createReducer(initialState, (builder) =>
    builder
    .addCase(signUp, (state, action) => {
        return {
            ...state,
            ...action.payload
        }
    })
    .addCase(Login, (state, acction)=> {
        return {
            ...state,
            ...action.payload
        }
    })
    .addCase(authenticate, (state, acction)=> {
        return {
            ...state,
            ...action.payload
        }
    })
)

export default authReducer