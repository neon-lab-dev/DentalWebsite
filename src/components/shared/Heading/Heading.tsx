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
        isHeadingCenter ? "items-center" : "items-start"
      }  gap-8 ${classNames}`}
    >
      {subHeading && (
        <div className="px-5 py-[10px] text-neutral-10 flex items-center justify-center rounded-[49px] border border-neutral-10 w-fit">
          {subHeading}
        </div>
      )}

      <h1
        className={`md:text-neutral-15 font-Amiri xl:text-5xl md:text-4xl text-[32px] font-bold xl:leading-[66px] md:leading-[44px] leading-[40px] ${headingWidth} ${
          aligned === "Center" ? "mx-auto" : "mx-0"
        } w-full ${aligned === "Center" ? "text-center" : "text-start"}`}
      >
        {children}
      </h1>
    </div>
  );
};

export default Heading;