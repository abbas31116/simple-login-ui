import { useNavigate } from "react-router"
export default Custombutton
interface ICustombutton{
adress:string
css:string
title:string
// border:string
// padding:string
// margin:string
}
function Custombutton({adress,css,title}:ICustombutton){
     
 const nav = useNavigate()
   return (<button className={css} onClick={()=>{nav(`${adress}`)}}>{title}</button>)
}