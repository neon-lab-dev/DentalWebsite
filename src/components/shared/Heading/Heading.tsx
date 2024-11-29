import { ReactNode } from "react";

type THeading = {
  subHeading: string;
  children: ReactNode;
  classNames?: string;
  aligned: string;
  headingWidth?: string | number;
  isHeadingCenter: boolean;
  isSubheading: boolean;  // Add the new isSubheading prop
};

const Heading: React.FC<THeading> = ({
  subHeading,
  children,
  classNames,
  aligned,
  headingWidth,
  isHeadingCenter,
  isSubheading,  // Destructure isSubheading from props
}) => {
  return (
    <div className={`flex flex-col ${isHeadingCenter ? "items-center" : "items-start"} gap-8 ${classNames}`}>
      {/* Conditionally render the subHeading based on isSubheading */}
      {isSubheading && (
        <div className="px-5 py-[10px] text-neutral-10 flex items-center justify-center rounded-[49px] border border-neutral-10 w-fit">
          {subHeading}
        </div>
      )}

      <h1
        className={`text-neutral-15 font-Amiri text-[48px] font-bold leading-[66px] ${headingWidth} ${aligned === "Center" ? "mx-auto" : "mx-0"} w-full ${
          aligned === "Center" ? "text-center" : "text-start"
        }`}
      >
        {children}
      </h1>
    </div>
  );
};

export default Heading;
