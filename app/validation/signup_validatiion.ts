import * as yup from "yup";

export const signupValidationSchema = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  email: yup.string().email("Email invalid").required("Email is required"),
  phone: yup
    .string()
    .required("Phone is reqiured")
    .min(11, "enter vaild phone")
    .max(11, "phone invalid"),
  password: yup
    .string()
    .min(8, "password is weak")
    .required("Password is required"),
});
