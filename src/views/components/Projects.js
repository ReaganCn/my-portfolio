import React from "react";

const ProjectsComponent = (props) => {
  return (
    <div id="project1" className="flex mb-32">
      <div id="img-section" className="w-2/4 self-center ml-20 flex">
        <img src={`public/imgs/projects/${props.id}.png`} className="w-3/4 self-center" />
      </div>
      <div id="info" className="flex w-2/4 flex-col">
        <div id="title" className=" text-center text-xl font-semibold my-2">
          <i className={`fas ${props.icon}`}></i>
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
