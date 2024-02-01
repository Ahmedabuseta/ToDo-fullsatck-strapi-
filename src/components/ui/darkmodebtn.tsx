import { MoonStar, Sun } from "lucide-react"
import { useState } from "react"
import Button from "./Button";

function DarkModeBtn() {
const [theme , setTheme ] = useState(true);
const onChangeTheme = () => {
  setTheme(!theme)
  
  darkMode()
}
const darkMode =()=>{
theme ? localStorage.theme = 'dark' :localStorage.theme = 'light';
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
}
  return (
    <>
    {theme ? 
      <Button onClick={onChangeTheme}>
      <MoonStar />
      </Button> : 
      <Button onClick={onChangeTheme}>
        <Sun />
        </Button>
    }
    </>
    
    
  )
}

export default DarkModeBtn
