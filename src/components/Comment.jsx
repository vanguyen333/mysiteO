import React, { useState } from "react";
const Comment = () => {
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const handleInputChange = (event) => {
    setName(event.target.value);
  };
  const handleButtonClick = () => {
    setDisplayName(name);
  };
  return (
    <div className="comment">
      <h1 className="font-bold text-lg pt-10  pb-3"> Your message</h1>
      <input
        required
        type="text"
        className="border-solid border-gray-200 bg-gray-50 border-2 p-2 md:text-sm sm:w-1/4 mb-4"
        placeholder="Name *"
        name="user_name"
        value={name}
        onChange={handleInputChange}
      />
      <textarea
        id="message"
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..."
      ></textarea>
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 text-sm"
      >
        Enter
      </button>
      <p className="py-7 text-sm font-bold text-blue-700"> {displayName}</p>
    </div>
  );
};

export default Comment;
