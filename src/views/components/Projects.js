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
    <div id="project1" className={`flex mb-32 ${isOdd(props.id) && "flex-row-reverse"}`}>
      <div id="img-section" className="w-2/4 self-center ml-20 flex h-full">
        <img src={`public/imgs/projects/${props.title}.png`} className="w-full self-center -mb-12 " />
        <div id="project-links" className="flex flex-col self-center text-lg mx-auto font-semibold invisible">
          <span className="flex"><a href=""><i className="fab fa-github self-center"></i>&nbsp; Github</a> </span><br />
          <span className="flex"><a href=""><i className="fas fa-bolt self-center"></i>&nbsp; Live</a> </span>
        </div>
      </div>
      <div id="info" className="flex w-2/4 flex-col">
        <div id="title" className=" text-center text-xl font-semibold my-2">
          <i className={`${props.icon}`}></i>
          <h2>{props.title}</h2>
        </div>
        <div id="description" className="w-2/3 text-center mx-auto">
          <p className="text-left">{props.description}</p>
          <h3 className=" my-2 font-space-mono ml-1 text-left">
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
