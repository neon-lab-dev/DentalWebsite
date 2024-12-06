import Heading from "@/components/shared/Heading/Heading";
import React from "react";
import TeamCard from "./TeamCard";

const Teams = () => {
  return (
    <div className="flex flex-col items-center md:gap-[89px] gap-12  md:mx-[120px] md:my-[106px] ">
      <div className="flex flex-col md:gap-8 gap-4 w-full max-w-[1276px]">
        <Heading
          subHeading={""}
          classNames={""}
          aligned={"Center"}
          headingWidth={"w-full"}
          isHeadingCenter={true}
        > 
          Meet the <span className="text-primary-10">Experts</span> Behind Your
          Smile
        </Heading>
        <p className="font-Poppins md:text-xl text-[12px] font-[400] text-center">
          Our skilled and compassionate team of dental professionals is
          dedicated to providing the highest standard of care. With diverse
          expertise and a shared passion for patient well-being, we work
          together to ensure every visit is a positive experience.
        </p>
      </div>
      <div className="flex w-full gap-6 items-center justify-around">
        <div className="pt-[125px]">
          <TeamCard />
        </div>
        <TeamCard />
        <div className="pt-[125px]"> 
          <TeamCard />
        </div>
        <TeamCard />
      </div>
    </div>
  );
};

export default Teams;
