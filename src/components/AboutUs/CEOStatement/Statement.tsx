import React from 'react'

import Image from "next/image";
import { ICONS } from "@/assets";
const Statement = () => {
  return (
    <div className='bg-[#FF7F50] rounded-[32px] mx-[120px] my-[193px] relative ' >
       <Image src={ICONS.openinvertedcomma} alt="arrow-up" className="absolute size-[61px] left-12 top-12" />
       <div className='font-Amiri text-5xl font-bold leading-[66px] text-white text-center pt-[61px]  px-[206px]'>As the CEO of [Your Dental Practice Name], my goal has always been to create a welcoming environment where every patient feels cared for and confident in their smile. Our dedicated team is committed to providing exceptional dental care through innovation, compassion, and personalized service. We believe that every smile tells a story, and it’s our privilege to be a part of yours.</div>
       <div className='w-[620px] h-[2px] bg-[#ADD8E6] mx-auto my-[24px]'></div>
       <div className=' text-center font-Amiri text-5xl font-bold leading-[66px] pb-[61px]'>-A Message from Our CEO</div>
       <Image src={ICONS.closedinvertedcomma} alt="arrow-up" className="size-[61px] absolute right-12 bottom-12  " />
    </div>
  )
}

export default Statement
