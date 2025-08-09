// import { useEffect, useState } from "react";
// import type { Route } from "./+types/home";

import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useNavigation } from "react-router";
import CustomButton from "~/components/ui/button";



export default function Home() {
  const nav = useNavigate()


  const [currentState, setCurrentState] = useState("login");

  const handleBtn = (newState: string) => {
    setCurrentState(newState);
  };


  return (
    <div>
      <div className="grid grid-cols-2 gap-1.5">
        <div>
          <div className="grid grid-cols-3 gap-1.5 m-7 ml-80">
            <img src="images.png" alt="logo" className="mt-9" />
            <p className="mt-20 italic text-4xl -m-10 text-blue-500">Pe</p>
            <p className="mt-20 italic text-4xl -m-50 text-red-600">Psi</p>
          </div>
          <div className="ml-50 shadow-xl shadow-gray-500 w-150 h-150 rounded-2xl">
            <h1 className="text-4xl text-center ">Sign In</h1>
            <p className="text-2xl text-center text-gray-600 my-8 ">
              Welcome The Pepsi Community
            </p>
            <div className="place-content-center place-items-center w-full flex gap-4">
              <button onClick={() => { nav('contacts') }}>
                <CustomButton title="contacts" size={20} color="bg-black text-white" />
              </button>
              <button onClick={() => { nav('search') }}>
                <CustomButton title="search" size={20} color="bg-black text-white" />
              </button>
            </div>
            {currentState == "signup" ? (
              <>
                <label htmlFor="Email" className="ml-10 text-gray-500">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="border-2 border-gray-300 rounded-md w-130 p-2 ml-10 my-2 "
                />
                <br />
                <label htmlFor="Email" className="ml-10 text-gray-500">
                  Name
                </label>
                <input
                  type="text"
                  className="border-2 border-gray-300 rounded-md w-130 p-2 ml-10 my-2 "
                />
                <br />
                <label htmlFor="Password" className="ml-10 text-gray-500">
                  Password:
                </label>
                <br />
                <input
                  type="text"
                  className="border-2 border-gray-300 rounded-md w-130 p-2 ml-10 my-2"
                />
                <br />
                <input type="checkbox" className="ml-10" />
                <label className="ml-2">Remember For 30 Days</label>
                <a href="#" className="ml-50 text-blue-500">
                  Forget Password
                </a>{" "}
                <br />
                <button
                  type="button"
                  className="border-2 px-30 cursor-pointer rounded-xl py-4 bg-blue-600 text-white  hover:bg-black m-30  w-100"
                >
                  {currentState}
                </button>
              </>
            ) : (
              <>
                <label htmlFor="Email" className="ml-10 text-gray-500">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="border-2 border-gray-300 rounded-md w-130 p-2 ml-10 my-2 "
                />
                <br />
                <label htmlFor="Password" className="ml-10 text-gray-500">
                  Password:
                </label>
                <br />
                <input
                  type="text"
                  className="border-2 border-gray-300 rounded-md w-130 p-2 ml-10 my-2"
                />
                <br />
                <input type="checkbox" className="ml-10" />
                <label className="ml-2">Remember For 30 Days</label>
                <a href="#" className="ml-50 text-blue-500">
                  Forget Password
                </a>{" "}
                <br />
                <button
                  type="button"
                  className="border-2 px-30 cursor-pointer rounded-xl py-4 bg-blue-600 text-white  hover:bg-black m-30  w-100"
                >
                  {currentState}
                </button>
              </>
            )}
          </div>
        </div>
        <div>
          <img
            src="e4a6cd37-f974-4e13-b3a9-1e9377dd734d_802279134.png"
            alt="pepsi"
            className="rounded-xl w-225 m-8"
          />
        </div>
      </div>
    </div>
  );
}

// interface photoModel {
//   albumId: number;
//   id: number;
//   url: string;
//   title: string;
//   thumbnailUrl: string;
// }

// export default function Home() {
//   const [loading, setLoading] = useState(true);
//   const [photos, setPhotos] = useState<photoModel[]>();

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/photos")
//       .then((res) => {
//         if (res.ok) {
//           setLoading(false);
//           return res.json();
//         }
//       })
//       .then((data: photoModel[]) => {
//         setPhotos(data);
//       });
//   }, []);

//   return (
//     <div className="p-10 place-content-start place-items-start">
//       {loading ? (
//         <Loader className="animate-spin text-black" size={70} />
//       ) : (
//         photos?.map((item, index) => {
//           return (
//             <div key={`phtos-${index}`} className="border-b py-6">
//               <img src={item.thumbnailUrl} alt="" />
//               <h1>{item.title}</h1>
//               <p>{item.url}</p>
//             </div>
//           );
//         })
//       )}
//     </div>
//   );
// }
