import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const API_KEY = "c0ee50b3-7ec8-4e13-b444-8ec3885dda62";
const API = `https://api.nftport.xyz/v0/nfts/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d?chain=ethereum&page_number=3&page_size=30&include=metadata&refresh_metadata=false`;

const initialState = {
  nftList: [],
  isLoading: false,
  pageNumber: 1,
  hasMore: true,
  error: false,
};

let cancel;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: API_KEY,
  },
  cancelToken: new axios.CancelToken((c) => {
    cancel = c;
  }),
};

export const getNFT = createAsyncThunk("allNFT/getNFT", (pageNum) => {
  return axios
    .get(
      `https://api.nftport.xyz/v0/nfts/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d?chain=ethereum&page_number=${pageNum}&page_size=30&include=metadata&refresh_metadata=false`,
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
    },
    [getNFT.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.nftList = [...state.nftList, ...action.payload.nfts];
    },
    [getNFT.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default allNFTSlice.reducer;
export const { showLoading, hideLoading, setPage } = allNFTSlice.actions;
