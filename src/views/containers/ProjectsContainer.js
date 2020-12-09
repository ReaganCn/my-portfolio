import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

import ProjectsComponent from "../components/Projects";

const ProjectsContainer = (props) => {
  const [projects, setProjects] = useState(props.data);

  const handlers = useSwipeable({
    onSwiped: (eventdata) => console.log("Swiped Mzee!"),
    preventDefaultTouchmoveEvent: true,
    trackMouse: false,
  });

  useEffect(() => {
    const projectsModified = props.data.map((el) => {
      el.showLinks = false;
      return el;
    });
    setProjects(projectsModified);
  }, []);

  const mouseEnterImage = (id) => {
    const newProjects = projects.map((item) => {
      if (item.id === id) {
        item.showLinks = true;
      }
      return item;
    });
    setProjects(newProjects);
  };

  const mouseLeaveImage = (id) => {
    const newProjects = projects.map((item) => {
      if (item.id === id) {
        item.showLinks = false;
      }
      return item;
    });
    setProjects(newProjects);
  };

  const projectsDisplay = projects.map((el) => {
    return (
      <ProjectsComponent
        key={el.id}
        id={el.id}
        onMouseEnter={() => mouseEnterImage(el.id)}
        onMouseLeave={() => mouseLeaveImage(el.id)}
        swipeHandlers = {useSwipeable({
          onSwipedLeft: (eventdata) => {
            mouseEnterImage(el.id)
            setTimeout(()=> {
              mouseLeaveImage(el.id)
            }, 3500)
          },
          preventDefaultTouchmoveEvent: true,
          trackMouse: false,
        })}
        title={el.title}
        icon={el.icon}
        description={el.description}
        showLinks={el.showLinks}
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
      <div
        className="m-3 text-center md:-mt-40 lg:mt-0 md:ml-0 -mt-24"
        {...handlers}
      >
        <h1 className=" text-3xl font-bold">My projects.</h1>
      </div>
      {projectsDisplay}
    </div>
  );
};

export default ProjectsContainer;
