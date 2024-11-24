import Hero from "@/components/Home/Hero/Hero";
import OurPartners from "@/components/Home/OurPartners/OurPartners";
import OurServices from "@/components/Home/OurServices/OurServices";
import WhyUs from "@/components/Home/WhyUs/WhyUs";


export default function Home() {
  return (
    <div>
      <Hero/>
      <OurServices/>
      <OurPartners/>
      <WhyUs/>
    </div>
  );
}
