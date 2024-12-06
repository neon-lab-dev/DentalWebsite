import React from 'react'
import { IMAGES } from "@/assets";
import LocationCard from './LocationCard';

const LocationData = () => {
    const convenientDentalCareDetails= [
        {
            _id : "124343423123443",
            img : IMAGES.location1,
            name : "New York City",
            numberOfClinic : '12 Clinics' 
        },
        {
            _id : "12434356424123443",
            img : IMAGES.location2, 
            name : "Los Angeles",
            numberOfClinic : '12 Clinics'
        },
        {
            _id : "1243434123442343",
            img : IMAGES.location3,
            name : "Houston",
            numberOfClinic : '12 Clinics'
        },
        {
            _id : "12434341234433",
            img : IMAGES.location4,
            name : "Chicago",
            numberOfClinic : '12 Clinics'
        },
    ] 
  return (
    <div >

      <div className="flex justify-around gap-8">
        {
            convenientDentalCareDetails.map((details) => (
              <LocationCard key={details._id} details={details} />
            ))
        }
      </div>
    </div>
  );
};


export default LocationData
