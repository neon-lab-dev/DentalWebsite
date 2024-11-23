type TButton = {
  variant: "Outlined" | "Filled";
  label: string;
};

const Button: React.FC<TButton> = ({ variant, label }) => {
  return (
    <button
      className={`${
        variant === "Outlined"
          ? "border-[#FF7F50] bg-none text-[#FF7F50]"
          : "border-[#FF7F50] bg-[#FF7F50] text-[#F5F5DC]"
      } border px-11 py-4  font-Poppins text-[22px] font-semibold rounded-[55px]`}
    >
      {label}
    </button>
  );
};

export default Button;