import * as yup from "yup";

export const phoneValidationSchema = yup.object().shape({
  phone: yup
    .string()
    .required("Phone is reqiured")
    .min(11, "enter vaild phone")
    .max(11, "phone invalid"),
});
