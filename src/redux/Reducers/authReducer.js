import { createReducer } from "@reduxjs/toolkit";
import authActions from "../Actions/authActions";
const initialState = {
    full_name: '',
    is_online: false,
    email: '',
    photo: ''
}
const authReducer = createReducer(initialState, (builder) =>
    builder.addCase(authActions.signUp, (state, action) => {
        return {
            ...state,
            ...action.payload
        }
    })
)

export default authReducer