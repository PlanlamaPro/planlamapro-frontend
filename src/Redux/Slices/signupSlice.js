import { createSlice } from "@reduxjs/toolkit";

export const signupSlice = createSlice({
  name: "sgnSlc",
  initialState: {
    sgnInfo: {
      firstName: "",
      lastname: "",
      gender: "Male",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    jwtToken: "",
  },
  reducers: {
    updateInfos: {
      reducer: (state, action) => {
        state.sgnInfo.firstName =
          action.payload.firstName ?? state.sgnInfo.firstName;
        state.sgnInfo.lastname =
          action.payload.lastname ?? state.sgnInfo.lastname;
        state.sgnInfo.password =
          action.payload.password ?? state.sgnInfo.password;
        state.sgnInfo.confirmPassword =
          action.payload.confirmPassword ?? state.sgnInfo.confirmPassword;
        state.sgnInfo.gender = action.payload.gender ?? state.sgnInfo.gender;
        state.sgnInfo.email = action.payload.email ?? state.sgnInfo.email;
        state.sgnInfo.username =
          action.payload.username ?? state.sgnInfo.username;
      },
    },
    saveJwt: {
      reducer: (state, action) => {
        state.jwtToken = action.payload.token;
      },
    },
  },
});

export const { updateInfos, saveJwt } = signupSlice.actions;
export default signupSlice.reducer;
