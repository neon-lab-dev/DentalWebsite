import React from "react";
import Image from "next/image";
import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Buttons/Button";
import Heading from "@/components/shared/Heading/Heading";
const Journey = () => {
  return (
    <div className="flex flex-col-reverse items-center  md:flex-row justify-center md:gap-[124px] gap-12 md:mx-[120px] md:my-[128px]">
      <div>
        {" "}
        <Image
          src={IMAGES.journey}
          alt="Journey image"
          className={`rounded-3xl flex justify-center`}
        />
      </div>
      <div className="flex flex-col  justify-center">
        <div> 
          <Heading
            subHeading={""}
            classNames={" w-full "}
            aligned={"left"}
            headingWidth={"w-full"}
            isHeadingCenter={true}
          >
            A Journey of <span className="text-primary-10"> Care</span> and{" "}
            <span className="text-primary-10"> Excellence</span>
          </Heading>

          <p className="text-neutral-10 font-Poppins text-xl max-w-[893px] w-full flex-1 mt-8">
            Founded with a commitment to compassionate care and advanced
            dentistry, [Your Dental Practice Name] has been transforming smiles
            and building lasting patient relationships from day one. Our story
            is rooted in a passion for improving oral health and making every
            patient feel valued.
          </p>
        </div>
        <div className="mt-[60px]">
          <Button variant="Outlined" classNames="px-[50px] py-4 md:w-fit w-full">
            Learn More
            <Image src={ICONS.arrowUp} alt="arrow-up" className="size-[22px]" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Journey;
