/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from "@/assets";
import Button from "@/components/Buttons/Button";
import Image from "next/image";

const BlogCard = ({blog}:{blog:any}) => {
  return (
    <div>
      <Image
        src={blog.img}
        alt="Clinic image"
        className={`w-full object-cover rounded-3xl h-[290px]`}
      />
      <div className="flex flex-col gap-4 mt-4">
      <div className="sm:flex items-center gap-3">
        <p className="text-neutral-10 text-[10px] sm:text-sm  md:text-base font-Poppins">{blog.createdAt}</p>
        <p className="text-primary-10 font-Poppins text-[10px] sm:text-sm  md:text-base">{blog.author}</p>
      </div>
      <p className="text-neutral-10 font-Poppins text-xs lg:text-xl sm:text-base">
      {blog.content}
      </p>
      <Button
              variant="Outlined"
              classNames="px-2 sm:py-4  mt-[30px] text-center flex justify-center w-full md:w-[260px] 2xl:mt-[56px] text-xs sm:text-base md:text[20px]  "
            >
              Read More
              <Image
                src={ICONS.arrowUp}
                alt="arrow-up"
                className="md:size-[22px] sm:size-4 size-3"
              />
            </Button>
      </div>
    </div>
  );
};

export default BlogCard;
