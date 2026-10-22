import { createSlice } from "@reduxjs/toolkit";

const userslice=createSlice({
    name:'users',

    initialState:{
        users:[],
    },
    reducers:{
        setusers:(state,action)=>{
            state.users=action.payload;
        },
        adduser:(state,action)=>{
            state.users.push=(action.payload)
        }

    }
})

export const{
    setusers,
    adduser
}=userslice.actions

export default userslice.reducer