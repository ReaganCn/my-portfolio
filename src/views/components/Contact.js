import React from "react";

const ContactComponent = (props) => {
  return (
    <div
      id="contact"
      className="flex w-full mx-auto mb-20 flex-col mt-12 h-full justify-center"
    >
      <span className="absolute">
        <p
          className="font-space-mono text-xs tracking-wider font-semibold md:ml-auto -ml-4"
          id="skills-header"
        >
          Contact
        </p>
      </span>
      <div
        className={`${
          props.alert.type.length === 0 ? "hidden" : ""
        }
        text-white px-6 py-2 border-0 md:rounded relative mb-3 ${
          props.alert.type === "success" ? "bg-green-600" : "bg-red-500"
        } md:w-8/12 mx-auto`}
      >
        <span className="text-xl inline-block mr-5 align-middle">
        {
          props.alert.type === "success" ? <i className="fas fa-info-circle"></i> : <i className="fas fa-exclamation-triangle"></i>
        } 
        </span>
        <span className="inline-block align-middle mr-8 text-sm">
          <b className="capitalize"></b> {props.alert.message}
        </span>
        <button 
        onClick={props.closeAlert}
        className="absolute bg-transparent text-xl font-semibold leading-none right-0 top-0 mt-3 mr-6 outline-none focus:outline-none">
          <span>×</span>
        </button>
      </div>
      <div className="m-3 text-center mt-0 md:ml-0">
        <h1 className=" text-3xl font-bold">Get in touch.</h1>
      </div>
      <form
        className="flex md:w-6/12 w-11/12 md:mx-auto flex-col mx-auto"
        onSubmit={props.onSubmit}
      >
        <div className="flex justify-between w-11/12 m-3">
          <span className="flex flex-col w-11/12 m-3 ml-0">
            <label htmlFor="name" className="m-2">
              Your name
            </label>
            <input
              type="text"
              name="name"
              value={props.data.name}
              onChange={props.onChange}
              className=" border border-black p-1 w-full h-8 outline-none text-black"
            />
          </span>
          <span className="flex flex-col w-11/12 m-3 mr-0">
            <label htmlFor="email" className="m-2">
              Your email
            </label>
            <input
              type="text"
              name="email"
              value={props.data.email}
              onChange={props.onChange}
              className={` ${
                props.validEmail
                  ? "border border-black"
                  : "border-2 border-red-500"
              } p-1 w-full h-8 outline-none text-black`}
            />
          </span>
        </div>
        <span className="flex flex-col w-11/12 m-3">
          <label htmlFor="email" className="m-2">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={props.data.subject}
            onChange={props.onChange}
            className=" border border-black p-1 w-full h-8 outline-none text-black"
          />
        </span>
        <span className="flex flex-col w-11/12 m-3">
          <label htmlFor="email" className="m-2">
            Message
          </label>
          <textarea
            type="text"
            name="message"
            value={props.data.message}
            onChange={props.onChange}
            className=" border border-black p-1 w-full h-32 outline-none text-black"
          ></textarea>
        </span>

        <button
          type="submit"
          id="submit-form"
          className={`border  w-4/12 md:w-2/12 h-10 mx-auto flex justify-center ${
            props.darkModeContact
              ? "bg-black text-white border-white hover:text-black hover:bg-white"
              : " bg-black text-white  m-3 border-black hover:text-black hover:bg-white"
          }`}
        >
          {props.loader ? (
            <span>
              <svg
                version="1.1"
                id="submit-loader"
                viewBox="0 0 100 100"
                enableBackground="new 0 0 0 0"
                className="h-8 w-8 self-center flex justify-around"
              >
                <rect
                  x="22"
                  y="35"
                  width="8"
                  height="20"
                  fill="#fff"
                  id="rec-custom"
                >
                  <animateTransform
                    attributeType="xml"
                    attributeName="transform"
                    type="translate"
                    values="0 0; 0 30; 0 0"
                    begin="0"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect
                  x="42"
                  y="35"
                  width="8"
                  height="20"
                  fill="#fff"
                  id="rec-custom"
                >
                  <animateTransform
                    attributeType="xml"
                    attributeName="transform"
                    type="translate"
                    values="0 0; 0 30; 0 0"
                    begin="0.2s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect
                  x="62"
                  y="35"
                  width="8"
                  height="20"
                  fill="#fff"
                  id="rec-custom"
                >
                  <animateTransform
                    attributeType="xml"
                    attributeName="transform"
                    type="translate"
                    values="0 0; 0 30; 0 0"
                    begin="0.4s"
                    dur="0.6s"
                    repeatCount="indefinite"
                  />
                </rect>
              </svg>
            </span>
          ) : (
            <span className="self-center">Submit</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactComponent;
