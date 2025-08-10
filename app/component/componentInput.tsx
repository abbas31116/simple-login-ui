import { Divide, LucideArrowBigLeft } from "lucide-react";
export default CustomInput
interface ICustominput {
    css: string
    title:string
}
function CustomInput({css,title}:ICustominput) {
    return (
        <div>
            <label className={css}>{title}</label>
            <input type="text" />
        </div>)
}