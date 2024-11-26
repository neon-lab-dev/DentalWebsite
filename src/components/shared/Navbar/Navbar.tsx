"use client";
import { IMAGES } from "@/assets";
import Button from "@/components/Buttons/Button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Container from "../Container/Container";
import { navlinks } from "./navlinks";

const Navbar = () => {
  
  const pathname = usePathname();
  console.log(pathname);

  return (
    <Container>
    <div className="flex items-center justify-between pt-[46px]">
      <Image
        src={IMAGES.dentistClinicLogo}
        alt="dentist-clinic"
        className="w-[151px]"
      />

      <div className="flex items-center gap-6">
        {navlinks.map((link) => (
          <Link
            key={link.label}
            href={link.path}
            className={`text-neutral-10 font-Poppins text-xl ${
              pathname === link.path ? "bg-secondary-10 px-5 py-2 rounded-[32px]" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <Button variant="Outlined" classNames="">
          Book Now!
        </Button>

        <Link href={"/login"}>
        <Button variant="Filled" classNames="">
          Sign in
        </Button>
        </Link>
      </div>
    </div>
    </Container>
  );
};

export default Navbar;
