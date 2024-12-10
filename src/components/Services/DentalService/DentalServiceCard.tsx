import Button from "@/components/Buttons/Button";
import Image, { StaticImageData } from "next/image";

interface DentalServiceCardProps {
  img: string | StaticImageData;
  title: string;
  content: string;
  isFullWidth?: boolean;
  isBtnVisible?: boolean;
}

const DentalServiceCard: React.FC<DentalServiceCardProps> = ({
  img,
  title,
  content,
  isFullWidth=false,
  isBtnVisible = false,
}) => {
  return (
    <div
      className={`${
        isFullWidth
          ? "flex flex-col md:flex-row items-center gap-8 w-full"
          : ""
      } border border-neutral-15/60 rounded-3xl`}
    >
      <Image
        src={img}
        alt="Dental service"
        className={`${
          isFullWidth
            ? "w-full md:w-1/2 object-cover h-full rounded-t-3xl"
            : "w-full object-cover rounded-t-3xl h-[270px]"
        }`}
      />
      <div
        className={`${
          isFullWidth
            ? "p-6 flex-1"
            : "flex flex-col p-6 2xl:p-12"
        }`}
      >
        <h1 className="text-black font-Amiri lg:text-[48px] sm:text-[32px] text-2xl font-bold lg:leading-[48px] sm:leading-8 leading-7">
          {title}
        </h1>
        <p className="text-neutral-10 font-Poppins md:text-xl sm:text-base text-xs  mt-4">{content}</p>
        <Button
          variant="Gradient"
          classNames={`${isBtnVisible?"":"hidden md:flex"} md:px-[50px] md:py-[22px] md:px-[36px] sm:py-[16px] px-[28px] py-[14px] w-fit mt-12 ${
            isFullWidth ? "self-start" : ""
          }`}
        >
          <p className="md:text-[22px] sm:text-[18px] text-base">Schedule An Appointment!</p>
        </Button>


       
      </div>
    </div>
  );
};

export default DentalServiceCard;
