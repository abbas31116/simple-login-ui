import { useFormik } from "formik";
import { useState } from "react";
import { CustomButton3 } from "~/component/componentButton";
import CustomInput from "~/component/componentInput";
import { AUTH_BG } from "~/lib/constant";
import { phoneValidationSchema, registerValidation } from "~/validation/signup_validatiion";

enum AuthFormState {
  GET_PHONE = "get phone",
  OTP = "otp",
  REGISTER = "register",
}

interface UserData {
  created_at: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  phone: string;
  role: string;
  updated_at: string;
}

export default function Home() {
  const [authState, setAuthState] = useState<AuthFormState>(
    AuthFormState.GET_PHONE
  );
  let userData: UserData | null = null;
  const phoneFormik = useFormik({
    initialValues: {
      phone: "",
    },
    onSubmit(values, formikHelpers) {
      // api
      //   .post("auth/signin", {
      //     phone: values.phone,
      //   })
      //   .then((res) => {
      //     if (res.status == 201) {
      //       setAuthState(AuthFormState.OTP);
      //       userData = res.data;
      //     } else {
      //     }
      //   });
      setAuthState(AuthFormState.REGISTER);
      // formikHelpers.resetForm();
      console.log("adsdada")
    },
    validationSchema: phoneValidationSchema,
  });
  const otpFormik = useFormik({
    initialValues: {
      user_id: null,
      phone: "",
      otp_code: "",

    },
    onSubmit(values, formikHelpers) { },
  });
  const registerFormik = useFormik({
    initialValues: {
      f_name: "",
      l_name: "",
      email: "",
    },
    onSubmit(values, formikHelpers) {
      setAuthState(AuthFormState.GET_PHONE);
      formikHelpers.resetForm()
    },
    validationSchema: registerValidation
  });

  return (
    <div className="w-screen h-screen grid grid-cols-2" dir="rtl">
      <div className="bg-primary place-content-center place-items-center">
        <img src={AUTH_BG} alt="" />
      </div>
      <div className="place-content-center place-items-center">
        <form
          className="space-y-4"
          onSubmit={
            authState == AuthFormState.GET_PHONE
              ? phoneFormik.handleSubmit
              : authState == AuthFormState.OTP
                ? otpFormik.handleSubmit
                : registerFormik.handleSubmit
          }
        >
          <div className="h-40 w-40 bg-primary rounded-full place-self-center"></div>
          <p className="font-black ">ورود</p>

          {authState == AuthFormState.GET_PHONE ? (
            <>
              <p className="text-gray-400">لطفا شماره تماس خود را وارد کنید</p>
              <CustomInput
                name="phone"
                onChange={phoneFormik.handleChange}
                value={phoneFormik.values.phone}
                errorMsg={phoneFormik.errors.phone}
                title="شماره تماس"
                placeHolder="**** *** **۰۹"
              />
            </>
          ) : authState == AuthFormState.OTP ? (
            <>
              <p className="text-gray-400">
                کد وارد شده به شماره ی {phoneFormik.values.phone} وارد کنید
              </p>
              <CustomInput
                name="otp_code"
                onChange={otpFormik.handleChange}
                value={otpFormik.values.otp_code}
                errorMsg={otpFormik.errors.otp_code}
                title="کد احراز هویت"
                placeHolder="******"
              />
            </>
          ) : (
            <>
              <p className="text-gray-400">
                ساخت اکانت
              </p>
              <CustomInput
                name="f_name"
                onChange={registerFormik.handleChange}
                value={registerFormik.values.f_name}
                errorMsg={registerFormik.errors.f_name}
                title="اسم"
                placeHolder="john"
              />
              <CustomInput
                name="l_name"
                onChange={registerFormik.handleChange}
                value={registerFormik.values.l_name}
                errorMsg={registerFormik.errors.l_name}
                title="فامیل"
                placeHolder="morphin"
              />
              <CustomInput
                name="email"
                onChange={registerFormik.handleChange}
                value={registerFormik.values.email}
                errorMsg={registerFormik.errors.email}
                title="ایمیل"
                placeHolder="(اختیاری) johnmorphin@gmail.com"
              />
            </>
          )}
          <CustomButton3 type="submit" title="ثبت" className="w-full" />

        </form>
      </div>
    </div>
  );
}

// first_name -> req
//last_name ->>req
//email ->optional
