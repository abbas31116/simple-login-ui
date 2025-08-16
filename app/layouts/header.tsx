import path from "path";
import { title } from "process";
import { useNavigate } from "react-router";

const items = [
  { title: "Create A Store", path: "/" },
  { title: "Advertise", path: "/advertise" },
  { title: "Program", path: "/program" },
  { title: "Aboute", path: "/about-us" },
];
export default function CustomHeader() {
  const nav = useNavigate();
  return (
    <div className=" w-full p-10  bg-amber-400 flex justify-between items-center">
      <p className=" ">Aicm</p>
      <div className="flex items-center gap-5">
        {items.map((item, index) => (
          <button
            className="m-10 hover:cursor-pointer"
            key={`header-${index}`}
            onClick={() => {
              console.log(item.path);
              nav(item.path);
            }}
          >
            {item.title}
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          console.log("first");
        }}
        className="bg-gray-500 p-5 rounded-2xl  hover:cursor-pointer"
      >
        Get Sterted
      </button>
    </div>
  );
}
