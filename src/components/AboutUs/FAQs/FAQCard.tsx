"use client";
import { useState } from "react";
import { ICONS } from "@/assets";
import Image from "next/image";

const FAQCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`relative  md:w-full md:rounded-[32px] rounded-2xl flex justify-between transition-all duration-300 ease-in-out md:px-12 p-4 py-4 md:py-[58px] border border-[#00000040]  self-stretch  ${
        isExpanded
          ? "md:h-[200px]  md:w-full  p-4 w-full md:bg-white flex-col justify-center border border-orange-500 "
          : "md:h-[178px] h-16  items-center md:w-full"
      }`}
    >
      <div className="flex justify-between">
        <div>
          <div className="font-Amiri md:text-5xl text-2xl font-bold md:leading-[62px] leading-9">
            Lorem ipsum dior sit. ispel
          </div>

          <div className="flex flex-col flex-grow">
            {isExpanded && (
              <div className="md:mt-4  md:text-xl text-[12px] font-Poppins md:w-[1180px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                dapibus sodales felis. Suspendisse non bibendum velit.
                Vestibulum sed maximus orci. Nunc odio mauris, tincidunt sit
                amet dui nec, auctor sodales nisi. E
              </div>
            )}
          </div>
        </div>
        <button
          onClick={handleToggle}
          className="absolute md:bottom-12 md:right-12 flex flex-col items-center right-1 md:size-[82px] size-8 "
        >
          <Image
            src={isExpanded ? ICONS.blackminus : ICONS.blackplus}
            alt="Toggle Icon"
          />
        </button>
      </div>
    </div>
  );
};

export default FAQCard;
