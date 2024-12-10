import { ReactNode } from "react";

type THeading = {
  subHeading?: string;
  children: ReactNode;
  classNames?: string;
  aligned: string;
  headingWidth?: string | number;
  isHeadingCenter: boolean;
};

const Heading: React.FC<THeading> = ({
  subHeading,
  children,
  classNames,
  aligned,
  headingWidth,
  isHeadingCenter,
}) => {
  return (
    <div
      className={`flex flex-col ${
        isHeadingCenter ? " items-center" : "items-start"
      }  gap-8 ${classNames}`}
    >
      {subHeading && (
        <div className="md:px-5 md:py-[10px] sm:px-4 sm:py-2 px-[12px] py-[6px] text-xs sm:text-sm md:text-xl text-neutral-10 flex items-center justify-center rounded-[49px] border border-neutral-10 w-fit">
          {subHeading}
        </div>
      )}

      <h1
        className={`text-neutral-15 font-Amiri font-bold md:text-5xl sm:text-4xl text-[32px] md:leading-[66px] sm:leading-[44px] leading-[32px] ${headingWidth} ${
          aligned === "Center" ? "mx-auto" : "mx-0"
        } w-full ${aligned === "Center" ? " text-center" : "text-start"}`}
      >
        {children}
      </h1>
    </div>
  );
};

export default Heading;