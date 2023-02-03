import { configureStore } from "@reduxjs/toolkit";

import allCryptoSlice from "./features/allCrypto/allCryptoSlice";
import allNFTSlice from "./features/allNFTs/allNFTSlice";
import allTransactionsSlice from "./features/allTransactions/allTransactionsSlice";
import singleCryptoSlice from "./features/singleCrypto/singleCryptoSlice";

export const store = configureStore({
  reducer: {
    allCrypto: allCryptoSlice,
    allNFT: allNFTSlice,
    allTransactions: allTransactionsSlice,
    singleCrypto: singleCryptoSlice,
  },
});
