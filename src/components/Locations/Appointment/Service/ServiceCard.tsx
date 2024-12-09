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
      className={`py-[45px] px-[24px] flex justify-between items-center shadow-sm transition-all duration-100 rounded-3xl w-full max-w-[507px] 
        ${isSelected ? 'bg-[#FF7F50] border border-black' : 'bg-[#F5F5DC]'} 
        ${!isSelected ? 'hover:bg-white border hover:border-black' : ''}`} // Only apply hover effect if not selected
      onClick={handleCardClick} // Handle the click event to toggle selection
    >
      <div className='flex flex-col justify-between'>
        <div className='font-Amiri font-bold text-[32px] leading-[48px]'>Invisalign</div>
        <div className={`h-[2px]  ${isSelected ? 'bg-[#F5F5DC]' : 'bg-[#FF7F50]'} self-stretch `}></div>
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
  );
}

export default ServiceCard;

