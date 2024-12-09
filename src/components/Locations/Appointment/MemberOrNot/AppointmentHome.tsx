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
      <div className="font-Amiri font-bold text-[64px] leading-[90px] text-center py-[60px] ">
        Schedule Your Appointment Today
      </div>
      <div className="flex flex-col items-center justify-center gap-12 py-12 px-[47px] rounded-[48px] w-[90%] bg-[#EBFAFF] border border-[#333] shadow-sm ">
        <div className="flex justify-between gap-5 w-full">
          <div className="h-[16px] bg-[#FF7F50] rounded-[30px] flex-1"></div>
          <div className="h-[16px] border border-[#FF7F50] rounded-[30px] flex-1"></div>
          <div className="h-[16px] border border-[#FF7F50] rounded-[30px] flex-1"></div>
          <div className="h-[16px] border border-[#FF7F50] rounded-[30px] flex-1"></div>
        </div>
        <div className="font-bold text-5xl font-Amiri">
          Have you been to Dentist Clinic before?
        </div>

        {/*New User */}
        <Button
          variant={selectedBtn === "New" ? "Filled" : "Outlined"}
          onClick={() => handleBtnClick("New")}
          classNames={`px-[60px] py-[10px] h-[120px] font-Amiri rounded-[79px] text-[32px] flex flex-col justify-center ${
            selectedBtn === "New" ? "text-black" : ""
          }`}
        >
          <div> No, I have never been to Dentist Clinic </div>
          <div className="font-Poppins text-xl font-normal">
            I am a new user!
          </div>
        </Button>

        {/*Old User */}
        <Button
          variant={selectedBtn === "Returning" ? "Filled" : "Outlined"}
          onClick={() => handleBtnClick("Returning")}
          classNames={`px-[102px] py-[10px] h-[120px] rounded-[79px] font-Amiri text-[32px]  flex flex-col justify-center ${
            selectedBtn === "Returning" ? "text-black" : ""
          }`}
        >
          Yes, I have been to Dentist Clinic
          <p className="font-Poppins text-xl font-normal">
            I have a dentist clinic Account
          </p>
        </Button>
      </div>
    </div>
  );
};

export default AppointmentHome;
