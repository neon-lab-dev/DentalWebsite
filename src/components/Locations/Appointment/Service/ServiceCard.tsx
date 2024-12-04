import React from 'react'
import { ICONS } from "@/assets";
import Image from "next/image";

const ServiceCard = () => {
  return (
    <div className='py-[45px] px-[24px] flex justify-between items-center shadow-sm bg-[#F5F5DC] rounded-3xl w-full max-w-[507px]'>
      <div className='flex flex-col justify-between'>
        <div className='font-Amiri font-bold text-[32px] leading-[48px]'>Invisalign</div>
        <div className='h-[2px] bg-[#FF7F50] self-stretch '></div>
        <div className='font-Poppins text-xl'>Duration: 40 minutes</div>
      </div>
      <div>
      <Image
          src={ICONS.rightblackarrow}
          alt="Right black arrow"
          sizes="82px"
        />
      </div>
    </div>
  )
}

export default ServiceCard
