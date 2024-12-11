"use client";
import React, { useState } from "react";
import InputField from "@/components/Form/InputField";
import Button from "@/components/Buttons/Button";
import Image from "next/image";
import { ICONS } from "@/assets";

interface FormData {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  dob: string;
  insurance: string;
  password: string;
  cnfpassword: string;
}

const FinalBooking = () => {
  const [formData, setFormData] = useState<FormData>({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    dob: "",
    insurance: "",
    password: "",
    cnfpassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    setSelected(index);
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="w-[90%] font-Amiri font-bold xl:text-[64px] md:text-[48px] text-[36px] xl:leading-[90px] md:leading-[44px] leading-[40px] text-center py-[60px]">
        Schedule Your Appointment Today
      </div>
      <div className="flex flex-col items-center justify-center gap-12 py-6 md:py-12 px-4 md:px-8 xl:px-12 xl:rounded-[48px] md:rounded-[32px] rounded-2xl w-[90%] bg-[#EBFAFF] border border-[#333] shadow-sm">
        <div className="flex justify-between gap-5 w-full">
          <div className="h-[16px] bg-[#FF7F50] rounded-[30px] flex-1"></div>
          <div className="h-[16px] bg-[#FF7F50] rounded-[30px] flex-1"></div>
          <div className="h-[16px] bg-[#FF7F50] rounded-[30px] flex-1"></div>
          <div className="h-[16px] bg-[#FF7F50] rounded-[30px] flex-1"></div>
        </div>
        <div className="w-full py-12 md:py-[54px] xl:py-12">
          <div className="xl:mb-12 font-bold md:text-4xl text-[32px] xl:text-[32px] font-Amiri text-center">
            Confirm Booking
          </div>
          <div className="w-full flex justify-between xl:py-5 xl:px-6 p-4 xl:mb-8 md:my-8 my-6 border border-[#333] md:rounded-2xl rounded-xl bg-[#F5F5DC] font-Poppins xl:text-[32px] md:text-[16px] text-[12px] ">
            <div>
              Appointment for <span className="font-bold">1 January, 2025</span>
            </div>
            <div>at 11:00AM</div>
          </div>
          <div className="w-full flex md:flex-row flex-col justify-between xl:mt-8 xl:gap-[34px] md:gap-5 gap-6">
            {/* First Div */}
            <div
              className={`xl:px-[32px] xl:py-[24px] md:p-5 p-4 flex justify-between items-center shadow-sm rounded-3xl w-full 
          ${selected === 0 ? "bg-[#FF7F50]" : "bg-[#F5F5DC]"} `}
              onClick={() => handleSelect(0)} // Handle div selection
            >
              <div className="flex flex-col justify-between">
                <div className="font-Amiri font-bold xl:text-[32px] md:text-[20px] text-[16px] xl:leading-[48px] leading-6 md:leading-[30px]">
                  River North
                </div>
                <div className={`h-[2px]  my-[10px]  ${selected===0 ? 'bg-[#F5F5DC]' : 'bg-[#FF7F50] '} self-stretch `}></div>
                <div className="font-Poppins xl:text-xl md:text-[16px] text-[12px]">
                  444 North Orleans Chicago, IL 60654-5602
                </div>
              </div>
            </div>

            {/* Second Div */}
            <div
              className={`xl:px-[32px] xl:py-[24px] md:p-5 p-4 flex justify-between items-center shadow-sm rounded-3xl w-full 
          ${selected === 1 ? "bg-[#FF7F50]" : "bg-[#F5F5DC]"} `}
              onClick={() => handleSelect(1)} 
            >
              <div className="flex flex-col justify-between">
                <div className="font-Amiri font-bold xl:text-[32px] md:text-[20px] text-[16px] xl:leading-[48px] leading-6 md:leading-[30px]">
                  Invisalign
                </div>
                <div className={`h-[2px]  my-[10px]  ${selected===1 ? 'bg-[#F5F5DC]' : 'bg-[#FF7F50] '} self-stretch `}></div>
                <div className="font-Poppins xl:text-xl md:text-[16px] text-[12px]">
                  Duration: 40 minutes
                </div>
              </div>
              <div className="xl:size-[82px] md:size-6 size-5">
                <Image src={ICONS.rightblackarrow} alt="Right black arrow" />
              </div>
            </div>
          </div>
          <div className=" xl:my-12 md:my-8 mb-6 mt-12 font-bold text-[32px] md:text-4xl font-Amiri">
            Enter User Details
          </div>
          <div className=" w-full flex flex-col xl:gap-8 md:gap-5 gap-4">
            <div className="flex md:flex-row flex-grow flex-col xl:gap-8 md:gap-5 gap-4">
              <InputField
                id="firstname"
                name="fname"
                label="First Name"
                type="text"
                placeholder="Enter First Name"
                value={formData.fname}
                onChange={handleChange}
                className="w-full"
              />
              <InputField
                id="lastname"
                name="lname"
                label="Last Name"
                type="text"
                placeholder="Enter Last Name"
                value={formData.lname}
                onChange={handleChange}
                className="w-full"
              />
            </div>
            <div className="flex xl:flex-row flex-col xl:gap-8 gap-5">
              <InputField
                id="emailId"
                name="email"
                label="Email Id"
                type="email"
                placeholder="Enter Email ID"
                value={formData.email}
                onChange={handleChange}
                className="xl:w-full"
              />
              <InputField
                id="phonenumber"
                name="phone"
                label="Phone Number"
                type="number"
                placeholder="Enter Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="xl:w-full"
              />
            </div>
            <div className="flex xl:flex-row flex-col xl:gap-8 gap-5">
              <InputField
                id="DOB"
                name="dob"
                label="Date Of Birth"
                type="date"
                placeholder="Enter Date Of Birth"
                value={formData.dob}
                onChange={handleChange}
                className="xl:w-full"
              />
              <InputField
                id="example-select"
                name="insurance"
                label="Insurance Status"
                type="select" // Use 'select' type for dropdown
                value={formData.insurance}
                onChange={handleChange}
                options={[
                  "-Select One-",
                  "ICICI Lombard",
                  "Bajaj Fincerv",
                  "Kotak Mahindra",
                  "TATA AIA", 
                  "Bharti AXA",
                  "LIC",
                ]} // Array of options
                className="w-full"
              />
            </div>
          </div>
        </div>
        <Button
          variant="Filled"
          classNames="w-full flex justify-center px-[28px] py-[14px]  "
        >
          Continue Booking
        </Button>
      </div>
    </div>
  );
};

export default FinalBooking;
