import {  createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../Utils/axios";

const getInty = createAsyncThunk('getInty', async () =>{
try {
    const res = await server.get('/cities')
    console.log(res);
    return res.data.response
} catch (error) {
    console.log(error)
    return []
}
})
const getOneInty = createAsyncThunk('getOneInty', async ({id})=>{
    try {
        const res = await server.get('/inty/intynery/'+ id)
        return res.data.response 
    } catch (error) {
        console.log(error)
        return []
    }
    })
export {getInty, getOneInty}