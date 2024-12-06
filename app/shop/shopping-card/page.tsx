"use client"
import { ProductType } from '@/components/Products'
import { Context } from '@/contexxt/Context'
import { useAxios } from '@/hook/useAxios'
import { useQuery } from '@tanstack/react-query'
import React, { useContext, useState } from 'react'

const ShoppingCArd = () => {
  const { token } = useContext(Context)
  const [productCounts, setProductCounts] = useState<{ [key: string]: number }>({}) // Har bir mahsulot uchun count holati

  const { data: basketProducts = [] } = useQuery({
    queryKey: ['basketProducts'],
    queryFn: () =>
      token
        ? useAxios()
            .get(`/basket`, {
              headers: token ? { 'Authorization': `${token}` } : {},
              params: {
                page: 1,
                limit: 100,
              },
            })
            .then((res) => res.data)
        : [],
  })

  const handleCountChange = (productId: string, action: 'increment' | 'decrement') => {
    setProductCounts((prevCounts) => {
      const currentCount =  1 // Agar count yo'q bo'lsa, 1 bo'lsin
      const newCount = action === 'increment' ? currentCount + 1 : currentCount > 1 ? currentCount - 1 : currentCount
      return { ...prevCounts, [productId]: newCount }
    })
  }

  return (
    <div>
      <table className="min-w-full ">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">#</th>
            <th className="border border-gray-300 px-4 py-2">Products</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Count</th>
          </tr>
        </thead>
        <tbody>
          {basketProducts?.ProductId?.map((item: ProductType, index: number) => {
            const currentCount = productCounts[item.product_id] || item.count // Har bir mahsulot uchun count

            return (
              <tr key={item.product_id}>
                <td className="bg-[#EFEFEF] px-4 py-2">{index + 1}</td>
                <td className="bg-[#EFEFEF] px-4 py-2">{item.product_name}</td>
                <td className="bg-[#EFEFEF] px-4 py-2">${item.discount}</td>
                <td className="bg-[#EFEFEF] px-4 py-2">
                  <div className="flex items-center mx-auto w-[30px] gap-[8px]">
                    <button
                      className="w-[20px] h-[20px] px-[5px] bg-[#46A358] rounded-2xl flex justify-center items-center font-normal text-[10px] text-white"
                      onClick={() => handleCountChange(item.product_id, 'decrement')}
                    >
                      -
                    </button>
                    <span className="text-[16px] font-normal leading-[10px] text-[#3D3D3D]">
                      {currentCount}
                    </span>
                    <button
                      className="w-[20px] h-[20px] bg-[#46A358] rounded-2xl px-[5px] flex justify-center items-center font-normal text-[10px] text-white"
                      onClick={() => handleCountChange(item.product_id, 'increment')}
                    >
                      +
                    </button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <p>Assalomu alekum</p>
    </div>
  )
}

export default ShoppingCArd
