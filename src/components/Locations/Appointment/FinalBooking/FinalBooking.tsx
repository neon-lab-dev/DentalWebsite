"use client";
import { useState } from "react";
import InputField from "@/components/Form/InputField";
import Button from "@/components/Buttons/Button";

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

  return (
    <div className="flex flex-col items-center">
      <div className="font-Amiri font-bold text-[64px] leading-[90px] text-center py-[60px]">
        Schedule Your Appointment Today
      </div>
      <div className="flex flex-col items-center justify-center gap-12 py-12 xl:px-[47px] px-4 rounded-[48px] w-[90%] bg-[#EBFAFF] border border-[#333] shadow-sm">
        <div className="flex justify-between gap-5 w-full">
          <div className="h-[16px] bg-[#FF7F50] rounded-[30px] flex-1"></div>
          <div className="h-[16px] bg-[#FF7F50] rounded-[30px] flex-1"></div>
          <div className="h-[16px] bg-[#FF7F50] rounded-[30px] flex-1"></div>
          <div className="h-[16px] bg-[#FF7F50] rounded-[30px] flex-1"></div>
        </div>

        <div className="xl:py-12  font-bold md:text-4xl text-[32px] font-Amiri">
          Confirm Booking
        </div>
        <div className="w-full flex justify-between xl:py-5 xl:px-6 p-4 md:my-8 my-6 border border-[#333] rounded-2xl bg-[#F5F5DC] font-Poppins xl:text-[32px] md:text-[16px] text-[12px] ">
          <div>
            Appointment for <span className="font-bold">1 January, 2025</span>
          </div>
          <div>at 11:00AM</div>
        </div>
        <div className="w-full flex md:flex-row flex-col justify-between xl:mt-8 md:my-8 my-6 xl:gap-[34px] md:gap-5 gap-6">
          <div className="xl:px-[32px] xl:py-[24px] md:p-5 p-4 flex justify-between items-center shadow-sm bg-[#F5F5DC] rounded-3xl w-full ">
            <div className="flex flex-col justify-between">
              <div className="font-Amiri font-bold xl:text-[32px] md:text-[20px] text-[16px] xl:leading-[48px] leading-6 md:leading-[30px]">
                River North
              </div>
              <div className="h-[2px] bg-[#FF7F50] self-stretch my-[10px]"></div>
              <div className="font-Poppins xl:text-xl md:text-[16px] text-[12px] ">
                444 North Orleans <br /> Chicago, IL 60654-5602
              </div>
            </div>
          </div>
          <div className="xl:px-[32px] xl:py-[24px] md:p-5 p-4 flex justify-between items-center shadow-sm bg-[#FF7F50] rounded-3xl w-full ">
            <div className="flex flex-col justify-between">
              <div className="font-Amiri font-bold xl:text-[32px] md:text-[20px] text-[16px] xl:leading-[48px] leading-6 md:leading-[30px]">
                Invisalign
              </div>
              <div className="h-[2px] bg-[#F5F5DC] self-stretch my-[10px]"></div>
              <div className="font-Poppins xl:text-xl md:text-[16px] text-[12px] ">Duration: 40 minutes</div>
            </div>
          </div>
        </div>
        <div className="xl:my-12 md:my-[32px] my-6 font-bold text-[32px] md:text-4xl font-Amiri">
          Enter User Details
        </div>
        <div className=" w-full flex flex-col xl:gap-8 md:gap-5 gap-4">
          <div className="flex md:flex-row flex-col xl:gap-8 gap-5">
            <InputField
              id="firstname"
              name="fname"
              label="First Name"
              type="text"
              placeholder="Enter First Name"
              value={formData.fname}
              onChange={handleChange}
              className="xl:w-full"
            />
            <InputField
              id="lastname"
              name="lname"
              label="Last Name"
              type="text"
              placeholder="Enter Last Name"
              value={formData.lname}
              onChange={handleChange}
              className="xl:w-full"
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
        <Button variant="Filled" classNames="w-full flex justify-center px-[28px] py-[14px]  ">
          Continue Booking
        </Button>
      </div>
    </div>
  );
};

export default FinalBooking;
