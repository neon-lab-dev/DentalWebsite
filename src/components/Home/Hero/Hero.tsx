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
        textcolor='#FFFFFF'
        className="h-[76px] w-[401px]"
        verticalpadding={202}
        horizontalpadding={500}
      />
      <Button  text="Book Now"
        // image="/assets/images/FooterCall.svg"
        isButtonOutlined={true}
        onClick={handleClick}
        // buttonColor="bg-transparent"
        textcolor='#FF7F50'
        verticalpadding ={16}
        horizontalpadding={44}
        buttonColor='#FF7F50'
        className="h-[65px] w-[205px]  " />
        
        </div>
    );
};

export default Hero; 