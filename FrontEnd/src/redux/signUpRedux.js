import { createSlice } from "@reduxjs/toolkit";

const signUpSlice = createSlice({
  name: "signUp",
  initialState: {
    newUser: JSON.parse(localStorage.getItem("user")) || null,
    userRegistered: !!localStorage.getItem("user"),
    error: false,
  },
  reducers: {
    signUpStart: (state) => {
      state.userRegistered = true;
    },
    signUpSuccess: (state, action) => {
      state.newUser = action.payload;
      state.error = false;
    },
    signUpFailure: (state) => {
      state.userRegistered = false;
      state.error = true;
    },
  },
});

export const { signUpStart, signUpFailure, signUpSuccess } =
  signUpSlice.actions;

export default signUpSlice.reducer;
