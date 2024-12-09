import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import React from "react";

const Newsletter = () => {
 

  return (
    <div
      className="rounded-3xl px-10 2xl:px-[100px] py-[100px] 2xl:py-[148px] md:flex justify-between items-center gap-[20px] 2xl:gap-[58px] relative bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(255, 127, 80, 0.00) 0%, #D04B1A 100%), url(${IMAGES.newsletter.src})`,
      }}
    >
      <div className="flex flex-col gap-8 z-10">
        <h1 className="text-neutral-15 font-Amiri text-[24px] sm:text-[36px] md:text-[48px] font-bold lg:leading-[40px] sm:leading-[30px] leading-[22px] max-w-[500px] 2xl:max-w-[681px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </h1>
        <p className="text-neutral-10 font-Poppins text-xs sm:text-base lg:text-xl max-w-[500px] 2xl:max-w-[681px]">
          Explore our blog for the latest insights on dental health, treatments,
          and tips to keep your smile healthy. Stay updated with expert advice
          from our team.
        </p>
      </div>

      <div className="relative w-full max-w-[500px] 2xl:max-w-[741px] z-10"> {/* Add z-index for form */}
        <input
          type="text"
          placeholder="Enter Email ID"
          className="w-full max-w-[500px] 2xl:max-w-[741px] focus:outline-none bg-white py-[36px] pr-[250px] pl-8 rounded-[61px]"
        />
        <button className="px-[50px] py-4 w-fit h-[65px] flex items-center gap-3 bg-secondary-10 text-[22px] font-semibold rounded-[55px] absolute top-4 bottom-0 right-3">
          Submit
          <Image
            src={ICONS.arrowUpBlack}
            alt="arrow-up"
            className="md:w-[22px] sm:w-4 w-3"
          />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
