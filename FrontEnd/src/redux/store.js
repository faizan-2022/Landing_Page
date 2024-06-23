import {configureStore} from "@reduxjs/toolkit";
import signUpRedux from "./signUpRedux";
import logInRedux from "./logInRedux";
import signOutRedux from "./signOutRedux";

export const store = configureStore({
    reducer:{
        signUp: signUpRedux,
        logIn: logInRedux,
        signOut: signOutRedux
    }
})