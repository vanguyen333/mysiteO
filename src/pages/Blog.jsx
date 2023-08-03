import Header from "../components/Header";
import Footer from "../components/Footer";
import Comment from "../components/Comment";
import { useSpring, animated } from "react-spring";
const Blog = () => {
  const styles = useSpring({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
  });
  return (
    <div className="md:flex-row">
      <div className="md:w-3/4 mx-auto px-4 py-6">
        <h1 className="text-5xl font-bold pt-24">#0 Quote of the day</h1>
        <p>Discover what your today's quote is, have fun!</p>
        <h1 className="text-5xl font-bold pt-4">
          #1 Angela Yu: Empowering Women in Coding and Technology
        </h1>
        <animated.img
          className="border-none pt-4 w-96 shadow-xl"
          src="imgs/AngelaYu.jpg"
          alt=""
          style={styles}
        />
        <div className="text-left pt-4">
          <p>
            Started learning to code at the age of 12. Didn't like the way Space
            Invaders game was, her dad told her to change it and started to
            teach her how to code. She was hooked on programming since then
            through building a project with her dad.
            <br />
            As on her Twitter saying: "I'm not a female coder, I'm a coder who
            happens to be female."
            <br />
            Getting over the barrier of negative thinkings towards her of being
            Asian and a woman, she instead focuses on things that she can change
            to build up her career. Her hard work and dedication have paid off.
            As now she is a renowned role model for many young girls and women
            to look up to.
            <br />
            Whenever mentioning Udemy, her name and courses are always on the
            recommended list about web development, Python, iOS App Development,
            and so on. Her coding programs have helped numerous people land a
            dream job.
          </p>
        </div>
        <h1 className="text-5xl font-bold pt-4">
          <Comment />
          #2 Exploring Web 3.0: The Future of Online Technology
        </h1>
        <img
          className="border-none pt-4 w-full"
          src="imgs/web123.jpeg"
          alt="web123"
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
          Web 1.0 is considered the first stage of the World Wide Web where
          users have limited interaction with websites. During this era,
          websites typically featured static content presented through simple
          HTML pages. Users have limited opportunities to engage or interact on
          these early websites.
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
        </p>
        <p>
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
        <h1 className="text-5xl font-bold pt-4">#4 Thinking</h1>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
