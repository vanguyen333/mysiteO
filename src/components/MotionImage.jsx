import React from "react";
import { useSpring, animated } from "react-spring";
const MotionImages = () => {
  const styles = useSpring({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
  });
  return (
    <animated.img
      className="h-52 items-center justify-center pl-20 pb-10"
      src="/imgs/tulip.png"
      alt="Tulip"
      style={styles}
    />
  );
};

export default MotionImages;
