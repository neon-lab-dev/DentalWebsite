"use client";
import React, { useState } from 'react';
import { IMAGES } from "@/assets";
import LocationCard from './LocationCard';
import ClinicCard from './ClinicCard';

const LocationData = () => {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const convenientDentalCareDetails = [
    {
      _id: "124343423123443",
      img: IMAGES.location1,
      name: "New York City",
      numberOfClinic: '12 Clinics'
    },
    {
      _id: "12434356424123443",
      img: IMAGES.location2,
      name: "Los Angeles",
      numberOfClinic: '12 Clinics'
    },
    {
      _id: "1243434123442343",
      img: IMAGES.location3,
      name: "Houston",
      numberOfClinic: '12 Clinics'
    },
    {
      _id: "12434341234433",
      img: IMAGES.location4,
      name: "Chicago",
      numberOfClinic: '12 Clinics'
    },
  ];

  const handleMainCardClick = (id: string) => {
    if (selectedCardId === id) {
      setSelectedCardId(null); 
    } else {
      setSelectedCardId(id); 
    }
  };

  return (
    <div>
      <div className="flex justify-around gap-8">
        {convenientDentalCareDetails.map((details) => (
          <LocationCard
            key={details._id}
            details={details}
            onMainCardClick={() => handleMainCardClick(details._id)} 
            isMainCardSelected={selectedCardId === details._id} 
          />
        ))}
      </div>

      <div className="w-full">
        {/* Show ClinicCard only when any card is selected */}
        {selectedCardId && <ClinicCard />}
      </div>
    </div>
  );
};

export default LocationData;
