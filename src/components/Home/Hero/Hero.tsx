import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Buttons/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col gap-[60px]">
      <div>
        <h1 className="text-neutral-15 font-Amiri text-[64px] font-bold leading-[90px] text-center max-w-[1121px] mx-auto w-full">
          Creating Beautiful,{" "}
          <span className="text-primary-10">Healthy Smiles</span> with Expert
          Dental Care
        </h1>
        <p className="text-neutral-10 font-Poppins text-[22px] text-center max-w-[724px] mx-auto w-full mt-8">
          Your trusted family dentist for cleanings, cosmetic treatments, and
          more. Book your appointment today!
        </p>
      </div>
      <div className="flex items-center justify-center gap-6">
        <Button
          variant="Gradient"
          classNames="px-[50px] py-[22px]"
        >
          Schedule An Appointment!
        </Button>
        <button className="p-6 rounded-full bg-secondary-10">
          <Image src={ICONS.phone} alt="phone-icon" className="size-7" />
        </button>
      </div>

      <Image
        src={IMAGES.heroImg}
        alt="hero-image"
        className="w-full h-[600px] rounded-3xl"
      />
    </div>
  );
};

export default Hero;
