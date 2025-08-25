import { useEffect, useMemo, useState } from "react";
import { api } from "~/lib/axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export default function Home() {
  const [posts, setPosts] = useState<null | Post[]>();
  const [age, setAge] = useState();

  const [render, setRender] = useState(1);
  useEffect(() => {
    console.log("render happen");
    api.get("posts").then((abbas) => {
      console.log(abbas);
      // setPosts(abbas.data);
    });
  }, []);

  // useEffect(() => {
  //   (api.get("posts").then((abbas) => {
  //     console.log(abbas);
  //   }),
  //     []);
  // });

  // const handleAge = useMemo(() => {
  //   console.log("render happen");
  //   if (!age) return null;
  //   const currentAge = new Date().getFullYear();

  //   return currentAge - age;
  // }, [age]);

  const changeHandler = (value: any) => {
    setAge(value.target.value);
  };

  return (
    <div className="p-10">
      {/* {handleAge != null && handleAge} */}
      <input
        placeholder="enter your age"
        className="border block my-5"
        onChange={changeHandler}
      />
      you age is {render}
      <button
        className="bg-red-500 p-5 block cursor-pointer"
        onClick={() => {
          console.log("first");
        }}
      >
        reRender
      </button>
      {posts != null &&
        posts?.map((post, index) => (
          <div key={index} className="border p-5 my-5">
            {post.title}
          </div>
        ))}
    </div>
  );
}
