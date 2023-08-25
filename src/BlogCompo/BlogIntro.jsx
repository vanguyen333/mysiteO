import { DefaultPlayer as Video } from "react-html5video";

const BlogIntro = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold py-4">#1 Video Introduction</h1>

      <video width="300" height="100" controls>
        <source src="./imgs/blogIntro.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default BlogIntro;
