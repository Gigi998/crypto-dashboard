import { configureStore } from "@reduxjs/toolkit";

import allCryptoSlice from "./features/allCrypto/allCryptoSlice";

import singleCryptoSlice from "./features/singleCrypto/singleCryptoSlice";

export const store = configureStore({
  reducer: {
    allCrypto: allCryptoSlice,
    singleCrypto: singleCryptoSlice,
  },
});
