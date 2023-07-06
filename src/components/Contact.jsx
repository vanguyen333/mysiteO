// import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kqnxhfl",
        "template_abl7uyl",
        form.current,
        "QYSLB_8LCUzve4Qap"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
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
                name="user_email"
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
    </div>
  );
};

export default Contact;
