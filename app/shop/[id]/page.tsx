"use client"
import Button from '@/components/Button'
import Count from '@/components/Count'
import ProductGallery from '@/components/Gallery'
import Modal from '@/components/Modal'
import { ProductType } from '@/components/Products'
import { Context } from '@/contexxt/Context'
import { useAxios } from '@/hook/useAxios'
import { CheckIcon, EmailIcon, FacebookIcon, LikeIcon, LinkedinIcon, RateIcon, RateIcon2, TwitterICon } from '@/public/Images/Icons'
import { useMutation, useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const SinglePage = () => {
    const { id } = useParams()
    const { productList, token } = useContext(Context)
    const [checkModal, setCheckModal] = useState<boolean>(false)
    const [count,setCount] = useState<number>(1)

    const { data: singleData = {} } = useQuery({
        queryKey: ['single-products', id],
        queryFn: () => useAxios().get(`/product/${id}`).then(res => res.data),
        enabled: true
    })
    const [selectedSize, setSelectedSize] = useState<string | null>(null)
    useEffect(() => {
        if (singleData?.size?.length > 0) {
            setSelectedSize(singleData.size[0]);
        }
    }, [singleData]);

    async function handleAddToCard() {
        if (token) {
            const responce = await useAxios().post(`/basket`, { productId: singleData.product_id }, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            toast.success("Successfully saved")
            return responce.data
        }
        else {
            toast.error("You didn't login!")
        }
    }

    const cartMutation = useMutation({
        mutationFn: () => handleAddToCard()
    })
    return (
        <div className='mt-[40px]'>
            <div className='flex'>
                <div className='w-[50%]'>
                    <ProductGallery
                        imageUrl={singleData && singleData.image_url && singleData.image_url.length > 0 ? singleData.image_url[0] : "/NotFound.jpg"}
                    />
                </div>
                <div className='w-[50%]'>
                    <h2 className='font-bold text-[28px] text-[#3D3D3D] mb-[21px] leading-[16px]'>{singleData.product_name}</h2>
                    <div className='flex justify-between border-b-[2px] border-b-[#46A358]/50 pb-[11px]'>
                        <p className='font-bold text-[22px] leading-[16px] text-[#46A358]'>
                            ${singleData.discount}
                        </p>
                        <div className='flex items-center'>
                            <div className='flex '>
                                <RateIcon2 />
                                <RateIcon2 />
                                <RateIcon2 />
                                <RateIcon2 />
                                <RateIcon />
                            </div>
                            <p className='text-[15px] font-normal text-[#3D3D3D]'>
                                19 Customer Review
                            </p>
                        </div>
                    </div>
                    <div className='mt-[15px] mb-[24px]'>
                        <strong className='font-medium text-[15px] leading-4 text-[#3D3D3D] mb-[10px]'>Short description : </strong>
                        <p className='font-normal text-[14px] leading-6 text-[#727272]'>{singleData.short_description}</p>
                    </div>
                    <div className='flex flex-col'>
                        <strong className='font-medium text-[15px] leading-4 text-[#3D3D3D] mb-[11px]'>Size : </strong>
                        <div className='flex mb-[23px] gap-[10px]'>
                            {singleData?.size?.map((item: string) => (
                                <button
                                    key={item}
                                    className={`border-[1px] rounded-[50%] w-[28px] h-[28px] flex justify-center items-center text-[14px] leading-[16px] 
                        ${selectedSize === item ? 'border-[#4CAF50] text-[#4CAF50]' : 'border-[#EAEAEA] text-[#727272]'}
                    `}
                                    onClick={() => setSelectedSize(item)}
                                >
                                    {item.slice(0, 1)}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='flex mb-[26px]'>
                        <Count count={count} setCount={setCount}/>
                        <Button title='BUY NOW' type='button' extraClass='w-[130px] ml-[26px] mr-[10px]' onClick={() => setCheckModal(true)} />
                        <button onClick={() => cartMutation.mutate()} className='py-[10px] border-[1px] border-[#46A358] text-[#46A358] rounded-md w-[130px] font-bold text-[14px] leading-[20px]'>ADD TO CART</button>
                        <button className='py-[10px] border-[1px] border-[#46A358] text-[#46A358] rounded-md w-[40px] flex justify-center items-center ml-[10px]' ><LikeIcon /></button>
                    </div>
                    <p className='font-normal text-[15px] leading-4 text-[#727272] mb-[10px]'>
                        SKU :
                        <span className='text-[#3D3D3D]'> 1995751877966</span>
                    </p>
                    <p className='font-normal text-[15px] leading-4 text-[#727272]'>
                        Tags :
                        <span className='text-[#3D3D3D] mb-[18px]'>
                            {`${singleData && singleData.tags && singleData.tags.length > 0 ? singleData.tags[0] : "Tags is not found"}`}
                        </span>
                    </p>
                    <div className='flex gap-[16px] mt-[20px]'>
                        <p className='font-medium text-[15px] leading-4 text-[#3D3D3D]'>Share this products: </p>
                        <div className='flex items-center gap-[20px]'>
                            <Link href={"#"}><FacebookIcon /></Link>
                            <Link href={"#"}><TwitterICon /></Link>
                            <Link href={"#"}><LinkedinIcon /></Link>
                            <Link href={"#"}><EmailIcon /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[96px]'>
                <p className='border-b-[2px] border-b-[#46A358]/30 pb-[4px]'>
                    <span className='font-bold text-[17px] pb-[5px]  text-[#46A358] border-b-[#46A358] border-b-[2px] '>Product Description</span>
                </p>
                <p className='mt-[18px] mb-[15px]'>{singleData.product_description}</p>
                <p>Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
            </div>
            <p className='font-bold text-[17px] text-[#46A358] border-b-[2px] border-b-[#46A358]/30 mt-[70px]'>Releted Products</p>
            <div className='flex overflow-x-auto justify-between gap-5'>
                {productList?.map((item: ProductType) => (
                    <div key={item.product_id} className='min-w-[225px] item cursor-pointer p-[21px] rounded-md'>
                        <img src={item && item.image_url && item.image_url.length > 0 ? item.image_url[0] : 'Hello'} alt="track" width={'100%'} className='h-[182px] mb-[25px] rounded-md' />
                        <h2 className='font-normal text-[15px] text-[#3d3d3d]'>{item.product_name}</h2>
                        <p className='font-bold text-[16px] text-[#46A358]'>${item.discount}</p>
                    </div>
                ))}
            </div>
            <Modal openModal={checkModal} setOpenModal={setCheckModal} modalStyle='w-[350px] h-[440px] p-[15px]'>
                <div className='flex justify-center mb-[20px]'>
                    <CheckIcon />
                </div>
                <h2 className='text-center font-bold text-[25px] text-[#46a358]/80 mb-[10px]'>Green Shop</h2>
                    <div className='flex justify-between'>
                        <p className='font-medium text-[15px] text-[#3D3D3D]'>Name: </p>
                        <span className='font-bold text-[15px] text-[#46A358]'>{singleData.product_name}</span>
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-medium text-[15px] text-[#3D3D3D]'>Price:</p>
                        <span className='font-bold text-[15px] text-[#46A358]'>
                            ${singleData.discount}
                        </span>
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-medium text-[15px] text-[#3D3D3D]'>Count:</p>
                        <span className='font-bold text-[15px] text-[#46A358]'>{count}</span>
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-medium text-[15px] text-[#3D3D3D]'>Total Price:</p>
                        <span className='font-bold text-[15px] text-[#46A358]'>${singleData.discount} * {count} = ${singleData.discount * count}</span>
                    </div>
                    <img src='/qrcode.png' alt='qrcode' width={80} height={80} className='mx-auto mt-[20px]'/>
            </Modal>
        </div>
    )
}

export default SinglePage
