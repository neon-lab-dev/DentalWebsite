import { ICONS } from "@/assets";
import Button from "@/components/Buttons/Button";
import Image from "next/image";

const BlogCard = ({blog}) => {
  return (
    <div>
      <Image
        src={blog.img}
        alt="Clinic image"
        className={`w-full object-cover rounded-3xl h-[290px]`}
      />
      <div className="flex flex-col gap-4 mt-4">
      <div className="flex items-center gap-3">
        <p className="text-neutral-10 font-Poppins">{blog.createdAt}</p>
        <p className="text-primary-10 font-Poppins">{blog.author}</p>
      </div>
      <p className="text-neutral-10 font-Poppins text-xl">
      {blog.content}
      </p>
      <Button variant="Outlined" classNames="px-[50px] py-4 w-fit">
        Read More
        <Image src={ICONS.arrowUp} alt="arrow-up" className="size-[22px]" />
      </Button>
      </div>
    </div>
  );
};

export default BlogCard;
