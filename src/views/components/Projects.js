import React from "react";
import Reveal from "./fx/Reveal";
import ScrambleText from "./fx/ScrambleText";
import useScramble from "../../hooks/useScramble";

const ProjectLink = ({ href, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="project__link mono">
    {label}
    <span className="project__arrow" aria-hidden="true">
      ↗
    </span>
  </a>
);

const ProjectsComponent = ({
  index,
  title,
  role,
  period,
  place,
  description,
  technologies,
  github,
  live,
}) => {
  const num = String(index).padStart(2, "0");
  const [frame, run] = useScramble(num, { duration: 350 });
  const hasLinks = !!(github || live);
  const meta = [role, period, place].filter(Boolean).join(" · ");

  return (
    <Reveal as="li" className="project" onMouseEnter={run}>
      <ScrambleText className="project__idx mono" text={num} frame={frame} />

      <div className="project__main">
        {meta && <p className="project__meta mono">{meta}</p>}
        <h3 className="project__title">{title}</h3>
        <p className="project__desc">{description}</p>
      </div>

      <div className="project__side">
        <ul className="project__tags" aria-label="Technologies">
          {technologies.map((t) => (
            <li key={t} className="tag-pill mono">
              {t}
            </li>
          ))}
        </ul>
        <div className="project__links">
          {github && <ProjectLink href={github} label="github" />}
          {live && <ProjectLink href={live} label="live" />}
          {!hasLinks && <span className="project__private mono">private · client work</span>}
        </div>
      </div>
    </Reveal>
  );
};

export default ProjectsComponent;
