import React from "react";

import ProjectsComponent from "../components/Projects";

const ProjectsContainer = (props) => {


  const projects = props.data.map((el) => {
    return (
      <ProjectsComponent
        key={el.id}
        id={el.id}
        title={el.title}
        icon={el.icon}
        description={el.description}
        technologies={el.technologies.map((item) => {
          return <li key={item}>{item}</li>;
        })}
        github={el.github}
        live={el.live}
      />
    );
  });
  return (
    <div
      id="projects"
      className="flex md:w-11/12 w-full mt-48 md:mx-12 flex-col relative h-full justify-center"
    >
      <span className="-ml-12 absolute mr-12">
        <p
          className=" font-space-mono text-xs tracking-wider font-bold"
          id="skills-header"
        >
          Projects
        </p>
      </span>
      <div className="m-3 text-center md:-mt-40 lg:mt-0 md:ml-0 -mt-24">
        <h1 className=" text-3xl font-bold">Projects done.</h1>
      </div>
      {projects}
    </div>
  );
};

export default ProjectsContainer;
