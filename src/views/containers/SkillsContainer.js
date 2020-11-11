import React from "react";
import SkillsComponent from "../components/Skills";

const SkillsContainer = (props) => {
  const skills = props.data.map((el) => {
    return <SkillsComponent key={el.id} id={el.id} name={el.name} />;
  });
  return (
    <div id="skills-section" className="flex md:mt-48 mt-16 md:mx-12">
      <span className="md:-ml-12 self-center relative hidden md:block">
        <p
          className="font-space-mono text-xs tracking-wider font-semibold"
          id="skills-header"
        >
          Skills
        </p>
      </span>
      <div id="skills-images" className="flex justify-between w-full ml-4 flex-wrap">
        {skills}
      </div>
    </div>
  );
};

export default SkillsContainer;
