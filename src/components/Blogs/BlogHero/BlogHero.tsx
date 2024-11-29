"use client";
import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const BlogHero = () => {
  const heroDescriptions = [
    {
      description:
        "At Dentist Clinic, we provide personalized, high-quality dental care. Our experienced team is dedicated to helping you achieve a healthy, confident smile in a comfortable environment.",
    },
    {
      description:
        "At Dentist Clinic, we provide personalized, high-quality dental care. Our experienced team is dedicated to helping you achieve a healthy, confident smile in a comfortable environment.",
    },
    {
      description:
        "At Dentist Clinic, we provide personalized, high-quality dental care. Our experienced team is dedicated to helping you achieve a healthy, confident smile in a comfortable environment.",
    },
    {
      description:
        "At Dentist Clinic, we provide personalized, high-quality dental care. Our experienced team is dedicated to helping you achieve a healthy, confident smile in a comfortable environment.",
    },
  ];

  return (
    <div className="pt-[63px] w-full overflow-hidden max-w-screen">
      <div className="rounded-3xl relative max-h-[836px] w-full">
        {/* Background Image */}
        <Image
          src={IMAGES.blogHEroImg}
          alt="blog-hero"
          className="w-full h-auto max-h-[836px] rounded-3xl object-cover"
        />

        {/* Content Overlay */}
        <div className="bg-gradient-black w-full max-w-[500px] 2xl:max-w-[866px] h-full absolute top-0 bottom-0 rounded-3xl pl-11 2xl:pl-[90px] flex flex-col justify-center">
          {/* Hero Title */}
          <h1 className="text-secondary-30 font-Amiri text-[48px] 2xl:text-[64px] font-bold leading-[66px] 2xl:leading-[90px]">
            Expert Dental <br /> Advice and Tips
          </h1>

          {/* Swiper Slider */}
          <div className="w-[500px]">
          <Swiper
            className="overflow-hidden"
            modules={[Navigation]}
            slidesPerView={1}
            navigation={{
              prevEl: "#prevButton",
              nextEl: "#nextButton",
            }}
          >
            {heroDescriptions.map((description, index) => (
              <SwiperSlide key={index}>
                <p className="font-Poppins text-[22px] text-secondary-30 max-w-[497px] mt-3">
                  {description.description}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
          </div>


          

          {/* Navigation Buttons */}
          <div className="flex items-center gap-8 mt-[60px] relative z-10">
            {/* Previous Button */}
            <button
              id="prevButton"
              className="bg-primary-10 opacity-40 flex items-center justify-center rounded-full w-[60px] h-[60px] overflow-hidden"
            >
              <Image
                src={ICONS.previousDisabled}
                alt="previous-arrow"
                className="w-8 h-8"
              />
            </button>
            {/* Next Button */}
            <button
              id="nextButton"
              className="bg-primary-10 flex items-center justify-center rounded-full w-[60px] h-[60px] overflow-hidden"
            >
              <Image
                src={ICONS.nextActive}
                alt="next-arrow"
                className="w-8 h-8"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
