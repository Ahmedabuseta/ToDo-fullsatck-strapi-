import { ReactNode } from "react";

interface Props {
  msg : string | undefined |ReactNode
  className? : string;

}

function ErrorMsg({msg, className}: Props) {

  return (
    <span className={` text-red-700 ${className}`} >
      {msg}*
    </span>
  )
}

export default ErrorMsg
