import React from "react";
import SkillsComponent from "../components/Skills";
import Marquee from "../components/fx/Marquee";

const SkillsContainer = ({ data }) => (
  <div id="skills" className="skills">
    <p className="skills__label mono container">
      <span className="muted" aria-hidden="true">
        ###{" "}
      </span>
      stack i work with
    </p>
    <Marquee label="Skills" duration={70}>
      {data.map((el) => (
        <SkillsComponent key={el.id} name={el.name} logo={el.logo} />
      ))}
    </Marquee>
  </div>
);

export default SkillsContainer;
