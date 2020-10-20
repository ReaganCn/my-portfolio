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
      />
    );
  });
  return (
    <div
      id="projects"
      className="flex w-11/12 mt-48 mx-12 flex-col relative h-full justify-center"
    >
      <span className="-ml-12 absolute mr-12">
        <p
          className=" font-space-mono text-xs tracking-wider font-bold"
          id="skills-header"
        >
          Projects
        </p>
      </span>
      {projects}
    </div>
  );
};

export default ProjectsContainer;
