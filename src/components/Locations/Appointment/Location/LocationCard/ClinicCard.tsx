"use client";
import { useState } from "react";
import React from 'react'

const ClinicCard = () => {
    const [selectedSubCard, setSelectedSubCard] = useState<number | null>(null);
    const newCards = [
        { id: 1, name: "Clinic 1" },
        { id: 2, name: "Clinic 2" },
        { id: 3, name: "Clinic 3" },
        { id: 4, name: "Clinic 4" },

      ];
      const handleSubCardClick = (id: number) => {
        setSelectedSubCard(id);
      };
  return (
    <div>
      <div className="flex xl:flex-row flex-col xl:gap-8 gap-5 mt-6">
          {newCards.map((card) => (  
            <div
              key={card.id}
              onClick={() => handleSubCardClick(card.id)}
              className={`relative overflow-hidden group cursor-pointer rounded-3xl w-full ${
                selectedSubCard === card.id ? "bg-[#FF7F50]" : "bg-[#F5F5DC]"
              }`}
            >
              <div className="w-full h-full xl:px-8 xl:py-6 md:p-5 p-4">
                <h1 className="text-black capitalize xl:text-[32px] md:text-[32px] text-[16px] font-bold  xl:leading-[66px] md:leading-[30px] leading-6 font-Amiri">
                  {card.name}
                </h1>
                <div className="h-[2px] bg-[#FF7F50] self-stretch my-[10px]"></div>
                <div className="font-Poppins xl:text-xl md:text-[16px] text-[12px] ">
                  444 North Orleans Chicago, IL 60654-5602
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default ClinicCard
