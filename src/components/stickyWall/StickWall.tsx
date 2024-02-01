import {  IStickyWall } from "../../interface/interfaces";
import Dropdown from "../ui/Menu";

interface iProps {
stickWall:IStickyWall
}

const StickWall = ({stickWall}:iProps) => {
  const {color,title,points,id} = stickWall
return(
<div style={{backgroundColor:`${color}`}} className={`relative ${color} ${color === '#000000' && 'text-white'} rounded-md shadow-md p-4 cursor-pointer hover:-translate-y-2 dark:text-white  w-80 h-80`}>
  <Dropdown id={id}/>
  <h2 className="text-xl font-semibold">{title}</h2>
  <ul className="p-2 ps4">
    {points.map((desc:string,idx:number)=>(
      <li key={idx} className="ps-"> - {desc}</li>
    ))}
  </ul>
</div>
)
}
export default StickWall;