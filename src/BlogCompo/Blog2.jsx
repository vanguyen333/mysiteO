import { useSpring, animated } from "react-spring";
import { useState } from "react";
const Blog2 = () => {
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
        #2 Exploring Web 3.0: The Future of Online Technology
      </h1>
      <animated.img
        className="border-none pt-4  "
        src="imgs/web123.jpeg"
        alt="web123"
        style={styles}
      />
      <p>
        Image source:
        <u>
          <a href="https://hegias.com/en/knowledge/web-3-0-metaverse-meaning-use-cases-differences-future/">
            here
          </a>
        </u>
      </p>
      <p>
        <br />
        <strong>What exactly is Web 1.0?</strong>
        <br />
        Web 1.0 is considered the first stage of the World Wide Web where users
        have limited interaction with websites.
      </p>{" "}
      {open && (
        <p>
          During this era, websites typically featured static content presented
          through simple HTML pages. Users have limited opportunities to engage
          or interact on these early websites.
          <br />
          <br />
          <strong>How about Web 2.0?</strong>
          <br />
          The websites we are using basically Web 2.0. It refers to the
          21st-century Internet applications that have transformed the digital
          era in the aftermath of the dotcom bubble. The term Web 2.0 first came
          into use in 1999 as the Internet pivoted toward a system that actively
          engaged the user. Users were encouraged to provide content, rather
          than just viewing it. The social aspect of the Internet has been
          particularly transformed; in general, social media allows users to
          engage and interact with one another by sharing thoughts,
          perspectives, and opinions. Users can tag, share, tweet, and like.[1]
          <br />
          <br />
          <strong>What is Web 3.0?</strong>
          <br />
          With the introduction of advanced technologies, Web 3.0 is expected to
          take over the Internet in the near future. Web 3.0 allows users to
          take control over their private data, which makes the web more secure.
          <br />
          The core of Web 3.0 is blockchain technology which is decentralized
          and distributed digital ledger that records transactions across
          multiple computers in a secure and transparent manner. it consists of
          a chain of blocks, where each block contains a group of transactions,
          each block is linked to the previous one using cryptographic
          principles. For more information, read{" "}
          <strong>
            <a href="https://hegias.com/en/knowledge/web-3-0-metaverse-meaning-use-cases-differences-future/">
              here
            </a>
          </strong>
          <br />
          <br />
          <u> References</u>
          <br />
          [1] what is Web 2.0 :{" "}
          <u>
            <a href="https://hegias.com/en/knowledge/web-3-0-metaverse-meaning-use-cases-differences-future/">
              here
            </a>
          </u>
        </p>
      )}
      <button
        className="rounded border bg-sky-200 px-4 py-2 mt-2"
        onClick={handleMoreLess}
      >
        {open ? "Read less..." : "Read more..."}
      </button>
    </div>
  );
};

export default Blog2;
