import React, { useState } from "react";
const Blog0 = () => {
  const researchTitles = [
    "I am capable of doing anything I want.",
    "I am capable, driven, and ready to achieve  my goals.",
    "I am a talented and successful person in every aspect of my life.",
    "I embrace difficulties and challenges as they are a crucial foundation for me to create opportunities.",
    "I am creating a work life that inspiries and motivates me",
    "I am grateful for another wonderful day where I can write great things in the next chapter in the book of my journey.",
    "I attract positivity and abundance into my life.",
    "I am resilient and can overcome any challenges.",
    "I am open to the abundance of the universe. Opportunites flow to be effortlessly, and I embrace them with graditude and enthusiasm.",
    "I am grateful for my body and treat it with love and care. I nourish it with healthy choices, exercise, and rest, allowing it to thrive and be a source of vitality.",
    "Every day, I am becoming healthier and stronger. I listen to my body's needs and make choices that support my well-being, both physically and mentally.",
    "I am confident in my abilities and trust that I can handle whatever challenges come my way. I believe in my skills and my capacity to learn and grow.",
    "I am comfortable in my own skin. I acknowledge my uniqueness, and I know that I bring value to every situation I encounter.",
    "I am deserving of success, and I am willing to put in the effort and persistence to achieve my goals. I attract positive outcomes because I believe in my journey.",
    "I am worthy of love, and I attract loving and supportive relationships into my life. I give love freely and receive it graciously.",
    "I communicate openly and honestly in my relationships. I am empathetic and understanding, creating a space for genuine connections and deep understanding.",
    "I am on a continuous journey of self-improvement. I embrace change, learn from my experiences, and use them to become the best version of myself.",
    "I am not defined by my past. I release any negative beliefs that hold me back and focus on the present moment, where I have the power to shape my future.",
    "I choose positivity and maintain an optimistic outlook on life. I focus on the good in every situation and express gratitude for the lessons and blessings that come my way.",
    "I radiate positivity, uplifting others with my words and actions. My positive energy has a ripple effect, creating a harmonious environment around me.",
  ];
  const getRandomResearchTitle = () => {
    return researchTitles[Math.floor(Math.random() * researchTitles.length)];
  };
  const [researchTitle, setResearchTitle] = useState(getRandomResearchTitle());

  const handleClick = () => {
    const newResearchTitle = getRandomResearchTitle();
    setResearchTitle(newResearchTitle);
  };
  return (
    <div>
      <h1 className="text-5xl font-bold pt-24">#0 Quote of the day</h1>
      <p className="pt-10 font-bold">
        Discover what your today's quote is, have fun!
      </p>
      <button
        onClick={handleClick}
        className="border px-2 py-2 mt-4 font-bold text-white rounded bg-blue-500"
      >
        Generate Quotes.
      </button>
      <h1 className="text-xl font-semibold pt-4">
        Random Quote: {researchTitle}
      </h1>
    </div>
  );
};

export default Blog0;
