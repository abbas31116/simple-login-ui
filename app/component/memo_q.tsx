import { memo } from "react";

interface IBtn {
  title: string;
  onClick: () => void;
  data: { title: string };
}

function Btn({ title, onClick, data }: IBtn) {
  console.log("render");
  return (
    <button className="block" onClick={onClick}>
      title:{title} , data: {data.title}
    </button>
  );
}

export default memo(Btn);
