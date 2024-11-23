import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string; 
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  image?: string; // Optional image URL or path
  imageAlt?: string; // Alt text for the image
  buttonColor?: string; // Background color for the button
  textcolor?:string // Button Text color
  horizontalpadding?:number
  verticalpadding?:number
  bordercolor?:string
  isButtonOutlined?:boolean
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  image,
  imageAlt = 'button image',
  // buttonColor = 'bg-gradient-to-b from-[#FF7F50]  to-[#FF7F50]', 
  buttonColor='#FF7F50',
  textcolor='#ffffff',
  horizontalpadding=16,
  verticalpadding=20,
  isButtonOutlined=false
}) => {
    // background: linear-gradient(180deg, #FF7F50 0%, #F07F38 90.13%);
const textColorClass=isButtonOutlined ?`text-[${buttonColor}]`: `text-[${textcolor}]`;
const bgColorClass=`bg-[${buttonColor}]`;
const borderColorClass=`bg-transparent border border-[${buttonColor}] `;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center  font-semibold  text-[22px] font-poppins rounded-full  ${textColorClass} px-${horizontalpadding}px py-${verticalpadding}px  ${isButtonOutlined? borderColorClass : bgColorClass}  ${className}`}
      disabled={disabled}
    >
      {image && <img src={image} alt={imageAlt} className="w-5 h-5 mr-2" />}
      <span>{text}</span>
    </button>
  );
};

export default Button;
