import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./Slices/loginSlice";
import signupSlice from "./Slices/signupSlice";
import roomSlice from "./Slices/roomSlice";

export const store = configureStore({
  reducer: {
    rmmSlc: roomSlice,
    lgnSlc: loginSlice,
    sgnSlc: signupSlice,
  },
});
