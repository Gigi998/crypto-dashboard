import { configureStore } from "@reduxjs/toolkit";

import allCryptoSlice from "./features/allCrypto/allCryptoSlice";

export const store = configureStore({
  reducer: {
    allCrypto: allCryptoSlice,
  },
});
