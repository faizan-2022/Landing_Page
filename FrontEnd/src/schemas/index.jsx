import * as Yup from "yup";

export const signUpSchema = Yup.object({
    username: Yup.string().min(4).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter"
    )
    .matches(
      /^(?=.*[a-z])/,
      "Password must contain at least one lowercase letter"
    )
    .matches(/^(?=.*\d)/, "Password must contain at least one digit")
    .matches(
      /^(?=.*[!@#$%^&*(),.?":{}|<>])/,
      "Password must contain at least one special character"
    ),
    click: Yup.boolean().oneOf([true], "You must accept the terms and conditions").required("You must accept the terms and conditions")
});

export const logInSchema = Yup.object({
    username: Yup.string().min(4).max(25).required("Please enter your name"),
    password: Yup.string().required("Password is required")
})