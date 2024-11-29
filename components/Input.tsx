"use client"
import React, { useState } from 'react'

interface InputType{
    inputClass?:string
    name:string
    type:"text" | "password" | "email"
    placeholder:string
}

const Input:React.FC<InputType> = ({name,placeholder,type,inputClass}) => {
    const [focus,setFocus] = useState<boolean>(false)
  return (
    <input onBlur={() => setFocus(false)} onFocus={() => setFocus(true)} type={type} name={name} placeholder={placeholder} className={`${inputClass} ${focus ? "border-[#46A358]" : 'border-[#EAEAEA]'} rounded-[5px] border-[1px] py-[12px] pl-[14px] outline-none text-[#46A358] w-full `} />
  )
}

export default Input