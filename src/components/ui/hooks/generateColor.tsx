import { useEffect, useState } from "react";


export default function useGenerateRandomColor(): string {
  const [color, setColor] = useState <string>("#000000");

  const generateColor = () => {
    setColor(Math.floor(Math.random() * 16777215).toString(16));
  };
  useEffect(() => {
    generateColor();
  },[])

  return  color
}