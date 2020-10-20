import React from "react";

const ContactComponent = () => {
  return (
    <div
      id="contact"
      className="flex w-full mx-auto mb-20 flex-col mt-40 h-full justify-center"
    >
      <span className="absolute">
        <p
          className="font-space-mono text-xs tracking-wider font-semibold"
          id="skills-header"
        >
          Contact
        </p>
      </span>
      <div className="m-3 text-center mt-0">
        <h1 className=" text-3xl font-bold">Get in touch.</h1>
      </div>
      <form className="flex w-6/12 mx-auto flex-col">
        <div className="flex justify-between w-11/12 m-3">
          <span className="flex flex-col w-11/12 m-3 ml-0">
            <label htmlFor="name" className="m-2">
              Your name
            </label>
            <input
              type="text"
              name="name"
              className=" border border-black p-1 w-full h-8 outline-none"
            />
          </span>
          <span className="flex flex-col w-11/12 m-3 mr-0">
            <label htmlFor="email" className="m-2">
              Your email
            </label>
            <input
              type="text"
              name="email"
              className=" border border-black p-1 w-full h-8 outline-none"
            />
          </span>
        </div>
        <span className="flex flex-col w-11/12 m-3">
          <label htmlFor="email" className="m-2">
            Subject
          </label>
          <input
            type="text"
            name="email"
            className=" border border-black p-1 w-full h-8 outline-none"
          />
        </span>
        <span className="flex flex-col w-11/12 m-3">
          <label htmlFor="email" className="m-2">
            Message
          </label>
          <textarea
            type="text"
            name="email"
            className=" border border-black p-1 w-full h-32 outline-none"
          ></textarea>
        </span>

        <button
          type="submit"
          className="border border-black  w-2/12 h-10 mx-auto bg-black text-white hover:text-black hover:bg-white m-3"
        >
          {" "}
          Submit{" "}
        </button>
      </form>
    </div>
  );
};

export default ContactComponent;
