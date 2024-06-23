import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { signOutUser } from "../redux/signOutRedux";
import { useDispatch } from "react-redux";

const SignOut = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signOutUser());
  }, [dispatch]);

  return <Navigate to="/login" />;
  // <div>hi</div>
};

export default SignOut;
