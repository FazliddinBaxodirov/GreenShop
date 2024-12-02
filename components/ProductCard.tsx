import React from 'react'
import { ProductType } from './Products'
import Image from 'next/image'

const ProductCard:React.FC<{item:ProductType}> = ({item}) => {

  return (
    <div className='w-[260px]'>
        <Image priority src={item.image_url ? item.image_url[0]:'/Flower.png'} style={{width:"250px",height:"250px"}} alt={item.product_name} width={250} height={250}/>
        <h2 className='font-normal text-[16px] text-[#3D3D3D]'>{item.product_name}</h2>
        <div className='flex gap-[17px]'>
            <p className='font-bold text-[18px] text-[#46A358]'>${item.discount ? item.discount : ""}</p>
            <p className='line-through font-normal text-[18px] text-[#A5A5A5]'>${item.cost}</p>
        </div>
    </div>
  )
}

export default ProductCard
