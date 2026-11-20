import React from "react";

const SkillsComponent = ({ name, logo }) => (
  <li className="skill">
    {logo && (
      <img
        className="skill__logo"
        src={`public/imgs/skills_logos/${logo}`}
        alt=""
        draggable="false"
      />
    )}
    <span className="skill__name mono">{name}</span>
    <span className="skill__sep" aria-hidden="true">
      ✱
    </span>
  </li>
);

export default SkillsComponent;
