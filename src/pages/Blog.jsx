import Header from "../components/Header";
import Footer from "../components/Footer";
import Comment from "../components/Comment";
import { useSpring, animated } from "react-spring";
import Blog0 from "../BlogCompo/Blog0";
// import Blog1 from "../BlogCompo/Blog1";
import Blog2 from "../BlogCompo/Blog2";
import Blog3 from "../BlogCompo/Blog3";
import BlogIntro from "../BlogCompo/BlogIntro";

const Blog = () => {
  return (
    <div className="md:flex-row">
      <div className="md:w-3/4 mx-auto px-4 py-6">
        <Blog0 />
        {/* <BlogIntro /> */}
        <Blog2 />
        <Blog3 />
        {/* <Comment /> */}
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
