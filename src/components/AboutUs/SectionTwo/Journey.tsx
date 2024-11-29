import React from "react";
import Image from "next/image";
import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Buttons/Button";
import Heading from "@/components/shared/Heading/Heading";
const Journey = () => {
  return (
    <div className="flex justify-center gap-[124px] mx-[120px] my-[128px]">
      <div>
        {" "}
        <Image
          src={IMAGES.journey}
          alt="Journey image"
          className={`w-full max-w-[500px] 2xl:max-w-[968px] object-cover rounded-3xl max-h-[824px] 2xl:max-h-[824px]`}
        />
      </div>
      <div className="flex flex-col justify-center">
        <div>
        <Heading 
            subHeading={""}
            isSubheading={false}
          classNames={""}
          aligned={"left"}
          headingWidth={"w-full"}
          isHeadingCenter={true}
        >
         A Journey of <span className="text-primary-10"> Care</span> and <span className="text-primary-10"> Excellence</span>
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
          <Button variant="Outlined" classNames="px-[50px] py-4 w-fit">
            Learn More
            <Image src={ICONS.arrowUp} alt="arrow-up" className="size-[22px]" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Journey;
