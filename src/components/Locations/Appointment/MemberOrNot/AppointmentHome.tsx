"use client";
import { useState } from "react";
import Button from "@/components/Buttons/Button";
import React from "react";

const AppointmentHome = () => {
  const [selectedBtn, setSelectedBtn] = useState<string | null>(null);

  const handleBtnClick = (btnType: string) => {
    setSelectedBtn((prev) => (prev === btnType ? null : btnType));
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="w-[90%] font-Amiri font-bold xl:text-[64px] md:text-[48px] text-[36px] xl:leading-[90px] md:leading-[44px] leading-[40px] text-center py-[60px] ">
        Schedule Your Appointment Today
      </div>
      <div className="flex flex-col items-center justify-center gap-12 md:py-12 py-6 xl:px-[47px] md:px-[31px] px-4 xl:rounded-[48px] md:rounded-[32px] rounded-2xl w-[90%] bg-[#EBFAFF] border border-[#333] shadow-sm ">
        <div className="flex justify-between gap-5 w-full">
          <div className="h-[16px] bg-[#FF7F50] rounded-[30px] flex-1"></div>
          <div className="h-[16px] border border-[#FF7F50] rounded-[30px] flex-1"></div>
          <div className="h-[16px] border border-[#FF7F50] rounded-[30px] flex-1"></div>
          <div className="h-[16px] border border-[#FF7F50] rounded-[30px] flex-1"></div>
        </div>
        <div className=" md:w-[474px] xl:w-full font-bold xl:text-5xl md:text-4xl text-[32px] my-12 md:my-20 xl:my-0 leading-10 md:leading-[44px] xl:leading-[66px] font-Amiri text-center">
          Have you been to Dentist Clinic before?
        </div>

        {/*New User */}
        <Button
          variant={selectedBtn === "New" ? "Filled" : "Outlined"}
          onClick={() => handleBtnClick("New")}
          classNames={`px-[60px] py-[10px] xl:h-[120px] md:h-[100px] h-[73px] font-Amiri rounded-[79px] text-[32px]  xl:w-[670px] w-[90%] flex flex-col justify-center gap-[4px] md:gap-0 ${
            selectedBtn === "New" ? "text-black" : ""
          }`}
        >
          <div className="md:text-2xl text-[16px] leading-6 md:leading-9 "> No, I have never been to Dentist Clinic </div>
          <div className="font-Poppins xl:text-xl md:text-[16px] text-xs font-normal"> 
            I am a new user!
          </div>
        </Button>

        {/*Old User */}
        <Button
          variant={selectedBtn === "Returning" ? "Filled" : "Outlined"}
          onClick={() => handleBtnClick("Returning")}
          classNames={`xl:px-[102px] px-[60px]  py-[10px] xl:h-[120px] md:h-[100px] h-[73px] rounded-[79px] font-Amiri text-[32px] xl:w-[670px] w-[90%]  flex flex-col justify-center gap-[4px] md:gap-0 ${
            selectedBtn === "Returning" ? "text-black" : ""
          }`}
        >
          <div className="md:text-2xl text-[16px] leading-6 md:leading-9">
          Yes, I have been to Dentist Clinic</div>
          <p className="font-Poppins xl:text-xl md:text-[16px] text-xs font-normal">
            I have a dentist clinic Account
          </p>
        </Button>
      </div>
    </div>
  );
};

export default AppointmentHome;
