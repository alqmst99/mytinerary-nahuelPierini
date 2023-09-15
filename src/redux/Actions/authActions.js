import {  createAction, createAsyncThunk } from "@reduxjs/toolkit";

const signUp = createAction('signUp', (credentials) => {

    const dataReduce ={
        user: credentials.userData,
        token: credentials.token,
        status: 'online'
    }

    return {
        payload: dataReduce
    }
})


const login = createAction('login', (credentials) => {
    const dataReduce ={
        user: credentials.userData,
        token: credentials.token,
        status: 'online'
    }
    return{
        payload: dataReduce
            }
})

const authenticate=createAsyncThunk('authenticate', () => {
    server.get('/auth/token')
    const dataReduce ={
        user: credentials.userData,
        token: credentials.token,
        status: 'online'
    }
    return{
payload:'algo'
    }
})

export default { signUp, login, authenticate }