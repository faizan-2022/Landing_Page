import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  accessToken: localStorage.getItem("accessToken") || null,
  error: false,
};

const signOutSlice = createSlice({
  name: "signOut",
  initialState,
  reducers: {
    signOutUser: (state) => {
      state.user = null;
      state.accessToken = null;
      localStorage.removeItem("username");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("img");
      localStorage.removeItem("userId");
      localStorage.removeItem("email");
    }
  },
});

export const { signOutUser } = signOutSlice.actions;

export default signOutSlice.reducer;