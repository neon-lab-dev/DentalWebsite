import React from 'react'

import Image from "next/image";
import { ICONS } from "@/assets";
const Statement = () => {
  return (
    <div className='bg-[#FF7F50] rounded-[32px] md:mx-[120px] md:my-[193px] py-8 px-4 relative  ' >
       <Image src={ICONS.openinvertedcomma} alt="open inverted comma" className="absolute md:size-[61px] w-[36px] h-[23px]  md:left-12 md:top-12 left-6 top-6" />
       <div className='font-Amiri md:text-5xl text-2xl font-bold md:leading-[66px] leading-9 text-white text-center md:pt-[61px] pt-8  md:px-[206px]'>As the CEO of [Your Dental Practice Name], my goal has always been to create a welcoming environment where every patient feels cared for and confident in their smile. Our dedicated team is committed to providing exceptional dental care through innovation, compassion, and personalized service. We believe that every smile tells a story, and it’s our privilege to be a part of yours.</div>
       <div className='md:w-[620px] h-[2px] bg-[#ADD8E6] mx-auto my-[24px]'></div>
       <div className=' text-center font-Amiri  md:text-5xl text-2xl font-bold md:leading-[66px] leading-9 md:pb-[61px] pb-8'>-A Message from Our CEO</div>
       <Image src={ICONS.closedinvertedcomma} alt="closed inverted comma" className="md:size-[61px] w-[36px] h-[23px] absolute md:right-12 md:bottom-12 right-6 bottom-6  " />
    </div>
  )
}

export default Statement
 