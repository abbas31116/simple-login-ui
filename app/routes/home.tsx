// import { useEffect, useState } from "react";
// import type { Route } from "./+types/home";

import { Divide, Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useNavigation } from "react-router";
import { CustomButton3 } from "~/component/componentButton";
import ListComponent from "~/component/list";

export default function Home() {
  const nav = useNavigate();
  return (
    <div className="w-full place-content-center place-items-center space-y-5">
      <img
        src="e4a6cd37-f974-4e13-b3a9-1e9377dd734d_802279134.png"
        alt="s"
        className="rounded-full w-170 h-170 "
      />

      <div className="place-content-center place-items-center space-x-6">
        <CustomButton3
          title={"Login"}
          onClick={() => {
            nav("login");
          }}
        />
        <CustomButton3
          title={"Register"}
          onClick={() => {
            nav("register");
          }}
        />
      </div>
    </div>
  );
}
