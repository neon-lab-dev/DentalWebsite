import Button from "@/components/Buttons/Button";
import Image from "next/image";

const LatestBlogCard = ({blog}) => {
  return (
    <div className="shadow-md rounded-3xl">
      <Image
        src={blog.img}
        alt="Clinic image"
        className={`w-full object-cover rounded-t-3xl h-[270px]`}
      />
      <div className="flex flex-col p-6">
        <h1 className="text-black font-Amiri text-[32px] font-bold leading-[48px]">{blog.title}</h1>
      <p className="text-neutral-10 font-Poppins text-xl mt-[15px]">
      {blog.content}
      </p>
      <Button variant="Outlined" classNames="px-[50px] py-[22px] w-fit mt-6">
        Read More
      </Button>
      </div>
    </div>
  );
};

export default LatestBlogCard;
