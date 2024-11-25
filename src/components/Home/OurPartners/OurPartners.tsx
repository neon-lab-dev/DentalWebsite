import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Buttons/Button";
import Container from "@/components/shared/Container/Container";
import Heading from "@/components/shared/Heading/Heading";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const OurPartners = () => {
  const ourPartners = [IMAGES.logo1, IMAGES.logo2, IMAGES.logo3, IMAGES.logo4];
  return (
    <div className="py-[110px]">
    <div className="bg-secondary-10 py-[156px]">
      <Container>
        <div className="flex flex-col gap-[65px]">
        <Heading
          subHeading={"OUR PARTNERS"}
          classNames={""}
          aligned={"Center"}
          headingWidth={"max-w-[870px]"}
          isHeadingCenter={true}
        >
          We Partner with{" "}
          <span className="text-primary-10">Leading Insurance</span> Providers
        </Heading>

        {/* Divider */}
        <hr className="border border-black w-full" />

        <Marquee className="flex items-center gap-[100px]">
          {ourPartners.map((partner, index) => (
            <Image
              key={index}
              src={partner}
              alt={`logo-${index + 1}`}
              className="mr-[100px]"
            />
          ))}
        </Marquee>

        {/* Divider */}
        <hr className="border border-black w-full" />
        <Button variant="Filled" classNames="px-[50px] py-4 w-fit mx-auto">
          Learn More
          <Image
            src={ICONS.arrowUpWhite}
            alt="arrow-up"
            className="size-[22px]"
          />
        </Button>
        </div>
      </Container>
    </div>
    </div>
  );
};

export default OurPartners;
