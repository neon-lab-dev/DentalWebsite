import React from 'react';

interface Inputfield {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel'; 
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>; 
  className?: string;
}

const InputField: React.FC<Inputfield> = ({
  type = 'text',
  id,
  name, 
  label,
  placeholder,
  value,
  onChange,
  className = '',
}: Inputfield) => {
  return (
    <div className={`flex flex-col space-y-1 ${className}`}>
      {/* Label */}
      <label htmlFor={id} className="text-[32px] leading-[42px] font-bold font-Amiri text-[#000]">
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
        className="px-4 py-3 bg-transparent text-2xl text-black border border-black  rounded-xl  "
      />
    </div>
  );
};

export default InputField;
