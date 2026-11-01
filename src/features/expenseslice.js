
import { createSlice } from "@reduxjs/toolkit";

const expenseslice = createSlice({
  name: "expenses",

  initialState: {
    expenses: [],
  },

  reducers: {
    setexpenses: (state, action) => {
      state.expenses = action.payload;
    },

    addexpense: (state, action) => {
      state.expenses.push(action.payload);
    },

    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const {
  setexpenses,
  addexpense,
  deleteExpense,
} = expenseslice.actions;

export default expenseslice.reducer;
