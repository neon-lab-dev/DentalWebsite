import Hero from "@/components/Home/Hero/Hero";
import OurPartners from "@/components/Home/OurPartners/OurPartners";
import OurServices from "@/components/Home/OurServices/OurServices";


export default function Home() {
  return (
    <div>
      <Hero/>
      <OurServices/>
      <OurPartners/>
    </div>
  );
}
