"use client"
import { usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'

const layout:React.FC<{children:ReactNode}> = ({children}) => {
    const path = usePathname()
  return (
    <>
    <h2 className='pt-[36px] cursor-pointer'>Home/shop {path.includes('shopping-card') ? '/Shopping Card' : ""}</h2>
      {children}
    </>
  )
}

export default layout
