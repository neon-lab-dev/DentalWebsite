import React from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="w-[90%] font-Amiri font-bold xl:text-[64px] md:text-[48px] text-[36px] xl:leading-[90px] md:leading-[44px] leading-[40px] text-center py-[60px]">
        Schedule Your Appointment Today
      </div>
      <div className="flex flex-col items-center justify-center xl:gap-12 py-12 xl:px-[47px] px-4 rounded-[48px] xl:w-[90%] md:mx-8 mx-4 bg-[#EBFAFF] border border-[#333] shadow-sm ">
        <div className="flex justify-between gap-5 w-full">
          <div className="h-[16px] bg-[#FF7F50] rounded-[30px] flex-1"></div>
          <div className="h-[16px] bg-[#FF7F50] rounded-[30px] flex-1"></div>
          <div className="h-[16px] border border-[#FF7F50] rounded-[30px] flex-1"></div>
          <div className="h-[16px] border border-[#FF7F50] rounded-[30px] flex-1"></div>
        </div>
        <div className=" font-bold xl:text-5xl md:text-4xl text-[32px] my-12 md:my-20 xl:my-0 leading-10 md:leading-[44px] xl:leading-[66px] font-Amiri text-center">
          What service are you visiting for?{" "}
        </div>
        <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:grid-rows-2  md:grid-rows-3 xl:gap-8 md:gap-5 gap-4">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard /> 
        </div>
      </div>
    </div>
  );
};

export default Service;
