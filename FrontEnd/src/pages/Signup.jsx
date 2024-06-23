import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
import { signUp } from "../redux/apiCalls";

const initialValues = {
  username: "",
  email: "",
  password: "",
  click: false,
};

const Signup = () => {
  const [password, setPassword] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePassword = () => {
    setPassword(!password);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        signUp(dispatch, values, navigate);
        action.resetForm();
      },
    });

  return (
    <section
      className="min-h-screen bg-cover flex items-center justify-left"
      style={{ backgroundImage: "url('/images/signup_img.jpg')" }}
    >
      <div
        className="ml-auto mr-32 py-4 px-6 w-[25%] border-2 border-white"
        style={{ backgroundColor: "#101010", borderRadius: "25px" }}
      >
        <h1 className="p-0 text-2xl font-semibold flex items-center justify-center mb-4">
          CREATE AN ACCOUNT
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="flex text-md mb-2" htmlFor="username">
            Username <p className="text-red-500 ml-2">*</p>
          </label>
          <input
            className="p-1 flex-1 text-black rounded-lg"
            type="text"
            id="username"
            name="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your username"
            maxlength="25"
          />

          {errors.username && touched.username ? (
            <p
              style={{
                color: "red",
                fontSize: "1rem",
              }}
            >
              {errors.username}
            </p>
          ) : null}

          <label className="flex text-md mt-4 mb-2" htmlFor="Email">
            E-mail <p className="text-red-500 ml-2">*</p>
          </label>
          <input
            className="p-1 flex-1 text-black rounded-lg"
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your email address"
          />

          {errors.email && touched.email ? (
            <p
              style={{
                color: "red",
                fontSize: "1rem",
              }}
            >
              {errors.email}
            </p>
          ) : null}

          <label className="flex text-md mt-4 mb-2" htmlFor="username">
            Password <p className="text-red-500 ml-2">*</p>
          </label>
          <div
            className="w-full flex items-center"
            style={{ position: "relative" }}
          >
            <input
              className="p-1 flex-1 text-black rounded-lg"
              type={password ? "password" : "text"}
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your password"
            />

            <div className="absolute right-1 cursor-pointer">
              {password ? (
                <VisibilityOffIcon
                  style={{ fontSize: "1.5rem", color: "#101010" }}
                  onClick={handlePassword}
                />
              ) : (
                <VisibilityIcon
                  style={{ fontSize: "1.5rem", color: "#101010" }}
                  onClick={handlePassword}
                />
              )}
            </div>
          </div>

          {errors.password && touched.password ? (
            <p
              style={{
                color: "red",
                fontSize: "1rem",
              }}
            >
              {errors.password}
            </p>
          ) : null}

          <span className="text-base mt-4">
            <input
              className="p-4 mr-2 bg-gray-200"
              type="checkbox"
              id="click"
              name="click"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.click}
            />
            I agree to the processing of my data as per the{" "}
            <span className="text-yellow-400 cursor-pointer ">
              PRIVACY POLICY
            </span>
          </span>

          {errors.click && touched.click ? (
            <p
              style={{
                color: "red",
                fontSize: "1rem",
              }}
            >
              {errors.click}
            </p>
          ) : null}

          <button
            className="bg-transparent py-2 px-4 border-2 border-white text-sm text-white font-semibold cursor-pointer mx-auto my-4 hover:bg-yellow-400 hover:border-yellow-400 hover:text-black transition duration-300"
            aria-label="Submit Form"
            type="submit"
          >
            Sign Up
          </button>

          {/* <p className='mb-1 text-yellow-400 cursor-pointer'>Forgot Password?</p> */}

          <p className="mb-4">
            Already have an account?{" "}
            <Link to="/login" className="text-yellow-400">
              Log in
            </Link>
          </p>

          <Link to="/">
            <button className="bg-transparent py-1 px-2 border-2 border-white text-sm text-white cursor-pointer mx-auto hover:bg-yellow-400 hover:border-yellow-400 hover:text-black transition duration-300">
              Home
            </button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Signup;
