"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Button from '../Button';
import Image from 'next/image';

export default function Carusel() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='w-[600px]'>
                        <strong className='font-medium text-[14px] text-[#3D3D3D] tracking-0.1'>WELCOME TO GREENSHOP</strong>
                        <h2 className='font-black mt-[7px] mb-[5px] text-[70px] leading-[70px] text-[#3D3D3D]'>LET'S MAKE A BETTER <span className='text-[#46A358]'>PLANET</span></h2>
                        <p className='text-[14px] mb-[44px] font-normal text-[#727272]'>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                        <Button title='SHOP NOW' type='button' extraClass='w-[140px]'/>
                    </div>
                    <div>
                        <Image priority src={"/Flower.png"} style={{width:"500px",height:"437px"}} width={500} height={437} alt='Flower'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[600px]'>
                        <strong className='font-medium text-[14px] text-[#3D3D3D] tracking-0.1'>WELCOME TO GREENSHOP</strong>
                        <h2 className='font-black mt-[7px] mb-[5px] text-[70px] leading-[70px] text-[#3D3D3D]'>LET'S MAKE A BETTER <span className='text-[#46A358]'>PLANET</span></h2>
                        <p className='text-[14px] mb-[44px] font-normal text-[#727272]'>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                        <Button title='SHOP NOW' type='button' extraClass='w-[140px]'/>
                    </div>
                    <div>
                        <Image priority src={"/Flower.png"} style={{width:"500px",height:"437px"}} width={500} height={437} alt='Flower'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-[600px]'>
                        <strong className='font-medium text-[14px] text-[#3D3D3D] tracking-0.1'>WELCOME TO GREENSHOP</strong>
                        <h2 className='font-black mt-[7px] mb-[5px] text-[70px] leading-[70px] text-[#3D3D3D]'>LET'S MAKE A BETTER <span className='text-[#46A358]'>PLANET</span></h2>
                        <p className='text-[14px] mb-[44px] font-normal text-[#727272]'>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                        <Button title='SHOP NOW' type='button' extraClass='w-[140px]'/>
                    </div>
                    <div>
                        <Image priority src={"/Flower.png"} style={{width:"500px",height:"437px"}} width={500} height={437} alt='Flower'/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
