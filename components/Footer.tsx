"use client";

import { ContactIcon, FooterFacebookIcon, FooterInstagramIcon, FooterLinkedinIcon, FooterTwitterIcon, FooterYoutubeIcon, MapIcon, PayIcon, TelIcon } from "@/public/Images/Icons";
import Image from "next/image";
import React from "react";

interface FooterListType {
  id: number
  title: string
  text: string
  img: string
}

const Footer: React.FC = () => {
  const footerList = [
    {
      id: 1,
      title: 'Garden Care',
      text: "We are an online plant shop offering a wide range of cheap and trendy plants.",
      img: "/Garden.png"
    },
    {
      id: 2,
      title: 'Plant Renovation',
      text: "We are an online plant shop offering a wide range of cheap and trendy plants.",
      img: "/Plant.png"
    },
    {
      id: 3,
      title: 'Watering Garden',
      text: "We are an online plant shop offering a wide range of cheap and trendy plants.",
      img: "/Water.png"
    }
  ]
  return (
    <footer className="bg-[#FBFBFB] text-sm mt-[100px]">
      <div className="flex p-[24px] items-center">
        <ul className="flex gap-[20px]">
          {footerList.map((item: FooterListType, index: number) => (
            <li
              key={item.id}
              className={`w-[250px] pr-[34px] ${index !== footerList.length - 1 ? 'border-r-[2px] border-r-[#727272]/30' : ''}`}
            >
              <Image src={item.img} width={100} height={100} priority alt="Image" className="mb-[15px]" />
              <p className="font-bold text-[17px] text-[#3D3D3D]">{item.title}</p>
              <p className="font-normal text-[14px] text-[#727272]">{item.text}</p>
            </li>
          ))}
        </ul>
        <div>
          <strong>Would you like to join newsletters? </strong>
          <form className="relative mt-[18px]">
            <input type="email" name="email" placeholder="Enter your email adress" className="py-[11px] pl-[11px] outline-[#46A358] focus:border-[2px]  w-[250px] rounded-tl-md rounded-bl-md" />
            <button className="absolute w-[85px] top-0 bg-[#46A358] rounded-tr-md rounded-br-md font-bold text-[18px] text-white py-[12px]">Join</button>
          </form>
          <p className="font-normal text-[13px] text-[#727272] mt-[17px]">We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
        </div>
      </div>
      <div className="pl-[23px] pt-[26px] flex pb-[20px] gap-[60px] border-y-[1px] border-y-[#46A358]/30 bg-[#46A358]/10">
        <div className="mr-[35px]">
          <a href="/">
            <img src="/Logo.svg" alt="Logo" width={150} height={34} className="w-[150px] h-[34px]" />
          </a>
        </div>
        <div className="flex cursor-pointer w-[200px] mr-[6px] gap-[10px] items-center">
          <MapIcon />
          <p className="font-normal text-[14px] text-[#3D3D3D]">70 West Buckingham Ave.
            Farmingdale, NY 11735</p>
        </div>
        <div className="flex cursor-pointer w-[200px] mr-[-11px] gap-[10px] items-center">
          <ContactIcon />
          <p className="font-normal text-[14px] text-[#3D3D3D]">contact@greenshop.com</p>
        </div>
        <div className="flex cursor-pointer w-[200px] gap-[10px] items-center">
          <TelIcon />
          <p className="font-normal text-[14px] text-[#3D3D3D]">+88 01911 717 490</p>
        </div>
      </div>
      <div className="pl-[23px] pt-[33px] pr-[155px] border-b-[1px] border-b-[#46A358]/30 flex pb-[27px]">
        <div className="mr-[170px]">
          <strong className="font-bold text-[18px] text-[#3D3D3D] ">My Account</strong>
          <ul className="mt-[8px]">
            <li className="font-normal text-[14px] leading-[30px] text-[#3d3d3d]">
              My Account
            </li>
            <li className="font-normal text-[14px] leading-[30px] text-[#3d3d3d]">
              Our stores
            </li>
            <li className="font-normal text-[14px] leading-[30px] text-[#3d3d3d]">
              Contact us
            </li>
            <li className="font-normal text-[14px] leading-[30px] text-[#3d3d3d]">
              Career
            </li>
            <li className="font-normal text-[14px] leading-[30px] text-[#3d3d3d]">
              Specials
            </li>
          </ul>
        </div>
        <div className="mr-[146px]">
          <strong className="font-bold text-[18px] text-[#3D3D3D] ">Help & Guide</strong>
          <ul className="mt-[8px]">
            <li className="font-normal text-[14px] leading-[30px] text-[#3d3d3d]">
              Help Center
            </li>
            <li className="font-normal text-[14px] leading-[30px] text-[#3d3d3d]">
              How to Buy
            </li>
            <li className="font-normal text-[14px] leading-[30px] text-[#3d3d3d]">
              Shipping & Delivery
            </li>
            <li className="font-normal text-[14px] leading-[30px] text-[#3d3d3d]">
              Product Policy
            </li>
            <li className="font-normal text-[14px] leading-[30px] text-[#3d3d3d]">
              How to Return
            </li>
          </ul>
        </div>
        <div className="mr-[160px]">
          <strong className="font-bold text-[18px] text-[#3D3D3D] ">Categories</strong>
          <ul className="mt-[8px]">
            <li className="font-normal text-[14px] leading-[30px] text-[#3d3d3d]">
              House Plants
            </li>
            <li className="font-normal text-[14px] leading-[30px] text-[#3d3d3d]">
              Potter Plants
            </li>
            <li className="font-normal text-[14px] leading-[30px] text-[#3d3d3d]">
              Seeds
            </li>
            <li className="font-normal text-[14px] leading-[30px] text-[#3d3d3d]">
              Small Plants
            </li>
            <li className="font-normal text-[14px] leading-[30px] text-[#3d3d3d]">
              Accessories
            </li>
          </ul>
        </div>
        <div>
          <strong className="font-bold text-[18px] text-[#3D3D3D] ">Socia Media</strong>
          <div className="flex items-center mt-[20px] mb-[33px] gap-[10px]">
            <button className="p-[7px] px-[12px] rounded-md border-[2px] border-[#46A358]/20 text-[#46A358]/60">
              <FooterFacebookIcon />
            </button>
            <button className="p-[7px] rounded-md border-[2px] border-[#46A358]/20 text-[#46A358]/60">
              <FooterInstagramIcon />
            </button>
            <button className="p-[7px] py-[9px] rounded-md border-[2px] border-[#46A358]/20 text-[#46A358]/60">
              <FooterTwitterIcon />
            </button>
            <button className="p-[7px] rounded-md border-[2px] border-[#46A358]/20 text-[#46A358]/60">
              <FooterLinkedinIcon />
            </button>
            <button className="p-[7px] py-[8px] rounded-md border-[2px] border-[#46A358]/20 text-[#46A358]/60">
              <FooterYoutubeIcon />
            </button>
          </div>
          <div className="space-y-[13px]">
            <strong className="font-bold text-[18px] text-[#3D3D3D] ">We accept</strong>
            <PayIcon />
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center py-4 bg-white text-gray-500">
       © 2024 GreenShop. All Rights Reserved.
       </div>
    </footer>
  );
};

export default Footer;
