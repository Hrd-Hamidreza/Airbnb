//! ---------------------------------------- Import
import * as yup from "yup";
//! ---------------------------------------- Variables
export const registerValidation = yup.object({
  firstName: yup.string().trim().required("Please enter your first name."),
  lastName: yup.string().trim().required("Please enter your last name."),
  email: yup
    .string()
    .trim()
    .required("Please enter your email.")
    .email("Please enter a validate email."),
  password: yup
    .string()
    .required("Please enter your password.")
    .min(8, "Please enter at least 8 character.")
    .max(12, "Please enter a maximum of 12 character."),
  rePassword: yup
    .string()
    .required("Please confirm your password.")
    .oneOf(
      [yup.ref("password")],
      "Password and confirm password do not match.",
    ),
});
