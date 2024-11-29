import Heading from "@/components/shared/Heading/Heading";
import DentalServiceCard from "./DentalServiceCard";
import { IMAGES } from "@/assets";

const DentalService = () => {
    const dentalServiceData = [
        {
          img: IMAGES.blog1,
          title: "Invisalign vs. Braces: Which is Right for You?",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis feugiat ",
          category : "Latest"
        },
        {
          img: IMAGES.blog2,
          title: "Invisalign vs. Braces: Which is Right for You?",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis feugiat ",
          category : "Hot"
        },
        {
          img: IMAGES.blog3,
          title: "Invisalign vs. Braces: Which is Right for You?",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis feugiat ",
            category : "Trending"
        },
        {
          img: IMAGES.blog1,
          title: "Invisalign vs. Braces: Which is Right for You?",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis feugiat ",
            category : "Popular"
        },
      ];
  return (
    <div className="mt-[120px]">
      <Heading aligned={"Center"} isHeadingCenter={true}>
        Our Range of <span className="text-primary-10">Dental Services</span>
      </Heading>
      <p className="text-neutral-10 font-Poppins text-xl max-w-[1058px] w-full mx-auto text-center flex-1 mt-8">
        With state-of-the-art facilities and a caring team, our clinics are
        designed for your comfort and convenience. Find the nearest location and
        schedule your visit today.
      </p>

      <hr className="border border-neutral-15 mt-12" />


      <div className="mt-[98px]">
        {/* Rendering the first card */}
        {dentalServiceData.slice(0, 1).map((service, index) => (
          <DentalServiceCard
            key={index}
            img={service.img}
            title={service.title}
            content={service.content}
            isFullWidth
          />
        ))}

        {/* Renderin rest of the cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {dentalServiceData.slice(1).map((service, index) => (
            <DentalServiceCard
              key={index}
              img={service.img}
              title={service.title}
              content={service.content}
            />
          ))}
        </div>
        </div>

    </div>
  );
};

export default DentalService;
