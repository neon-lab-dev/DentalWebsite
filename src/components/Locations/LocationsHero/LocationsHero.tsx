import Button from "@/components/Buttons/Button";
import Heading from "@/components/shared/Heading/Heading";
import ImageGallary from "./ImageGallary";

const LocationsHero = () => {
  return (
    <div className="flex items-center md:flex-row flex-col gap-10 mt-[120px] overflow-hidden">
      <div className="md:w-[50%] w-[100%]">
        <Heading
          aligned={"Left"}
          isHeadingCenter={false}
          headingWidth={`max-w-[600px] 2xl:max-w-[744px]`}
        >
          Our Mission: Exceptional{" "}
          <span className="text-primary-10">Dental Care</span> You Can Trust
        </Heading>
        <p className="text-neutral-10 font-Poppins text-xs lg:text-xl sm:text-base max-w-[744px] w-full flex-1 mt-8">
          At Dentist Clinic, we provide personalized, high-quality dental care.
          Our experienced team is dedicated to helping you achieve a healthy,
          confident smile in a comfortable environment.
        </p>
        <div className="flex items-center justify-start mt-8 gap-6">
        <Button variant="Gradient" classNames="md:px-[50px] md:py-[22px] md:px-[36px] sm:py-[16px] px-[28px] py-[14px] ">
          <p className="md:text-[22px] sm:text-[18px] text-base">Schedule An Appointment!</p>
        </Button>
      </div>
      </div>
      <div className="md:w-[50%] w-[100%]">
        <ImageGallary />
      </div>
    </div>
  );
};

export default LocationsHero;