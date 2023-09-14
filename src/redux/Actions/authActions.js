import {  createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../Utils/axios";




const signUp = createAction('signUp', (data) => {

    return {
        payload: data
    }
})

export default { signUp }