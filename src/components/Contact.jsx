import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact  flex flex-col  items-center h-90 pt-10 mt-0 text-center pb-24 pt-24">
      <h1 className="text-3xl pb-10 font-bold">
        Contact <span>me</span>
      </h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="max-w-2xl bg-white py-10 px-5 m-auto w-full mt-10">
          <div className="grid grid-cols-2 gap-4 max-w-xl m-auto">
            <div className="col-span-2 lg:col-span-1">
              <input
                type="text"
                className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                placeholder="Name"
                name="user_name"
              />
            </div>

            <div className="col-span-2 lg:col-span-1">
              <input
                type="text"
                className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                placeholder="Email Address"
                name="user_meail"
              />
            </div>

            <div className="col-span-2">
              <textarea
                cols="30"
                rows="8"
                className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
                placeholder="Message"
                name="message"
              ></textarea>
            </div>

            <div className="col-span-2 text-right">
              {/* <button
                type="submit"
                value="Send"
                className="py-3 px-6 bg-blue-500 text-white font-bold w-full sm:w-32"
              >
                Send
              </button> */}
              <input
                type="submit"
                value="Send"
                className="py-3 px-6 bg-blue-500 text-white font-bold w-full sm:w-32"
              />
            </div>
          </div>
        </div>
      </form>
      {/* <form className="mx-9 px-32 pt-6 pb-8 mb-0 justify-center justify-items-center">
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
      </form> */}
    </div>
  );
};

export default Contact;
