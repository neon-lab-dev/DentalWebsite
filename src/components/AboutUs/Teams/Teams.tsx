import Heading from "@/components/shared/Heading/Heading";
import React from "react";
import TeamCard from "./TeamCard";

const Teams = () => {
  return (
    <div className="flex flex-col items-center gap-[89px] mx-[120px] my-[106px]">
      <div className="flex flex-col gap-8 w-[1276px]">
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
        <p className="font-Poppins text-xl font-[400] text-center">
          Our skilled and compassionate team of dental professionals is
          dedicated to providing the highest standard of care. With diverse
          expertise and a shared passion for patient well-being, we work
          together to ensure every visit is a positive experience.
        </p>
      </div>
      <div className="flex gap-6 items-center justify-around">
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
