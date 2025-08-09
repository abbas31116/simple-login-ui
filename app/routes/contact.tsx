import { useNavigate } from "react-router"
import CustomButton from "~/components/ui/button"

export default function Home(){
const nav=useNavigate()
return <div>
<button onClick={()=>{nav('/search')}}>
 <CustomButton title="search" size={20} color="bg-black text-white"/>
</button>
<button onClick={()=>{nav(-1)}}>
    <CustomButton title="back" size={20} color="bg-black text-white"/> 
</button>
    </div>
}
