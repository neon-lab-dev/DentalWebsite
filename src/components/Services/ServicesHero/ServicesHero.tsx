import { IMAGES } from "@/assets";
import Button from "@/components/Buttons/Button";
import Image from "next/image";

const ServicesHero = () => {
  return (
    <div className="pt-[63px] w-full overflow-hidden max-w-screen">
      <div className="rounded-3xl relative max-h-[836px] w-full">
        {/* Background Image */}
        <Image
          src={IMAGES.servicesHeroImg}
          alt="blog-hero"
          className="w-full h-auto max-h-[836px] rounded-3xl object-cover"
        />

        {/* Content Overlay */}
        <div className="bg-services-hero-gradient w-full h-full absolute top-0 bottom-0 rounded-3xl flex flex-col justify-center">
          {/* Hero Title */}
          <div>
            <h1 className="text-white font-Amiri text-[48px] 2xl:text-[64px] font-bold leading-[66px] 2xl:leading-[90px] max-w-[900px] 2xl:max-w-[1090px] mx-auto text-center">
              Comprehensive{" "}
              <span className="text-secondary-10">Dental Services</span> for a
              Healthy, Beautiful Smile
            </h1>

            <p className="text-secondary-30 font-Poppins text-xl max-w-[974px] w-full flex-1 mt-8 mx-auto text-center">
            At Dentist Clinic, we offer a full range of dental services tailored to your unique needs. From preventive care and restorative treatments to cosmetic dentistry, our team is here to ensure your oral health is in the best hands.
            </p>

            <Button
              variant="Gradient"
              classNames="px-[50px] py-[22px] flex justify-center w-fit mx-auto mt-[60px]"
            >
              Schedule An Appointment!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
