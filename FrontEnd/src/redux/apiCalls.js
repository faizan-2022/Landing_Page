import { Bounce, toast } from "react-toastify";
import { publicRequest } from "../requestMethods";
import { logInFailure, logInStart, logInSuccess } from "./logInRedux";
import { signUpFailure, signUpStart, signUpSuccess } from "./signUpRedux";

// API calling for sign-up
export const signUp = async (dispatch, user, navigate) => {
  dispatch(signUpStart());
  try {
    const res = await publicRequest.post("/auth/signup", user);
    // console.log(res)
    dispatch(signUpSuccess());

    const accessToken = res.data.accessToken;
    localStorage.setItem("accessToken", JSON.stringify(accessToken));

    const img = res.data.img;
    localStorage.setItem("img", JSON.stringify(img));

    const email = res.data.email;
    localStorage.setItem("email", JSON.stringify(email));

    const username = res.data.username;
    localStorage.setItem("username", JSON.stringify(username));

    const _id = res.data._id;
    localStorage.setItem("userId", JSON.stringify(_id));

    toast.success("User Registered", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

    navigate("/");
  } catch {
    dispatch(signUpFailure());

    toast.error("Registration Failed", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }
};

// API calling for log-in
export const logIn = async (dispatch, user, navigate) => {
  dispatch(logInStart());
  try {
    const res = await publicRequest.post("/auth/login", user);

    dispatch(logInSuccess());

    const accessToken = res.data.accessToken;
    localStorage.setItem("accessToken", JSON.stringify(accessToken));

    const img = res.data.img;
    localStorage.setItem("img", JSON.stringify(img));

    const email = res.data.email;
    localStorage.setItem("email", JSON.stringify(email));

    const username = res.data.username;
    localStorage.setItem("username", JSON.stringify(username));

    const _id = res.data._id;
    localStorage.setItem("userId", JSON.stringify(_id));

    toast.success("User LogedIn", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

    navigate("/");
  } catch {
    dispatch(logInFailure());

    toast.error("LogIn Failed", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }
};
