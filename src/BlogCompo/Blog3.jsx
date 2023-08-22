import { useState } from "react";
import { useSpring, animated } from "react-spring";
const Blog3 = () => {
  const styles = useSpring({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
  });
  const [open, setOpen] = useState(false);
  const handleMoreLess = () => {
    setOpen(!open);
  };
  return (
    <div>
      <h1 className="text-5xl font-bold pt-4">
        #3 How 'GRATEFUL' can lead to Happiness?
      </h1>
      <p className="pt-4">
        Grateful itself is a positive affirmation. Commencing each day by
        acknowledging our gratitude for present and future blessings
        consistently engenders feelings of joy and a sense of being blessed.
      </p>
      {open && (
        <p>
          <br />
          The reason is because embracing gratitude initiates a positive mental
          state, our body stimuates a surge of optimistic thoughts within our
          mind. This consequently influences our body's circulation, fostering
          and environment to attracting more favorable outcomes. Positive ideas
          beget positive outcomes. <br />
          <br />A significant research has been made from{" "}
          <a href="https://thewellnessenterprise.com/emoto/">
            {" "}
            <strong> Dr. Masaru Emoto </strong>
          </a>
          regarding how water behaves when being exposed to thoughts and words.
          <br />
          <br />
          Water is frozen then pictures being taken of the resultant crystals
          before and after doing something on it for the purpose of comparision
          , and the result blows people away. He played diffirent kinds of music
          and took photograpsh for each music type. Classical music generated
          well-shaped crystals but heavy metal songs produced misshapen,
          irregular cystals. Positive words being said on water produced
          beautiful crystals and negative words produced the oppositive result.
          <br /> <br />
          Below are some images of water effects on a specific task.
          <animated.img
            className="pt-4"
            src="imgs/waterExperi.jpeg"
            alt=""
            style={styles}
          />
          <br />
          Source:{" "}
          <a href=" https://betterbelieveit.net/masaru-emotos-experiments-water/">
            Click Here
          </a>
          <br />
          Image Source:{" "}
          <a href="https://t2conline.com/wp-content/uploads/2022/12/main-qimg-839283f790c30a00ffe88ff9b83cb07b-lq.jpeg">
            Click Here
          </a>
          <br />
          We all know that the majority of our bodies consist of water, but
          little do we realize that every single thought or word we generate
          impact our body greatly. Therefore, our body would greatly appreciate
          if we embrace our mental and physically health by thinking and saying
          positive words.
        </p>
      )}
      <button
        className="rounded border bg-sky-200 px-4 py-2 mt-2"
        onClick={handleMoreLess}
      >
        {open ? "Read Less..." : "Read More..."}
      </button>
    </div>
  );
};

export default Blog3;
