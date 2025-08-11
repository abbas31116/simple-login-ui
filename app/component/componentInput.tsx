import { Divide, LucideArrowBigLeft } from "lucide-react";
export default CustomInput
interface ICustominput {
    labels: string
    title: string
}
function CustomInput({ labels, title }: ICustominput) {
    return (
        <div>
            <label className={labels}>{title}</label>
            <input type="text" className={"border-2 border-gray-300 rounded-md w-80 p-2 ml-30"} />
        </div>)
}