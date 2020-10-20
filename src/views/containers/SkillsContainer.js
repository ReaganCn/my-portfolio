import React from "react";
import SkillsComponent from "../components/Skills";

const SkillsContainer = (props) => {
  const skills = props.data.map((el) => {
    return <SkillsComponent key={el.id} id={el.id} name={el.name} />;
  });
  return (
    <div id="skills-section" className="flex mt-48 mx-12">
      <span className="-ml-12 self-center flex flex-col relative">
        <p
          className="font-space-mono text-xs tracking-wider font-semibold"
          id="skills-header"
        >
          Skills
        </p>
      </span>
      <div id="skills-images" className="flex justify-between w-full ml-4">
        {skills}
      </div>
    </div>
  );
};

export default SkillsContainer;
