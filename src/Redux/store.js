import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./Slices/loginSlice";
import signupSlice from "./Slices/signupSlice";

export const store = configureStore({
  reducer: {
    lgnSlc: loginSlice,
    sgnSlc: signupSlice,
  },
});
