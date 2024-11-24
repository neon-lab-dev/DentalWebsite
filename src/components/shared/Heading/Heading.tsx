import { ReactNode } from "react";

type THeading = {
  subHeading: string;
  children: ReactNode;
  classNames?: string;
  aligned: string;
  headingWidth?: string | number;
  isHeadingCenter : boolean;
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
    <div className={`flex flex-col ${isHeadingCenter ? "items-center" : "items-start"}  gap-8 ${classNames}`}>
      <div className="px-5 py-[10px] text-neutral-10 flex items-center justify-center rounded-[49px] border border-neutral-10 w-fit">
        {subHeading}
      </div>

      <h1
        className={`text-neutral-15 font-Amiri text-[48px] font-bold leading-[66px] max-w-[${headingWidth}] mx-auto w-full ${
          aligned === "Center" ? "text-center" : "text-start"
        }`}
      >
        {children}
      </h1>
    </div>
  );
};

export default Heading;
