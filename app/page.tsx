"use client"
import Button from "@/components/Button";
import Carusel from "@/components/Carusel/Carusel";
import Products from "@/components/Products";
import { Context } from "@/contexxt/Context";
import Categories from "@/service/Categories";
import PriceFilter from "@/components/PriceFilter";
import { useContext, useState } from "react";
import "react-input-range/lib/css/index.css"
import Size from "@/components/Size";
import Image from "next/image";
import { LeftIcon } from "@/public/Images/Icons";
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
  const { setTags, tags } = useContext(Context)
  const [sort, setSort] = useState<boolean>(false)



  return (
    <div className="w-full overflow-y-auto">
      <Carusel />
      <div className="flex justify-between w-full mt-[40px]">
        <div className="w-[25%]">
          <div className=" bg-[#FBFBFB] pl-[18px] pt-[14px]">
            <p className='font-bold text-[18px] mb-[7px] text-[#3D3D3D]'>Categories</p>
            <Categories />

            <p className="mb-[30px] text-[18px] text-[#3D3D3D] font-bold">Price Range</p>
            <PriceFilter />

            <p className="mt-[46px] mb-[7px] text-[18px] text-[#3D3D3D] font-bold">Size</p>
            <Size />
          </div>
          <Image className="" priority src={"/Supersale.png"} style={{ width: "350px", height: "520px" }} alt="Super Sale Image" width={350} height={520} />
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
      <div className="mt-[95px] flex justify-between">
        <div className="w-[48%] bg-[#FBFBFB] rounded-md relative px-[30px] py-[50px]">
          <Image priority src={"/Seven.png"} className="absolute top-[-40px]" width={250} height={250} style={{ width: "250px", height: "250px" }} alt="Seven" />
          <div className="w-[50%] space-y-[15px] text-end ml-[50%]">
            <h3 className="text-[15px] text-end font-bold ">SUMMER CACTUS & CUCULENTS</h3>
            <p className="text-[14px] font-normal text-[#3d3d3d]">we are an online plant shop  offering a wide  range of cheap and trendly plants</p>
            <Button title="Find More" type="button" extraClass="w-[100px] ml-[60%]" />
          </div>
        </div>
        <div className="w-[48%] rounded-md bg-[#FBFBFB] relative px-[30px] py-[50px]">
          <Image priority src={"/ten.png"} className="absolute top-[-40px]" width={250} height={250} style={{ width: "250px", height: "250px" }} alt="Seven" />
          <div className="w-[50%] space-y-[15px] text-end ml-[50%]">
            <h3 className="text-[15px] text-end font-bold ">SUMMER CACTUS & CUCULENTS</h3>
            <p className="text-[14px] font-normal text-[#3d3d3d]">we are an online plant shop  offering a wide  range of cheap and trendly plants</p>
            <Button title="Find More" type="button" extraClass="w-[100px] ml-[60%]" />
          </div>
        </div>
      </div>
      <div className="mt-[130px]">
        <h3 className="text-center font-bold text-[30px] text-[#3D3D3D]">Our Blog Posts</h3>
        <p className="text-center font-normal text-[14px] mb-[35px] leading-[24px] text-[#727272]">We are an online plant shop offering a wide range of cheap and trendy plants. </p>
        <ul className="w-full flex justify-between">
          <li className="w-[268px]">
            <img src="/01.png" alt="Image" width={268} height={195} className="w-[268px] h-[195px]" />
            <div className="pl-[15px] pt-[8px] pr-[11px] pb-[12px] bg-[#FBFBFB]">
              <span className="font-medium text-[14px] leading-[16px] text-[#36A358]">September 12  I Read in 6 minutes</span>
              <h4 className="font-bold text-[20px] leading-[26px] text-[#3D3D3D] ">Cactus & Succulent
                Care Tips</h4>
              <p className="mt-[4px] mb-[9px] font-normal text-[14px] leading-[22px] text-[#727272]">Cacti are succulents are easy care plants for any home or patio.</p>
              <button className="flex items-end gap-[3px]">Read More <LeftIcon /></button>
            </div>
          </li>
          <li className="w-[268px]">
            <img src="/02.png" alt="Image" width={268} height={195} className="w-[268px] h-[195px]" />
            <div className="pl-[15px] pt-[8px] pr-[11px] pb-[12px] bg-[#FBFBFB]">
              <span className="font-medium text-[14px] leading-[16px] text-[#36A358]">September 13  I Read in 2 minutes</span>
              <h4 className="font-bold text-[20px] leading-[26px] text-[#3D3D3D] ">Top 10 Succulents for
                Your Home</h4>
              <p className="mt-[4px] mb-[9px] font-normal text-[14px] leading-[22px] text-[#727272]">Best in hanging baskets. Prefers medium to high light.</p>
              <button className="flex items-end gap-[3px]">Read More <LeftIcon /></button>
            </div>
          </li>
          <li className="w-[268px]">
            <img src="/03.png" alt="Image" width={268} height={195} className="w-[268px] h-[195px]" />
            <div className="pl-[15px] pt-[8px] pr-[11px] pb-[12px] bg-[#FBFBFB]">
              <span className="font-medium text-[14px] leading-[16px] text-[#36A358]">September 15  I Read in 3 minutes</span>
              <h4 className="font-bold text-[20px] leading-[26px] text-[#3D3D3D] ">Cactus & Succulent
                Care Tips</h4>
              <p className="mt-[4px] mb-[9px] font-normal text-[14px] leading-[22px] text-[#727272]">Cacti and succulents thrive in containers and because most are..</p>
              <button className="flex items-end gap-[3px]">Read More <LeftIcon /></button>
            </div>
          </li>
          <li className="w-[268px]">
            <img src="/04.png" alt="Image" width={268} height={195} className="w-[268px] h-[195px]" />
            <div className="pl-[15px] pt-[8px] pr-[11px] pb-[12px] bg-[#FBFBFB]">
              <span className="font-medium text-[14px] leading-[16px] text-[#36A358]">September 15  I Read in 2 minutes</span>
              <h4 className="font-bold text-[20px] leading-[26px] text-[#3D3D3D] ">Best Houseplants
                Room by Room</h4>
              <p className="mt-[4px] mb-[9px] font-normal text-[14px] leading-[22px] text-[#727272]">The benefits of houseplants are endless. In addition to..</p>
              <button className="flex items-end gap-[3px]">Read More <LeftIcon /></button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
