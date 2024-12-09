import { IMAGES } from "@/assets";
import Button from "@/components/Buttons/Button";
import Image from "next/image";

const ServicesHero = () => {
  return (
    <div className="pt-[63px] w-full rounded-3xl overflow-hidden max-w-screen">
      <div className="rounded-3xl relative max-h-[836px] w-full">
        {/* Background Image */}
        <Image
          src={IMAGES.servicesHeroImg}
          alt="blog-hero"
          className="w-full h-auto md:max-h-[836px] sm:max-h-[640px] max-h-[860px] md:min-h-[836px] sm:min-h-[640px] min-h-[860px] rounded-3xl object-cover"
        />

        {/* Content Overlay */}
        <div className="bg-services-hero-gradient w-full h-full absolute top-0 bottom-0 rounded-3xl flex flex-col justify-end pb-8 sm:pb-10  md:pb-14 ">
          {/* Hero Title */}
          <div >
            <h1 className="text-white font-Amiri text-[48px] md:text-[64px] sm:text-[48px] text-[36px] font-bold md:leading-[66px] sm:leading-[64px] leading-[42px] 2xl:leading-[90px] max-w-[900px] 2xl:max-w-[1090px] mx-auto text-center">
              Comprehensive{" "}
              <span className="text-secondary-10">Dental Services</span> for a
              Healthy, Beautiful Smile
            </h1>

            <p className="text-secondary-30 font-Poppins md:text-xl sm:text-base text-xs max-w-[974px] w-full flex-1 mt-8 mx-auto text-center">
              At Dentist Clinic, we offer a full range of dental services
              tailored to your unique needs. From preventive care and
              restorative treatments to cosmetic dentistry, our team is here to
              ensure your oral health is in the best hands.
            </p>

            <div className="flex items-center justify-center gap-6 mt-8">
              <Button
                variant="Gradient"
                classNames="md:px-[50px] md:py-[22px] md:px-[36px] sm:py-[16px] px-[28px] py-[14px] "
              >
                <p className="md:text-[22px] sm:text-[18px] text-base">
                  Schedule An Appointment!
                </p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
