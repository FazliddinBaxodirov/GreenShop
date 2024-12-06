"use client"
import { ProductType } from '@/components/Products'
import { Context } from '@/contexxt/Context'
import React, { useContext } from 'react'

const shop = () => {
  const {productList} = useContext(Context)
  return (
    <div className='flex overflow-x-auto justify-between gap-5'>
    {productList?.map((item:ProductType) => (
        <div  key={item.product_id} className='min-w-[225px] item cursor-pointer p-[21px] rounded-md'>
            <img src={item && item.image_url && item.image_url.length > 0 ? item.image_url[0] : 'Hello'} alt="track" width={'100%'} className='h-[182px] mb-[25px] rounded-md' />
            <h2 className='font-normal text-[15px] text-[#3d3d3d]'>{item.product_name}</h2>
            <p className='font-bold text-[16px] text-[#46A358]'>${item.discount}</p>
        </div>
    ))}
</div>
  )
}

export default shop
