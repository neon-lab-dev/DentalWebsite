/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const ConvenientDentalCareCard = ({details}:{details:any}) => {
    return (
        <div
            className="relative overflow-hidden group cursor-pointer rounded-3xl max-w-[824px] max-h-[500px] 2xl:max-h-[600px]">

            {/* Image */}
            <Image
                src={details.img}
                alt="animated_card"
                className="w-full max-w-[824px] max-h-[600px] object-cover"
            />

            {/* Text */} 
            <div
                className="absolute top-[42%] transform group-hover:translate-y-[-10%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-start justify-center flex-col p-12">
                <h1 className="text-white capitalize text-[48px] font-bold leading-normal 2xl:leading-[66px] font-Amiri">
                    {details.name}
                </h1>
                <p className="z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white font-Poppins text-[22px]">
                    {details.numberOfClinic}
                </p>
            </div>

            {/* Button */}
            <Link
            href={`/${details._id}`}
                className="z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 absolute bottom-[10%] right-[-50%] transform group-hover:right-[5%] transition-all duration-500 bg-white text-primary-10 px-11 py-4 font-Poppins text-[22px] font-semibold rounded-[55px] flex items-center gap-3">
                See All
                <Image src={ICONS.rightArrowOrange} alt="right-arrow" className="size-6"/>
            </Link>

            {/* Bottom Shadow */}
            <div
                className="absolute bottom-0 left-0 right-0 w-full h-full bg-convenient-dental-care opacity-100 group-hover:opacity-0 transition-opacity duration-500">
            </div>

            <div
                className="absolute bottom-0 left-0 right-0 w-full h-[110px] bg-convenient-dental-care opacity-0 group-hover:opacity-20 transition-opacity duration-500">
            </div>
        </div>
    );
};

export default ConvenientDentalCareCard;
