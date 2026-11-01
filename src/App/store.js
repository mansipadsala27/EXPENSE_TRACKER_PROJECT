import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userslice";
import expenseReducer from "../features/expenseslice"

export const store=configureStore({
    reducer:{
        user:userReducer,
        expenses:expenseReducer
    }
})