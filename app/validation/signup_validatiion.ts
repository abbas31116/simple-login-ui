import * as yup from "yup";

export const phoneValidationSchema = yup.object().shape({
  phone: yup
    .string()
    .required("Phone is reqiured")
    .min(11, "enter vaild phone")
    .max(11, "phone invalid"),
});
export const registerValidation = yup.object().shape({
  f_name: yup.string().required("اسم اجباری"),
  l_name: yup.string().required("فامیل اجباری"),
  email: yup.string()

})