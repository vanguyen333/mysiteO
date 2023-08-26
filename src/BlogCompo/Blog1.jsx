import { useSpring, animated } from "react-spring";
const Blog1 = () => {
  const styles = useSpring({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
  });
  return (
    <div>
      <h1 className="text-5xl font-bold pt-4 text-gray-700">
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
          Invaders game was, her dad told her to change it and started to teach
          her how to code. She was hooked on programming since then through
          building a project with her dad.
          <br />
          As on her Twitter saying: "I'm not a female coder, I'm a coder who
          happens to be female."
          <br />
          Getting over the barrier of negative thinkings towards her of being
          Asian and a woman, she instead focuses on things that she can change
          to build up her career. Her hard work and dedication have paid off. As
          now she is a renowned role model for many young girls and women to
          look up to.
          <br />
          Whenever mentioning Udemy, her name and courses are always on the
          recommended list about web development, Python, iOS App Development,
          and so on. Her coding programs have helped numerous people land a
          dream job.
        </p>
      </div>
    </div>
  );
};

export default Blog1;
