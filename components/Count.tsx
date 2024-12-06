"use client"
import React, { SetStateAction } from 'react'
interface CountType{
  count:number
  setCount:React.Dispatch<SetStateAction<number>>
}

const Count:React.FC<CountType> = ({count,setCount}) => {
  return (
    <div className='flex items-center gap-[23px]'>
      <button className='w-[33px] h-[38px] bg-[#46A358] rounded-2xl pb-[4px] flex justify-center items-center font-normal text-[28px] leading-4 text-white' onClick={() => count > 1 ? setCount(count - 1) : count}>-</button>
      <span className='text-[20px] font-normal leading-[10px] text-[#3D3D3D]'>{count}</span>
      <button className='w-[33px] h-[38px] bg-[#46A358] rounded-2xl pb-[4px] flex justify-center items-center font-normal text-[28px] leading-4 text-white' onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}
export default Count
