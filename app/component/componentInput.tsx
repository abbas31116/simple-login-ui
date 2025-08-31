import { Divide, LucideArrowBigLeft } from "lucide-react";
import type { HTMLAttributes, InputHTMLAttributes } from "react";
export default CustomInput;
interface ICustominput extends InputHTMLAttributes<HTMLInputElement> {
  placeHolder: string;
  title: string;
  errorMsg?: string;
}
function CustomInput({ placeHolder, errorMsg, title, ...props }: ICustominput) {
  return (
    <div>
      <label>{title}</label>
      <input
        type="text"
        placeholder={placeHolder}
        className={"border-2 border-gray-300 rounded-md w-80 p-2 "}
        {...props}
      />
      {errorMsg && <label className="text-red-500 font-bold">{errorMsg}</label>}
    </div>
  );
}
