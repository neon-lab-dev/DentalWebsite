import Button from "@/components/Buttons/Button";
import Heading from "@/components/shared/Heading/Heading";
import ImageGallary from "./ImageGallary";
import Link from "next/link";

const LocationsHero = () => {
  return (
    <div className="flex items-center gap-10 mt-[120px] overflow-hidden">
        <div className="w-[50%]">
      <Heading
        aligned={"Left"}
        isHeadingCenter={false}
        headingWidth={`max-w-[600px] 2xl:max-w-[744px]`}
      >
        Our Mission: Exceptional{" "}
        <span className="text-primary-10">Dental Care</span> You Can Trust
      </Heading>
      <p className="text-neutral-10 font-Poppins text-xl max-w-[744px] w-full flex-1 mt-8">
        At Dentist Clinic, we provide personalized, high-quality dental care.
        Our experienced team is dedicated to helping you achieve a healthy,
        confident smile in a comfortable environment.
      </p>
     <Link href={'/locations/schedule-appointment'}>
     <Button
        variant="Gradient"
        classNames={`px-[50px] py-[22px] w-fit mt-[60px]`}
      >
        Schedule An Appointment!
      </Button>
     </Link>
    </div>
    <div className="w-[50%]">
    <ImageGallary/>
    </div>
    </div>
  );
};

export default LocationsHero;
