"use client";
import Button from "@/components/Buttons/Button";
import React from "react";

const Hero = () => {
  // const handleClick = () => {
  //   alert("Button clicked!");
  // };
  return (
    <div>
      <Button
      variant="Outlined"
      label="Book Now!"
      />
      <Button
      variant="Filled"
      label="Sign In"
      />
      
    </div>
  );
};

export default Hero;
