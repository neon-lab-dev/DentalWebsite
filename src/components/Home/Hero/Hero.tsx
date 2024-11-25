"use client";
import Button from "@/components/Buttons/Button";
import Login from "@/components/Login/Login";
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
      className=""
      />
      <Button
      variant="Filled"
      label="Sign In"
      className=""
      />
      <Login />
    </div>
  );
};

export default Hero;
