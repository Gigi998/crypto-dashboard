import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactionList: [],
  isLoading: false,
};

const allTransactionSlice = createSlice({
  name: "allTransactions",
  initialState,
});

export default allTransactionSlice.reducer;
