"use client"
import Button from '@/components/Buttons/Button';
import React from 'react';



const Hero = () => {
    const handleClick = () => {
        alert("Button clicked!");
      };
    return (
        <div>
           <Button
        text="Schedule an appointment"
        // image="/assets/images/FooterCall.svg"
        onClick={handleClick}
        className="h-[76px] w-[401px]"
      />
        </div>
    );
};

export default Hero; 