import {  createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../Utils/axios";

const singUP = createAsyncThunk('singUp', async ()=>{
    try {
        const res = await server.post ('/auth/singup')
        return res.data.request

    } catch (error) {
        
    }
} )