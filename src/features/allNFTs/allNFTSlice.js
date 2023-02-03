import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_NFT = "c0ee50b3-7ec8-4e13-b444-8ec3885dda62";

const initialState = {
  nftList: [],
  isLoading: false,
  pageNumber: 1,
  hasMore: false,
  error: false,
};

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: API_NFT,
  },
};

export const getNFT = createAsyncThunk("allNFT/getNFT", (pageNum) => {
  return fetch(
    `https://api.nftport.xyz/v0/nfts/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d?chain=ethereum&page_number=${pageNum}&page_size=10&include=metadata&refresh_metadata=false`,
    options
  )
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
});

const allNFTSlice = createSlice({
  name: "allNFT",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    setPage: (state, { payload }) => {
      state.pageNumber = state.pageNumber + payload;
    },
  },
  extraReducers: {
    [getNFT.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [getNFT.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasMore = true;
      state.nftList = [...state.nftList, ...action.payload.nfts];
    },
    [getNFT.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default allNFTSlice.reducer;
export const { showLoading, hideLoading, setPage } = allNFTSlice.actions;
