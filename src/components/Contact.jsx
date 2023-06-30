import { useState } from "react";
const Contact = () => {
  return (
    <div className="contact  flex flex-col  items-center h-90 pt-10 mt-0 text-center pb-24 pt-24">
      <h1 className="text-3xl pb-10 font-bold">
        Contact <span>me</span>
      </h1>

      <form className="mx-9 px-32 pt-6 pb-8 mb-0 justify-center justify-items-center">
        <div className="mb-4">
          <label
            className="block text-gray-700  text-sm font-bold mb-2"
            htmlFor="username"
          >
            Name:
          </label>
          <input
            className=" text-left mb-2 shadow appearance-none border rounded w-full py-2 px-36   text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            // placeholder="Name"
            type="text"
          />
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              // htmlFor="email"
            >
              Email:
            </label>
            <input
              className="text-left mb-2 shadow appearance-none border rounded w-full py-2 px-36 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              // placeholder="Email"
              type="email"
            />
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                // htmlFor="message"
              >
                Your message:
              </label>
              <textarea
                rows="3"
                className="text-left  block p-2.5 shadow appearance-none border rounded w-full py-2 px-36 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                // placeholder="Message"
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
