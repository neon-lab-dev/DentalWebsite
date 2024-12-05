/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";

const LocationCard = ({ details }: { details: any }) => {
  const [selectedSubCard, setSelectedSubCard] = useState<number | null>(null);
  const [isMainCardSelected, setIsMainCardSelected] = useState(false);

  const newCards = [
    { id: 1, name: "Clinic 1" },
    { id: 2, name: "Clinic 2" },
    { id: 3, name: "Clinic 3" },
    { id: 4, name: "Clinic 4" },
  ];

  const handleMainCardClick = () => {
    setIsMainCardSelected((prev) => !prev);

    if (isMainCardSelected) {
      setSelectedSubCard(null);
    }
  };

  const handleSubCardClick = (id: number) => {
    setSelectedSubCard(id);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Main Card */}
      <div
        onClick={handleMainCardClick}
        className={`relative overflow-hidden group cursor-pointer rounded-3xl mb-4 ${
          isMainCardSelected ? "bg-blue-500" : ""
        }`}
      >
        <Image
          src={details.img}
          alt="animated_card"
          className="w-[372px] h-[258px] object-cover"
        />

        {isMainCardSelected && (
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgba(255,127,80,0)] to-[#FF7F50] z-20"></div>
        )}

        <div className="absolute top-0 left-0 w-full h-full shadow-sm bg-gradient-to-b from-transparent to-[#F5F5DC] opacity-30 group-hover:opacity-50 transition-opacity duration-500 z-10"></div>

        <div className="absolute top-[12%] transform group-hover:translate-y-[-10%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col p-12">
          <h1 className="text-black capitalize text-[48px] font-bold leading-normal 2xl:leading-[66px] font-Amiri">
            {details.name}
          </h1>
          <p className="z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-black font-Poppins text-[22px]">
            {details.numberOfClinic}
          </p>
        </div>
      </div>

      {/* Sub Cards */}
      {isMainCardSelected && (
        <div className="flex gap-8 mt-6">
          {newCards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleSubCardClick(card.id)}
              className={`relative overflow-hidden group cursor-pointer rounded-3xl w-full ${
                selectedSubCard === card.id ? "bg-[#FF7F50]" : "bg-[#F5F5DC]"
              }`}
            >
              <div className="w-full h-full px-8 py-6">
                <h1 className="text-black capitalize text-[32px] font-bold leading-normal 2xl:leading-[66px] font-Amiri">
                  {card.name}
                </h1>
                <div className="h-[2px] bg-[#FF7F50] self-stretch"></div>
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
