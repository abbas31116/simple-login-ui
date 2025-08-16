// import { useEffect, useState } from "react";
// import type { Route } from "./+types/home";

import { Divide, Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useNavigation } from "react-router";
import { CustomButton3 } from "~/component/componentButton";
import ListComponent from "~/component/list";
import CustomHeader from "~/layouts/header";
import Products from "./products";

export default function Home() {
  const nav = useNavigate();
  const [count, setCount] = useState(1);
  return (
    <div>
      {/* <Products CustomsetCounter={setCount} />
      {/* <button onClick={() => setCount(count + 1)}>+</button> */}
      {/* count : {count} */}
    </div>
  );
}
