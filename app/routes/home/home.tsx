import { useContext, useReducer, useState } from "react";
import { cartReducer, type ProductType } from "./reduer";
import { CustomButton3 } from "~/component/componentButton";
import { ThemeContext } from "~/lib/context/theme_context";

import { userContext } from "~/component/providers/user_provider";
import CustomInput from "~/component/componentInput";

export default function Home() {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const [value, setValue] = useState("");

  const userCtx = useContext(userContext);
  if (!userCtx) throw new Error("UserProvider is missing!");

  const { user, setUser } = userCtx;

  return (
    <div className="p-10">
      <div
        className="place-content-center place-items-center w-screen h-96
      "
      >
        <h1>name : {user.name}</h1>
        <h1>last name : {user.last_name}</h1>
      </div>
      <CustomInput
        onChange={(e) => {
          if (e) {
            setValue(e.target.value);
          }
        }}
        title="name"
        placeHolder="name"
      />
      <CustomButton3
        title="update"
        onClick={() => {
          setUser({ ...user, name: value });
        }}
      />
    </div>
  );
}
