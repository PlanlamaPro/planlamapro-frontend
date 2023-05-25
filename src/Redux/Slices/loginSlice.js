import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "lgnSlc",
  initialState: {
    loginInfo: {
      username: "",
      password: "",
    },
    jwtToken: "",
  },
  reducers: {
    updateLgnInfos: {
      reducer: (state, action) => {
        state.loginInfo.username =
          action.payload.username ?? state.loginInfo.username;

        state.loginInfo.password =
          action.payload.password ?? state.loginInfo.password;
      },
    },
    saveJwtLgn: {
      reducer: (state, action) => {
        state.jwtToken = action.payload.token;
      },
    },
  },
});

export const { updateLgnInfos, saveJwtLgn } = loginSlice.actions;
export default loginSlice.reducer;
