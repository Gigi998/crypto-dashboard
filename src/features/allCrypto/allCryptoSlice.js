import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const CRYPTO_ENDPOINT = "https://api.coincap.io/v2/assets";

const initialState = {
  isLoading: false,
  currenciesList: [],
  search: "",
  singleCurrency: "",
  isLoadingSingle: false,
  favoritesList: [],
};

export const getCryptoCurrencies = createAsyncThunk(
  "allCrypto/getCryptoCurrencies",
  () => {
    return fetch(CRYPTO_ENDPOINT)
      .then((resp) => resp.json())
      .catch((err) => console.log(err));
  }
);

//Fetching single currencie
export const getCryptoName = createAsyncThunk(
  "singleCrypto/getCryptoName",
  (name) => {
    return fetch(`${CRYPTO_ENDPOINT}/${name}`)
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
    //Search form handle change
    handleChange: (state, { payload: { value } }) => {
      state.search = value;
    },
    clearSearch: (state) => {
      state.search = "";
    },
    clearCurrency: (state) => {
      state.singleCurrency = "";
    },
    addToFavorites: (state, { payload: { singleCurrency } }) => {
      state.favoritesList = [...state.favoritesList, singleCurrency];
    },
    removeFromFavorites: (state, { payload }) => {
      state.favoritesList = state.favoritesList.filter(
        (item) => item.id !== payload.id
      );
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
    [getCryptoName.pending]: (state) => {
      state.isLoadingSingle = true;
    },
    [getCryptoName.fulfilled]: (state, action) => {
      state.isLoadingSingle = false;
      state.singleCurrency = action.payload.data;
    },
    [getCryptoName.rejected]: (state, action) => {
      state.isLoadingSingle = false;
    },
  },
});

export const {
  showLoading,
  hideLoading,
  handleChange,
  clearCurrency,
  clearSearch,
  addToFavorites,
  removeFromFavorites,
} = allCryptoSlice.actions;
export default allCryptoSlice.reducer;
