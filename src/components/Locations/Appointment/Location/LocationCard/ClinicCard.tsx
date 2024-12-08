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
    </div>
  )
}

export default ClinicCard
