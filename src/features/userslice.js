import { createSlice } from "@reduxjs/toolkit";

const userslice=createSlice({
    name:'user',

    initialState:{
        user:[],
    },
    reducers:{
        setuser:(state,action)=>{
            state.user=action.payload;
        },
        adduser:(state,action)=>{
            state.user.push=(action.payload)
        }

    }
})

export const{
    setuser,
    adduser
}=userslice.actions

export default userslice.reducer