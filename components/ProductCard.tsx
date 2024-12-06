import React, { useContext } from 'react'
import { ProductType } from './Products'
import Image from 'next/image'
import { BasketIcon, LikeIcon } from '@/public/Images/Icons'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Context } from '@/contexxt/Context'
import { useAxios } from '@/hook/useAxios'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

const ProductCard: React.FC<{ item: ProductType }> = ({ item }) => {
  const {token} = useContext(Context)
  const navigate = useRouter()
  const queryClient = useQueryClient()
  async function likeClick(){
    if(token){
      const responce = await useAxios().post(`/like/${item.product_id}`,{},{
        headers:{
          "Authorization":`Bearer ${token}`
        }
      })
      toast.success("Successfully liked!")
      return responce.data
    }
    else{
      toast.error("You didn't login!")  
    }
  }
  async function basketClick(){
    if(token){
      const responce = await useAxios().post(`/basket`,{productId:item.product_id},{
        headers:{
          "Authorization":`Bearer ${token}`
        }
      })
      toast.success("Successfully saved!")
      return responce.data;
    }
    else{
      toast.error("You didn't login!")
    }
  }
  const likeMutation = useMutation({
    mutationFn:() => likeClick(),
    onSuccess:() => queryClient.invalidateQueries({queryKey:[`products`]})
  })
  const basketMutation = useMutation({
    mutationFn:() => basketClick(),
    onSuccess:() => queryClient.invalidateQueries({queryKey:[`products`,`basketProducts`]})
  })
  return (
    <div className='w-[260px] cursor-pointer'>
      <Image onClick={() => navigate.push(`/shop/${item.product_id}`)} priority src={item.image_url ? item.image_url[0] : '/Flower.png'} style={{ width: "250px", height: "250px" }} alt={item.product_name} width={250} height={250} />
      <div className='flex'>
        <div>
          <h2 className='font-normal text-[16px] text-[#3D3D3D]'>{item.product_name}</h2>
          <div className='flex gap-[17px]'>
            <p className='font-bold text-[18px] text-[#46A358]'>${item.discount ? item.discount : ""}</p>
            <p className='line-through font-normal text-[18px] text-[#A5A5A5]'>${item.cost}</p>
          </div>
        </div>
        <div className='w-[50%] mx-auto mt-[10px] flex justify-center gap-[20px] items-center'>
          <button onClick={() => likeMutation.mutate()} className={`${item.liked ? "text-red-500" : ""}`}>
            <LikeIcon />
          </button>
          <button onClick={() => basketMutation.mutate()} className={`${item.basket ? "text-green-500" : ""}`}>
            <BasketIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard