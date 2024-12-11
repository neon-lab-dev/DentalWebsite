import { IMAGES } from "@/assets";
import Image from "next/image";
import React from "react";

const TeamCard = () => {
  return (
    <div className="">
      <div className="relative group">
        {/* Image */}
        <Image
          src={IMAGES.teamsimg}
          alt="Card Image"
          className="rounded-[32px]"
        />

        {/* For Larger Screens*/}
        <div className="absolute  flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-[32px] p-4">
          <h1 className="font-Amiri text-4xl font-bold text-black">John Doe</h1>
          <p className="font-Poppins text-xl text-black">Senior Dentist</p>
        </div>
      </div>

      {/*For Smaller Screens*/}
      <div className="xl:hidden mt-4 text-center">
        <h1 className="font-Amiri text-4xl font-bold">John Doe</h1>
        <p className="font-Poppins text-xl">Senior Dentist</p>
      </div>
    </div>
  );
};

export default TeamCard;
