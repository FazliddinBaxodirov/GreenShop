import React, { ReactNode } from 'react'
interface ButtonType{
    title:string
    type:"button" | "submit" | "reset"
    onClick?:() => void
    extraClass?:string
    leftIcon?:ReactNode
    rightIcon?:ReactNode
}

const Button:React.FC<ButtonType> = ({onClick,title,type,extraClass,leftIcon,rightIcon}) => {
  return (
    <button onClick={onClick} type={type} className={`${extraClass} py-[7px] flex items-center justify-center rounded-[6px] bg-[#46A358] text-white  text-[16px]`}> 
        {leftIcon && leftIcon}
        {title}
        {rightIcon && rightIcon}
    </button>
  )
}

export default Button
