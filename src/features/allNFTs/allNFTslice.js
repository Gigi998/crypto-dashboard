import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_NFT = "DL6zzl3l5DxDmdcyO9wiDR8RPw3hHDuF";
const NFT_ENDPOINT =
  "https://api.blockspan.com/v1/nfts?chain=eth-main&page_size=100";

const initialState = {
  nftList: [],
  isLoading: false,
};
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "X-API-KEY": API_NFT,
  },
};

export const getNFT = createAsyncThunk("allNFT/getNFT", () => {
  return fetch(NFT_ENDPOINT, options)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

const allNFTSlice = createSlice({
  name: "allNFT",
  initialState,
  extraReducers: {
    [getNFT.pending]: (state) => {
      state.isLoading = true;
    },
    [getNFT.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.nftList = action.payload.results;
    },
    [getNFT.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default allNFTSlice.reducer;
