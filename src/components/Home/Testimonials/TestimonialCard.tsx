/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from "@/assets";
import Image from "next/image";

const TestimonialCard = ({ review } : {review:any}) => {
  return (
    <div className="rounded-3xl border border-secondary-20 shadow-md w-full 2xl:w-[396px] h-[529px] p-8">
      <div className="flex items-center justify-between">
        <Image
          src={review.img}
          alt="profile"
          className="size-[97px] rounded-full"
        />
        <Image
          src={ICONS.quotation}
          alt="profile"
          className="w-[58px] h-[49px]"
        />
      </div>

      <h1 className="text-xl font-Poppins font-bold text-neutral-10 mt-4">
        {review.name}
      </h1>
      <p className="text-neutral-10 font-Poppins text-xl mt-3">
        {review.review}
      </p>
    </div>
  );
};

export default TestimonialCard;
