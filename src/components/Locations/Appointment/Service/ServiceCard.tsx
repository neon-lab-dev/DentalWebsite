"use client"
import React, { useState } from 'react';
import { ICONS } from "@/assets";
import Image from "next/image";

const ServiceCard = () => {
  // State to track whether the card is selected
  const [isSelected, setIsSelected] = useState(false);

  // Toggle the selection state when the card is clicked
  const handleCardClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={`xl:py-[45px] xl:px-[24px] p-4 md:p-5 flex justify-between items-center shadow-sm transition-all duration-100 xl:rounded-3xl md:rouded-[20px] rounded-2xl w-full max-w-[507px] 
        ${isSelected ? 'bg-[#FF7F50] border border-black' : 'bg-[#F5F5DC]'} 
        ${!isSelected ? 'hover:bg-white border hover:border-black' : ''}`} // Only apply hover effect if not selected
      onClick={handleCardClick} // Handle the click event to toggle selection
    >
      <div className='flex flex-col justify-between'>
        <div className='font-Amiri font-bold xl:text-[32px] md:text-2xl text-[20px] xl:leading-[48px] leading-7'>Invisalign</div>
        <div className={`h-[2px]  my-[10px]  ${isSelected ? 'bg-[#F5F5DC]' : 'bg-[#FF7F50] '} self-stretch `}></div>
        <div className='font-Poppins xl:text-xl md:text-[14px] text-[12px] '>Duration: 40 minutes</div>
      </div>
      <div className=' xl:size-[82px] md:size-6 size-5 '>
        <Image
          src={ICONS.rightblackarrow}
          alt="Right black arrow" 
          
        />
      </div>
    </div>
  );
}

export default ServiceCard;

