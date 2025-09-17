import { useContext } from "react";
import { Link } from "react-router";
import { CustomButton3 } from "~/component/componentButton";
import CustomInput from "~/component/componentInput";
import { userContext } from "~/component/providers/user_provider";

export default function login() {
  const userCtx = useContext(userContext);
  if (!userCtx) return null;

  const { user } = userCtx;

  return (
    <div className="shadow-xl shadow-blue-800 w-150 h-180 ml-180 mt-40 rounded-4xl">
      {/* <CustomButton3 title="back" />
      <CustomInput
        placeHolder={"block mt-5 ml-25 p-4  text-gray-500"}
        title={"Email"}
      />
      <CustomInput
        placeHolder={"block mt-2 ml-25 p-4 text-gray-500"}
        title={"Name"}
      />
      <CustomInput
        placeHolder={"block mt-2 ml-25 p-4 text-gray-500"}
        title={"Last name"}
      />
      <CustomInput
        placeHolder={"block mt-2 ml-25 p-4 text-gray-500"}
        title={"Password"}
      />
      <CustomButton3 title={"Register"} /> */}
      <h1>name : {user.name}</h1>
    </div>
  );
}
