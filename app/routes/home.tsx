// import { useEffect, useState } from "react";
// import type { Route } from "./+types/home";

import { Divide, Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useNavigation } from "react-router";
import CustomButton from "~/component/componentButton";




export default function Home() {

  return (
    <div className="ml-50">
      <img src="e4a6cd37-f974-4e13-b3a9-1e9377dd734d_802279134.png" alt="s" className="rounded-full w-170 h-170 ml-100" />
      <CustomButton adress={"login"} css={"bg-blue-800 text-white m-10 ml-150 px-8 py-3  cursor-pointer rounded-br-4xl rounded-tl-4xl"} title={"Login"} />
      <CustomButton adress={"register"} css={"bg-blue-800 text-white px-8 py-3 rounded-br-4xl rounded-tl-4xl cursor-pointer"} title={"register"} />
      
    </div>);
}



