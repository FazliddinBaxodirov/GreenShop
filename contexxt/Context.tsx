"use client"
import React, { createContext, ReactNode, SetStateAction, useState } from "react";
interface ContextType{
    category:string | null
    setCategory:React.Dispatch<SetStateAction<string | null>>
    tags:string | null
    setTags:React.Dispatch<SetStateAction<string | null>>
    size:string | null
    setSize:React.Dispatch<SetStateAction<string | null>>
    minPrice:number | null,
    setMinPrice:React.Dispatch<SetStateAction<number | null>>,
    maxPrice:number | null,
    setMaxPrice:React.Dispatch<SetStateAction<number | null>>
}

export const Context = createContext<ContextType>({
    category:null,
    setCategory:() => "",
    tags:null,
    setTags:() => "",
    size:null,
    setSize:() => "",
    minPrice:null,
    setMinPrice:() => "",
    maxPrice:null,
    setMaxPrice:() => ""
})
export const ContextProvider:React.FC<{children:ReactNode}> = ({children}) => {
    const [category,setCategory] = useState<string | null>(null)
    const [tags,setTags] = useState<string | null>(null)
    const [size,setSize] = useState<string | null>(null)
    const [minPrice,setMinPrice] = useState<number | null>(null)
    const [maxPrice,setMaxPrice] = useState<number | null>(null)
    return <Context.Provider value={{category,setCategory,tags,setTags,size,setSize,minPrice,setMinPrice,maxPrice,setMaxPrice}}>{children}</Context.Provider>
}