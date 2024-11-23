import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string; // Custom className for further customization
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  image?: string; // Optional image URL or path
  imageAlt?: string; // Alt text for the image
  bgColor?: string; // Background color for the button
  textcolor?:string // Button Text color
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  image,
  imageAlt = 'button image',
  bgColor = 'bg-gradient-to-b from-[#FF7F50]  to-[#FF7F50]', // Default to blue color if no bgColor is provided
  textcolor='text-white'
}) => {
    // background: linear-gradient(180deg, #FF7F50 0%, #F07F38 90.13%);

  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center p-6 font-semibold  text-[22px] font-poppins  ${textcolor} rounded-full ${bgColor} ${className}`}
      disabled={disabled}
    >
      {image && <img src={image} alt={imageAlt} className="w-5 h-5 mr-2" />}
      <span>{text}</span>
    </button>
  );
};

export default Button;
