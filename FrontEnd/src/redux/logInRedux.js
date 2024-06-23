import {createSlice} from "@reduxjs/toolkit"

const logInSlice = createSlice({
    name: "logIn",
    initialState:{
    existingUser: JSON.parse(localStorage.getItem("user")) || null,
    checkingUser: !!localStorage.getItem("user"),
    error: false
    },
    reducers:{
        logInStart: (state)=>{
            state.checkingUser = true;
        },
        logInSuccess: (state,action)=>{
            state.existingUser = action.payload;
            state.error = false
        },
        logInFailure: (state)=>{
            state.checkingUser = false;
            state.error = true;
        },
    }
});

export const {logInStart, logInSuccess, logInFailure} = logInSlice.actions;
export default logInSlice.reducer;