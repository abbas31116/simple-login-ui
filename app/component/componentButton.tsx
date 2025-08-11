import { useNavigate } from "react-router"
export default CustomButton

interface ICustombutton {
  adress: string
  css: string
  title: string
  // border:string
  // padding:string
  // margin:string
}
function CustomButton({ adress, css, title }: ICustombutton) {

  const nav = useNavigate()
  return (<button className={css} onClick={() => { nav(`${adress}`) }}>{title}</button>)
}

export function Custombutton2({ title }: { title: string }) {
  const nav = useNavigate()
  return (<button className={"bg-blue-800 text-white px-8 py-3 rounded-br-4xl rounded-tl-4xl cursor-pointer"} onClick={() => { nav(-1) }}>{title}</button>)
}