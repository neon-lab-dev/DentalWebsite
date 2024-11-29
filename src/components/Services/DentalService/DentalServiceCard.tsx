import Button from "@/components/Buttons/Button";
import Image, { StaticImageData } from "next/image";

interface DentalServiceCardProps {
  img: string | StaticImageData;
  title: string;
  content: string;
  isFullWidth?: boolean;
}

const DentalServiceCard: React.FC<DentalServiceCardProps> = ({
  img,
  title,
  content,
  isFullWidth = false,
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
            ? "w-full md:w-1/2 object-cover h-full rounded-l-3xl"
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
        <h1 className="text-black font-Amiri text-[32px] font-bold leading-[48px]">
          {title}
        </h1>
        <p className="text-neutral-10 font-Poppins text-xl mt-4">{content}</p>
        <Button
          variant="Gradient"
          classNames={`px-[50px] py-[22px] w-fit mt-12 ${
            isFullWidth ? "self-start" : ""
          }`}
        >
          Schedule An Appointment!
        </Button>
      </div>
    </div>
  );
};

export default DentalServiceCard;
