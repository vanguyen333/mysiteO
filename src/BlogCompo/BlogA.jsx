import { useEffect, useState } from "react";

const BlogA = () => {
  const paraStyle = {
    WebkitLineClamp: 3,
    WebkitBoxOrient: "verticle",
    overflow: "hidden",
    display: "-webkit-box",
  };
  const [isShowMore, setIsShowMore] = useState(false);
  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <div>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old.
      </p>
      {isShowMore && (
        <p>
          Richard McClintock, a Latin professor at Hampden-Sydney College in
          Virginia, looked up one of the more obscure Latin words, consectetur,
          from a Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
          Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          This book is a treatise on the theory of ethics, very popular during
          the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
          amet..", comes from a line in section 1.10.32.
        </p>
      )}
      <button
        className="border bg-blue-400 rounded-lg px-4 py-2"
        onClick={toggleReadMoreLess}
      >
        {isShowMore ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default BlogA;
