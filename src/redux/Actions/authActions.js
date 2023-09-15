import {  createAction, createAsyncThunk } from "@reduxjs/toolkit";

const signUp = createAction('signUp', (data) => {

    const dataReduce ={
        user: data.userData,
        token: data.token,
        status: online
    }

    return {
        payload: dataReduce
    }
})
const login = createAction('login', (data)=>{
    const dataReduce ={
        user: data.userData,
        token: data.token,
        status: online
    }
    return{
        payload:dataReduce
            }
})
const authenticate=  createAsyncThunk.fullfieled('authenticate', ()=> {
    return{
payload:'algo'
    }
})

export default { signUp, login, authenticate }