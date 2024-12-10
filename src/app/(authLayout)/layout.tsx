import React, { ReactNode } from 'react';
import Image from 'next/image';
import Container from '@/components/shared/Container/Container';

const AuthLayout = ({children}:{children:ReactNode}) => {
  return (
   <Container>
     <div className='flex justify-center items-center gap-20'>
     <div className="w-full relative">
  {/* Image */}
  <Image
    className="object-cover rounded-3xl"
    src={`/assets/images/LoginSignup.png`}
    alt="Login or Sign Up Page Image"
    width={832}
    height={984}
  />
  
  {/* Overlay */}
  <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>

  {/* Text on top of the image */}
  <div className="absolute inset-0  pl-[60px] pb-[60px] flex  items-end text-white">
    <div className="text-center">
      <span className="block text-5xl font-Amiri font-bold">Dental</span>
      <span className="block text-xl font-Poppins tracking-[15px]">Clinic</span>
    </div>
  </div>
</div>

        <div className='w-full'>
          {children}
        </div>
    </div>
   </Container>
  );
};

export default AuthLayout;
