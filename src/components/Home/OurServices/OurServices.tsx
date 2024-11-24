import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Buttons/Button";
import Heading from "@/components/shared/Heading/Heading";
import Image from "next/image";
import ServiceCard from "./ServiceCard";

const OurServices = () => {
  const ourServices = [
    {
      title: "Emergency Exam",
      description: "Same-day care from a team of friendly experts.",
      img: IMAGES.patient1,
    },
    {
      title: "Teeth Whitening",
      description:
        "A brighter smile in 90 minutes? It’s easier (and more affordable!) than you think.",
      img: IMAGES.patient2,
    },
    {
      title: "Invisalign",
      description:
        "Faster. Smarter. More affordable with better results. Thousands of satisfied smiles.",
      img: IMAGES.patient2,
    },
    {
      title: "Implants",
      description: "We are implant specialists that use 3D-guided technology.",
      img: IMAGES.patient4,
    },
  ];
  return (
    <div>
      {/* Heading */}
      <div className="flex items-center justify-between w-full">
        <div className="flex-1">
          <Heading
            subHeading={"OUR SERVICES"}
            classNames={""}
            aligned={"Left"}
            headingWidth={"656px"}
            isHeadingCenter={false}
          >
            <span className="text-primary-10">Expert Dental Care</span> for
            Every Stage of Life
          </Heading>
        </div>
        <p className="text-neutral-10 font-Poppins text-xl max-w-[893px] w-full flex-1">
          We offer personalized treatments, including cleanings, fillings,
          cosmetic dentistry, and more. Whatever your dental needs, we’ve got
          you covered.
        </p>
      </div>

      {/* Cards */}
      <div className="flex gap-8 mt-[60px]">
        <div className="rounded-3xl border border-secondary-20 shadow-md h-[806px]">
          <Image
            src={IMAGES.patient}
            alt="patient-img"
            className="h-[483px] rounded-t-3xl"
          />
          <div className="p-6">
            <h1 className="text-neutral-15 text-[32px] font-bold leading-[48px]">
              First Visit to Dentologie
            </h1>
            <p className="text-neutral-10 font-Poppins text-xl mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
              nunc sollicitudin
            </p>

            <Button variant="Outlined" classNames="px-[50px] py-4 mt-[56px]">
              Learn More
              <Image
                src={ICONS.arrowUp}
                alt="arrow-up"
                className="size-[22px]"
              />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {ourServices.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
