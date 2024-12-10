import React from 'react'
import Image from 'next/image'
import { IMAGES } from "@/assets";
import Button from '@/components/Buttons/Button';
const AboutUsHero = () => {
  return (
    <div className='flex flex-col xl:flex-row justify-between items-center gap-10 xl:px-[120px] xl:py-[46px]   '>
      <div>
      <h1 className="text-neutral-15 font-Amiri text-4xl md:text-5xl xl:text-[64px] font-bold xl:leading-[90px] md:leading-[64px] leading-[42px]  max-w-[744px] mx-auto w-full">
      Our Mission: Exceptional   
          <span className="text-primary-10"> Dental Care </span>You Can Trust
        </h1>
        <p className="text-neutral-10 font-Poppins lg:text-[22px] md:text-[16px] text-[14px] md:leading-normal leading-[22px]  max-w-[744px] mx-auto w-full mt-4 md:mt-8">
        At Dentist Clinic, we provide personalized, high-quality dental care. Our experienced team is dedicated to helping you achieve a healthy, confident smile in a comfortable environment.
        </p>
        <Button
          variant="Gradient"
          classNames="md:px-[50px] md:py-[22px] md:mt-[60px] py-[14px] px-[28px] my-12 font-Poppins text-[16px] " 
        >
          Schedule An Appointment!
        </Button>
      </div>
      <div>
      <Image 
        src={IMAGES.aboutushero}
        alt="hero-image"
        className="  rounded-3xl flex justify-center"
      />
      </div>
    </div>
  )
}

export default AboutUsHero
