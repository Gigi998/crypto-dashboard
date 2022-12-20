import { configureStore } from "@reduxjs/toolkit";

import allCryptoSlice from "./features/allCrypto/allCryptoSlice";
import allNFTSlice from "./features/allNFTs/allNFTslice";
import allTransactionsSlice from "./features/allTransactions/allTransactionsSlice";

export const store = configureStore({
  reducer: {
    allCrypto: allCryptoSlice,
    allNFT: allNFTSlice,
    allTransactions: allTransactionsSlice,
  },
});
