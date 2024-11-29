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
      className={`relative rounded-[32px] flex justify-center transition-all duration-300 ease-in-out px-12  py-[58px] border border-[#00000040]  self-stretch ${
        isExpanded
          ? "h-[200px] bg-white flex-col justify-center border border-orange-500 "
          : "h-[178px] items-center"
      }`}
    >
      <div className="font-Amiri text-5xl font-bold leading-[62px]">
        Lorem ipsum dior sit. ispel
      </div>

      <div className="flex flex-col flex-grow">
        {isExpanded && (
          <div className="mt-4 text-xl font-Poppins w-[1180px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            dapibus sodales felis. Suspendisse non bibendum velit. Vestibulum
            sed maximus orci. Nunc odio mauris, tincidunt sit amet dui nec,
            auctor sodales nisi. E
          </div>
        )}
      </div>

      <button onClick={handleToggle} className="absolute bottom-12 right-12">
        <Image
          src={isExpanded ? ICONS.blackminus : ICONS.blackplus}
          alt="Toggle Icon"
          sizes="82px"
        />
      </button>
    </div>
  );
};

export default FAQCard;
