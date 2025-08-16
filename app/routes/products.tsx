import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import CustomHeader from "~/layouts/header";

interface IProduct {
  CustomsetCounter: (num: number) => void;
}

export default function Products({ CustomsetCounter }: IProduct) {
  const [counter, setcounter] = useState(1);

  useEffect(() => {
    console.log("component created");

    return () => {
      console.log("compnent removed");
    };
  }, []);

  useEffect(() => {
    console.log("product updated ");
    CustomsetCounter(counter);
  }, [counter]);

  return (
    <div className="">
      {/* <h1>Products </h1>
      <h2>{counter}</h2>
      <button
        className="bg-gray-200 rounded-md p-3"
        onClick={() => setcounter(counter + 1)}
      >
        add product
      </button> */}
    </div>
  );
}
