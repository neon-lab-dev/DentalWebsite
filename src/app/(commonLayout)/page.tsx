import Blogs from "@/components/Home/Blogs/Blogs";
import Hero from "@/components/Home/Hero/Hero";
import Newsletter from "@/components/Home/Newsletter/Newsletter";
import OurClinic from "@/components/Home/OurClinic/OurClinic";
import OurPartners from "@/components/Home/OurPartners/OurPartners";
import OurServices from "@/components/Home/OurServices/OurServices";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import WhyUs from "@/components/Home/WhyUs/WhyUs";
import Container from "@/components/shared/Container/Container";



export default function Home() {
  return (
    <div>
      <Container>
        <div className="flex flex-col gap-[110px]">
          <Hero />
          <OurServices />
        </div>
      </Container>
      <OurPartners />
      <Container>
        <div className="flex flex-col gap-[110px]">
          <OurClinic />
          <Testimonials />
          <WhyUs />
          <Blogs />
          <Newsletter />
        </div>
      </Container>
    </div>
   
  );
}
