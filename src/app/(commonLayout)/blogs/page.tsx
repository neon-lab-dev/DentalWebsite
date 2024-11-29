import BlogHero from "@/components/Blogs/BlogHero/BlogHero";
import LatestBlogs from "@/components/Blogs/LatestBlogs/LatestBlogs";
import Container from "@/components/shared/Container/Container";

const page = () => {
  return (
    <div>
      <Container>
        <BlogHero />
        <LatestBlogs/>
      </Container>
    </div>
  );
};

export default page;
