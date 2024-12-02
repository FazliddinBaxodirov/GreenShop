"use client"
import { useAxios } from '@/hook/useAxios'
import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import ProductCard from './ProductCard'
import { Context } from '@/contexxt/Context'
import Image from 'next/image'
export interface ProductType {
    product_id: string
    basket: boolean
    cost: number
    count?: number
    discount?: number
    image_url: string[]
    liked: boolean
    product_description: string
    product_name: string
    short_description?: string
    size?: string[]
    tags?: string[]
}

interface SortType{
    sort:boolean
}
const Products:React.FC<SortType> = ({sort}) => {
    const { category, tags, minPrice, maxPrice} = useContext(Context)
    const { data: products = [], isLoading } = useQuery(({
        queryKey: ['products', category, tags,minPrice,maxPrice],
        queryFn: () => useAxios().get('/products', {
            params: {
                page: 1,
                limit: 100,
                category,
                size: null,
                tags,
                max_price: maxPrice,
                min_price: minPrice
            }
        }).then(res => res.data.products ? res.data.products : [])
    }))
    return (
        <div className='flex flex-wrap justify-between gap-[20px]'>
            {isLoading ? <div className='w-full flex justify-center items-center h-[80vh]'>
                <Image src={'/Loading.png'} alt="Loading img" width={300} height={300} priority style={{ width: "300px", height: "300px" }} />
            </div> : sort ?  [...products].sort((a: ProductType, b: ProductType) => 
            a.product_name.localeCompare(b.product_name)).map((item: ProductType) => <ProductCard item={item} key={item.product_id} />) : products.map((item: ProductType) => <ProductCard item={item} key={item.product_id} />)}
        </div>
    )
}

export default Products
