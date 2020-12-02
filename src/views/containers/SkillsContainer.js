import React from "react";
import SkillsComponent from "../components/Skills";

const SkillsContainer = (props) => {
  const skills = props.data.map((el) => {
    return <SkillsComponent key={el.id} id={el.id} name={el.name} />;
  });
  return (
    <div id="skills-section" className="flex md:mt-48 xl:mt-60 mt-12 md:mx-12 z-20">
      <span className="md:-ml-12 self-center relative hidden md:block">
        <p
          className="font-space-mono text-xs tracking-wider font-semibold"
          id="skills-header"
        >
          Skills
        </p>
      </span>
      <div id="skills-images" className="flex md:justify-between justify-around w-full flex-wrap lg:flex-no-wrap">
        {skills}
      </div>
    </div>
  );
};

export default SkillsContainer;
