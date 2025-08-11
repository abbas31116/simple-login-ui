import CustomInput from "~/component/componentInput";
import CustomButton, { Custombutton2 } from "~/component/componentButton";
import { Link } from "react-router";


export default function login() {
    return (
        <div className="shadow-xl shadow-blue-800 w-150 h-150 ml-180 mt-50 rounded-4xl">
            <Custombutton2 title="back"/>
            <CustomInput labels={"block mt-10 ml-25 p-4  text-gray-500"} title={"Email"} />
            <CustomInput labels={"block mt-5 ml-25 p-4 text-gray-500"} title={"Password"} />
            <Link to="#" className="ml-74 text-blue-500 underline">Forget My Password</Link><br />
            <CustomButton adress={"#"} css={"bg-blue-800 text-white px-8 py-3 rounded-br-4xl rounded-tl-4xl cursor-pointer my-20 ml-60"} title={"login"} />
        </div>
    )
}