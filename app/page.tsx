"use client"
import Button from "@/components/Button";
import Carusel from "@/components/Carusel/Carusel";
import Products from "@/components/Products";
import { Context } from "@/contexxt/Context";
import Categories from "@/service/Categories";
import PriceFilter from "@/components/PriceFilter";
import { useContext, useState } from "react";
import "react-input-range/lib/css/index.css"
interface TagType {
  tagName: string
  path: string | null
}

export default function Home() {
  const tagsArr: TagType[] = [
    {
      tagName: "All Plants",
      path: null
    },
    {
      tagName: "New Arrivals",
      path: "new-arrival"
    },
    {
      tagName: "Sale",
      path: 'sale'
    },
  ]
  const [tagPath,setTagPath] = useState<string>('')
  const {setTags,tags} = useContext(Context)
  const [sort, setSort] = useState<boolean>(false)


 
  return (
    <div className="w-full h-[90vh] overflow-y-auto">
      <Carusel />
      <div className="flex justify-between w-full mt-[40px]">
        <div className="w-[25%] bg-[#FBFBFB] pl-[18px] pt-[14px]">
          <p className='font-bold text-[18px] text-[#3D3D3D]'>Categories</p>
          <Categories />
          <p className="mb-[30px]">Price Range</p>
          <PriceFilter/>
        </div>
        <div className="w-[70%]">
          <div className="flex justify-between">
            <ul className="flex space-x-[37px]">
              {tagsArr.map((item: TagType, index: number) => <li onClick={() => setTags(item.path)} className={`${tags == item.path ? "text-[#46A358] border-b-[2px] border-b-[#46A358] font-bold" : " text-[#3D3D3D] font-normal"} cursor-pointer text-[15px]`} key={index + 1}>{item.tagName}</li>)}
            </ul>
            <button type="button" className="text-[15px] border-[2px] border-[33D3D3D] rounded-md px-[10px] font-normal text-[#3D3D3D]" onClick={() => setSort(!sort)}>Sort by Name</button>
          </div>
          <div>
            <Products sort={sort} />
          </div>
        </div>
      </div>
    </div>
  )
}
