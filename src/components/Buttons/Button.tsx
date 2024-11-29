import React, { MouseEventHandler, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TButton = {
  variant: "Outlined" | "Filled" | "Gradient";
  classNames?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<TButton> = ({
  variant,
  children,
  classNames,
  onClick,
}) => {
  const baseClasses =
    "border px-11 py-4 font-Poppins text-[22px] font-semibold rounded-[55px] flex items-center gap-3";

  const variantClasses = {
    Outlined: "border-[#FF7F50] bg-none text-[#FF7F50]",
    Filled: "border-[#FF7F50] bg-[#FF7F50] text-[#F5F5DC]",
    Gradient: "border-none bg-primary-gradient text-[#F5F5DC]",
  };

  return (
    <button
      onClick={onClick}
      className={twMerge(baseClasses, variantClasses[variant], classNames)}
    >
      {children}
    </button>
  );
};

export default Button;
