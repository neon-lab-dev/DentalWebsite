import Hero from "@/components/Home/Hero/Hero";
import OurClinic from "@/components/Home/OurClinic/OurClinic";
import OurPartners from "@/components/Home/OurPartners/OurPartners";
import OurServices from "@/components/Home/OurServices/OurServices";
import WhyUs from "@/components/Home/WhyUs/WhyUs";


export default function Home() {
  return (
    <div>
      <Hero/>
      <OurServices/>
      <OurPartners/>
      <OurClinic/>
      <WhyUs/>
    </div>
  );
}
