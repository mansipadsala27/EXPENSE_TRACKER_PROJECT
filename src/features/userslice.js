import { createSlice } from "@reduxjs/toolkit";

const userlice=createSlice({
    name:'user',

    initialState:{
        user:[],
    },
    reducers:{
        setuser:(state,action)=>{
            state.user=action.payload;
        },
        addexpense:(state,action)=>{
            state.user.push=(action.payload)
        }

    }
})

export const{
    setuser,
    addexpense
}=userlice.actions

export default userlice.reducer