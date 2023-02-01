import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_CRYPTO = " 622ae640-a8d8-430d-94a8-0b67f485bbad";
const CRYPTO_ENDPOINT = "https://api.coincap.io/v2/assets";

const initialState = {
  isLoading: false,
  search: "",
  singleCurrency: "",
};

//Fetching single currencie
export const getCryptoName = createAsyncThunk(
  "singleCrypto/getCryptoName",
  (name) => {
    return fetch(`${CRYPTO_ENDPOINT}/${name}`)
      .then((resp) => resp.json())
      .catch((err) => console.log(err));
  }
);

const singleCryptoSlice = createSlice({
  name: "singleCrypto",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    //Search form handle change
    handleChange: (state, { payload: { name, value } }) => {
      state.search = value;
    },
    clearSearch: (state) => {
      state.search = "";
    },
    clearCurrency: (state) => {
      state.singleCurrency = "";
    },
  },
  extraReducers: {
    [getCryptoName.pending]: (state) => {
      state.isLoading = true;
    },
    [getCryptoName.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.singleCurrency = action.payload.data;
    },
    [getCryptoName.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const {
  showLoading,
  hideLoading,
  handleChange,
  clearSearch,
  clearCurrency,
} = singleCryptoSlice.actions;
export default singleCryptoSlice.reducer;
