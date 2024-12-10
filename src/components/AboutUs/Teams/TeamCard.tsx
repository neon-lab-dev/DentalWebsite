import { IMAGES } from "@/assets";
import Image from "next/image";
import React from "react";

const TeamCard = () => {
  return (
    <div>
      <Image
        src={IMAGES.teamsimg}
        alt="Card Image"
        className="  rounded-[32px] "
      />
      <div className=" xl:opacity-0 transition-all duration-300 mt-6 xl:hover:opacity-100" >
        <h1 className="font-Amiri text-4xl font-bold">John Doe</h1>
        <p className="font-Poppins text-xl">Senior Dentist</p>
      </div>
    </div>
  );
};

export default TeamCard;
