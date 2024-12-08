import React from "react";
import LocationData from "./LocationCard/LocationData";
import DateTimeSelector from "./DateTimeSelector/DateTimeSelector";
import { LocationProvider } from "./LocationContext";

const Location = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="font-Amiri font-bold text-[64px] leading-[90px] text-center py-[60px] ">
        Schedule Your Appointment Today
      </div>
      <div className="flex flex-col items-center justify-center gap-12 py-12 px-[47px] rounded-[48px] w-[90%] bg-[#EBFAFF] border border-[#333] shadow-sm ">
        <div className="flex justify-around gap-5">
          {" "}
          <div className="h-[16px] bg-[#FF7F50] rounded-[30px] py-[2px] px-32"></div>{" "}
          <div className="h-[16px] bg-[#FF7F50] rounded-[30px] py-[2px] px-32"></div>
          <div className="h-[16px] bg-[#FF7F50] rounded-[30px] py-[2px] px-32"></div>
          <div className="h-[16px] border border-[#FF7F50] rounded-[30px] py-[2px] px-32"></div>
        </div>
        <div className="py-12 font-bold text-[32px] font-Amiri">
          Select Location
        </div>
        <div>
          <LocationProvider>
            <LocationData />
          </LocationProvider>
        </div>
        <div className="py-12 font-bold text-[32px] font-Amiri">
          Select Date and Time
        </div>
        <div className="w-full">
          <DateTimeSelector />
        </div>
      </div>
    </div>
  );
};

export default Location;
