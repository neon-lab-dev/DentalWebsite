import React from 'react';

interface InputFieldProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'select' | 'date'; 
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>; 
  className?: string;
  options?: string[]; 
}

const InputField: React.FC<InputFieldProps> = ({
  type = 'text',
  id, 
  name,
  label,
  placeholder, 
  value,
  onChange,
  className = '',
  options = [], 
}: InputFieldProps) => {
  
  if (type === 'select') {
    return (
      <div className={`flex flex-col space-y-1 ${className}`}>
        {/* Label */}
        <label htmlFor={id} className="xl:text-[32px] md:text-2xl text-[16px] xl:leading-[42px] leading-9 font-bold font-Amiri text-[#000]">
          {label}
        </label>

        {/* Select */}
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="xl:px-4 xl:py-3 md:p-4 p-3 bg-transparent xl:text-2xl md:text-[16px] md:leading-6 text-xs leading-normal text-black border border-black rounded-xl"
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }

  // Default input rendering for other types
  return (
    <div className={`flex flex-col space-y-1 ${className}`}>
      {/* Label */}
      <label htmlFor={id} className="xl:text-[32px] md:text-2xl text-[16px] xl:leading-[42px] leading-9 font-bold font-Amiri text-[#000]">
        {label}
      </label>

      {/* Input */}
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="xl:px-4 xl:py-3 md:p-4 p-3 bg-transparent xl:text-2xl md:text-[16px] md:leading-6 text-xs leading-normal text-black border border-black rounded-xl"
      />
    </div>
  );
};

export default InputField;
