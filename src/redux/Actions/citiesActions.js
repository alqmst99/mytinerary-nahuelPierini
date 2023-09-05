import {  createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../Utils/axios";

const getCities = createAsyncThunk('getCities', async () =>{
try {
    const res = await server.get('/cities')
    console.log(res);
    return res.data.response
} catch (error) {
    console.log(error)
    return []
}
})
const getCity = createAsyncThunk('getCity', async ({id})=>{
    try {
        const res = await server.get('/city/'+ id)
        console.log(res.data.response);
        return res.data.response 
    } catch (error) {
        console.log(error)
        return []
    }
    })
export {getCities, getCity}