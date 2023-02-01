import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_CRYPTO = " 622ae640-a8d8-430d-94a8-0b67f485bbad";
const CRYPTO_ENDPOINT = "https://api.coincap.io/v2/assets";

const initialState = {
  isLoading: false,
  currenciesList: [],
  search: "",
  singleCurrency: "",
};

export const getCryptoCurrencies = createAsyncThunk(
  "allCrypto/getCryptoCurrencies",
  () => {
    return fetch(CRYPTO_ENDPOINT)
      .then((resp) => resp.json())
      .catch((err) => console.log(err));
  }
);

const allCryptoSlice = createSlice({
  name: "allCrypto",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: {
    [getCryptoCurrencies.pending]: (state) => {
      state.isLoading = true;
    },
    [getCryptoCurrencies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.currenciesList = action.payload.data;
    },
    [getCryptoCurrencies.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { showLoading, hideLoading } = allCryptoSlice.actions;
export default allCryptoSlice.reducer;
