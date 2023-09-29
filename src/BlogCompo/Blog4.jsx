import { useState } from "react";
import { useSpring, animated } from "react-spring";
const Blog4 = () => {
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
      {" "}
      <h1 className="text-5xl font-bold pt-4 text-gray-700">
        #4 An Impossible Wooden Structure of a Ladder
      </h1>
      <p className="pt-4">
        {" "}
        The Loretto Chapel in Santa Fe, New Mexico, boasts an extraordinary feat
        of carpentry.
      </p>{" "}
      <br />
      {open && (
        <p>
          The renowned Loretto Chapel staircase in Santa Fe, New Mexico, has
          gained fame for two compelling reasons: the enigmatic identity of its
          creator and the remarkable physics underlying its construction. The
          fact that this structure stands without any central support has left
          many regarding it as a miraculous marvel. It is undeniably an
          architectural wonder in this regard. <br /> <br />
          <img src="imgs/woodenLadder.png" alt="" /> <br />
          In 1852, at the behest of the then Bishop of Santa Fe, Jean Baptiste
          Lamy, the Chapel of Our Lady of Light, inspired by the Sainte-Chapelle
          in Paris, was constructed. It was entrusted to the care of the Sisters
          of Loretto, who had journeyed from Kentucky to establish a school for
          girls.
          <br /> <br />
          Local folklore suggests that when the chapel was completed, builders
          encountered an unexpected challenge: there seemed to be no way to
          ascend from the nave to the choir on the second floor. Some claim it
          was a design oversight – a puzzle that the architect, Antonio Mouly,
          who had already passed away, could not rectify. However, it is
          unlikely that such a skilled architect would overlook designing access
          to the choir. Most likely, he envisioned a spiral staircase.
          Regardless, tradition has it that when the nuns insisted on a
          staircase, builders declared it impossible, arguing that a
          conventional ladder would consume too much space. They even suggested
          demolishing the choir.
          <br /> <br />
          Undeterred, the nuns prayed a novena to St. Joseph, the patron saint
          of carpenters, seeking an alternative solution. Upon completing the
          novena, a mysterious man appeared at the chapel's door, offering to
          construct a staircase on one condition: absolute privacy. This
          stranger locked himself in the chapel for three months armed with only
          basic tools like a saw and a square. Once the work was finished, he
          disappeared without seeking any compensation for his services. The
          resulting staircase, approximately six meters in height, makes two
          full spiraling turns before reaching the choir. According to some, the
          structure should have collapsed upon its first use, yet the central
          spiral staircase is ingeniously narrow, functioning as its own central
          support – an impressive architectural achievement. However, the
          original staircase remained unattached to any wall until 1887, when a
          railing was added, and the outer spiral was connected to a nearby
          pillar. <br />
          <br /> According to the same enduring traditions, the identity of the
          carpenter remains an unsolved mystery. There is no documentation to
          trace the origin of the wood used, though some local historians claim
          the nuns may hold such information in their archives. Throughout those
          three months, no one observed anyone entering or exiting the chapel.
          As the carpenter vanished before the Mother Superior could compensate
          him, the Sisters of Loretto offered a reward for anyone who could
          reveal his identity. Nevertheless, no one came forward. Consequently,
          the crafting of the staircase has been attributed to St. Joseph
          himself. <br />
          <br />
          <span>
            Source:{" "}
            <a href="   https://aleteia.org/2016/07/06/the-staircase-st-joseph-built-in-new-mexico/">
              click here
            </a>
          </span>
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

export default Blog4;
