import Heading from "@/components/shared/Heading/Heading";
import React from "react";
import FAQCard from "./FAQCard";

const FAQ = () => {
  return (
    <div className=" xl:mx-[120px] xl:my-[106px] mx-[20px] my-[59px]">
      <Heading
        subHeading={""}
        classNames={""}
        aligned={"Center"}
        headingWidth={"w-full"}
        isHeadingCenter={true}
      >
        FAQs
      </Heading>

      <div className="flex flex-col gap-8 py-0 xl:gap-4 md:gap-6 xl:py-[90px] md:py-[80px]">
        <FAQCard />
        <FAQCard />
        <FAQCard />
        <FAQCard />
      </div>
    </div> 
  ); 
};
 
export default FAQ;
