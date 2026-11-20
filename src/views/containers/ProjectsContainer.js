import React from "react";
import ProjectsComponent from "../components/Projects";
import SectionLabel from "../components/fx/SectionLabel";
import SplitLines from "../components/fx/SplitLines";

const ProjectsContainer = ({ data }) => (
  <section id="projects" className="section container">
    <SectionLabel index="01" label="projects" />
    <SplitLines
      as="h2"
      className="section__title"
      label="Selected projects."
      lines={[
        <>
          Selected <em className="serif">projects.</em>
        </>,
      ]}
    />
    <ol className="projects">
      {data.map((el, i) => (
        <ProjectsComponent key={el.id} index={i + 1} {...el} />
      ))}
    </ol>
  </section>
);

export default ProjectsContainer;
