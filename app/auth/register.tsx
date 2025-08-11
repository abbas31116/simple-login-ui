import { Link } from "react-router";
import CustomButton, { Custombutton2 } from "~/component/componentButton";
import CustomInput from "~/component/componentInput";

export default function login() {
    return (
        <div className="shadow-xl shadow-blue-800 w-150 h-180 ml-180 mt-40 rounded-4xl">
            <Custombutton2 title="back" />
            <CustomInput labels={"block mt-5 ml-25 p-4  text-gray-500"} title={"Email"} />
            <CustomInput labels={"block mt-2 ml-25 p-4 text-gray-500"} title={"Name"} />
            <CustomInput labels={"block mt-2 ml-25 p-4 text-gray-500"} title={"Last name"} />
            <CustomInput labels={"block mt-2 ml-25 p-4 text-gray-500"} title={"Password"} />
            <CustomButton adress={"#"} css={"bg-blue-800 text-white px-8 py-3 rounded-br-4xl rounded-tl-4xl cursor-pointer my-20 ml-60"} title={"Register"} />
        </div>
    )
}