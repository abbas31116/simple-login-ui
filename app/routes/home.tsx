import { useFormik } from "formik";
import { CustomButton3 } from "~/component/componentButton";
import CustomInput from "~/component/componentInput";
import { signupValidationSchema } from "~/validation/signup_validatiion";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export default function Home() {
  const formik = useFormik({
    initialValues: {
      email: "",
      first_name: "",
      last_name: "",
      phone: "",
      password: "",
    },
    onSubmit(values, formikHelpers) {
      console.log(values);
      // send to server = http call

      // ok
      formikHelpers.resetForm();
    },
    validationSchema: signupValidationSchema,
  });
  return (
    <div className="w-screen h-screen place-content-center place-items-center bg-gray-100">
      <div className="bg-white w-96 p-5 space-y-4 rounded-md shadow-md">
        <p className="font-bold place-self-center">Welcom back</p>
        <p className=" place-self-center">Lorem ipsum dolor sit amet</p>
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <CustomInput
            onChange={formik.handleChange}
            value={formik.values.email}
            name="email"
            errorMsg={formik.errors.email}
            title="Email Address"
            placeHolder="Enter Your Email"
          />
          <CustomInput
            name="first_name"
            onChange={formik.handleChange}
            errorMsg={formik.errors.first_name}
            value={formik.values.first_name}
            title="First Name"
            placeHolder="Enter Your First Name"
          />
          <CustomInput
            name="last_name"
            onChange={formik.handleChange}
            errorMsg={formik.errors.last_name}
            value={formik.values.last_name}
            title="Last Name"
            placeHolder="Enter Your Last Name"
          />
          <CustomInput
            name="phone"
            onChange={formik.handleChange}
            errorMsg={formik.errors.phone}
            value={formik.values.phone}
            title="Phone"
            placeHolder="Enter Your Phone"
          />
          <CustomInput
            name="password"
            onChange={formik.handleChange}
            errorMsg={formik.errors.password}
            value={formik.values.password}
            type="password"
            title="Password"
            placeHolder="Enter Your Password"
          />
          <CustomButton3 type="submit" title="Signup" className="w-full" />
        </form>
      </div>
    </div>
  );
}
