/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";

const LocationCard = ({ details }: { details: any }) => {
  const [selectedCard, setSelectedCard] = useState(false);

  const newCards = [
    { name: "Clinic 1" },
    { name: "Clinic 2" },
    { name: "Clinic 3" },
    { name: "Clinic 4" },
  ];

  const handleCardClick = () => {
    setSelectedCard(!selectedCard);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Main Card */}
      <div
        onClick={handleCardClick}
        className="relative overflow-hidden group cursor-pointer rounded-3xl mb-4"
      >
        {/* Image */}
        <Image
          src={details.img}
          alt="animated_card"
          className="w-[372px] h-[258px] object-cover"
        />

        {selectedCard && (
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-20"></div>
        )}

        <div className="absolute top-0 left-0 w-full h-full shadow-sm bg-gradient-to-b from-transparent to-[#F5F5DC] opacity-30 group-hover:opacity-50 transition-opacity duration-500 z-10"></div>

        <div className="absolute top-[12%] transform group-hover:translate-y-[-10%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col p-12">
          <h1 className="text-white capitalize text-[48px] font-bold leading-normal 2xl:leading-[66px] font-Amiri">
            {details.name}
          </h1>
          <p className="z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white font-Poppins text-[22px]">
            {details.numberOfClinic}
          </p>
        </div>
      </div>

      {selectedCard && (
        <div className="flex gap-8 mt-6">
          {newCards.map((card, index) => (
            <div
              key={index}
              className="relative overflow-hidden group cursor-pointer rounded-3xl w-full  "
            >
              <div className="bg-[#F5F5DC] w-full h-full px-8 py-6">
                <h1 className="text-black capitalize text-[32px] font-bold leading-normal 2xl:leading-[66px] font-Amiri">
                  {card.name}
                </h1>
                <div className="h-[2px] bg-[#FF7F50] self-stretch "></div>
                <div className="font-Poppins text-xl">
                  444 North Orleans Chicago, IL 60654-5602
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationCard;
