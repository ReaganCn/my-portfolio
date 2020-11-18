import React from "react";

const ProjectsComponent = (props) => {
  const isOdd = (number) => {
    if (number % 2 === 0) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <div
      id="project1"
      className={`flex mb-32 ${
        isOdd(props.id) && "md:flex-row-reverse"
      } flex-col md:flex-row md:w-auto w-11/12 mx-auto`}
    >
      <div
        id="img-section"
        className="md:w-2/4 w-full md:self-center md:ml-20 flex h-full md:my-0 my-10 mx-auto justify-between"
      >
        <img
          src={`public/imgs/projects/${props.title}.png`}
          className={`w-full self-center md:-mb-12`}
         
        />

        <div
          id="project-links"
          className={`md:w-11/12 md:self-center hidden`}

        >
          <div className="flex flex-col self-center text-lg mx-auto font-semibold">
            <span className="flex">
              <a href={`${props.github}`} target="_blank">
                <i className="fab fa-github self-center"></i>&nbsp; Github
              </a>
            </span>
            <br />
            <span className="flex">
              <a href={`${props.live}`} target="_blank">
                <i className="fas fa-bolt self-center"></i>&nbsp; Live
              </a>
            </span>
          </div>
        </div>
      </div>
      <div
        id="info"
        className="flex md:w-2/4 w-full flex-col mx-auto text-center"
      >
        <div
          id="title"
          className=" text-center md:text-xl text-lg font-semibold my-2"
        >
          <i className={`${props.icon}`}></i>
          <h2>{props.title}</h2>
        </div>
        <div
          id="description"
          className="md:w-2/3 w-full mx-auto md:text-base text-sm"
        >
          <p className="text-left md:mx-auto mx-2">{props.description}</p>
          <h3 className=" my-2 font-space-mono md:ml-1 mx-2 text-left">
            Technologies:
          </h3>
          <ul className="list-disc font-space-mono list-inside text-left ml-2">
            {props.technologies}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponent;
