import React, { ReactNode } from 'react';
import Image from 'next/image';
import Container from '@/components/shared/Container/Container';

const AuthLayout = ({children}:{children:ReactNode}) => {
  return (
   <Container>
     <div className='flex justify-center items-center gap-20'>
       <div className="w-full relative">
          <Image
            className=" object-cover  rounded-3xl "
            src={`/assets/images/LoginSignup.png`}
            alt="Login or Sign Up Page Image"
            height={984}
            width={832}
          />
          <div className="absolute ">
            <span>Dental</span>
            <span>Clinic</span>
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
