import Heading from "@/components/shared/Heading/Heading";
import React from "react";
import FAQCard from "./FAQCard";

const FAQ = () => {
  return (
    <div className="mx-[120px] my-[106px] ">
      <Heading
        subHeading={""}
        classNames={""}
        aligned={"Center"}
        headingWidth={"w-full"}
        isHeadingCenter={true}
      >
        FAQs
      </Heading>

      <div className="flex flex-col gap-8">
        <FAQCard />
        <FAQCard />
        <FAQCard />
        <FAQCard />
      </div>
    </div>
  );
};

export default FAQ;
