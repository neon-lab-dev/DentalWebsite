/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from "@/assets";
import Image from "next/image";
import React from "react";

type TWhyUsCard = {
  info: {
    title: string;
    description: string;
    icon: any;
  };
};
const WhyUsCard: React.FC<TWhyUsCard> = ({ info }) => {
  return (
    <div className="rounded-3xl border border-secondary-20 shadow-md h-[320px] max-w-[325px] w-full p-6">
      <button className="p-6 rounded-full bg-primary-10">
        <Image src={ICONS.care} alt="phone-icon" className="size-7" />
      </button>

      <h1 className="text-neutral-15 text-[28px] font-bold leading-[32px] font-Amiri mt-8">
        {info.title}
      </h1>
      <p className="text-neutral-10 font-Poppins text-xl mt-4">
        {info.description}
      </p>
    </div>
  );
};

export default WhyUsCard;
