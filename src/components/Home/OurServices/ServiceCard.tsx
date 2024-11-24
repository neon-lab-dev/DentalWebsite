/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

type TServiceCard = {
  service: {
    title: string;
    description: string;
    img: any;
  };
};

const ServiceCard: React.FC<TServiceCard> = ({ service }) => {
  return (
    <div
      key={service.title}
      className="rounded-3xl border border-secondary-20 shadow-md  h-[387px]"
    >
      <Image
        src={service.img}
        alt="patient-img"
        className="rounded-t-3xl h-[214px]"
      />
      <div className="px-6 pb-6 pt-[18px]">
        <h1 className="text-neutral-15 text-[32px] font-bold leading-[48px]">
          {service.title}
        </h1>
        <p className="text-neutral-10 font-Poppins text-xl mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
          nunc sollicitudin
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
