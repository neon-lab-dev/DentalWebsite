import React from 'react'
import Image from 'next/image'
import { IMAGES } from "@/assets";
import Button from '@/components/Buttons/Button';
const AboutUsHero = () => {
  return (
    <div className='flex justify-between items-center gap-10 px-[120px] py-[46px]'>
      <div>
      <h1 className="text-neutral-15 font-Amiri text-[64px] font-bold leading-[90px]  max-w-[744px] mx-auto w-full">
      Our Mission: Exceptional   
          <span className="text-primary-10"> Dental Care </span>You Can Trust
        </h1>
        <p className="text-neutral-10 font-Poppins text-[22px]  max-w-[744px] mx-auto w-full mt-8">
        At Dentist Clinic, we provide personalized, high-quality dental care. Our experienced team is dedicated to helping you achieve a healthy, confident smile in a comfortable environment.
        </p>
        <Button
          variant="Gradient"
          classNames="px-[50px] py-[22px] mt-[60px]"
        >
          Schedule An Appointment!
        </Button>
      </div>
      <div>
      <Image
        src={IMAGES.aboutushero}
        alt="hero-image"
        className="  rounded-3xl"
      />
      </div>
    </div>
  )
}

export default AboutUsHero
