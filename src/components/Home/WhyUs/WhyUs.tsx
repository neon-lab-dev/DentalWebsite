import { ICONS, IMAGES } from "@/assets";
import Heading from "@/components/shared/Heading/Heading";
import Image from "next/image";
import WhyUsCard from "./WhyUsCard";

const WhyUs = () => {
  const whyUsInfo = [
    {
      icon: ICONS.care,
      title: "Compassionate Care",
      description:
        "Patients feel at ease knowing their comfort and well-being are prioritized.",
    },
    {
      icon: ICONS.expertise,
      title: "Expertise You Can Trust",
      description:
        "Our experienced team provides high-quality, reliable dental treatments.",
    },
  ];
  return (
    <div className="flex items-center gap-[100px]  2xl:gap-[175px]">
      <Image
        src={IMAGES.whyUs}
        alt="why-us-img"
        className="max-w-[500px] 2xl:max-w-[823px] rounded-3xl"
      />
      <div>
        <Heading
          subHeading={"WHY US"}
          classNames={""}
          aligned={"Left"}
          // headingWidth={"200px"}
          isHeadingCenter={false}
        >
          <h1 className="max-w-[600px]">
            Why <span className="text-primary-10">Choose Us</span> for Your
            Dental Care?
          </h1>
        </Heading>
        <p className="text-neutral-10 font-Poppins text-xl max-w-[881px] w-full">
          See how we’ve transformed smiles and improved lives through expert
          dental care. Read testimonials from patients who trust us with their
          oral health.
        </p>

        <div className="flex items-center gap-8 mt-8">
          {whyUsInfo.map((info, index) => (
            <WhyUsCard key={index} info={info} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
