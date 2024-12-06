import Heading from "@/components/shared/Heading/Heading";
import React from "react";
import FAQCard from "./FAQCard";

const FAQ = () => {
  return (
    <div className=" md:mx-[120px] md:my-[106px] mx-[20px] my-[59px]">
      <Heading
        subHeading={""}
        classNames={""}
        aligned={"Center"}
        headingWidth={"w-full"}
        isHeadingCenter={true}
      >
        FAQs
      </Heading>

      <div className="flex flex-col gap-8 py-0 md:gap-4 md:py-[90px]">
        <FAQCard />
        <FAQCard />
        <FAQCard />
        <FAQCard />
      </div>
    </div>
  );
};

export default FAQ;
